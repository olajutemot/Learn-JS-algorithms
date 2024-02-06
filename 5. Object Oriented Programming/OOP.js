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
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let germanSherperd = new Dog("Jerry", "white");
//the germanSherperd object has the ffg propertis and the value
germanSherperd.name = "jerrry";
germanSherperd.color = "white";
germanSherperd.numLegs = 4;
let boerBoo = new Dog("bob", "black");
boerBoo.name = "bob";
boerBoo.color = "black";
boerBoo.numLegs = 4;
// ===========================================================
// ===========================================================
//EXAMPLE 7
let Bird = function (name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");

crow instanceof Bird; //true
//If an object is created without using a constructor, instanceof will verify that it is not an instance of that constructor:
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2,
};

canary instanceof Bird; //false
// ===========================================================
// ===========================================================
//EXAMPLE 8
function Dog(name) {
  this.name = name;
  this.numLegs = 4;
}

let localDog = new Dog("Barbie");
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); //this will print an array ["name", "numLegs"] to the console
// ===========================================================
// ===========================================================
//EXAMPLE 9
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
console.log(beagle.numLegs); //this will print a number vale 4 to the console
// ===========================================================
// ===========================================================
//EXAMPLE 10
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
beagle = new Dog("Snoopy");
ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps); //will print an array ["name"]
console.log(prototypeProps); //will print an array ["numLegs"]
// ===========================================================
// ===========================================================
//EXAMPLE 11
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  }
  return false;
}

// ===========================================================
// ===========================================================
//EXAMPLE 12
Dog.prototype.numLegs = 4;
Dog.prototype.eat = function () {
  console.log("nom nom nom");
};
Dog.prototype.describe = function () {
  console.log("My name is " + this.name);
};
//the above is when we write them out but this can become tedious after more than a few properties and can be solved below
Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
// ===========================================================
// ===========================================================
//EXAMPLE 13
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};
// ===========================================================
// ===========================================================
//EXAMPLE 14
function Dog(name) {
  this.name = name;
}
beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle); //this would return true
// ===========================================================
// ===========================================================
//EXAMPLE 15
function Dog(name) {
  this.name = name;
}
beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle); // yields true

Object.prototype.isPrototypeOf(Dog.prototype); //yields true
// ===========================================================
// ===========================================================
//EXAMPLE 16
Bird.prototype = {
  constructor: Bird,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log("My name is " + this.name);
  },
};
//Notice in the above the describe method is shared by Bird and Dog:
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log("My name is " + this.name);
  },
};
//notice we craete a new function and give its prototype the method describe
Bird.prototype = {
  constructor: Bird,
};

Dog.prototype = {
  constructor: Dog,
};
//we can then remove it from our code.
// ===========================================================
// ===========================================================
//EXAMPLE 17
//following example from 16 we can create an instance of the supertype
let duck = Object.create(Animal.prototype);
let beagle17 = Object.create(Animal.prototype);

duck.describe(); //will inherit the property
duck instanceof Animal; //true
beagle17.describe(); //will inherit the property
beagle17 instanceof Animal; //true
// ===========================================================
// ===========================================================
//EXAMPLE 18
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle18 = new Dog();
beagle18.eat(); //will inherit the property
console.log(beagle18);
// ===========================================================
// ===========================================================
//EXAMPLE 19
function Animal() {}
function Bird19() {}
function Dog19() {}

Bird19.prototype = Object.create(Animal.prototype);
Dog19.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird19.prototype.constructor = Bird19;
Dog19.prototype.constructor = Dog19;
let duck19 = new Bird19();
let beagle19 = new Dog19();

console.log(duck19.constructor); //will print Bird19
console.log(beagle19.constructor); //will print Dog19
// ===========================================================
// ===========================================================
//EXAMPLE 20
function Animal20() {}
Animal20.prototype.eat = function () {
  return "nom nom nom";
};

function Dog20() {}

// Only change code below this line
Dog20.prototype = Object.create(Animal20.prototype);
Dog20.prototype.constructor = Dog20;
Dog20.prototype.bark = function () {
  return "Woof";
};

// Only change code above this line
let beagle20 = new Dog20();
console.log(beagle20.eat()); //would print the string "nom nom nom" to the console on line 305
console.log(beagle20.bark()); //would print the string "Woof!" to the console on line 314
// ===========================================================
// ===========================================================
//EXAMPLE 21
function Bird21() {}

Bird21.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird21.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly()); //will print the string "Alas, this is a flightless bird." to the console
// ===========================================================
// ===========================================================
//EXAMPLE 22
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = function () {};
};
glideMixin(bird);
glideMixin(boat);
// ===========================================================
// ===========================================================
//EXAMPLE 23
let duckWeight = 35;
function Bird23() {
  let weight = 15;
  this.getExtraWeight = function () {
    return duckWeight - weight;
  };
}
let duck23 = new Bird23();
duck23.weight = 35; //will not work because of closure
console.log(duck23.getExtraWeight()); //will print the number value 20
