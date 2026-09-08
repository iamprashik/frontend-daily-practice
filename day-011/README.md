# Day 011 - String trim Method

## What I practiced

Today I practiced removing unnecessary whitespace from strings in JavaScript using the `trim()` method.

## What I learned

- `trim()` removes whitespace from both the beginning and end of a string.
- `trimStart()` removes whitespace from the beginning.
- `trimEnd()` removes whitespace from the end.
- These methods do not change the original string.
- Trimming strings is useful when working with user input.

## Example

```javascript
const username = "   Prashik   ";

console.log(username);
console.log(username.trim());
```