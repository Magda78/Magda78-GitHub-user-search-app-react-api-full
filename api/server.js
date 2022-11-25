require('dotenv').config({ path: '.env' });
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT_EXPRESS;
//const port = process.env.PORT || 3001
app.use(cors({ origin: '*', credentials: true }));

app.get('/:user', (req, res) => {
	const { user } = req.params;
	axios
		.get(`https://api.github.com/users/${user}`)
		.then((result) => {
			res.send(result.data);
			console.log(result.data);
		})
		.catch((err) => res.send(err));
});

app.listen(port, () => {
	console.log('server runing');
});

module.exports = app;
