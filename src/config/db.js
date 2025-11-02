import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();



const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: String(process.env.DB_PASSWORD), // ensures string
  port: Number(process.env.DB_PORT),
});

pool.on('connect', () => console.log('Database connected'));
export default pool;

