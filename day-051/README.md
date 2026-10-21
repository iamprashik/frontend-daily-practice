Day 051 - Filtering Arrays with filter()

What I practiced

* Using the filter() array method
* Filtering numbers using conditions
* Using arrow functions
* Creating new arrays from existing arrays

What I learned

* filter() checks each item using a callback function.
* Items are included when the callback returns a truthy value.
* Items that fail the condition are excluded.
* filter() creates a new array without changing the original array by itself.
* map() transforms values, while filter() selects values.

Example

const numbers = [5, 12, 8, 20];
const bigNumbers = numbers.filter(number => number > 10);
console.log(bigNumbers);

Output:

[ 12, 20 ]
