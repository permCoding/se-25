console.log( 
    Math.max(...require('fs')
        .readFileSync(0, 'utf-8')
        .split('\n')
        .filter(s => s != '')
        .map(Number)
        .slice(1,)
    ) 
);