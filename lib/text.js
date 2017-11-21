/* text.js - Re-usable module to read text on your stream */

var path = require('path');

var eventbus;	// Global event bus attached to TextOverlay object - used for passing events

module.exports = TextOverlay;

function TextOverlay(text) {
	// text - text to display and read aloud

	var self;			// Used for scope when passing around events
	self = this;

	// Required parameters
	this.name = 'text';											// Unique identifier for event listeners

	this.template = {
		name: this.name,
		view: path.join(__dirname, 'views/text.pug'),
		selector: '#' + this.name,
		directory: path.join(path.dirname('./static'))
	};
};
