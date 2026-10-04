Day 031 - Scope and Variable Shadowing

What I practiced

Understanding where variables can be accessed and how variables with the same name can exist in different scopes.

What I learned

* Scope determines where a variable can be accessed.
* Variables declared outside a block can usually be accessed inside that block.
* Variables declared inside a block cannot be accessed outside that block.
* A variable inside a block can have the same name as a variable outside the block.
* This is called variable shadowing.

Example

const name = "Prashik";
if (true) {
    const name = "Alex";
    console.log("Inside:", name);
}
console.log("Outside:", name);

The name inside the if block is a different variable from the name outside.

Expected output

Inside: Alex
Outside: Prashik



