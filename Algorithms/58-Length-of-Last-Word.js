var lengthOfLastWord = function (s) {
  const s2Arr = s.trim().split('')

  return s2Arr[s2Arr.length - 1].length
}
