var TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
var toggleOverlay = function() {
  return {
    type: TOGGLE_OVERLAY
  };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};


exports.TOGGLE_OVERLAY = TOGGLE_OVERLAY;
exports.NEW_GAME = NEW_GAME;
exports.toggleOverlay = toggleOverlay;
exports.newGame = newGame;
