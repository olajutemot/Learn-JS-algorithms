Welcome! 👋😊

------I AM LEARNING BASIC DATA STRUCTURES IN JAVASCRIPT------
In this Basic Data Structures course, we'll learn more about the differences between arrays and objects, and which to use in different situations. We'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.

------Use an Array to Store a Collection of Data------
An array [] can be one-dimensional or multi-dimensional. A one-dimensional array has only one level, i.e it does not have any array or object nested in it. But a multi-dimensional array are arrays that contains other array. we can check the lenght of an array i.e the number of elements in the array by using the Array.lenght method. Arrays are also capable od storing complex objects.
---EXAMPLE 1 (in regex.js file )

------Access an Array's Contents Using Bracket Notation------
we have learnt how to store data inside an array, the purpose of storing data is probably to use them in the future, so how can we access our data that was store?, this can be done using the bracket notation. n an array, each array item has an index. The index of an element can also be termed as the position and a way to reference the position of the element in the array. JavaScript arrays are zero-indexed, meaning that the first element of an array is actually at the zeroth position, not the first. In order to retrieve an element from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a variable which references an array object.
---EXAMPLE 2 (in regex.js file )
NOTE: In addition to accessing the value associated with an index, you can also set an index to a value using the same notation:

------Add Items to an Array with push() and unshift()------
arrays are mutable objects and their lenght can be modified by adding element to the either at the begining of the array or at the end. this process of adding one or more new items to an array can be done by the .push() and the .unshift() methods, and this methods are used on the array we want to mutate.
---EXAMPLE 3 (in regex.js file )

------Remove Items from an Array with pop() and shift()------
Before now we learnt methods we can use to mutate an array, by adding new elements. yes we can also remove an element from an array anf this is done with the .pop() and .shift() methods. like their cousins .push() and .unshift(), the .pop() method removes the last element of the array it is appended to and .shift() method removes the first item of the array. the major diference betyween this cousins is that the methods that remove items from an array does take in a parameter unlike the ones thst add items to an array which takes the item to ne added as the parameter.
---EXAMPLE 4 (in regex.js file )
NOTE: we can also store the elements we are removing in a variable to be reuses in our code. check example 4 as well.

------Remove Items Using splice()------
so earlier we learnt how to remove the first and last item of an array alone, what if we want to remove an item from the middle of an array. that is where the .splice() method comes in play. This method takes in 3 parameters but we will focus on just the first two for now. Note that the .splice() can remove more than one item from an array and it does this in a consequtive mannaer, which is why the first parameter represent the the index number where you want it to start removing the items and the second parameter represent how many number of items you want to delete or remove.
we can also store the removed items in a new variable as the .splice() method returns the items it removed in a new array.
---EXAMPLE 5 (in regex.js file )

------ADD Items Using splice()------
the .splice() method as said earlier can take in 3 parameters but we only mentioned two before, well, we can use the third parameter, it comprised of one or more element(s) we would like to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
note: the parameters can be assigned to a variable first before use in the .splice() method.
---EXAMPLE 6 (in regex.js file )

------Copy Array Items Using slice()------
The next method we will cover is .slice(). Rather than modifying an array using the .splice() and others, .slice() copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. .slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:
---EXAMPLE 7 (in regex.js file )

------Copy an Array with the Spread Operator------
before now, we talked about how the .slice() allows us to be selective about what elements of an array to copy or extract, among several other useful tasks, ES6's new spread operator(...) allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: (...)
---EXAMPLE 8 (in regex.js file )

------Combine Arrays with the Spread Operator------
We can combine differnt arrays using the spread operator on the array we would like to include into another array i.e to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another
---EXAMPLE 9 (in regex.js file )

------Check For The Presence of an Element With indexOf()------
Since arrays can be changed, or mutated, at any time, there's no guarantee about where a particular piece of data will be on a given array, or if that element even still exists. Luckily, JavaScript provides us with another built-in method, .indexOf(), that allows us to quickly and easily check for the presence of an element on an array. .indexOf() method takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
---EXAMPLE 10 (in regex.js file )

------Add Key-Value Pairs to JavaScript Objects------
Javascript object at their basics are a collection of key-value pairs, the value can also be called thr piece of data that is mapped to a unique identifier (keys) also called properties. we can also add new values to an existing object by using the dot notation. in cases where the property or key to ne added has a space between them, we use the bracket notation [], and written in quotes, if not without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is.
---EXAMPLE 11 (in regex.js file )

------Modify an Object Nested Within an Object------
An object can also be nested inside another object as the value of one the properties of the higher leveled object. to access such deeply seated object we can still use our dot notation.
---EXAMPLE 12 (in regex.js file )

------Use the delete Keyword to Remove Object Properties------
before now we have been able to add a key-value pair to an object and also modify the value of a property. we can also delete a key-value pair from an object and this can be done using the delte keyword.
---EXAMPLE 13 (in regex.js file )

------Check if an Object has a Property------
Now we know how to ADD, REMOVE, and MODIFY the key-value pairs of an object, But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the (in) keyword. Both ways will return a boolean value.
---EXAMPLE 14 (in regex.js file )

------Iterate Through the Keys of an Object with a for...in Statement------
