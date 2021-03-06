/* --------- DEPENDENCIES --------- */
var express = require('express');
var bodyParser = require('body-parser');

var databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/fsGame';
if (process.env.NODE_ENV === 'production') {
    databaseUrl += '?ssl=true';
}

var knex = require('knex')({
    client: 'pg',
    connection: databaseUrl
});

/* --------- GLOBAL VARIABLES --------- */
var jsonParser = bodyParser.json();
var app = express();

app.use(express.static('./build'));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods", "POST");
  next();
});

/* ----------- USER ENDPOINTS ---------- */

// POST NEW USERS
app.post('/users', jsonParser, function(request, response) {
    var username = request.body.username.trim();

    if (!username || username === '') {
        return response.status(422).json({
            message: 'Missing field: username'
        });
    }

    knex.insert({username: username})
        .returning('id')
        .into('users')
        .then(function(id) {
            console.log('post user success');
            console.log('username: ', username, 'id: ', id[0], 'message: ', 'Registration successful')
            return response.status(201).json({
                username,
                id: id[0],
                message: 'Registration successful'
            });
        })
        .catch(function(error) {
            console.log('post user error');
            return response.sendStatus(500);
        });
});

// POST NEW SCORES BY USER ID
app.post('/games/:userId', jsonParser, function(request, response) {
    var userId = parseInt(request.params.userId);
    var score = parseInt(request.body.score);

    knex.insert({user_id: userId, score: score})
        .into('games')
        .then(function() {
            console.log('post score success');
            console.log('userId: ', userId, 'score: ', score);
            return response.status(201).json({
                userId,
                score, 
                message: 'Score saved successfully'
            });
        })
        .catch(function(error) {
            return response.sendStatus(500);
            console.log('post score error');
        });
});

// GET GAME HISTORY BY USERNAME
app.get('/games/:username', jsonParser, function(request, response) {
    var username = request.params.username;

    knex.select('games.id', 'score')
        .from('games')
        .rightJoin('users', 'games.user_id', 'users.id')
        .where({username: username})
        .then(function(gameHistory) {
            console.log('get game history success');
            console.log('gameHistory: ', gameHistory);
            return response.json(gameHistory);
        })
        .catch(function(error) {
            console.log('get game history error');
            response.sendStatus(500);
        });
});

// GET HIGH SCORE BY USERNAME
app.get('/games/:username/highscore', jsonParser, function(request, response) {
    var username = request.params.username;

    knex.select('score')
        .from('games')
        .rightJoin('users', 'games.user_id', 'users.id')
        .where({username: username})
        .orderBy('score', 'desc')
        .then(function(scores) {
            var highScore = scores[0].score;
            if (highScore === null) {
                return response.status(404).json({
                    message: 'Game history not found'
                });
            }
            console.log('get high score success');
            console.log('highScore: ', highScore);
            return response.json(highScore);
        })
        .catch(function(error) {
            console.log('get high score error');
            return response.sendStatus(500);
        });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port:' + port);
});
