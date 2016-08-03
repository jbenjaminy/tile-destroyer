var React = require('react');
var Tile = require('./tile').Container;

var Board = React.createClass({

	render: function() {
		console.log(' inside board');
		var rowArray = [];
		var listArray = [];
		// this.props.size will pass state to adjust size from game-container
		// 5 would be the initial state. Adjust depending on difficulty setting (props.difficulty)
		// for (var i = 0; i < 5; i++) {
		// 	var tileArray = [];
		// 	for (var j = 0; j < 5; j++) {
		// 		tileArray.push(<Tile row={i} col={j} key={`${i}-${j}`} />)
		// 	}
		// 	console.log('tileArray', tileArray);
		// 	rowArray.push(<tr>{tileArray}</tr>)
		// 	console.log('rowarray', rowArray);
		// }
		for (var j = 0; j < 20; j++) {
			listArray.push(<Tile key={j} />)
		}

		return (

				<ul>
					{listArray}
				</ul>

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