//EXAMPLE 1
let oneDimensionalArray = ["one", 2, "three", true, false, undefined, null];
console.log(oneDimensionalArray.length); //will print 7 to the console
let multiArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];
console.log(multiArray.length); //will print 2 to the console
// ===========================================================
// ===========================================================
//EXAMPLE 2
let arrayIndexing = ["a", "b", "c"];
let zeroIndex = arrayIndexing[0];
console.log(zeroIndex); //will print string "a" to the console
arrayIndexing[1] = "not b";
console.log(arrayIndexing); //will print an array ["a","not b", "c"] to the console
// ===========================================================
// ===========================================================
//EXAMPLE 3
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
console.log(romanNumerals); //would print an array value ['XIX', 'XX', 'XXI', 'XXII']. to the console
romanNumerals.push(twentyThree);
console.log(romanNumerals); //would print an array value ['XIX', 'XX', 'XXI', 'XXII', 'XXIII'].
//Notice that we can also pass variables like we did with the variable twentythree, which allows us even greater flexibility in dynamically modifying our array's data.
// ===========================================================
// ===========================================================
//EXAMPLE 4
let greetings = ["whats up?", "hello", "see ya!"];
greetings.pop();
console.log(greetings); //would print an array value ['whats up?', 'hello'].
greetings.shift();
console.log(greetings); //would print an array value ['hello'].
let poppedVariable = greetings.pop();
console.log(poppedVariable); //would print the string "hello"
// ===========================================================
// ===========================================================
//EXAMPLE 5
let spliceArray = ["today", "was", "not", "so", "great"];
spliceArray.splice(2, 2);
console.log(spliceArray); //would print an arrat value ['today', 'was', 'great'].

let newArray = spliceArray.splice(3, 2);
console.log(newArray); //would print an array value ['so', 'great'].
// ===========================================================
// ===========================================================
//EXAMPLE 6
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers); //would print an array value [10,11,12,13,14,15].
// ===========================================================
// ===========================================================
//EXAMPLE 7
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather); //would print an array value ['snow', 'sleet']
console.log(weatherConditions); //would print an array value ['rain', 'snow', 'sleet', 'hail', 'clear'] sane as before the slice() was called upon
// ===========================================================
// ===========================================================
//EXAMPLE 8
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray); //would print an array value [true, true, undefined, false, null] the same as thisArray
// ===========================================================
// ===========================================================
//EXAMPLE 9
//from EXAMPLE 8
thisArray = ["sage", "rosemary", "parsley", "thyme"];
thatArray = ["basil", "cilantro", ...thisArray, "coriander"];
console.log(thatArray); //would print an array value ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'];
// ===========================================================
// ===========================================================
//EXAMPLE 10
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
let notFound = fruits.indexOf("dates");
let found1 = fruits.indexOf("oranges");
let found2 = fruits.indexOf("pears");
console.log(notFound); //would print the number -1
console.log(found1); // would print the number 2
console.log(found2); //would print the number 1
// ===========================================================
// ===========================================================
//EXAMPLE 11
