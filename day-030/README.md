# Day 030 - Arrow Functions

## What I practiced

Creating functions using arrow function syntax.

## What I learned

- Arrow functions are a shorter way to write functions.
- They use the `=>` symbol.
- Arrow functions can have parameters.
- A single-expression arrow function can return a value automatically.
- They are commonly used in modern JavaScript.

## Example

```js
const greet = () => {
    console.log("Hello!");
};

greet();
```

## Arrow function with a parameter

```js
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
};

greetUser("Prashik");
```

## Short return syntax

```js
const add = (a, b) => a + b;

console.log(add(10, 5));
```

## Expected output

```text
Hello!
Hello, Prashik!
15
```

## Run

```bash
node day-030/script.js
```