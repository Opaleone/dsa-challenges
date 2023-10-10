/*

  **MEDIAN OF TWO SORTED ARRAYS**

  Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

  The overall run time complexity should be O(log (m+n)).
*/

const nums1 = [1,2,3,5,7,8,9,10,13,15,16,17,19,65,77,79,80,99,101,104,108];
const nums2 = [2,66,88,96];

// My initial solution

// const findMedian = (nums1, nums2) => {
//   const merged = [];

//   nums1.map((num) => merged.push(num));
//   nums2.map((num) => merged.push(num));
//   merged.sort((a,b) => a - b);

//   const mid = Math.floor((merged.length - 1) / 2);

//   if (merged.length % 2 === 0) return (merged[mid] + merged[mid + 1] / 2);
//   else return merged[mid];

// }

// Solution with better joining method

const findMedian = (nums1, nums2) => {
  const merged = [];
  let i = 0, j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++])
    } else {
      merged.push(nums2[j++])
    }
  }

  while (i < nums1.length) merged.push(nums1[i++])
  while (j < nums2.length) merged.push(nums2[j++])

  const mid = Math.floor((merged.length - 1) / 2);

  if (merged.length % 2 === 0) return (merged[mid] + merged[mid + 1] / 2);
  else return merged[mid];

}

console.log(findMedian(nums1, nums2));