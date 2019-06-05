import React, { useState, useLayoutEffect, useContext, useMemo, useRef, useEffect, Component } from 'react';
import { EventEmitter } from 'events';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var FormRegisterContext = React.createContext({
  register: function register() {},
  deregister: function deregister() {},
  setValue: function setValue() {},
  setTouched: function setTouched() {},
  setError: function setError() {},
  update: function update() {},
  getField: function getField() {}
});
var FormStateContext = React.createContext({});
var FormApiContext = React.createContext({
  getFullField: function getFullField() {},
  getValues: function getValues() {}
});
var GroupContext = React.createContext();
var SelectContext = React.createContext();

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var debug = createCommonjsModule(function (module) {
/**
 * 
 * I stole most of this code from the debug lib
 * https://github.com/visionmedia/debug
 * 
 * Just wanted it to be easy to debug without relying on the dependency!
 */

/**
	* Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @param {String} colors color pallette to choose from
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
function selectColor(namespace, colors) {
  var hash = 0;

  for (var i = 0; i < namespace.length; i++) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return colors[Math.abs(hash) % colors.length];
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */


function formatNodeArgs(args, config) {
  var name = config.namespace;

  if (config.useColors) {
    var c = config.color;
    var colorCode = "\x1B[3" + (c < 8 ? c : '8;5;' + c);
    var prefix = "  ".concat(colorCode, ";1m").concat(name, " \x1B[0m");
    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
  } else {
    args[0] = name + ' ' + args[0];
  }
}
/**
 * Colorize log arguments if enabled.
 *
 */


function formatBrowserArgs(args, config) {
  args[0] = (config.useColors ? '%c' : '') + config.namespace;

  if (!config.useColors) {
    return;
  }

  var c = 'color: ' + config.color; // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}

var browserColors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Load `namespaces`.
 *
 * @return {String} returns the debug modes
 * @api private
 */

function loadBrowser() {
  var namespaces;

  try {
    namespaces = localStorage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!namespaces && typeof process !== 'undefined' && 'env' in process) {
    namespaces = process.env.DEBUG;
  }

  return {
    namespaces: namespaces || '',
    colors: browserColors,
    useColors: true,
    formatArgs: formatBrowserArgs
  };
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the debug modes
 * @api private
 */


function loadNode() {
  return {
    namespaces: process.env.DEBUG || '',
    colors: [6, 2, 3, 4, 5, 1],
    useColors: true,
    formatArgs: formatNodeArgs
  };
}

function createLogger() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var config = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (prefix) {
      args.unshift(prefix);
    } // Create a namespace regex for each namespace


    var matches = config.namespaces.split(',').map(function (namespace) {
      // Remove wildcard and add to regex if wildcard
      if (namespace[namespace.length - 1] === '*') {
        return new RegExp('^' + namespace.slice(0, namespace.length - 1) + '.*' + '$');
      }

      return new RegExp('^' + namespace + '$');
    }); // Does the prefix match a namespace

    var match = matches.some(function (regex) {
      return regex.test(prefix);
    });
    var conf = {
      color: selectColor(prefix, config.colors),
      namespace: prefix,
      useColors: config.useColors
    };

    if (process.env.NODE_ENV !== 'production' && match) {
      var _console;

      config.formatArgs(args, conf);

      (_console = console).log.apply(_console, args);
    }
  };
}

function nodeLogger(prefix) {
  return createLogger(prefix, loadNode());
}

function browserLogger(prefix) {
  return createLogger(prefix, loadBrowser());
}
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */


if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
  module.exports = browserLogger;
} else {
  module.exports = nodeLogger;
}
});

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$1 = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : _baseSet(object, path, value, customizer);
}

var setWith_1 = setWith;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}

var _baseUnset = baseUnset;

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : _baseUnset(object, path);
}

var unset_1 = unset;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray_1(value)) {
    return _arrayMap(value, _toKey);
  }
  return isSymbol_1(value) ? [value] : _copyArray(_stringToPath(toString_1(value)));
}

var toPath_1 = toPath;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty$5.call(object, key);
}

var _baseHas = baseHas;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$6.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}

var has_1 = has;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return _arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

/**
 * The base implementation of `_.at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  var index = -1,
      length = paths.length,
      result = Array(length),
      skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get_1(object, paths[index]);
  }
  return result;
}

var _baseAt = baseAt;

/** Used for built-in method references. */
var arrayProto$1 = Array.prototype;

/** Built-in value references. */
var splice$1 = arrayProto$1.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (_isIndex(index)) {
        splice$1.call(array, index, 1);
      } else {
        _baseUnset(array, index);
      }
    }
  }
  return array;
}

var _basePullAt = basePullAt;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol_1(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol_1(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
  return _defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 *
 * **Note:** Unlike `_.at`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = ['a', 'b', 'c', 'd'];
 * var pulled = _.pullAt(array, [1, 3]);
 *
 * console.log(array);
 * // => ['a', 'c']
 *
 * console.log(pulled);
 * // => ['b', 'd']
 */
var pullAt = _flatRest(function(array, indexes) {
  var length = array == null ? 0 : array.length,
      result = _baseAt(array, indexes);

  _basePullAt(array, _arrayMap(indexes, function(index) {
    return _isIndex(index, length) ? +index : index;
  }).sort(_compareAscending));

  return result;
});

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

var _baseIndexOfWith = baseIndexOfWith;

/** Used for built-in method references. */
var arrayProto$2 = Array.prototype;

/** Built-in value references. */
var splice$2 = arrayProto$2.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? _baseIndexOfWith : _baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = _copyArray(values);
  }
  if (iteratee) {
    seen = _arrayMap(array, _baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice$2.call(seen, fromIndex, 1);
      }
      splice$2.call(array, fromIndex, 1);
    }
  }
  return array;
}

var _basePullAll = basePullAll;

/**
 * This method is like `_.pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `_.difference`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array && array.length && values && values.length)
    ? _basePullAll(array, values)
    : array;
}

var pullAll_1 = pullAll;

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
 * to remove elements from an array by predicate.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */
var pull = _baseRest(pullAll_1);

var pull_1 = pull;

var debug$1 = debug('informed:ObjMap' + '\t');

var pathToArrayElem = function pathToArrayElem(path) {
  var pathArray = toPath_1(path);
  return Number.isInteger(+pathArray[pathArray.length - 1]);
};

