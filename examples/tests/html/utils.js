function getMaxSubSum(arr) { // Тестируемая функция
    let maxSum = 0, currentSum = 0;
    
    for (let num of arr) {
        currentSum += num;
        maxSum = Math.max(maxSum, currentSum);
        if (currentSum < 0) currentSum = 0;
    }
    
    return maxSum;
}
