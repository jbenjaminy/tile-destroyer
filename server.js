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
app.post('/users', jsonParser, function(request, response) {
    var username = request.body.username.trim();
    console.log(username);

    if (!username || username === '') {
        return response.status(422).json({
            message: 'Missing field: username'
        });
    }

    if (typeof username !== 'string') {
        return response.status(422).json({
            message: 'Incorrect field type: username'
        });
    }

    knex.insert({ username: username })
        .into('users')
        .then(function() {
            console.log(response);
            return response.status(201).json({username, message: 'Registration successful'});
        })
        .catch(function(error) {
            return responsesendStatus(500);
        });

});

// EXAMPLE INPUT:
    // ENDPOINT: localhost:8080/users
    // REQUEST BOD  Y:
        //   {
        //     "username": "ben"
        //   }

app.post('/:userId/games', jsonParser, function(request, response) {

    knex.insert({
        user_id: parseInt(request.params.userId),
        score: parseInt(request.body.score)
    }).into('games').then(function(error, score) {
// TODO: USE CATCH FOR HANDLING ERROR
        if (error) {
            return response.sendStatus(500);
        }

        return response.status(201).json(score, { message: 'Score saved successfully'});
    });
});

// EXAMPLE INPUT:
     // ENDPOINT: localhost:8080/1/games
     // REQUEST BODY:
        // {
        // "score": "20"
        // }

app.get('/games/:username', jsonParser, function(request, response) {

    knex.select('score').from('games').rightJoin('users', 'games.user_id', 'users.id').where({
        username: request.params.username
    }).then(function(error, scores) {
// TODO: USE CATCH FOR HANDLING ERROR
        if (error) {
            return response.status(500);
        }

        if (response.length === 0) {
            return response.status(404).json({ message: 'Not Found' });
        }

        // if (scores === )
        // return response.json(scores);
    });
});

// EXAMPLE OUTPUT:
    // ENDPOINT: localhost:8080/1/games
    // RESPONSE:
        // [
        //   {
        //     "score": 15
        //   },
        // 
        //   {
        //     "score": 20
        //   }
        // ]

// var numGuesses = numGuesses;
//     this.prevGames.push(numGuesses);
//     this.sortedGames.push(numGuesses);
//     this.sortedGames.sort(function(a,b){return a - b});
//     this.bestGame = this.sortedGames[0];

//     return numGuesses;

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port:' + port);
});