def min_bills_dp(amount, denominations):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # База: 0 купюр для суммы 0

    for coin in denominations:
        for i in range(coin, amount + 1):
            if dp[i - coin] + 1 < dp[i]:
                dp[i] = dp[i - coin] + 1

    return dp[amount] if dp[amount] != float('inf') else -1


denominations = [155, 45, 5]
amount = 190
result = min_bills_dp(amount, denominations)
print(f"Минимальное количество купюр: {result}")
