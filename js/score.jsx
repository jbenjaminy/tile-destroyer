// Keeps current score for the player during game.

var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var Score = React.createClass( {

  render: function() {
    return (
      <div>
        <p>Your score: </p> + {props.score}
      </div>
    );
  }
});


var Container = connect()(Score);

module.exports = Container;
