
// Day 070 - Nested Objects

const student = {
    name: "Alex",
    age: 22,

    address: {
        city: "Toronto",
        province: "Ontario",
        country: "Canada"
    },

    contact: {
        email: "alex@example.com",
        phone: "123-456-7890"
    }
};

console.log(student);
console.log(student.address.city);
console.log(student.address.country);
console.log(student.contact.email);
