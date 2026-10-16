// Day 047 - Adding and Removing Array Elements

const fruits = ["Apple", "Banana"];

console.log("Original:", fruits);

// Add an item to the end
fruits.push("Orange");
console.log("After push:", fruits);

// Remove the last item
fruits.pop();
console.log("After pop:", fruits);

// Add an item to the beginning
fruits.unshift("Mango");
console.log("After unshift:", fruits);

// Remove the first item
fruits.shift();
console.log("After shift:", fruits);

// Check the final array
console.log("Final array:", fruits);
