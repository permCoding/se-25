const log = console.log;

const links = [
    'https://pcoding.ru/csv/17.txt',
    'https://pcoding.ru/csv/18.txt',
    'https://pcoding.ru/csv/19.txt',
    'https://pcoding.ru/csv/20.txt'
];

const promises = links.map((url, ind) => 
    fetch(url)
        .then(resp => {
            if (resp.ok) {
                return resp.text();
            } else {
                throw new Error(resp.status);
            }
        })
        .then(text => [ind, text.split('\n').length])
        .catch(err => [ind, 0])
);

Promise
    .all(promises)
    .then(arr => { 
        let allAmount = arr.reduce((sm, elm) => sm + elm[1], 0);
        log('Общее количество строк во всех файлах:', allAmount);

        log( // не пустые существующие файлы
            arr
                .filter(elm => elm[1] > 0)
                .map(elm => links[elm[0]])
        )
    })
    .catch();

/* порядок случайный, например:
0 51
Ошибка при загрузке https://pcoding.ru/csv/19.txt: Error: error: 404
1 4
3 14
*/
