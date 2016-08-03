/*---------- ACTIONS ---------*/

// START GAME
var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

// VIEW INSTRUCTIONS
var TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
var toggleOverlay = function() {
  return {
    type: TOGGLE_OVERLAY
  };
};

// CHANGE SCORE
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


/*---------- FETCH ACTIONS ---------*/

// POST NEW USER
var fetchAddUser = function() {
    return function(dispatch) {
        var url = 'localhost:8080/games'
        return fetch(url, {
                    method: 'post',
                    body: JSON.stringify({
                            numGuesses: lastGame
                        })
    }).then(function(response) {
            return response.json();
        }).then(function(data) {
            var lastGame = data
            return dispatch(
                fetchPostGameSuccess(lastGame)
            );
        });
    }
};

var FETCH_ADD_USER_SUCCESS = 'FETCH_ADD_USER_SUCCESS';
var fetchAddUserSuccess = function(userName) {
    return {
        type: FETCH_ADD_USER_SUCCESS,
        userName: userName
    };
};

var FETCH_ADD_USER_ERROR = 'FETCH_ADD_USER_ERROR';
var fetchAddUserError = function(userName, error) {
    return {
        type: FETCH_ADD_USER_ERROR,
        userName: userName,
        error: error
    };
};


// POST NEW SCORE
var fetchAddScore = function() {
    return function(dispatch) {
        var url = 'localhost:8080/games'
        return fetch(url, {
                    method: 'post',
                    body: JSON.stringify({
                            numGuesses: lastGame
                        })
    }).then(function(response) {
            return response.json();
        }).then(function(data) {
            var lastGame = data
            return dispatch(
                fetchPostGameSuccess(lastGame)
            );
        });
    }
};

var FETCH_ADD_SCORE_SUCCESS = 'FETCH_ADD_SCORE_SUCCESS';
var fetchAddScoreSuccess = function(userID, score) {
    return {
        type: FETCH_ADD_SCORE_SUCCESS,
        userID: userID,
        score: score
    };
};

var FETCH_ADD_SCORE_ERROR = 'FETCH_ADD_SCORE_ERROR';
var fetchAddScoreError = function(userID, error) {
    return {
        type: FETCH_ADD_SCORE_ERROR,
        userID: userID,
        error: error
    };
};


// GET GAME HISTORY
var fetchAddUser = function() {
  console.log('here, bestgame');
    return function(dispatch) {
        var url = 'localhost:8080/games/best'
        return fetch(url, {
                    method: 'get'
    }).then(function(response) {
        console.log(response, 'get response');
            return response.json();
        }).then(function(data) {
            var bestGame = data
            return dispatch(
                fetchBestGameSuccess(lastGame)
            );
        });
    }
};

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


// GET HIGH SCORE
var fetchGetHighScore = function(username) {
    return function(dispatch) {
        var url = 'localhost:8080/games/' + username + '/highscore'
        return fetch(url, {
                    method: 'get'
    }).then(function(response) {
            return response.json();
        }).then(function(data) {
            var bestGame = data
            return dispatch(
                fetchBestGameSuccess(lastGame)
            );
        });
    }
};

var FETCH_GET_HIGH_SCORE_SUCCESS = 'FETCH_GET_HIGH_SCORE_SUCCESS';
var fetchGetHighScoreSuccess = function(username, highScore) {
    return {
        type: FETCH_GET_HIGHSCORE_SUCCESS,
        username: username,
        highScore: highScore
    };
};

var FETCH_GET_HIGH_SCORE_ERROR = 'FETCH_GET_HIGH_SCORE_ERROR';
var fetchGetHighScoreError = function(username, error) {
    return {
        type: FETCH_GET_HIGHSCORE_ERROR,
        username: username,
        error: error
    };
};


/*---------- EXPORTS ---------*/
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.TOGGLE_OVERLAY = TOGGLE_OVERLAY;
exports.toggleOverlay = toggleOverlay;

exports.INCREMENT_SCORE = INCREMENT_SCORE;
exports.incrementScore = incrementScore;

exports.DECREMENT_SCORE = DECREMENT_SCORE;
exports.decrementScore = decrementScore;

exports.FETCH_ADD_USER_SUCCESS = FETCH_ADD_USER_SUCCESS;
exports.FETCH_ADD_USER_ERROR = FETCH_ADD_USER_ERROR;
exports.fetchAddUserSuccess = fetchAddUserSuccess;
exports.fetchAddUserError = fetchAddUserError;

exports.FETCH_ADD_SCORE_SUCCESS = FETCH_ADD_SCORE_SUCCESS;
exports.FETCH_ADD_SCORE_ERROR = FETCH_ADD_SCORE_ERROR;
exports.fetchAddScoreSuccess = fetchAddScoreSuccess;
exports.fetchAddScoreError = fetchAddScoreError;

exports.FETCH_GET_HISTORY_SUCCESS = FETCH_GET_HISTORY_SUCCESS;
exports.FETCH_GET_HISTORY_ERROR = FETCH_GET_HISTORY_ERROR;
exports.fetchGetHistorySuccess = fetchGetHistorySuccess;
exports.fetchGetHistoryError  = fetchGetHistoryError ;

exports.FETCH_GET_HIGH_SCORE_SUCCESS = FETCH_GET_HIGH_SCORE_SUCCESS;
exports.FETCH_GET_HIGH_SCORE_ERROR = FETCH_GET_HIGH_SCORE_ERROR;
exports.fetchGetHighScoreSuccess = fetchGetHighScoreSuccess ;
exports.fetchGetHighScoreError = fetchGetHighScoreError;
