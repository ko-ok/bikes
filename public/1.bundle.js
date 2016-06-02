webpackJsonp([1,2],{

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(8);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NotFoundPage
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This is the page we show when the user visits a url that doesn't have a route
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NOTE: while this component should technically be a stateless functional
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * component (SFC), hot reloading does not currently support SFCs. If hot
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * reloading is not a neccessity for you then you can refactor it and remove
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the linting exception.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	/* eslint-disable react/prefer-stateless-function */

	var NotFound = function (_React$Component) {
	  _inherits(NotFound, _React$Component);

	  function NotFound() {
	    _classCallCheck(this, NotFound);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotFound).apply(this, arguments));
	  }

	  _createClass(NotFound, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'h1',
	        null,
	        'Page Not Found'
	      );
	    }
	  }]);

	  return NotFound;
	}(_react2.default.Component);

	exports.default = NotFound;

/***/ }

});