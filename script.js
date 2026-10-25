
 // Day 055 - Checking Arrays with some() and every()

const numbers = [12, 7, 25, 4, 18];

// 1. Is at least one number greater than 20?
const hasLargeNumber = numbers.some(number => number > 20);

console.log("Any number greater than 20?", hasLargeNumber);

// 2. Are all numbers greater than 0?
const allPositive = numbers.every(number => number > 0);

console.log("All numbers greater than 0?", allPositive);

// 3. Are all numbers greater than 10?
const allAboveTen = numbers.every(number => number > 10);

console.log("All numbers greater than 10?", allAboveTen);

// 4. Is any number negative?
const hasNegative = numbers.some(number => number < 0);

console.log("Any negative number?", hasNegative);
