// Check whether a word is a palindrome
function isPalindrome(word) {
    const cleanedWord = word.toLowerCase();

    const reversedWord = cleanedWord
        .split("")
        .reverse()
        .join("");

    return cleanedWord === reversedWord;
}

// Test the function
console.log("level:", isPalindrome("level"));
console.log("hello:", isPalindrome("hello"));
console.log("Madam:", isPalindrome("Madam"));
console.log("radar:", isPalindrome("radar"));
