
// When game is over, display Final Score and Play Again button
var React = require('react');
var PlayButton = require('./play-button');
var ScoreFeedback = require('./score-feedback');
var connect = require('react-redux').connect;

var AfterContainer = React.createClass( {

  //Render based on state in Store
  render: function() {
    return (
      <div>

      <h3>Your final score is: </h3>
          <ScoreFeedback />
          <h3>Press PLAy to try again.</h3>
          <PlayButton />
      </div>
    );
  }
});

// TODO: RENDER BEFORE GAME(isBeforeGame)/AFTER GAME COMPONENTS(isAfterGame);
// start game will trigger (isInGame) -- one state
module.exports = AfterContainer;
