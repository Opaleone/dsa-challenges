/*

  Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

*/

const nums = [1,2,3,4,5,6,7], k = 3;

// expect(res).toBe([5,6,7,1,2,3,4])

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  // My initial solution but too slow for proper submit
  // for (let i = 0; i < k; i++) {
  //   const curNum = nums.pop();
  //   nums.unshift(curNum);
  // }

  // Better solution
  k %= nums.length;

  const reverse = (i, j) => {
    while (i < j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
  }

    // reverse whole array
    reverse(0, nums.length - 1);
    console.log(nums);
    // reverse k element at beginning of array
    reverse(0, k - 1);
    console.log(nums);
    // reverse everything after first k elements
    reverse(k, nums.length - 1);
    console.log(nums);
}

rotate(nums, k);
// console.log(nums);