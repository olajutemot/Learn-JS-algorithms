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
