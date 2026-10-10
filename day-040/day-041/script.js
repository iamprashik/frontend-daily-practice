// Check password length
function checkPassword(password) {
    if (password.length < 8) {
        return "Password is too short!";
    } else {
        return "Password length is acceptable.";
    }
}

// Test passwords
const password1 = "hello";
const password2 = "hello12345";

console.log(checkPassword(password1));
console.log(checkPassword(password2));
