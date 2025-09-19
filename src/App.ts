import express from 'express';
import cors from 'cors';
import Routes from './Routes/index.route';
import errorHandler from './Middleware/errorhandler.middleware';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes Declaration
app.use('/api', Routes);

// Error Handler
app.use(errorHandler);

export { app };
