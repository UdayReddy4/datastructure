function hourglassSum(arr) {
    if (!Array.isArray(arr) || arr.length !== 6 || arr.some(row => !Array.isArray(row) || row.length !== 6)) {
        throw new Error("Invalid input: Array should be a 6x6 matrix.");
    }

    let maxSum = -Infinity;

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let currentSum = 
                arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }

    return maxSum;
}
module.exports=hourglassSum;