// // Starts the game.

// var React = require( 'react' );
// var connect = require( 'react-redux' ).connect;
// var actions = require( './actions' );
// // DECIDE WHETHER OR NOT TO CONNECT TO PASS USER INPUT TO ACTIONS

// // Add event handler to start game
// var StartButton = React.createClass ({
//   //the NEW_GAME method should let button communicate up saying that it's been clicked
//   startNewGame: function() {

//     this.props.dispatch( actions.newGame() );
//     // //reset to initial state
//     // game.props.score=0;
//     // timer.props.count=15;
//     // // Lay new tiles
//   },

//     render: function() {
//       return (
//         <button type="button" onClick={this.startNewGame}>Play Game></button>
//       );
//     }
// });




// var Container = connect()(StartButton);

// module.exports = Container;