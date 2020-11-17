/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0
  let majority = 0

  for (let i; nums.length; ++i) {
    if (count === 0) {
      majority = nums[i] //將當前資料為眾數

      count++
    } else if (majority === nums[i]) {
      count++ //如果遍歷的當前資料與儲存的當前資料相同，計數+1
    } else {
      count-- //若不相同，計數 - 1
    }
  }

  //假設相同的眾數呢？
  return count === 0 ? -1 : majority
}
