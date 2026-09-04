const age = 23;
const hasLicense = true;
const hasCar = false;

// AND (&&)
// Both conditions must be true
console.log("Can drive:", age >= 18 && hasLicense);

// OR (||)
// At least one condition must be true
console.log("Has transportation:", hasLicense || hasCar);

// NOT (!)
// Reverses true to false or false to true
console.log("Does not have a car:", !hasCar);

// Using logical operators with an if statement
if (age >= 18 && hasLicense) {
  console.log("You are allowed to drive.");
}

if (hasCar || hasLicense) {
  console.log("You have a transportation option.");
}