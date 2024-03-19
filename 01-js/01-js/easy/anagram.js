/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();
  console.log(str1,str2)
  if (str1.length != str2.length) {
      return false;
  }
  let map = new Map();
  for (let i = 0; i < str1.length; i++) {
      if (map.has(str1[i])) {
          let value = map.get(str1[i]);
          map.set(str1[i], value + 1);
      } else {
          map.set(str1[i], 1);
      }
  }
  for (let j = 0; j < str2.length; j++) {
      if (map.has(str2[j])) {
          let value = map.get(str2[j]);
          map.set(str2[j], value - 1);
          if (value - 1 < 0) {
              return false; // str2 has more occurrences of a character than str1
          }
      } else {
          return false; // str2 has a character not present in str1
      }
  }
  return true;
}

module.exports = isAnagram;
