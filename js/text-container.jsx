var React = require('react');

var Timer = require('./timer');
var Score = require('./score');
var BestScore = require('./best-score');

var TextContainer = React.createClass({
  render: function() {
  	if (!this.props.render) {
  		return null;
  	};
  	
    return (
      <div>
        <BestScore />
        <Score />
        <Timer />
      </div>
    );
  }
});

module.exports = TextContainer;
