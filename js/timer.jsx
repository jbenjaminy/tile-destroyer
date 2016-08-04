
var React = require('react');
var connect = require('react-redux').connect;
var action = require('./actions');

 // TODO: send fetch dispatches and set after container to showAfterContainer()

var Timer = React.createClass({


timeDone: function() {
  this.props.dispatch(actions.fetchAddScore(this.state.props.id, this.props.state.score);
  this.props.dispatch(actions.fetchHighScore(this.state.props.userName);
  this.props.dispatch(actions.showAfterContainer());
}

// Change code below

//////////////////////
// In Reducers  //
//////////////////////

// Initialize states when the PLAY button is clicked (in Reducers)
// Initialize var startTime with actual current time (new Date())
//Initialize var stopTime with startTime + 60 seconds (or whatever the interval chosen for the game round)
//Initialize var currentTime with new Date()
//When PLAY is clicked, setInterval() is called, and updates currentTime state

// In reducer, set those 3 state props mentioned above, then start your timer
// to update currentTime and to check if time is up.  If time is up then stop timer.
/*

setInitialState({
  startTime: new Date(),
  stopTime: new Date(time.getTime() + 1 * 5000), //5 seconds or whatever default time
  currentTime: new Date(),
  isTimeUp: false
});

    // in reducer on PLAY button click,

var timer = setInterval(function() {
  this.state.props.currentTime = new Date();  //set state to currentTime
  if (currentTime.getTime() > stopTime.getTime()) {
    this.state.isTimeUp = true;
    clearInterval(timer);
  };
}, 1000);

*/

//////////////////////
// In the Component //
//////////////////////

/*
 if (!this.state.isTimeUp) {


 <div>
  <span>this.state.stopTime.getTime() - this.state.currentTime.getTime()</span>
 </div>
  } else {
    <div>Time is up</div>
  }
*/


// working timer code in jQuery -- refactor to JSX

// $("document").ready(function() {
//   $("button").click(function() {

    var time = new Date(); //set state startTime
    var later = new Date(time.getTime() + 1 * 5000); // set state to stopTime

    var timer = setInterval(function() {
      var currentTime = new Date(); //set state to currentTime
      if (currentTime.getTime() < later.getTime()) { //reducers check this state

        //currentTime - startTime = time remaining

        console.log(later.getTime() - currentTime.getTime());
      } else if {
        (this.props.state.currentTime.getTime() - this.props.state.startTimer === this.props.state.stopTime) {
          
          this.props.dispatch(actions.fetchAddScore(this.state.props.id, this.props.state.score);
          this.props.dispatch(actions.fetchHighScore(this.state.props.userName);
          this.props.dispatch(actions.showAfterContainer());
      }

      else {
        console.log("Time is up")
        clearInterval(timer);
      };
    }, 1000);
  });
})


var mapStateToProps = function(state, props) {
  return {
    state: state
  };
};

var Container = connect(mapStateToProps)(Timer);
module.exports = Container;
