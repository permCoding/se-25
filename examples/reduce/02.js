let amount = 5;
let minRating = 50;

console.log( // min rating
    require('./users.json')
        .filter(user => user.rating >= minRating)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, amount)
        .reduce((acc, cur) => { return 120 }, 0)
);


// console.log(
//     require('./users.json')
//         .filter(user => user.rating >= minRating)
//         .sort((a, b) => b.rating - a.rating)
//         .slice(0, amount)
// );