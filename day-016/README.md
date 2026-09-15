# Day 016 - Even or Odd Checker

## What I practiced

Today I practiced using the modulus operator and conditional statements to check whether a number is even or odd.

## What I learned

- The `%` operator returns the remainder of a division.
- An even number has a remainder of `0` when divided by `2`.
- An odd number has a remainder of `1` when divided by `2`.
- `if/else` can be used to make a decision based on the result.

## Example

```javascript
const number = 10;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```