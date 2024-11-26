
export function prepareData(data = {}) {
    return Object.entries(data)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => ({
            name: key.charAt(0).toUpperCase() + key.slice(1),
            value
        }));
}