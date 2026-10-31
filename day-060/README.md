Day 060 - Spread Operator with Objects

What I practiced

* Copying objects using spread syntax.
* Updating object properties without modifying the original.
* Combining multiple objects.
* Understanding how duplicate properties are handled.

What I learned

* The spread operator (...) copies enumerable properties into a new object.
* Properties can be overwritten by placing a new value after the spread.
* When duplicate properties exist, the last value wins.
* Spread creates a shallow copy, meaning nested objects and arrays are still shared references.

Example

const user = {
    name: "Prashik",
    age: 21
};
const updatedUser = {
    ...user,
    age: 22
};
console.log(updatedUser);
// { name: "Prashik", age: 22 }