var ObjectMap =
/*#__PURE__*/
function () {
  function ObjectMap() {
    _classCallCheck(this, ObjectMap);
  }

  _createClass(ObjectMap, null, [{
    key: "empty",
    value: function empty(object) {
      return values_1(object).length === 0;
    }
  }, {
    key: "get",
    value: function get(object, path) {
      return get_1(object, path);
    }
  }, {
    key: "has",
    value: function has(object, path) {
      return has_1(object, path);
    }
  }, {
    key: "set",
    value: function set(object, path, value) {
      if (value !== undefined) {
        setWith_1(object, path, value);
      } else {
        // Setting things to undefined in informed is special!
        // so in this else statement we deal with that
        // If the path is to an array leaf then we want to set to undefined
        // Example: 
        // path = 'foo.bar[2]'
        // foo.bar = [ 'baz', 'raz', 'taz' ]
        // setting taz to undefined   ^^^
        if (pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined) {
          setWith_1(object, path, undefined);
          var pathArray = toPath_1(path);
          pathArray = pathArray.slice(0, pathArray.length - 1);
          cleanup(object, pathArray, false);
        } // Only delete the field if it needs to be deleted and its not a path to an array ( array leaf )
        // Example: 
        // path = 'foo.bar'
        // foo.bar = 'baz'
        // removing foo.bar from the object completley
        else if (!pathToArrayElem(path) && ObjectMap.get(object, path) !== undefined) ObjectMap.delete(object, path);
      }
    }
  }, {
    key: "delete",
    value: function _delete(object, path) {
      debug$1('DELETE', path);
      unset_1(object, path);
      var pathArray = toPath_1(path);
      pathArray = pathArray.slice(0, pathArray.length - 1);
      cleanup(object, pathArray);
    } // May need to do this some day ;)
    // static pullOut(object, path, index) {
    //   // Get the path to the array
    //   let pathArray = ldtoPath(path);
    //   pathArray = pathArray.slice(0, pathArray.length - 1).join();
    //   debug('PathArray', pathArray);
    //   // Get the array
    //   const arr = ldget(object, pathArray);
    //   debug('Array', arr);
    //   // Pull out of array
    //   ldpullAt(arr, index);
    // }

  }]);

  return ObjectMap;
}();

function cleanup(obj, path) {
  var pull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // Base case no path left
  if (path.length === 0) {
    return;
  }

  var object = get_1(obj, path); // Clean up undefined from array

  if (Array.isArray(object) && pull) {
    pull_1(object, undefined);
  } // Delete object if its empty


  if (Array.isArray(object) ? object.every(function (e) {
    return e == null;
  }) : JSON.stringify(object) === '{}') {
    unset_1(obj, path);
  } // Recur


  cleanup(obj, path.slice(0, path.length - 1));
}

var debug$2 = debug('informed:Controller' + '\t');

