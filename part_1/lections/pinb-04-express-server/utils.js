const request = require('sync-request'); // npm i sync-request

const get_lines_from_url = url => request("GET", url)
    .getBody("utf8")
    .split(/\r\n|\n/)
    .filter(line => line);

module.exports = {
    get_lines_from_url
}

// module.exports = {
//     "get_lines_from_url": get_lines_from_url
// }