/* 

  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

  You can assume there will only be ONE closest value

  Due to nature of a BST, you can assume it will be sorted according to value
  Greater values will be to the right; lesser values will be to the left;

*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

const target = 12;


const findClosestValueBst = (tree, target) => {
  return findClosestValueBstHelper(tree, target, tree.value)
}

const findClosestValueBstHelper = (tree, target, closest) => {
  let current = tree;

  while (current !== null) {
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value;
    }

    if (target < current.value) current = current.left;
    else if (target > current.value) current = current.right;
    else break;

  }
  return closest;
}

console.log(findClosestValueBst(root, target));