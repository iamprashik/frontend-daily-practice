# Day 021 - Switch Statement for a Day of the Week

## What I practiced

Today I practiced using a `switch` statement in JavaScript to check different possible values.

## What I learned

- `switch` can be used when there are multiple possible values.
- `case` defines a possible value.
- `break` stops the switch after a matching case is found.
- `default` runs when none of the cases match.
- A `switch` statement can sometimes be easier to read than many `else if` statements.

## Example

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;

  case "Friday":
    console.log("Almost the weekend.");
    break;

  default:
    console.log("Another day.");
}
```