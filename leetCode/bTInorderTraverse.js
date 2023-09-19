/* 
  Given the root of a binary tree, return the inorder traversal of its nodes' values.

  1
   \
    2
   /
  3

  Input: root = [1,null,2,3]
  Output: [1,3,2]

  Output should return order from left to right;

  For instance, 1 has no left node so it is first in return array;
  2 has a left so it must go deeper first;
  3 has no left so it is next into the return array;
  Then we return to 2 and push it to return array, resulting in our completed return array;
*/

class TreeNode {
  constructor (val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

const root = new TreeNode(1);
const two = new TreeNode(2);
const three = new TreeNode(3);

root.right = two;
two.left = three;

  // Recursive solution

const inorderTraversal = (root) => {
  // This initializes our return array
  const values = [];

  const inOrder = (root) => {
    // Base case to end the loop
    if (!root) return;

    // Checks left first and goes as deep as possible
    inOrder(root.left);
    // Once we have go as deep as we can, we return up the stack, pushing each val to the return array;
    values.push(root.val);
    // Then we do the same all the way down the right side;
    inOrder(root.right);
  }

  // Finally we call the recursive function to execute
  inOrder(root);
  return values;
}


// Iterative solution

// const inorderTraversal = (root) => {
//   // Initializes our return array
//   const values = [];
//   // We use a stack to keep track of our nodes as we venture deeper into tree
//   const stack = [];
//   let current = root;

//   while (current || stack.length) {
//     // If current !== null, continue down the tree
//     if (current) {
//       stack.push(current);
//       current = current.left;
//     } else {
//     // Else push all values from from stack to return array and continue down the right side
//       current = stack.pop();
//       values.push(current.val);
//       current = current.right;
//     }
//   }

//   return values;
// }

console.log(inorderTraversal(root));