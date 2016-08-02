var React = require('react');
var connect = require('react-redux').connect;
var TileContainer = require('./tile-container');

var Board = React.createClass({

	render: function() {
		var tileContainerArray = [];

		for (var i = 0; i < {this.props.columns); i++) {
			tileContainerArray.push(<ColumnContainer onTileClick={this.onTileClick} id=i />);
		}



		return (
			<table>
				{tileContainerArray}
				<tr>
					<td>active</td>
					<td>inactive</td>
					<td>active</td>
				</tr>
			</table>
		);
	}

});

module.exports = TileContainer;
