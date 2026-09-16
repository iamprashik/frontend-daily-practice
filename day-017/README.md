# Day 017 - Positive, Negative, or Zero Checker

## What I practiced

Today I practiced using `if`, `else if`, and `else` statements to check whether a number is positive, negative, or zero.

## What I learned

- A positive number is greater than `0`.
- A negative number is less than `0`.
- Zero is neither positive nor negative.
- `else if` allows us to check multiple conditions.
- `if/else if/else` is useful when there are several possible outcomes.

## Example

```javascript
const number = -5;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
```