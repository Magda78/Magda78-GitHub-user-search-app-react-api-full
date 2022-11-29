require('dotenv').config({ path: '.env' });
const path = require('path');
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.use(cors({ origin: 'https://api.github.com/users', credentials: true }));

//const whitelist = [
//	'http://localhost:3000',
//	'http://localhost:3001',
//	'https://github-search-app-full-1.herokuapp.com'
//];
//const corsOptions = {
//	origin:'http://localhost:3000',
//	methods:["GET", "POST"],
//  credentials:true,            //access-control-allow-credentials:true
// optionSuccessStatus:200
//};
//app.use(cors(corsOptions));

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

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
