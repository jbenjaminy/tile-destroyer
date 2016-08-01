/* --------- DEPENDENCIES --------- */
var express = require('express');
var bodyParser = require('body-parser');
var knex = require('knex')({
	client: 'pg',
    connection: {
        database: 'fsGame',
        // user: 'ben',
        // password: 'thinkful'
    },
});

/* --------- GLOBAL VARIABLES --------- */
var jsonParser = bodyParser.json();
var app = express();

/*----------- USER ENDPOINTS ----------*/
app.post('/users', jsonParser, function(request, response) {

    knex.insert({
        name: request.body.username
    }).into('users').then();
});

app.post('/:user/games', jsonParser, function(request, response) {

});


var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port:' + port);
});