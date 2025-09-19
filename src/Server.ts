import dotenv from 'dotenv';
import { app } from './App';
import PrismaConnection from './DB/Connection.js';

// Environment variable configuration
dotenv.config({
  path: './.env',
});

// Connect to Neon;
async function StartServer() {
  await PrismaConnection.$connect();
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

StartServer()
  .catch((error) => console.log(error))
  .finally(() => PrismaConnection.$disconnect());
