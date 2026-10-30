Day 059 - The Spread Operator

What I practiced

* Copying arrays using spread syntax.
* Combining multiple arrays.
* Adding elements to existing arrays without modifying them.
* Understanding the difference between copying an array and referencing the same array.

What I learned

* The spread operator uses three dots (...).
* Spread expands array elements into a new array.
* It can combine multiple arrays.
* It creates a shallow copy rather than sharing the original array itself.
* Spread and rest use the same syntax but have different purposes.

Example

const artists1 = ["Beirut", "Radiohead"];
const artists2 = ["Coldplay", "Bon Iver"];
const allArtists = [...artists1, ...artists2];
console.log(allArtists);
