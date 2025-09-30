console.log(
    require('fs')
        .readFileSync(0, 'utf-8')
        .split('\n')
        .filter(s => s != '')
        .map(n => Number(n))
);

// Ctrl+D