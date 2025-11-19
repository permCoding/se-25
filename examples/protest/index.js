const express = require('express');
const app = express();

const PORT = 3000, HOST = 'localhost';
// const PORT = 42135, HOST = 'protest.1gb.ru';

const index = (req, res) => { 
	res.setHeader('Content-Type', 'text/plain; charset=utf8');
	res.send(' = callback = \nindex') 
};

const smart = (req, res) => { 
	res.setHeader('Content-Type', 'text/plain; charset=utf8');
	res.send(' = smart = \nsmart') 
};

app.get('/smart', smart);
app.get('/', index);

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}/`));
