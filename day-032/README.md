Day 032 - Truthy and Falsy Values

What I practiced

Understanding how JavaScript treats different values as true or false inside conditions.

What I learned

JavaScript values can be truthy or falsy.

Common falsy values

These values are treated as false in a condition:

false
0
""
null
undefined
NaN

Most other values are truthy.

For example:

if ("Hello") {
    console.log("This is truthy.");
}

Example

const username = "";
if (username) {
    console.log("Username exists.");
} else {
    console.log("Username is empty.");
}

Expected output

Username is empty.

Run

node day-032/script.js
