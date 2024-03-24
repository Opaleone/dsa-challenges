/* 

    383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

*/

const rN1 = 'a', mag1 = 'b';
//expect(res1).toBe(false);
const rN2 = 'aa', mag2 = 'ab';
//expect(res2).toBe(false);
const rN3 = 'aa', mag3 = 'aab';
//expect(res3).toBe(true);

const canConstruct = (ransomNote, magazine) => {
  let hash = {};

  for (let i = 0; i < magazine.length; i++) {
      hash[magazine[i]] = hash[magazine[i]] + 1 || 1;
  }

  for (let i = 0; i < ransomNote.length; i++) {
      if (!hash[ransomNote[i]]) {
          return false;
      }
      hash[ransomNote[i]]--;
  }
  return true;
}

const res1 = canConstruct(rN1, mag1);
const res2 = canConstruct(rN2, mag2);
const res3 = canConstruct(rN3, mag3);

console.log(`Res 1: ${res1}\nRes 2: ${res2}\nRes 3: ${res3}`);