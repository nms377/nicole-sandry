const express = require('express');
const app = express();
const pages = require('./routes/pages');

const PORT = 9000;

app.use(express.static('public'));

app.use('/about', pages);

app.use('/', (req, res) => {
	console.log('HOME');
	res.send('HOME');
});

app.listen(PORT, () => {
	console.log('Server started on port ', PORT);
});

module.exports = app;