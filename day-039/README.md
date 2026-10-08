Day 039 - Tip Calculator

What I practiced

Using functions, parameters, return values, and percentages to calculate a restaurant tip.

What I learned

* A percentage can be converted to a decimal by dividing it by 100.
* We can calculate a tip using:

bill × tip percentage / 100

* We can calculate the total using:

bill + tip

* Functions can take multiple parameters and return a result.

Example

function calculateTip(bill, tipPercentage) {
    return bill * tipPercentage / 100;
}
const tip = calculateTip(50, 15);
console.log("Tip:", tip);

Expected output

Tip: 7.5

Run

node day-039/script.js
