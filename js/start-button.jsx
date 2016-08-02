// Starts the game.

var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var StartButton = React.createClass ({
    render: function() {
      return (
        <button type="button">Play Game</button>
      );
    }
});


var Container = connect()(StartButton);

module.exports = Container;
