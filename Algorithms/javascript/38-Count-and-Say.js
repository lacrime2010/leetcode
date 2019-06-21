var countAndSay = function (n) {
  if (n === 1) return '1'

  const str = countAndSay(n - 1) + '*'
  let count = 1
  let s = ''

  for (var i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      s = s + count + str[i]
      count = 1
    }
  }

  return s
}
