console.log(
  "-----------How many vowels does your word or sentence have?------------"
);
// #### How many?
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
  const strArr = str.toLowerCase().split("");
  let counter = 0;
  let vowelArr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (str[i].includes(vowelArr[j])) {
        counter++;
      }
    }
  }
  return counter;
};
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));
console.log(vowelCount("wie alt bist du?"));
