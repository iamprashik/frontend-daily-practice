# Day 023 - while Loop Countdown

## What I practiced

Using a `while` loop to repeat code while a condition is true.

## What I learned

* A `while` loop keeps running while its condition is `true`.
* The counter should be initialized before the loop.
* The counter must be updated inside the loop.
* If the condition never becomes false, the loop can become an infinite loop.
* `while` loops are useful when the number of repetitions depends on a condition.

## Example

```js
let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}
```

## Expected output

```text
5
4
3
2
1
```
