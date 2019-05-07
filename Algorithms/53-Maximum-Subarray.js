var maxSubArray = function (nums) {
  let sum = 0

  return nums.reduce((max, current) => {
    sum = current + (sum > 0 ? sum : 0)

    return Math.max(max, sum)
  }, -Number.MAX_VALUE)
}
