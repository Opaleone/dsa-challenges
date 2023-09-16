/* 
  Depth first search on a graph witihn a class

  BEST SOLUTION UNCOMMENTED
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Solution 1
    //  Using for of loop
    //     Time: O(v + e) Space: O(V)
// ***************************************

    array.push(this.name);

    for (let child of this.children) {
      child.depthFirstSearch(array)
    }

    return array;

// ***************************************

    // Solution 2
    //  Using .forEach()

// ***************************************

    // array.push(this.name);

    // this.children.forEach((child) => {
    //   child.depthFirstSearch(array)
    // })

    // return array
  }
}