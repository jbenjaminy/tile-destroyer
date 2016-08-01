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

    knex.insert({
        name: request.body.username
    }).into('users');

    return response.json();
});

app.post('/:userId/games', jsonParser, function(request, response) {

    knex.insert({
        user_id: request.params.userId,
        score: request.body.score
    }).into('games');

    return response.json();
});

app.get('/users', jsonParser, function(request, response) {

    knex.select().table('users');

    return response.json();
});

app.get('/:userId/games', jsonParser, function(request, response) {

    knex('games').where('user_id', request.params.userId).select('score');

    return response.json();
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port:' + port);
});