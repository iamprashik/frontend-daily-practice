# Day 025 - Sum Numbers from 1 to n

## What I practiced

Using a `for` loop to add numbers together.

## What I learned

* A variable can store a running total.
* The `+=` operator adds a value to the existing total.
* A loop can repeat an addition operation multiple times.
* This is useful for calculating totals from a range of numbers.

## Example

```js
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log("Sum:", sum);
```

The loop calculates:

```text
1 + 2 + 3 + 4 + 5 = 15
```

## Expected output

```text
Sum: 15
```

## Run

```bash
node day-025/script.js
```
