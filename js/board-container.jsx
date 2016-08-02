// do we really need a board-container?

var React = require('react');
var connect = require('react-redux').connect;
var Board = require('./board');

var BoardContainer = React.createClass({
	getInitialState: function() {
		return {
			// initial state of board
		}
	},
	render: function() {
		return (
			<div>
				<table>
					<Board />
				</table>
			</div>
		);
	}
});


module.exports = BoardContainer;
