Day 053 - Sorting Arrays

What I practiced

* Sorting strings with sort()
* Sorting numbers in ascending order
* Sorting numbers in descending order
* Using arrow functions as comparison callbacks
* Copying arrays with spread syntax

What I learned

* sort() modifies the array it is called on.
* By default, sort() compares values as strings.
* (a, b) => a - b sorts numbers in ascending order.
* (a, b) => b - a sorts numbers in descending order.
* [...array] creates a shallow copy so the original array can be preserved.

Example

const numbers = [30, 5, 20, 10];
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log(sortedNumbers);

Output:

[ 5, 10, 20, 30 ]
