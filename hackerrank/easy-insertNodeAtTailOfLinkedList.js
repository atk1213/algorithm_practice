/*
You are given the pointer to the head node of a linked list and an integer to add to the list. Create a new node with the given integer. Insert this node at the tail of the linked list and return the head node of the linked list formed after inserting this new node. The given head pointer may be null, meaning that the initial list is empty.

Input Format

You have to complete the SinglyLinkedListNode insertAtTail(SinglyLinkedListNode head, int data) method. It takes two arguments: the head of the linked list and the integer to insert at tail. You should not read any input from the stdin/console.

The input is handled by code editor and is as follows:
The first line contains an integer , denoting the elements of the linked list.
The next  lines contain an integer each, denoting the element that needs to be inserted at tail.

Constraints

1 <= n <= 1000
1 <= list(i) <= 1000

Output Format

Insert the new node at the tail and just return the head of the updated linked list. Do not print anything to stdout/console.

The output is handled by code in the editor and is as follows:
Print the elements of the linked list from head to tail, each in a new line.
*/

const SinglyLinkedListNode = class {
  constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
      this.head = null;
  }

};

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtTail(head, data) {
  if(head === null){ 
      head = new SinglyLinkedListNode(data); 
      return head
  } 
  let currentNode = head;
  while(currentNode.next !== null){
      currentNode = currentNode.next; 
  } 
  currentNode.next = new SinglyLinkedListNode(data);
  return head; 
}