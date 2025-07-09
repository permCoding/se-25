const log = console.log;

const links = [
    'https://pcoding.ru/csv/17.txt',
    'https://pcoding.ru/csv/18.txt',
    'https://pcoding.ru/csv/19.txt',
    'https://pcoding.ru/csv/20.txt'
]

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
