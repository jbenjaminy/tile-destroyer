var React = require('react');
var connect = require('react-redux').connect;
var actions = require('./actions');

var GameHistory = React.createClass({

	closeHistory: function() {
		// dispatches action to set showDisplay state to 'false'
		this.props.dispatch(actions.toggleHistoryDisplay());
	},

	render: function() {
		//TODO: Add showHistory state as boolean
		var classes = 'game-history ';
		if (!this.props.historyDisplay) { 
			classes += 'hidden';
		};

		return (
			<div>
				<div className={classes}>{this.props.gameHistory}</div>
				<button onClick={this.closeHistory}>OKAY</button>
			</div>
		);
	}

});

var mapStateToProps = function(state, props) {
	return {
		gameHistory: state.gameHistory,
		historyDisplay: state.historyDisplay
	}
};

var Container = connect(mapStateToProps)(GameHistory);
module.exports = Container;