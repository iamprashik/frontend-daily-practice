# Day 026 - Multiplication Table

## What I practiced

Using a `for` loop to create a multiplication table.

## What I learned

* A `for` loop can repeat a calculation multiple times.
* The loop counter can be used in mathematical calculations.
* Template literals make it easy to display calculations.
* Multiplication tables are a simple way to practice loops and arithmetic.

## Example

```js
const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
```

## Expected output

```text
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
```

## Run

```bash
node day-026/script.js
```
