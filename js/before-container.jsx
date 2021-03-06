
// Upon page load, display user name input field and Game Start button.
var React = require('react');
var PlayButton = require('./play-button');
var UsernamePrompt = require('./username-prompt');
var connect = require('react-redux').connect;

var BeforeContainer = React.createClass( {

  render: function() {
    var classes = 'before-container  ';
    if (!this.props.beforeContainer) {
      classes += 'hidden';
    }

    return (
      <div className={classes}>
        <h3>Enter your name and press START GAME to begin.</h3>
            <UsernamePrompt />
            <PlayButton text={this.props.playButton}/>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    beforeContainer: state.beforeContainer,
    playButton: state.playButton
  }
};

var Container = connect(mapStateToProps)(BeforeContainer);
module.exports = Container;
