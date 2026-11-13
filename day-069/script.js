
// Day 069 - Add, Update, and Delete Object Properties

const student = {
    name: "Alex",
    age: 22,
    program: "Computer Science"
};

// 1. Add a new property
student.grade = 85;

// 2. Update an existing property
student.age = 23;

// 3. Delete a property
delete student.program;

console.log(student);
