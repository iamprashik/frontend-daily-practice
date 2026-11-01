
 // Day 061 - Reverse an Array

const favoriteArtists = ["Beirut", "Radiohead", "Coldplay", "Bon Iver"];

const reversedArtists = favoriteArtists.reverse();

console.log("Reversed array:", reversedArtists);
console.log("Original array:", favoriteArtists);

Output:
Reversed array: [ 'Bon Iver', 'Coldplay', 'Radiohead', 'Beirut' ]
Original array: [ 'Bon Iver', 'Coldplay', 'Radiohead', 'Beirut' ]

const numbers = [10, 20, 30, 40];

const reversedNumbers = [...numbers].reverse();

console.log("Original:", numbers);
console.log("Reversed:", reversedNumbers);

Output:
Original: [10, 20, 30, 40]
Reversed: [40, 30, 20, 10]
