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

var INCREMENT_SCORE = 'INCREMENT_SCORE';
var incrementScore = function() {
  return {
    type: INCREMENT_SCORE
  };
};

var DECREMENT_SCORE = 'DECREMENT_SCORE';
var decrementScore = function() {
  return {
    type: DECREMENT_SCORE
  };
};


var FETCH_ADD_USER_SUCCESS = 'FETCH_ADD_USER_SUCCESS';
var fetchAddUserSuccess = function(userName) {
    return {
        type: ADD_USER_SUCCESS,
        userName: userName
    };
};

var FETCH_ADD_USER_ERROR = 'FETCH_ADD_USER_ERROR';
var fetchAddUserError = function(userName, error) {
    return {
        type: ADD_USER_ERROR,
        userName: userName,
        error: error
    };
};

// Fetch  ADD_SCORE
var FETCH_ADD_SCORE_SUCCESS = 'FETCH_ADD_SCORE_SUCCESS';
var fetchAddScoreSuccess = function(userID, score) {
    return {
        type: ADD_SCORE_SUCCESS,
        userID: userID,
        score: score
    };
};

var FETCH_ADD_SCORE_ERROR = 'FETCH_ADD_SCORE_ERROR';
var fetchAddScoreError = function(userID, error) {
    return {
        type: ADD_SCORE_ERROR,
        userID: userID,
        error: error
    };
};

// Fetch GET_HISTORY
var FETCH_GET_HISTORY_SUCCESS = 'FETCH_GET_HISTORY_SUCCESS';
var fetchGetHistorySuccess = function(userName) {
    return {
        type: FETCH_GET_HISTORY_SUCCESS,
        userName: userName

    };
};

var FETCH_GET_HISTORY_ERROR = 'FETCH_GET_HISTORY_ERROR';
var fetchGetHistoryError = function(userName) {
    return {
        type: FETCH_GET_HISTORY_ERROR,
        userName: userName,
    };
};

// Fetch GET_HIGHSCORE
var FETCH_GET_HIGHSCORE_SUCCESS = 'FETCH_GET_HIGHSCORE_SUCCESS';
var fetchGetHighScoreSuccess = function(userName) {
    return {
        type: FETCH_GET_HIGHSCORE_SUCCESS,
        userName: userName

    };
};

var FETCH_GET_HIGHSCORE_ERROR = 'FETCH_GET_HIGHSCORE_ERROR';
var fetchGetHighScoreError = function(userName) {
    return {
        type: FETCH_GET_HIGHSCORE_ERROR,
        userName: userName,
    };
};


exports.TOGGLE_OVERLAY = TOGGLE_OVERLAY;
exports.NEW_GAME = NEW_GAME;

exports.toggleOverlay = toggleOverlay;
exports.newGame = newGame;


exports.FETCH_ADD_USER_SUCCESS = FETCH_ADD_USER_SUCCESS;
exports.fetchAddUserSuccess = fetchAddUserSuccess;
exports.FETCH_ADD_USER_ERROR = FETCH_ADD_USER_ERROR;
exports.fetchAddUserError = fetchAddUserError;

exports.FETCH_ADD_SCORE_SUCCESS = FETCH_ADD_SCORE_SUCCESS;
exports.fetchAddScoreSuccess = fetchAddScoreSuccess;
exports.FETCH_ADD_SCORE_ERROR = FETCH_ADD_SCORE_ERROR;
exports.fetchAddScoreError = fetchAddScoreError;

exports.FETCH_GET_HISTORY_SUCCESS = FETCH_GET_HISTORY_SUCCESS;
exports.fetchGetHistorySuccess = fetchGetHistorySuccess;
exports.FETCH_GET_HISTORY_ERROR = FETCH_GET_HISTORY_ERROR;
exports.fetchGetHistoryError  = fetchGetHistoryError ;

exports.FETCH_GET_HIGHSCORE_SUCCESS = FETCH_GET_HIGHSCORE_SUCCESS;
exports.fetchGetHighScoreSuccess = fetchGetHighScoreSuccess ;
exports.FETCH_GET_HIGHSCORE_ERROR = FETCH_GET_HIGHSCORE_ERROR;
exports.fetchGetHighScoreError = fetchGetHighScoreError;

exports.INCREMENT_SCORE = INCREMENT_SCORE;
exports.decrementScore = decrementScore;
exports.DECREMENT_SCORE = DECREMENT_SCORE;
exports.incrementScore = incrementScore;