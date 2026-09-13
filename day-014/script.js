// Decimal numbers
const number1 = 4.7;
const number2 = 4.2;

// Math.round() rounds to the nearest whole number
console.log("Math.round(4.7):", Math.round(number1));
console.log("Math.round(4.2):", Math.round(number2));

// Math.floor() always rounds down
console.log("Math.floor(4.7):", Math.floor(number1));
console.log("Math.floor(4.2):", Math.floor(number2));

// Math.ceil() always rounds up
console.log("Math.ceil(4.7):", Math.ceil(number1));
console.log("Math.ceil(4.2):", Math.ceil(number2));

// Example with a price
const price = 19.75;

console.log("Original price:", price);
console.log("Rounded price:", Math.round(price));
console.log("Price rounded down:", Math.floor(price));
console.log("Price rounded up:", Math.ceil(price));