var FormController =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(FormController, _EventEmitter);

  function FormController() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FormController);

    // Dont forget to call super! :)
    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormController).call(this));
    _this.options = options; // Map will store all fields
    // Key => fieldName - example: "foo.bar[3].baz"
    // Val => { field, fieldApi }
    // Why? so the form can control the fields!

    _this.fields = new Map(); // Map to store if the field was once registered

    _this.registered = {}; // Initialize the controller state

    _this.state = {
      values: {},
      touched: {},
      errors: {},
      pristine: true,
      dirty: false,
      invalid: false,
      submits: 0
    }; // Bind functions that will be called externally
    //this.update = this.update.bind(this);

    _this.deregister = _this.deregister.bind(_assertThisInitialized(_this));
    _this.register = _this.register.bind(_assertThisInitialized(_this));
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    _this.setTouched = _this.setTouched.bind(_assertThisInitialized(_this));
    _this.setError = _this.setError.bind(_assertThisInitialized(_this));
    _this.setFormError = _this.setFormError.bind(_assertThisInitialized(_this));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.validate = _this.validate.bind(_assertThisInitialized(_this));
    _this.keyDown = _this.keyDown.bind(_assertThisInitialized(_this));
    _this.getField = _this.getField.bind(_assertThisInitialized(_this)); // Updater will be used by fields to update and register

    _this.updater = {
      register: _this.register,
      deregister: _this.deregister,
      setValue: _this.setValue,
      setTouched: _this.setTouched,
      setError: _this.setError,
      update: _this.update,
      getField: _this.getField
    };
    return _this;
  } // Generate the external form state that will be exposed to the users


  _createClass(FormController, [{
    key: "getFormState",
    value: function getFormState() {
      return _objectSpread({}, this.state, {
        pristine: this.pristine(),
        dirty: this.dirty(),
        invalid: this.invalid()
      });
    } // Generate the external form api that will be exposed to the users

  }, {
    key: "getFormApi",
    value: function getFormApi() {
      var _this2 = this;

      var setValue = function setValue(field, value) {
        return _this2.fields.get(field).fieldApi.setValue(value, null, {
          allowEmptyString: _this2.options.allowEmptyStrings
        });
      };

      var setTouched = function setTouched(field, value) {
        return _this2.fields.get(field).fieldApi.setTouched(value);
      };

      var setError = function setError(field, value) {
        return _this2.fields.get(field).fieldApi.setError(value);
      };

      var setFormError = function setFormError(error) {
        return _this2.setFormError(error);
      };

      var setValues = function setValues(values) {
        return _this2.setValues(values);
      };

      var getValue = function getValue(field) {
        return _this2.getValue(field);
      };

      var getTouched = function getTouched(field) {
        return _this2.getTouched(field);
      };

      var getError = function getError(field) {
        return _this2.getError(field);
      };

      var reset = function reset() {
        return _this2.reset();
      };

      var submitForm = function submitForm(e) {
        return _this2.submitForm(e);
      };

      var getState = function getState() {
        return _this2.getFormState();
      };

      var getValues = function getValues() {
        return _this2.getFormState().values;
      };

      var getFullField = function getFullField(field) {
        return _this2.getFullField(field);
      };

      var fieldExists = function fieldExists(field) {
        return _this2.fields.get(field) != null;
      };

      var getInitialValue = function getInitialValue(field) {
        return _this2.getInitialValue(field);
      };

      var validate = function validate() {
        return _this2.validate();
      };

      var validateField = function validateField(field) {
        return _this2.fields.get(field).fieldApi.validate();
      };

      var resetField = function resetField(field) {
        return _this2.fields.get(field).fieldApi.reset();
      };

      return {
        setValue: setValue,
        setTouched: setTouched,
        setError: setError,
        setValues: setValues,
        getValue: getValue,
        getTouched: getTouched,
        getError: getError,
        reset: reset,
        submitForm: submitForm,
        getState: getState,
        getValues: getValues,
        getFullField: getFullField,
        fieldExists: fieldExists,
        getInitialValue: getInitialValue,
        setFormError: setFormError,
        validate: validate,
        validateField: validateField,
        resetField: resetField
      };
    }
    /* ------------------- Internal Methods ------------------- */

  }, {
    key: "setValue",
    value: function setValue(field, value) {
      var notify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      debug$2("Setting ".concat(field, " to ").concat(value)); // Set the new value

      ObjectMap.set(this.state.values, field, value); // The forms values have changed so we want to clear form level error

      delete this.state.error; // Emit change events

      this.emit('change');
      this.emit('value'); // Notify other fields 

      if (notify) this.notify(field);
    }
  }, {
    key: "setTouched",
    value: function setTouched(field, value) {
      ObjectMap.set(this.state.touched, field, value);
      this.emit('change');
    }
  }, {
    key: "setError",
    value: function setError(field, value) {
      ObjectMap.set(this.state.errors, field, value);
      this.emit('change');
    }
  }, {
    key: "setFormError",
    value: function setFormError(value) {
      this.state.error = value;
      this.emit('change');
    } // Notify other fields 

  }, {
    key: "notify",
    value: function notify(field) {
      var _this3 = this;

      // Get the notifier
      var notifier = this.fields.get(field); // If we have a list we must notify each one

      if (notifier.notify) {
        notifier.notify.forEach(function (fieldName) {
          // Get the field toNotify
          var toNotify = _this3.fields.get(fieldName);

          if (toNotify) {
            debug$2('Notifying', toNotify.field);

            var value = _this3.getValue(toNotify.field);

            toNotify.fieldApi.validate(value);
          }
        });
      }
    }
  }, {
    key: "getValue",
    value: function getValue(field) {
      return ObjectMap.get(this.state.values, field);
    }
  }, {
    key: "getTouched",
    value: function getTouched(field) {
      return ObjectMap.get(this.state.touched, field);
    }
  }, {
    key: "getError",
    value: function getError(field) {
      return ObjectMap.get(this.state.errors, field);
    }
  }, {
    key: "getFullField",
    value: function getFullField(field) {
      return field;
    }
  }, {
    key: "valid",
    value: function valid() {
      return !!(ObjectMap.empty(this.state.errors) && !this.state.error);
    }
  }, {
    key: "invalid",
    value: function invalid() {
      return !!(!ObjectMap.empty(this.state.errors) || this.state.error);
    }
  }, {
    key: "pristine",
    value: function pristine() {
      return ObjectMap.empty(this.state.touched) && ObjectMap.empty(this.state.values);
    }
  }, {
    key: "dirty",
    value: function dirty() {
      return !this.pristine();
    }
  }, {
    key: "getInitialValue",
    value: function getInitialValue(field) {
      return ObjectMap.get(this.options.initialValues, field);
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this4 = this;

      debug$2('Resetting'); // So we because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and reset them. Not a big deal but very important to remember that you cant simply
      // reset this controllers state!

      this.fields.forEach(function (field) {
        field.fieldApi.reset(); // Initialize the values if it needs to be

        var initialValue = ObjectMap.get(_this4.options.initialValues, field.field);

        if (initialValue !== undefined) {
          _this4.getFormApi().setValue(field.field, initialValue);
        }
      });
      this.emit('change');
    }
  }, {
    key: "setValues",
    value: function setValues(values) {
      var _this5 = this;

      debug$2('Setting values'); // So we because all fields controll themselves and, "inform", this controller
      // of their changes, we need to literally itterate through all registered fields
      // and set them. Not a big deal but very important to remember that you cant simply
      // set this controllers state!

      this.fields.forEach(function (field) {
        // Initialize the values if it needs to be
        var value = ObjectMap.get(values, field.field);

        if (value !== undefined) {
          _this5.getFormApi().setValue(field.field, value);
        }
      });
      this.emit('change');
    }
  }, {
    key: "validate",
    value: function validate() {
      var _this6 = this;

      // Itterate through and call validate on every field
      this.fields.forEach(function (field, key) {
        var value = _this6.getValue(key);

        field.fieldApi.validate(value);
        field.fieldApi.setTouched(true);
      }); // Call the form level validation if its present

      if (this.options.validate) {
        var res = this.options.validate(this.state.values);
        this.setFormError(res);
      } // Call the forms field level validation


      if (this.options.validateFields) {
        var errors = this.options.validateFields(this.state.values); // So we because all fields controll themselves and, "inform", this controller
        // of their changes, we need to literally itterate through all registered fields
        // and set them. Not a big deal but very important to remember that you cant simply
        // set this controllers state!

        this.fields.forEach(function (field) {
          // Check to see if there is an error to set 
          // Note: we use has becuause value may be there but undefined
          if (ObjectMap.has(errors, field.field)) {
            var error = ObjectMap.get(errors, field.field); // If there is an error then set it

            _this6.getFormApi().setError(field.field, error);
          }
        });
      }
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      // If preventEnter then return
      if (e.keyCode == 13 && this.options.preventEnter) {
        e.preventDefault(e);
        return false;
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      // Incriment number of submit attempts
      this.state.submits = this.state.submits + 1;

      if (!this.options.dontPreventDefault && e) {
        // Prevent default browser form submission
        e.preventDefault(e);
      } // Validate the form


      this.validate(); // Emit a change 

      this.emit('change'); // Check validity and perform submission if valid

      if (this.valid()) {
        debug$2('Submit', this.state);
        this.emit('submit');
      } else {
        debug$2('Submit', this.state);
        this.emit('failure');
      }
    }
    /* ---------------- Updater Functions (used by fields) ---------------- */

  }, {
    key: "register",
    value: function register(field, fieldState, fieldStuff) {
      debug$2('Register', field, fieldState); // Determine if the field has been registered before

      var registered = this.registered[field]; // Set registered flag

      this.registered[field] = true; // Always register the field

      this.fields.set(field, fieldStuff); // Initialize state
      // When a user had keep state load existing values

      if (fieldStuff.keepState) {
        var value = ObjectMap.get(this.state.values, field);
        var initialValue = ObjectMap.get(this.options.initialValues, field); // If we have a defined value then set that

        if (value !== undefined) {
          this.getFormApi().setValue(field, value || fieldState.value);
        } // Otherwise we want to use the initial value 
        else if (initialValue !== undefined) {
            this.getFormApi().setValue(field, initialValue);
          } else {
            // Otherwise set the value to whatever the field is set to ( might have been field level initial value )
            this.setValue(field, fieldState.value, false);
          } // Finnally we set touched


        var touched = ObjectMap.get(this.state.touched, field);
        this.getFormApi().setTouched(field, touched); // Error will get set by validator implicitly so we dont need to remember that
      } else {
        // Initialize the values if it needs to be
        var _initialValue = ObjectMap.get(this.options.initialValues, field);

        if (_initialValue !== undefined && !registered) {
          this.getFormApi().setValue(field, _initialValue);
        } else {
          // Otherwise set the value to whatever the field is set to ( might have been field level initial value )
          this.setValue(field, fieldState.value, false);
        }

        this.setTouched(field, fieldState.touched);
      }

      this.setError(field, fieldState.error);
    }
  }, {
    key: "deregister",
    value: function deregister(field) {
      debug$2('Deregister', field);
      var field2remove = this.fields.get(field);

      if (!field2remove.keepState) {
        // Remove the data!
        ObjectMap.delete(this.state.values, field);
        ObjectMap.delete(this.state.touched, field);
        ObjectMap.delete(this.state.errors, field);
      } // Always need to delete the field


      this.fields.delete(field);
      this.emit('change');
    }
  }, {
    key: "update",
    value: function update(field, fieldStuff) {
      debug$2('Update', field);
      this.fields.set(field, fieldStuff);
    }
  }, {
    key: "getField",
    value: function getField(field) {
      debug$2('Getting Field', field);
      return this.fields.get(field);
    }
  }]);

  return FormController;
}(EventEmitter);

