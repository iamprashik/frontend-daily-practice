# Day 037 - Format the Current Date

## What I practiced

Formatting a JavaScript `Date` object into a more readable date.

## What I learned

- `getFullYear()` gets the year.
- `getMonth()` gets the month.
- `getDate()` gets the day of the month.
- JavaScript months start at `0`, so we add `1` to the month.
- Template literals can combine different date values into one string.
- We can create our own readable date format.

## Example

```js
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const formattedDate = `${year}-${month}-${day}`;

console.log(formattedDate);
```

The output could look like:

```text
2026-10-04
```

## Run

```bash
node day-037/script.js
```