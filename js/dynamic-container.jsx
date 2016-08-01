// Upon page load, display user name input field and Game Start button. When game is over, display Final Score and Play Again button

var React = require('react');
var connect = require('require-redux').connect;

var startButton = require('./start-button');
var usernamePrompt = require('./username-prompt');
var scoreFeedback = require('./score-feedback');
