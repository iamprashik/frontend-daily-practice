// Calculate BMI
function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

// Categorize BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity range";
    }
}

// Example person's measurements
const weight = 70; // kilograms
const height = 1.85; // metres

const bmi = calculateBMI(weight, height);
const category = getBMICategory(bmi);

console.log("Weight:", weight, "kg");
console.log("Height:", height, "m");
console.log("BMI:", bmi.toFixed(2));
console.log("Category:", category);
