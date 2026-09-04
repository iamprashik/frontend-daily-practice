# Day 007 - Logical Operators

## What I practiced

Today I practiced using logical operators in JavaScript to combine and evaluate conditions.

## What I learned

- `&&` (AND) returns `true` when both conditions are true.
- `||` (OR) returns `true` when at least one condition is true.
- `!` (NOT) reverses a boolean value.
- Logical operators are commonly used with `if` statements and comparisons.

## Example

```javascript
const age = 23;
const hasLicense = true;

console.log(age >= 18 && hasLicense);
console.log(age < 18 || hasLicense);
console.log(!hasLicense);
```