var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var Timer = React.createClass( {
  // var time =
  render: function() {
    return (
      <div>
        {/* Count down timer */}
      </div>
    );
  }
});

var Container = connect()(Timer);

module.exports = Container;
