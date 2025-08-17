function getMinAmount(limit, moneys) {
    const dp = new Array(limit + 1).fill(Infinity); // инициализируем DP-массив для всех пределов
    dp[0] = 0; // это база DP: 0 купюр для суммы 0
    const lastCoin = new Array(limit + 1).fill(-1); // храним для каждого лимита последнюю взятую купюру

    for (let coin of moneys) {
        for (let i = coin; i <= limit; i++) {
            if (dp[i - coin] + 1 < dp[i]) { // если есть вариант с меньшим кол-вом купюр
                dp[i] = dp[i - coin] + 1; // то запомним его
                lastCoin[i] = coin; // и запишем последнюю взятую купюру
            }
        }
    }

    if (dp[limit] === Infinity) { // если сумму набрать нельзя
        return { count: -1, coins: [] };
    }

    let coins = [], coin = null, remaining = limit;
    while (remaining > 0) { // тут восстановим набор купюр
        coin = lastCoin[remaining];
        coins.push(coin);
        remaining -= coin;
    }

    return { count: dp[limit], coins: coins.sort((a, b) => b - a) };
}


const moneys = [155, 45, 5]; // номиналы монет
const limit = 190; // сколько нужно набрать
const result = getMinAmount(limit, moneys);

if (result.count === -1) {
    console.log(`Сумму ${limit} невозможно набрать данным набором купюр.`);
} else {
    console.log(`Минимальное количество купюр: ${result.count}`);
    console.log(`Использованные купюры: ${result.coins.join(', ')}`);
}