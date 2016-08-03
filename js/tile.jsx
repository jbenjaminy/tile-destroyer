var React = require('react');
var connect = require('react-redux').connect;
var actions = require( './actions' );

var Tile = React.createClass({

	getInitialState: function() {
		// set initial state to inactive
		return {
			tileDisplay: 'inactive'
		};
	},

	onTileClick: function() {
		if( this.state.tileDisplay === 'inactive') {
			// dispatch action to decrement score
			this.props.dispatch(actions.decrementScore());
		} else {
			// dispatch action to increment score
			this.props.dispatch(actions.incrementScore());
		};
	},

	makeActive: function() {
		// set state display to active
		this.setState({
			tileDisplay: 'active'
		})
		// setTimeout() : call this.makeInactive after ~ 1 sec
		setTimeout(function() {this.makeInactive();}, 1000);
	},

	makeInactive: function() {
		// generates random number 
		var randomSeconds = Math.ceil((Math.random() * 10 + 3) * 1000);
		// set state display to inactive
		this.setState({
			tileDisplay: 'inactive'
		})
		// setTimeout() : call this.makeActive after RANDOM sec
		setTimeout(function() {this.makeActive();}, randomSeconds)
	},

	componentWillMount: function() {
		this.makeInactive();
	},

	render: function() {

		return (
			<td className={'tile ' + this.state.tileDisplay} onClick={this.onTileClick}></td>
		);
	}

});

var mapStateToProps = function(state, props) {
	return {
		// tile: state
	}
};

module.exports = connect(mapStateToProps)(Tile);