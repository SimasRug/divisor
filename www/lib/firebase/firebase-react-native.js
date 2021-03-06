/*! @license Firebase v3.8.0
Build: rev-69367dd
Terms: https://firebase.google.com/terms/ */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var firebase = require('./app');
require('./auth');
var Storage, XMLHttpRequest;

require('./database');
require('./storage');

var AsyncStorage = require('react-native').AsyncStorage;
firebase.INTERNAL.extendNamespace({
    'INTERNAL': {
        'reactNative': {
            'AsyncStorage': AsyncStorage
        }
    }
});

exports.default = firebase;
module.exports = exports['default'];
//# sourceMappingURL=firebase.js.map
