(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["FlexReactModal"] = factory(require("react"), require("react-dom"));
	else
		root["FlexReactModal"] = factory(root["react"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ModalHeader = __webpack_require__(2);
	
	var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
	
	var _ModalBody = __webpack_require__(3);
	
	var _ModalBody2 = _interopRequireDefault(_ModalBody);
	
	var _ModalFooter = __webpack_require__(7);
	
	var _ModalFooter2 = _interopRequireDefault(_ModalFooter);
	
	var _Util = __webpack_require__(8);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FlexReactModal = function (_Component) {
	  _inherits(FlexReactModal, _Component);
	
	  function FlexReactModal(props) {
	    _classCallCheck(this, FlexReactModal);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlexReactModal).call(this, props));
	
	    var config = _this.props.config;
	
	    _this.config = config;
	
	    _this.handleHeaderClick = _this.handleHeaderClick.bind(_this);
	
	    _this.state = {
	      item: _this.config[0]
	    };
	    return _this;
	  }
	
	  _createClass(FlexReactModal, [{
	    key: 'handleHeaderClick',
	    value: function handleHeaderClick(processedItem) {
	      var item = _Util2.default.fetchWithkey('header', processedItem, this.config);
	
	      this.setState({
	        item: item
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var item = this.state.item;
	
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'flex-modal' },
	        _react2.default.createElement('div', { className: 'flex-modal-middle-base' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'flex-modal-content' },
	          _react2.default.createElement(
	            'div',
	            { className: 'flex-modal-header' },
	            _react2.default.createElement(_ModalHeader2.default, {
	              handleHeaderClick: this.handleHeaderClick,
	              config: this.config
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'flex-modal-body' },
	            _react2.default.createElement(_ModalBody2.default, {
	              content: item.content
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'flex-modal-footer' },
	            _react2.default.createElement(_ModalFooter2.default, {
	              footer: item.footer
	            })
	          )
	        )
	      );
	    }
	  }]);
	
	  return FlexReactModal;
	}(_react.Component);
	
	exports.default = FlexReactModal;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalHeader = function (_Component) {
	  _inherits(ModalHeader, _Component);
	
	  function ModalHeader(props) {
	    _classCallCheck(this, ModalHeader);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalHeader).call(this, props));
	  }
	
	  _createClass(ModalHeader, [{
	    key: '_handleClick',
	    value: function _handleClick(header) {
	      var handleHeaderClick = this.props.handleHeaderClick;
	
	
	      handleHeaderClick(header);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var config = this.props.config;
	
	
	      var header = '';
	
	      header = config.map(function (item, key) {
	        return _react2.default.createElement(
	          'li',
	          {
	            className: 'nav-item',
	            key: key,
	            onClick: _this2._handleClick.bind(_this2, item.header)
	          },
	          item.header
	        );
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'flex-modal-header-container' },
	        _react2.default.createElement('div', { className: 'icon' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-bar-body' },
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav-bar' },
	            header
	          )
	        )
	      );
	    }
	  }]);
	
	  return ModalHeader;
	}(_react.Component);
	
	exports.default = ModalHeader;
	
	
	ModalHeader.propTypes = {
	  config: _react.PropTypes.array.isRequired
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FlexInput = __webpack_require__(4);
	
	var _FlexInput2 = _interopRequireDefault(_FlexInput);
	
	var _FlexButton = __webpack_require__(6);
	
	var _FlexButton2 = _interopRequireDefault(_FlexButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalBody = function (_Component) {
	  _inherits(ModalBody, _Component);
	
	  function ModalBody(props) {
	    _classCallCheck(this, ModalBody);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalBody).call(this, props));
	
	    _this.state = {};
	    _this.handleSave = _this.handleSave.bind(_this);
	    _this._handleClick = _this._handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(ModalBody, [{
	    key: 'handleSave',
	    value: function handleSave(data) {
	      this.setState(Object.assign(this.state, data));
	    }
	  }, {
	    key: '_handleClick',
	    value: function _handleClick(handleClick) {
	
	      handleClick(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var content = this.props.content;
	
	
	      if (!content) {
	        return null;
	      }
	
	      var displayContent = content.map(function (item, key) {
	
	        switch (item.component) {
	          case 'FlexInput':
	            return _react2.default.createElement(_FlexInput2.default, {
	              classnames: 'flexible flex-input',
	              key: '' + item.refer,
	              placeholder: item.placeholder,
	              refer: item.refer,
	              onSave: _this2.handleSave,
	              value: _this2.state[item.refer],
	              type: item.type
	            });
	
	          case 'FlexButton':
	            return _react2.default.createElement(_FlexButton2.default, {
	              key: key,
	              classnames: 'flex-btn',
	              content: item.content,
	              handleClick: _this2._handleClick.bind(_this2, item.handleClick)
	            });
	        }
	      });
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'flex-modal-body-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'flex-input-group' },
	          displayContent
	        )
	      );
	    }
	  }]);
	
	  return ModalBody;
	}(_react.Component);
	
	exports.default = ModalBody;
	
	
	ModalBody.propTyeps = {
	  content: _react.PropTypes.object.isRequired
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(5);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FlexInput = function (_Component) {
	  _inherits(FlexInput, _Component);
	
	  function FlexInput(props) {
	    _classCallCheck(this, FlexInput);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlexInput).call(this, props));
	
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	
	    _this.state = {
	      value: _this.props.value || ''
	    };
	    return _this;
	  }
	
	  _createClass(FlexInput, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ value: e.target.value });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      var _props = this.props;
	      var onSave = _props.onSave;
	      var refer = _props.refer;
	
	
	      var data = {};
	      data[refer] = e.target.value;
	
	      onSave(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var placeholder = _props2.placeholder;
	      var classnames = _props2.classnames;
	      var refer = _props2.refer;
	      var type = _props2.type;
	
	
	      return _react2.default.createElement('input', {
	        placeholder: placeholder,
	        className: classnames,
	        type: type,
	        onBlur: this.handleBlur,
	        onChange: this.handleChange,
	        value: this.state.value
	      });
	    }
	  }]);
	
	  return FlexInput;
	}(_react.Component);
	
	exports.default = FlexInput;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FlexButton = function (_Component) {
	  _inherits(FlexButton, _Component);
	
	  function FlexButton() {
	    _classCallCheck(this, FlexButton);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FlexButton).apply(this, arguments));
	  }
	
	  _createClass(FlexButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var classnames = _props.classnames;
	      var content = _props.content;
	      var handleClick = _props.handleClick;
	
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: classnames,
	          onClick: handleClick
	        },
	        content
	      );
	    }
	  }]);
	
	  return FlexButton;
	}(_react.Component);
	
	exports.default = FlexButton;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ModalFooter = function (_Component) {
	  _inherits(ModalFooter, _Component);
	
	  function ModalFooter() {
	    _classCallCheck(this, ModalFooter);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModalFooter).apply(this, arguments));
	  }
	
	  _createClass(ModalFooter, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("div", { className: "flex-modal-footer-container" });
	    }
	  }]);
	
	  return ModalFooter;
	}(_react.Component);
	
	exports.default = ModalFooter;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Util = function () {
	  function Util() {
	    _classCallCheck(this, Util);
	  }
	
	  _createClass(Util, null, [{
	    key: 'fetchWithkey',
	    value: function fetchWithkey(key, value, obj) {
	      var item = {};
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          item = _step.value;
	
	          if (item.hasOwnProperty(key) && item[key].toString() === value.toString()) {
	            return item;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      throw new Error('key not found');
	    }
	  }]);
	
	  return Util;
	}();
	
	exports.default = Util;
	;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=flex-react-modal.js.map