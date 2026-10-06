// Get the current date
const now = new Date();


// Get individual parts of the date
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();


// Create a formatted date
const formattedDate = `${year}-${month}-${day}`;

console.log("Formatted date:", formattedDate);