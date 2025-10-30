/*
  Заголовок User-Agent:
    - GitHub обязательно требует его указание
    - без него будет ошибка 403

  Ограничения без токена:
    - 60 запросов/час без аутентификации
    - с токеном — 5000 запросов/час
  Проверьте URL:
    - если пользователь НЕ существует - ошибка 404
*/

const request = require('sync-request');
require('dotenv').config();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // брать тут https://github.com/settings/tokens

const headersForGitHub = {
    headers: {
        'User-Agent': 'Node.js', // обязательный заголовок - GitHub
        'Authorization': `token ${GITHUB_TOKEN}`
    }
}

const getFollowers = (url) => {
    try {
        const response = request('GET', url, headersForGitHub);
        // if (response.statusCode !== 200) throw new Error(`${response.statusCode}`);
        return JSON.parse(response.getBody('utf8'));
    } catch (error) {
        console.error(error.message);
        return [];
    }
};

const followers = getFollowers('https://api.github.com/users/permCoding/followers');

console.log(`Получено объектов: ${followers.length}`);
followers
  .sort((a,b) => a.login>b.login? +1: -1)
  .forEach((follower) => console.log(follower.login));



/*         пример вывода:
Получено объектов: 30
AleksandrNikolaev159
AlexeyBalavin
Andrushka2027
ArturGaisin
BadGrandD
DmitryNG
GilinMikhail
Jack63137
Jhin444444
LevapTon
Limo4ick
Maradakhmedov
NikitaKuzlyaev
Ovi01
Relax-FM
Sabmodem
Sonechek
TheEvilProgrammer
Vervxv
algiss71
ch1ld4ever
dmitryhudanin
haivay
lloopy123123543
mascai
mufteev
oroky-saki
some-darking
tkac4enk0
vokymlak
*/


// https://api.github.com/users/permcoding
// https://api.github.com/users/permCoding/followers
// https://api.github.com/users/permCoding/repos