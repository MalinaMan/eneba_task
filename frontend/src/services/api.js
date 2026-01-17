export async function fetchGames(search = "") {
    try {
        const res = await fetch(
            `http://localhost:3002/list?search=${encodeURIComponent(search)}`
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
