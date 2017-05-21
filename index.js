/* twitch-overlay-text - Text to Speech (TTS) and Display module for twitch-overlay */
var text = require('./lib/text.js')

module.exports = {
  start: text.start,
  overlay: text.overlay,
  triggers: text.triggers
}
