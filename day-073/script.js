
const student = {
    name: "Alex",
    age: 22,
    program: "Computer Science",
    grade: 85
};

// Get all property values
const values = Object.values(student);

console.log(values);

// Get the number of values
console.log(values.length);

// Loop through each value
for (const value of values) {
    console.log(value);
}
