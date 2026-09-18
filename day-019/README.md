# Day 019 - Nested Conditionals

## What I practiced

Today I practiced using nested `if` statements in JavaScript.

## What I learned

- A nested conditional is an `if` statement inside another `if` statement.
- The inner condition is checked only if the outer condition is true.
- Nested conditionals can be useful when one decision depends on another decision.
- Too many nested conditions can make code harder to read, so they should be used carefully.

## Example

```javascript
const age = 20;
const hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("You can enter.");
  } else {
    console.log("You need an ID.");
  }
} else {
  console.log("You must be 18 or older.");
}
```
