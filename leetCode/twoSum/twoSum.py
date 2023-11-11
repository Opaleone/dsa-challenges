nums, target = [2,7,11,15], 9

def twoSum(nums, target):
  hash = {}

  for i in range(len(nums)):
    diff = target - nums[i]

    if diff in hash:
      return [hash[diff], i]
    else:
      hash[nums[i]] = i

print(twoSum(nums,target))