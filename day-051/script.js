// Day 051 - Filtering Arrays with filter()

// 1. Filter numbers greater than 10
const numbers = [5, 12, 8, 20, 3, 15];

const bigNumbers = numbers.filter(function (number) {
    return number > 10;
});

console.log("Original numbers:", numbers);
console.log("Numbers greater than 10:", bigNumbers);

// 2. Filter passing scores
const scores = [45, 80, 62, 35, 90, 55];

const passingScores = scores.filter(score => score >= 50);

console.log("Passing scores:", passingScores);

// 3. Filter short artist names
const favoriteArtists = [
    "Beirut",
    "Radiohead",
    "Coldplay",
    "The Strokes"
];

const shortNames = favoriteArtists.filter(artist => artist.length <= 6);

console.log("Short artist names:", shortNames);
