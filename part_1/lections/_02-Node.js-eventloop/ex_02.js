const log = console.log;

const ex_01 = () => { // Without closure (all timeouts will 5)
    const arr = [];
    for (var i = 0; i < 5; i++) {
        setTimeout(() => { 
            arr.push(i);
            log(arr);
        }, 100); // All will 5
    }
}

const ex_02 = () => { // Modern solution using let (block-scoped)
    const arr = [];
    for (let i = 0; i < 5; i++) {
        setTimeout(() => { 
            arr.push(i);
            log(arr);
        }, 100); // All will 5
    }
}

ex_03 = () => { // With closure to capture current value
    const arr = [];
    for (var i = 0; i < 5; i++) {
        (function(currentIndex) {
            setTimeout(() => {
                arr.push(currentIndex); // 0,1,2,3,4
                log(arr);
            }, 100);
        })(i);
    }
}

// ex_01();
// ex_02();
ex_03();
