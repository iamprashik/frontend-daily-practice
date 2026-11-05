
 // Day 064 - Calculate an Average

const numbers = [10, 20, 30, 40, 50];

// Calculate the sum
const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);

// Calculate the average
const average = sum / numbers.length;

console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);
