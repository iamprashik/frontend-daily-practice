Day 061 - Reverse an Array

What I practiced

* Using the reverse() method.
* Understanding how array elements change positions.
* Reversing an array without modifying the original using spread syntax.

What I learned

* reverse() changes the order of elements in an array.
* reverse() modifies the original array.
* Spread syntax creates a shallow copy.
* Combining [...array].reverse() allows us to reverse an array without changing the original.

Example

const numbers = [10, 20, 30, 40];
const reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers);
// [40, 30, 20, 10]
