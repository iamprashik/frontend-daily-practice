Day 050 - Transforming Arrays with map()

What I practiced

* Using the map() array method
* Transforming strings and numbers
* Returning values from callback functions
* Using arrow functions with arrays

What I learned

* map() runs a function on every array element.
* The returned values form a new array.
* The original array remains unchanged unless I modify it separately.
* Arrow functions can make map() code shorter and easier to read.

Example

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

Output:

[ 2, 4, 6 ]
