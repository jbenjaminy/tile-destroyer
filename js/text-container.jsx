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

module.exports = TextContainer;
