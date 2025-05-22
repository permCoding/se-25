const express = require('express'),
    app = express(),
    PORT = 3000,
    HOST = 'localhost',
    log = console.log;

app.get('/start', (req, res) => { res.send('callbackGetStart') });

app.get(['/index','/'], (req, res) => { res.send('callbackGetIndex') });

app.listen(PORT, HOST, () => log(`http://${HOST}:${PORT}/`));
