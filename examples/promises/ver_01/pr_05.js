const log = console.log;

const links = require('fs')
    .readFileSync('links.txt', 'utf-8')
    .split(/\r?\n/)
    .filter(Boolean);

// загружаем все файлы параллельно
links
    .map((url, ind) => fetch(url)
        .then(resp => { return resp.text() })
        .then(txt => log(ind, txt.split('\n').length))
    );
/* но порядок будет случайный, например:
3 14
0 51
2 10
1 4
и нет анализа на битую ссылку
*/
