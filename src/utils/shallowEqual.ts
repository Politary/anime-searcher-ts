export function shallowEqual(object1: {}, object2: {}) {
    return (
        Object.entries(object1).toString() ===
        Object.entries(object2).toString()
    );
}
