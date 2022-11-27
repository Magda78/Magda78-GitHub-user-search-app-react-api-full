require('dotenv').config({ path: '.env' });
const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

const whitelist = [
	'http://localhost:3000',
	'http://localhost:3001',
	'https://https://github-search-app-full-1.herokuapp.com'
];
const corsOptions = {
	origin: function(origin, callback) {
		console.log('** Origin of request ' + origin);
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			console.log('Origin acceptable');
			callback(null, true);
		} else {
			console.log('Origin rejected');
			callback(new Error('Not allowed by CORS'));
		}
	}
};
app.use(cors(corsOptions));

const port = process.env.PORT || 3001;
//const port = process.env.PORT || 3001
//app.use(cors({ origin: '*', credentials: true }));

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
