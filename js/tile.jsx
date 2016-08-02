var React = require('react');
var connect = require('react-redux').connect;

var Tile = React.createClass({
// Tile will toggle classes (?adding background color?)
// Class will toggle at a randomly generated set interval between 3 - 10 seconds
	onTileClick: function() {
		// dispatches action, reducer adjusts score accordingly
		// this.props.incrementScore(1)  <=== If Tile's class background color is red
		// this.props.decrementScore(1); <=== If Tile's class background color is white
	},

	render: function() {
		return (
			<td onClick={this.onTileClick}></td>
		);
	}

});


var mapStateToProps = function(state, props) {
	return {

	}
};

module.exports = connect(mapStateToProps)(Tile);