#include<iostream>
#include<vector>
using namespace std;

vector<int> nums1 = {1,2,3,5,7,8,9,10,13,15,16,17,19,65,77,79,80,99,101,104,108};
vector<int> nums2 = {2,66,88,96,109};

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
  vector<int> merged;
  int i = 0, j = 0;

  while (i < nums1.size() && j < nums2.size()) {
    if (nums1[i] < nums2[j]) merged.push_back(nums1[i++]);
    else merged.push_back(nums2[j++]);
  }

  while (i < nums1.size()) merged.push_back(nums1[i++]);
  while (j < nums2.size()) merged.push_back(nums2[j++]);

  int mid = round(merged.size() / 2);

  if (merged.size() % 2 == 0) return (merged[mid - 1] + merged[mid]) / 2.0;
  else return merged[mid];
};

int main() {
  cout << findMedianSortedArrays(nums1, nums2) << endl;
  return 0;
}

// How to compile
// g++ -std=c++11 findMedianCpp.cpp -o cpp_sol