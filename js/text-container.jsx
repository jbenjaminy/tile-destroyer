var React = require('react');

var Timer = require('./timer');
var Score = require('./score');
var BestScore = require('./best-score');

var TextContainer = React.createClass({
  render: function() {
    return (
      <div>
        <p><BestScore /></p>
        <p><Score /></p>
        <p><Timer /></p>
      </div>
    );
  }
});

var mapStateToProps = function(state, props) {
  return {
    text: state,
    // timer, score, etc
    };
};

module.exports = TextContainer;
