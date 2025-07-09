const log = console.log;

const links = [
    'https://pcoding.ru/csv/17.txt',
    'https://pcoding.ru/csv/18.txt',
    'https://pcoding.ru/csv/19.txt',
    'https://pcoding.ru/csv/20.txt'
]

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
