export function findMaxValueInArray(array) {
    return Math.max(...array);
}

export function findMinValueInArray(array) {
    return Math.min(...array);
}

export function findAverageValueInArray(array) {
    const sum = array.reduce((total, value) => total + value, 0);
    return sum / array.length;
}
