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
let beginingStr = "Timmy can be found.";
let firstRegex = /^Timmy/;
let output13 = beginingStr.match(firstRegex);
console.log(output13);
//output13 will return an array with a single element string "Timmy"
let notAnchoredStr = "You can't find Timmy now.";
let notFirstRegex = /^Timmy/;
let notEndRegex = /Timmy$/;
output13 = notAnchoredStr.match(notFirstRegex);
console.log(output13);
//output13 will return null
output13 = notAnchoredStr.match(notEndRegex);
console.log(output13);
//output13 will return null
let endStr = "You can now find Timmy";
let endRegex = /Timmy$/;
output13 = endStr.match(endRegex);
console.log(output13);
//output13 will return an array with a single element string "Timmy"
// ===========================================================
// ===========================================================
//EXAMPLE 14
let sampleStr = "The five boxing wizards jump quickly.";
let Regex14 = /\w/g;
let output14 = sampleStr.match(Regex14);
console.log(output14);
//output14 will return an array of 31 element with strings of each character apart from the period .
// ===========================================================
// ===========================================================
//EXAMPLE 15
sampleStr = "The five boxing wizards jump quickly.";
let Regex15 = /\W/g;
let output15 = sampleStr.match(Regex15);
console.log(output15);
//output15 will return an array of 6 element matching the white spaces and the period character .
// ===========================================================
// ===========================================================
//EXAMPLE 16
let targetStr = "2001: A Space Odyssey";
let digitRegex = /\d/g;
let output16 = targetStr.match(digitRegex);
console.log(output16);
//output16 will return an array of 4 elements matching only the numbers character
let notDigitRegex = /\D/g;
output16 = targetStr.match(notDigitRegex);
console.log(output16);
//output16 will return an array of 17 elements matching Everything except the digits
// ===========================================================
// ===========================================================
//EXERCISE SOLUTION 1
let exampleUser = "Olajutemot12";
let userNameRegex = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userNameRegex.test(exampleUser);
console.log(result);
//result will return true in the console
//-------CODE EXPLANATION---
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input
// ===========================================================
// ===========================================================
//EXAMPLE 17
let whiteSpaceStr = "Whitespaces are important in seperating words";
let whiteSpaceRegex = /\s/g;
let output17 = whiteSpaceStr.match(whiteSpaceRegex);
console.log(output17);
//output17 will return an array of 5 elements matching the six whitespaces
let notWhiteSpaceRegex = /\S/g;
output17 = whiteSpaceStr.match(notWhiteSpaceRegex);
console.log(output17);
//output17 will return an array of 40 elements matching every other character except the whiespaces
// ===========================================================
// ===========================================================
//EXAMPLE 18
let intervalQuantifierStr = "aaaah";
let Regex18 = /a{3,5}h/;
let output18 = intervalQuantifierStr.match(Regex18);
console.log(output18);
//output18 will return an array of 1 element matching the string "aaaah"
intervalQuantifierStr = "aah";
output18 = intervalQuantifierStr.match(Regex18);
console.log(output18);
//output18 will return null
intervalQuantifierStr = "aaaaaaaaah";
output18 = intervalQuantifierStr.match(Regex18);
console.log(output18);
//output18 will return an array of 1 element matching the string "aaaaah"
// ===========================================================
// ===========================================================
//EXAMPLE 19
intervalQuantifierStr = "aaaaaaaaah";
let openRangeRegex = /a{3,}h/;
let output19 = intervalQuantifierStr.match(openRangeRegex);
console.log(output19);
//output19 will return an array of 1 element matching the string "aaaaaaaaah"
intervalQuantifierStr = "aah";
output19 = intervalQuantifierStr.match(openRangeRegex);
console.log(output19);
//output19 will return null
let quantifierStr = "aaaaaaaaah";
let exactRegex = /a{3}h/;
output19 = quantifierStr.match(exactRegex);
console.log(output19);
//output19 will return an array of 1 element matching the string "aaah"
// ===========================================================
// ===========================================================
//EXAMPLE 20
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
console.log(rainbowRegex.test(american)); // true
console.log(rainbowRegex.test(british)); // true
// ===========================================================
// ===========================================================
//EXAMPLE 21
let password = "abc123";
let checkPass = /abc(?=\d)/;
console.log(password.match(checkPass));
//output21 will return an array of 1 element matching the string "abc", the lookahead serach for the digit after abc and since it can find it then thats true and wont match it.
// ===========================================================
// ===========================================================
//EXAMPLE 22
let myString = "Eleanor D. Roosevelt";
let Regex22 = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+))? Roosevelt/;
let output22 = Regex22.test(myString);
console.log(output22);
//output19 will return true in the console
// ===========================================================
// ===========================================================
//EXAMPLE 23
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
//The replace call would return the string The sky is blue..
//You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
//The replace call would return the string Camp Code.
