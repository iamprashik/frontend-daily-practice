
const student = {
    name: "Alex",
    age: 22,
    program: "Computer Science",
    grade: 85
};

// Get all property names
const keys = Object.keys(student);

console.log(keys);

// Get the number of properties
console.log(keys.length);

// Loop through each key
for (const key of keys) {
    console.log(key);
}
