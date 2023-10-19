let values: [Int] = [1,8,6,2,5,4,8,3,7]

func maxArea(arr: [Int]) -> Int {
  var l: Int = 0
  var r: Int = arr.count - 1
  var maxArea: Int = 0

  while (l < r) {
    let small: Int = min(arr[l], arr[r])
    let curArea: Int = small * (r - l)
    maxArea = max(curArea, maxArea)

    if (arr[l] < arr[r]) {
      l += 1
    } else {
      r -= 1
    }
  }

  return maxArea
}

print(maxArea(arr: values))