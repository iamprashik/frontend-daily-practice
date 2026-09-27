# Day 028 - Function Parameters and Default Values

## What I practiced

Using parameters to pass information into functions.

## What I learned

* Parameters are variables inside a function definition.
* Arguments are the actual values passed to a function.
* A function can have multiple parameters.
* Default values are used when an argument is not provided.
* Parameters make functions more reusable.

## Example

```js
function greet(name) {
    console.log(`Hello, ${nam e}!`);
}

greet("Prashik");
```

Here, `name` is the parameter and `"Prashik"` is the argument.

## Default values

```js
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();
```

Because no argument was provided, `"Guest"` is used.

## Expected output

```text
Hello, Prashik!
Hello, Guest!
```

## Run

```bash
node day-028/script.js
```
