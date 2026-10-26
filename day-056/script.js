
 // Day 056 - Introduction to reduce()

const numbers = [10, 20, 30, 40];

// Add all numbers together
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Total:", total);
