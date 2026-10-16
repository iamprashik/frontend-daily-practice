Day 047 - Adding and Removing Array Elements

What I practiced

* Adding elements with push() and unshift()
* Removing elements with pop() and shift()
* Observing how an array changes after each operation

What I learned

* push() adds an element to the end of an array.
* pop() removes the last element.
* unshift() adds an element to the beginning.
* shift() removes the first element.
* These methods modify the original array.
* Adding methods return the new array length; removing methods return the removed element.

Example

const fruits = ["Apple", "Banana"];
fruits.push("Orange");
fruits.shift();
console.log(fruits);

Output:

[ 'Banana', 'Orange' ]
