const log = console.log;

const links = require('fs')
    .readFileSync('links.txt', 'utf-8')
    .split(/\r?\n/)
    .filter(Boolean);

links
    .map((url, ind) => fetch(url)
        .then(resp => {
            if (!resp.ok) throw new Error(`error: ${resp.status}`);
            return resp.text()
        })
        .then(text => log(ind, text.split('\n').length))
        .catch(error => log(`Ошибка при загрузке ${url}: ${error}`))
    );
/* порядок случайный, например:
0 51
Ошибка при загрузке https://pcoding.ru/csv/19.txt: Error: error: 404
1 4
3 14
*/
