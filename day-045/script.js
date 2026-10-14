// Day 045 - JavaScript Utility Collection

// 1. Check whether a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// 3. Count characters after trimming whitespace
function countCharacters(text) {
    return text.trim().length;
}

// 4. Check whether a word is a palindrome
function isPalindrome(word) {
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split("").reverse().join("");

    return cleanedWord === reversedWord;
}

// 5. Calculate a tip
const calculateTip = (bill, percentage) => {
    return bill * percentage / 100;
};

// 6. Safely convert text to a number
function convertToNumber(value) {
    const number = Number(value);

    if (value.trim() === "" || !Number.isFinite(number)) {
        return "Please enter a valid number.";
    }

    return number;
}

// Test the utilities
console.log("Is 10 even?", isEven(10));
console.log("25°C in Fahrenheit:", celsiusToFahrenheit(25));
console.log("Character count:", countCharacters("  JavaScript  "));
console.log("Is level a palindrome?", isPalindrome("level"));
console.log("Tip on $50 at 15%:", calculateTip(50, 15));
console.log("Convert '42':", convertToNumber("42"));
console.log("Convert 'hello':", convertToNumber("hello"));
