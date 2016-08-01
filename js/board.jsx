var React = require('react');
var connect = require('react-redux').connect;

var TileContainer = require('./tile-container');

var Board = React.createClass({
	onTileClick: function(event) {
		event.preventDefault();
		// dispatches action, reducer adjusts score accordingly
	},
	render: function() {
		return (
					<td>
						<TileContainer onTileClick={this.onTileClick} />
					</td>
					<td>
						<TileContainer onTileClick={this.onTileClick} />
					</td>
					<td>
						<TileContainer onTileClick={this.onTileClick} />
					</td>
					<td>
						<TileContainer onTileClick={this.onTileClick} />
					</td>	
					<td>
						<TileContainer onTileClick={this.onTileClick} />
					</td>
					<td>
						<TileContainer onTileClick={this.onTileClick} />
					</td>				
		);
	}
});


module.exports = TileContainer;