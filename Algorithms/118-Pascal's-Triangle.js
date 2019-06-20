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

// Solution 2
var generate = function (numRows) {
  if (!numRows) return []

  let op = []

  op.push([])
  op[0].push(1)

  for (let i = 1; i < numRows; i++) {
    op.push([])
    op[op.length - 1][0] = 1
    op[op.length - 1][i] = 1

    for (var j = 1; j < i; j++) {
      op[op.length - 1][j] = op[op.length - 2][j - 1] + op[op.length - 2][j]
    }
  }

  return op
}
