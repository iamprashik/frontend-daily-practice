Day 044 - Palindrome Checker

What I practiced

* Creating a function that returns a Boolean value
* Converting strings to lowercase
* Using split(), reverse(), and join()
* Comparing strings with ===

What I learned

* A palindrome reads the same forward and backward.
* split("") converts a string into an array of characters.
* reverse() reverses the array.
* join("") combines the array back into a string.
* Comparing the original and reversed strings tells us whether the word is a palindrome.

Example

function isPalindrome(word) {
    const cleanedWord = word.toLowerCase();
    const reversedWord = cleanedWord.split("").reverse().join("");
    return cleanedWord === reversedWord;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));

Output:

true
false
