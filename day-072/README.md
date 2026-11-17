Day 072 - Object.keys()

Date: 2026-11-08

What I practiced

* Using Object.keys() to get property names.
* Counting object properties using .length.
* Looping through object keys.
* Accessing object values using bracket notation.

What I learned

* Object.keys() returns an array of an object’s own enumerable property names.
* .length tells us how many keys are in the array.
* We can use a loop to access each key.
* object[key] allows us to access a value dynamically.

Example

const student = {
    name: "Alex",
    age: 22,
    grade: 85
};
console.log(Object.keys(student));

Output:

[ 'name', 'age', 'grade' ]
