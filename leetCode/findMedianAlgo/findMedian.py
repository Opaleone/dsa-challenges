from typing import List
import math

nums1 = [1,2,3,5,7,8,9,10,13,15,16,17,19,65,77,79,80,99,101,104,108];
nums2 = [2,66,88,96,109];

def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:
  merged = []
  i = 0
  j = 0

  while i < len(nums1) and j < len(nums2):
    if nums1[i] < nums2[j]:
      merged.append(nums1[i])
      i += 1
    else:
      merged.append(nums2[j])
      j += 1

  while i < len(nums1):
    merged.append(nums1[i])
    i += 1

  while j < len(nums2):
    merged.append(nums2[j])
    j += 1

  mid = math.floor(len(merged) / 2)

  if (len(merged) % 2 == 0):
    return (merged[mid - 1] + merged[mid]) / 2
  else:
    return merged[mid]
  
print(findMedianSortedArrays(nums1, nums2))