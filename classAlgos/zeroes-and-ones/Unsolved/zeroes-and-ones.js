// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
  let oneCnt = 0;
  let zeroCnt = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      zeroCnt++;
    } else {
      oneCnt++;
    }
  }

  return oneCnt === zeroCnt;
};
