Day 058 - Array Destructuring

What I practiced

* Extracting array values into separate variables.
* Skipping values during destructuring.
* Using rest syntax to collect remaining elements.

What I learned

* Array destructuring assigns values based on their positions.
* Square brackets on the left side of an assignment define the variables.
* Empty positions between commas can skip elements.
* Rest syntax (...) collects remaining elements into a new array.

Example

const favoriteArtists = ["Beirut", "Radiohead", "Coldplay"];
const [firstArtist, secondArtist, thirdArtist] = favoriteArtists;
console.log(firstArtist);  // Beirut
console.log(secondArtist); // Radiohead
console.log(thirdArtist);  // Coldplay
