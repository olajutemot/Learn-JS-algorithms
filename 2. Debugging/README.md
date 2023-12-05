Welcome! 👋😊

------I AM LEARNING HOW TO DEBUG MY JAVASCRIPT PROGRAM------
Debugging is the process of going through my code, finding any issues, and fixing them.
Issues in code generally come in three forms:

1. syntax errors that prevent my program from running,
2. runtime errors where my code has unexpected behavior,
3. logical errors where my code doesn't do what I intended.

------Use the JavaScript Console to Check the Value of a Variable------
Javascrit console also know as DevTools are present on our firefox or chrome browser, and they can be use for debugging our javascript code.
We can find our DevTool by checking our browser's menu or using cltrl+shift+i to open the DevTool.
The console.log() method, "prints" the output of what's within its parentheses to the console, and this will likely be the most helpful debugging tool by placing it at strategic points in our code, we can show the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of our calculations throughout our code will help narrow down where the problem is.
---EXAMPLE 1 (in regex.js file )

------Understanding the Browser Console------
There are many methods to use with console to output messages. log, warn, and clear to name a few.
---EXAMPLE 2 (in regex.js file )

------Use typeof to Check the Type of a Variable------
In JS there are different data types we have the primitive ones and the immutable ones Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020). we also have one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.
so we can use typeof to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls.
---EXAMPLE 3 (in regex.js file )

------Catch Mixed Usage of Single and Double Quotes------
JavaScript allows the use of both single (') and double (") quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.
Having two choices is great when a string has contractions or another piece of text that's in quotes. Just that we have to be careful that we don't close the string too early, which causes a syntax error.
It is also okay to use only one style of quotes. we can escape the quotes inside the string by using the backslash (\) escape character:
---EXAMPLE 4 (in regex.js file )

------Catch Missing Open and Closing Parenthesis After a Function Call------
When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.
---EXAMPLE 5 (in regex.js file )
