import { db } from "../db.js";

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
    const [games] = await db.query("SELECT * FROM games");
    const [prices] = await db.query("SELECT * FROM price_list");
    
    return res.status(200).json({
      games: games,
      prices: prices,
      gamesCount: games.length,
      pricesCount: prices.length
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}