var React = require('react');
var connect = require('react-redux').connect;
var actions = require( './actions' );

var Tile = React.createClass({

	getInitialState: function() {
		// set local initial state to inactive
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
			// sets tile to inactive once clicked
			this.makeInactive();
		};
	},

	makeActive: function() {
		var that = this;
		// set state display to active
		this.setState({
			tileDisplay: 'active'
		})
		// setTimeout() : call this.makeInactive after ~ 1 sec
		setTimeout(function() {that.makeInactive();}, 1000);
	},

	makeInactive: function() {
		// generates random number
		var randomSeconds = Math.ceil((Math.random() * 10 + 3) * 1000);
		// set state display to inactive
		this.setState({
			tileDisplay: 'inactive'
		})
		var that=this;
		// setTimeout() : call makeActive after a random amount of seconds
		setTimeout(function() {that.makeActive();}, randomSeconds)
	},

	componentWillMount: function() {
		this.makeInactive();
	},

	render: function() {
		console.log('inside of tile ');
		return (
			<li className={'tile ' + this.state.tileDisplay} onClick={this.onTileClick}></li>
		);
	}

});

var Container = connect()(Tile);

exports.Tile = Tile;
exports.Container = Container;