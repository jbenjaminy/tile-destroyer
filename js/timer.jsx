// Implement after MVP

var React = require( 'react' );

var Timer = React.createClass( {

//Count down timer
  var count=10;
  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

// Do not use timer countdown, calltime and render that instead.  You want to change state of timer.
  function timer() {
   count=count-1;
   if (count <= 0)
     {
        clearInterval(counter);
        //counterended, do something here
        console.log('Game over!')
        return;
     }

   //Do code for showing the number of seconds here
   //render: function() {
     return (
       <div>
         {count}
       </div>
     );
   }
  }


});

module.exports = Timer;