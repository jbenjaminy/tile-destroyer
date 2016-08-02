var React = require('react');
var connect = require('react-redux').connect;

var Tile = React.createClass({
// Tile will toggle classes (?adding background color?)
// Class will toggle at a randomly generated set interval between 3 - 10 seconds
// 
	render: function() {
		return (
			<td onClick={props.onTileClick}></td>
		);
	}

});


module.exports = Tile;