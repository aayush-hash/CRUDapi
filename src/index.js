import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import errroHandling from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors()); // ⚠️ make sure to call cors()

//routes
app.use('/api',userRoutes)

//errorhadling
app.use(errroHandling)

//create table before starting server
createUserTable();



// Test PostgreSQL connection
app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT current_database()');
        res.send(`The database name is: ${result.rows[0]['current_database']}`);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Database connection error');
    }
});

// Server running
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
