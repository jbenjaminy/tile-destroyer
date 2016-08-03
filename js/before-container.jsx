
// Upon page load, display user name input field and Game Start button.
var React = require('react');
var PlayButton = require('./play-button');
var UsernamePrompt = require('./username-prompt');
var connect = require('react-redux').connect;

var BeforeContainer = React.createClass( {

  //Render based on state in Store
  render: function() {
    return (
      <div>
        <h3>Enter your name and press PLAY to begin.</h3>
            <UsernamePrompt />
            <PlayButton />
      </div>
    );
  }
});

// TODO: RENDER BEFORE GAME(isBeforeGame)/AFTER GAME COMPONENTS(isAfterGame);
// start game will trigger (isInGame) -- one state
// PLAY BUTTON DISPATCHES actions.newGame() (start-timer), reset score
module.exports = BeforeContainer;
