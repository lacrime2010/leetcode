var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER

  var profit = 0;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i]

    const calProfit = prices[i] - min

    if (calProfit > profit) profit = calProfit
  }

  return profit
}
