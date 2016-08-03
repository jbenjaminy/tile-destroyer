var React = require('react');
var Tile = require('./tile').Container;

var Board = React.createClass({

	render: function() {
		console.log(' inside board');
		var listArray = [];
		// TODO: set iteration to difficulty setting (this.state.difficulty)
		for (var i = 0; i < 20; i++) {
			listArray.push(<Tile key={i} />)
		}
		
		return (
			<ul>
				{listArray}
			</ul>
		);
	}

});

module.exports = Board;