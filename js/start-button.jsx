// Starts the game.

var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );


// Add event handler to start game
var StartButton = React.createClass ({
  //the NEW_GAME method should let button communicate up saying that it's been clicked
  NEW_GAME: function() {

    this.props.dispatch( actions.NEW_GAME() );
    // //reset to initial state
    // game.props.score=0;
    // timer.props.count=15;
    // // Lay new tiles
  };

    render: function() {
      return (
        <button type="button" onClick={this.NEW_GAME}>Play Game></button>
      );
    }
});




var Container = connect()(StartButton);

module.exports = Container;