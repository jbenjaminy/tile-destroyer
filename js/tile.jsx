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
		if( this.state.tileDisplay === 'active') {
			this.props.dispatch(actions.incrementScore());
			this.setState({
				tileDisplay: 'inactive'
			})
		} else {
			this.props.dispatch(actions.decrementScore());
		};
	},

	tileTimer: function() {
		var that = this;
		setTimeout(function() {that.setState({ tileDisplay: null });}, 20000);
	},

	makeActive: function() {
		if (this.state.tileDisplay !== null) {
			var that = this;
			this.setState({
				tileDisplay: 'active'
			})
			setTimeout(function() {that.makeInactive();}, 1300);
		}
	},

	makeInactive: function() {
		if (this.state.tileDisplay !== null) {
			var randomSeconds = Math.ceil((Math.random() * 10 + 3) * 1000);
			this.setState({
				tileDisplay: 'inactive'
			})
			var that=this;
			setTimeout(function() {that.makeActive();}, randomSeconds)
		}
	},

	componentWillMount: function() {
		this.makeInactive();
		this.tileTimer();
	},

	componentWillUnmount: function() {

	},

	render: function() {
		return (
			<li className={'tile ' + this.state.tileDisplay} onClick={this.onTileClick} id="box"></li>
		);
	}

});

var Container = connect()(Tile);

exports.Tile = Tile;
exports.Container = Container;
