# Day 013 - parseInt() and parseFloat()

## What I practiced

Today I practiced converting strings into numbers using `parseInt()` and `parseFloat()` in JavaScript.

## What I learned

- `parseInt()` converts a value into a whole number.
- `parseFloat()` converts a value into a number that can contain decimals.
- Both methods are useful when working with numbers stored as strings.
- `parseInt()` stops reading when it reaches a decimal point or non-numeric character.
- `parseFloat()` keeps the decimal portion of a number.

## Example

```javascript
const wholeNumber = "25";
const decimalNumber = "25.75";

console.log(parseInt(wholeNumber));
console.log(parseFloat(decimalNumber));
```