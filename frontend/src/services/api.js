const API_URL = import.meta.env.VITE_API_URL;

export async function fetchGames(search = "") {
    try {
        const res = await fetch(
            `${API_URL}/list?search=${encodeURIComponent(search)}`
        );
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error("Failed to fetch games:", error);
        return []; // Return empty array on error
    }
}
