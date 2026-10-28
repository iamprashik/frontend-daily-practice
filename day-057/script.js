
 // Day 057 - Using reduce() to Count Items and Build Objects

const artists = [
    "Beirut",
    "Radiohead",
    "Beirut",
    "Coldplay",
    "Radiohead",
    "Beirut"
];

const artistCounts = artists.reduce((counts, artist) => {
    counts[artist] = (counts[artist] || 0) + 1;
    return counts;
}, {});

console.log(artistCounts);
