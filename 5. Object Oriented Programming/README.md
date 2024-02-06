Welcome! 👋😊

------I AM LEARNING Object Oriented Programming IN JAVASCRIPT------
OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes organize code to describe things and what they can do.
In this course, you'll learn the basic principles of OOP in JavaScript, including the this keyword, prototype chains, constructors, and inheritance..

------Use Dot Notation to Access the Properties of an Object------
We can access the value of a property in an object by using the dot notation
---EXAMPLE 1 (in regex.js file )

------Create a Method on an Object------
Objects can have a special type of properties called Methods. Methods are fumctions that are a property of an object, i.e when a fuction is written inside an object. they can also be accessed using the dot notation.
---EXAMPLE 2 (in regex.js file )

------Make Code More Reusable with the (this) Keyword------
in the above examples we explained how to access an object properties using the dot notation to link name of the properties with the name of the object like so (dog.name), this is a valid way of accessinf the value of an objects property right but it has a pitfalls, in that if any variable name or the object name changes, it has to be updated in the code where it has been refrenced. This is not a big issue when working with a short object, but when we are a dealing with a big object that has a lot of properties refrencing it, we can use the (this) keyword to solve the issue.  
---EXAMPLE 3 (in regex.js file )

------Define a Constructor Function------
Constructors are functions that creates new objects, a constructor function acts as a blueprint for the new objects to be created, where they define the properties and behaviour that will belong to the new object as the properties and value.
Constructors follow a few conventions:
--Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
--Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
--Constructors define properties and behaviors instead of returning a value as other functions might.
---EXAMPLE 4 (in regex.js file)

------Use a Constructor to Create Objects------
We've established the fact that a constructor function can be used to create an object, this can be done by calling the (new) keyword on the constructor function. this will create a new obect with the variable name it is assigned to as the name of the object.
NOTE: (this) inside the constructor always refers to the object being created.
---EXAMPLE 5 (in regex.js file)

------Extend Constructors to Receive Arguments------
Constructors are awesome because we can create multiple objects from them, but from our example earlier all objects created will have the same value because the behaviour has been specified. what if we want to create different objects from a single constructor function to have the same properties but different values. For example we what to have an object describing each of the dogs in a vet clinic. Thats where passing an argument comes in. The constructor function can recieve parameters and the argument will be passed in when creating the object with the (new) keyword.
---EXAMPLE 6 (in regex.js file)

------Verify an Object's Constructor with instanceof------
when an object is created from a constructor function, that object is said to be an instance of the constructor function. Some times we want to know if an object is created from the constructor function, and this can be achieved by using the (instancof) operator, this opeerator returns true or false if the object is from the constructor function or not.
---EXAMPLE 7 (in regex.js file)

------Understand Own Properties------
The Own Properties are defined directly on the object instance. Note, we can have different copies of object instance created from a constructor function, and they will all their own copy of the Own properties. we can confirm this using a for-in loop.
---EXAMPLE 8 (in regex.js file).

------Use Prototype Properties to Reduce Duplicate Code------
For properties that will be constant in every copy of our created instance of the constructor function, a .prototype method can be used, and this is present in every constructor function as it allows us to send a property through to all object instance. Implicitly creating this variable like in the examples we have before will not be an issue when we have just like two object instance created, that means we just have two variables, but in a case where millions of new object intances will be created from the constructor function, that will be a repititive task using up space unnecessarily by creating multiple variables, but this can be avoided by using the .prototype method on the constructor function.
---EXAMPLE 9 (in regex.js file)

------Iterate Over All Properties------
We have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype. the protoype properties are not created as own properties for the object instance created i.e are not created as a new property and value pair inside the new object instance created, but they can be refrenced because of what is called prototypal inheritance i.e the object instance will inherit the propotype properties and when the property is called on them, first they look at their own properties, and if its not there, they move up to look at the prototype properties to give the value.
---EXAMPLE 10 (in regex.js file)

------Understand the Constructor Property------
Constructor property is a kind of property that is present on the instances of the objects created, it is a refrence to the constructor function, it returns boolean and it can be used to check if an object is created from a constructor function.
Note: Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.
---EXAMPLE 11 (in regex.js file)

