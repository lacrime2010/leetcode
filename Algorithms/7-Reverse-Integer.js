var reverse = function (x) {
  const reversed = Math.sign(x) * parseInt(x.toString().split('').reverse().join(''))

  // 0x7fffffff = Math.pow(2, 31) - 1
  // -0x80000000 = Math.pow(2, 31) * -1
  return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0
}
