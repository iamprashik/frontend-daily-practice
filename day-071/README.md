Day 071 - Object Methods

What I practiced

* Creating functions inside objects.
* Calling object methods.
* Using this to access object properties.
* Using the shorter method syntax.
* Returning values from object methods.

What I learned

* A function stored inside an object is called a method.
* Methods define the behaviour of an object.
* We call methods using dot notation followed by parentheses.
* this refers to the object that calls the method in a normal method call.
* Methods can access and update object properties.
* Methods can return values using return.

Example

const person = {
    name: "Alex",
    introduce() {
        console.log(`Hello, I'm ${this.name}.`);
    }
};
person.introduce();
// Hello, I'm Alex.
