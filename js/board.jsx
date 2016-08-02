var React = require('react');
var connect = require('react-redux').connect;
var TileContainer = require('./tile-container');

var Board = React.createClass({

	render: function() {
		var tileContainerArray = [];

		for (var i = 0; i < 6; i++) {
			tileContainerArray.push(<TileContainer onTileClick={this.onTileClick} />);
		}

		return (
			<table>
				{tile_container_array}
			</table>
		);
	}

});

module.exports = TileContainer;
