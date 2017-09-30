export function objKeys(object) {
    const result = [];
    for (const key in object) {
        result.push(key)
    }
    return result;
}

export function objValues(object) {
    const result = [];
    for (const key in object) {
        result.push(object[key])
    }
    return result;
}

export function objMap(object, predicate) {
    return objKeys(object).map((key, index) =>
        predicate.apply(object[key], key, index))
}