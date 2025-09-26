import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS (so frontend can talk to backend)
app.use(cors());

// Parse JSON bodies (for POST requests)
app.use(express.json());

// Import auth routes
import authRoutes from './routes/auth.routes';

// Use auth routes under /api/auth
app.use('/api/auth', authRoutes);

// Root route - for testing
app.get('/', (req, res) => {
  res.json({ 
    message: "KrishiSahyog Backend LIVE! 🌾 Connected to Azure PostgreSQL",
    status: "success"
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ KrishiSahyog backend running on http://localhost:${PORT}`);
  console.log(`🔗 Visit http://localhost:${PORT} to test`);
});