var deleteDuplicates = function (head) {
  let node = head

  while (node) {
    if (!node.next) break

    (node.val === node.next.val) ? node.next = node.next.next : node = node.next
  }

  return head
}
