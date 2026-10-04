# Day 035 - Basic try/catch Error Handling

## What I practiced

Using `try` and `catch` to handle errors without stopping the entire program.

## What I learned

- `try` contains code that might cause an error.
- `catch` runs if an error happens inside `try`.
- Error handling can prevent the program from crashing unexpectedly.
- The `error` object can tell us what went wrong.

## Example

```js
try {
    const result = unknownVariable;
} catch (error) {
    console.log("An error occurred.");
}
```

Because `unknownVariable` does not exist, JavaScript throws an error. The `catch` block handles it.

## Expected output

```text
An error occurred.
```

## Run

```bash
node day-035/script.js
```