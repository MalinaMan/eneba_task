import { useEffect, useState } from "react";
import { fetchGames } from "../services/api";
import SearchBar from "../components/SearchBar";
import GameGrid from "../components/GameGrid";

export default function Home() {
    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchGames(search).then((data) => {
            setGames(data);
            setLoading(false);
        });
    }, [search]);

    useEffect(() => {
        fetchGames().then((data) => {
            setGames(data);
            setLoading(false);
        });
    }, []);

    return (
        <div style={{
            background: "linear-gradient(135deg, #4b1fa6 0%, #6b2fb5 100%)",
            minHeight: "100vh",
            margin: 0,
            padding: 0
        }}>
            <SearchBar onSearch={setSearch} />
            {games.length > 0 && (
                <div style={{ padding: "20px 40px", color: "#fff", fontSize: "14px", fontFamily: "'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
                    Results found: {games.length}
                </div>
            )}
            <GameGrid games={games} />
        </div>
    );
}
