/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.routerReducer = routerReducer;
var LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

exports.LOCATION_CHANGE = LOCATION_CHANGE;
var initialState = {
  locationBeforeTransitions: null
};

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state it is discouraged.
 */

function routerReducer(state, _ref) {
  if (state === undefined) state = initialState;
  var type = _ref.type;
  var payload = _ref.payload;

  if (type === LOCATION_CHANGE) {
    return _extends({}, state, { locationBeforeTransitions: payload });
  }

  return state;
}