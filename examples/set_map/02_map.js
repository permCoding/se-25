const userMap = new Map();

userMap.set('id', 123);
userMap.set('name', 'Alice');

console.log(userMap.get('name')); // 'Alice'
userMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
console.log(userMap, userMap.size); // 2
