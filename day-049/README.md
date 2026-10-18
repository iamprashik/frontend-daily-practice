Day 049 - Finding Array Elements

What I practiced

* Checking arrays with includes()
* Finding item positions with indexOf()
* Using Boolean results in an if statement
* Understanding zero-based array indexes

What I learned

* includes() returns true if an array contains the specified value.
* indexOf() returns the index of the first match.
* Both methods return useful results when an item is missing: includes() returns false, while indexOf() returns -1.
* String comparisons are case-sensitive.

Example

const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.includes("Banana"));
console.log(fruits.indexOf("Orange"));
console.log(fruits.indexOf("Grapes"));

Output:

true
2
-1
