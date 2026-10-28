Day 057 - Using reduce() to Count Items and Build Objects

What I practiced

* Using reduce() to count repeated array elements.
* Building an object from an array.
* Using an empty object as the initial accumulator.
* Accessing object properties dynamically.

What I learned

* reduce() can create objects, not just calculate totals.
* counts[artist] accesses a property using the current artist’s name.
* (counts[artist] || 0) + 1 initializes a count at 1 and increments it for repeated items.
* Returning the accumulator carries the updated object into the next iteration.

Example

const artists = ["Beirut", "Radiohead", "Beirut"];
const counts = artists.reduce((result, artist) => {
    result[artist] = (result[artist] || 0) + 1;
    return result;
}, {});
console.log(counts);
// { Beirut: 2, Radiohead: 1 }
