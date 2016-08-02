var React = require('react');
var connect = require('react-redux').connect;
var ActiveTile = require('./active-tile');
var InactiveTile = require('./inactive-tile');

var TileContainer = React.createClass({

	onTileClick: function(event) {
		event.preventDefault();
		// dispatches action, reducer adjusts score accordingly
		// this.props.incrementScore(1);
		// this.props.decrementScore(1);
	},
	render: function() {
		var tileArray = [];
		// 5 would be the initial state. Adjust depending on difficulty setting.
		for (var i = 0; i < 5; i++) {
			tileArray.push(<Tile onTileClick={this.onTileClick}/>)
		}

		return (
			<tr>
			{tileArray}
			</tr>
		);
	}

});

// mapStateToProps
// mapDispatchToProps to have access to dispatch without having to pass state all the way down

//var container = connect(mapStateToProps, mapDispatchToProps)

module.exports = TileContainer;