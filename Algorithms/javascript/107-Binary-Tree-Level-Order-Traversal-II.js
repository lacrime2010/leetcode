var levelOrderBottom = function (root) {
  if (!root) return []

  let array = []

  search(root, 1)

  function search (root, level) {
    if (root) {
      if (array.length < level) array.unshift([])

      let arr = array[array.length - level]

      arr.push(root.val)

      search(root.left, level + 1)
      search(root.right, level + 1)
    } else {
      return
    }
  }

  return array
}
