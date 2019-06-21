var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  if (x < 10) return true

  let temp = 0
  while (x > temp) {
    temp = x % 10 + temp * 10

    x = parseInt(x / 10)
  }

  return (temp === x) || (parseInt(temp / 10) === x)
}
