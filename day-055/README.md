Day 055 - Checking Arrays with some() and every()

What I practiced

* Using some() to check whether at least one array element meets a condition.
* Using every() to check whether all array elements meet a condition.
* Using arrow functions as callback functions.
* Understanding Boolean return values (true and false).

What I learned

* some() returns true when at least one element passes the test.
* every() returns true only when all elements pass the test.
* Both methods return Boolean values instead of returning the matching elements.
* Both methods stop early when the result is determined.

Example

const numbers = [12, 7, 25, 4, 18];
console.log(numbers.some(number => number > 20)); // true
console.log(numbers.every(number => number > 0)); // true
console.log(numbers.every(number => number > 10)); // false
