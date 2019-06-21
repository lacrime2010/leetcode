var addBinary = function (a, b) {
  if (a === '') return b
  if (b === '') return a
  if (a.length > b.length) return addBinary(b, a)

  let strArr = []
  let carry = '0'

  for (let i = 0; i < b.length; i++) {
    const aChar = i < a.length ? a.charAt(a.length - 1 - i) : '0'
    const bChar = b.charAt(b.length - 1 - i)
    let curr

    if (aChar !== bChar) {
      curr = (carry === '1') ? '0' : '1'
    } else {
      curr = carry
      carry = aChar
    }

    strArr.unshift(curr)
  }

  if (carry === '1') strArr.unshift(carry)

  return strArr.join("")
}
