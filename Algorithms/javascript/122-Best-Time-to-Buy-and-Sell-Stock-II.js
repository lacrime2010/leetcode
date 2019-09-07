var maxProfit = function (prices) {
  var profit = 0

  prices.forEach(function (item, id) {
    if (id > 0) {
      if (item > prices[id - 1]) profit += item - prices[id - 1]
    }
  })

  return profit
}
