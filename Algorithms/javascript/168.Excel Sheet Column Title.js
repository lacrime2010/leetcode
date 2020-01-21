/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let str = []
  
  if(n === 0) return 0
  
  while (n > 0) {
    n--
      
    code = String.fromCharCode(n % 26 + 65)
      
    n = Math.floor(n / 26)
      
    str.push(code)
  }
    
    return str.reverse().join("")
};