var React = require('react');
var connect = require('react-redux').connect;
var action = require('./actions');

 // TODO: send fetch dispatches and set after container to showAfterContainer()

var Timer = React.createClass({

// Change code below

  var timerDone = false;
  var time=15;
  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

  timeRemaining: function() {
    function timer() {
      time = time-1;
      console.log(count);

      if (time <= 0) {
        !timerDone;
        clearInterval(counter);
        console.log("Game over");
        return;
      }
    }


  },


  render: function() {
    return (
      <div>
        <p>Timer left: {this.timeDone}</p>
      </div>
    );
  }
});


//
// var mapStateToProps = function(state, props) {
//   return {
//     time: state.time
//   };
// };

var Container = connect(mapStateToProps)(Timer);
module.exports = Container;
