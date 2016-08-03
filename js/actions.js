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
var fetchAddUser = function(username) {
    return function(dispatch) {
        var url = 'localhost:8080/users';
        var request = {
            method: 'post',
            body: JSON.stringify(
                {username: username}
            )};
        return fetch(url, request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.status(201).json();
        })
        .then(function(data) {
            var message = data.message;
            return dispatch(
                // later we need to make this return 'id' as well
                fetchAddUserSuccess(username, message);
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchAddUserError(username, error);
            );
        });
    }
};

var FETCH_ADD_USER_SUCCESS = 'FETCH_ADD_USER_SUCCESS';
var fetchAddUserSuccess = function(username, message) {
    return {
        type: FETCH_ADD_USER_SUCCESS,
        username: username,
        message: message
    };
};

var FETCH_ADD_USER_ERROR = 'FETCH_ADD_USER_ERROR';
var fetchAddUserError = function(username, error) {
    return {
        type: FETCH_ADD_USER_ERROR,
        username: username,
        error: error
    };
};


// POST NEW SCORE
var fetchAddScore = function(userId, score) {
    return function(dispatch) {
        var url = 'localhost:8080/games/' + userId;
        var request = {
            method: 'post',
            body: JSON.stringify(
                {score: score}
            )};
        return fetch(url, request)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.status(201).json();
        })
        .then(function(data) {
            var message = data.message;
            return dispatch(
                // later we need to make this return 'id' as well
                fetchAddScoreSuccess(userId, score, message);
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchAddScoreError(userId, score, error)
            );
        });
    }
};

var FETCH_ADD_SCORE_SUCCESS = 'FETCH_ADD_SCORE_SUCCESS';
var fetchAddScoreSuccess = function(userId, score, message) {
    return {
        type: FETCH_ADD_SCORE_SUCCESS,
        id: userId,
        score: score,
        message: message
    };
};

var FETCH_ADD_SCORE_ERROR = 'FETCH_ADD_SCORE_ERROR';
var fetchAddScoreError = function(userId, score, error) {
    return {
        type: FETCH_ADD_SCORE_ERROR,
        id: userId,
        score: score,
        error: error
    };
};


// GET GAME HISTORY
var fetchGameHistory = function(username) {
    return function(dispatch) {
        var url = 'localhost:8080/games/' + username;
        return fetch(url)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(scores) {
            return dispatch(
                // later we need to make this return 'id' as well
                fetchGameHistorySuccess(username, scores);
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchGameHistoryError(username, error)
            );
        });
    }
};

var FETCH_GAME_HISTORY_SUCCESS = 'FETCH_GAME_HISTORY_SUCCESS';
var fetchGameHistorySuccess = function(username, scores) {
    return {
        type: FETCH_GAME_HISTORY_SUCCESS,
        userName: userName,
        scores: scores
    };
};

var FETCH_GAME_HISTORY_ERROR = 'FETCH_GAME_HISTORY_ERROR';
var fetchGameHistoryError = function(username, error) {
    return {
        type: FETCH_GAME_HISTORY_ERROR,
        username: username,
        error: error
    };
};


// GET HIGH SCORE
var fetchHighScore = function(username) {
    return function(dispatch) {
        var url = 'localhost:8080/games/' + username + '/highscore';
        return fetch(url)
        .then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText);
                error.response = response;
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var highScore = data.score;
            return dispatch(
                // later we need to make this return 'id' as well
                fetchHighScoreSuccess(username, highScore);
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchHighScoreError(username, error)
            );
        });
    }
};

var FETCH_HIGH_SCORE_SUCCESS = 'FETCH_HIGH_SCORE_SUCCESS';
var fetchHighScoreSuccess = function(username, highScore) {
    return {
        type: FETCH_HIGH_SCORE_SUCCESS,
        username: username,
        highScore: highScore
    };
};

var FETCH_HIGH_SCORE_ERROR = 'FETCH_HIGH_SCORE_ERROR';
var fetchHighScoreError = function(username, error) {
    return {
        type: FETCH_HIGH_SCORE_ERROR,
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

exports.FETCH_GAME_HISTORY_SUCCESS = FETCH_GAME_HISTORY_SUCCESS;
exports.FETCH_GAME_HISTORY_ERROR = FETCH_GAME_HISTORY_ERROR;
exports.fetchGameHistorySuccess = fetchGameHistorySuccess;
exports.fetchGameHistoryError  = fetchGameHistoryError ;

exports.FETCH_HIGH_SCORE_SUCCESS = FETCH_HIGH_SCORE_SUCCESS;
exports.FETCH_HIGH_SCORE_ERROR = FETCH_HIGH_SCORE_ERROR;
exports.fetchHighScoreSuccess = fetchHighScoreSuccess ;
exports.fetchHighScoreError = fetchHighScoreError;
