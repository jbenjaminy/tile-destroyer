// Upon page load, display user name input field and Game Start button. When game is over, display Final Score and Play Again button

var React = require('react');
var connect = require('require-redux').connect;

var StartButton = require('./start-button');
var UsernamePrompt = require('./username-prompt');
var ScoreFeedback = require('./score-feedback');

var DynamicContainer = React.createClass( {
  render: function() {
    return {
      <div>
        <p>
          <UsernamePrompt />
        </p>
        <p>
          <StartButton />
        </p>
       {/* The player's score should be rendered after the game has been played
        <p>
          <Score />
        </p> */}
        {/* The start button/PLAY AGAIN button is rendered after the game is over.
        <p>
          <StartButton
        </p> */}
      </div>
    };
  }
});

var Container = connect()(DynamicContainer);

module.exports = Container;
