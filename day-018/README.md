# Day 018 - if/else Grade Checker

## What I practiced

Today I practiced using `if`, `else if`, and `else` statements to create a grade checker based on a student's score.

## What I learned

- `if` checks the first condition.
- `else if` checks another condition if the first one is false.
- `else` runs when none of the previous conditions are true.
- Multiple conditions can be used to create different grade ranges.

## Example

```javascript
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```