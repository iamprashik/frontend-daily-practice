# Day 012 - slice() and substring()

## What I practiced

Today I practiced extracting parts of strings in JavaScript using the `slice()` and `substring()` methods.

## What I learned

- `slice()` extracts part of a string.
- `substring()` also extracts part of a string.
- Both methods use a start index and an optional end index.
- The character at the end index is not included.
- `slice()` supports negative indexes.
- Negative indexes with `slice()` count from the end of the string.
- These methods do not change the original string.

## Example

```javascript
const language = "JavaScript";

console.log(language.slice(0, 4));
console.log(language.substring(4, 10));
console.log(language.slice(-6));
```