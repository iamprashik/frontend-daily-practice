Day 038 - Temperature Converter

What I practiced

Converting temperatures between Celsius and Fahrenheit using functions.

What I learned

* Celsius and Fahrenheit use different formulas.
* A function can perform a calculation and return the result.
* We can use returned values in other parts of our program.
* The Celsius to Fahrenheit formula is:

(Celsius × 9 / 5) + 32

* The Fahrenheit to Celsius formula is:

(Fahrenheit - 32) × 5 / 9

Example

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
const result = celsiusToFahrenheit(20);
console.log(result);

Expected output

68

Run

node day-038/script.js
