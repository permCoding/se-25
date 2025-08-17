function findMinCoins(amount, coins) {
    // Сортируем монеты по убыванию для более эффективного перебора
    coins.sort((a, b) => b - a);
    
    let bestSolution = null;
    let minCoins = Infinity;

    // Рекурсивная функция для перебора всех комбинаций
    function backtrack(remaining, startIdx, currentCoins) {
        // Если набрали нужную сумму
        if (remaining === 0) {
            if (currentCoins.length < minCoins) {
                minCoins = currentCoins.length;
                bestSolution = [...currentCoins];
                console.log('\nвариант:');
                console.log(`Количество монет: ${currentCoins.length}`);
                console.log(`Монеты: ${currentCoins.join(', ')}`);
            }
            return;
        }

        // Если текущее решение уже хуже лучшего - отсекаем ветвь
        if (currentCoins.length >= minCoins) {
            return;
        }

        // Перебираем монеты, начиная с startIdx
        for (let i = startIdx; i < coins.length; i++) {
            const coin = coins[i];
            
            // Если монета слишком большая - пропускаем
            if (coin > remaining) continue;
            
            // Максимально возможное количество текущей монеты
            const maxCount = Math.floor(remaining / coin);
            
            // Пробуем все возможные количества от максимума до 1
            for (let count = maxCount; count >= 1; count--) {
                const newRemaining = remaining - coin * count;
                const newCoins = [...currentCoins, ...Array(count).fill(coin)];
                
                // Рекурсивный вызов для оставшейся суммы
                backtrack(newRemaining, i + 1, newCoins);
            }
        }
    }

    backtrack(amount, 0, []);
    
    return bestSolution || [];
}


const coins = [155, 45, 5];
const amount = 190;
const result = findMinCoins(amount, coins);

if (result.length === 0) {
    console.log(`Сумму ${amount} невозможно набрать данными монетами.`);
} else {
    console.log(`\nМинимальное количество монет: ${result.length}`);
    console.log(`Использованные монеты: ${result.join(', ')}`);
}
