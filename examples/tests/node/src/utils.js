export default function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;

    for (let num of arr) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }

    return maxSum;
}
