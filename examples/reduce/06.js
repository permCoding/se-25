let amount = 5;
let minRating = 50;

console.log( // avg rating
    require('./users.json')
        .filter(user => user.rating >= minRating)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, amount)
        .reduce((acc, cur) => acc + cur.rating, 0) / amount
);

current = { "lastName": "wlejfbwj", "rating": 91 }

// console.log(
//     require('./users.json')
//         .filter(user => user.rating >= minRating)
//         .sort((a, b) => b.rating - a.rating)
//         .slice(0, amount)
// );