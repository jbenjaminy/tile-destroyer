// COMPLETE
var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;

var Board = require('./board');
var TextContainer = require('./text-container');
var DynamicContainer = require('./dynamic-container');
var OverlayContainer = require('./overlay-container');

var GameContainer = React.createClass( {

  manageOverlay: function() {
    this.props.dispatch(actions.toggleOverlay());
  },

  render: function() {
    return (
      <div>
          <h1>Shoot the Tiles</h1>
          <Board />
        <div className="info-board">
          <TextContainer />
        </div>
          <DynamicContainer />
          <OverlayContainer onClick={this.manageOverlay} showInstructions={this.props.overlay}/>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    overlay: state.overlay
    // TODO: WRITE THIS INTO REDUCER
    };
};
var Container = connect(mapStateToProps)(GameContainer);

module.exports = Container;