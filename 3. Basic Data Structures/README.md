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
so earlier we learnt how to remove the first and last item of an array alone, what if we want to remove an item from the middle of an array. that is where the .splice() method comes in play. This method takes in 3 parameters but we will focus on just the first two fro now. Note that the .splice() can remove more than one item from an array and it does this in a consequtive mannaer, which is why the first parameter represent the the index number where you want it to start removing the items and the second parameter represent how many number of items you want to delete or remove.
we can also store the removed items in a new variable as the .splice() method returns the items it removed in a new array.
---EXAMPLE 5 (in regex.js file )
