
// Day 071 - Object Methods

const person = {
    name: "Alex",
    age: 22,

    introduce: function() {
        console.log(`Hello, my name is ${this.name}.`);
    },

    celebrateBirthday: function() {
        this.age++;
        console.log(`I am now ${this.age} years old.`);
    }
};

// Calling object methods
person.introduce();
person.celebrateBirthday();
