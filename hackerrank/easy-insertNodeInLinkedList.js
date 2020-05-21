const SinglyLinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

function insertNodeAtPosition(head, data, position) {
  var node = new SinglyLinkedListNode(data);
  if (!head) {
      head = node;
  } else {
      var prev = head;
      var current = head.next
      for (var i = 0; i !== position - 1; i++) {
          prev = prev.next;
          current = current.next
      }
      prev.next = node
      node.next = current
  }
  return head
}