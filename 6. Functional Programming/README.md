Welcome! 👋😊

------I AM LEARNING Functional Programming IN JAVASCRIPT------
Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.
In this course, I'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like .map() and .filter().

------Learn About Functional Programming------
Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means that the logic of a program is expressed without explicitly describing the flow control:

1. Mathematical Functions:
   In functional programming, a function is treated as a mathematical function. This means that a function takes some input, processes it, and produces an output without any side effects.
2. Avoiding Changing State and Mutable Data:
   Functional programming discourages changing the state of variables or using mutable data. Instead, it promotes immutability, where once data is created, it cannot be changed.
3. Declarative Programming Paradigm:
   Functional programming is declarative, meaning that you express what you want to achieve without explicitly stating how to achieve it. This contrasts with imperative programming, where you specify the step-by-step instructions.
4. Pure Functions:
   A pure function is a fundamental concept in functional programming. It produces the same output for the same input and has no side effects.
5. Higher-Order Functions:
   Functional programming makes extensive use of higher-order functions, which are functions that take other functions as arguments or return functions.

---EXAMPLE 1 (in regex.js file )

------Understand Functional Programming Terminology------
Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.
---EXAMPLE 2 (in regex.js file )

------Understand the Hazards of Using Imperative Code------
Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (and many other languages), the imperative tense is used to give commands. Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.
---EXAMPLE 3 (in regex.js file )
Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for tabOpen(), tabClose(), and join(). The array tabs is part of the Window object that stores the name of the open pages.
---SOLUTION 3 (in regex.js file )
in the solution slice() method is used in place of splice() becuase the splice method takes an imperative approach by mutating the original array thereby causing a bug in our code, unlike the slice method which extracts the arrays and leaves the parent array untouched.

------Avoid Mutations and Side Effects Using Functional Programming------
If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. Unfortunately, splice changes the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the splice method changed the original array, and resulted in a bug.

Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.
---EXAMPLE 4 (in regex.js file ): Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.

------Pass Arguments to Avoid External Dependence in a Function------
The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.
---EXAMPLE 5 (in regex.js file ): Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

------Refactor Global Variables Out of Functions------
the two main principles of functional programming that weve seen here are:

1. do not alter a variable or object: create new variable or objects in the function, and return them from a function if need be.
2. we want to be able to declare parameters when working with functions, so any computations inside the function will depend on the argument passed into the function.
   ---EXAMPLE 6 (in regex.js file ): write a code so the global array bookList variable is not altered. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

------Use the map Method to Extract Data from an Array------
so far we have learnt how to use pure functions to avoid side effects as compared to object oriented programming. It is called a functional programming becuase it uses the theory of functions for all its processes. functions in javascript are firstclass objects, so functions can be stored as variables, a function can be written in another function etc.
Here we will be looking at some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.
The .map method can be used on an arrays and it is used to loop through the properties of an array. it takes in a call-back function and returns a new array containing the results of calling the callback function on each properties or elements. The call back function is passed 3 arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.
this first example is only using the first argument of the call back function.
---EXAMPLE 7 (in regex.js file ): The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the ratings variable. Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.

------Implement map on a Prototype------
