const log = console.log;

const ex_01 = () => {
    const setA = new Set([1, 2, 3, 4]);
    const setB = new Set([3, 4, 5, 6]);

    const diff = setA.difference(setB);
    log(diff); // Set(2) { 1, 2}

    const symDiff = setA.symmetricDifference(setB);
    log(symDiff); // Set(4) { 1, 2, 5, 6 }
}

const ex_02 = () => {
    const setA = new Set([1, 2, 7]);
    const setB = new Set([3, 4, 8]);

    log(setA.isDisjointFrom(setB)); // true
    log(setA.union(setB)); // Set(6) { 1, 2, 7, 3, 4, 8 }

    for (let elm of setA) {
        log(elm);
    }
}

ex_01();
ex_02();
