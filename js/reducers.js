var actions = require('./actions');

var tileGameReducer = function(state, action) {
  state = state || {};

  if (action.type === actions.TOGGLE_OVERLAY) {
    return
  };
}

  if (action.type === actions.NEW_GAME) {
    return {
      score: 0,
      count: 10, //timer

    };
  }

  if (action.type === actions.INCREMENT_SCORE) (
    return {
      
    }
  )

exports.tileGameReducer = tileGameReducer;