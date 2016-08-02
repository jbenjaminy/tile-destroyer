
var React = require('react');
var connect = require('require-redux').connect;

var OverlayInstructions = require('./overlay-instructions');

var OverlayContainer = React.createClass( {
  render: function() {
    return (
      <div>
        <OverlayInstructions />
      </div>
    );
  }
});

var Container = connect()(OverlayContainer);

module.exports = Container;
