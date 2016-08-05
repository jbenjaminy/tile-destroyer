var React = require('react');
var Score = require('./score');
var BestScore = require('./best-score');
var Timer = require('./timer');

var TextContainer = React.createClass({
  something: function() {
    console.log('stuff');
  },

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
