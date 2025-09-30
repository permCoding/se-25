console.log(
    require('fs')
        .readFileSync(0, 'utf-8')
        .split('')
        .filter(elm => elm != '\n')
        .map(elm => +elm)
        .reduce((a, b) => a+b, 0)
);


// Ctrl+D