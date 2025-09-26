const log = console.log;
const amount = 5;
const set = new Set();

while (set.size < amount) {
    set.add( Math.floor(10*Math.random()) );
}

log(Array.from(set));