------Change the Prototype to a New Object------
We have explained why a prototype is used on a constructor function, i.e it can be used to prevent the repititive creation of properties that are to be constance throught out the copy of our object intances to be created, but in cases where we have multiple properties that are constant throughout our copy of object instnaces, we can change the prototype to a new object that contains all the properties and it be added at once to the object instances if called on them.
---EXAMPLE 12 (in regex.js file)

------Remember to Set the Constructor Property when Changing the Prototype------
The prototype is originally an object, but when we manually set the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results. this feature can be retained by implicitly setting the constructor in the new prototype object.
---EXAMPLE 13 (in regex.js file)

------Understand Where an Object’s Prototype Comes From------
It is important to be able to check where a prototype that has been inherited by an object intance is coming from i.e know the parent constructor function, this is like performing a DNA test on the Object instance. This can be achieved by using the .isPrototypeOf method on the prototype object, and it returns a boolean value.
---EXAMPLE 14 (in regex.js file)

------Understand the Prototype Chain------
The .hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it). All objects in JS has its own prototype and every objects prototype as said earlier is also an object. so the chain goes up till the last object as a prototype of null.
obj-->obj.prototype-->obj.prototype.prototype(if available)-->Object.prototype-->null.
This prototypal inheritance explains the dynamic nature of JS and differntiates it from class based programming language like java and C++.
---EXAMPLE 15 (in regex.js file): From our example,
The hasOwnProperty method is defined in Object.prototype, which can be accessed by Dog.prototype, which can then be accessed by beagle. This is an example of the prototype chain. In this prototype chain, Dog is the supertype for beagle, while beagle is the subtype. Object is a supertype for both Dog and beagle. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.
NOTE: Object.prototype is present in every JS Object

------Use Inheritance So You Don't Repeat Yourself------
DRY is a term in programming and it literally means making your code as dry as possible, not repeating codes as this can make our code prone to errors. When dealing with constructor and working with objects, the theory of inheritance can be of importance.
For example, when we have two or more different construction functions with the same methods in their prototype, we can write a new constructor function and give its prototype the method. this new function will act as a parent(supertype) where the other construction function will inherit their methods from.
---EXAMPLE 16 (in regex.js file):

------Inherit Behaviors from a Supertype------
last time we have created a supertype but the supposed children dont just inherit from the parent, because at this point there is no link between the supertype we created and the supposed children or substypes. To inherit from a supertype, we create an instance of the supertype. Before now we create an instance of an object using the new keyword, this would work here as well but it has some disadvatages so we use the Object.create() method
Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object.
---EXAMPLE 17 (in regex.js file):

------Set the Child's Prototype to an Instance of the Parent------
In the previous challenge you saw the first step for inheriting behavior from the supertype (or parent) Animal: making a new instance of Animal. but here we are setting the child to an istance of the parent also by using the object.create method
---EXAMPLE 18 (in regex.js file):

------Reset an Inherited Constructor Property------
when an object, inherit its prototype from another object, it also inherit the parent objects constructor. But we want the object to show its on constructor, so this can be st implicitly
---EXAMPLE 19 (in regex.js file):

------Add Methods After Inheritance------
A constructor function, that inherit its proptotype from a parent or supertype prototype, will have all the properties inherited from the supertype and can also have it own unique properties. This is don by setting the properties on the prototype of the constructor function itself using the dot notation.
---EXAMPLE 20 (in regex.js file):

------Add Methods After Inheritance------
In the last section of adding methods after inheritance, we notice how me can add a unique method to a childs prototype so it has both methods from its parents and its own behaviour or methods. With this same method we can override a parents method in the childs prototype, by giving the child a behaviour or method the same name as it is given in the parent, this will override that of the parent.
---EXAMPLE 21 (in regex.js file):
~From the example, below is how javascript searches for a behaviour in an prototype chain.
let penguin = new Penguin(); and you call penguin.fly(), this is how JavaScript looks for the method on the prototype chain of duck:
penguin => Is fly() defined here? No.
Penguin => Is fly() defined here? => Yes. Execute it and stop searching.
Animal => fly() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.

------Use a Mixin to Add Common Behavior Between Unrelated Objects------
As it has been established that a behaviour or method is shared through inheritance, but in cases were we have unrelated objects and we want them to share the same behaviour, Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa. For unrelated objects, it's better to use mixins. A Mixin is a class containing methods or behaviour that can be shared among other classes or objects.
---EXAMPLE 22 (in regex.js file):

------Use Closure to Protect Properties Within an Object from Being Modified Externally------
