var climbStairs = function (n) {
  if (n === 0 || n === 1 || n === 2) return n

  let step1 = 1
  let step2 = 2
  let i = 3
  let ans

  while (i <= n) {
    ans = step1 + step2
    step1 = step2
    step2 = ans
    i++
  }

  return ans
}
