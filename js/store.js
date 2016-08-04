var redux = require('redux');
var reducers = require('./reducers');
var actions = require('./actions');
var thunk = require('redux-thunk').default;
var applyMiddleware = redux.applyMiddleware;

var createStore = redux.createStore;
var store = createStore(reducers, applyMiddleware(thunk),  window.devToolsExtension && window.devToolsExtension());

module.exports  = store;