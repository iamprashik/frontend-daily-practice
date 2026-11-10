Day 067 - Array Destructuring

What I practiced

* Extracting array values into variables.
* Using array destructuring.
* Skipping array elements.
* Assigning default values.
* Swapping variables using destructuring.

What I learned

* Array destructuring allows us to extract values from an array.
* Values are assigned according to their positions.
* Variable names can be chosen freely.
* Empty spaces between commas allow us to skip elements.
* Default values can prevent variables from receiving undefined.
* Destructuring can swap two variables without a temporary variable.

Example

const favoriteArtists = ["Beirut", "Radiohead", "Coldplay"];
const [firstArtist, secondArtist, thirdArtist] = favoriteArtists;
console.log(firstArtist);  // Beirut
console.log(secondArtist); // Radiohead
console.log(thirdArtist);  // Coldplay
