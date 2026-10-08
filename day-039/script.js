// Calculate the tip
function calculateTip(bill, tipPercentage) {
    return bill * tipPercentage / 100;
}


// Calculate the total bill
function calculateTotal(bill, tip) {
    return bill + tip;
}


// Example bill
const bill = 50;
const tipPercentage = 15;

const tip = calculateTip(bill, tipPercentage);
const total = calculateTotal(bill, tip);

console.log("Bill: $" + bill);
console.log("Tip: $" + tip);
console.log("Total: $" + total);
