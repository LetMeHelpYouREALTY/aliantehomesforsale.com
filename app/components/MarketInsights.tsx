'use client';

import { useId } from 'react';

export default function MarketInsights() {
  const marketHeadingId = useId();
  const marketSectionId = useId();

  const requestMarketReport = () => {
    alert(
      'This would open a form to request a detailed market report with current Aliante real estate trends and data.'
    );
  };

  return (
    <section className="market-insights" id={marketSectionId} aria-labelledby={marketHeadingId}>
      <div className="container">
        <h2 id={marketHeadingId} style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Aliante real estate market snapshot
        </h2>
        <p
          style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', opacity: '0.9' }}
        >
          Use live MLS search for current prices and inventory in North Las Vegas 89084
        </p>

        <div className="insights-grid">
          <div className="insight">
            <h3>MLS</h3>
            <p>
              Live listings
              <br />
              <small>Updated about every 15 minutes</small>
            </p>
          </div>
          <div className="insight">
            <h3>CMA</h3>
            <p>
              Village-level comps
              <br />
              <small>Not a valley-wide average</small>
            </p>
          </div>
          <div className="insight">
            <h3>89084</h3>
            <p>
              Aliante ZIP focus
              <br />
              <small>North Las Vegas hyperlocal</small>
            </p>
          </div>
          <div className="insight">
            <h3>HOA</h3>
            <p>
              Confirm dues in CC&amp;Rs
              <br />
              <small>Varies by village and sub-association</small>
            </p>
          </div>
          <div className="insight">
            <h3>Builders</h3>
            <p>
              Lennar, Horton, and more
              <br />
              <small>Register your agent before models</small>
            </p>
          </div>
          <div className="insight">
            <h3>PITI</h3>
            <p>
              Estimate principal &amp; interest
              <br />
              <small>Not a rate lock or lender quote</small>
            </p>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            background: 'rgba(255,255,255,0.1)',
            padding: '2rem',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Major Development Activity in Aliante</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              textAlign: 'left',
              marginTop: '2rem',
            }}
          >
            <div>
              <h4 style={{ color: '#97d8c4' }}>🏗️ Villages at Tule Springs</h4>
              <p>
                Major D.R. Horton corridor at Tule Springs / Heartland. Phases open and
                close—confirm current specs on the builder page.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#97d8c4' }}>🌟 Sun City Aliante Expansion</h4>
              <p>
                Pulte/Del Webb continuing expansion with new phases of active adult homes and
                enhanced amenities.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#97d8c4' }}>🏪 Commercial Development</h4>
              <p>
                New shopping centers, restaurants, and medical facilities planned to support growing
                population.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button
              type="button"
              className="nav-cta"
              style={{ background: 'rgba(255,255,255,0.2)', marginRight: '1rem' }}
              onClick={requestMarketReport}
            >
              Get Detailed Market Report
            </button>
            <a href="#contact" className="nav-cta" style={{ background: '#97d8c4', color: '#333' }}>
              Schedule Market Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
