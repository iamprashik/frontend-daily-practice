
const student = {
    name: "Alex",
    age: 22,
    program: "Computer Science",
    grade: 85
};

// Get key-value pairs
const entries = Object.entries(student);

console.log(entries);

// Loop through each entry
for (const entry of entries) {
    console.log(entry);
}