var debug$3 = debug('informed:useForm' + '\t\t');

var useForm = function useForm(_ref) {
  var dontPreventDefault = _ref.dontPreventDefault,
      initialValues = _ref.initialValues,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      allowEmptyStrings = _ref.allowEmptyStrings,
      preventEnter = _ref.preventEnter,
      getApi = _ref.getApi,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      onValueChange = _ref.onValueChange,
      onSubmitFailure = _ref.onSubmitFailure;
  debug$3('Render useForm'); // Create form controller

  var _useState = useState(new FormController({
    dontPreventDefault: dontPreventDefault,
    initialValues: initialValues,
    validate: validate,
    validateFields: validateFields,
    allowEmptyStrings: allowEmptyStrings,
    preventEnter: preventEnter
  })),
      _useState2 = _slicedToArray(_useState, 1),
      formController = _useState2[0]; // Form state will be used to trigger rerenders


  var _useState3 = useState(formController.getFormState()),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1]; // Register for events


  useLayoutEffect(function () {
    var onChangeHandler = function onChangeHandler() {
      return onChange && onChange(formController.getFormState());
    };

    var onSubmitHandler = function onSubmitHandler() {
      return onSubmit && onSubmit(formController.getFormState().values);
    };

    var onValueHandler = function onValueHandler() {
      return onValueChange && onValueChange(formController.getFormState().values);
    };

    var onFailureHandler = function onFailureHandler() {
      return onSubmitFailure && onSubmitFailure(formController.getFormState().errors);
    }; // Register for events


    formController.on('change', onChangeHandler);
    formController.on('submit', onSubmitHandler);
    formController.on('value', onValueHandler);
    formController.on('failure', onFailureHandler); // Unregister events

    return function () {
      formController.removeListener('change', onChangeHandler);
      formController.removeListener('submit', onSubmitHandler);
      formController.removeListener('value', onValueHandler);
      formController.removeListener('failure', onFailureHandler);
    };
  }, [onChange, onSubmit, onValueChange, onSubmitFailure]); // Initialize code like constructor but not muhahah

  useState(function () {
    // Update the form state to trigger rerender!
    var onChangeHandlerRerender = function onChangeHandlerRerender() {
      return setFormState(formController.getFormState());
    };

    formController.on('change', onChangeHandlerRerender); // Give access to api outside

    if (getApi) {
      getApi(formController.getFormApi());
    }
  }); // We dont want this to happen on every render so thats why useState is used here

  var _useState5 = useState(formController.getFormApi()),
      _useState6 = _slicedToArray(_useState5, 1),
      formApi = _useState6[0];

  return {
    formApi: formApi,
    formState: formState,
    formController: formController
  };
};

var debug$4 = debug('informed:Form' + '\t\t');

var Form = function Form(_ref) {
  var children = _ref.children,
      getApi = _ref.getApi,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      onValueChange = _ref.onValueChange,
      initialValues = _ref.initialValues,
      onSubmitFailure = _ref.onSubmitFailure,
      render = _ref.render,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      component = _ref.component,
      preventEnter = _ref.preventEnter,
      dontPreventDefault = _ref.dontPreventDefault,
      allowEmptyStrings = _ref.allowEmptyStrings,
      rest = _objectWithoutProperties(_ref, ["children", "getApi", "onChange", "onSubmit", "onValueChange", "initialValues", "onSubmitFailure", "render", "validate", "validateFields", "component", "preventEnter", "dontPreventDefault", "allowEmptyStrings"]);

  debug$4('Render FORM');

  var _useForm = useForm({
    dontPreventDefault: dontPreventDefault,
    initialValues: initialValues,
    validate: validate,
    validateFields: validateFields,
    allowEmptyStrings: allowEmptyStrings,
    preventEnter: preventEnter,
    getApi: getApi,
    onChange: onChange,
    onSubmit: onSubmit,
    onValueChange: onValueChange,
    onSubmitFailure: onSubmitFailure
  }),
      formApi = _useForm.formApi,
      formController = _useForm.formController,
      formState = _useForm.formState;

  var getContent = function getContent() {
    var props = {
      formState: formState,
      formApi: formApi
    };

    if (component) {
      return React.createElement(component, props, children);
    }

    if (render) {
      return render(props);
    }

    if (typeof children === 'function') {
      return children(props);
    }

    return children;
  };
  /* --- Create Provider and render Content --- */


  return React.createElement(FormRegisterContext.Provider, {
    value: formController.updater
  }, React.createElement(FormApiContext.Provider, {
    value: formApi
  }, React.createElement(FormStateContext.Provider, {
    value: formState
  }, React.createElement("form", _extends({}, rest, {
    onReset: formController.reset,
    onSubmit: formController.submitForm,
    onKeyDown: formController.keyDown
  }), getContent()))));
};

function useFormApi() {
  var formApi = useContext(FormApiContext);
  return formApi;
}

function useFormState() {
  var formState = useContext(FormStateContext);
  return formState;
}

