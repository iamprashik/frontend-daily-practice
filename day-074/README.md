Day 074 - Object.entries()

Date: 2026-11-10

What I practiced

* Using Object.entries() to retrieve key-value pairs.
* Looping through object entries.
* Using array destructuring with for...of.
* Accessing keys and values together.

What I learned

* Object.entries() returns an array of key-value pairs.
* Each pair is an array containing a key and its value.
* Array destructuring allows us to access both elements easily.
* It is useful when working with object data.

Example

const student = {
    name: "Alex",
    age: 22,
    grade: 85
};
for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}

Output:

name: Alex
age: 22
grade: 85
