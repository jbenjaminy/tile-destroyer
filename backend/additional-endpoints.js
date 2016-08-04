/*----------- ADDITIONAL SERVER.JS ENDPOINTS -------------*/

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