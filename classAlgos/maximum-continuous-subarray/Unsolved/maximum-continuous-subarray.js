const maxSumArray = function(nums) {
  // Write your solution here
  if (nums.length === 1) return nums[0];

  if (nums.length === 2 || nums.every((x) => x >= 0)) return nums.reduce((a, b) => a + b, 0);

  let curMax = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let curNum = nums[i];

    curMax = Math.max(curNum, curMax + curNum);
    maxSum = Math.max(curMax, maxSum);
  }

  return maxSum;
};
