var actions = require('./actions');

var combineReducers = require('redux').combineReducers;

var textReducer = function(state, action) {
  state = state || {};
  return state;
};
var boardReducer = function(state, action) {
  state = state || {};
  return state;
};
var overlayReducer = function(state, action) {
  state = state || {};
  return state;
};
var tileReducer = function(state, action) {
  state = state || {};
  	if (action.type === actions.NEW_GAME) {
		var initialScore = 0;

		return Object.assign({}, {score: initialScore });

	} else if (action.type === actions.INCREMENT_SCORE) {
		var newScore = state.score++;
		newState = Object.assign({}, state );
		newState.score = newScore;

		return newState;

	} else if (action.type === actions.DECREMENT_SCORE) {
		var newScore = state.score--;
		newState = Object.assign({}, state );
		newState.score = newScore;

		return newState;
	} else {
		return state;
	}
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

// exports.tileGameReducer = tileGameReducer;
// 
var reducer = combineReducers({
  text: textReducer,
  board: boardReducer,
  overlay: overlayReducer,
  tile: tileReducer
});

exports.reducer = reducer;