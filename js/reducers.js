var actions = require('./actions');

var combineReducers = require('redux').combineReducers;

// var textReducer = function(state, action) {
//   state = state || {};
//   return state;
// };
// var boardReducer = function(state, action) {
//   state = state || {};
//   return state;
// };
// var overlayReducer = function(state, action) {
//   state = state || {};
//   return state;
// };
var initialState = {
	score: 0
};

//This is for a newGame action
//reset to initial state
// game.props.score=0;
// timer.props.count=15;
// // Lay new tiles


var gameReducer = function(state, action) {
  state = state || initialState;
	switch (action.type)  {
		case actions.NEW_GAME:
			return Object.assign({}, state, {
				score: 0
			});
		case actions.INCREMENT_SCORE:
			return Object.assign({}, state, {
				score: state.score++
			});
		case actions.DECREMENT_SCORE:
			return Object.assign({}, state, {
				score: state.score--
			});
		default:
			return state;
	}
  	// if (action.type === actions.NEW_GAME) {
	// 	return Object.assign({}, state, {score: 0 });
    //
	// } else if (action.type === actions.INCREMENT_SCORE) {
	// 	return Object.assign({}, state, {score: state.score++} );
	//
	// } else if (action.type === actions.DECREMENT_SCORE) {
	// 	return Object.assign({}, state, {score: state.score--} );
    //
	// } else {
	// 	return state;
	// }
};


// var tileGameReducer = function(state, action) {
//   state = state || {};

//   if (action.type === actions.TOGGLE_OVERLAY) {
//     return
//   };
// }

//   if (action.type === actions.NEW_GAME) {
//     return {
//       score: 0,
//       count: 10, //timer

//     };
//   }

//   if (action.type === actions.INCREMENT_SCORE) (
//     return {

//     }
//   )
module.exports = gameReducer;




/*==================== NEW REDUCER FILE ==========================*/

var actions = require('./actions');

var initialState = {
	username: '',
	score: 0,
	overlay: false
//timer
//highScore
};

var gameReducer = function(state, action) {
	state = state || initialState;

	if (action.type === actions.NEW_GAME) {
		var newInitialState = Object.assign({}, initialState);
		return newInitialState;
	}

	else if (action.type === actions.INCREMENT_SCORE) {
		var newScore = state.score++;
		return Object.assign({}, state, {score: newScore})
	}

	else if (action.type === actions.DECREMENT_SCORE) {
		var newScore = state.score--;
		return Object.assign({}, state, {score: newScore})
	}

	else if (action.type === actions.TOGGLE_OVERLAY) {
		if (state.overlay) {
			return Object.assign({}, state, {overlay: false})
		} else {
			return Object.assign({}, state, {overlay: true})
	}
	// TODO: Add ADD_USER action to actions 
	else if (action.type === actions.ADD_USER) {
		userName = action.username;
		return Object.assign({}, state, {username: userName})
	}
	return state;
}

module.exports = gameReducer;