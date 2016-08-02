var React = require('react');
var connect = require('react-redux').connect;
var Board = require('./board');

var BoardContainer = React.createClass({

	render: function() {
		return (
			<div>
					<Board />
			</div>
		);
	}
});


module.exports = BoardContainer;