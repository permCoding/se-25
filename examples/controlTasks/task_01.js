let step = 3, sm = 0;
for (let i = 0; i < 1000; i += step) {
    if (i > 10) {
        break;
    }
    sm += i;
}
console.log(sm);
