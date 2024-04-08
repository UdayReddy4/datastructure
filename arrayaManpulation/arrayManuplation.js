function arrayManipulation(n, queries) {
    if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
        throw new Error("'n' must be a positive integer.");
    }

    if (!Array.isArray(queries) || queries.length === 0) {
        throw new Error("'queries' must be a non-empty array.");
    }

    let arr = new Array(n + 1).fill(0);
    for (let i = 0; i < queries.length; i++) {
        let [a, b, k] = queries[i];
        arr[a - 1] += k;
        arr[b] -= k;
    }

    let max = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        max = Math.max(max, sum);
    }

    return max;
}

module.exports = arrayManipulation; // Export the function for testing
