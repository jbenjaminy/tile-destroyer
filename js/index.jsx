var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var Provider = require( 'react-redux' ).Provider;
var store = require( './store' );
var actions = require( './actions' );
var GameContainer = require( './game-container' );

document.addEventListener( 'DOMContentLoaded', function() {
  // Dispatches action to show BeforeContainer (username/Play Game display)
 store.dispatch(actions.showBeforeContainer());
//  store.dispatch(actions.newGame());
  // store.dispatch(actions.fetchGameHistory('Jon'));
  ReactDOM.render(
      <Provider store={store}>
          <GameContainer />
      </Provider>, document.getElementById( 'app' ) );
} );
