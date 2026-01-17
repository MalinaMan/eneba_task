import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const [games] = await pool.query("SELECT * FROM games LIMIT 5");
    const [prices] = await pool.query("SELECT * FROM price_list LIMIT 5");
    
    return res.status(200).json({
      success: true,
      games: games,
      prices: prices,
      gamesCount: games.length,
      pricesCount: prices.length
    });
  } catch (err) {
    return res.status(500).json({ 
      error: err.message,
      stack: err.stack 
    });
  }
}