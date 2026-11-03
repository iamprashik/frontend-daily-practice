
 // Day 062 - Remove Duplicates with Set

const numbers = [10, 20, 10, 30, 20, 40, 30, 50];

const uniqueNumbers = [...new Set(numbers)];

console.log("Original array:", numbers);
console.log("Without duplicates:", uniqueNumbers);
