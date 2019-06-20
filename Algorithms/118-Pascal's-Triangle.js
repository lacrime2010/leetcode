// Solution 1
var generate = function (numRows) {
  if (!numRows) return []

  let row = 1
  let ret = [[1]]

  while (ret.length < numRows) {
    let level = [1], i = 0

    while (++i < row) level.push(ret[row - 1][i - 1] + ret[row - 1][i])

    ret[row++] = [...level, 1]
  }

  return ret
}
