//EXAMPLE 1
console.log("hello world!"); //will print the string "hello world!" to the console.
// ===========================================================
// ===========================================================
//EXAMPLE 2
console.clear(); //will clear the console
// ===========================================================
// ===========================================================
//EXAMPLE 3
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven); //will print the string "number"
console.log(typeof three); //will print the string "string"
// ===========================================================
// ===========================================================
//EXAMPLE 4
let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml); //will print string "<p>Click here to <a href="#Home">return home</a></p>"
// ===========================================================
// ===========================================================
//EXAMPLE 5
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}
let result = getNine;
console.log(result); //will print function refrence ƒ getNine() {let x = 6; let y = 3; return x + y;}
result = getNine();
console.log(result); //will print number 9
// ===========================================================
// ===========================================================
//EXAMPLE 6
