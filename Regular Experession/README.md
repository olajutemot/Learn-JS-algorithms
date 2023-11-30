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
By default, the regex is case sensitive when matching literals but we can match both cases i.e we can ignore the case sensitivity by using what is called a FLAG. There are other types of flags but the flag that ignore case is the (i) flag. we can use it by appending it to the regex.
---EXAMPLE 3 (in regex.js file )

------EXTRACT MATCHES-------
Before now weve been using the .test() method to know if theres a match in the target string and regex pattern, but we can also extract this match and put them in an array using the .match() method. This is a type of string method analogous to the .test() method which is a type of regex method. To use this method, we apply it to a string and pass in the regex pattern as the argument.
---EXAMPLE 4 (in regex.js file )
NOTE: the .match() syntax is opposite the .test() syntax

------FIND MORE THAN THE FIRST MATCH-------
Before now we have been able to extract or search pattern only once. by default when searching or extracting parttern, it will only extract or search for the first pattern it can find in the target text or string, but to search or extract a pattern more than once, we can use the global search flag (g). we can use it by appending it to the regex.
---EXAMPLE 5 (in regex.js file )
NOTE: we can have multiple flags on our Regex pattern

------Match Anything with Wildcard Period-------
The wildcard character (.) will match any one character. The wildcard is also called dot and period. Sometimes we dont know or we dont need to know the exact charaters in our pattern, in case of a mispelling, thinking of all words that match will tke a long time, but with the wildcard character we can save time.
---EXAMPLE 6 (in regex.js file )

------Match Single Character with Multiple Possibilities-------
Before now we have ben able to learn how to match literal patterns (/learn/) and also using the wildcard character (.). These are both extremes of regular expression as the former matches the exact pattern and the latter matches every possible patterns. in cases where we want to match a single pattern but with differnt possible characters of our choice, we can make use of the character class ([]), and with this we can search for a literal pattern with some flexibility. Character classes allow us to define a group of characters we wish to match by placing them inside square ([ and ]) brackets.
---EXAMPLE 7 (in regex.js file )

------Match Letters of the Alphabet and Range of Numbers-------
Earlier we were able to use character class to specify a group of characters to be matched. In cases where we want to match a large set of alphabets like from (A to Z) or (1 to 100) that will be a lot of typing, so we can define a range of characters inside a character set using a hyphen (-).
---EXAMPLE 8 (in regex.js file )
NOTE: it is possible to combine a range of letters and numbers in a single character set.

------Match Not Specified Single Characters Using The Negated Character Sets-------
Before now weve been creating a set of characters we want to match, we can also specify a set of charater we do not want to match. to do this we place a caret character (^) after the opening bracket and before the characters you do not want to match like this ([^...]). it will match any character that is not listed inside the square brackets.
---EXAMPLE 9 (in regex.js file )

------Match Characters that Occur One or More Times-------
sometimes we want to match characters thats occurs more than one time and this can be done by making use of quantifiers. Quantifiers denote how many times a character, a character class, or group should appear in the target text for a match to occur. here we will be talking about the (+) character. we can use the (+) character to check if a character occurs at least one or more times. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
---EXAMPLE 10 (in regex.js file )

------Match Characters that Occur Zero or More Times-------
another type od quantifier is the _ character, this character is similar to the (+) character but with a slight difference. When we append (_) to a character, it means we want to match any number of that character including none.
