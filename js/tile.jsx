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

	tileTimer: function() {
		var that = this;
		setTimeout(function() {that.setState({ tileDisplay: null }); console.log('In Timeout new state >', that.state.tileDisplay);}, 10000); 
	},

	makeActive: function() {
		var that = this;
		// set state display to active
		this.setState({
			tileDisplay: 'active'
		})
		// setTimeout() : call this.makeInactive after ~ 1 sec
		if (this.state.tileDisplay !== null) {
			setTimeout(function() {that.makeInactive();}, 1300);
		}
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
		if (this.state.tileDisplay !== null) {
			setTimeout(function() {that.makeActive();}, randomSeconds)
		}
	},

	componentWillMount: function() {
		this.makeInactive();
		this.tileTimer();
	},

	componentWillUnmount: function() {
		console.log('Will Unmount state >', this.state.tileDisplay);
	},

	render: function() {
		console.log('renderer tile state >', this.state.tileDisplay);
		return (
			<li className={'tile ' + this.state.tileDisplay} onClick={this.onTileClick} id="box"></li>
		);
	}

});

var Container = connect()(Tile);

exports.Tile = Tile;
exports.Container = Container;