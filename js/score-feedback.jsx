// Gives players final score after the game

var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var ScoreFeedback = React.createClass( {

  render: function() {
    return (
      <div>{this.props.score}</div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    score: state.score
  };
};

var Container = connect(mapStateToProps)(ScoreFeedback);
module.exports = Container;
