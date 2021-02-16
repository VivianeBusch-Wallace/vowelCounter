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
  const strArr = str.toLowerCase().split("");
  let counter = 0;
  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        counter++;
        break;
      default:
    }
  }
  return counter;
};
console.log(vowelCount("hello"));
console.log(vowelCount("test"));
console.log(vowelCount("fbw"));
console.log(vowelCount("wie alt bist du?"));