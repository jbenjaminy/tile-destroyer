var React = require( 'react' );
var connect = require('react-redux').connect;

var BestScore = React.createClass( {

  render: function() {
    return (
      <div>
        <p>High score: {this.props.highScore}</p>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    highScore: state.highScore
  }
}

var Container = connect(mapStateToProps)(BestScore);
module.exports = Container;
