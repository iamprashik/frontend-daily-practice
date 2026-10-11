Day 042 - Remove Whitespace from a Username

What I practiced

* Using the trim() method
* Cleaning strings
* Storing returned string values in variables
* Checking string length

What I learned

* trim() removes whitespace from both ends of a string.
* trimStart() removes whitespace from the beginning.
* trimEnd() removes whitespace from the end.
* These methods return a new string instead of changing the original string.

Example

const username = "   Prashik   ";
const cleanedUsername = username.trim();
console.log(cleanedUsername);

Output:

Prashik
