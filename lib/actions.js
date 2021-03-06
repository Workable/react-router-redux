/**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */
'use strict';

exports.__esModule = true;
var CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

exports.CALL_HISTORY_METHOD = CALL_HISTORY_METHOD;
function updateLocation(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      type: CALL_HISTORY_METHOD,
      payload: { method: method, args: args }
    };
  };
}

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
var push = updateLocation('push');
exports.push = push;
var replace = updateLocation('replace');
exports.replace = replace;
var go = updateLocation('go');
exports.go = go;
var goBack = updateLocation('goBack');
exports.goBack = goBack;
var goForward = updateLocation('goForward');

exports.goForward = goForward;
var routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };
exports.routerActions = routerActions;