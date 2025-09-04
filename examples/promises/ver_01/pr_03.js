const log = console.log;

const check = (res) => {
    log(res.data);
}

// const links = [
//     'https://pcoding.ru/csv/17.txt',
//     'https://pcoding.ru/csv/18.txt',
//     'https://pcoding.ru/csv/19.txt'
// ]

const links = [
    'http://pcoding-ru.1gb.ru/csv/17.txt',
    'http://pcoding-ru.1gb.ru/csv/18.txt',
    'http://pcoding-ru.1gb.ru/csv/19.txt',
    'http://pcoding-ru.1gb.ru/csv/20.txt'
];

fetch(links[0])
    .then(response => {
        if (!response.ok) throw new Error(`error: ${response.status}`);
        return response.text(); // из объекта response возвращаем текст
    })
    .then(log)
    .catch(log);
