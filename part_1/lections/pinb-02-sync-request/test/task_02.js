const { getDistribution } = require('./task_02_module.js');


const amount = 100000000;
const numbers = getDistribution(amount);

Object.keys(numbers).forEach(key => {
    let p = (Math.abs(amount/10 - numbers[key]) / (amount/10) * 100).toFixed(2);
    console.log(key, String(p).padStart(10));
});
