var React = require('react');
var connect = require('react-redux').connect;
var Tile = require('./tile');

var Board = React.createClass({

	render: function() {
		var rowArray = [];
		// 5 would be the initial state. Adjust depending on difficulty setting (props.difficulty)
		for (var i = 0; i < 5; i++) {
			var tileArray = [];
			for (var j = 0; j < 5; j++) {
				tileArray.push(<Tile row={i} col={j} />)
			}
			rowArray.push(<tr>{tileArray}</tr>)
		}

		return (
			<table>
				{rowArray}
			</table>
		);
	}

});

// var mapStateToProps = function(state, props) {
// 	return {
// 		difficulty: state.difficulty
// 	}
// }
//
// module.exports = connect(mapStateToProps)(Board);
// 
module.exports = Board;