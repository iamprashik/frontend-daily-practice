# Day 024 - break and continue

## What I practiced

Using `break` and `continue` inside loops.

## What I learned

* `break` stops the loop completely.
* `continue` skips the current iteration and moves to the next one.
* `break` is useful when you want to stop searching or repeating.
* `continue` is useful when you want to skip certain values.

## Example

```js
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }

    console.log(i);
}
```

This stops the loop when `i` reaches `3`.

## Expected output

```text
1
2
```

## Run

```bash
node day-024/script.js
```
