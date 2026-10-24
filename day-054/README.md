Day 054 - Finding Array Items with find() and findIndex()

What I practiced

* Finding an element with find()
* Finding an element’s index with findIndex()
* Using arrow functions as callback functions
* Handling cases where no item matches

What I learned

* find() returns the first element that satisfies a condition.
* findIndex() returns the index of the first matching element.
* find() returns undefined if no element matches.
* findIndex() returns -1 if no element matches.
* Both methods stop searching after the first match.

Example

const numbers = [5, 12, 20, 8];
console.log(numbers.find(number => number > 10));
console.log(numbers.findIndex(number => number > 10));

Output:

12
1
