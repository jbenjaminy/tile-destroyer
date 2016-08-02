var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var Provider = require( '' ).Provider;

var store = require( './store' );
var actions = require( './actions' );
var GameContainer = require( './game-container' );

document.addEventListener( 'DOMContentLoaded', function() {
//  store.dispatch( actions.newGame() );
  ReactDOM.render(
    <Provider store={store}>
    <GameContainer/>
  </Provider>, document.getElementById( 'app' ) );
} );
