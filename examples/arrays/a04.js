const rangeArray1 = (start, end, step = 1) => {
    if (start > end) return [];
    return [start].concat(rangeArray1(start + step, end, step));
}

const rangeArray2 = (start, end, step = 1) => {
    if (start > end) return [];
    return [start].concat(rangeArray2(start + step, end));
}

const rangeArray3 = (start, end, step = 1) => {
    return Array.from(
        { length: Math.ceil((end - start) / step) },
        (_, i) => start + (i * step)
    );
}


console.log(rangeArray1(1, 10,));
console.log(rangeArray1(1, 10, 2));
console.log(rangeArray2(1, 10, 2));
console.log(rangeArray3(1, 10, 2));
