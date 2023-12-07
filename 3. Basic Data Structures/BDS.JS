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
