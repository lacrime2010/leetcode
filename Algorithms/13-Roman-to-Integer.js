var romanToInt = function (s) {
  let roman = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 }
  let response = 0
  let p = 'I'

  for (let i = s.length - 1; i >= 0; i--) {
    [response, p] = roman[s[i]] < roman[p] ? [response - roman[s[i]], s[i]] : [response + roman[s[i]], s[i]]
  }

  return response
}
