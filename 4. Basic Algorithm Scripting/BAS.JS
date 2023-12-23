//SOLUTION 1
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
console.log(convertCtoF(30)); //would print number value 86 to console
// ===========================================================
// ===========================================================
//SOLUTION 2
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello")); //would print the string value "olleh"
// ===========================================================
// ===========================================================
//SOLUTION 3
function factorialize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

console.log(factorialize(5)); //would print the number 120 which is the value of 5!
// ===========================================================
// ===========================================================
//SOLUTION 4
function findLongestWordLength(str) {
  let currentLength = 0;
  let longestLength = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str.length); //
    console.log(str[i]); //
    if (str[i] === " ") {
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      currentLength = 0;
    } else {
      currentLength++;
    }
  }
  if (currentLength > longestLength) {
    longestLength = currentLength;
  }

  return longestLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
// ===========================================================
// ===========================================================
//SOLUTION 5
function largestOfFour(arr) {
  let ourArray = [];

  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    ourArray[i] = largestNumber;
  }
  console.log(ourArray);

  return ourArray;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

// ===========================================================
// ===========================================================
//SOLUTION 6
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n");
// Code Explanation
// First we use the slice method copy the string.
// In order to get the last characters in str equivalent to the target's length we use the slice method.
// The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
// For example str.slice(2, 4) would return "st".
// In this case we only include one parameter which it will copy everything from the starting index.
// We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
// Finally we compare the return result of slice to target and check if they have the same characters.
// ===========================================================
// ===========================================================
//SOLUTION 7