var buildScopedFormApi = function buildScopedFormApi(scope, formApi) {
  return _objectSpread({}, formApi, {
    getValue: function getValue(field) {
      return formApi.getValue("".concat(scope, ".").concat(field));
    },
    getTouched: function getTouched(field) {
      return formApi.getTouched("".concat(scope, ".").concat(field));
    },
    getError: function getError(field) {
      return formApi.getError("".concat(scope, ".").concat(field));
    },
    setValue: function setValue(field, value) {
      return formApi.setValue("".concat(scope, ".").concat(field), value);
    },
    setTouched: function setTouched(field, value) {
      return formApi.setTouched("".concat(scope, ".").concat(field), value);
    },
    setError: function setError(field, value) {
      return formApi.setError("".concat(scope, ".").concat(field), value);
    },
    getFullField: function getFullField(field) {
      return "".concat(formApi.getFullField(scope), ".").concat(field);
    }
  });
};

var buildScopedRegister = function buildScopedRegister(scope, formRegister) {
  var _register = formRegister.register,
      _deregister = formRegister.deregister,
      _setValue = formRegister.setValue,
      _setTouched = formRegister.setTouched,
      _setError = formRegister.setError,
      _update = formRegister.update,
      _getField = formRegister.getField;
  return {
    register: function register(field) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return _register.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    deregister: function deregister(field) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return _deregister.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    update: function update(field) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return _update.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    setValue: function setValue(field) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return _setValue.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    setTouched: function setTouched(field) {
      for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      return _setTouched.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    setError: function setError(field) {
      for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        args[_key6 - 1] = arguments[_key6];
      }

      return _setError.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    },
    getField: function getField(field) {
      for (var _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        args[_key7 - 1] = arguments[_key7];
      }

      return _getField.apply(void 0, ["".concat(scope, ".").concat(field)].concat(args));
    }
  };
};

var Scope = function Scope(_ref) {
  var scope = _ref.scope,
      children = _ref.children;
  var formRegister = useContext(FormRegisterContext);
  var formApi = useFormApi();
  var formState = useFormState(); // VERY important to memoize the builders!

  var scopedFormApi = useMemo(function () {
    return buildScopedFormApi(scope, formApi);
  }, [scope]);
  var scopedRegister = useMemo(function () {
    return buildScopedRegister(scope, formRegister);
  }, [scope]);
  return React.createElement(FormRegisterContext.Provider, {
    value: scopedRegister
  }, React.createElement(FormApiContext.Provider, {
    value: scopedFormApi
  }, React.createElement(FormStateContext.Provider, {
    value: formState
  }, children)));
};

var uuidv4 = function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

var ArrayField = function ArrayField(_ref) {
  var field = _ref.field,
      children = _ref.children,
      initialValue = _ref.initialValue;
  var formApi = useFormApi();
  var initialVals = formApi.getInitialValue(field) || initialValue || []; // TODO throw error if initial value and its not array

  var _useState = useState(initialVals),
      _useState2 = _slicedToArray(_useState, 2),
      initialValues = _useState2[0],
      setInitialValues = _useState2[1];

  var initialKeys = initialValues ? initialValues.map(function () {
    return uuidv4();
  }) : [];

  var _useState3 = useState(initialKeys),
      _useState4 = _slicedToArray(_useState3, 2),
      keys = _useState4[0],
      setKeys = _useState4[1];

  var _remove = function remove(i) {
    var newKeys = keys.slice(0, i).concat(keys.slice(i + 1, keys.length));
    setKeys(newKeys);
    var newInitialValues = initialValues.slice(0, i).concat(initialValues.slice(i + 1, initialValues.length));
    setInitialValues(newInitialValues);
  };

  var add = function add() {
    keys.push(uuidv4());
    setKeys(_toConsumableArray(keys));
  };

  var addWithInitialValue = function addWithInitialValue(initialValue) {
    keys.push(uuidv4());
    setKeys(_toConsumableArray(keys));
    setInitialValues(initialValues.concat([initialValue]));
  };

  var fields = keys.map(function (key, i) {
    return {
      key: key,
      field: "".concat(field, "[").concat(i, "]"),
      remove: function remove() {
        return _remove(i);
      },
      initialValue: initialValues && initialValues[i]
    };
  });
  return children({
    fields: fields,
    add: add,
    addWithInitialValue: addWithInitialValue
  });
};

var debug$5 = debug('informed:FormProvider' + '\t\t');

var FormProvider = function FormProvider(_ref) {
  var children = _ref.children,
      getApi = _ref.getApi,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit,
      onValueChange = _ref.onValueChange,
      initialValues = _ref.initialValues,
      onSubmitFailure = _ref.onSubmitFailure,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      preventEnter = _ref.preventEnter,
      dontPreventDefault = _ref.dontPreventDefault,
      allowEmptyStrings = _ref.allowEmptyStrings,
      rest = _objectWithoutProperties(_ref, ["children", "getApi", "onChange", "onSubmit", "onValueChange", "initialValues", "onSubmitFailure", "validate", "validateFields", "preventEnter", "dontPreventDefault", "allowEmptyStrings"]);

  debug$5('Render FormProvider');

  var _useForm = useForm({
    dontPreventDefault: dontPreventDefault,
    initialValues: initialValues,
    validate: validate,
    validateFields: validateFields,
    allowEmptyStrings: allowEmptyStrings,
    preventEnter: preventEnter,
    getApi: getApi,
    onChange: onChange,
    onSubmit: onSubmit,
    onValueChange: onValueChange,
    onSubmitFailure: onSubmitFailure
  }),
      formApi = _useForm.formApi,
      formController = _useForm.formController,
      formState = _useForm.formState;
  /* --- Create Provider and render Content --- */


  return React.createElement(FormRegisterContext.Provider, {
    value: formController.updater
  }, React.createElement(FormApiContext.Provider, {
    value: formApi
  }, React.createElement(FormStateContext.Provider, {
    value: formState
  }, React.createElement("form", _extends({}, rest, {
    onReset: formController.reset,
    onSubmit: formController.submitForm,
    onKeyDown: formController.keyDown
  }), children))));
};

var withFormApi = function withFormApi(Component$$1) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(FormApiContext.Consumer, null, function (formApi) {
      return React.createElement(Component$$1, _extends({
        formApi: formApi,
        ref: ref
      }, props));
    });
  });
};

var withFormState = function withFormState(Component$$1) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(FormStateContext.Consumer, null, function (formState) {
      return React.createElement(Component$$1, _extends({
        formState: formState,
        ref: ref
      }, props));
    });
  });
};

var buildFieldApi = function buildFieldApi(formApi, field) {
  return {
    // TODO refactor to use field api from updater.. need to make sure this 
    // will be stable
    getValue: function getValue() {
      return formApi.getValue(field);
    },
    setValue: function setValue(value) {
      return formApi.setValue(field, value);
    },
    getTouched: function getTouched() {
      return formApi.getTouched(field);
    },
    setTouched: function setTouched(value) {
      return formApi.setTouched(field, value);
    },
    getError: function getError() {
      return formApi.getError(field);
    },
    setError: function setError(value) {
      return formApi.setError(field, value);
    },
    reset: function reset() {
      return formApi.resetField(field);
    },
    validate: function validate() {
      return formApi.validateField(field);
    },
    exists: function exists() {
      return formApi.fieldExists(field);
    }
  };
};

