// class Node { 
//     constructor(data) 
//     { 
//         this.data = data; 
//         this.left = null; 
//         this.right = null; 
//     } 
// }

// var newNode = new Node(5);
// var leftNode = new Node(3);
// var rightNode = new Node(7);
// newNode.left = leftNode;
// newNode.right = rightNode;
// leftNode.left = new Node(1);
// leftNode.right = new Node(4);
// rightNode.left = new Node(6);
// rightNode.right = new Node(9);

// console.log(newNode)

const exists = (root, val) => {
  //Checking to see if the root node is equaled to value passed in
  if (root.data === val){
      return 1;
  //Checking to see if the root node is greater than the value
  } else if (root.data > val && root.left !== null) {
      // recurse with the left child
      return exists(root.left, val);
  } else if (root.data < val && root.right !== null) {
      return exists(root.right, val);
  } else {
      return 0;
  }
}

// console.log(exists(newNode, 8))
