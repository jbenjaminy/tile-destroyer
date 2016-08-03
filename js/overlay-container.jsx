// COMPLETE
var React = require('react');
var connect = require('react-redux').connect;
var OverlayInstructions = require('./overlay-instructions');

var show = (this.props.overlay ? '' : 'hidden');

var OverlayContainer = React.createClass( {

  render: function() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.props.manageOverlay}>What?</button>
        </div>
        <div className={show}>
          <OverlayInstructions />
        </div>
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

var Container = connect(mapStateToProps)(OverlayContainer);

module.exports = Container;
