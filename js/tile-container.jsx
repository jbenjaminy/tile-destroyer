var React = require('react');
var connect = require('react-redux').connect;
var ActiveTile = require('./active-tile');
var InactiveTile = require('./inactive-tile');

var TileContainer = React.createClass({
1-1 1-2 1-3
tileArray = []
// two loops pushing both inactive and active, set ids {id for columns}
	getInitialState: function() {
		return (
		// initial state of tiles
		);
	},
	onTileClick: function(event) {
		event.preventDefault();
		// dispatches action, reducer adjusts score accordingly
		// this.props.incrementScore(1);
		// this.props.decrementScore(1);
	},
	render: function() {
		return (
			<tr>
				<td>{tile}</td>
			</tr>
			// rows and cells returned here
		);
	}

});

// mapStateToProps
// mapDispatchToProps to have access to dispatch without having to pass state all the way down

//var container = connect(mapStateToProps, mapDispatchToProps)

module.exports = TileContainer;
