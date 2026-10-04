// Example 1: Code without an error
try {
    const number = 10;

    console.log("Number:", number);
} catch (error) {
    console.log("Something went wrong.");
}


console.log("----------------");


// Example 2: Handling an error
try {
    const result = unknownVariable;

    console.log(result);
} catch (error) {
    console.log("An error occurred.");
}


console.log("----------------");


// Example 3: Showing the error message
try {
    const result = unknownVariable;

    console.log(result);
} catch (error) {
    console.log("Error message:", error.message);
}


console.log("----------------");


// The program continues after catch
console.log("Program continues running.");