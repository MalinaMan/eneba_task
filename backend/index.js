import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

// Test endpoint to check database
app.get("/test", async (req, res) => {
    try {
        const [games] = await db.query("SELECT * FROM games");
        const [prices] = await db.query("SELECT * FROM price_list");
        res.json({
            games: games,
            prices: prices,
            gamesCount: games.length,
            pricesCount: prices.length
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/list", async (req, res) => {
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

        if (search.trim()) {
            query += ` WHERE g.game_name LIKE ?`;
            params = [`%${search}%`];
        }

        query += ` ORDER BY g.game_name, p.region`;

        console.log("Executing query:", query);
        console.log("With params:", params);

        const [rows] = await db.query(query, params);

        console.log("Query result:", rows);

        // Group results by game
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
        console.log("Games to send:", games);
        res.json(games);
    } catch (err) {
        console.error("Error in /list:", err);
        res.status(500).json({ error: "Database error", details: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
