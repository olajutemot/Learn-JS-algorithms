Welcome! 👋😊
------I AM LEARNING HOW TO USE REGULAR EXPRESSIONS IN JAVASCRIPT------
Regular Expressions (Regex) are used in programming languages to match parts of strings. we can create patterns to help with that matching. Regular expressions are the patterns that allow us to describe, match, or parse text. With regular expressions, we can do things like find and replace text, verify that input data follows the format required, and other similar things.

------MATCH LITERAL STRINGS AND USING THE REGULAR EXPRESSION METHODS--------
The first Regex method is the .test() method: this method compares the target text with the regular expression and returns a boolean value accordinly, if there is a match, it returns true and if there is no match, it returns false.
---EXAMPLE 1 (in regex.js file )

------MATCHING A LITERAL STRING WITH DIFFERENT POSSIBILITIES-------
This process can also be called the ALTERNATION. Alternation is yet another way you can specify a set of options i.e we can search for multiple patterns using the alternation.

Using regexes like /learn/ in Example 1, you can look for the pattern learn in another string, This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |
---EXAMPLE 2 (in regex.js file )

------IGNORE CASE WHILE MATCHING-------
