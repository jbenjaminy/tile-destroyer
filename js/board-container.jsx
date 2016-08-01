var React = require('react');
var connect = require('react-redux').connect;

var Board = require('./board');


var BoardContainer = React.createClass({
	getInitialState: function() {
		return {
			// initial state of app
		}
	},
	onTileClick: function() {
		// dispatches action, reducer adjusts score accordingly
	},
	render: function() {
		return (
			<Board onTileClick={this.onTileClick} />
		);
	}

});


module.exports = BoardContainer;