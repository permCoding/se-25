console.log(
    require('fs')
        .readFileSync(0, 'utf-8')
        .trim('\n')
        .split(' ')
        .map(x => +x)
        .filter(x => x%2 == 0)[0]
);
