// Happy "G"

/* 

Let's say that "g" is happy in the given string, if there is another "g" immediately to the right or to the left of it.

Find out if all "g"s in the given string are happy.

Example
For str = "gg0gg3gg0gg", the output should be true.

For str = "gog", the output should be false.

Input/Output
[input] string str
A random string of lower case letters, numbers and spaces.

[output] a boolean value
true if all "g"s are happy, false otherwise.

*/

const gSamples = {
  one: '', //true
  two: 'gg0gg3gg0gg', //true
  three: 'ggg ggg g ggg', //false
  four: 'gg0gggg0gg0ggg', //true
}

// my initial solution
function gHappy(str) {
  //coding and coding..
    if (str === '') return true;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'g') {
        if (str[i + 1] === 'g') {
          i++;
          continue;
        } else if (str[i - 1] === 'g') {
          i++;
          continue;
        } else {
          return false;
        }
      }
    }
  
    return true;
}

//better solution
function gHappy2(str) {
  for (var i=0; i<str.length; ++i) {
    if (str[i]=='g' && str[i-1]!='g' && str[i+1]!='g') return false;
  }
  return true;
}


for (const key in gSamples) {
  console.log(key)
  console.log(gHappy(gSamples[key]));
  console.log(gHappy2(gSamples[key]));
}
