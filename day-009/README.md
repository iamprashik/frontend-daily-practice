# Day 009 - String Length and Indexing

## What I practiced

Today I practiced finding the length of strings and accessing individual characters using indexes in JavaScript.

## What I learned

- `.length` returns the number of characters in a string.
- String indexing starts at `0`.
- `string[0]` returns the first character.
- `string[1]` returns the second character.
- `string[string.length - 1]` returns the last character.
- Spaces also count as characters when using `.length`.

## Example

```javascript
const language = "JavaScript";

console.log(language.length);
console.log(language[0]);
console.log(language[1]);
console.log(language[language.length - 1]);
```