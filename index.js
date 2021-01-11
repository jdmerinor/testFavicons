/* global process */
/*! StartNoStringValidationRegion No captions here. */
const log = require('why-is-node-running') // should be your first require
const path = require('path');
const favicons = require('favicons');

const source = 'favicon.svg';
const configuration = {
	path: `Favicons`,
	appName: 'client',
	theme_color: 'rgba(0%, 0%, 0%, 0.0)',
	icons: {
		android: true,
		appleIcon: true,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false
	}
};

const timeoutVar = setTimeout(function () {
  log(); // logs out active handles that are keeping node running
  debugger;
}, 30000)

function processResponse(error, response) {
	console.log('Finished');
	clearTimeout(timeoutVar);

	if (error) {
		throw error; // stop build
	}
}

favicons(source, configuration, processResponse);

/*! EndNoStringValidationRegion */
