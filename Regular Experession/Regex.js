//EXAMPLE 1
let testStr = "learning Regex";
let Regex = /learn/;
let output = Regex.test(testStr);
console.log(output);
//output true in the console
// ===========================================================
// ===========================================================
//EXAMPLE 2
let petStr = "timmy has a pet cat.";
let Regex2 = /cat|dog|fish/;
let output2 = Regex2.test(petStr);
console.log(output2);
//output2 is true in the console
petStr = "timmy has a pet dog";
output2 = Regex2.test(petStr);
console.log(output2);
//output2 is true in the console
petStr = "timmy has a pet goat";
output2 = Regex2.test(petStr);
console.log(output2);
//output2 is false in the console
// ===========================================================
// ===========================================================
