var React = require( 'react' );

var OverlayInstructions = React.createClass( {

  render: function() {

      return (
        <div className="instructions">
          <h3>How to play</h3>
          <p>First, create your username before playing the game; the game begins when you click START GAME. This is a timed-game where you can break tiles and compete for the highest score. The object of the game is to click the red tiles to earn points; click as many red tiles as you can in 20 seconds. You earn a point for every direct hit, but lose two points if you miss and hit the white tiles.</p>

          <p>When the round is over, you can view your final score, score history, highest score, and choose to play again.</p>
        </div>
      );
    }
});

module.exports = OverlayInstructions;
