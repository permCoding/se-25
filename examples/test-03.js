const log = console.log;

for (let i = 0; i < 3; (i++, log(`i=${i}`))) { 
    //
};

log();

for (let j = 0; j < 3; (++j, log(`j=${j}`)));

log();

for (let i = 0; i < 3; (i++, log(`i=${i}`))) { 
    log(`step = ${i}`);
};

/*
let i = 0 - до входа в цикл
i < 3     - первый шаг каждой итерации
log(`step = ${i}`) - это средний шаг итерации
i++, log(`i=${i}`) - это последний шаг каждой итерации
*/