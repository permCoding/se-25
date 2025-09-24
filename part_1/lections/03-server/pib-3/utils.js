const getArrayIncIntegers = (len, mn, mx) => {
    const set = new Set();

    while (set.size < len) {
        set.add(mn + Math.floor((mx-mn)*Math.random()));
    }
    
    return Array.from(set).sort();
}

const getArrayIncIntegers_ = (len, mn, mx) => {
    const set = new Set();
    const steps = Array(len).fill(1);

    while (set.size < len) {
        let newElm = mn + Math.floor((mx-mn)*Math.random());
        if (set.has(newElm)) steps[set.size]++;
        set.add(newElm);
    }
    
    return {
        'array': Array.from(set).sort(),
        'steps': steps
    };
}

module.exports = {
    getArrayIncIntegers,
    getArrayIncIntegers_
}