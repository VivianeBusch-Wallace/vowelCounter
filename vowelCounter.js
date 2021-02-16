console.log(
  "-----------How many vowels does your word or sentence have?------------"
);
// #### 1. How many?
// * Create a function named "_vowelCount_" that accepts a string as an argument.
// Check how many vowels the string contains, if any.
// Return the vowel count of the string.
//     > **Examples**:
//     - ```javascript
//       vowelCount("hello") // 2
//       ```
//     - ```javascript
//       vowelCount("test") // 1
//       ```
//     - ```javascript
//       vowelCount("fbw") // 0
//       ```
const vowelCount = (str) => {
  let vowelArr = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .filter((letter) => vowelArr.includes(letter)).length;
};
console.log(vowelCount("test"));
console.log(vowelCount("You are beautiful."));
console.log(vowelCount("qrstfbw4592ZTW"));
console.log(vowelCount("abcdefghijklmnopqrstuvwxyz"));
