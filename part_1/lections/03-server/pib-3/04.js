const log = console.log;

const getArrayIncIntegers = (len, mn, mx) => {
    const set = new Set();

    while (set.size < len) {
        set.add(mn + Math.floor((mx-mn)*Math.random()));
    }
    
    return Array.from(set).sort();
}

log( getArrayIncIntegers(5, 10, 20) );
