//EXAMPLE 1
// 1. Mathematical Functions example
function square(x) {
  return x * x;
}
// Non-functional function with side effect
let y = 10;
function squareWithSideEffect() {
  y = y * y;
}
//2. Avoiding Changing State and Mutable Data:
// Immutable data
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2);
//3. Declarative Programming Paradigm:
// Imperative (non-functional) approach
const numbersImp = [1, 2, 3];
let squaredNumbersImp = [];
for (let i = 0; i < numbersImp.length; i++) {
  squaredNumbersImp.push(numbersImp[i] * numbersImp[i]);
}

// Declarative (functional) approach
const numbersDec = [1, 2, 3];
const squaredNumbersDec = numbersDec.map((num) => num * num);
//4. Pure Functions:
// Pure function
function add(a, b) {
  return a + b;
}

// Impure function (with side effect)
let total = 0;
function addToTotal(x) {
  total += x;
  return total;
}
//5. Higher-Order Functions:
// Higher-order function
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
// ===========================================================
// ===========================================================
//EXAMPLE 2
//Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC); //would print two arrays value [ 'greenTea','greenTea','greenTea',... ]
/*[ 'blackTea','blackTea','blackTea',...]*/

// ===========================================================
// ===========================================================
//EXAMPLE 3
