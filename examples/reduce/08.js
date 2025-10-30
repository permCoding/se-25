let minRating = 50;

console.log( // max rating
    require('./users.json')
        .reduce((max, cur) => {
            if (cur.rating > max) {
                return cur.rating
            } else { 
                return max
            }
        }, 0)
);

// current = { "lastName": "wlejfbwj", "rating": 91 }

// console.log(
//     require('./users.json')
//         .filter(user => user.rating >= minRating)
//         .sort((a, b) => b.rating - a.rating)
//         .slice(0, amount)
// );