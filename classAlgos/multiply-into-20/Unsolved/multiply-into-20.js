const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const product = 20 / arr[i];

    if (product in hash) return true;
    else hash[arr[i]] = true;
  }

  return false;
};
