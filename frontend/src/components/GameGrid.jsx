import GameCard from "./GameCard";

export default function GameGrid({ games }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px",
                padding: "40px",
                maxWidth: "100%"
            }}
        >
            {games.map((game) => (
                <GameCard key={game.id + game.platform} game={game} />
            ))}
        </div>
    );
}
