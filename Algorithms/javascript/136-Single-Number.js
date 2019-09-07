// Solution 1
var singleNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] != nums[i + 1]) return nums[i]
  }
}

// Solution 2s
var singleNumber = function (nums) {
  let ret = 0

  nums.forEach(function (num) {
    ret ^= num
  })

  return ret
}
