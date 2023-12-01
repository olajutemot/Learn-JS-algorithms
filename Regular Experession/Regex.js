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
//EXAMPLE 3
let ignoreCaseStr = "Hello world";
let Regex3 = /hello/;
let output3 = Regex3.test(ignoreCaseStr);
console.log(output3);
//output3 is false in the console
Regex3 = /hello/i;
output3 = Regex3.test(ignoreCaseStr);
console.log(output3);
//ouput3 is true in the console
// ===========================================================
// ===========================================================
//EXAMPLE 4
let ourStr = "hello, world!";
let Regex4 = /hello/;
let output4 = ourStr.match(Regex4);
console.log(output4);
//output4 will show an array with string hello on index 0 in the console, it can also be written in another way as shown below
console.log("hello, world!".match(/hello/));
// ===========================================================
// ===========================================================
//EXAMPLE 5
let singlePatternStr = "HELLO, world! hello friend!";
let Regex5 = /hello/i;
let output5 = singlePatternStr.match(Regex5);
console.log(output5);
//output5 will show an array with a single element string HELLO on index 0
let globalPatternStr = "HELLO, world! hello friend!";
Regex5 = /hello/gi;
output5 = globalPatternStr.match(Regex5);
console.log(output5);
//output5 will show an array with two element string HELLO on index 0, and string hello on index 1
// ===========================================================
// ===========================================================
//EXAMPLE 6
let exampleStr = "Let's have fun, gun, run, bun, nun, sun, pun";
let Regex6 = /.un/g;
let output6 = exampleStr.match(Regex6);
console.log(output6);
// output6 will return an array of 7 elements
// ===========================================================
// ===========================================================
//EXAMPLE 7
let characterStr = "big, bag, bug, bog";
let Regex7 = /b[aiu]g/g;
let output7 = characterStr.match(Regex7);
console.log(output7);
//output 7 will return an array of 3 element expect the string bog
//PRACTICE 7
//Use a character class with vowels (a, e, i, o, u) in your regex to find all the vowels in the string quoteSample.
//Note: Be sure to match both upper- and lowercase vowels.
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
Regex7 = /[aeiou]/gi;
output7 = quoteSample.match(Regex7);
console.log(output7);
//output7 will return an array of 25 elements
// ===========================================================
// ===========================================================
//EXAMPLE 8
let rangeStr = "cat, bat, eat, lat, mat";
let Regex8 = /[a-l]at/g;
let output8 = rangeStr.match(Regex8);
console.log(output8);
//output8 will return an array of 4 elements without the string mat
//to combine a range of alphabet and letters
rangeStr = "timmy123456";
Regex8 = /[a-z0-9]/gi;
output8 = rangeStr.match(Regex8);
console.log(output8);
// ===========================================================
// ===========================================================
//EXAMPLE 9
characterStr = "big, bag, bug, bog";
let Regex9 = /b[^aiu]g/g;
let output9 = characterStr.match(Regex9);
console.log(output9);
//output 9 will return an array containing one element which is string bog
//PRACTICE 9
//Use a negated character class with vowels (a, e, i, o, u) in your regex to match everything except the vowels in the string quoteSample.
//Note: Be sure to match both upper- and lowercase vowels.
quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
Regex9 = /[^aeiou]/gi;
output9 = quoteSample.match(Regex9);
console.log(output9);
//Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
// ===========================================================
// ===========================================================
//EXAMPLE 10
let difficultSpelling = "Mississippi";
let Regex10 = /s+/g;
let output10 = difficultSpelling.match(Regex10);
console.log(output10);
//output10 will return an array with 2 element string "ss","ss"
// ===========================================================
// ===========================================================
//EXAMPLE 11
let gPhrase = "gut feeling";
let goRegex = /go*/;
let output11 = gPhrase.match(goRegex);
console.log(output11);
//output11 will return an array of string g
goRegex = /go+/;
output11 = gPhrase.match(goRegex);
console.log(output11);
//output11 will return null
// ===========================================================
// ===========================================================
//EXAMPLE 12
let greedyStr = "titanic";
let Regex12 = /t[a-z]*i/;
let output12 = greedyStr.match(Regex12);
console.log(output12);
//the above shows greedy matching of the quantifier
//output12 will return an array with 1 element string "titani"
let lazyStr = "titanic";
Regex12 = /t[a-z]*?i/;
output12 = greedyStr.match(Regex12);
console.log(output12);
//the above shows lazy matching of the quantifier
//output12 will return an array with 1 element string "ti"
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);
// ===========================================================
// ===========================================================
//EXAMPLE 13
