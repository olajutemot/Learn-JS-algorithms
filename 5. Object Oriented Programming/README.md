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
The constructor Function can be called the instance Object and every propert created using the this keyword in this function is called the Own Properties. Note, every instance of the instance object i.e every object created from the constructor function will have its own copy of the Own propwerties. we can confirm this using a for-in loop.
---EXAMPLE 8 (in regex.js file)

------Use Prototype Properties to Reduce Duplicate Code------
For properties that will be constant in every copy of our created instance of the constructor function, a .prototype method can be used, and this is present in every constructor function ot instance object as it allows us to send a property through to all instace of the instance object. implicitly creating this variable like in the examples we have before will not be an issue when we have just like two instance of the instance object created, that means we just have two variables, but in a case where millions of new objects will be created from he constructor function, that will be a repititive task using up or space unnecessarily by creating multiple variables, but this can be avoided by using the .prototype method on the instance Object.
NOTE: dont miss Instance Object with Instance of the instance object, the instance object is the constructor function, and any new object created from the constructor function, is an instance of the instance object.
---EXAMPLE 9 (in regex.js file)

------Iterate Over All Properties------
We have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance or instance object itself. And prototype properties are defined on the prototype. the protoype properties are not created as own properties for instance of the object instance created i.e are not created as a new property and value pair inside the new instance of the object created, but when they can be refrenced because of what is called prototypal inheritance i.e the instance of the object instance will inherit the propotype properties and when the property is called on them, first they look at their own properties and if its not there, they move up to look at the object instance prototype properties to give the value.
---EXAMPLE 10 (in regex.js file)
