const utils = require('./utils');
const log = console.log;

const results = utils.getArrayIncIntegers_(20, 10, 20);
results.steps.forEach(x => log(x));
