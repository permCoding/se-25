const express = require('express'),
    app = express(),
    HOST = 'localhost'
    PORT = 3000;

const callbackGet = (req, resp) => { resp.send(' = callback = \nGet') };
const smart = (req, resp) => { resp.send(' = smart = \nGet') };

const callbackListen = () => { console.log(`http://${HOST}:${PORT}/`) };

app.get('/', callbackGet);
app.get('/smart', smart);

app.listen(PORT, HOST, callbackListen);

/*
http://localhost:3000/
*/
