// Entry point for the game application

var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

// var startButton = require('./start-button');
// var usernamePrompt = require('./username-prompt');
// var scoreFeedback = require('./score-feedback');
var Board = require('./board');
var TextContainer = require('./text-container');

var GameContainer = React.createClass( {
  render: function() {
    return (
      <div>
        <div>
          <header>
            <h1>Shoot the Tiles</h1>
          </header>
          <Board />
        </div>
        <div className="info-board">
          <TextContainer />
        </div>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    games: state
  };
};

var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;
