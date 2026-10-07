// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const fahrenheit = celsiusToFahrenheit(20);

console.log("20°C =", fahrenheit + "°F");


// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const celsius = fahrenheitToCelsius(68);

console.log("68°F =", celsius + "°C");


// Try another temperature
const temperature1 = celsiusToFahrenheit(30);

console.log("30°C =", temperature1 + "°F");


// Try another temperature
const temperature2 = fahrenheitToCelsius(86);

console.log("86°F =", temperature2 + "°C");
