var React = require('react');
var connect = require('require-redux').connect;

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
