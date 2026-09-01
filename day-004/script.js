// Different types of values
const name = "Prashik";
const age = 23;
const isLearning = true;
let currentProject;

// Checking types using typeof
console.log("Name type:", typeof name);
console.log("Age type:", typeof age);
console.log("Learning type:", typeof isLearning);
console.log("Current project type:", typeof currentProject);

// Type checking with conditions
if (typeof name === "string") {
  console.log("Name is a string.");
}

if (typeof age === "number") {
  console.log("Age is a number.");
}

if (typeof isLearning === "boolean") {
  console.log("isLearning is a boolean.");
}