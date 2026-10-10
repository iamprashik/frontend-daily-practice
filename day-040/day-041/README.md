Day 041 - Password Length Checker

What I practiced

* Checking string length
* Using functions with parameters
* Using if/else conditions
* Returning messages from functions

What I learned

* The .length property counts the characters in a string.
* An if/else statement can check whether a password meets a minimum length.
* A function can return different messages depending on its input.

Example

function checkPassword(password) {
    if (password.length < 8) {
        return "Password is too short!";
    } else {
        return "Password length is acceptable.";
    }
}
console.log(checkPassword("hello"));

Output:

Password is too short!
