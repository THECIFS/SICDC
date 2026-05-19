import pkg from 'pg'
const { Pool } = pkg
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    user: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    ssl: false
})
