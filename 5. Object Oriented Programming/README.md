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
