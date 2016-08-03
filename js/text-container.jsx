var React = require('react');

var Timer = require('./timer');
var Score = require('./score');
var BestScore = require('./best-score');

var TextContainer = React.createClass({
  render: function() {
    return (
      <div>
        <BestScore />
        <Score />
        <Timer />
      </div>
    );
  }
});
// TODO : WORK ON TIMER COMPONENT

module.exports = TextContainer;
