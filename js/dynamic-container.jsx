
        // Upon page load, display user name input field and Game Start button. When game is over, display Final Score and Play Again button
var React = require('react');

var StartButton = require('./start-button');
var UsernamePrompt = require('./username-prompt');

var DynamicContainer = React.createClass( {

  //Render based on state in Store
  render: function() {
    return (
      <div>

      <h3>Enter your name and press PLAY to begin.</h3>
        <p>
          <UsernamePrompt />
        </p>
        <p>
          <StartButton />
        </p>
     
      </div>
    );
  }
});
// TODO: MAP DIRECTLY IN BOTH SUB-COMPONENTS (REQUIRE AT THE TOP)
// var mapStateToProps = function(state, props) {
//   return {
//     usernameInput: state.username,
//     currentScore: state.score
//     };
// };
// var Container = connect(mapStateToProps)(GameContainer);

// module.exports = Container;
// TODO: RENDER BEFORE GAME(isBeforeGame)/AFTER GAME COMPONENTS(isAfterGame);
// start game will trigger (isInGame) -- one state
module.exports = DynamicContainer;
  // The player's score should be rendered after the game has been played
  //      <p>
  //      <Score />
  //      </p> */
  //        {} /* The start button/PLAY AGAIN button is rendered after the game is over.
       //  <p>
       //    <StartButton
       //  </p> */