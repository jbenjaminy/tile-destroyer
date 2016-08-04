
// When game is over, display Final Score and Play Again button
var React = require('react');
var PlayButton = require('./play-button');
var ScoreFeedback = require('./score-feedback');
var connect = require('react-redux').connect;

var AfterContainer = React.createClass( {

  //Render based on state in Store
  render: function() {
    var classes = 'after-display  ';
    if (!this.props.afterContainer) {
      classes += 'hidden';
    };

    return (
      <div className={classes}>
        <h3>Your final score is: </h3>
        <ScoreFeedback />
        <h3>Press PLAy to try again.</h3>
        <PlayButton />
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    afterContainer: state.afterContainer
  }
}

var Container = connect(mapStateToProps)(AfterContainer);
module.exports = Container;
