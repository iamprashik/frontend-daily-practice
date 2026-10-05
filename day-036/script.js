// Create a Date object
const now = new Date();

console.log("Current date and time:", now);


// Get the year
console.log("Year:", now.getFullYear());


// Get the month
// JavaScript counts January as 0
console.log("Month:", now.getMonth() + 1);


// Get the day of the month
console.log("Day:", now.getDate());


// Get the day of the week
// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
console.log("Day of week:", now.getDay());


// Get the current hour
console.log("Hour:", now.getHours());


// Get the current minutes
console.log("Minutes:", now.getMinutes());