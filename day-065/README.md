Day 065 - Count Repeated Values

What I practiced

* Using reduce() to count repeated values.
* Building an object dynamically.
* Accessing object properties using bracket notation.
* Updating object property values.

What I learned

* reduce() can build an object instead of just calculating a number.
* The accumulator stores the current counts.
* Bracket notation allows us to use a variable as a property key.
* We can use if...else to check whether a property already exists.
* Returning the accumulator allows the next iteration to continue with the updated object.

Example

const fruits = ["Apple", "Banana", "Apple", "Orange", "Banana", "Apple"];
const fruitCount = fruits.reduce((counts, fruit) => {
    if (counts[fruit]) {
        counts[fruit]++;
    } else {
        counts[fruit] = 1;
    }
    return counts;
}, {});
console.log(fruitCount);
// { Apple: 3, Banana: 2, Orange: 1 }
