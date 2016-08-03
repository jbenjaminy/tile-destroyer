var React = require('react');

var OverlayInstructions = require('./overlay-instructions');

var OverlayContainer = React.createClass( {
  var show = (this.props.showInstructions ? '' : 'hidden');
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


