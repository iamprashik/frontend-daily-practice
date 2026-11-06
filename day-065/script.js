
// Day 065 - Count Repeated Values

const fruits = [
    "Apple",
    "Banana",
    "Apple",
    "Orange",
    "Banana",
    "Apple"
];

const fruitCount = fruits.reduce((counts, fruit) => {
    if (counts[fruit]) {
        counts[fruit]++;
    } else {
        counts[fruit] = 1;
    }

    return counts;
}, {});

console.log(fruitCount);
