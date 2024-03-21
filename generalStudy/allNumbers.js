/* 
  MISSING NUMBER

  Create an algo to find the missing number in a given array

  Constraints:

  Maximum of 1 number missing

*/

const probArr = [1,7,0,2,4,3,5];
const probArr2 = [0,2,5,1,4,3,8,7,12,9,10,6];
// expect(res).toBe(6)

const numFind = (arr) => {
  // Sol only works if all nums included
  // arr.sort((a,b) => a - b);
  // let cnt = 0;

  // for (const num of arr) {
  //   if (num !== cnt) {
  //     return cnt;
  //   }
  //   cnt++;
  // }

  let xor = 0;

  for (let i = 0; i <= arr.length; i++) {
    xor = xor ^ i ^ arr[i];
  }

  return xor;
}

console.log(numFind(probArr));
console.log(numFind(probArr2));