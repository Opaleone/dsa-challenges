const graph1 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

const graph2 = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


const hasPath = (graph, src, dst) => {
  /* 
    Recursion - depth first traversal

    First, check if src equals destination, if so return true back up the stack.
    This is our base case.

    If the former doesn't evaluate to true, loop through each vertex neighbor to the src.

    for each neighbor, recursively run the function to itself passing in the neighbor and checking for a truthy

    If function evals to true, then return true.


    If all that is ran and no function is resolved to true, Then return false.
  */
  
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
};

console.log(hasPath(graph2, 'f','j'));