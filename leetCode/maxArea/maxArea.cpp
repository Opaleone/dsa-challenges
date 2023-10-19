#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

int maxArea(vector<int> arr) {
  int l = 0;
  int r = int(arr.size()) - 1;
  int maxArea = 0;

  while (l < r) {
    int small = min(arr[l], arr[r]);
    int curArea = small * (r-l);
    maxArea = max(curArea, maxArea);

    if (arr[l] < arr[r]) l++;
    else r--;
  }
  return maxArea;
}

int main() {
  vector<int> values = {1,8,6,2,5,4,8,3,7};
  cout<<maxArea(values)<<endl;
  return 0;
}

/*
  To Compile:

  g++ -std=c++11 <filename>
*/