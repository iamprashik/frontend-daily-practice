Day 064 - Calculate an Average

What I practiced

* Using reduce() to calculate the sum of an array.
* Using length to count array elements.
* Calculating an average using division.
* Handling an empty array with a conditional expression.

What I learned

* An average is the sum of all values divided by the number of values.
* reduce() can be used to add all array elements.
* The length property tells us how many elements an array contains.
* An empty array needs to be handled to avoid dividing by zero.

Example

const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);
const average = sum / numbers.length;
console.log(average);
// 30
