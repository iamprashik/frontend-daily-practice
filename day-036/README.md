# Day 036 - The Date Object

## What I practiced

Using JavaScript's `Date` object to work with dates and times.

## What I learned

- `new Date()` creates a Date object for the current date and time.
- `.getFullYear()` gets the year.
- `.getMonth()` gets the month.
- `.getDate()` gets the day of the month.
- `.getDay()` gets the day of the week.
- `.getHours()` gets the current hour.
- `.getMinutes()` gets the current minutes.
- JavaScript months are zero-indexed, meaning January is `0` and December is `11`.

## Example

```js
const today = new Date();

console.log("Today:", today);
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Day:", today.getDate());
```

## Run

```bash
node day-036/script.js
```