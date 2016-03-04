'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _sync = require('./sync');

var _sync2 = _interopRequireDefault(_sync);

exports.syncHistoryWithStore = _sync2['default'];

var _reducer = require('./reducer');

exports.LOCATION_CHANGE = _reducer.LOCATION_CHANGE;
exports.routerReducer = _reducer.routerReducer;

var _actions = require('./actions');

exports.CALL_HISTORY_METHOD = _actions.CALL_HISTORY_METHOD;
exports.push = _actions.push;
exports.replace = _actions.replace;
exports.go = _actions.go;
exports.goBack = _actions.goBack;
exports.goForward = _actions.goForward;
exports.routerActions = _actions.routerActions;

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

exports.routerMiddleware = _middleware2['default'];