// COMPLETE
var React = require('react');

var OverlayInstructions = require('./overlay-instructions');

var show = (this.props.showInstructions ? '' : 'hidden');

var OverlayContainer = React.createClass( {
  
  render: function() {
    return (
      <div>
        <div>
          <button type="button" onClick={this.props.onClick}>What?</button>
        </div>
        <div className={show}>
          <OverlayInstructions />
        </div>
      </div>
    );
  }
});

module.exports = OverlayContainer;


