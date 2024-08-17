export const STORED_DATA = (() => {
    const storedData = localStorage.getItem("data");
    if (!storedData) {
        return [];
    }
    return JSON.parse(storedData);
})();
