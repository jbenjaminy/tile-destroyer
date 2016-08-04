// Keeps current score for the player during game.
var React = require( 'react' );
var connect = require('react-redux').connect;

var Score = React.createClass( {

  render: function() {
    return (
      <div>
        <p>Your score: {this.props.score}</p>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    score: state.score
  };
};

var Container = connect(mapStateToProps)(Score);
module.exports = Container;
