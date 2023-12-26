package leetCode.twoSum;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
  public static void main(String[] args) {
    int[] arr = {2,7,11,15};
    int target = 9;

    System.out.println(Arrays.toString(Solution.twoSum(arr, target)));
  }
}

class Solution {
  public static int[] twoSum(int[] arr, int target) {
    Map<Integer, Integer> hash = new HashMap<Integer, Integer>();

    for (int i = 0; i < arr.length; i++) {
      int diff = target - arr[i];

      if (hash.containsKey(diff)) {
        return new int[]{hash.get(diff), i};
      } else hash.put(arr[i], i);
    }

    return new int[]{};
  }
}
