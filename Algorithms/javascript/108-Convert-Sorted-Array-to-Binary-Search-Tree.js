var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null

  return midNode(nums, 0, nums.length - 1)
}

function midNode (nums, low, high) {
  if (low > high) return null

  var mid = Math.floor((low + high) / 2)
  var node = new TreeNode(nums[mid])

  node.left = midNode(nums, low, mid - 1)
  node.right = midNode(nums, mid + 1, high)

  return node
}
