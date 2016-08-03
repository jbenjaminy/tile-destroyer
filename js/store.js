var redux = require('redux');
var thunk = require('redux-thunk').default;
var reducers = require('./reducers').reducer;
var applyMiddleware = redux.applyMiddleware;

var createStore = redux.createStore;
var store = createStore(reducers, applyMiddleware(thunk),  window.devToolsExtension && window.devToolsExtension());

module.exports  = store;