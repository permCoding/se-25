console.log(
    require('fs')
        .readFileSync(0, 'utf-8')
        .split('\n')
        .filter(e => e != '')
        .map(e => +e)
        .filter(e => e % 10 == 3)
        .reduce( (acc, cur) => cur < acc? cur: acc, 30_000 )
);