function useFieldApi(field) {
  var formApi = useFormApi();
  var fieldApi = useMemo(function () {
    return buildFieldApi(formApi, field);
  }, [field]);
  return fieldApi;
}

var buildFieldState = function buildFieldState(fieldApi) {
  return {
    value: fieldApi.getValue(),
    touched: fieldApi.getTouched(),
    error: fieldApi.getError()
  };
};

function useFieldState(field) {
  var fieldApi = useFieldApi(field); // TODO find better way to get this to rerender

  var formState = useFormState(); // The above is a temp hack

  var fieldState = buildFieldState(fieldApi);
  return fieldState;
}

var withFieldState = function withFieldState(field) {
  return function (Component$$1) {
    return function (props) {
      var fieldState = useFieldState(field);
      return React.createElement(Component$$1, _extends({
        fieldState: fieldState
      }, props));
    };
  };
};

var withFieldApi = function withFieldApi(field) {
  return function (Component$$1) {
    return function (props) {
      var fieldApi = useFieldApi(field);
      return React.createElement(Component$$1, _extends({
        fieldApi: fieldApi
      }, props));
    };
  };
};

var withRadioGroup = function withRadioGroup(Component$$1) {
  return React.forwardRef(function (props, ref) {
    return React.createElement(GroupContext.Consumer, null, function (_ref) {
      var radioGroupApi = _ref.radioGroupApi,
          radioGroupState = _ref.radioGroupState;
      return React.createElement(Component$$1, _extends({
        radioGroupApi: radioGroupApi,
        radioGroupState: radioGroupState,
        ref: ref
      }, props));
    });
  });
};

var logger = debug('informed:useField' + '\t'); // TODO figure out if this is bad? 
// https://github.com/facebook/react/issues/14543

function useStateWithGetter(initial) {
  var ref = useRef();

  var _useState = useState(initial),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  ref.current = state;

  var set = function set(value) {
    ref.current = value;
    setState(value);
  };

  var get = function get() {
    return ref.current;
  };

  return [state, set, get];
}

var initializeValue = function initializeValue(value, mask) {
  if (value != null) {
    // Call mask if it was passed
    if (mask) {
      return mask(value);
    }

    return value;
  } // Not needed but called out specifically


  return undefined;
};

var initializeMask = function initializeMask(value, format, parse) {
  // Call format and parse if they were passed
  if (format && parse) {
    return format(value);
  }

  return value;
};

