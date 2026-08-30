'use client';

import { useEffect, useRef, useState } from 'react';

interface RealScoutWidgetProps {
  agentEncodedId: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
}

export default function RealScoutWidget({
  agentEncodedId,
  sortOrder = 'PRICE_HIGH',
  listingStatus = 'For Sale,For Rent',
  propertyTypes = 'MF,SFR,OTHER,LAL',
  priceMin = '450000',
  priceMax = '750000',
}: RealScoutWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<
    'loading' | 'script-loading' | 'script-loaded' | 'widget-created' | 'error'
  >('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    console.log('🔍 RealScoutWidget: Starting initialization...');

    // Add a small delay to ensure DOM is fully ready
    const initTimer = setTimeout(() => {
      try {
        console.log('🔍 RealScoutWidget: DOM ready, starting initialization...');

        // Check network connectivity
        if (!navigator.onLine) {
          console.warn('⚠️ RealScoutWidget: Network appears to be offline');
          setError('Network appears to be offline. Please check your internet connection.');
          setStatus('error');
          return;
        }

        // Check if we can reach external domains
        console.log('🌐 RealScoutWidget: Testing network connectivity...');
        fetch('https://em.realscout.com/favicon.ico', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-cache',
        })
          .then(() => {
            console.log('✅ RealScoutWidget: Network connectivity confirmed');
          })
          .catch((err) => {
            console.warn('⚠️ RealScoutWidget: Cannot reach RealScout domain:', err);
          });

        setStatus('script-loading');

        // Add retry event listener
        const handleRetry = () => {
          console.log('🔄 RealScoutWidget: Retry requested');
          setStatus('script-loading');
          setError('');
          // Re-run the initialization logic
          initializeWidget();
        };

        window.addEventListener('retry', handleRetry);

        // Initialize widget function
        function initializeWidget() {
          // Check if RealScout component is already available
          if (customElements.get('realscout-office-listings')) {
            console.log('✅ RealScoutWidget: Component already available');
            setStatus('script-loaded');
            createWidget();
            return;
          }

          // Check if script is already in the document
          const existingScript = document.querySelector(
            'script[src*="realscout-web-components.umd.js"]'
          );
          if (existingScript) {
            console.log('📜 RealScoutWidget: Script already exists, waiting for load...');
            // Wait a bit for the script to load
            setTimeout(() => {
              if (customElements.get('realscout-office-listings')) {
                setStatus('script-loaded');
                createWidget();
              } else {
                setError('Script exists but component not registered');
                setStatus('error');
              }
            }, 2000);
            return;
          }

          console.log('📥 RealScoutWidget: Loading RealScout script...');

          // Helper function to load script
          function loadScript() {
            return new Promise<void>((resolve, reject) => {
              console.log('📥 RealScoutWidget: Creating script element...');
              const script = document.createElement('script');
              script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
              script.type = 'module';
              script.async = true;
              script.crossOrigin = 'anonymous';

              console.log('📥 RealScoutWidget: Script element created with src:', script.src);

              // Add integrity hash if available (for security)
              // script.integrity = 'sha384-...';

              // Add timeout for script loading
              const timeout = setTimeout(() => {
                console.error('⏰ RealScoutWidget: Script loading timeout after 15 seconds');
                reject(new Error('Script loading timeout - network may be slow'));
              }, 15000); // 15 second timeout

              script.onload = () => {
                clearTimeout(timeout);
                console.log('✅ RealScoutWidget: Script loaded successfully');
                resolve();
              };

              script.onerror = (event) => {
                clearTimeout(timeout);
                console.error('❌ RealScoutWidget: Script failed to load', event);
                reject(new Error('Failed to load RealScout script'));
              };

              console.log('📥 RealScoutWidget: Appending script to document.head...');
              document.head.appendChild(script);
              console.log('📥 RealScoutWidget: Script appended to document.head');
            });
          }

          // Load script and wait for component registration
          console.log('🚀 RealScoutWidget: Calling loadScript()...');
          loadScript()
            .then(() => {
              console.log(
                '✅ RealScoutWidget: Script loaded, waiting for component registration...'
              );
              // Wait for the component to register with exponential backoff
              let attempts = 0;
              const maxAttempts = 10;
              const checkComponent = () => {
                attempts++;
                if (customElements.get('realscout-office-listings')) {
                  console.log('✅ RealScoutWidget: Component registered successfully');
                  setStatus('script-loaded');
                  createWidget();
                } else if (attempts < maxAttempts) {
                  console.log(
                    `⏳ RealScoutWidget: Component not ready, attempt ${attempts}/${maxAttempts}`
                  );
                  // Check if there are any console errors that might indicate why the component didn't register
                  setTimeout(
                    () => {
                      // Try to detect common issues
                      const scripts = document.querySelectorAll('script[src*="realscout"]');
                      if (scripts.length > 1) {
                        console.warn(
                          '⚠️ RealScoutWidget: Multiple RealScout scripts detected - this may cause conflicts'
                        );
                      }
                      checkComponent();
                    },
                    Math.min(1000 * 2 ** (attempts - 1), 5000)
                  );
                } else {
                  console.error(
                    '❌ RealScoutWidget: Component failed to register after maximum attempts'
                  );
                  // Try to provide more specific error information
                  const script = document.querySelector(
                    'script[src*="realscout-web-components.umd.js"]'
                  ) as HTMLScriptElement;
                  if (script) {
                    console.error(
                      '❌ RealScoutWidget: Script element exists but component not registered'
                    );
                    console.error('❌ RealScoutWidget: Script src:', script.src);
                    console.error('❌ RealScoutWidget: Script type:', script.type);
                    console.error('❌ RealScoutWidget: Script async:', script.async);
                  }
                  setError(
                    'Script loaded but component not registered. This may indicate a script loading issue or browser compatibility problem.'
                  );
                  setStatus('error');
                }
              };
              checkComponent();
            })
            .catch((err) => {
              console.error('❌ RealScoutWidget: Script loading failed', err);
              setError('Failed to load RealScout script');
              setStatus('error');
            });
        }

        function createWidget() {
          if (!containerRef.current) return;

          console.log('🏗️ RealScoutWidget: Creating widget element...');

          // Clear the container
          containerRef.current.innerHTML = '';

          try {
            // Create the RealScout component
            const widget = document.createElement('realscout-office-listings');

            // Set all attributes
            widget.setAttribute('agent-encoded-id', agentEncodedId);
            widget.setAttribute('sort-order', sortOrder);
            widget.setAttribute('listing-status', listingStatus);
            widget.setAttribute('property-types', propertyTypes);
            widget.setAttribute('price-min', priceMin);
            widget.setAttribute('price-max', priceMax);

            // Add some basic styling to ensure visibility
            widget.style.cssText = `
              width: 100% !important;
              min-height: 400px !important;
              display: block !important;
              border: 2px solid #3A8DDE !important;
              border-radius: 8px !important;
              padding: 20px !important;
              background-color: #f8f9fa !important;
              margin: 0 !important;
              overflow: visible !important;
            `;

            console.log('📋 RealScoutWidget: Widget created with attributes:', {
              'agent-encoded-id': agentEncodedId,
              'sort-order': sortOrder,
              'listing-status': listingStatus,
              'property-types': propertyTypes,
              'price-min': priceMin,
              'price-max': priceMax,
            });

            // Append to container
            containerRef.current.appendChild(widget);

            console.log('✅ RealScoutWidget: Widget appended to container');
            setStatus('widget-created');

            // Verify widget is visible
            setTimeout(() => {
              if (containerRef.current) {
                const widgetElement = containerRef.current.querySelector(
                  'realscout-office-listings'
                ) as HTMLElement;
                if (widgetElement) {
                  console.log('🔍 RealScoutWidget: Widget dimensions:', {
                    offsetWidth: widgetElement.offsetWidth,
                    offsetHeight: widgetElement.offsetHeight,
                    clientWidth: widgetElement.clientWidth,
                    clientHeight: widgetElement.clientHeight,
                    computedStyle: window.getComputedStyle(widgetElement).display,
                  });

                  // Check if widget is actually visible
                  if (widgetElement.offsetWidth === 0 || widgetElement.offsetHeight === 0) {
                    console.warn('⚠️ RealScoutWidget: Widget has zero dimensions - might be hidden');
                    setError('Widget created but appears to be hidden');
                  }
                }
              }
            }, 2000);
          } catch (err) {
            console.error('❌ RealScoutWidget: Error creating widget:', err);
            setError(`Error creating widget: ${err}`);
            setStatus('error');
          }
        }

        // Start initialization
        console.log('🚀 RealScoutWidget: Calling initializeWidget()...');
        initializeWidget();

        // Cleanup function for this scope
        return () => {
          window.removeEventListener('retry', handleRetry);
        };
      } catch (err) {
        console.error('❌ RealScoutWidget: Initialization error:', err);
        setError(`Initialization error: ${err}`);
        setStatus('error');
        return;
      }
    }, 100); // 100ms delay to ensure DOM is ready

    // Cleanup function for useEffect
    return () => {
      clearTimeout(initTimer);
    };
  }, [agentEncodedId, sortOrder, listingStatus, propertyTypes, priceMin, priceMax]);

  return (
    <div
      ref={containerRef}
      className="realscout-widget-container"
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        border: '2px solid #3A8DDE',
        minHeight: '400px',
        position: 'relative',
      }}
    >
      {status === 'loading' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>🔄 Initializing RealScout Widget...</h3>
        </div>
      )}

      {status === 'script-loading' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>📥 Loading RealScout Script...</h3>
          <p>Please wait while we load the property listings...</p>
        </div>
      )}

      {status === 'script-loaded' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>🏗️ Creating Widget...</h3>
          <p>Script loaded, creating property listings widget...</p>
        </div>
      )}

      {status === 'widget-created' && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3>✅ Widget Created!</h3>
          <p>
            RealScout widget has been created. If you don't see listings, check the browser console
            for details.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#dc3545' }}>
          <h3>❌ Error Loading Widget</h3>
          <p>{error}</p>
          <p>Please check the browser console for more details.</p>

          <div style={{ marginTop: '20px' }}>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                padding: '10px 20px',
                backgroundColor: '#3A8DDE',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              Reload Page
            </button>

            <button
              type="button"
              onClick={() => {
                setStatus('loading');
                setError('');
                // Retry loading
                setTimeout(() => {
                  if (containerRef.current) {
                    const event = new Event('retry');
                    window.dispatchEvent(event);
                  }
                }, 100);
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#16B286',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Retry Loading
            </button>
          </div>

          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
            }}
          >
            <h4>Alternative Options:</h4>
            <p>If the widget continues to fail, you can:</p>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>
                Visit our{' '}
                <a href="/homes-for-sale" style={{ color: '#3A8DDE' }}>
                  Homes for Sale
                </a>{' '}
                page
              </li>
              <li>
                Use our{' '}
                <a href="/search" style={{ color: '#3A8DDE' }}>
                  Advanced Search
                </a>{' '}
                tool
              </li>
              <li>
                <a href="/contact" style={{ color: '#3A8DDE' }}>
                  Contact us
                </a>{' '}
                for direct assistance
              </li>
            </ul>
          </div>

          {/* Fallback Content */}
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              backgroundColor: '#fff',
              borderRadius: '8px',
              border: '1px solid #dee2e6',
            }}
          >
            <h4>🏠 Featured Aliante Properties</h4>
            <p>While we resolve the widget issue, here are some highlights:</p>
            <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
              <div
                style={{
                  padding: '15px',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  marginBottom: '15px',
                }}
              >
                <h5 style={{ margin: '0 0 10px 0', color: '#3A8DDE' }}>
                  Luxury Home in The Prominence
                </h5>
                <p style={{ margin: '0 0 8px 0' }}>4 bed, 3.5 bath | 3,200 sq ft | $750,000</p>
                <p style={{ margin: '0', fontSize: '14px', color: '#6c757d' }}>
                  Gated community with golf course views
                </p>
              </div>
              <div
                style={{
                  padding: '15px',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  marginBottom: '15px',
                }}
              >
                <h5 style={{ margin: '0 0 10px 0', color: '#3A8DDE' }}>
                  Family Home in Desert Willows
                </h5>
                <p style={{ margin: '0 0 8px 0' }}>3 bed, 2.5 bath | 2,100 sq ft | $485,000</p>
                <p style={{ margin: '0', fontSize: '14px', color: '#6c757d' }}>
                  Excellent schools, spacious lot
                </p>
              </div>
              <div style={{ padding: '15px', border: '1px solid #e9ecef', borderRadius: '6px' }}>
                <h5 style={{ margin: '0 0 10px 0', color: '#3A8DDE' }}>
                  New Construction in Aliante Springs
                </h5>
                <p style={{ margin: '0 0 8px 0' }}>4 bed, 3 bath | 2,800 sq ft | $620,000</p>
                <p style={{ margin: '0', fontSize: '14px', color: '#6c757d' }}>
                  Builder incentives available
                </p>
              </div>
            </div>
            <p style={{ marginTop: '15px', fontSize: '14px' }}>
              <a href="/homes-for-sale" style={{ color: '#3A8DDE', textDecoration: 'underline' }}>
                View all Aliante MLS listings →
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
