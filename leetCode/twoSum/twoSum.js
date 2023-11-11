const nums = [2,7,11,15], target = 9;

const twoSum = (nums, target) => {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in hash) return [hash[diff], i];

    hash[nums[i]] = i;
  }
}

console.log(twoSum(nums, target));