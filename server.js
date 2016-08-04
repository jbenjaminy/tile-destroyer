/* --------- DEPENDENCIES --------- */
var express = require('express');
var bodyParser = require('body-parser');

var knex = require('knex')({
    client: 'pg',
    connection: {
        database: 'fsGame'
    },
});

/* --------- GLOBAL VARIABLES --------- */
var jsonParser = bodyParser.json();
var app = express();

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
            return response.status(201).json({
                // TODO: return entire user object
                username,
                id: id[0],
                message: 'Registration successful'
            });
        })
        .catch(function(error) {
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
            return response.status(201).json({
                userId,
                score, 
                message: 'Score saved successfully'
            });
        })
        .catch(function(error) {
            return response.sendStatus(500);
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
            // if (!response[0]) {
            //     return response.status(404).json({
            //         message: 'Game history not found'
            //     });
            // }
            return response.json(gameHistory);
        })
        .catch(function(error) {
            console.log(error);
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
            return response.json(highScore);
        })
        .catch(function(error) {
            console.log(error);
            return response.sendStatus(500);
        });
});

// TODO: DELETE THESE ENDPOINTS AFTER TESTING
// GET USERS
app.get('/users', jsonParser, function(request, response) {

    knex.select()
        .from('users')
        .then(function(users) {
            return response.json(users);
        })
        .catch(function(error) {
            return response.sendStatus(500);
        });
});

// DELETE USER BY USER ID
app.delete('/users/:userId', jsonParser, function(request, response) {
    var id = request.params.userId;

    knex('users')
        .where('id', id)
        .del()
        .then(function(user_id) {
            return response.status(200).json({
                user_id, 
                message: 'User deleted successfully'
            });
        })
        .catch(function(error) {
            return response.sendStatus(500);
        });
});

// DELETE GAME HISTORY BY USER ID
app.delete('/games/:userId', jsonParser, function(request, response) {
    var user_id = request.params.userId;

    knex('games')
        .where('user_id', user_id)
        .del()
        .then(function(user_id) {
            return response.status(200).json({
                user_id, 
                message: 'Game history deleted successfully'
            });
        })
        .catch(function(error) {
            return response.sendStatus(500);
        });
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port:' + port);
});
