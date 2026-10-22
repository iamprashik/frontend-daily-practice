// Day 052 - Combining filter() and map()

const numbers = [5, 12, 8, 20, 3, 15];

// Step 1: Keep numbers greater than 10
const numbersGreaterThan10 = numbers.filter(number => number > 10);

// Step 2: Double the remaining numbers
const doubledNumbers = numbersGreaterThan10.map(number => number * 2);

console.log("Original numbers:", numbers);
console.log("Numbers greater than 10:", numbersGreaterThan10);
console.log("Doubled numbers:", doubledNumbers);

// Combine both methods into one expression
const result = numbers
    .filter(number => number > 10)
    .map(number => number * 2);

console.log("Combined result:", result);
