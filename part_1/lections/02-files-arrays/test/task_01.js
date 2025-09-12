const getRandomInt = () => Math.floor(Math.random() * 10);

const numbers = new Array(10).fill(0);

for (let i = 0; i < 1000000; i++) {
    numbers[getRandomInt()]++;
}

numbers.forEach((number, index) => {
    console.log(index, String(number).padStart(10));
});
