#include<iostream>
#include<vector>
using namespace std;

vector<int> twoSum(vector<int> arr, int target);

int main() {
  vector<int> arr = {2,7,11,15};
  int target = 9;

  vector<int> result = twoSum(arr ,target);

  cout << "{" << result[0] << "," << result[1] << "}" << endl;

  return -1;
}

vector<int> twoSum(vector<int> arr, int target) {
  unordered_map<int, int> hash;

  for (int i = 0; i < arr.size(); i++) {
    const int diff = target - arr[i];

    if (hash.count(diff)) {
      return {hash[diff], i};
    }
    hash[arr[i]] = i;
  }
  
  return {};
}

/*
  To Compile:

  g++ -std=c++11 <filename>
*/