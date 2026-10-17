// Day 048 - Looping Through Arrays

const favoriteArtists = [
    "Beirut",
    "Radiohead",
    "Coldplay",
    "The Strokes"
];

// 1. Loop using a regular for loop
console.log("Using a for loop:");

for (let i = 0; i < favoriteArtists.length; i++) {
    console.log(favoriteArtists[i]);
}

// 2. Loop using a for...of loop
console.log("Using a for...of loop:");

for (const artist of favoriteArtists) {
    console.log(artist);
}
