var config = require('./config.json');

var Hapi = require('hapi');
var server = new Hapi.Server(config.port);
var routes = require('./routes');

server.pack.register([
	{ plugin: require('lout') },
	{
		plugin: require('hapi-route-directory'),
		options: {
			path: '/',
			lout: false
		}
	}
],
function (err) {
	if (err) {
		console.error('Failed to load plugin: ', err);
	}
});

server.route(routes);

server.start(function () {
	console.log('Server running at: ', server.info.uri);
});