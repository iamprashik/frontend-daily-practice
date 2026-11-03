Day 062 - Remove Duplicates with Set

What I practiced

* Creating a Set using new Set().
* Removing duplicate values from an array.
* Converting a Set back into an array using spread syntax.

What I learned

* A Set only stores unique values.
* Duplicate values are automatically ignored.
* The spread operator (...) can convert a Set into an array.
* A Set preserves the insertion order of unique values.

Example

const numbers = [10, 20, 10, 30, 20, 40];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);
// [10, 20, 30, 40]
