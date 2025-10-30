const syncRequest = require('sync-request');

const headersForGitHub = {
    headers: {
        'User-Agent': 'Node.js', // обязательный заголовок - GitHub
    }
}

const getFollowers = (url) => {
    try {
        const response = syncRequest('GET', url, headersForGitHub);
        if (response.statusCode !== 200) throw new Error(`${response.statusCode}`);
        return JSON.parse(response.getBody('utf8'));
    } catch (error) {
        console.error(error.message);
        return [];
    }
};


const myFunction = () => {
    const url = 'https://api.github.com/users/permCoding/followers';
    const followers = getFollowers(url);
    console.log(`Получено объектов: ${followers.length}`);
    followers
        .sort((a,b) => a.login>b.login? +1: -1)
        .forEach((follower) => console.log(follower.login));
}

setTimeout(myFunction, 60000); // 60 секунд
