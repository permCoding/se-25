const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000;

const callbackGet = (req, resp) => { resp.send(' = callback = \nGet') };

const callbackListen = () => { console.log(`http://${HOST}:${PORT}/`) };

app.get('/', callbackGet);

app.listen(PORT, HOST, callbackListen);

/*
http://localhost:3000/
*/
