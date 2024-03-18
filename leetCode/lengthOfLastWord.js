/* 

58. Length Of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

*/

const str = "   fly me   to   the moon  ";
// expect(res).toBe(4);


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  // My initial solution
  const wordArr = s.split(' ');
  let cnt = 0;

  const noSpaceArr = wordArr.filter(function(str) {
      return /\S/.test(str);
  });

  const lastWord = noSpaceArr.pop();

  for (let i = 0; i < lastWord.length; i++) {
      if (lastWord[i] != ' ') {
          cnt++;
      }
  }

  return cnt;

  // single-line solution
  // return s.trim().split(' ').pop().length;
};

const res = lengthOfLastWord(str);
console.log(res);