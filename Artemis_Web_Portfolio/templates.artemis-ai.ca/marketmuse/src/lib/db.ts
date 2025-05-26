import { Pool } from 'pg';

/**
 * Database connection pool for MarketMuse
 * TODO: Define tables (users, contents, templates, schedules)
 */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;