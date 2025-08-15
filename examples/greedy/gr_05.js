function getMinAmount(amount, denominations) {
    const dp = new Array(amount + 1).fill(Infinity); // инициализация DP-массива
    dp[0] = 0; // База DP: 0 купюр для суммы 0

    const lastCoin = new Array(amount + 1).fill(-1); // это для хранения последней взятой купюры для каждого лимита

    for (const coin of denominations) {
        for (let i = coin; i <= amount; i++) {
            if (dp[i - coin] + 1 < dp[i]) {
                dp[i] = dp[i - coin] + 1;
                lastCoin[i] = coin; // тут запоминаем последнюю взятую купюру
            }
        }
    }

    if (dp[amount] === Infinity) { // если сумму набрать нельзя
        return { count: -1, coins: [] };
    }

    let coins = [], coin = null, remaining = amount;
    while (remaining > 0) { // тут восстановим набор купюр
        coin = lastCoin[remaining];
        coins.push(coin);
        remaining -= coin;
    }

    return { count: dp[amount], coins: coins.sort((a, b) => b - a) };
}

// Пример использования
const denominations = [155, 45, 5]; // номиналы монет
const amount = 190; // сколько нужно набрать
const result = getMinAmount(amount, denominations);

if (result.count === -1) {
    console.log(`Сумму ${amount} невозможно набрать данными купюрами.`);
} else {
    console.log(`Минимальное количество купюр: ${result.count}`);
    console.log(`Использованные купюры: ${result.coins.join(', ')} руб.`);
}