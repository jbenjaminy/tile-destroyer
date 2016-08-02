// Gives players final score after the game

var React = require( 'react' );
var connect = require( 'react-redux' ).connect;
var actions = require( './actions' );

var ScoreFeedback = React.createClass( {

  render: function() {
    return (
      <div>
        {/* <p>Final score: </p> + {this.props.finalScore} */}
      </div>
    );
  }
});

var Container = connect()(ScoreFeedback);

module.exports = Container;
