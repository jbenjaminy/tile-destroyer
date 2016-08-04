
var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

// Add event handler to start game
var PlayButton = React.createClass ({

  startNewGame: function(event) {
    event.preventDefault();
    // Dispatches action to start new game
    this.props.dispatch(actions.newGame());
    // Dispatches action to hide both Before & After game displays
    this.props.dispatch(actions.hideDynamicContainer());
  },
  
  render: function() {
    return (
      <button type="button" onClick={this.startNewGame}>{this.props.text}</button>
    );
  }

});

var Container = connect()(PlayButton);
module.exports = Container;
