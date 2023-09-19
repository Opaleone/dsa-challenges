// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      total++
    }
  }

  return total;
};
