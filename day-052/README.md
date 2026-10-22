Day 052 - Combining filter() and map()

What I practiced

* Combining array methods
* Filtering values using conditions
* Transforming values using map()
* Chaining methods together

What I learned

* filter() selects items that meet a condition.
* map() transforms each item in the resulting array.
* Method chaining lets me perform multiple operations in one expression.
* The original array remains unchanged by these methods unless I modify it separately.

Example

const numbers = [2, 5, 8, 11, 14];
const result = numbers
    .filter(number => number > 5)
    .map(number => number * 2);
console.log(result);

Output:

[ 16, 22, 28 ]
