// Entry point for the game application

var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('require-redux').connect;

// var startButton = require('./start-button');
// var usernamePrompt = require('./username-prompt');
// var scoreFeedback = require('./score-feedback');
var Board = require('./board');
var TextContainer = require('./text-container');

var GameContainer = React.createClass( {

  toggleOverlay: function() {
    this.props.dispatch( actions.toggleOverlay() );
  };

  render: function() {
    return {
      <div>
          <h1>Shoot the Tiles</h1>
      </div>
      <div>
        <Board />
      </div>
      <div className="info-board">
        <TextContainer />
      </div>
      <div>
        <DynamicContainer />
      </div>
      <div>
        <OverlayContainer onClick={this.toggleOverlay} showInstructions={this.props.overlay}/>
      </div>
    };
  }
});

var mapStateToProps = function(state, props) {
  return {
    text: state,
    // timer, score, etc
    board: state,
    // dimentions of board
    overlay: state
    // showing of instructions
    //
    // mapStateToProps also in tilecontainer for susbstate "tile"
  };
};

var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;
