//EXAMPLE 1
const myCar = {
  name: "chrysler",
  numLeg: 4,
};
console.log(myCar.name); //would print string value "chrysler" to console
console.log(myCar.numLeg); //would print number value 4 to console
// ===========================================================
// ===========================================================
//EXAMPLE 2
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog.numLegs + " legs.";
  },
};

console.log(dog.sayLegs()); //will print the string "This dog has 4 legs." to the console
//the function can be an arrow function as well
dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: () => "This dog has " + dog.numLegs + " legs.",
};

console.log(dog.sayLegs()); //will print the string "This dog has 4 legs." to the console
//take note of the return statement in the first example very important.
// ===========================================================
// ===========================================================
//EXAMPLE 3
dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: () => "This dog has " + this.numLegs + " legs.",
};

console.log(dog.sayLegs()); //will print the string "This dog has 4 legs." to the console
//this is a deep topic, and the above example is only one way to use it.
//In the current context, (this) refers to the object that the method is associated with: dog.
//If the object's name is changed to mallard, it is not necessary to find all the references to dog in the code.
//It makes the code reusable and easier to read.
// ===========================================================
// ===========================================================
//EXAMPLE 4
function Dog() {
  this.name = "Teddy";
  this.color = "brown";
  this.numLegs = 4;
}
// ===========================================================
// ===========================================================
//EXAMPLE 5
//from last example, we can create a new instance of Dog as
let hound = new Dog();
//Notice that the new operator is used when calling a constructor.
//This tells JavaScript to create a new instance of Dog called hound.
//Without the (new) operator, (this) inside the constructor would not point to the newly created object, giving unexpected results.
//Now hound has all the properties defined inside the Bird constructor:
hound.name;
hound.color;
hound.numLegs;
//Just like any other object, its properties can be accessed and modified:
hound.name = "Jackie";
// ===========================================================
// ===========================================================
//EXAMPLE 6
