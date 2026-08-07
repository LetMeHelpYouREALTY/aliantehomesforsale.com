import { spawn } from 'child_process';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.text());

// CORS for local development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-vercel-signature'
  );
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Webhook endpoint for Vercel
app.post('/webhook', async (req, res) => {
  try {
    console.log('📨 Received webhook:', req.body);

    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (data.type === 'deployment.failed') {
      console.log('🚨 Deployment failed detected!');

      // Trigger the Cursor integration service
      await triggerCursorFix(data.payload);

      res.json({
        success: true,
        message: 'Cursor fix triggered',
        timestamp: new Date().toISOString(),
      });
    } else {
      res.json({
        success: true,
        message: 'Webhook received',
        type: data.type,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error('❌ Webhook error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

// Endpoint to manually trigger Cursor fix
app.post('/fix-deployment', async (req, res) => {
  try {
    const { projectId, deploymentId, error, logs } = req.body;

    console.log('🛠️ Manually triggering Cursor fix...');
    console.log('Project ID:', projectId);
    console.log('Deployment ID:', deploymentId);

    // Trigger the Cursor integration service
    await triggerCursorFix({ projectId, deploymentId, error, logs });

    res.json({
      success: true,
      message: 'Cursor fix completed',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('❌ Manual fix error:', error);
    res.status(500).json({
      error: 'Fix failed',
      message: error.message,
    });
  }
});

async function triggerCursorFix(deploymentData) {
  console.log('🚀 Starting Cursor integration service...');

  return new Promise((resolve, reject) => {
    const cursorService = spawn('node', ['cursor-integration-service.js'], {
      cwd: __dirname,
      env: {
        ...process.env,
        DEPLOYMENT_DATA: JSON.stringify(deploymentData),
      },
    });

    let output = '';

    cursorService.stdout.on('data', (data) => {
      const message = data.toString();
      output += message;
      console.log('📤 Cursor Service:', message.trim());
    });

    cursorService.stderr.on('data', (data) => {
      const message = data.toString();
      console.error('❌ Cursor Service Error:', message.trim());
    });

    cursorService.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Cursor integration service completed successfully');
        resolve(output);
      } else {
        console.error(`❌ Cursor integration service failed with code ${code}`);
        reject(new Error(`Service failed with code ${code}`));
      }
    });

    cursorService.on('error', (error) => {
      console.error('❌ Failed to start Cursor integration service:', error);
      reject(error);
    });
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Local webhook server running on http://localhost:${PORT}`);
  console.log(`📨 Webhook endpoint: http://localhost:${PORT}/webhook`);
  console.log(`🛠️ Manual fix endpoint: http://localhost:${PORT}/fix-deployment`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});

export default app;
