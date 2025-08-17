function findMinSet(amount, coins) {
    let bestSolution = null, minCoins = Infinity;

    function backtrack(remaining, startIdx, currentCoins) { // рекурсивный перебор
        if (remaining === 0) { // если набрали нужную сумму
            if (currentCoins.length < minCoins) { // и решение лучше
                minCoins = currentCoins.length;
                bestSolution = [...currentCoins]; // запомним его
            }
            return; // к следующей ветви рекурсии
        }

        for (let i = startIdx; i < coins.length; i++) { // оставшиеся, начиная с startIdx
            let coin = coins[i]; // берём очередной номинал монеты
            if (coin > remaining) continue; // если уже не входит - пропускаем
            let maxCount = Math.floor(remaining / coin); // максим возм кол-во текущ монеты
            
            for (let count = 1; count <= maxCount; count++) { // для всех допустимых количеств
                let newRemaining = remaining - coin * count;
                let newCoins = [...currentCoins, ...Array(count).fill(coin)];
                // к ранее выбранным монетам добавим count текущего номинала
                backtrack(newRemaining, i + 1, newCoins); // вызов для оставшейся суммы
            }
        }
    }

    backtrack(amount, 0, []); // запускаем рекурсию
    return bestSolution || [];
}


const coins = [155, 45, 5];
const amount = 190;
const answer = findMinSet(amount, coins);

if (answer.length === 0) {
    console.log(`Сумму ${amount} невозможно набрать данными монетами.`);
} else {
    console.log(`\nМинимальное количество монет: ${answer.length}`);
    console.log(`Использованные монеты: ${answer.join(', ')}`);
}