function useField() {
  var fieldProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var userRef = arguments.length > 1 ? arguments[1] : undefined;

  // Pull props off of field props
  var field = fieldProps.field,
      validate = fieldProps.validate,
      mask = fieldProps.mask,
      maskWithCursorOffset = fieldProps.maskWithCursorOffset,
      format = fieldProps.format,
      parse = fieldProps.parse,
      initialValue = fieldProps.initialValue,
      validateOnChange = fieldProps.validateOnChange,
      validateOnBlur = fieldProps.validateOnBlur,
      validateOnMount = fieldProps.validateOnMount,
      maskOnBlur = fieldProps.maskOnBlur,
      allowEmptyString = fieldProps.allowEmptyString,
      onValueChange = fieldProps.onValueChange,
      notify = fieldProps.notify,
      keepState = fieldProps.keepState,
      maintainCursor = fieldProps.maintainCursor,
      debug$$1 = fieldProps.debug,
      type = fieldProps.type,
      userProps = _objectWithoutProperties(fieldProps, ["field", "validate", "mask", "maskWithCursorOffset", "format", "parse", "initialValue", "validateOnChange", "validateOnBlur", "validateOnMount", "maskOnBlur", "allowEmptyString", "onValueChange", "notify", "keepState", "maintainCursor", "debug", "type"]); // Grab the form register context


  var updater = useContext(FormRegisterContext); // Grab the form state

  var formApi = useFormApi(); // Initialize state 

  var _useStateWithGetter = useStateWithGetter(initializeValue(initialValue, mask)),
      _useStateWithGetter2 = _slicedToArray(_useStateWithGetter, 3),
      value = _useStateWithGetter2[0],
      setVal = _useStateWithGetter2[1],
      getVal = _useStateWithGetter2[2];

  var _useStateWithGetter3 = useStateWithGetter(validateOnMount ? validate(value) : undefined),
      _useStateWithGetter4 = _slicedToArray(_useStateWithGetter3, 3),
      error = _useStateWithGetter4[0],
      setErr = _useStateWithGetter4[1],
      getErr = _useStateWithGetter4[2];

  var _useStateWithGetter5 = useStateWithGetter(),
      _useStateWithGetter6 = _slicedToArray(_useStateWithGetter5, 3),
      touched = _useStateWithGetter6[0],
      setTouch = _useStateWithGetter6[1],
      getTouch = _useStateWithGetter6[2];

  var _useStateWithGetter7 = useStateWithGetter(0),
      _useStateWithGetter8 = _slicedToArray(_useStateWithGetter7, 3),
      cursor = _useStateWithGetter8[0],
      setCursor = _useStateWithGetter8[1],
      getCursor = _useStateWithGetter8[2];

  var _useStateWithGetter9 = useStateWithGetter(0),
      _useStateWithGetter10 = _slicedToArray(_useStateWithGetter9, 3),
      cursorOffset = _useStateWithGetter10[0],
      setCursorOffset = _useStateWithGetter10[1],
      getCursorOffset = _useStateWithGetter10[2];

  var _useState3 = useState(initializeMask(value, format, parse)),
      _useState4 = _slicedToArray(_useState3, 2),
      maskedValue = _useState4[0],
      setMaskedValue = _useState4[1];
  /* ---------------------- Setters ---------------------- */
  // Define set error


  var setError = function setError(val) {
    setErr(val);
    updater.setError(field, val);
  }; // Define set value


  var setValue = function setValue(val, e) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    logger("Setting ".concat(field, " to ").concat(val)); // Initialize maked value

    var maskedVal = val; // Set value to undefined if its an empty string

    if (val === '' && !allowEmptyString && !options.allowEmptyString) {
      val = undefined;
    } // Turn string into number for number fields


    if (type === 'number' && val !== undefined) {
      val = +val;
    } // Call mask if it was passed


    if (mask && !maskOnBlur) {
      maskedVal = mask(val);
      val = mask(val);
    } // Call maskWithCursorOffset if it was passed


    if (maskWithCursorOffset && !maskOnBlur) {
      var res = maskWithCursorOffset(val);
      maskedVal = res.value;
      val = res.value;
      setCursorOffset(res.offset);
    } // Call format and parse if they were passed


    if (format && parse) {
      val = parse(val);
      maskedVal = format(val);
    } // We only need to call validate if the user gave us one
    // and they want us to validate on change


    if (validate && validateOnChange) {
      logger("Validating after change ".concat(field, " ").concat(val));
      setError(validate(val, formApi.getValues()));
    } // Remember Cursor position!


    if (e && e.target && e.target.selectionStart) {
      setCursor(e.target.selectionStart);
    } // Now we update the value


    setVal(val);
    setMaskedValue(maskedVal); // If the user passed in onValueChange then call it!

    if (onValueChange) {
      onValueChange(val);
    } // Call the updater


    updater.setValue(field, val);
  }; // Define set touched


  var setTouched = function setTouched(val, reset) {
    // We only need to call validate if the user gave us one
    // and they want us to validate on blur
    if (validate && validateOnBlur && !reset && val) {
      logger("Validating after blur ".concat(field, " ").concat(getVal()));
      setError(validate(getVal(), formApi.getValues()));
    } // Call mask if it was passed


    if (mask && maskOnBlur) {
      var maskedVal = mask(getVal()); // Now we update the value

      setVal(maskedVal);
      setMaskedValue(maskedVal); // If the user passed in onValueChange then call it!

      if (onValueChange) {
        onValueChange(maskedVal);
      } // Call the updater


      updater.setValue(field, maskedVal);
    } // Call maskWithCursorOffset if it was passed


    if (maskWithCursorOffset && maskOnBlur) {
      var res = maskWithCursorOffset(getVal());
      setCursorOffset(res.offset); // Now we update the value

      setVal(res.value);
      setMaskedValue(res.value); // If the user passed in onValueChange then call it!

      if (onValueChange) {
        onValueChange(res.value);
      } // Call the updater


      updater.setValue(field, res.value);
    }

    setTouch(val);
    updater.setTouched(field, val);
  }; // Define reset


  var reset = function reset() {
    var initVal = initializeValue(initialValue, mask); // TODO support numbers

    setValue(initialValue); // Setting somthing to undefined will remove it 

    setError(validateOnMount ? validate(initVal) : undefined);
    setTouched(undefined, true);
  }; // Define validate


  var fieldValidate = function fieldValidate() {
    if (validate) {
      logger("Field validating ".concat(field, " ").concat(getVal()));
      setError(validate(getVal(), formApi.getValues()));
    }
  };
  /* ----------------- Field Api && State ----------------- */
  // Build the field api


  var fieldApi = {
    setValue: setValue,
    setTouched: setTouched,
    setError: setError,
    reset: reset,
    validate: fieldValidate,
    getValue: getVal,
    getTouched: getTouch,
    getError: getErr
  }; // Build the field state

  var fieldState = {
    value: value,
    error: error,
    touched: touched,
    maskedValue: maskedValue
  }; // Initial register needs to happen before render ( simulating constructor muhahahah )

  useState(function () {
    var fullField = formApi.getFullField(field);
    logger('Initial Register', fullField);
    updater.register(field, fieldState, {
      field: fullField,
      fieldApi: fieldApi,
      fieldState: fieldState,
      notify: notify,
      keepState: keepState
    });
  });
  logger('Render', formApi.getFullField(field), fieldState);
  var internalRef = useRef(null);
  var ref = React.useMemo(function () {
    return userRef || internalRef;
  }, []); // We want to register and deregister this field when field name changes

  useEffect(function () {
    var fullField = formApi.getFullField(field);
    logger('Register', fullField);
    updater.register(field, fieldState, {
      field: fullField,
      fieldApi: fieldApi,
      fieldState: fieldState,
      notify: notify,
      keepState: keepState
    });
    return function () {
      logger('Deregister', fullField);
      updater.deregister(field);
    };
  }, // This is VERYYYY!! Important!
  [field]); // We want to let the controller know of changes on this field when specific props change

  useEffect(function () {
    var fullField = formApi.getFullField(field);
    logger('Update', field);
    updater.update(field, {
      field: fullField,
      fieldApi: fieldApi,
      fieldState: fieldState,
      notify: notify,
      keepState: keepState
    });
  }, // This is VERYYYY!! Important!
  [validate, validateOnChange, validateOnBlur, onValueChange]); // Maintain cursor position

  useLayoutEffect(function () {
    if (maintainCursor && ref.current != null && getCursor()) ref.current.selectionEnd = getCursor() + getCursorOffset();
  }, [value]); // for debugging

  useLayoutEffect(function () {
    if (debug$$1 && ref) {
      ref.current.style.border = '5px solid orange';
      setTimeout(function () {
        ref.current.style.borderWidth = '2px';
        ref.current.style.borderStyle = 'inset';
        ref.current.style.borderColor = 'initial';
        ref.current.style.borderImage = 'initial';
      }, 500);
    }
  }); // This is an awesome optimization!!

  var shouldUpdate = [].concat(_toConsumableArray(Object.values(fieldState)), _toConsumableArray(Object.values(fieldProps)), _toConsumableArray(Object.values(userProps)));

  var render = function render(children) {
    return useMemo(function () {
      return children;
    }, _toConsumableArray(shouldUpdate));
  };

  return {
    fieldState: fieldState,
    fieldApi: fieldApi,
    render: render,
    ref: ref,
    userProps: userProps
  };
}

var asField = function asField(Component$$1) {
  var forwardRef = React.forwardRef(function (props, userRef) {
    var _useField = useField(props, userRef),
        fieldState = _useField.fieldState,
        fieldApi = _useField.fieldApi,
        render = _useField.render,
        ref = _useField.ref,
        userProps = _useField.userProps;

    return render(React.createElement(Component$$1, _extends({
      fieldApi: fieldApi,
      fieldState: fieldState,
      field: props.field,
      forwardedRef: ref,
      debug: props.debug,
      type: props.type
    }, userProps)));
  }); // const name = Component.displayName || Component.name;
  // forwardRef.displayName = name; 

  return forwardRef;
};

var logger$1 = debug('informed:Text' + '\t');

