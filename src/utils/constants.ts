export const STORED_TODO_LIST = (() => {
    const storedData = localStorage.getItem("data");
    if (!storedData) {
        return [];
    }
    return JSON.parse(storedData);
})();

export const STORED_COMPLETED_TODOS_COUNT = (() => {
    const storedCount = localStorage.getItem("count");
    if (!storedCount) {
        return 0;
    }
    return Number(storedCount);
})();
