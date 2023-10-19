const values = [1,8,6,2,5,4,8,3,7];

const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;
  let maxArea = 0;

  while (l < r) {
    const small = Math.min(height[l], height[r]);
    const curArea = small * (r - l);
    maxArea = Math.max(curArea, maxArea);

    if (height[l] < height[r]) l++;
    else r--;
  }
  return maxArea;
}

console.log(maxArea(values));