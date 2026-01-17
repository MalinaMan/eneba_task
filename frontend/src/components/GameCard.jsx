export default function GameCard({ game }) {
    const getImage = (name) => {
        const images = {
            "FIFA 23": "/pics/fifa_23.jpg",
            "Red Dead Redemption 2": "/pics/red_dead_redemption_2.jpg",
            "Split Fiction": "/pics/split_fiction.jpg"
        };
        return images[name] || "https://via.placeholder.com/220x330";
    };

    const calculateFinalPrice = (price, discount) => {
        return (price - (price * discount / 100)).toFixed(2);
    };

    return (
        <div
            style={{
                background: "linear-gradient(135deg, #6b2fb5 0%, #5a1fa6 100%)",
                color: "#fff",
                borderRadius: "12px",
                padding: "10px",
                overflow: "hidden",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                cursor: "pointer",
                fontFamily: "'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(75, 31, 166, 0.5)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
            }}
        >
            {/* Image */}
            <div style={{ position: "relative", marginBottom: "10px" }}>
                <img
                    src={getImage(game.game_name)}
                    alt={game.game_name}
                    style={{
                        width: "100%",
                        borderRadius: "8px",
                        aspectRatio: "9/13",
                        objectFit: "cover",
                        display: "block"
                    }}
                />
            </div>

            {/* Title */}
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px", lineHeight: "1.3", fontFamily: "'Segoe UI', 'Roboto', 'Inter', sans-serif" }}>
                {game.game_name}
            </h3>

            {/* Region and Year */}
            <p style={{ fontSize: "14px", color: "#4dd9d9", marginBottom: "12px", fontFamily: "'Segoe UI', 'Roboto', 'Inter', sans-serif", fontWeight: "500" }}>
                {game.platform} • {game.product_year}
            </p>

            {/* Prices */}
            <div style={{ marginBottom: "14px" }}>
                {Array.isArray(game.prices) && game.prices.length > 0 ? (
                    game.prices.map((price, index) => {
                        const finalPrice = calculateFinalPrice(price.price, price.discount);
                        return (
                            <div key={index} style={{
                                marginBottom: "10px",
                                fontFamily: "'Segoe UI', 'Roboto', 'Inter', sans-serif"
                            }}>
                                {/* Region */}
                                <div style={{ fontSize: "14px", color: "#4dd9d9", marginBottom: "4px" }}>
                                    {price.region}
                                </div>

                                {/* Original Price with Discount */}
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                                    <span style={{ color: "#b0b0b0", textDecoration: "line-through", fontSize: "14px" }}>
                                        €{price.price}
                                    </span>
                                    {price.discount > 0 && (
                                        <span style={{
                                            color: "#4cff4c",
                                            fontWeight: "bold",
                                            fontSize: "14px",
                                            background: "rgba(76, 255, 76, 0.2)",
                                            padding: "2px 6px",
                                            borderRadius: "4px"
                                        }}>
                                            -{price.discount}%
                                        </span>
                                    )}
                                </div>

                                {/* Final Price */}
                                <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
                                    €{finalPrice}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div style={{ color: "#999", fontSize: "12px" }}>No prices available</div>
                )}
            </div>

            {/* Add to Cart Button */}
            <button
                style={{
                    width: "100%",
                    padding: "10px",
                    background: "linear-gradient(135deg, #4b1fa6 0%, #6b2fb5 100%)",
                    border: "none",
                    color: "#fff",
                    borderRadius: "6px",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "13px",
                    transition: "opacity 0.2s",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
                }}
                onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
            >
                Add to Cart
            </button>
        </div>
    );
}
