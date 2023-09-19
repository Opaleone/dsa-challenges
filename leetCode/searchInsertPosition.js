/* 

  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.

*/

const nums = [1,3,5,6];
const target = 5;
// Output: 2

const nums1 = [1,3,5,6];
const target1 = 2;
// Output: 1

const nums2 = [1,3,5,6];
const target2 = 7;
// Output: 4

// Requires binary search algo

const searchInsert = (nums, target) => {
  let leftPtr = 0;
  let rightPtr = nums.length;

  while (leftPtr < rightPtr) {
    const mid = leftPtr + Math.floor((rightPtr - leftPtr) / 2);
    if (target > nums[mid]) leftPtr = mid + 1;
    else rightPtr = mid;
  }
  return leftPtr;
}

console.log(searchInsert(nums, target));
console.log(searchInsert(nums1, target1));
console.log(searchInsert(nums2, target2));