// Starts the game.

var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

// Add event handler to start game
var PlayButton = React.createClass ({

  startNewGame: function(event) {
    event.preventDefault();
    this.props.dispatch( actions.newGame() );
  },
  render: function() {
    return (
      <button type="button" onClick={this.startNewGame}>PLAY></button>
    );
  }
});
// PLAY BUTTON DISPATCHES actions.newGame() (start-timer), reset score, dispatch hideDynamicContainer()
// TODO: set two classes for before/after containers class ="dynamic hidden"

var Container = connect()(PlayButton);
module.exports = Container;
