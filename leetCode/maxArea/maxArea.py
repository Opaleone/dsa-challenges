values = [1,8,6,2,5,4,8,3,7]

def maxArea(arr):
  l = 0
  r = len(arr) - 1
  maxArea = 0

  while l < r:
    small = min(arr[l], arr[r])
    curArea = small * (r - l)
    maxArea = max(curArea, curArea)

    if arr[l] < arr[r]:
      l += 1
    else:
      r -= 1

  return maxArea

print(maxArea(values))