var Text = function Text(_ref) {
  var fieldApi = _ref.fieldApi,
      fieldState = _ref.fieldState,
      props = _objectWithoutProperties(_ref, ["fieldApi", "fieldState"]);

  var maskedValue = fieldState.maskedValue;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      debug$$1 = props.debug,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "forwardedRef", "debug"]);

  logger$1('Render', field); // for debugging

  useLayoutEffect(function () {
    if (debug$$1 && forwardedRef) {
      forwardedRef.current.style.background = 'red';
      setTimeout(function () {
        forwardedRef.current.style.background = 'white';
      }, 500);
    }
  });
  return React.createElement("input", _extends({}, rest, {
    name: field,
    ref: forwardedRef,
    value: !maskedValue && maskedValue !== 0 ? '' : maskedValue,
    onChange: function onChange(e) {
      setValue(e.target.value, e);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }));
};
var Text$1 = asField(Text);

var Radio = function Radio(_ref) {
  var radioGroupApi = _ref.radioGroupApi,
      radioGroupState = _ref.radioGroupState,
      props = _objectWithoutProperties(_ref, ["radioGroupApi", "radioGroupState"]);

  var groupValue = radioGroupState.value;
  var setValue = radioGroupApi.setValue,
      setTouched = radioGroupApi.setTouched,
      groupOnChange = radioGroupApi.onChange,
      groupOnBlur = radioGroupApi.onBlur;

  var value = props.value,
      _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = _objectWithoutProperties(props, ["value", "onChange", "onBlur", "field", "initialValue", "forwardedRef"]);

  return React.createElement("input", _extends({}, rest, {
    name: field,
    ref: forwardedRef,
    value: value,
    checked: groupValue === value,
    onChange: function onChange(e) {
      if (!e.target.checked) {
        return;
      }

      setValue(value);

      if (_onChange) {
        _onChange(e);
      }

      if (groupOnChange) {
        groupOnChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }

      if (groupOnBlur) {
        groupOnBlur(e);
      }
    },
    type: "radio"
  }));
};
var Radio$1 = withRadioGroup(Radio);

var TextArea = function TextArea(_ref) {
  var fieldApi = _ref.fieldApi,
      fieldState = _ref.fieldState,
      props = _objectWithoutProperties(_ref, ["fieldApi", "fieldState"]);

  var maskedValue = fieldState.maskedValue;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      debug = props.debug,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "forwardedRef", "debug"]); // for debugging


  useLayoutEffect(function () {
    if (debug && forwardedRef) {
      forwardedRef.current.style.background = 'red';
      setTimeout(function () {
        forwardedRef.current.style.background = 'white';
      }, 500);
    }
  });
  return React.createElement("textarea", _extends({}, rest, {
    name: field,
    ref: forwardedRef,
    value: !maskedValue ? '' : maskedValue,
    onChange: function onChange(e) {
      setValue(e.target.value, e);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }));
};
var TextArea$1 = asField(TextArea);

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.selectRef = React.createRef();
    return _this;
  }

  _createClass(Select, [{
    key: "handleChange",
    value: function handleChange(e) {
      var selected = _toConsumableArray((this.props.forwardedRef || this.selectRef).current).filter(function (option) {
        return option.selected;
      }).map(function (option) {
        return option.value;
      });

      this.props.fieldApi.setValue(this.props.multiple ? selected : selected[0] || '');

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    } // for debugging

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.debug && this.props.forwardedRef) {
        this.props.forwardedRef.current.style.background = 'red';
        setTimeout(function () {
          _this2.props.forwardedRef.current.style.background = 'white';
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fieldApi = _this$props.fieldApi,
          fieldState = _this$props.fieldState,
          props = _objectWithoutProperties(_this$props, ["fieldApi", "fieldState"]);

      var value = fieldState.value;
      var setValue = fieldApi.setValue,
          setTouched = fieldApi.setTouched;

      var onChange = props.onChange,
          _onBlur = props.onBlur,
          field = props.field,
          initialValue = props.initialValue,
          forwardedRef = props.forwardedRef,
          debug = props.debug,
          children = props.children,
          multiple = props.multiple,
          rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "forwardedRef", "debug", "children", "multiple"]);

      return React.createElement("select", _extends({}, rest, {
        multiple: multiple,
        name: field,
        ref: forwardedRef || this.selectRef,
        value: value || (multiple ? [] : ''),
        onChange: this.handleChange,
        onBlur: function onBlur(e) {
          setTouched(true);

          if (_onBlur) {
            _onBlur(e);
          }
        }
      }), children);
    }
  }]);

  return Select;
}(React.Component);
var Select$1 = asField(Select);

var Option = function Option(_ref) {
  var value = _ref.value,
      forwardedRef = _ref.forwardedRef,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["value", "forwardedRef", "children"]);

  return React.createElement("option", _extends({
    ref: forwardedRef,
    value: value,
    key: value
  }, rest), children);
};

var Checkbox = function Checkbox(_ref) {
  var fieldApi = _ref.fieldApi,
      fieldState = _ref.fieldState,
      props = _objectWithoutProperties(_ref, ["fieldApi", "fieldState"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      field = props.field,
      initialValue = props.initialValue,
      debug = props.debug,
      forwardedRef = props.forwardedRef,
      rest = _objectWithoutProperties(props, ["onChange", "onBlur", "field", "initialValue", "debug", "forwardedRef"]);

  return React.createElement("input", _extends({}, rest, {
    name: field,
    ref: forwardedRef,
    checked: !!value,
    onChange: function onChange(e) {
      setValue(e.target.checked);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched(true);

      if (_onBlur) {
        _onBlur(e);
      }
    },
    type: "checkbox"
  }));
};
var Checkbox$1 = asField(Checkbox);

var RadioGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(RadioGroup, _Component);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).apply(this, arguments));
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      return React.createElement(GroupContext.Provider, {
        value: this.groupContext
      }, this.props.children);
    }
  }, {
    key: "groupContext",
    get: function get() {
      return {
        radioGroupApi: _objectSpread({}, this.props.fieldApi, {
          onChange: this.props.onChange,
          onBlur: this.props.onBlur
        }),
        radioGroupState: this.props.fieldState
      };
    }
  }]);

  return RadioGroup;
}(Component);
var RadioGroup$1 = asField(RadioGroup);

export { Form, FormProvider, withFormApi, withFormState, withFieldApi, withFieldState, withRadioGroup, asField, useForm, useField, useFieldApi, useFieldState, useFormApi, useFormState, Text$1 as Text, Radio$1 as Radio, TextArea$1 as TextArea, Select$1 as Select, Option, Checkbox$1 as Checkbox, RadioGroup$1 as RadioGroup, Text as BasicText, Radio as BasicRadio, RadioGroup as BasicRadioGroup, TextArea as BasicTextArea, Select as BasicSelect, Checkbox as BasicCheckbox, Scope, ArrayField };
