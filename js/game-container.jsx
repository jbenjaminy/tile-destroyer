// Entry point for the game application

var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('require-redux').connect;

var Board = require('./board');
var TextContainer = require('./text-container');
var DynamicContainer = require('./dynamic-container');
var OverlayContainer = require('./overlay-container');

var GameContainer = React.createClass( {

  TOGGLE_OVERLAY: function() {
    this.props.dispatch( actions.TOGGLE_OVERLAY() );
  };

  render: function() {
    return {
      <div>
          <h1>Shoot the Tiles</h1>
      </div>
      <div>
        <Board size={this.props.board}/>
      </div>
      <div className="info-board">
        <TextContainer text={this.props.text}/>
      </div>
      <div>
        <DynamicContainer />
      </div>
      <div>
        <OverlayContainer onClick={this.TOGGLE_OVERLAY} showInstructions={this.props.overlay}/>
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