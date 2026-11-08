Day 066 - Flatten a One-Level Array

What I practiced

* Using the flat() method.
* Flattening nested arrays.
* Specifying the flattening depth.
* Understanding how flat() handles the original array.

What I learned

* Flattening converts nested arrays into a single-level array.
* flat() removes one level of nesting by default.
* We can specify the depth using flat(2), flat(3), etc.
* flat(Infinity) flattens all nesting levels.
* flat() returns a new array without modifying the original.

Example

const numbers = [1, 2, [3, 4], [5, 6]];
const flattenedNumbers = numbers.flat();
console.log(flattenedNumbers);
// [1, 2, 3, 4, 5, 6]
