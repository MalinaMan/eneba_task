import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
        onSearch(e.target.value);
    };

    const handleClear = () => {
        setSearchValue("");
        onSearch("");
    };

    return (
        <div style={{
            background: "linear-gradient(135deg, #4b1fa6 0%, #6b2fb5 100%)",
            padding: "12px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            gap: "30px"
        }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", minWidth: "auto" }}>
                <img
                    src="/pics/eneba-logo.png"
                    alt="Eneba"
                    style={{
                        height: "35px",
                        width: "auto",
                        objectFit: "contain",
                        marginLeft: "90px",
                    }}
                />
            </div>

            {/* Search Bar */}
            <div style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.1)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "8px",
                padding: "8px 16px",
                maxWidth: "500px"
            }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "10px", opacity: 0.8 }}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                    placeholder="Search games..."
                    value={searchValue}
                    onChange={handleSearch}
                    style={{
                        flex: 1,
                        background: "none",
                        border: "none",
                        color: "#fff",
                        fontSize: "16px",
                        outline: "none",
                        padding: "6px 0",
                        fontFamily: "'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                    }}
                />
                <style>{`
                    input::placeholder {
                        color: #fff !important;
                        opacity: 0.9;
                    }
                `}</style>
                {searchValue && (
                    <button
                        onClick={handleClear}
                        style={{
                            background: "none",
                            border: "none",
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: "18px",
                            cursor: "pointer",
                            marginLeft: "10px",
                            padding: "0",
                            transition: "color 0.2s"
                        }}
                        onMouseEnter={(e) => e.target.style.color = "rgba(255, 255, 255, 1)"}
                        onMouseLeave={(e) => e.target.style.color = "rgba(255, 255, 255, 0.6)"}
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Right Section */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                minWidth: "200px",
                justifyContent: "flex-end"
            }}>
                {/* Language Selector */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "13px",
                    cursor: "pointer",
                    fontFamily: "'Segoe UI', 'Roboto', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: "500"
                }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span>English EU | EUR</span>
                </div>

                {/* Icons */}
                <button
                    title="Favorites"
                    style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        opacity: 0.8,
                        fontSize: "24px",
                        cursor: "pointer",
                        padding: "3px",
                        marginTop: "5px",
                        transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.2)";
                        e.target.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.opacity = "0.8";
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button
                    title="Cart"
                    style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        opacity: 0.8,
                        fontSize: "24px",
                        cursor: "pointer",
                        padding: "3px",
                        marginTop: "5px",
                        transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.2)";
                        e.target.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.opacity = "0.8";
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </button>
                <button
                    title="Account"
                    style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        opacity: 0.8,
                        fontSize: "24px",
                        cursor: "pointer",
                        padding: "3px",
                        marginTop: "5px",
                        transition: "all 0.2s"
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = "scale(1.2)";
                        e.target.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.opacity = "0.8";
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </button>
            </div>
        </div>
    );
}