Day 045 - JavaScript Utility Collection

What I practiced

* Organizing related functions into one file
* Using function declarations and arrow functions
* Working with strings and numbers
* Returning Boolean values
* Validating input
* Testing functions with different arguments

What I learned

* Small functions are easier to reuse and maintain.
* Each function should have a clear responsibility.
* Input validation helps prevent invalid values from being used.
* Refactoring means improving code organization without unnecessarily changing its intended behavior.

Utilities included

1. isEven(number) — checks whether a number is even.
2. celsiusToFahrenheit(celsius) — converts Celsius to Fahrenheit.
3. countCharacters(text) — counts characters after trimming surrounding whitespace.
4. isPalindrome(word) — checks whether a word reads the same forward and backward.
5. calculateTip(bill, percentage) — calculates a tip.
6. convertToNumber(value) — converts valid numeric text into a number.

How to run

node day-045/script.js

Example

console.log(isEven(10)); 
console.log(celsiusToFahrenheit(25));
console.log(isPalindrome("level"));

Output:

true
77
true
