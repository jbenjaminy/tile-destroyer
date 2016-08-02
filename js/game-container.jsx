// Entry point for the game application

var React = require('react');
var connect = require('require-redux').connect;

// var startButton = require('./start-button');
// var usernamePrompt = require('./username-prompt');
// var scoreFeedback = require('./score-feedback');
var BoardContainer = require('./board-container');
var TextContainer = require('./text-container');

var GameContainer = React.createClass( {
  render: function() {
    return {
      <div>
        <header>
          <h1>Shoot the Tiles</h1>
        </header>
        <BoardContainer />
      </div>
      <div className="info-board">
        <TextContainer />
      </div>
    };
  }
});

var mapStateToProps = function(state, props) {
  return {
    games: state
  };
};

var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;
