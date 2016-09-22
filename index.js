const Luxafor = require('luxafor-api');
const open = require('open');

const youtubeLinks = require('./youtube-links.json');
const quotes = require('./quotes.json');

let args;


function init() {
	args = process.argv.slice(2);

	switch (args[0]) {
		case 'quote':
			return quote();
		case 'lampje':
			return lampje();
		case 'muziek':
			return muziek();
		case 'facebook':
			return facebook();
	}

	return jaHallo();
}



function quote() {
	return write(randomQuote());
}

function lampje() {
	const color = readColor(args[1]);
	const device = new Luxafor();
	device.setColor(color);
	return color;
}

function muziek() {
	return open(randomYoutubeLink());
}

function facebook() {
	return open('https://www.facebook.com/MeesterCe/');
}

function jaHallo() {
	return write('JA HALLO?!');
}



// QUOTE
function randomQuote() {
	const randomOrdered = quotes.sort(sortRandom);
	return randomOrdered[0];
}


// LAMPJE
function readColor(rawColor) {
	switch (rawColor) {
		case 'red':
		case 'rood':
			return '#F00';
		case 'green':
		case 'groen':
			return '#0F0';
		case 'blue':
		case 'blauw':
			return '#00F';
	}
	return '#FFF';
}


// MUZIEK
function randomYoutubeLink() {
	const randomOrdered = youtubeLinks.sort(sortRandom);
	return randomOrdered[0];
}


// UTILS
function write(msg) {
	process.stdout.write(`${msg}\n`);
	return msg;
}

function sortRandom() {
	return Math.random() - 0.5;
}


return init();
