var twoSum = function (nums, target) {
  let ans = []
  let exist = {}

  for (let index in nums) {
    if (typeof (exist[target - nums[index]]) !== 'undefined') {
      ans.push(exist[target - nums[index]])
      ans.push(index)
    }

    exist[nums[index]] = index
  }

  return ans
}
