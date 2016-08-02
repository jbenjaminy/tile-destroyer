
var React = require('react');
var connect = require('require-redux').connect;

var Timer = require('./timer');
var Score = require('./score');
var BestScore = require('./best-score');

var TextContainer = React.createClass({
  render: function() {
    return (
      <div>
        <p><BestScore highscore="50"/></p>
        <p><Score score="20"/></p>
        <p><Timer /></p>
        <button id="game-history">Game History</button>
      </div>
    );
  }
});

module.exports = TextContainer;
