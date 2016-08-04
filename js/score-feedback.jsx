var React = require( 'react' );

var ScoreFeedback = React.createClass( {

  render: function() {
    return (
    	<h3>Your Final Score Is: {this.props.score}</h3>
    );
  }
});

module.exports = ScoreFeedback;
