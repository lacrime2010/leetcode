var isSame = function (left, right) {
  if (!left && !right) return true
  if (!left || !right || right.val !== left.val) return false

  return isSame(left.left, right.right) && isSame(left.right, right.left)
}

var isSymmetric = function (root) {
  if (!root) return true

  return isSame(root.left, root.right)
}
