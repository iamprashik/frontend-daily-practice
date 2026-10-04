Day 033 - null and undefined

What I practiced

Understanding the difference between null and undefined.

What I learned

* undefined usually means a variable has been declared but has not been given a value.
* null means we intentionally set a value to “nothing”.
* Both represent the absence of a value.
* typeof undefined returns "undefined".
* typeof null returns "object" because of a historical JavaScript behavior.

Example

let username;
const selectedUser = null;
console.log(username);
console.log(selectedUser);

Expected output

undefined
null

Run

node day-033/script.js
