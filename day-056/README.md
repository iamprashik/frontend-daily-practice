Day 056 - Introduction to reduce()

What I practiced

* Using reduce() to combine array elements into one result.
* Adding array values together.
* Understanding the accumulator and current element.
* Providing an initial value for the accumulator.

What I learned

* reduce() processes array elements and accumulates a result.
* The accumulator stores the result calculated so far.
* The current element is the array value being processed.
* The initial value determines the accumulator’s starting value.
* reduce() can return a number, string, object, or another type, depending on the operation.

Example

const numbers = [10, 20, 30, 40];
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
console.log(total); // 100
