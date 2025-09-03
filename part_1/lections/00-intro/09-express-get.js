const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000,
    callbackGet = (req, resp) => { resp.send(' = callback = \nGet') },
    callbackAbc = (req, resp) => { resp.send(' = callback = \nABC') },
    callbackListen = () => { console.log(`http://${HOST}:${PORT}/`) }

app.get('/', callbackGet);
app.get('/abc', callbackAbc);

app.listen(PORT, HOST, callbackListen);
