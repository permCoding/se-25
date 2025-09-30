console.log(
    require('fs')
        .readFileSync(0, 'utf-8')
        .split('')
        .filter(elm => elm != '\n')
);


// Ctrl+D