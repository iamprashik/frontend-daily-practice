Day 070 - Nested Objects

What I practiced

* Creating objects inside other objects.
* Accessing nested properties using dot notation.
* Updating nested properties.
* Adding and deleting nested properties.
* Using optional chaining.

What I learned

* A nested object is an object inside another object.
* We access nested properties by following their property paths.
* Nested properties can be updated just like regular object properties.
* Objects can contain multiple levels of nesting.
* Optional chaining (?.) helps prevent errors when a property might be missing.

Example

const student = {
    name: "Alex",
    address: {
        city: "Toronto",
        country: "Canada"
    }
};
console.log(student.address.city);
// Toronto
student.address.city = "Brampton";
console.log(student.address.city);
// Brampton
