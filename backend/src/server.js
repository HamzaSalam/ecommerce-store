import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/v1/auth.routes.js';
import productRoutes from './routes/v1/product.routes.js';
import cartRoutes from './routes/v1/cart.routes.js';
import orderRoutes from './routes/v1/order.routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect Database
connectDB();

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'API is running...' });
});

// API Routes v1
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/orders', orderRoutes);

// Handle unregistered routes
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server v1 running on port ${PORT}`);
});