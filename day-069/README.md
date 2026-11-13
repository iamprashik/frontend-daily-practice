Day 069 - Add, Update, and Delete Object Properties

What I practiced

* Adding new object properties.
* Updating existing property values.
* Deleting object properties.
* Using dot notation and bracket notation.
* Updating properties dynamically using variables.

What I learned

* We can add properties by assigning values to new keys.
* Assigning a new value to an existing key updates that property.
* The delete operator removes a property from an object.
* Bracket notation allows dynamic property access.
* const prevents reassignment of the object variable, but does not prevent modifying its properties.

Example

const student = {
    name: "Alex",
    age: 22
};
// Add
student.grade = 85;
// Update
student.age = 23;
// Delete
delete student.name;
console.log(student);
// { age: 23, grade: 85 }
