require('./users.json')
    .filter(user => user.rating > 50)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4)
    .forEach(user => console.log(JSON.stringify(user, null, 2)));