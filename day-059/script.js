
const person = {
    name: "Prashik",
    age: 21,
    country: "Canada"
};

// Without destructuring
// const name = person.name;
// const age = person.age;

// With destructuring
const { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);
