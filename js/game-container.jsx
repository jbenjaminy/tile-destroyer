var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./actions');

var Board = require('./board');
var TextContainer = require('./text-container');
var BeforeContainer = require('./before-container');
var AfterContainer = require('./after-container');
var OverlayContainer = require('./overlay-container');

var GameContainer = React.createClass( {

  manageOverlay: function() {
    this.props.dispatch(actions.toggleOverlay());
  },

  render: function() {

    return (
      <div>
          <h1>Shoot the Tiles</h1>
          <Board render={this.props.showBoard}/>
        <div className="info-board">
          <TextContainer render={this.props.showBoard} />
        </div>
          <BeforeContainer />
          <OverlayContainer manageOverlay={this.manageOverlay} overlay={this.props.overlay} />
          <AfterContainer />
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    overlay: state.overlay,
    showBoard: state.showBoard
  };
};

var Container = connect(mapStateToProps)(GameContainer);
module.exports = Container;
