
var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var BestScore = React.createClass( {

  render: function() {
    return (
      <div>
        {/* <p>Your score: </p> + {this.props.BestScore} */}
      </div>
    );
  }
});

var Container = connect()(BestScore);

module.exports = Container;
