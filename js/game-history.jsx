var React = require('react');
var connect = require('react-redux').connect;
var actions = require('.actions');

var GameHistory = React.createClass({

	closeHistory: function() {
		// dispatches action to set showDisplay state to 'false'
		this.props.dispatch(actions.toggleHistoryDisplay());
	},

	render: function() {
		//TODO: Add showHistory state as boolean
		var classes = 'game-history ';
		if (!this.props.showHistory) { 
			classes += 'hidden';
		};

		return (
			<div className={classes}>{this.props.gameHistory}</div>
			<button onClick={this.closeHistory}>OKAY</button>
		);
	}

});

var mapStateToProps = function(state, props) {
	return {
		gameHistory: state.gameHistory
	}
};

var Container = connect(mapStateToProps)(GameHistory);
module.exports = Container;