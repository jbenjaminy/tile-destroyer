var React = require('react');
var connect = require('react-redux').connect;
var TileContainer = require('./tile-container');

var Board = React.createClass({

	render: function() {
		var tileContainerArray = [];
		// 5 would be the initial state. Adjust depending on difficulty setting.
		for (var i = 0; i < 5; i++) {
			tileContainerArray.push(<TileContainer />);
		}

		return (
			<table>
				{tileContainerArray}
			</table>
		);
	}

});


module.exports = TileContainer;