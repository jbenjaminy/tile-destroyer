var React = require('react');
var moment = require('moment');
var connect = require('react-redux').connect;
var action = require('./actions');

var Timer = React.createClass({
    onEndGame: function() {
        this.props.dispatch(actions.timerStop(this.props.state.timer));
        this.props.dispatch(actions.fetchAddScore(this.props.state.id, this.props.state.score));
        this.props.dispatch(actions.fetchGameHistory(this.props.state.username));
        this.props.dispatch(actions.fetchHighScore(this.props.state.username));
        this.props.dispatch(actions.showAfterContainer());
    },
    render: function() {
        var clock = '';
        if (this.props.state.timer === true) {
              var startTime = moment();
              var timer = setInterval(function() {
                  var currentTime = moment();
                  var difference = currentTime.diff(startTime)
                  clock = Math.round(difference/1000);
                  if (difference >= 1000) {
                      console.log(clock);
              }
          }, 1000);

          var timeout = setTimeout(function () {
                clearInterval(timer);
                onEndGame();
            }, 60000);
        }
        return (
            <p>{clock}</p>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        state: state
    };
};

var Container = connect(mapStateToProps)(Timer);
module.exports = Container;
