// npm run serve
// npm run http 
// go to localhost:8081

var actions = require('./actions');
var combineReducers = require('redux').combineReducers;




var gameReducer = function(state, action) {
	state = state || {};
	if (action.type === actions.NEW_GAME) {
		var username = '';
		var id = null;
		var highScore = highScore;
		var gameHistory = [];
		var score = 0;
		var overlay = false;
		var beforeContainer = false;
		var afterContainer = false;
		var statusMessage = false;
		var historyDisplay = false;
		var showBoard = true;
		var playButton = 'START GAME';
		var timer = true;

		if (state.username) {
			username = state.username;
			id = state.id;
			highScore = state.highScore;
			gameHistory = state.gameHistory;
			playButton = 'TRY AGAIN';
		}

		return Object.assign({}, {
			username: username,
			id: id,
			highScore: highScore,
			gameHistory: gameHistory,
			timer: timer,
			score: score,
			overlay: overlay,
			beforeContainer: beforeContainer,
			afterContainer: afterContainer,
			statusMessage: statusMessage,
			timer: timer,
			playButton: playButton,
			showBoard: showBoard
		});

	} else if (action.type === actions.TOGGLE_OVERLAY) {
		if (state.overlay) {
			return Object.assign({}, state, {
				overlay: false,
				timer: false
			});
		} else {
			return Object.assign({}, state, {
				overlay: true,
				timer: false
			});
		}
	} else if (action.type === actions.TOGGLE_HISTORY_DISPLAY) {
		return Object.assign({}, state, {
			historyDisplay: !historyDisplay
		});
	} else if (action.type === actions.SHOW_BEFORE_CONTAINER) {
		return Object.assign({}, state, {
			beforeContainer: true, 
			showBoard: false,
			playButton: 'START GAME'
		});
	} else if (action.type === actions.HIDE_DYNAMIC_CONTAINER) {
		return Object.assign({}, state, {
			beforeContainer: false,
			afterContainer: false
		});
	} else if (action.type === actions.SHOW_AFTER_CONTAINER) {
		return Object.assign({}, state, {
			afterContainer: true,
			showBoard: false,
			playButton: 'PLAY AGAIN'
		});
	} else if (action.type === actions.INCREMENT_SCORE) {
		console.log('in increment score');
		var newScore  = state.score + 1;
		console.log(newScore);
		return Object.assign({}, state, {
			score: newScore,
			timer: false
		});
	} else if (action.type === actions.DECREMENT_SCORE) {
		var newScore = state.score - 2;
		return Object.assign({}, state, {
			score: newScore,
			timer: false
		});
	} else if (action.type === actions.TIMER_STOP) {
		return Object.assign({}, state, {
			timer: false
		});
	} else if (action.type === actions.FETCH_ADD_USER_SUCCESS) {
		var newUsername = action.username;
		var newId = action.id;
		var newStatusMessage = action.message;
		return Object.assign({}, state, {
			username: newUsername,
			id: newId,
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_ADD_USER_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_ADD_SCORE_SUCCESS) {
		var newStatusMessage = action.message;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_ADD_SCORE_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_GAME_HISTORY_SUCCESS) {
		var newGameHistory = action.gameHistory;
		return Object.assign({}, state, {
			gameHistory: newGameHistory
		});
	} else if (action.type === actions.FETCH_GAME_HISTORY_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else if (action.type === actions.FETCH_HIGH_SCORE_SUCCESS) {
		var newHighScore = action.highScore;
		return Object.assign({}, state, {
			highScore: newHighScore
		}); 
	} else if (action.type === actions.FETCH_GAME_HISTORY_ERROR) {
		var newStatusMessage = action.error;
		return Object.assign({}, state, {
			statusMessage: newStatusMessage
		});
	} else {
		return state;
	}
};

module.exports = gameReducer;