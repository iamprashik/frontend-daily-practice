Day 073 - Object.values()

Date: 2026-11-09

What I practiced

* Using Object.values() to retrieve object values.
* Counting values using .length.
* Looping through object values.
* Understanding the difference between Object.keys() and Object.values().

What I learned

* Object.values() returns an array of an object’s own enumerable property values.
* .length tells us how many values are in the array.
* We can use a for...of loop to access each value.

Example

const student = {
    name: "Alex",
    age: 22,
    grade: 85
};
console.log(Object.values(student));

Output:

[ 'Alex', 22, 85 ]
