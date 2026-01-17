import { db } from "../db.js";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { search = "" } = req.query;
    let query = `
      SELECT 
        g.ID as id, 
        g.game_name, 
        g.platform, 
        g.product_year, 
        p.region, 
        p.price, 
        p.discount
      FROM games g
      LEFT JOIN price_list p ON g.ID = p.game_ID
    `;
    
    let params = [];
    
    if (search && search.trim()) {
      query += ` WHERE g.game_name LIKE ?`;
      params = [`%${search}%`];
    }
    
    query += ` ORDER BY g.game_name, p.region`;
    
    const [rows] = await db.query(query, params);
    
    const gamesMap = {};
    rows.forEach(row => {
      if (!gamesMap[row.id]) {
        gamesMap[row.id] = {
          id: row.id,
          game_name: row.game_name,
          platform: row.platform,
          product_year: row.product_year,
          prices: []
        };
      }
      
      if (row.region && row.price !== null) {
        gamesMap[row.id].prices.push({
          region: row.region,
          price: parseFloat(row.price),
          discount: parseInt(row.discount) || 0
        });
      }
    });
    
    const games = Object.values(gamesMap);
    
    return res.status(200).json(games);
  } catch (err) {
    console.error("Error in /api/list:", err);
    return res.status(500).json({ 
      error: "Database error", 
      details: err.message 
    });
  }
}