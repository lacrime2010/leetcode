var isPalindrome = function (s) {
  s = s.toLowerCase()
  s = s.replace(/[^a-z0-9]/ig, "")

  const rev = s.split("").reverse().join("")

  return s.indexOf(rev) === 0
}
