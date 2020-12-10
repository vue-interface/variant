(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Variant"] = factory();
	else
		root["Variant"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var setPublicPath_src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (setPublicPath_src) {
    __webpack_require__.p = setPublicPath_src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/camelCase.js
function camelCase(string) {
    if(!string) {
        return string;
    }
    
    string = string.replace(/(?:(^.)|([-_\s]+.))/g, function(match) {
        return match.charAt(match.length - 1).toUpperCase();
    });

    return string.charAt(0).toLowerCase() + string.substring(1);
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/capitalize.js
function capitalize(string) {
    return string.split(' ').map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }).join(' ');
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isObject.js
function isObject(subject) {
    return (!!subject) && (subject.constructor === Object);
};
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/now.js
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
    return Date.now();
};

/* harmony default export */ var src_now = (now);
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isSymbol.js
function isSymbol(value) {
    return typeof value === 'symbol';
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/toNumber.js



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
    if(typeof value == 'number') {
        return value;
    }
    if(isSymbol(value)) {
        return NAN;
    }
    if(isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
    }
    if(typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ var src_toNumber = (toNumber);
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if(typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = src_toNumber(wait) || 0;
    if(isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(src_toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }

    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            timeWaiting = wait - timeSinceLastCall;

        return maxing
            ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
            : timeWaiting;
    }

    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
        var time = src_now();
        if(shouldInvoke(time)) {
            return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if(trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }

    function cancel() {
        if(timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
        return timerId === undefined ? result : trailingEdge(src_now());
    }

    function debounced() {
        var time = src_now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if(isInvoking) {
            if(timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if(maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if(timerId === undefined) {
            timerId = setTimeout(timerExpired, wait);
        }
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}

/* harmony default export */ var src_debounce = (debounce);
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/deepExtend.js


/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
*/
function deepExtend(target, ...sources) {
    if(!sources.length) return target;

    const source = sources.shift();

    if(isObject(target) && isObject(source)) {
        for(const key in source) {
            if(isObject(source[key])) {
                if(!target[key]) Object.assign(target, { [key]: {} });
                deepExtend(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return deepExtend(target, ...sources);
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/first.js
function first(array) {
    return (array && array.length) ? array[0] : undefined;
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isArray.js
function isArray(value) {
    return Array.isArray(value);
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/matches.js


function matches(properties) {
    return subject => {
        for(const i in properties) {
            if(isObject(properties[i])) {
                return subject[i] ? matches(properties[i])(subject[i]) : false;
            }
            else if(!subject || subject[i] !== properties[i]) {
                return false;
            }
        }

        return true;
    };
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isNull.js
function isNull(value) {
    return value === null;
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isString.js
function isString(value) {
    return typeof value === 'string';
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isUndefined.js
function isUndefined(value) {
    return typeof value === 'undefined';
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/get.js





function get(object, path, defaultValue) {
    const value = (isString(path) ? path.split('.') : (
        !isArray(path) ? [path] : path)
    ).reduce((a, b) => a[b], object);

    return !isUndefined(value) && !isNull(value) ? value : (
        !isUndefined(defaultValue) ? defaultValue : value
    );
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/property.js


function property(path) {
    return object => {
        return get(object, path);
    };
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isFunction.js
function isFunction(value) {
    return value instanceof Function;
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/matchesProperty.js


function matchesProperty(path, value) {
    return subject => {
        return get(subject, path) === value;
    };
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/predicate.js







function predicate(value) {
    if(isObject(value)) {
        value = matches(value);
    }
    else if(isArray(value)) {
        value = matchesProperty(value[0], value[1]);
    }
    else if(!isFunction(value)) {
        value = property(value);
    }

    return value;
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/find.js



function find(subject, value) {
    return first(subject.filter(object => predicate(value)(object)));
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isNumber.js
function isNumber(value) {
    return (typeof value === 'number') || (
        value ? value.toString() === '[object Number]' : false
    );
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isNumeric.js



function isNumeric(value) {
    return isNumber(value) || (
        !!value && !isArray(value) && !!value.toString().match(/^-?[\d.,]+$/)
    );
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/key.js


function key_key(value) {
    return isNumeric(value) ? parseFloat(value) : value;
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/findIndex.js



function findIndex(subject, value) {
    for(const i in subject) {
        if(predicate(value)(subject[i])) {
            return key_key(i);
        }
    }

    return -1;
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/isBoolean.js
function isBoolean(subject) {
    return typeof subject === 'boolean' || (
        typeof subject === 'object'
            && subject !== null
            && typeof subject.valueOf() === 'boolean'
    );
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/kebabCase.js
function kebabCase(str) {
    return str && str.replace ?
        str.replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/\s+/g, '-')
            .replace(/_/g, '-')
            .toLowerCase() : null;
};
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/prefix.js



function prefix_prefix(subject, prefix, delimeter = '-') {
    const prefixer = (value, key) => {
        const string = (key || value).toString().replace(new RegExp(`^${prefix}${delimeter}?`), '');

        return [prefix, string].filter(value => !!value).join(delimeter);
    };

    if(isBoolean(subject)) {
        return subject;
    }

    if(isObject(subject)) {
        return Object.fromEntries(
            Object.entries(subject).map(([key, value]) => [prefixer(key), value])
        );
    }

    return subject && prefixer(subject);
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/readFile.js


function readFile(src, progress) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
            
        if(isFunction(progress)) {
            reader.onprogress = e => {
                if(e.lengthComputable) {
                    progress(parseInt((e.loaded / e.total) * 100, 10));
                }
            };
        }

        reader.onload = resolve;            
        reader.onerror = reject;
        reader.onabort = reject;
        reader.readAsDataURL(src);
    });
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/script.js
const LOADED_SCRIPTS = {};

function script_element(url) {
    const script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    return script;
}

function append(script) {
    if(document.querySelector('head')) {
        document.querySelector('head').appendChild(script);
    }
    else {
        document.querySelector('body').appendChild(script);
    }

    return script;
}

function script(url) {
    if(LOADED_SCRIPTS[url] instanceof Promise) {
        return LOADED_SCRIPTS[url];
    }
    else if(LOADED_SCRIPTS[url] || document.querySelector(`script[src="${url}"]`)) {
        return new Promise((resolve, reject) => {
            resolve(LOADED_SCRIPTS[url]);
        });
    }

    LOADED_SCRIPTS[url] = new Promise((resolve, reject) => {
        try {
            append(script_element(url)).addEventListener('load', event => {
                resolve(LOADED_SCRIPTS[url] = event);
            });
        }
        catch (e) {
            reject(e);
        }
    });

    return LOADED_SCRIPTS[url];
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/sequence.js
function sequence(fns, ...args) {
    const results = [];

    const promise = fns.reduce((p, fn) => p.then(() => {
        return Promise.resolve(fn(...args)).then(response => {
            results.push(response);

            return response;
        });
    }), Promise.resolve());

    return promise.then(() => {
        return results;
    });
};

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/transitionDuration.js
function transitionDuration(el, defaultValue = '0s') {
    let duration = (
        getComputedStyle(el).transitionDuration ||
        getComputedStyle(el).animationDuration
    );
    
    const numeric = parseFloat(duration, 10) || 0;
    
    const unit = duration.match(/m?s/);

    switch (unit && unit[0]) {

    case 's':
        return numeric * 1000;
    default:
        return numeric;
    }
}
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/transition.js


function transition(el, defaultValue) {
    if(!el) {
        return Promise.resolve(null);
    }

    return new Promise(resolve => {
        const delay = transitionDuration(el, defaultValue);

        setTimeout(() => resolve(delay), delay);        
    });
}

// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/src/unit.js
/* harmony default export */ var unit = (function(value, uom = 'px') {
    return value !== null
        && value !== undefined
        && value !== false
        && isFinite(value) ? `${value}${uom}` : value;
});
// CONCATENATED MODULE: ./node_modules/@vue-interface/utils/index.js




































// CONCATENATED MODULE: ./src/Variant.js


/* harmony default export */ var Variant = ({
  props: {
    /**
     * The variant name
     *
     * @param {String} [variant=primary]
     */
    variant: {
      type: String,
      default: 'primary'
    },

    /**
     * The variant prefix
     *
     * @alias color
     */
    variantPrefix: {
      type: String,
      default: function _default() {
        return this.$options.name;
      }
    }
  },
  computed: {
    /**
     * The computed variant class prefix.
     *
     * @param {String}
     */
    variantClassPrefix: function variantClassPrefix() {
      return kebabCase(this.variantPrefix);
    },

    /**
     * The computed variant class name.
     *
     * @param {String}
     */
    variantClass: function variantClass() {
      return prefix_prefix(this.variant, this.variantClassPrefix);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./main.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_mainvue_type_script_lang_js_ = (Variant);
// CONCATENATED MODULE: ./main.vue?vue&type=script&lang=js&
 /* harmony default export */ var mainvue_type_script_lang_js_ = (lib_vue_loader_options_mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./main.vue
var render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=Variant.umd.js.map