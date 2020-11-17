/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  const len = s.length
  let n = 0

  for (let i = len - 1; i >= 0; i--) {
    n += (s.charCodeAt(i) - 64) * Math.pow(26, len - i - 1)
  }

  return n
}
