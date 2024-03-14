/*

  MAJORITY ELEMENT

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [2,2,1,1,1,2,2];
// expect(res).toBe(2)


// My initial solution
// T: O(n) S: O(n)
const majorityElement = (nums) => {
  let hash = {};
  const numToCompare = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] in hash) {
          hash[nums[i]]++;
      } else {
          hash[nums[i]] = 1;
      }
  }

  for (const num in hash) {
      if (hash[num] > numToCompare) return num;
  }
};

// Most optimal solution
// T: O(n) S: O(1)
const boyerMoyeMajorityAlgo = (nums) => {
  let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
}

// Posible other solution
// T: O(n) S: O(1)

const thirdMajorityAlgo = (nums) => {
  nums.sort((a,b) => a - b);

  return nums[Math.floor(nums.length / 2)];
}

const res = majorityElement(nums);
const betterRes = boyerMoyeMajorityAlgo(nums);
const thirdRes = thirdMajorityAlgo(nums);

console.log(res);
console.log(betterRes);
console.log(thirdRes);