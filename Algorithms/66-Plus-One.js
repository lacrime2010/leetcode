// Solution 1
var plusOne = function (digits) {
  let carry = 1

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry
    if (sum === 10) {
      digits[i] = 0
      carry = 1
    } else {
      digits[i] = sum
      carry = 0
    }
  }

  if (carry === 1) digits.unshift(1)

  return digits
}

// Solution 2
var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) {
      digits[i] = 0
    } else {
      return digits
    }
  }

  digits.unshift(1)

  return digits
}
