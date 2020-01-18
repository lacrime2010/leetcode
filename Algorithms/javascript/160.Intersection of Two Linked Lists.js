/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let p = headA
  let q = headB
  
  if (!p || !q) return null
  if (p === q) return p
    
  let countA = 0
  let countB = 0
  
  while (p !== null) {
    countA ++
      
    p = p.next
  }
    
  while (q !== null) {
    countB ++
      
    q = q.next
  }
  
  p = headA
  q = headB
    
  if (countA > countB) {
    for (let i = countB; i < countA; i++) {
      p = p.next
    }
  }
    
  if (countA < countB) {
    for (let i = countA; i < countB; i++) {
      q = q.next
    }
  }
  
  while (p && q) {
    if (p === q) return p
      
    p = p.next
    q = q.next
  }
  
  return null
}
