package leetCode.maxArea;

class MaxArea {
  public static void main(String[] args) {
    int[] height = {1,8,6,2,5,4,8,3,7};

    System.out.println(Solution.maxWater(height));
  }
}

class Solution {
  public static int maxWater(int[] height) {
    int l = 0;
    int r = height.length - 1;
    int maxArea = 0;

    while (l < r) {
      int small = Math.min(height[l], height[r]);
      int curArea = small * (r - l);

      maxArea = Math.max(curArea, maxArea);

      if (height[l] < height[r]) l++;
      else r--;
    }

    return maxArea;
  }
  
}

