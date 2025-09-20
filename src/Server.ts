import dotenv from 'dotenv';
import { app } from './App';
import PrismaConnection from './DB/Connection.js';

// Environment variable configuration
dotenv.config({
  path: './.env',
});

// Connect to Neon;
async function StartServer() {
  try {
    await PrismaConnection.$connect();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(" Error starting server:", error);
    process.exit(1);
  }
}

StartServer();
