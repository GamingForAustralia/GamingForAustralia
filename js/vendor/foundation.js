/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {

	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));

	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);

	else {

		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);

		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];

	}

}
)(self, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {

return /******/ (function() {
 // webpackBootstrap
/******/ 	"use strict";

/******/ 	var __webpack_modules__ = ({


/***/ "./custom-build/js/vendor/foundation.js":
/*!**********************************************!*\
  !*** ./custom-build/js/vendor/foundation.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/foundation.core */ \"./js/foundation.core.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/foundation.abide */ \"./js/foundation.abide.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/foundation.accordion */ \"./js/foundation.accordion.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/foundation.accordionMenu */ \"./js/foundation.accordionMenu.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/foundation.drilldown */ \"./js/foundation.drilldown.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/foundation.dropdown */ \"./js/foundation.dropdown.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/foundation.dropdownMenu */ \"./js/foundation.dropdownMenu.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/foundation.equalizer */ \"./js/foundation.equalizer.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/foundation.interchange */ \"./js/foundation.interchange.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/foundation.magellan */ \"./js/foundation.magellan.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/foundation.offcanvas */ \"./js/foundation.offcanvas.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/foundation.orbit */ \"./js/foundation.orbit.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/foundation.responsiveMenu */ \"./js/foundation.responsiveMenu.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./js/foundation.responsiveToggle */ \"./js/foundation.responsiveToggle.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./js/foundation.reveal */ \"./js/foundation.reveal.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./js/foundation.slider */ \"./js/foundation.slider.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./js/foundation.sticky */ \"./js/foundation.sticky.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./js/foundation.tabs */ \"./js/foundation.tabs.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./js/foundation.toggler */ \"./js/foundation.toggler.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./js/foundation.tooltip */ \"./js/foundation.tooltip.js\");
\n/* harmony import */ var _Users_joeworkman_Developer_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./js/foundation.responsiveAccordionTabs */ \"./js/foundation.responsiveAccordionTabs.js\");
\n\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.addToJquery((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.MediaQuery = _Users_joeworkman_Developer_foundation_sites_js_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__.MediaQuery;
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()), _Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation);
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_abide__WEBPACK_IMPORTED_MODULE_4__.Abide, 'Abide');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_accordion__WEBPACK_IMPORTED_MODULE_5__.Accordion, 'Accordion');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__.AccordionMenu, 'AccordionMenu');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_drilldown__WEBPACK_IMPORTED_MODULE_7__.Drilldown, 'Drilldown');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, 'Dropdown');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_9__.DropdownMenu, 'DropdownMenu');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_equalizer__WEBPACK_IMPORTED_MODULE_10__.Equalizer, 'Equalizer');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_interchange__WEBPACK_IMPORTED_MODULE_11__.Interchange, 'Interchange');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_magellan__WEBPACK_IMPORTED_MODULE_12__.Magellan, 'Magellan');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_offcanvas__WEBPACK_IMPORTED_MODULE_13__.OffCanvas, 'OffCanvas');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_orbit__WEBPACK_IMPORTED_MODULE_14__.Orbit, 'Orbit');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_responsiveMenu__WEBPACK_IMPORTED_MODULE_15__.ResponsiveMenu, 'ResponsiveMenu');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_responsiveToggle__WEBPACK_IMPORTED_MODULE_16__.ResponsiveToggle, 'ResponsiveToggle');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__.Reveal, 'Reveal');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_slider__WEBPACK_IMPORTED_MODULE_18__.Slider, 'Slider');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_sticky__WEBPACK_IMPORTED_MODULE_19__.Sticky, 'Sticky');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_tabs__WEBPACK_IMPORTED_MODULE_20__.Tabs, 'Tabs');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_toggler__WEBPACK_IMPORTED_MODULE_21__.Toggler, 'Toggler');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_tooltip__WEBPACK_IMPORTED_MODULE_22__.Tooltip, 'Tooltip');
\n\n_Users_joeworkman_Developer_foundation_sites_js_foundation_core__WEBPACK_IMPORTED_MODULE_1__.Foundation.plugin(_Users_joeworkman_Developer_foundation_sites_js_foundation_responsiveAccordionTabs__WEBPACK_IMPORTED_MODULE_23__.ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');
\n\n//# sourceURL=webpack://foundation-sites/./custom-build/js/vendor/foundation.js?");


/***/ }
),

/***/ "./js/foundation.abide.js":
/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Abide: function() {
 return /* binding */ Abide;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n/**\n * Abide module.\n * @module foundation.abide\n */\nvar Abide = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Abide, _Plugin);
\n  var _super = _createSuper(Abide);
\n  function Abide() {
\n    _classCallCheck(this, Abide);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Abide, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of Abide.\n     * @class\n     * @name Abide\n     * @fires Abide#init\n     * @param {
Object}
 element - jQuery object to add the trigger to.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element) {
\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
}
;
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(true, {
}
, Abide.defaults, this.$element.data(), options);
\n      this.isEnabled = true;
\n      this.formnovalidate = null;
\n      this.className = 'Abide';
 // ie9 back compat\n      this._init();
\n    }
\n\n    /**\n     * Initializes the Abide plugin and calls functions to get Abide functioning on load.\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var _this2 = this;
\n      this.$inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default().merge(\n      // Consider as input to validate:\n      this.$element.find('input').not('[type=\"submit\"]'),\n      // * all input fields expect submit\n      this.$element.find('textarea, select') // * all textareas and select fields\n      );
\n\n      this.$submits = this.$element.find('[type=\"submit\"]');
\n      var $globalErrors = this.$element.find('[data-abide-error]');
\n\n      // Add a11y attributes to all fields\n      if (this.options.a11yAttributes) {
\n        this.$inputs.each(function (i, input) {
\n          return _this2.addA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input));
\n        }
);
\n        $globalErrors.each(function (i, error) {
\n          return _this2.addGlobalErrorA11yAttributes(jquery__WEBPACK_IMPORTED_MODULE_0___default()(error));
\n        }
);
\n      }
\n      this._events();
\n    }
\n\n    /**\n     * Initializes events for Abide.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this3 = this;
\n      this.$element.off('.abide').on('reset.zf.abide', function () {
\n        _this3.resetForm();
\n      }
).on('submit.zf.abide', function () {
\n        return _this3.validateForm();
\n      }
);
\n      this.$submits.off('click.zf.abide keydown.zf.abide').on('click.zf.abide keydown.zf.abide', function (e) {
\n        if (!e.key || e.key === ' ' || e.key === 'Enter') {
\n          e.preventDefault();
\n          _this3.formnovalidate = e.target.getAttribute('formnovalidate') !== null;
\n          _this3.$element.submit();
\n        }
\n      }
);
\n      if (this.options.validateOn === 'fieldChange') {
\n        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
\n          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
\n        }
);
\n      }
\n      if (this.options.liveValidate) {
\n        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
\n          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
\n        }
);
\n      }
\n      if (this.options.validateOnBlur) {
\n        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
\n          _this3.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target));
\n        }
);
\n      }
\n    }
\n\n    /**\n     * Calls necessary functions to update Abide upon DOM change\n     * @private\n     */\n  }
, {
\n    key: \"_reflow\",\n    value: function _reflow() {
\n      this._init();
\n    }
\n\n    /**\n     * Checks whether the submitted form should be validated or not, consodering formnovalidate and isEnabled\n     * @returns {
Boolean}
\n     * @private\n     */\n  }
, {
\n    key: \"_validationIsDisabled\",\n    value: function _validationIsDisabled() {
\n      if (this.isEnabled === false) {
\n        // whole validation disabled\n        return true;
\n      }
 else if (typeof this.formnovalidate === 'boolean') {
\n        // triggered by $submit\n        return this.formnovalidate;
\n      }
\n      // triggered by Enter in non-submit input\n      return this.$submits.length ? this.$submits[0].getAttribute('formnovalidate') !== null : false;
\n    }
\n\n    /**\n     * Enables the whole validation\n     */\n  }
, {
\n    key: \"enableValidation\",\n    value: function enableValidation() {
\n      this.isEnabled = true;
\n    }
\n\n    /**\n     * Disables the whole validation\n     */\n  }
, {
\n    key: \"disableValidation\",\n    value: function disableValidation() {
\n      this.isEnabled = false;
\n    }
\n\n    /**\n     * Checks whether or not a form element has the required attribute and if it's checked or not\n     * @param {
Object}
 element - jQuery object to check for required attribute\n     * @returns {
Boolean}
 Boolean value depends on whether or not attribute is checked or empty\n     */\n  }
, {
\n    key: \"requiredCheck\",\n    value: function requiredCheck($el) {
\n      if (!$el.attr('required')) return true;
\n      var isGood = true;
\n      switch ($el[0].type) {
\n        case 'checkbox':\n          isGood = $el[0].checked;
\n          break;
\n        case 'select':\n        case 'select-one':\n        case 'select-multiple':\n          var opt = $el.find('option:selected');
\n          if (!opt.length || !opt.val()) isGood = false;
\n          break;
\n        default:\n          if (!$el.val() || !$el.val().length) isGood = false;
\n      }
\n      return isGood;
\n    }
\n\n    /**\n     * Get:\n     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:\n     *   1. The element's direct sibling('s).\n     *   2. The element's parent's children.\n     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.\n     *\n     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.\n     *\n     * @param {
Object}
 $el - jQuery object to use as reference to find the form error selector.\n     * @param {
String[]}
 [failedValidators] - List of failed validators.\n     * @returns {
Object}
 jQuery object with the selector.\n     */\n  }
, {
\n    key: \"findFormError\",\n    value: function findFormError($el, failedValidators) {
\n      var _this4 = this;
\n      var id = $el.length ? $el[0].id : '';
\n      var $error = $el.siblings(this.options.formErrorSelector);
\n      if (!$error.length) {
\n        $error = $el.parent().find(this.options.formErrorSelector);
\n      }
\n      if (id) {
\n        $error = $error.add(this.$element.find(\"[data-form-error-for=\\\"\".concat(id, \"\\\"]\")));
\n      }
\n      if (!!failedValidators) {
\n        $error = $error.not('[data-form-error-on]');
\n        failedValidators.forEach(function (v) {
\n          $error = $error.add($el.siblings(\"[data-form-error-on=\\\"\".concat(v, \"\\\"]\")));
\n          $error = $error.add(_this4.$element.find(\"[data-form-error-for=\\\"\".concat(id, \"\\\"][data-form-error-on=\\\"\").concat(v, \"\\\"]\")));
\n        }
);
\n      }
\n      return $error;
\n    }
\n\n    /**\n     * Get the first element in this order:\n     * 2. The <label> with the attribute `[for=\"someInputId\"]`\n     * 3. The `.closest()` <label>\n     *\n     * @param {
Object}
 $el - jQuery object to check for required attribute\n     * @returns {
Boolean}
 Boolean value depends on whether or not attribute is checked or empty\n     */\n  }
, {
\n    key: \"findLabel\",\n    value: function findLabel($el) {
\n      var id = $el[0].id;
\n      var $label = this.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));
\n      if (!$label.length) {
\n        return $el.closest('label');
\n      }
\n      return $label;
\n    }
\n\n    /**\n     * Get the set of labels associated with a set of radio els in this order\n     * 2. The <label> with the attribute `[for=\"someInputId\"]`\n     * 3. The `.closest()` <label>\n     *\n     * @param {
Object}
 $el - jQuery object to check for required attribute\n     * @returns {
Boolean}
 Boolean value depends on whether or not attribute is checked or empty\n     */\n  }
, {
\n    key: \"findRadioLabels\",\n    value: function findRadioLabels($els) {
\n      var _this5 = this;
\n      var labels = $els.map(function (i, el) {
\n        var id = el.id;
\n        var $label = _this5.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));
\n        if (!$label.length) {
\n          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
\n        }
\n        return $label[0];
\n      }
);
\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
\n    }
\n\n    /**\n     * Get the set of labels associated with a set of checkbox els in this order\n     * 2. The <label> with the attribute `[for=\"someInputId\"]`\n     * 3. The `.closest()` <label>\n     *\n     * @param {
Object}
 $el - jQuery object to check for required attribute\n     * @returns {
Boolean}
 Boolean value depends on whether or not attribute is checked or empty\n     */\n  }
, {
\n    key: \"findCheckboxLabels\",\n    value: function findCheckboxLabels($els) {
\n      var _this6 = this;
\n      var labels = $els.map(function (i, el) {
\n        var id = el.id;
\n        var $label = _this6.$element.find(\"label[for=\\\"\".concat(id, \"\\\"]\"));
\n        if (!$label.length) {
\n          $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).closest('label');
\n        }
\n        return $label[0];
\n      }
);
\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(labels);
\n    }
\n\n    /**\n     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form\n     * @param {
Object}
 $el - jQuery object to add the class to\n     * @param {
String[]}
 [failedValidators] - List of failed validators.\n     */\n  }
, {
\n    key: \"addErrorClasses\",\n    value: function addErrorClasses($el, failedValidators) {
\n      var $label = this.findLabel($el);
\n      var $formError = this.findFormError($el, failedValidators);
\n      if ($label.length) {
\n        $label.addClass(this.options.labelErrorClass);
\n      }
\n      if ($formError.length) {
\n        $formError.addClass(this.options.formErrorClass);
\n      }
\n      $el.addClass(this.options.inputErrorClass).attr({
\n        'data-invalid': '',\n        'aria-invalid': true\n      }
);
\n      if ($formError.filter(':visible').length) {
\n        this.addA11yErrorDescribe($el, $formError);
\n      }
\n    }
\n\n    /**\n     * Adds [for] and [role=alert] attributes to all form error targetting $el,\n     * and [aria-describedby] attribute to $el toward the first form error.\n     * @param {
Object}
 $el - jQuery object\n     */\n  }
, {
\n    key: \"addA11yAttributes\",\n    value: function addA11yAttributes($el) {
\n      var $errors = this.findFormError($el);
\n      var $labels = $errors.filter('label');
\n      if (!$errors.length) return;
\n      var $error = $errors.filter(':visible').first();
\n      if ($error.length) {
\n        this.addA11yErrorDescribe($el, $error);
\n      }
\n      if ($labels.filter('[for]').length < $labels.length) {
\n        // Get the input ID or create one\n        var elemId = $el.attr('id');
\n        if (typeof elemId === 'undefined') {
\n          elemId = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'abide-input');
\n          $el.attr('id', elemId);
\n        }
\n\n        // For each label targeting $el, set [for] if it is not set.\n        $labels.each(function (i, label) {
\n          var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
\n          if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
\n        }
);
\n      }
\n\n      // For each error targeting $el, set [role=alert] if it is not set.\n      $errors.each(function (i, label) {
\n        var $label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(label);
\n        if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
\n      }
).end();
\n    }
\n  }
, {
\n    key: \"addA11yErrorDescribe\",\n    value: function addA11yErrorDescribe($el, $error) {
\n      if (typeof $el.attr('aria-describedby') !== 'undefined') return;
\n\n      // Set [aria-describedby] on the input toward the first form error if it is not set\n      // Get the first error ID or create one\n      var errorId = $error.attr('id');
\n      if (typeof errorId === 'undefined') {
\n        errorId = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'abide-error');
\n        $error.attr('id', errorId);
\n      }
\n      $el.attr('aria-describedby', errorId).data('abide-describedby', true);
\n    }
\n\n    /**\n     * Adds [aria-live] attribute to the given global form error $el.\n     * @param {
Object}
 $el - jQuery object to add the attribute to\n     */\n  }
, {
\n    key: \"addGlobalErrorA11yAttributes\",\n    value: function addGlobalErrorA11yAttributes($el) {
\n      if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
\n    }
\n\n    /**\n     * Remove CSS error classes etc from an entire radio button group\n     * @param {
String}
 groupName - A string that specifies the name of a radio button group\n     *\n     */\n  }
, {
\n    key: \"removeRadioErrorClasses\",\n    value: function removeRadioErrorClasses(groupName) {
\n      var $els = this.$element.find(\":radio[name=\\\"\".concat(groupName, \"\\\"]\"));
\n      var $labels = this.findRadioLabels($els);
\n      var $formErrors = this.findFormError($els);
\n      if ($labels.length) {
\n        $labels.removeClass(this.options.labelErrorClass);
\n      }
\n      if ($formErrors.length) {
\n        $formErrors.removeClass(this.options.formErrorClass);
\n      }
\n      $els.removeClass(this.options.inputErrorClass).attr({
\n        'data-invalid': null,\n        'aria-invalid': null\n      }
);
\n    }
\n\n    /**\n     * Remove CSS error classes etc from an entire checkbox group\n     * @param {
String}
 groupName - A string that specifies the name of a checkbox group\n     *\n     */\n  }
, {
\n    key: \"removeCheckboxErrorClasses\",\n    value: function removeCheckboxErrorClasses(groupName) {
\n      var $els = this.$element.find(\":checkbox[name=\\\"\".concat(groupName, \"\\\"]\"));
\n      var $labels = this.findCheckboxLabels($els);
\n      var $formErrors = this.findFormError($els);
\n      if ($labels.length) {
\n        $labels.removeClass(this.options.labelErrorClass);
\n      }
\n      if ($formErrors.length) {
\n        $formErrors.removeClass(this.options.formErrorClass);
\n      }
\n      $els.removeClass(this.options.inputErrorClass).attr({
\n        'data-invalid': null,\n        'aria-invalid': null\n      }
);
\n    }
\n\n    /**\n     * Removes CSS error class as specified by the Abide settings from the label, input, and the form\n     * @param {
Object}
 $el - jQuery object to remove the class from\n     */\n  }
, {
\n    key: \"removeErrorClasses\",\n    value: function removeErrorClasses($el) {
\n      // radios need to clear all of the els\n      if ($el[0].type === 'radio') {
\n        return this.removeRadioErrorClasses($el.attr('name'));
\n      }
\n      // checkboxes need to clear all of the els\n      else if ($el[0].type === 'checkbox') {
\n        return this.removeCheckboxErrorClasses($el.attr('name'));
\n      }
\n      var $label = this.findLabel($el);
\n      var $formError = this.findFormError($el);
\n      if ($label.length) {
\n        $label.removeClass(this.options.labelErrorClass);
\n      }
\n      if ($formError.length) {
\n        $formError.removeClass(this.options.formErrorClass);
\n      }
\n      $el.removeClass(this.options.inputErrorClass).attr({
\n        'data-invalid': null,\n        'aria-invalid': null\n      }
);
\n      if ($el.data('abide-describedby')) {
\n        $el.removeAttr('aria-describedby').removeData('abide-describedby');
\n      }
\n    }
\n\n    /**\n     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.\n     * Ignores inputs with data-abide-ignore, type=\"hidden\" or disabled attributes set\n     * @fires Abide#invalid\n     * @fires Abide#valid\n     * @param {
Object}
 element - jQuery object to validate, should be an HTML input\n     * @returns {
Boolean}
 goodToGo - If the input is valid or not.\n     */\n  }
, {
\n    key: \"validateInput\",\n    value: function validateInput($el) {
\n      var _this7 = this;
\n      var clearRequire = this.requiredCheck($el),\n        validator = $el.attr('data-validator'),\n        failedValidators = [],\n        manageErrorClasses = true;
\n\n      // skip validation if disabled\n      if (this._validationIsDisabled()) {
\n        return true;
\n      }
\n\n      // don't validate ignored inputs or hidden inputs or disabled inputs\n      if ($el.is('[data-abide-ignore]') || $el.is('[type=\"hidden\"]') || $el.is('[disabled]')) {
\n        return true;
\n      }
\n      switch ($el[0].type) {
\n        case 'radio':\n          this.validateRadio($el.attr('name')) || failedValidators.push('required');
\n          break;
\n        case 'checkbox':\n          this.validateCheckbox($el.attr('name')) || failedValidators.push('required');
\n          // validateCheckbox() adds/removes error classes\n          manageErrorClasses = false;
\n          break;
\n        case 'select':\n        case 'select-one':\n        case 'select-multiple':\n          clearRequire || failedValidators.push('required');
\n          break;
\n        default:\n          clearRequire || failedValidators.push('required');
\n          this.validateText($el) || failedValidators.push('pattern');
\n      }
\n      if (validator) {
\n        var required = $el.attr('required') ? true : false;
\n        validator.split(' ').forEach(function (v) {
\n          _this7.options.validators[v]($el, required, $el.parent()) || failedValidators.push(v);
\n        }
);
\n      }
\n      if ($el.attr('data-equalto')) {
\n        this.options.validators.equalTo($el) || failedValidators.push('equalTo');
\n      }
\n      var goodToGo = failedValidators.length === 0;
\n      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';
\n      if (goodToGo) {
\n        // Re-validate inputs that depend on this one with equalto\n        var dependentElements = this.$element.find(\"[data-equalto=\\\"\".concat($el.attr('id'), \"\\\"]\"));
\n        if (dependentElements.length) {
\n          var _this = this;
\n          dependentElements.each(function () {
\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) {
\n              _this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
\n            }
\n          }
);
\n        }
\n      }
\n      if (manageErrorClasses) {
\n        if (!goodToGo) {
\n          this.addErrorClasses($el, failedValidators);
\n        }
 else {
\n          this.removeErrorClasses($el);
\n        }
\n      }
\n\n      /**\n       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`\n       * Trigger includes the DOM element of the input.\n       * @event Abide#valid\n       * @event Abide#invalid\n       */\n      $el.trigger(message, [$el]);
\n      return goodToGo;
\n    }
\n\n    /**\n     * Goes through a form and if there are any invalid inputs, it will display the form error element\n     * @returns {
Boolean}
 noError - true if no errors were detected...\n     * @fires Abide#formvalid\n     * @fires Abide#forminvalid\n     */\n  }
, {
\n    key: \"validateForm\",\n    value: function validateForm() {
\n      var _this8 = this;
\n      var acc = [];
\n      var _this = this;
\n      var checkboxGroupName;
\n\n      // Remember first form submission to prevent specific checkbox validation (more than one required) until form got initially submitted\n      if (!this.initialized) {
\n        this.initialized = true;
\n      }
\n\n      // skip validation if disabled\n      if (this._validationIsDisabled()) {
\n        this.formnovalidate = null;
\n        return true;
\n      }
\n      this.$inputs.each(function () {
\n        // Only use one checkbox per group since validateCheckbox() iterates over all associated checkboxes\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].type === 'checkbox') {
\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name') === checkboxGroupName) return true;
\n          checkboxGroupName = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('name');
\n        }
\n        acc.push(_this.validateInput(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)));
\n      }
);
\n      var noError = acc.indexOf(false) === -1;
\n      this.$element.find('[data-abide-error]').each(function (i, elem) {
\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem);
\n        // Ensure a11y attributes are set\n        if (_this8.options.a11yAttributes) _this8.addGlobalErrorA11yAttributes($elem);
\n        // Show or hide the error\n        $elem.css('display', noError ? 'none' : 'block');
\n      }
);
\n\n      /**\n       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.\n       * Trigger includes the element of the form.\n       * @event Abide#formvalid\n       * @event Abide#forminvalid\n       */\n      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
\n      return noError;
\n    }
\n\n    /**\n     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.\n     * @param {
Object}
 $el - jQuery object to validate, should be a text input HTML element\n     * @param {
String}
 pattern - string value of one of the RegEx patterns in Abide.options.patterns\n     * @returns {
Boolean}
 Boolean value depends on whether or not the input value matches the pattern specified\n     */\n  }
, {
\n    key: \"validateText\",\n    value: function validateText($el, pattern) {
\n      // A pattern can be passed to this function, or it will be infered from the input's \"pattern\" attribute, or it's \"type\" attribute\n      pattern = pattern || $el.attr('data-pattern') || $el.attr('pattern') || $el.attr('type');
\n      var inputText = $el.val();
\n      var valid = true;
\n      if (inputText.length) {
\n        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp\n        if (this.options.patterns.hasOwnProperty(pattern)) {
\n          valid = this.options.patterns[pattern].test(inputText);
\n        }
\n        // If the pattern name isn't also the type attribute of the field, then test it as a regexp\n        else if (pattern !== $el.attr('type')) {
\n          valid = new RegExp(pattern).test(inputText);
\n        }
\n      }
\n      return valid;
\n    }
\n\n    /**\n     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.\n     * @param {
String}
 groupName - A string that specifies the name of a radio button group\n     * @returns {
Boolean}
 Boolean value depends on whether or not at least one radio input has been selected (if it's required)\n     */\n  }
, {
\n    key: \"validateRadio\",\n    value: function validateRadio(groupName) {
\n      // If at least one radio in the group has the `required` attribute, the group is considered required\n      // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice\n      var $group = this.$element.find(\":radio[name=\\\"\".concat(groupName, \"\\\"]\"));
\n      var valid = false,\n        required = false;
\n\n      // For the group to be required, at least one radio needs to be required\n      $group.each(function (i, e) {
\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
\n          required = true;
\n        }
\n      }
);
\n      if (!required) valid = true;
\n      if (!valid) {
\n        // For the group to be valid, at least one radio needs to be checked\n        $group.each(function (i, e) {
\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
\n            valid = true;
\n          }
\n        }
);
\n      }
\n      return valid;
\n    }
\n\n    /**\n     * Determines whether or a not a checkbox input is valid based on whether or not it is required and checked. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all checkboxes in its group.\n     * @param {
String}
 groupName - A string that specifies the name of a checkbox group\n     * @returns {
Boolean}
 Boolean value depends on whether or not at least one checkbox input has been checked (if it's required)\n     */\n  }
, {
\n    key: \"validateCheckbox\",\n    value: function validateCheckbox(groupName) {
\n      var _this9 = this;
\n      // If at least one checkbox in the group has the `required` attribute, the group is considered required\n      // Per W3C spec, all checkboxes in a group should have `required`, but we're being nice\n      var $group = this.$element.find(\":checkbox[name=\\\"\".concat(groupName, \"\\\"]\"));
\n      var valid = false,\n        required = false,\n        minRequired = 1,\n        checked = 0;
\n\n      // For the group to be required, at least one checkbox needs to be required\n      $group.each(function (i, e) {
\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('required')) {
\n          required = true;
\n        }
\n      }
);
\n      if (!required) valid = true;
\n      if (!valid) {
\n        // Count checked checkboxes within the group\n        // Use data-min-required if available (default: 1)\n        $group.each(function (i, e) {
\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).prop('checked')) {
\n            checked++;
\n          }
\n          if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required') !== 'undefined') {
\n            minRequired = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr('data-min-required'), 10);
\n          }
\n        }
);
\n\n        // For the group to be valid, the minRequired amount of checkboxes have to be checked\n        if (checked >= minRequired) {
\n          valid = true;
\n        }
\n      }
\n\n      // Skip validation if more than 1 checkbox have to be checked AND if the form hasn't got submitted yet (otherwise it will already show an error during the first fill in)\n      if (this.initialized !== true && minRequired > 1) {
\n        return true;
\n      }
\n\n      // Refresh error class for all input\n      $group.each(function (i, e) {
\n        if (!valid) {
\n          _this9.addErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e), ['required']);
\n        }
 else {
\n          _this9.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(e));
\n        }
\n      }
);
\n      return valid;
\n    }
\n\n    /**\n     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator=\"foo bar baz\"` in a space separated listed.\n     * @param {
Object}
 $el - jQuery input element.\n     * @param {
String}
 validators - a string of function names matching functions in the Abide.options.validators object.\n     * @param {
Boolean}
 required - self explanatory?\n     * @returns {
Boolean}
 - true if validations passed.\n     */\n  }
, {
\n    key: \"matchValidation\",\n    value: function matchValidation($el, validators, required) {
\n      var _this10 = this;
\n      required = required ? true : false;
\n      var clear = validators.split(' ').map(function (v) {
\n        return _this10.options.validators[v]($el, required, $el.parent());
\n      }
);
\n      return clear.indexOf(false) === -1;
\n    }
\n\n    /**\n     * Resets form inputs and styles\n     * @fires Abide#formreset\n     */\n  }
, {
\n    key: \"resetForm\",\n    value: function resetForm() {
\n      var $form = this.$element,\n        opts = this.options;
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".\".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\".\".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"\".concat(opts.formErrorSelector, \".\").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
\n      $form.find('[data-abide-error]').css('display', 'none');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
\n        'data-invalid': null,\n        'aria-invalid': null\n      }
);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
\n        'data-invalid': null,\n        'aria-invalid': null\n      }
);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
\n        'data-invalid': null,\n        'aria-invalid': null\n      }
);
\n      /**\n       * Fires when the form has been reset.\n       * @event Abide#formreset\n       */\n      $form.trigger('formreset.zf.abide', [$form]);
\n    }
\n\n    /**\n     * Destroys an instance of Abide.\n     * Removes error styles and classes from elements, without resetting their values.\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      var _this = this;
\n      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
\n      this.$inputs.off('.abide').each(function () {
\n        _this.removeErrorClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
\n      }
);
\n      this.$submits.off('.abide');
\n    }
\n  }
]);
\n  return Abide;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\n/**\n * Default settings for plugin\n */\nAbide.defaults = {
\n  /**\n   * The default event to validate inputs. Checkboxes and radios validate immediately.\n   * Remove or change this value for manual validation.\n   * @option\n   * @type {
?string}
\n   * @default 'fieldChange'\n   */\n  validateOn: 'fieldChange',\n  /**\n   * Class to be applied to input labels on failed validation.\n   * @option\n   * @type {
string}
\n   * @default 'is-invalid-label'\n   */\n  labelErrorClass: 'is-invalid-label',\n  /**\n   * Class to be applied to inputs on failed validation.\n   * @option\n   * @type {
string}
\n   * @default 'is-invalid-input'\n   */\n  inputErrorClass: 'is-invalid-input',\n  /**\n   * Class selector to use to target Form Errors for show/hide.\n   * @option\n   * @type {
string}
\n   * @default '.form-error'\n   */\n  formErrorSelector: '.form-error',\n  /**\n   * Class added to Form Errors on failed validation.\n   * @option\n   * @type {
string}
\n   * @default 'is-visible'\n   */\n  formErrorClass: 'is-visible',\n  /**\n   * If true, automatically insert when possible:\n   * - `[aria-describedby]` on fields\n   * - `[role=alert]` on form errors and `[for]` on form error labels\n   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  a11yAttributes: true,\n  /**\n   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.\n   * Options are: 'assertive', 'polite' and 'off'/null\n   * @option\n   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions\n   * @type {
string}
\n   * @default 'assertive'\n   */\n  a11yErrorLevel: 'assertive',\n  /**\n   * Set to true to validate text inputs on any value change.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  liveValidate: false,\n  /**\n   * Set to true to validate inputs on blur.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  validateOnBlur: false,\n  patterns: {
\n    alpha: /^[a-zA-Z]+$/,\n    // eslint-disable-next-line camelcase\n    alpha_numeric: /^[a-zA-Z0-9]+$/,\n    integer: /^[-+]?\\d+$/,\n    number: /^[-+]?\\d*(?:[\\.\\,]\\d+)?$/,\n    // amex, visa, diners\n    card: /^(?:4[0-9]{
12}
(?:[0-9]{
3}
)?|5[1-5][0-9]{
14}
|(?:222[1-9]|2[3-6][0-9]{
2}
|27[0-1][0-9]|2720)[0-9]{
12}
|6(?:011|5[0-9][0-9])[0-9]{
12}
|3[47][0-9]{
13}
|3(?:0[0-5]|[68][0-9])[0-9]{
11}
|(?:2131|1800|35\\d{
3}
)\\d{
11}
)$/,\n    cvv: /^([0-9]){
3,4}
$/,\n    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address\n    email: /^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{
|}
~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{
0,61}
[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{
0,61}
[a-zA-Z0-9])?)+$/,\n    // From CommonRegexJS (@talyssonoc)\n    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76\n    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.\n    url: /^((?:(https?|ftps?|file|ssh|sftp):\\/\\/|www\\d{
0,3}
[.]|[a-z0-9.\\-]+[.][a-z]{
2,4}
\\/)(?:[^\\s()<>]+|\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\))+(?:\\((?:[^\\s()<>]+|(?:\\([^\\s()<>]+\\)))*\\)|[^\\s`!()\\[\\]{
}
;
:\\'\".,<>?\\xab\\xbb\\u201c\\u201d\\u2018\\u2019]))$/,\n    // abc.de\n    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\\-]{
0,61}
[a-zA-Z0-9])?\\.)+[a-zA-Z]{
2,8}
$/,\n    datetime: /^([0-2][0-9]{
3}
)\\-([0-1][0-9])\\-([0-3][0-9])T([0-5][0-9])\\:([0-5][0-9])\\:([0-5][0-9])(Z|([\\-\\+]([0-1][0-9])\\:00))$/,\n    // YYYY-MM-DD\n    date: /(?:19|20)[0-9]{
2}
-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,\n    // HH:MM:SS\n    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){
2}
$/,\n    dateISO: /^\\d{
4}
[\\/\\-]\\d{
1,2}
[\\/\\-]\\d{
1,2}
$/,\n    // MM/DD/YYYY\n    // eslint-disable-next-line camelcase\n    month_day_year: /^(0[1-9]|1[012])[- \\/.](0[1-9]|[12][0-9]|3[01])[- \\/.]\\d{
4}
$/,\n    // DD/MM/YYYY\n    // eslint-disable-next-line camelcase\n    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \\/.](0[1-9]|1[012])[- \\/.]\\d{
4}
$/,\n    // #FFF or #FFFFFF\n    color: /^#?([a-fA-F0-9]{
6}
|[a-fA-F0-9]{
3}
)$/,\n    // Domain || URL\n    website: {
\n      test: function test(text) {
\n        return Abide.defaults.patterns.domain.test(text) || Abide.defaults.patterns.url.test(text);
\n      }
\n    }
\n  }
,\n  /**\n   * Optional validation functions to be used. `equalTo` being the only default included function.\n   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:\n   * el : The jQuery element to validate.\n   * @option\n   */\n  validators: {
\n    equalTo: function equalTo(el) {
\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(el.attr('data-equalto'))).val() === el.val();
\n    }
\n  }
\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.abide.js?");


/***/ }
),

/***/ "./js/foundation.accordion.js":
/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Accordion: function() {
 return /* binding */ Accordion;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n/**\n * Accordion module.\n * @module foundation.accordion\n * @requires foundation.util.keyboard\n */\nvar Accordion = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Accordion, _Plugin);
\n  var _super = _createSuper(Accordion);
\n  function Accordion() {
\n    _classCallCheck(this, Accordion);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Accordion, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of an accordion.\n     * @class\n     * @name Accordion\n     * @fires Accordion#init\n     * @param {
jQuery}
 element - jQuery object to make into an accordion.\n     * @param {
Object}
 options - a plain object with settings to override the default options.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Accordion.defaults, this.$element.data(), options);
\n      this.className = 'Accordion';
 // ie9 back compat\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('Accordion', {
\n        'ENTER': 'toggle',\n        'SPACE': 'toggle',\n        'ARROW_DOWN': 'next',\n        'ARROW_UP': 'previous',\n        'HOME': 'first',\n        'END': 'last'\n      }
);
\n    }
\n\n    /**\n     * Initializes the accordion by animating the preset active pane(s).\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var _this2 = this;
\n      this._isInitializing = true;
\n      this.$tabs = this.$element.children('[data-accordion-item]');
\n      this.$tabs.each(function (idx, el) {
\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el),\n          $content = $el.children('[data-tab-content]'),\n          id = $content[0].id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'accordion'),\n          linkId = el.id ? \"\".concat(el.id, \"-label\") : \"\".concat(id, \"-label\");
\n        $el.find('a:first').attr({
\n          'aria-controls': id,\n          'id': linkId,\n          'aria-expanded': false\n        }
);
\n        $content.attr({
\n          'role': 'region',\n          'aria-labelledby': linkId,\n          'aria-hidden': true,\n          'id': id\n        }
);
\n      }
);
\n      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
\n      if ($initActive.length) {
\n        // Save up the initial hash to return to it later when going back in history\n        this._initialAnchor = $initActive.prev('a').attr('href');
\n        this._openSingleTab($initActive);
\n      }
\n      this._checkDeepLink = function () {
\n        var anchor = window.location.hash;
\n        if (!anchor.length) {
\n          // If we are still initializing and there is no anchor, then there is nothing to do\n          if (_this2._isInitializing) return;
\n          // Otherwise, move to the initial anchor\n          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
\n        }
\n        var $anchor = anchor && jquery__WEBPACK_IMPORTED_MODULE_0___default()(anchor);
\n        var $link = anchor && _this2.$element.find(\"[href$=\\\"\".concat(anchor, \"\\\"]\"));
\n        // Whether the anchor element that has been found is part of this element\n        var isOwnAnchor = !!($anchor.length && $link.length);
\n        if (isOwnAnchor) {
\n          // If there is an anchor for the hash, open it (if not already active)\n          if ($anchor && $link && $link.length) {
\n            if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
\n              _this2._openSingleTab($anchor);
\n            }
\n          }
\n          // Otherwise, close everything\n          else {
\n            _this2._closeAllTabs();
\n          }
\n\n          // Roll up a little to show the titles\n          if (_this2.options.deepLinkSmudge) {
\n            (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
\n              var offset = _this2.$element.offset();
\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
\n                scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset\n              }
, _this2.options.deepLinkSmudgeDelay);
\n            }
);
\n          }
\n\n          /**\n           * Fires when the plugin has deeplinked at pageload\n           * @event Accordion#deeplink\n           */\n          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
\n        }
\n      }
;
\n\n      //use browser to open a tab, if it exists in this tabset\n      if (this.options.deepLink) {
\n        this._checkDeepLink();
\n      }
\n      this._events();
\n      this._isInitializing = false;
\n    }
\n\n    /**\n     * Adds event handlers for items within the accordion.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this;
\n      this.$tabs.each(function () {
\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
\n        var $tabContent = $elem.children('[data-tab-content]');
\n        if ($tabContent.length) {
\n          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
\n            e.preventDefault();
\n            _this.toggle($tabContent);
\n          }
).on('keydown.zf.accordion', function (e) {
\n            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e, 'Accordion', {
\n              toggle: function toggle() {
\n                _this.toggle($tabContent);
\n              }
,\n              next: function next() {
\n                var $a = $elem.next().find('a').focus();
\n                if (!_this.options.multiExpand) {
\n                  $a.trigger('click.zf.accordion');
\n                }
\n              }
,\n              previous: function previous() {
\n                var $a = $elem.prev().find('a').focus();
\n                if (!_this.options.multiExpand) {
\n                  $a.trigger('click.zf.accordion');
\n                }
\n              }
,\n              first: function first() {
\n                var $a = _this.$tabs.first().find('.accordion-title').focus();
\n                if (!_this.options.multiExpand) {
\n                  $a.trigger('click.zf.accordion');
\n                }
\n              }
,\n              last: function last() {
\n                var $a = _this.$tabs.last().find('.accordion-title').focus();
\n                if (!_this.options.multiExpand) {
\n                  $a.trigger('click.zf.accordion');
\n                }
\n              }
,\n              handled: function handled() {
\n                e.preventDefault();
\n              }
\n            }
);
\n          }
);
\n        }
\n      }
);
\n      if (this.options.deepLink) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
\n      }
\n    }
\n\n    /**\n     * Toggles the selected content pane's open/close state.\n     * @param {
jQuery}
 $target - jQuery object of the pane to toggle (`.accordion-content`).\n     * @function\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle($target) {
\n      if ($target.closest('[data-accordion]').is('[disabled]')) {
\n        console.info('Cannot toggle an accordion that is disabled.');
\n        return;
\n      }
\n      if ($target.parent().hasClass('is-active')) {
\n        this.up($target);
\n      }
 else {
\n        this.down($target);
\n      }
\n      //either replace or update browser history\n      if (this.options.deepLink) {
\n        var anchor = $target.prev('a').attr('href');
\n        if (this.options.updateHistory) {
\n          history.pushState({
}
, '', anchor);
\n        }
 else {
\n          history.replaceState({
}
, '', anchor);
\n        }
\n      }
\n    }
\n\n    /**\n     * Opens the accordion tab defined by `$target`.\n     * @param {
jQuery}
 $target - Accordion pane to open (`.accordion-content`).\n     * @fires Accordion#down\n     * @function\n     */\n  }
, {
\n    key: \"down\",\n    value: function down($target) {
\n      if ($target.closest('[data-accordion]').is('[disabled]')) {
\n        console.info('Cannot call down on an accordion that is disabled.');
\n        return;
\n      }
\n      if (this.options.multiExpand) this._openTab($target);
else this._openSingleTab($target);
\n    }
\n\n    /**\n     * Closes the tab defined by `$target`.\n     * It may be ignored if the Accordion options don't allow it.\n     *\n     * @param {
jQuery}
 $target - Accordion tab to close (`.accordion-content`).\n     * @fires Accordion#up\n     * @function\n     */\n  }
, {
\n    key: \"up\",\n    value: function up($target) {
\n      if (this.$element.is('[disabled]')) {
\n        console.info('Cannot call up on an accordion that is disabled.');
\n        return;
\n      }
\n\n      // Don't close the item if it is already closed\n      var $targetItem = $target.parent();
\n      if (!$targetItem.hasClass('is-active')) return;
\n\n      // Don't close the item if there is no other active item (unless with `allowAllClosed`)\n      var $othersItems = $targetItem.siblings();
\n      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;
\n      this._closeTab($target);
\n    }
\n\n    /**\n     * Make the tab defined by `$target` the only opened tab, closing all others tabs.\n     * @param {
jQuery}
 $target - Accordion tab to open (`.accordion-content`).\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_openSingleTab\",\n    value: function _openSingleTab($target) {
\n      // Close all the others active tabs.\n      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');
\n      if ($activeContents.length) {
\n        this._closeTab($activeContents.not($target));
\n      }
\n\n      // Then open the target.\n      this._openTab($target);
\n    }
\n\n    /**\n     * Opens the tab defined by `$target`.\n     * @param {
jQuery}
 $target - Accordion tab to open (`.accordion-content`).\n     * @fires Accordion#down\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_openTab\",\n    value: function _openTab($target) {
\n      var _this3 = this;
\n      var $targetItem = $target.parent();
\n      var targetContentId = $target.attr('aria-labelledby');
\n      $target.attr('aria-hidden', false);
\n      $targetItem.addClass('is-active');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetContentId)).attr({
\n        'aria-expanded': true\n      }
);
\n      $target.finish().slideDown(this.options.slideSpeed, function () {
\n        /**\n         * Fires when the tab is done opening.\n         * @event Accordion#down\n         */\n        _this3.$element.trigger('down.zf.accordion', [$target]);
\n      }
);
\n    }
\n\n    /**\n     * Closes the tab defined by `$target`.\n     * @param {
jQuery}
 $target - Accordion tab to close (`.accordion-content`).\n     * @fires Accordion#up\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_closeTab\",\n    value: function _closeTab($target) {
\n      var _this4 = this;
\n      var $targetItem = $target.parent();
\n      var targetContentId = $target.attr('aria-labelledby');
\n      $target.attr('aria-hidden', true);
\n      $targetItem.removeClass('is-active');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetContentId)).attr({
\n        'aria-expanded': false\n      }
);
\n      $target.finish().slideUp(this.options.slideSpeed, function () {
\n        /**\n         * Fires when the tab is done collapsing up.\n         * @event Accordion#up\n         */\n        _this4.$element.trigger('up.zf.accordion', [$target]);
\n      }
);
\n    }
\n\n    /**\n     * Closes all active tabs\n     * @fires Accordion#up\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_closeAllTabs\",\n    value: function _closeAllTabs() {
\n      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');
\n      if ($activeTabs.length) {
\n        this._closeTab($activeTabs);
\n      }
\n    }
\n\n    /**\n     * Destroys an instance of an accordion.\n     * @fires Accordion#destroyed\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
\n      this.$element.find('a').off('.zf.accordion');
\n      if (this.options.deepLink) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
\n      }
\n    }
\n  }
]);
\n  return Accordion;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\nAccordion.defaults = {
\n  /**\n   * Amount of time to animate the opening of an accordion pane.\n   * @option\n   * @type {
number}
\n   * @default 250\n   */\n  slideSpeed: 250,\n  /**\n   * Allow the accordion to have multiple open panes.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  multiExpand: false,\n  /**\n   * Allow the accordion to close all panes.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  allowAllClosed: false,\n  /**\n   * Link the location hash to the open pane.\n   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  deepLink: false,\n  /**\n   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  deepLinkSmudge: false,\n  /**\n   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment\n   * @option\n   * @type {
number}
\n   * @default 300\n   */\n  deepLinkSmudgeDelay: 300,\n  /**\n   * If `deepLinkSmudge` is enabled, the offset for scrollToTtop to prevent overlap by a sticky element at the top of the page\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  deepLinkSmudgeOffset: 0,\n  /**\n   * If `deepLink` is enabled, update the browser history with the open accordion\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  updateHistory: false\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.accordion.js?");


/***/ }
),

/***/ "./js/foundation.accordionMenu.js":
/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   AccordionMenu: function() {
 return /* binding */ AccordionMenu;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n/**\n * AccordionMenu module.\n * @module foundation.accordionMenu\n * @requires foundation.util.keyboard\n * @requires foundation.util.nest\n */\nvar AccordionMenu = /*#__PURE__*/function (_Plugin) {
\n  _inherits(AccordionMenu, _Plugin);
\n  var _super = _createSuper(AccordionMenu);
\n  function AccordionMenu() {
\n    _classCallCheck(this, AccordionMenu);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(AccordionMenu, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of an accordion menu.\n     * @class\n     * @name AccordionMenu\n     * @fires AccordionMenu#init\n     * @param {
jQuery}
 element - jQuery object to make into an accordion menu.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, AccordionMenu.defaults, this.$element.data(), options);
\n      this.className = 'AccordionMenu';
 // ie9 back compat\n\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('AccordionMenu', {
\n        'ENTER': 'toggle',\n        'SPACE': 'toggle',\n        'ARROW_RIGHT': 'open',\n        'ARROW_UP': 'up',\n        'ARROW_DOWN': 'down',\n        'ARROW_LEFT': 'close',\n        'ESCAPE': 'closeAll'\n      }
);
\n    }
\n\n    /**\n     * Initializes the accordion menu by hiding all nested menus.\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Feather(this.$element, 'accordion');
\n      var _this = this;
\n      this.$element.find('[data-submenu]').not('.is-active').slideUp(0);
 //.find('a').css('padding-left', '1rem');
\n      this.$element.attr({
\n        'aria-multiselectable': this.options.multiOpen\n      }
);
\n      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
\n      this.$menuLinks.each(function () {
\n        var linkId = this.id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6, 'acc-menu-link'),\n          $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $sub = $elem.children('[data-submenu]'),\n          subId = $sub[0].id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6, 'acc-menu'),\n          isActive = $sub.hasClass('is-active');
\n        if (_this.options.parentLink) {
\n          var $anchor = $elem.children('a');
\n          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class=\"is-submenu-parent-item is-submenu-item is-accordion-submenu-item\"></li>');
\n        }
\n        if (_this.options.submenuToggle) {
\n          $elem.addClass('has-submenu-toggle');
\n          $elem.children('a').after('<button id=\"' + linkId + '\" class=\"submenu-toggle\" aria-controls=\"' + subId + '\" aria-expanded=\"' + isActive + '\" title=\"' + _this.options.submenuToggleText + '\"><span class=\"submenu-toggle-text\">' + _this.options.submenuToggleText + '</span></button>');
\n        }
 else {
\n          $elem.attr({
\n            'aria-controls': subId,\n            'aria-expanded': isActive,\n            'id': linkId\n          }
);
\n        }
\n        $sub.attr({
\n          'aria-labelledby': linkId,\n          'aria-hidden': !isActive,\n          'role': 'group',\n          'id': subId\n        }
);
\n      }
);
\n      var initPanes = this.$element.find('.is-active');
\n      if (initPanes.length) {
\n        initPanes.each(function () {
\n          _this.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
\n        }
);
\n      }
\n      this._events();
\n    }
\n\n    /**\n     * Adds event handlers for items within the menu.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this;
\n      this.$element.find('li').each(function () {
\n        var $submenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]');
\n        if ($submenu.length) {
\n          if (_this.options.submenuToggle) {
\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function () {
\n              _this.toggle($submenu);
\n            }
);
\n          }
 else {
\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
\n              e.preventDefault();
\n              _this.toggle($submenu);
\n            }
);
\n          }
\n        }
\n      }
).on('keydown.zf.accordionMenu', function (e) {
\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $elements = $element.parent('ul').children('li'),\n          $prevElement,\n          $nextElement,\n          $target = $element.children('[data-submenu]');
\n        $elements.each(function (i) {
\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
\n            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
\n            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();
\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('[data-submenu]:visible').length) {
\n              // has open sub menu\n              $nextElement = $element.find('li:first-child').find('a').first();
\n            }
\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':first-child')) {
\n              // is first element of sub menu\n              $prevElement = $element.parents('li').first().find('a').first();
\n            }
 else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
\n              // if previous element has open sub menu\n              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
\n            }
\n            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':last-child')) {
\n              // is last element of sub menu\n              $nextElement = $element.parents('li').first().next('li').find('a').first();
\n            }
\n            return;
\n          }
\n        }
);
\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e, 'AccordionMenu', {
\n          open: function open() {
\n            if ($target.is(':hidden')) {
\n              _this.down($target);
\n              $target.find('li').first().find('a').first().focus();
\n            }
\n          }
,\n          close: function close() {
\n            if ($target.length && !$target.is(':hidden')) {
\n              // close active sub of this item\n              _this.up($target);
\n            }
 else if ($element.parent('[data-submenu]').length) {
\n              // close currently open sub\n              _this.up($element.parent('[data-submenu]'));
\n              $element.parents('li').first().find('a').first().focus();
\n            }
\n          }
,\n          up: function up() {
\n            $prevElement.focus();
\n            return true;
\n          }
,\n          down: function down() {
\n            $nextElement.focus();
\n            return true;
\n          }
,\n          toggle: function toggle() {
\n            if (_this.options.submenuToggle) {
\n              return false;
\n            }
\n            if ($element.children('[data-submenu]').length) {
\n              _this.toggle($element.children('[data-submenu]'));
\n              return true;
\n            }
\n          }
,\n          closeAll: function closeAll() {
\n            _this.hideAll();
\n          }
,\n          handled: function handled(preventDefault) {
\n            if (preventDefault) {
\n              e.preventDefault();
\n            }
\n          }
\n        }
);
\n      }
);
 //.attr('tabindex', 0);
\n    }
\n\n    /**\n     * Closes all panes of the menu.\n     * @function\n     */\n  }
, {
\n    key: \"hideAll\",\n    value: function hideAll() {
\n      this.up(this.$element.find('[data-submenu]'));
\n    }
\n\n    /**\n     * Opens all panes of the menu.\n     * @function\n     */\n  }
, {
\n    key: \"showAll\",\n    value: function showAll() {
\n      this.down(this.$element.find('[data-submenu]'));
\n    }
\n\n    /**\n     * Toggles the open/close state of a submenu.\n     * @function\n     * @param {
jQuery}
 $target - the submenu to toggle\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle($target) {
\n      if (!$target.is(':animated')) {
\n        if (!$target.is(':hidden')) {
\n          this.up($target);
\n        }
 else {
\n          this.down($target);
\n        }
\n      }
\n    }
\n\n    /**\n     * Opens the sub-menu defined by `$target`.\n     * @param {
jQuery}
 $target - Sub-menu to open.\n     * @fires AccordionMenu#down\n     */\n  }
, {
\n    key: \"down\",\n    value: function down($target) {
\n      var _this2 = this;
\n      // If having multiple submenus active is disabled, close all the submenus\n      // that are not parents or children of the targeted submenu.\n      if (!this.options.multiOpen) {
\n        // The \"branch\" of the targetted submenu, from the component root to\n        // the active submenus nested in it.\n        var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find('.is-active'));
\n        // All the active submenus that are not in the branch.\n        var $othersActiveSubmenus = this.$element.find('.is-active').not($targetBranch);
\n        this.up($othersActiveSubmenus);
\n      }
\n      $target.addClass('is-active').attr({
\n        'aria-hidden': false\n      }
);
\n      if (this.options.submenuToggle) {
\n        $target.prev('.submenu-toggle').attr({
\n          'aria-expanded': true\n        }
);
\n      }
 else {
\n        $target.parent('.is-accordion-submenu-parent').attr({
\n          'aria-expanded': true\n        }
);
\n      }
\n      $target.slideDown(this.options.slideSpeed, function () {
\n        /**\n         * Fires when the menu is done opening.\n         * @event AccordionMenu#down\n         */\n        _this2.$element.trigger('down.zf.accordionMenu', [$target]);
\n      }
);
\n    }
\n\n    /**\n     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.\n     * @param {
jQuery}
 $target - Sub-menu to close.\n     * @fires AccordionMenu#up\n     */\n  }
, {
\n    key: \"up\",\n    value: function up($target) {
\n      var _this3 = this;
\n      var $submenus = $target.find('[data-submenu]');
\n      var $allmenus = $target.add($submenus);
\n      $submenus.slideUp(0);
\n      $allmenus.removeClass('is-active').attr('aria-hidden', true);
\n      if (this.options.submenuToggle) {
\n        $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
\n      }
 else {
\n        $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
\n      }
\n      $target.slideUp(this.options.slideSpeed, function () {
\n        /**\n         * Fires when the menu is done collapsing up.\n         * @event AccordionMenu#up\n         */\n        _this3.$element.trigger('up.zf.accordionMenu', [$target]);
\n      }
);
\n    }
\n\n    /**\n     * Destroys an instance of accordion menu.\n     * @fires AccordionMenu#destroyed\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
\n      this.$element.find('a').off('click.zf.accordionMenu');
\n      this.$element.find('[data-is-parent-link]').detach();
\n      if (this.options.submenuToggle) {
\n        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
\n        this.$element.find('.submenu-toggle').remove();
\n      }
\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Burn(this.$element, 'accordion');
\n    }
\n  }
]);
\n  return AccordionMenu;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__.Plugin);
\nAccordionMenu.defaults = {
\n  /**\n   * Adds the parent link to the submenu.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  parentLink: false,\n  /**\n   * Amount of time to animate the opening of a submenu in ms.\n   * @option\n   * @type {
number}
\n   * @default 250\n   */\n  slideSpeed: 250,\n  /**\n   * Adds a separate submenu toggle button. This allows the parent item to have a link.\n   * @option\n   * @example true\n   */\n  submenuToggle: false,\n  /**\n   * The text used for the submenu toggle if enabled. This is used for screen readers only.\n   * @option\n   * @example true\n   */\n  submenuToggleText: 'Toggle menu',\n  /**\n   * Allow the menu to have multiple open panes.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  multiOpen: true\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.accordionMenu.js?");


/***/ }
),

/***/ "./js/foundation.core.js":
/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Foundation: function() {
 return /* binding */ Foundation;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\n\n\n\nvar FOUNDATION_VERSION = '6.8.0';
\n\n// Global Foundation object\n// This is attached to the window, or used as a module for AMD/Browserify\nvar Foundation = {
\n  version: FOUNDATION_VERSION,\n  /**\n   * Stores initialized plugins.\n   */\n  _plugins: {
}
,\n  /**\n   * Stores generated unique ids for plugin instances\n   */\n  _uuids: [],\n  /**\n   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.\n   * @param {
Object}
 plugin - The constructor of the plugin.\n   */\n  plugin: function plugin(_plugin, name) {
\n    // Object key to use when adding to global Foundation object\n    // Examples: Foundation.Reveal, Foundation.OffCanvas\n    var className = name || functionName(_plugin);
\n    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin\n    // Examples: data-reveal, data-off-canvas\n    var attrName = hyphenate(className);
\n\n    // Add to the Foundation object and the plugins list (for reflowing)\n    this._plugins[attrName] = this[className] = _plugin;
\n  }
,\n  /**\n   * @function\n   * Populates the _uuids array with pointers to each individual plugin instance.\n   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.\n   * Also fires the initialization event for each plugin, consolidating repetitive code.\n   * @param {
Object}
 plugin - an instance of a plugin, usually `this` in context.\n   * @param {
String}
 name - the name of the plugin, passed as a camelCased string.\n   * @fires Plugin#init\n   */\n  registerPlugin: function registerPlugin(plugin, name) {
\n    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
\n    plugin.uuid = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.GetYoDigits)(6, pluginName);
\n    if (!plugin.$element.attr(\"data-\".concat(pluginName))) {
\n      plugin.$element.attr(\"data-\".concat(pluginName), plugin.uuid);
\n    }
\n    if (!plugin.$element.data('zfPlugin')) {
\n      plugin.$element.data('zfPlugin', plugin);
\n    }
\n    /**\n     * Fires when the plugin has initialized.\n     * @event Plugin#init\n     */\n    plugin.$element.trigger(\"init.zf.\".concat(pluginName));
\n    this._uuids.push(plugin.uuid);
\n    return;
\n  }
,\n  /**\n   * @function\n   * Removes the plugins uuid from the _uuids array.\n   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.\n   * Also fires the destroyed event for the plugin, consolidating repetitive code.\n   * @param {
Object}
 plugin - an instance of a plugin, usually `this` in context.\n   * @fires Plugin#destroyed\n   */\n  unregisterPlugin: function unregisterPlugin(plugin) {
\n    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));
\n    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
\n    plugin.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')\n    /**\n     * Fires when the plugin has been destroyed.\n     * @event Plugin#destroyed\n     */.trigger(\"destroyed.zf.\".concat(pluginName));
\n    for (var prop in plugin) {
\n      if (typeof plugin[prop] === 'function') {
\n        plugin[prop] = null;
 //clean up script to prep for garbage collection.\n      }
\n    }
\n\n    return;
\n  }
,\n  /**\n   * @function\n   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.\n   * @param {
String}
 plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`\n   * @default If no argument is passed, reflow all currently active plugins.\n   */\n  reInit: function reInit(plugins) {
\n    var isJQ = plugins instanceof (jquery__WEBPACK_IMPORTED_MODULE_0___default());
\n    try {
\n      if (isJQ) {
\n        plugins.each(function () {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('zfPlugin')._init();
\n        }
);
\n      }
 else {
\n        var type = _typeof(plugins),\n          _this = this,\n          fns = {
\n            'object': function object(plgs) {
\n              plgs.forEach(function (p) {
\n                p = hyphenate(p);
\n                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + p + ']').foundation('_init');
\n              }
);
\n            }
,\n            'string': function string() {
\n              plugins = hyphenate(plugins);
\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-' + plugins + ']').foundation('_init');
\n            }
,\n            'undefined': function undefined() {
\n              this.object(Object.keys(_this._plugins));
\n            }
\n          }
;
\n        fns[type](plugins);
\n      }
\n    }
 catch (err) {
\n      console.error(err);
\n    }
 finally {
\n      return plugins;
\n    }
\n  }
,\n  /**\n   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.\n   * @param {
Object}
 elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.\n   * @param {
String|Array}
 plugins - A list of plugins to initialize. Leave this out to initialize everything.\n   */\n  reflow: function reflow(elem, plugins) {
\n    // If plugins is undefined, just grab everything\n    if (typeof plugins === 'undefined') {
\n      plugins = Object.keys(this._plugins);
\n    }
\n    // If plugins is a string, convert it to an array with one item\n    else if (typeof plugins === 'string') {
\n      plugins = [plugins];
\n    }
\n    var _this = this;
\n\n    // Iterate through each plugin\n    jquery__WEBPACK_IMPORTED_MODULE_0___default().each(plugins, function (i, name) {
\n      // Get the current plugin\n      var plugin = _this._plugins[name];
\n\n      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document\n      var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elem).find('[data-' + name + ']').addBack('[data-' + name + ']').filter(function () {
\n        return typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(\"zfPlugin\") === 'undefined';
\n      }
);
\n\n      // For each plugin found, initialize it\n      $elem.each(function () {
\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          opts = {
\n            reflow: true\n          }
;
\n        if ($el.attr('data-options')) {
\n          $el.attr('data-options').split(';
').forEach(function (option) {
\n            var opt = option.split(':').map(function (el) {
\n              return el.trim();
\n            }
);
\n            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
\n          }
);
\n        }
\n        try {
\n          $el.data('zfPlugin', new plugin(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), opts));
\n        }
 catch (er) {
\n          console.error(er);
\n        }
 finally {
\n          return;
\n        }
\n      }
);
\n    }
);
\n  }
,\n  getFnName: functionName,\n  addToJquery: function addToJquery() {
\n    // TODO: consider not making this a jQuery function\n    // TODO: need way to reflow vs. re-initialize\n    /**\n     * The Foundation jQuery method.\n     * @param {
String|Array}
 method - An action to perform on the current jQuery object.\n     */\n    var foundation = function foundation(method) {
\n      var type = _typeof(method),\n        $noJS = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.no-js');
\n      if ($noJS.length) {
\n        $noJS.removeClass('no-js');
\n      }
\n      if (type === 'undefined') {
\n        //needs to initialize the Foundation object, or an individual plugin.\n        _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__.MediaQuery._init();
\n        Foundation.reflow(this);
\n      }
 else if (type === 'string') {
\n        //an individual method to invoke on a plugin or group of plugins\n        var args = Array.prototype.slice.call(arguments, 1);
 //collect all the arguments, if necessary\n        var plugClass = this.data('zfPlugin');
 //determine the class of plugin\n\n        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
\n          //make sure both the class and method exist\n          if (this.length === 1) {
\n            //if there's only one, call it directly.\n            plugClass[method].apply(plugClass, args);
\n          }
 else {
\n            this.each(function (i, el) {
\n              //otherwise loop through the jQuery collection and invoke the method on each\n              plugClass[method].apply(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).data('zfPlugin'), args);
\n            }
);
\n          }
\n        }
 else {
\n          //error for no class or no method\n          throw new ReferenceError(\"We're sorry, '\" + method + \"' is not an available method for \" + (plugClass ? functionName(plugClass) : 'this element') + '.');
\n        }
\n      }
 else {
\n        //error for invalid argument type\n        throw new TypeError(\"We're sorry, \".concat(type, \" is not a valid parameter. You must use a string representing the method you wish to invoke.\"));
\n      }
\n      return this;
\n    }
;
\n    (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn).foundation = foundation;
\n    return (jquery__WEBPACK_IMPORTED_MODULE_0___default());
\n  }
\n}
;
\nFoundation.util = {
\n  /**\n   * Function for applying a debounce effect to a function call.\n   * @function\n   * @param {
Function}
 func - Function to be called at end of timeout.\n   * @param {
Number}
 delay - Time in ms to delay the call of `func`.\n   * @returns function\n   */\n  throttle: function throttle(func, delay) {
\n    var timer = null;
\n    return function () {
\n      var context = this,\n        args = arguments;
\n      if (timer === null) {
\n        timer = setTimeout(function () {
\n          func.apply(context, args);
\n          timer = null;
\n        }
, delay);
\n      }
\n    }
;
\n  }
\n}
;
\nwindow.Foundation = Foundation;
\n\n// Polyfill for requestAnimationFrame\n(function () {
\n  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
\n    return new Date().getTime();
\n  }
;
\n  var vendors = ['webkit', 'moz'];
\n  for (var i = 0;
 i < vendors.length && !window.requestAnimationFrame;
 ++i) {
\n    var vp = vendors[i];
\n    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
\n    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
\n  }
\n  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
\n    var lastTime = 0;
\n    window.requestAnimationFrame = function (callback) {
\n      var now = Date.now();
\n      var nextTime = Math.max(lastTime + 16, now);
\n      return setTimeout(function () {
\n        callback(lastTime = nextTime);
\n      }
, nextTime - now);
\n    }
;
\n    window.cancelAnimationFrame = clearTimeout;
\n  }
\n  /**\n   * Polyfill for performance.now, required by rAF\n   */\n  if (!window.performance || !window.performance.now) {
\n    window.performance = {
\n      start: Date.now(),\n      now: function now() {
\n        return Date.now() - this.start;
\n      }
\n    }
;
\n  }
\n}
)();
\nif (!Function.prototype.bind) {
\n  /* eslint-disable no-extend-native */\n  Function.prototype.bind = function (oThis) {
\n    if (typeof this !== 'function') {
\n      // closest thing possible to the ECMAScript 5\n      // internal IsCallable function\n      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
\n    }
\n    var aArgs = Array.prototype.slice.call(arguments, 1),\n      fToBind = this,\n      fNOP = function fNOP() {
}
,\n      fBound = function fBound() {
\n        return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
\n      }
;
\n    if (this.prototype) {
\n      // native functions don't have a prototype\n      fNOP.prototype = this.prototype;
\n    }
\n    fBound.prototype = new fNOP();
\n    return fBound;
\n  }
;
\n}
\n// Polyfill to get the name of a function in IE9\nfunction functionName(fn) {
\n  if (typeof Function.prototype.name === 'undefined') {
\n    var funcNameRegex = /function\\s([^(]{
1,}
)\\(/;
\n    var results = funcNameRegex.exec(fn.toString());
\n    return results && results.length > 1 ? results[1].trim() : \"\";
\n  }
 else if (typeof fn.prototype === 'undefined') {
\n    return fn.constructor.name;
\n  }
 else {
\n    return fn.prototype.constructor.name;
\n  }
\n}
\nfunction parseValue(str) {
\n  if ('true' === str) return true;
else if ('false' === str) return false;
else if (!isNaN(str * 1)) return parseFloat(str);
\n  return str;
\n}
\n// Convert PascalCase to kebab-case\n// Thank you: http://stackoverflow.com/a/8955580\nfunction hyphenate(str) {
\n  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.core.js?");


/***/ }
),

/***/ "./js/foundation.core.plugin.js":
/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Plugin: function() {
 return /* binding */ Plugin;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\n\n\n// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST\n// {
function}
 _setup (replaces previous constructor),\n// {
function}
 _destroy (replaces previous destroy)\nvar Plugin = /*#__PURE__*/function () {
\n  function Plugin(element, options) {
\n    _classCallCheck(this, Plugin);
\n    this._setup(element, options);
\n    var pluginName = getPluginName(this);
\n    this.uuid = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_0__.GetYoDigits)(6, pluginName);
\n    if (!this.$element.attr(\"data-\".concat(pluginName))) {
\n      this.$element.attr(\"data-\".concat(pluginName), this.uuid);
\n    }
\n    if (!this.$element.data('zfPlugin')) {
\n      this.$element.data('zfPlugin', this);
\n    }
\n    /**\n     * Fires when the plugin has initialized.\n     * @event Plugin#init\n     */\n    this.$element.trigger(\"init.zf.\".concat(pluginName));
\n  }
\n  _createClass(Plugin, [{
\n    key: \"destroy\",\n    value: function destroy() {
\n      this._destroy();
\n      var pluginName = getPluginName(this);
\n      this.$element.removeAttr(\"data-\".concat(pluginName)).removeData('zfPlugin')\n      /**\n       * Fires when the plugin has been destroyed.\n       * @event Plugin#destroyed\n       */.trigger(\"destroyed.zf.\".concat(pluginName));
\n      for (var prop in this) {
\n        if (this.hasOwnProperty(prop)) {
\n          this[prop] = null;
 //clean up script to prep for garbage collection.\n        }
\n      }
\n    }
\n  }
]);
\n  return Plugin;
\n}
();
 // Convert PascalCase to kebab-case\n// Thank you: http://stackoverflow.com/a/8955580\nfunction hyphenate(str) {
\n  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
\n}
\nfunction getPluginName(obj) {
\n  return hyphenate(obj.className);
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.core.plugin.js?");


/***/ }
),

/***/ "./js/foundation.core.utils.js":
/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   GetYoDigits: function() {
 return /* binding */ GetYoDigits;
 }
,\n/* harmony export */   RegExpEscape: function() {
 return /* binding */ RegExpEscape;
 }
,\n/* harmony export */   ignoreMousedisappear: function() {
 return /* binding */ ignoreMousedisappear;
 }
,\n/* harmony export */   onLoad: function() {
 return /* binding */ onLoad;
 }
,\n/* harmony export */   rtl: function() {
 return /* binding */ rtl;
 }
,\n/* harmony export */   transitionend: function() {
 return /* binding */ transitionend;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n\n\n// Core Foundation Utilities, utilized in a number of places.\n\n/**\n * Returns a boolean for RTL support\n */\nfunction rtl() {
\n  return jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').attr('dir') === 'rtl';
\n}
\n\n/**\n * returns a random base-36 uid with namespacing\n * @function\n * @param {
Number}
 length - number of random base-36 digits desired. Increase for more random strings.\n * @param {
String}
 namespace - name of plugin to be incorporated in uid, optional.\n * @default {
String}
 '' - if no plugin name is provided, nothing is appended to the uid.\n * @returns {
String}
 - unique id\n */\nfunction GetYoDigits() {
\n  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
\n  var namespace = arguments.length > 1 ? arguments[1] : undefined;
\n  var str = '';
\n  var chars = '0123456789abcdefghijklmnopqrstuvwxyz';
\n  var charsLength = chars.length;
\n  for (var i = 0;
 i < length;
 i++) {
\n    str += chars[Math.floor(Math.random() * charsLength)];
\n  }
\n  return namespace ? \"\".concat(str, \"-\").concat(namespace) : str;
\n}
\n\n/**\n * Escape a string so it can be used as a regexp pattern\n * @function\n * @see https://stackoverflow.com/a/9310752/4317384\n *\n * @param {
String}
 str - string to escape.\n * @returns {
String}
 - escaped string\n */\nfunction RegExpEscape(str) {
\n  return str.replace(/[-[\\]{
}
()*+?.,\\\\^$|#\\s]/g, '\\\\$&');
\n}
\nfunction transitionend($elem) {
\n  var transitions = {
\n    'transition': 'transitionend',\n    'WebkitTransition': 'webkitTransitionEnd',\n    'MozTransition': 'transitionend',\n    'OTransition': 'otransitionend'\n  }
;
\n  var elem = document.createElement('div'),\n    end;
\n  for (var transition in transitions) {
\n    if (typeof elem.style[transition] !== 'undefined') {
\n      end = transitions[transition];
\n    }
\n  }
\n  if (end) {
\n    return end;
\n  }
 else {
\n    setTimeout(function () {
\n      $elem.triggerHandler('transitionend', [$elem]);
\n    }
, 1);
\n    return 'transitionend';
\n  }
\n}
\n\n/**\n * Return an event type to listen for window load.\n *\n * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.\n * If `handler` is passed, attach it to the event on `$elem`.\n * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.\n * @function\n *\n * @param {
Object}
 [] $elem - jQuery element on which the event will be triggered if passed.\n * @param {
Function}
 [] handler - function to attach to the event.\n * @returns {
String}
 - event type that should or will be triggered.\n */\nfunction onLoad($elem, handler) {
\n  var didLoad = document.readyState === 'complete';
\n  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';
\n  var cb = function cb() {
\n    return $elem.triggerHandler(eventType);
\n  }
;
\n  if ($elem) {
\n    if (handler) $elem.one(eventType, handler);
\n    if (didLoad) setTimeout(cb);
else jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', cb);
\n  }
\n  return eventType;
\n}
\n\n/**\n * Retuns an handler for the `mouseleave` that ignore disappeared mouses.\n *\n * If the mouse \"disappeared\" from the document (like when going on a browser UI element, See https://git.io/zf-11410),\n * the event is ignored.\n * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window\n *   (like by switching to an other window with [Alt]+[Tab]).\n * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document\n *   outside of the element it left.\n *\n * @function\n *\n * @param {
Function}
 [] handler - handler for the filtered `mouseleave` event to watch.\n * @param {
Object}
 [] options - object of options:\n * - {
Boolean}
 [false] ignoreLeaveWindow - also ignore when the user switched windows.\n * - {
Boolean}
 [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.\n * @returns {
Function}
 - filtered handler to use to listen on the `mouseleave` event.\n */\nfunction ignoreMousedisappear(handler) {
\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
}
,\n    _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,\n    ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,\n    _ref$ignoreReappear = _ref.ignoreReappear,\n    ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;
\n  return function leaveEventHandler(eLeave) {
\n    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
 _key < _len;
 _key++) {
\n      rest[_key - 1] = arguments[_key];
\n    }
\n    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest));
\n\n    // The mouse left: call the given callback if the mouse entered elsewhere\n    if (eLeave.relatedTarget !== null) {
\n      return callback();
\n    }
\n\n    // Otherwise, check if the mouse actually left the window.\n    // In firefox if the user switched between windows, the window sill have the focus by the time\n    // the event is triggered. We have to debounce the event to test this case.\n    setTimeout(function leaveEventDebouncer() {
\n      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
\n        return callback();
\n      }
\n\n      // Otherwise, wait for the mouse to reeapear outside of the element,\n      if (!ignoreReappear) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).one('mouseenter', function reenterEventHandler(eReenter) {
\n          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(eLeave.currentTarget).has(eReenter.target).length) {
\n            // Fill where the mouse finally entered.\n            eLeave.relatedTarget = eReenter.target;
\n            callback();
\n          }
\n        }
);
\n      }
\n    }
, 0);
\n  }
;
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.core.utils.js?");


/***/ }
),

/***/ "./js/foundation.drilldown.js":
/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Drilldown: function() {
 return /* binding */ Drilldown;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n/**\n * Drilldown module.\n * @module foundation.drilldown\n * @requires foundation.util.keyboard\n * @requires foundation.util.nest\n * @requires foundation.util.box\n */\nvar Drilldown = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Drilldown, _Plugin);
\n  var _super = _createSuper(Drilldown);
\n  function Drilldown() {
\n    _classCallCheck(this, Drilldown);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Drilldown, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of a drilldown menu.\n     * @class\n     * @name Drilldown\n     * @param {
jQuery}
 element - jQuery object to make into an accordion menu.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Drilldown.defaults, this.$element.data(), options);
\n      this.className = 'Drilldown';
 // ie9 back compat\n\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Drilldown', {
\n        'ENTER': 'open',\n        'SPACE': 'open',\n        'ARROW_RIGHT': 'next',\n        'ARROW_UP': 'up',\n        'ARROW_DOWN': 'down',\n        'ARROW_LEFT': 'previous',\n        'ESCAPE': 'close'\n      }
);
\n    }
\n\n    /**\n     * Initializes the drilldown by creating jQuery collections of elements\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Feather(this.$element, 'drilldown');
\n      if (this.options.autoApplyClass) {
\n        this.$element.addClass('drilldown');
\n      }
\n      this.$element.attr({
\n        'aria-multiselectable': false\n      }
);
\n      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
\n      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
\n      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').find('a');
\n\n      // Set the main menu as current by default (unless a submenu is selected)\n      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu\n      this.$currentMenu = this.$element;
\n      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6, 'drilldown'));
\n      this._prepareMenu();
\n      this._registerEvents();
\n      this._keyboardEvents();
\n    }
\n\n    /**\n     * prepares drilldown menu by setting attributes to links and elements\n     * sets a min height to prevent content jumping\n     * wraps the element if not already wrapped\n     * @private\n     * @function\n     */\n  }
, {
\n    key: \"_prepareMenu\",\n    value: function _prepareMenu() {
\n      var _this = this;
\n      // if(!this.options.holdOpen){
\n      //   this._menuLinkEvents();
\n      // }
\n      this.$submenuAnchors.each(function () {
\n        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
\n        var $sub = $link.parent();
\n        if (_this.options.parentLink) {
\n          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class=\"is-submenu-parent-item is-submenu-item is-drilldown-submenu-item\" role=\"none\"></li>');
\n        }
\n        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
\n        $link.children('[data-submenu]').attr({
\n          'aria-hidden': true,\n          'tabindex': 0,\n          'role': 'group'\n        }
);
\n        _this._events($link);
\n      }
);
\n      this.$submenus.each(function () {
\n        var $menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $back = $menu.find('.js-drilldown-back');
\n        if (!$back.length) {
\n          switch (_this.options.backButtonPosition) {
\n            case \"bottom\":\n              $menu.append(_this.options.backButton);
\n              break;
\n            case \"top\":\n              $menu.prepend(_this.options.backButton);
\n              break;
\n            default:\n              console.error(\"Unsupported backButtonPosition value '\" + _this.options.backButtonPosition + \"'\");
\n          }
\n        }
\n        _this._back($menu);
\n      }
);
\n      this.$submenus.addClass('invisible');
\n      if (!this.options.autoHeight) {
\n        this.$submenus.addClass('drilldown-submenu-cover-previous');
\n      }
\n\n      // create a wrapper on element if it doesn't exist.\n      if (!this.$element.parent().hasClass('is-drilldown')) {
\n        this.$wrapper = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.wrapper).addClass('is-drilldown');
\n        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
\n        this.$element.wrap(this.$wrapper);
\n      }
\n      // set wrapper\n      this.$wrapper = this.$element.parent();
\n      this.$wrapper.css(this._getMaxDims());
\n    }
\n  }
, {
\n    key: \"_resize\",\n    value: function _resize() {
\n      this.$wrapper.css({
\n        'max-width': 'none',\n        'min-height': 'none'\n      }
);
\n      // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths\n      this.$wrapper.css(this._getMaxDims());
\n    }
\n\n    /**\n     * Adds event handlers to elements in the menu.\n     * @function\n     * @private\n     * @param {
jQuery}
 $elem - the current menu item to add handlers to.\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events($elem) {
\n      var _this = this;
\n      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
\n          e.preventDefault();
\n        }
\n\n        // if(e.target !== e.currentTarget.firstElementChild){
\n        //   return false;
\n        // }
\n        _this._show($elem.parent('li'));
\n        if (_this.options.closeOnClick) {
\n          var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
\n          $body.off('.zf.drilldown').on('click.zf.drilldown', function (ev) {
\n            if (ev.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0], ev.target)) {
\n              return;
\n            }
\n            ev.preventDefault();
\n            _this._hideAll();
\n            $body.off('.zf.drilldown');
\n          }
);
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Adds event handlers to the menu element.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_registerEvents\",\n    value: function _registerEvents() {
\n      if (this.options.scrollTop) {
\n        this._bindHandler = this._scrollTop.bind(this);
\n        this.$element.on('open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown', this._bindHandler);
\n      }
\n      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
\n    }
\n\n    /**\n     * Scroll to Top of Element or data-scroll-top-element\n     * @function\n     * @fires Drilldown#scrollme\n     */\n  }
, {
\n    key: \"_scrollTop\",\n    value: function _scrollTop() {
\n      var _this = this;
\n      var $scrollTopElement = _this.options.scrollTopElement !== '' ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.options.scrollTopElement) : _this.$element,\n        scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
\n        scrollTop: scrollPos\n      }
, _this.options.animationDuration, _this.options.animationEasing, function () {
\n        /**\n          * Fires after the menu has scrolled\n          * @event Drilldown#scrollme\n          */\n        if (this === jquery__WEBPACK_IMPORTED_MODULE_0___default()('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
\n      }
);
\n    }
\n\n    /**\n     * Adds keydown event listener to `li`'s in the menu.\n     * @private\n     */\n  }
, {
\n    key: \"_keyboardEvents\",\n    value: function _keyboardEvents() {
\n      var _this = this;
\n      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $elements = $element.parent('li').parent('ul').children('li').children('a'),\n          $prevElement,\n          $nextElement;
\n        $elements.each(function (i) {
\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
\n            $prevElement = $elements.eq(Math.max(0, i - 1));
\n            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
\n            return;
\n          }
\n        }
);
\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e, 'Drilldown', {
\n          next: function next() {
\n            if ($element.is(_this.$submenuAnchors)) {
\n              _this._show($element.parent('li'));
\n              $element.parent('li').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element), function () {
\n                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
\n              }
);
\n              return true;
\n            }
\n          }
,\n          previous: function previous() {
\n            _this._hide($element.parent('li').parent('ul'));
\n            $element.parent('li').parent('ul').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element), function () {
\n              setTimeout(function () {
\n                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
\n              }
, 1);
\n            }
);
\n            return true;
\n          }
,\n          up: function up() {
\n            $prevElement.focus();
\n            // Don't tap focus on first element in root ul\n            return !$element.is(_this.$element.find('> li:first-child > a'));
\n          }
,\n          down: function down() {
\n            $nextElement.focus();
\n            // Don't tap focus on last element in root ul\n            return !$element.is(_this.$element.find('> li:last-child > a'));
\n          }
,\n          close: function close() {
\n            // Don't close on element in root ul\n            if (!$element.is(_this.$element.find('> li > a'))) {
\n              _this._hide($element.parent().parent());
\n              $element.parent().parent().siblings('a').focus();
\n            }
\n          }
,\n          open: function open() {
\n            if (_this.options.parentLink && $element.attr('href')) {
\n              // Link with href\n              return false;
\n            }
 else if (!$element.is(_this.$menuItems)) {
\n              // not menu item means back button\n              _this._hide($element.parent('li').parent('ul'));
\n              $element.parent('li').parent('ul').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element), function () {
\n                setTimeout(function () {
\n                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
\n                }
, 1);
\n              }
);
\n              return true;
\n            }
 else if ($element.is(_this.$submenuAnchors)) {
\n              // Sub menu item\n              _this._show($element.parent('li'));
\n              $element.parent('li').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($element), function () {
\n                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
\n              }
);
\n              return true;
\n            }
\n          }
,\n          handled: function handled(preventDefault) {
\n            if (preventDefault) {
\n              e.preventDefault();
\n            }
\n          }
\n        }
);
\n      }
);
 // end keyboardAccess\n    }
\n\n    /**\n     * Closes all open elements, and returns to root menu.\n     * @function\n     * @fires Drilldown#close\n     * @fires Drilldown#closed\n     */\n  }
, {
\n    key: \"_hideAll\",\n    value: function _hideAll() {
\n      var _this2 = this;
\n      var $elem = this.$element.find('.is-drilldown-submenu.is-active');
\n      $elem.addClass('is-closing');
\n      $elem.parent().closest('ul').removeClass('invisible');
\n      if (this.options.autoHeight) {
\n        var calcHeight = $elem.parent().closest('ul').data('calcHeight');
\n        this.$wrapper.css({
\n          height: calcHeight\n        }
);
\n      }
\n\n      /**\n       * Fires when the menu is closing.\n       * @event Drilldown#close\n       */\n      this.$element.trigger('close.zf.drilldown');
\n      $elem.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($elem), function () {
\n        $elem.removeClass('is-active is-closing');
\n\n        /**\n         * Fires when the menu is fully closed.\n         * @event Drilldown#closed\n         */\n        _this2.$element.trigger('closed.zf.drilldown');
\n      }
);
\n    }
\n\n    /**\n     * Adds event listener for each `back` button, and closes open menus.\n     * @function\n     * @fires Drilldown#back\n     * @param {
jQuery}
 $elem - the current sub-menu to add `back` event.\n     */\n  }
, {
\n    key: \"_back\",\n    value: function _back($elem) {
\n      var _this = this;
\n      $elem.off('click.zf.drilldown');
\n      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function () {
\n        _this._hide($elem);
\n\n        // If there is a parent submenu, call show\n        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');
\n        if (parentSubMenu.length) {
\n          _this._show(parentSubMenu);
\n        }
 else {
\n          _this.$currentMenu = _this.$element;
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Adds event listener to menu items w/o submenus to close open menus on click.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_menuLinkEvents\",\n    value: function _menuLinkEvents() {
\n      var _this = this;
\n      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function () {
\n        setTimeout(function () {
\n          _this._hideAll();
\n        }
, 0);
\n      }
);
\n    }
\n\n    /**\n     * Sets the CSS classes for submenu to show it.\n     * @function\n     * @private\n     * @param {
jQuery}
 $elem - the target submenu (`ul` tag)\n     * @param {
boolean}
 trigger - trigger drilldown event\n     */\n  }
, {
\n    key: \"_setShowSubMenuClasses\",\n    value: function _setShowSubMenuClasses($elem, trigger) {
\n      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
\n      $elem.parent('li').attr('aria-expanded', true);
\n      if (trigger === true) {
\n        this.$element.trigger('open.zf.drilldown', [$elem]);
\n      }
\n    }
\n\n    /**\n     * Sets the CSS classes for submenu to hide it.\n     * @function\n     * @private\n     * @param {
jQuery}
 $elem - the target submenu (`ul` tag)\n     * @param {
boolean}
 trigger - trigger drilldown event\n     */\n  }
, {
\n    key: \"_setHideSubMenuClasses\",\n    value: function _setHideSubMenuClasses($elem, trigger) {
\n      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
\n      $elem.parent('li').attr('aria-expanded', false);
\n      if (trigger === true) {
\n        $elem.trigger('hide.zf.drilldown', [$elem]);
\n      }
\n    }
\n\n    /**\n     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.\n     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.\n     * @function\n     * @fires Drilldown#open\n     * @param {
jQuery}
 $elem - the target (sub)menu (`ul` tag)\n     * @param {
boolean}
 autoFocus - if true the first link in the target (sub)menu gets auto focused\n     */\n  }
, {
\n    key: \"_showMenu\",\n    value: function _showMenu($elem, autoFocus) {
\n      var _this = this;
\n\n      // Reset drilldown\n      var $expandedSubmenus = this.$element.find('li[aria-expanded=\"true\"] > ul[data-submenu]');
\n      $expandedSubmenus.each(function () {
\n        _this._setHideSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
\n      }
);
\n\n      // Save the menu as the currently displayed one.\n      this.$currentMenu = $elem;
\n\n      // If target menu is root, focus first link & exit\n      if ($elem.is('[data-drilldown]')) {
\n        if (autoFocus === true) $elem.find('li > a').first().focus();
\n        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
\n        return;
\n      }
\n\n      // Find all submenus on way to root incl. the element itself\n      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]');
\n\n      // Open target menu and all submenus on its way to root\n      $submenus.each(function (index) {
\n        // Update height of first child (target menu) if autoHeight option true\n        if (index === 0 && _this.options.autoHeight) {
\n          _this.$wrapper.css('height', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight'));
\n        }
\n        var isLastChild = index === $submenus.length - 1;
\n\n        // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link\n        // Last child makes sure the event gets always triggered even if going through several menus\n        if (isLastChild === true) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)), function () {
\n            if (autoFocus === true) {
\n              $elem.find('li > a').first().focus();
\n            }
\n          }
);
\n        }
\n        _this._setShowSubMenuClasses(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), isLastChild);
\n      }
);
\n    }
\n\n    /**\n     * Opens a submenu.\n     * @function\n     * @fires Drilldown#open\n     * @param {
jQuery}
 $elem - the current element with a submenu to open, i.e. the `li` tag.\n     */\n  }
, {
\n    key: \"_show\",\n    value: function _show($elem) {
\n      var $submenu = $elem.children('[data-submenu]');
\n      $elem.attr('aria-expanded', true);
\n      this.$currentMenu = $submenu;
\n\n      //hide drilldown parent menu when submenu is open\n      // this removes it from the dom so that the tab key will take the user to the next visible element\n      $elem.parent().closest('ul').addClass('invisible');
\n\n      // add visible class to submenu to override invisible class above\n      $submenu.addClass('is-active visible').removeClass('invisible').attr('aria-hidden', false);
\n      if (this.options.autoHeight) {
\n        this.$wrapper.css({
\n          height: $submenu.data('calcHeight')\n        }
);
\n      }
\n\n      /**\n       * Fires when the submenu has opened.\n       * @event Drilldown#open\n       */\n      this.$element.trigger('open.zf.drilldown', [$elem]);
\n    }
\n\n    /**\n     * Hides a submenu\n     * @function\n     * @fires Drilldown#hide\n     * @param {
jQuery}
 $elem - the current sub-menu to hide, i.e. the `ul` tag.\n     */\n  }
, {
\n    key: \"_hide\",\n    value: function _hide($elem) {
\n      if (this.options.autoHeight) this.$wrapper.css({
\n        height: $elem.parent().closest('ul').data('calcHeight')\n      }
);
\n      $elem.parent().closest('ul').removeClass('invisible');
\n      $elem.parent('li').attr('aria-expanded', false);
\n      $elem.attr('aria-hidden', true);
\n      $elem.addClass('is-closing').one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.transitionend)($elem), function () {
\n        $elem.removeClass('is-active is-closing visible');
\n        $elem.blur().addClass('invisible');
\n      }
);
\n      /**\n       * Fires when the submenu has closed.\n       * @event Drilldown#hide\n       */\n      $elem.trigger('hide.zf.drilldown', [$elem]);
\n    }
\n\n    /**\n     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.\n     * Prevents content jumping.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_getMaxDims\",\n    value: function _getMaxDims() {
\n      var maxHeight = 0,\n        result = {
}
,\n        _this = this;
\n\n      // Recalculate menu heights and total max height\n      this.$submenus.add(this.$element).each(function () {
\n        var height = _foundation_util_box__WEBPACK_IMPORTED_MODULE_4__.Box.GetDimensions(this).height;
\n        maxHeight = height > maxHeight ? height : maxHeight;
\n        if (_this.options.autoHeight) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('calcHeight', height);
\n        }
\n      }
);
\n      if (this.options.autoHeight) result.height = this.$currentMenu.data('calcHeight');
else result['min-height'] = \"\".concat(maxHeight, \"px\");
\n      result['max-width'] = \"\".concat(this.$element[0].getBoundingClientRect().width, \"px\");
\n      return result;
\n    }
\n\n    /**\n     * Destroys the Drilldown Menu\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('.zf.drilldown');
\n      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);
\n      this._hideAll();
\n      this.$element.off('mutateme.zf.trigger');
\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_2__.Nest.Burn(this.$element, 'drilldown');
\n      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').off('transitionend otransitionend webkitTransitionEnd').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
\n      this.$submenuAnchors.each(function () {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off('.zf.drilldown');
\n      }
);
\n      this.$element.find('[data-is-parent-link]').detach();
\n      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
\n      this.$element.find('a').each(function () {
\n        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
\n        $link.removeAttr('tabindex');
\n        if ($link.data('savedHref')) {
\n          $link.attr('href', $link.data('savedHref')).removeData('savedHref');
\n        }
 else {
\n          return;
\n        }
\n      }
);
\n    }
\n  }
]);
\n  return Drilldown;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_5__.Plugin);
\nDrilldown.defaults = {
\n  /**\n   * Drilldowns depend on styles in order to function properly;
 in the default build of Foundation these are\n   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  autoApplyClass: true,\n  /**\n   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\\`) if copy and pasting.\n   * @option\n   * @type {
string}
\n   * @default '<li class=\"js-drilldown-back\"><a tabindex=\"0\">Back</a></li>'\n   */\n  backButton: '<li class=\"js-drilldown-back\"><a tabindex=\"0\">Back</a></li>',\n  /**\n   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.\n   * @option\n   * @type {
string}
\n   * @default top\n   */\n  backButtonPosition: 'top',\n  /**\n   * Markup used to wrap drilldown menu. Use a class name for independent styling;
 the JS applied class: `is-drilldown` is required. Remove the backslash (`\\`) if copy and pasting.\n   * @option\n   * @type {
string}
\n   * @default '<div></div>'\n   */\n  wrapper: '<div></div>',\n  /**\n   * Adds the parent link to the submenu.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  parentLink: false,\n  /**\n   * Allow the menu to return to root list on body click.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  closeOnClick: false,\n  /**\n   * Allow the menu to auto adjust height.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  autoHeight: false,\n  /**\n   * Animate the auto adjust height.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  animateHeight: false,\n  /**\n   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  scrollTop: false,\n  /**\n   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  scrollTopElement: '',\n  /**\n   * ScrollTop offset\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  scrollTopOffset: 0,\n  /**\n   * Scroll animation duration\n   * @option\n   * @type {
number}
\n   * @default 500\n   */\n  animationDuration: 500,\n  /**\n   * Scroll animation easing. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {
string}
\n   * @see {
@link https://api.jquery.com/animate|JQuery animate}
\n   * @default 'swing'\n   */\n  animationEasing: 'swing'\n  // holdOpen: false\n}
;
\n\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.drilldown.js?");


/***/ }
),

/***/ "./js/foundation.dropdown.js":
/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Dropdown: function() {
 return /* binding */ Dropdown;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.positionable */ \"./js/foundation.positionable.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _get() {
 if (typeof Reflect !== \"undefined\" && Reflect.get) {
 _get = Reflect.get.bind();
 }
 else {
 _get = function _get(target, property, receiver) {
 var base = _superPropBase(target, property);
 if (!base) return;
 var desc = Object.getOwnPropertyDescriptor(base, property);
 if (desc.get) {
 return desc.get.call(arguments.length < 3 ? target : receiver);
 }
 return desc.value;
 }
;
 }
 return _get.apply(this, arguments);
 }
\nfunction _superPropBase(object, property) {
 while (!Object.prototype.hasOwnProperty.call(object, property)) {
 object = _getPrototypeOf(object);
 if (object === null) break;
 }
 return object;
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n/**\n * Dropdown module.\n * @module foundation.dropdown\n * @requires foundation.util.keyboard\n * @requires foundation.util.box\n * @requires foundation.util.touch\n * @requires foundation.util.triggers\n */\nvar Dropdown = /*#__PURE__*/function (_Positionable) {
\n  _inherits(Dropdown, _Positionable);
\n  var _super = _createSuper(Dropdown);
\n  function Dropdown() {
\n    _classCallCheck(this, Dropdown);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Dropdown, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of a dropdown.\n     * @class\n     * @name Dropdown\n     * @param {
jQuery}
 element - jQuery object to make into a dropdown.\n     *        Object should be of the dropdown panel, rather than its anchor.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Dropdown.defaults, this.$element.data(), options);
\n      this.className = 'Dropdown';
 // ie9 back compat\n\n      // Touch and Triggers init are idempotent, just need to make sure they are initialized\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__.Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Dropdown', {
\n        'ENTER': 'toggle',\n        'SPACE': 'toggle',\n        'ESCAPE': 'close'\n      }
);
\n    }
\n\n    /**\n     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var $id = this.$element.attr('id');
\n      this.$anchors = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat($id, \"\\\"]\")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat($id, \"\\\"]\")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat($id, \"\\\"]\"));
\n      this.$anchors.attr({
\n        'aria-controls': $id,\n        'data-is-focus': false,\n        'data-yeti-box': $id,\n        'aria-haspopup': true,\n        'aria-expanded': false\n      }
);
\n      this._setCurrentAnchor(this.$anchors.first());
\n      if (this.options.parentClass) {
\n        this.$parent = this.$element.parents('.' + this.options.parentClass);
\n      }
 else {
\n        this.$parent = null;
\n      }
\n\n      // Set [aria-labelledby] on the Dropdown if it is not set\n      if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
\n        // Get the anchor ID or create one\n        if (typeof this.$currentAnchor.attr('id') === 'undefined') {
\n          this.$currentAnchor.attr('id', (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'dd-anchor'));
\n        }
\n        this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
\n      }
\n      this.$element.attr({
\n        'aria-hidden': 'true',\n        'data-yeti-box': $id,\n        'data-resize': $id\n      }
);
\n      _get(_getPrototypeOf(Dropdown.prototype), \"_init\", this).call(this);
\n      this._events();
\n    }
\n  }
, {
\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {
\n      // handle legacy classnames\n      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);
\n      if (position) {
\n        return position[0];
\n      }
 else {
\n        return 'bottom';
\n      }
\n    }
\n  }
, {
\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {
\n      // handle legacy float approach\n      var horizontalPosition = /float-(\\S+)/.exec(this.$currentAnchor.attr('class'));
\n      if (horizontalPosition) {
\n        return horizontalPosition[1];
\n      }
\n      return _get(_getPrototypeOf(Dropdown.prototype), \"_getDefaultAlignment\", this).call(this);
\n    }
\n\n    /**\n     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.\n     * Recursively calls itself if a collision is detected, with a new position class.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_setPosition\",\n    value: function _setPosition() {
\n      this.$element.removeClass(\"has-position-\".concat(this.position, \" has-alignment-\").concat(this.alignment));
\n      _get(_getPrototypeOf(Dropdown.prototype), \"_setPosition\", this).call(this, this.$currentAnchor, this.$element, this.$parent);
\n      this.$element.addClass(\"has-position-\".concat(this.position, \" has-alignment-\").concat(this.alignment));
\n    }
\n\n    /**\n     * Make it a current anchor.\n     * Current anchor as the reference for the position of Dropdown panes.\n     * @param {
HTML}
 el - DOM element of the anchor.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_setCurrentAnchor\",\n    value: function _setCurrentAnchor(el) {
\n      this.$currentAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
\n    }
\n\n    /**\n     * Adds event listeners to the element utilizing the triggers utility library.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this,\n        hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';
\n      this.$element.on({
\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': this.close.bind(this),\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'resizeme.zf.trigger': this._setPosition.bind(this)\n      }
);
\n      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function (e) {
\n        _this._setCurrentAnchor(this);
\n        if (\n        // if forceFollow false, always prevent default action\n        _this.options.forceFollow === false ||\n        // if forceFollow true and hover option true, only prevent default action on 1st click\n        // on 2nd click (dropown opened) the default action (e.g. follow a href) gets executed\n        hasTouch && _this.options.hover && _this.$element.hasClass('is-open') === false) {
\n          e.preventDefault();
\n        }
\n      }
);
\n      if (this.options.hover) {
\n        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
\n          _this._setCurrentAnchor(this);
\n          var bodyData = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data();
\n          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
\n            clearTimeout(_this.timeout);
\n            _this.timeout = setTimeout(function () {
\n              _this.open();
\n              _this.$anchors.data('hover', true);
\n            }
, _this.options.hoverDelay);
\n          }
\n        }
).on('mouseleave.zf.dropdown', (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.ignoreMousedisappear)(function () {
\n          clearTimeout(_this.timeout);
\n          _this.timeout = setTimeout(function () {
\n            _this.close();
\n            _this.$anchors.data('hover', false);
\n          }
, _this.options.hoverDelay);
\n        }
));
\n        if (this.options.hoverPane) {
\n          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
\n            clearTimeout(_this.timeout);
\n          }
).on('mouseleave.zf.dropdown', (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.ignoreMousedisappear)(function () {
\n            clearTimeout(_this.timeout);
\n            _this.timeout = setTimeout(function () {
\n              _this.close();
\n              _this.$anchors.data('hover', false);
\n            }
, _this.options.hoverDelay);
\n          }
));
\n        }
\n      }
\n      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
\n        var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e, 'Dropdown', {
\n          open: function open() {
\n            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
\n              _this.open();
\n              _this.$element.attr('tabindex', -1).focus();
\n              e.preventDefault();
\n            }
\n          }
,\n          close: function close() {
\n            _this.close();
\n            _this.$anchors.focus();
\n          }
\n        }
);
\n      }
);
\n    }
\n\n    /**\n     * Adds an event handler to the body to close any dropdowns on a click.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_addBodyHandler\",\n    value: function _addBodyHandler() {
\n      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).not(this.$element),\n        _this = this;
\n      $body.off('click.zf.dropdown tap.zf.dropdown').on('click.zf.dropdown tap.zf.dropdown', function (e) {
\n        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
\n          return;
\n        }
\n        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
\n          return;
\n        }
\n        _this.close();
\n        $body.off('click.zf.dropdown tap.zf.dropdown');
\n      }
);
\n    }
\n\n    /**\n     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.\n     * @function\n     * @fires Dropdown#closeme\n     * @fires Dropdown#show\n     */\n  }
, {
\n    key: \"open\",\n    value: function open() {
\n      // var _this = this;
\n      /**\n       * Fires to close other open dropdowns, typically when dropdown is opening\n       * @event Dropdown#closeme\n       */\n      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
\n      this.$anchors.addClass('hover').attr({
\n        'aria-expanded': true\n      }
);
\n      // this.$element/*.show()*/;
\n\n      this.$element.addClass('is-opening');
\n      this._setPosition();
\n      this.$element.removeClass('is-opening').addClass('is-open').attr({
\n        'aria-hidden': false\n      }
);
\n      if (this.options.autoFocus) {
\n        var $focusable = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.findFocusable(this.$element);
\n        if ($focusable.length) {
\n          $focusable.eq(0).focus();
\n        }
\n      }
\n      if (this.options.closeOnClick) {
\n        this._addBodyHandler();
\n      }
\n      if (this.options.trapFocus) {
\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.trapFocus(this.$element);
\n      }
\n\n      /**\n       * Fires once the dropdown is visible.\n       * @event Dropdown#show\n       */\n      this.$element.trigger('show.zf.dropdown', [this.$element]);
\n    }
\n\n    /**\n     * Closes the open dropdown pane.\n     * @function\n     * @fires Dropdown#hide\n     */\n  }
, {
\n    key: \"close\",\n    value: function close() {
\n      if (!this.$element.hasClass('is-open')) {
\n        return false;
\n      }
\n      this.$element.removeClass('is-open').attr({
\n        'aria-hidden': true\n      }
);
\n      this.$anchors.removeClass('hover').attr('aria-expanded', false);
\n\n      /**\n       * Fires once the dropdown is no longer visible.\n       * @event Dropdown#hide\n       */\n      this.$element.trigger('hide.zf.dropdown', [this.$element]);
\n      if (this.options.trapFocus) {
\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.releaseFocus(this.$element);
\n      }
\n    }
\n\n    /**\n     * Toggles the dropdown pane's visibility.\n     * @function\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle() {
\n      if (this.$element.hasClass('is-open')) {
\n        if (this.$anchors.data('hover')) return;
\n        this.close();
\n      }
 else {
\n        this.open();
\n      }
\n    }
\n\n    /**\n     * Destroys the dropdown.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.off('.zf.trigger').hide();
\n      this.$anchors.off('.zf.dropdown');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdown tap.zf.dropdown');
\n    }
\n  }
]);
\n  return Dropdown;
\n}
(_foundation_positionable__WEBPACK_IMPORTED_MODULE_3__.Positionable);
\nDropdown.defaults = {
\n  /**\n   * Class that designates bounding container of Dropdown (default: window)\n   * @option\n   * @type {
?string}
\n   * @default null\n   */\n  parentClass: null,\n  /**\n   * Amount of time to delay opening a submenu on hover event.\n   * @option\n   * @type {
number}
\n   * @default 250\n   */\n  hoverDelay: 250,\n  /**\n   * Allow submenus to open on hover events\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  hover: false,\n  /**\n   * Don't close dropdown when hovering over dropdown pane\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  hoverPane: false,\n  /**\n   * Number of pixels between the dropdown pane and the triggering element on open.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  vOffset: 0,\n  /**\n   * Number of pixels between the dropdown pane and the triggering element on open.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  hOffset: 0,\n  /**\n   * Position of dropdown. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  position: 'auto',\n  /**\n   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  alignment: 'auto',\n  /**\n   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  allowOverlap: false,\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  allowBottomOverlap: true,\n  /**\n   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  trapFocus: false,\n  /**\n   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  autoFocus: false,\n  /**\n   * Allows a click on the body to close the dropdown.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  closeOnClick: false,\n  /**\n   * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover option is also true the default action gets prevented on first click for mobile / touch devices and executed on second click.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  forceFollow: true\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.dropdown.js?");


/***/ }
),

/***/ "./js/foundation.dropdownMenu.js":
/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   DropdownMenu: function() {
 return /* binding */ DropdownMenu;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.nest */ \"./js/foundation.util.nest.js\");
\n/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");
\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n\n/**\n * DropdownMenu module.\n * @module foundation.dropdownMenu\n * @requires foundation.util.keyboard\n * @requires foundation.util.box\n * @requires foundation.util.nest\n * @requires foundation.util.touch\n */\nvar DropdownMenu = /*#__PURE__*/function (_Plugin) {
\n  _inherits(DropdownMenu, _Plugin);
\n  var _super = _createSuper(DropdownMenu);
\n  function DropdownMenu() {
\n    _classCallCheck(this, DropdownMenu);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(DropdownMenu, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of DropdownMenu.\n     * @class\n     * @name DropdownMenu\n     * @fires DropdownMenu#init\n     * @param {
jQuery}
 element - jQuery object to make into a dropdown menu.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, DropdownMenu.defaults, this.$element.data(), options);
\n      this.className = 'DropdownMenu';
 // ie9 back compat\n\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_6__.Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
 // Touch init is idempotent, we just need to make sure it's initialied.\n\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('DropdownMenu', {
\n        'ENTER': 'open',\n        'SPACE': 'open',\n        'ARROW_RIGHT': 'next',\n        'ARROW_UP': 'up',\n        'ARROW_DOWN': 'down',\n        'ARROW_LEFT': 'previous',\n        'ESCAPE': 'close'\n      }
);
\n    }
\n\n    /**\n     * Initializes the plugin, and calls _prepareMenu\n     * @private\n     * @function\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__.Nest.Feather(this.$element, 'dropdown');
\n      var subs = this.$element.find('li.is-dropdown-submenu-parent');
\n      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
\n      this.$menuItems = this.$element.find('li[role=\"none\"]');
\n      this.$tabs = this.$element.children('li[role=\"none\"]');
\n      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);
\n      if (this.options.alignment === 'auto') {
\n        if (this.$element.hasClass(this.options.rightClass) || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.rtl)() || this.$element.parents('.top-bar-right').is('*')) {
\n          this.options.alignment = 'right';
\n          subs.addClass('opens-left');
\n        }
 else {
\n          this.options.alignment = 'left';
\n          subs.addClass('opens-right');
\n        }
\n      }
 else {
\n        if (this.options.alignment === 'right') {
\n          subs.addClass('opens-left');
\n        }
 else {
\n          subs.addClass('opens-right');
\n        }
\n      }
\n      this.changed = false;
\n      this._events();
\n    }
\n  }
, {
\n    key: \"_isVertical\",\n    value: function _isVertical() {
\n      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
\n    }
\n  }
, {
\n    key: \"_isRtl\",\n    value: function _isRtl() {
\n      return this.$element.hasClass('align-right') || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.rtl)() && !this.$element.hasClass('align-left');
\n    }
\n\n    /**\n     * Adds event listeners to elements within the menu\n     * @private\n     * @function\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this,\n        hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',\n        parClass = 'is-dropdown-submenu-parent';
\n\n      // used for onClick and in the keyboard handlers\n      var handleClickFn = function handleClickFn(e) {
\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', \".\".concat(parClass)),\n          hasSub = $elem.hasClass(parClass),\n          hasClicked = $elem.attr('data-is-click') === 'true',\n          $sub = $elem.children('.is-dropdown-submenu');
\n        if (hasSub) {
\n          if (hasClicked) {
\n            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
\n              return;
\n            }
\n            e.stopImmediatePropagation();
\n            e.preventDefault();
\n            _this._hide($elem);
\n          }
 else {
\n            e.stopImmediatePropagation();
\n            e.preventDefault();
\n            _this._show($sub);
\n            $elem.add($elem.parentsUntil(_this.$element, \".\".concat(parClass))).attr('data-is-click', true);
\n          }
\n        }
\n      }
;
\n      if (this.options.clickOpen || hasTouch) {
\n        this.$menuItems.on('click.zf.dropdownMenu touchstart.zf.dropdownMenu', handleClickFn);
\n      }
\n\n      // Handle Leaf element Clicks\n      if (_this.options.closeOnClickInside) {
\n        this.$menuItems.on('click.zf.dropdownMenu', function () {
\n          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            hasSub = $elem.hasClass(parClass);
\n          if (!hasSub) {
\n            _this._hide();
\n          }
\n        }
);
\n      }
\n      if (hasTouch && this.options.disableHoverOnTouch) this.options.disableHover = true;
\n      if (!this.options.disableHover) {
\n        this.$menuItems.on('mouseenter.zf.dropdownMenu', function () {
\n          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            hasSub = $elem.hasClass(parClass);
\n          if (hasSub) {
\n            clearTimeout($elem.data('_delay'));
\n            $elem.data('_delay', setTimeout(function () {
\n              _this._show($elem.children('.is-dropdown-submenu'));
\n            }
, _this.options.hoverDelay));
\n          }
\n        }
).on('mouseleave.zf.dropdownMenu', (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.ignoreMousedisappear)(function () {
\n          var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n            hasSub = $elem.hasClass(parClass);
\n          if (hasSub && _this.options.autoclose) {
\n            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
\n              return false;
\n            }
\n            clearTimeout($elem.data('_delay'));
\n            $elem.data('_delay', setTimeout(function () {
\n              _this._hide($elem);
\n            }
, _this.options.closingTime));
\n          }
\n        }
));
\n      }
\n      this.$menuItems.on('keydown.zf.dropdownMenu', function (e) {
\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parentsUntil('ul', '[role=\"none\"]'),\n          isTab = _this.$tabs.index($element) > -1,\n          $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),\n          $prevElement,\n          $nextElement;
\n        $elements.each(function (i) {
\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
\n            $prevElement = $elements.eq(i - 1);
\n            $nextElement = $elements.eq(i + 1);
\n            return;
\n          }
\n        }
);
\n        var nextSibling = function nextSibling() {
\n            $nextElement.children('a:first').focus();
\n            e.preventDefault();
\n          }
,\n          prevSibling = function prevSibling() {
\n            $prevElement.children('a:first').focus();
\n            e.preventDefault();
\n          }
,\n          openSub = function openSub() {
\n            var $sub = $element.children('ul.is-dropdown-submenu');
\n            if ($sub.length) {
\n              _this._show($sub);
\n              $element.find('li > a:first').focus();
\n              e.preventDefault();
\n            }
 else {
\n              return;
\n            }
\n          }
,\n          closeSub = function closeSub() {
\n            //if ($element.is(':first-child')) {
\n            var close = $element.parent('ul').parent('li');
\n            close.children('a:first').focus();
\n            _this._hide(close);
\n            e.preventDefault();
\n            //}
\n          }
;
\n\n        var functions = {
\n          open: openSub,\n          close: function close() {
\n            _this._hide(_this.$element);
\n            _this.$menuItems.eq(0).children('a').focus();
 // focus to first element\n            e.preventDefault();
\n          }
\n        }
;
\n        if (isTab) {
\n          if (_this._isVertical()) {
\n            // vertical menu\n            if (_this._isRtl()) {
\n              // right aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
\n                down: nextSibling,\n                up: prevSibling,\n                next: closeSub,\n                previous: openSub\n              }
);
\n            }
 else {
\n              // left aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
\n                down: nextSibling,\n                up: prevSibling,\n                next: openSub,\n                previous: closeSub\n              }
);
\n            }
\n          }
 else {
\n            // horizontal menu\n            if (_this._isRtl()) {
\n              // right aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
\n                next: prevSibling,\n                previous: nextSibling,\n                down: openSub,\n                up: closeSub\n              }
);
\n            }
 else {
\n              // left aligned\n              jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
\n                next: nextSibling,\n                previous: prevSibling,\n                down: openSub,\n                up: closeSub\n              }
);
\n            }
\n          }
\n        }
 else {
\n          // not tabs -> one sub\n          if (_this._isRtl()) {
\n            // right aligned\n            jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
\n              next: closeSub,\n              previous: openSub,\n              down: nextSibling,\n              up: prevSibling\n            }
);
\n          }
 else {
\n            // left aligned\n            jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(functions, {
\n              next: openSub,\n              previous: closeSub,\n              down: nextSibling,\n              up: prevSibling\n            }
);
\n          }
\n        }
\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e, 'DropdownMenu', functions);
\n      }
);
\n    }
\n\n    /**\n     * Adds an event handler to the body to close any dropdowns on a click.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_addBodyHandler\",\n    value: function _addBodyHandler() {
\n      var _this2 = this;
\n      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body);
\n      this._removeBodyHandler();
\n      $body.on('click.zf.dropdownMenu tap.zf.dropdownMenu', function (e) {
\n        var isItself = !!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest(_this2.$element).length;
\n        if (isItself) return;
\n        _this2._hide();
\n        _this2._removeBodyHandler();
\n      }
);
\n    }
\n\n    /**\n     * Remove the body event handler. See `_addBodyHandler`.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_removeBodyHandler\",\n    value: function _removeBodyHandler() {
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('click.zf.dropdownMenu tap.zf.dropdownMenu');
\n    }
\n\n    /**\n     * Opens a dropdown pane, and checks for collisions first.\n     * @param {
jQuery}
 $sub - ul element that is a submenu to show\n     * @function\n     * @private\n     * @fires DropdownMenu#show\n     */\n  }
, {
\n    key: \"_show\",\n    value: function _show($sub) {
\n      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
\n        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find($sub).length > 0;
\n      }
));
\n      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');
\n      this._hide($sibs, idx);
\n      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
\n      var clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__.Box.ImNotTouchingYou($sub, null, true);
\n      if (!clear) {
\n        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',\n          $parentLi = $sub.parent('.is-dropdown-submenu-parent');
\n        $parentLi.removeClass(\"opens\".concat(oldClass)).addClass(\"opens-\".concat(this.options.alignment));
\n        clear = _foundation_util_box__WEBPACK_IMPORTED_MODULE_5__.Box.ImNotTouchingYou($sub, null, true);
\n        if (!clear) {
\n          $parentLi.removeClass(\"opens-\".concat(this.options.alignment)).addClass('opens-inner');
\n        }
\n        this.changed = true;
\n      }
\n      $sub.css('visibility', '');
\n      if (this.options.closeOnClick) {
\n        this._addBodyHandler();
\n      }
\n      /**\n       * Fires when the new dropdown pane is visible.\n       * @event DropdownMenu#show\n       */\n      this.$element.trigger('show.zf.dropdownMenu', [$sub]);
\n    }
\n\n    /**\n     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.\n     * @function\n     * @param {
jQuery}
 $elem - element with a submenu to hide\n     * @param {
Number}
 idx - index of the $tabs collection to hide\n     * @fires DropdownMenu#hide\n     * @private\n     */\n  }
, {
\n    key: \"_hide\",\n    value: function _hide($elem, idx) {
\n      var $toClose;
\n      if ($elem && $elem.length) {
\n        $toClose = $elem;
\n      }
 else if (typeof idx !== 'undefined') {
\n        $toClose = this.$tabs.not(function (i) {
\n          return i === idx;
\n        }
);
\n      }
 else {
\n        $toClose = this.$element;
\n      }
\n      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;
\n      if (somethingToClose) {
\n        var $activeItem = $toClose.find('li.is-active');
\n        $activeItem.add($toClose).attr({
\n          'data-is-click': false\n        }
).removeClass('is-active');
\n        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');
\n        if (this.changed || $toClose.find('opens-inner').length) {
\n          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
\n          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass(\"opens-inner opens-\".concat(this.options.alignment)).addClass(\"opens-\".concat(oldClass));
\n          this.changed = false;
\n        }
\n        clearTimeout($activeItem.data('_delay'));
\n        this._removeBodyHandler();
\n\n        /**\n         * Fires when the open menus are closed.\n         * @event DropdownMenu#hide\n         */\n        this.$element.trigger('hide.zf.dropdownMenu', [$toClose]);
\n      }
\n    }
\n\n    /**\n     * Destroys the plugin.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$menuItems.off('.zf.dropdownMenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).off('.zf.dropdownMenu');
\n      _foundation_util_nest__WEBPACK_IMPORTED_MODULE_4__.Nest.Burn(this.$element, 'dropdown');
\n    }
\n  }
]);
\n  return DropdownMenu;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\n/**\n * Default settings for plugin\n */\nDropdownMenu.defaults = {
\n  /**\n   * Disallows hover events from opening submenus\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  disableHover: false,\n  /**\n   * Disallows hover on touch devices\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  disableHoverOnTouch: true,\n  /**\n   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  autoclose: true,\n  /**\n   * Amount of time to delay opening a submenu on hover event.\n   * @option\n   * @type {
number}
\n   * @default 50\n   */\n  hoverDelay: 50,\n  /**\n   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  clickOpen: false,\n  /**\n   * Amount of time to delay closing a submenu on a mouseleave event.\n   * @option\n   * @type {
number}
\n   * @default 500\n   */\n\n  closingTime: 500,\n  /**\n   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  alignment: 'auto',\n  /**\n   * Allow clicks on the body to close any open submenus.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  closeOnClick: true,\n  /**\n   * Allow clicks on leaf anchor links to close any open submenus.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  closeOnClickInside: true,\n  /**\n   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.\n   * @option\n   * @type {
string}
\n   * @default 'vertical'\n   */\n  verticalClass: 'vertical',\n  /**\n   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.\n   * @option\n   * @type {
string}
\n   * @default 'align-right'\n   */\n  rightClass: 'align-right',\n  /**\n   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  forceFollow: true\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.dropdownMenu.js?");


/***/ }
),

/***/ "./js/foundation.equalizer.js":
/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Equalizer: function() {
 return /* binding */ Equalizer;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n/**\n * Equalizer module.\n * @module foundation.equalizer\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.imageLoader if equalizer contains images\n */\nvar Equalizer = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Equalizer, _Plugin);
\n  var _super = _createSuper(Equalizer);
\n  function Equalizer() {
\n    _classCallCheck(this, Equalizer);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Equalizer, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of Equalizer.\n     * @class\n     * @name Equalizer\n     * @fires Equalizer#init\n     * @param {
Object}
 element - jQuery object to add the trigger to.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Equalizer.defaults, this.$element.data(), options);
\n      this.className = 'Equalizer';
 // ie9 back compat\n\n      this._init();
\n    }
\n\n    /**\n     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var eqId = this.$element.attr('data-equalizer') || '';
\n      var $watched = this.$element.find(\"[data-equalizer-watch=\\\"\".concat(eqId, \"\\\"]\"));
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();
\n      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
\n      this.$element.attr('data-resize', eqId || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6, 'eq'));
\n      this.$element.attr('data-mutate', eqId || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6, 'eq'));
\n      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
\n      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
\n      this.isOn = false;
\n      this._bindHandler = {
\n        onResizeMeBound: this._onResizeMe.bind(this),\n        onPostEqualizedBound: this._onPostEqualized.bind(this)\n      }
;
\n      var imgs = this.$element.find('img');
\n      var tooSmall;
\n      if (this.options.equalizeOn) {
\n        tooSmall = this._checkMQ();
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
\n      }
 else {
\n        this._events();
\n      }
\n      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
\n        if (imgs.length) {
\n          (0,_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_2__.onImagesLoaded)(imgs, this._reflow.bind(this));
\n        }
 else {
\n          this._reflow();
\n        }
\n      }
\n    }
\n\n    /**\n     * Removes event listeners if the breakpoint is too small.\n     * @private\n     */\n  }
, {
\n    key: \"_pauseEvents\",\n    value: function _pauseEvents() {
\n      this.isOn = false;
\n      this.$element.off({
\n        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,\n        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,\n        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound\n      }
);
\n    }
\n\n    /**\n     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound\n     * @private\n     */\n  }
, {
\n    key: \"_onResizeMe\",\n    value: function _onResizeMe() {
\n      this._reflow();
\n    }
\n\n    /**\n     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound\n     * @private\n     */\n  }
, {
\n    key: \"_onPostEqualized\",\n    value: function _onPostEqualized(e) {
\n      if (e.target !== this.$element[0]) {
\n        this._reflow();
\n      }
\n    }
\n\n    /**\n     * Initializes events for Equalizer.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      this._pauseEvents();
\n      if (this.hasNested) {
\n        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
\n      }
 else {
\n        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
\n        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
\n      }
\n      this.isOn = true;
\n    }
\n\n    /**\n     * Checks the current breakpoint to the minimum required size.\n     * @private\n     */\n  }
, {
\n    key: \"_checkMQ\",\n    value: function _checkMQ() {
\n      var tooSmall = !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.is(this.options.equalizeOn);
\n      if (tooSmall) {
\n        if (this.isOn) {
\n          this._pauseEvents();
\n          this.$watched.css('height', 'auto');
\n        }
\n      }
 else {
\n        if (!this.isOn) {
\n          this._events();
\n        }
\n      }
\n      return tooSmall;
\n    }
\n\n    /**\n     * A noop version for the plugin\n     * @private\n     */\n  }
, {
\n    key: \"_killswitch\",\n    value: function _killswitch() {
\n      return;
\n    }
\n\n    /**\n     * Calls necessary functions to update Equalizer upon DOM change\n     * @private\n     */\n  }
, {
\n    key: \"_reflow\",\n    value: function _reflow() {
\n      if (!this.options.equalizeOnStack) {
\n        if (this._isStacked()) {
\n          this.$watched.css('height', 'auto');
\n          return false;
\n        }
\n      }
\n      if (this.options.equalizeByRow) {
\n        this.getHeightsByRow(this.applyHeightByRow.bind(this));
\n      }
 else {
\n        this.getHeights(this.applyHeight.bind(this));
\n      }
\n    }
\n\n    /**\n     * Manually determines if the first 2 elements are *NOT* stacked.\n     * @private\n     */\n  }
, {
\n    key: \"_isStacked\",\n    value: function _isStacked() {
\n      if (!this.$watched[0] || !this.$watched[1]) {
\n        return true;
\n      }
\n      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
\n    }
\n\n    /**\n     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array\n     * @param {
Function}
 cb - A non-optional callback to return the heights array to.\n     * @returns {
Array}
 heights - An array of heights of children within Equalizer container\n     */\n  }
, {
\n    key: \"getHeights\",\n    value: function getHeights(cb) {
\n      var heights = [];
\n      for (var i = 0, len = this.$watched.length;
 i < len;
 i++) {
\n        this.$watched[i].style.height = 'auto';
\n        heights.push(this.$watched[i].offsetHeight);
\n      }
\n      cb(heights);
\n    }
\n\n    /**\n     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array\n     * @param {
Function}
 cb - A non-optional callback to return the heights array to.\n     * @returns {
Array}
 groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child\n     */\n  }
, {
\n    key: \"getHeightsByRow\",\n    value: function getHeightsByRow(cb) {
\n      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,\n        groups = [],\n        group = 0;
\n      //group by Row\n      groups[group] = [];
\n      for (var i = 0, len = this.$watched.length;
 i < len;
 i++) {
\n        this.$watched[i].style.height = 'auto';
\n        //maybe could use this.$watched[i].offsetTop\n        var elOffsetTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$watched[i]).offset().top;
\n        if (elOffsetTop !== lastElTopOffset) {
\n          group++;
\n          groups[group] = [];
\n          lastElTopOffset = elOffsetTop;
\n        }
\n        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
\n      }
\n      for (var j = 0, ln = groups.length;
 j < ln;
 j++) {
\n        var heights = jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[j]).map(function () {
\n          return this[1];
\n        }
).get();
\n        var max = Math.max.apply(null, heights);
\n        groups[j].push(max);
\n      }
\n      cb(groups);
\n    }
\n\n    /**\n     * Changes the CSS height property of each child in an Equalizer parent to match the tallest\n     * @param {
array}
 heights - An array of heights of children within Equalizer container\n     * @fires Equalizer#preequalized\n     * @fires Equalizer#postequalized\n     */\n  }
, {
\n    key: \"applyHeight\",\n    value: function applyHeight(heights) {
\n      var max = Math.max.apply(null, heights);
\n      /**\n       * Fires before the heights are applied\n       * @event Equalizer#preequalized\n       */\n      this.$element.trigger('preequalized.zf.equalizer');
\n      this.$watched.css('height', max);
\n\n      /**\n       * Fires when the heights have been applied\n       * @event Equalizer#postequalized\n       */\n      this.$element.trigger('postequalized.zf.equalizer');
\n    }
\n\n    /**\n     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row\n     * @param {
array}
 groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child\n     * @fires Equalizer#preequalized\n     * @fires Equalizer#preequalizedrow\n     * @fires Equalizer#postequalizedrow\n     * @fires Equalizer#postequalized\n     */\n  }
, {
\n    key: \"applyHeightByRow\",\n    value: function applyHeightByRow(groups) {
\n      /**\n       * Fires before the heights are applied\n       */\n      this.$element.trigger('preequalized.zf.equalizer');
\n      for (var i = 0, len = groups.length;
 i < len;
 i++) {
\n        var groupsILength = groups[i].length,\n          max = groups[i][groupsILength - 1];
\n        if (groupsILength <= 2) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][0][0]).css({
\n            'height': 'auto'\n          }
);
\n          continue;
\n        }
\n        /**\n          * Fires before the heights per row are applied\n          * @event Equalizer#preequalizedrow\n          */\n        this.$element.trigger('preequalizedrow.zf.equalizer');
\n        for (var j = 0, lenJ = groupsILength - 1;
 j < lenJ;
 j++) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(groups[i][j][0]).css({
\n            'height': max\n          }
);
\n        }
\n        /**\n          * Fires when the heights per row have been applied\n          * @event Equalizer#postequalizedrow\n          */\n        this.$element.trigger('postequalizedrow.zf.equalizer');
\n      }
\n      /**\n       * Fires when the heights have been applied\n       */\n      this.$element.trigger('postequalized.zf.equalizer');
\n    }
\n\n    /**\n     * Destroys an instance of Equalizer.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this._pauseEvents();
\n      this.$watched.css('height', 'auto');
\n    }
\n  }
]);
\n  return Equalizer;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__.Plugin);
\n/**\n * Default settings for plugin\n */\nEqualizer.defaults = {
\n  /**\n   * Enable height equalization when stacked on smaller screens.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  equalizeOnStack: false,\n  /**\n   * Enable height equalization row by row.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  equalizeByRow: false,\n  /**\n   * String representing the minimum breakpoint size the plugin should equalize heights on.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  equalizeOn: ''\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.equalizer.js?");


/***/ }
),

/***/ "./js/foundation.interchange.js":
/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Interchange: function() {
 return /* binding */ Interchange;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n/**\n * Interchange module.\n * @module foundation.interchange\n * @requires foundation.util.mediaQuery\n */\nvar Interchange = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Interchange, _Plugin);
\n  var _super = _createSuper(Interchange);
\n  function Interchange() {
\n    _classCallCheck(this, Interchange);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Interchange, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of Interchange.\n     * @class\n     * @name Interchange\n     * @fires Interchange#init\n     * @param {
Object}
 element - jQuery object to add the trigger to.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Interchange.defaults, this.$element.data(), options);
\n      this.rules = [];
\n      this.currentPath = '';
\n      this.className = 'Interchange';
 // ie9 back compat\n\n      // Triggers init is idempotent, just need to make sure it is initialized\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      this._init();
\n      this._events();
\n    }
\n\n    /**\n     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();
\n      var id = this.$element[0].id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6, 'interchange');
\n      this.$element.attr({
\n        'data-resize': id,\n        'id': id\n      }
);
\n      this._parseOptions();
\n      this._addBreakpoints();
\n      this._generateRules();
\n      this._reflow();
\n    }
\n\n    /**\n     * Initializes events for Interchange.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this;
\n      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
\n        return _this._reflow();
\n      }
);
\n    }
\n\n    /**\n     * Calls necessary functions to update Interchange upon DOM change\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_reflow\",\n    value: function _reflow() {
\n      var match;
\n\n      // Iterate through each rule, but only save the last match\n      for (var i in this.rules) {
\n        if (this.rules.hasOwnProperty(i)) {
\n          var rule = this.rules[i];
\n          if (window.matchMedia(rule.query).matches) {
\n            match = rule;
\n          }
\n        }
\n      }
\n      if (match) {
\n        this.replace(match.path);
\n      }
\n    }
\n\n    /**\n     * Check options valifity and set defaults for:\n     * - `data-interchange-type`: if set, enforce the type of replacement (auto, src, background or html)\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_parseOptions\",\n    value: function _parseOptions() {
\n      var types = ['auto', 'src', 'background', 'html'];
\n      if (typeof this.options.type === 'undefined') this.options.type = 'auto';
else if (types.indexOf(this.options.type) === -1) {
\n        console.warn(\"Warning: invalid value \\\"\".concat(this.options.type, \"\\\" for Interchange option \\\"type\\\"\"));
\n        this.options.type = 'auto';
\n      }
\n    }
\n\n    /**\n     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_addBreakpoints\",\n    value: function _addBreakpoints() {
\n      for (var i in _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.queries) {
\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.queries.hasOwnProperty(i)) {
\n          var query = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.queries[i];
\n          Interchange.SPECIAL_QUERIES[query.name] = query.value;
\n        }
\n      }
\n    }
\n\n    /**\n     * Checks the Interchange element for the provided media query + content pairings\n     * @function\n     * @private\n     * @returns {
Array}
 scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys\n     */\n  }
, {
\n    key: \"_generateRules\",\n    value: function _generateRules() {
\n      var rulesList = [];
\n      var rules;
\n      if (this.options.rules) {
\n        rules = this.options.rules;
\n      }
 else {
\n        rules = this.$element.data('interchange');
\n      }
\n      rules = typeof rules === 'string' ? rules.match(/\\[.*?, .*?\\]/g) : rules;
\n      for (var i in rules) {
\n        if (rules.hasOwnProperty(i)) {
\n          var rule = rules[i].slice(1, -1).split(', ');
\n          var path = rule.slice(0, -1).join('');
\n          var query = rule[rule.length - 1];
\n          if (Interchange.SPECIAL_QUERIES[query]) {
\n            query = Interchange.SPECIAL_QUERIES[query];
\n          }
\n          rulesList.push({
\n            path: path,\n            query: query\n          }
);
\n        }
\n      }
\n      this.rules = rulesList;
\n    }
\n\n    /**\n     * Update the `src` property of an image, or change the HTML of a container, to the specified path.\n     * @function\n     * @param {
String}
 path - Path to the image or HTML partial.\n     * @fires Interchange#replaced\n     */\n  }
, {
\n    key: \"replace\",\n    value: function replace(path) {
\n      var _this2 = this;
\n      if (this.currentPath === path) return;
\n      var trigger = 'replaced.zf.interchange';
\n      var type = this.options.type;
\n      if (type === 'auto') {
\n        if (this.$element[0].nodeName === 'IMG') type = 'src';
else if (path.match(/\\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i)) type = 'background';
else type = 'html';
\n      }
\n\n      // Replacing images\n      if (type === 'src') {
\n        this.$element.attr('src', path).on('load', function () {
\n          _this2.currentPath = path;
\n        }
).trigger(trigger);
\n      }
\n      // Replacing background images\n      else if (type === 'background') {
\n        path = path.replace(/\\(/g, '%28').replace(/\\)/g, '%29');
\n        this.$element.css({
\n          'background-image': 'url(' + path + ')'\n        }
).trigger(trigger);
\n      }
\n      // Replacing HTML\n      else if (type === 'html') {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default().get(path, function (response) {
\n          _this2.$element.html(response).trigger(trigger);
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(response).foundation();
\n          _this2.currentPath = path;
\n        }
);
\n      }
\n\n      /**\n       * Fires when content in an Interchange element is done being loaded.\n       * @event Interchange#replaced\n       */\n      // this.$element.trigger('replaced.zf.interchange');
\n    }
\n\n    /**\n     * Destroys an instance of interchange.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.off('resizeme.zf.trigger');
\n    }
\n  }
]);
\n  return Interchange;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__.Plugin);
\n/**\n * Default settings for plugin\n */\nInterchange.defaults = {
\n  /**\n   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.\n   * @option\n   * @type {
?array}
\n   * @default null\n   */\n  rules: null,\n  /**\n   * Type of the responsive ressource to replace. It can take the following options:\n   * - `auto` (default): choose the type according to the element tag or the ressource extension,\n   * - `src`: replace the `[src]` attribute, recommended for images `<img>`.\n   * - `background`: replace the `background-image` CSS property.\n   * - `html`: replace the element content.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  type: 'auto'\n}
;
\nInterchange.SPECIAL_QUERIES = {
\n  'landscape': 'screen and (orientation: landscape)',\n  'portrait': 'screen and (orientation: portrait)',\n  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.interchange.js?");


/***/ }
),

/***/ "./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Magellan: function() {
 return /* binding */ Magellan;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.smoothScroll */ \"./js/foundation.smoothScroll.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n/**\n * Magellan module.\n * @module foundation.magellan\n * @requires foundation.smoothScroll\n * @requires foundation.util.triggers\n */\nvar Magellan = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Magellan, _Plugin);
\n  var _super = _createSuper(Magellan);
\n  function Magellan() {
\n    _classCallCheck(this, Magellan);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Magellan, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of Magellan.\n     * @class\n     * @name Magellan\n     * @fires Magellan#init\n     * @param {
Object}
 element - jQuery object to add the trigger to.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Magellan.defaults, this.$element.data(), options);
\n      this.className = 'Magellan';
 // ie9 back compat\n\n      // Triggers init is idempotent, just need to make sure it is initialized\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      this._init();
\n      this.calcPoints();
\n    }
\n\n    /**\n     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var id = this.$element[0].id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'magellan');
\n      this.$targets = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-magellan-target]');
\n      this.$links = this.$element.find('a');
\n      this.$element.attr({
\n        'data-resize': id,\n        'data-scroll': id,\n        'id': id\n      }
);
\n      this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
\n      this.scrollPos = parseInt(window.pageYOffset, 10);
\n      this._events();
\n    }
\n\n    /**\n     * Calculates an array of pixel values that are the demarcation lines between locations on the page.\n     * Can be invoked if new elements are added or the size of a location changes.\n     * @function\n     */\n  }
, {
\n    key: \"calcPoints\",\n    value: function calcPoints() {
\n      var _this = this,\n        body = document.body,\n        html = document.documentElement;
\n      this.points = [];
\n      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
\n      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
\n      this.$targets.each(function () {
\n        var $tar = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          pt = Math.round($tar.offset().top - _this.options.threshold);
\n        $tar.targetPoint = pt;
\n        _this.points.push(pt);
\n      }
);
\n    }
\n\n    /**\n     * Initializes events for Magellan.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this;
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).one('load', function () {
\n        if (_this.options.deepLinking) {
\n          if (location.hash) {
\n            _this.scrollToLoc(location.hash);
\n          }
\n        }
\n        _this.calcPoints();
\n        _this._updateActive();
\n      }
);
\n      _this.onLoadListener = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
\n        _this.$element.on({
\n          'resizeme.zf.trigger': _this.reflow.bind(_this),\n          'scrollme.zf.trigger': _this._updateActive.bind(_this)\n        }
).on('click.zf.magellan', 'a[href^=\"#\"]', function (e) {
\n          e.preventDefault();
\n          var arrival = this.getAttribute('href');
\n          _this.scrollToLoc(arrival);
\n        }
);
\n      }
);
\n      this._deepLinkScroll = function () {
\n        if (_this.options.deepLinking) {
\n          _this.scrollToLoc(window.location.hash);
\n        }
\n      }
;
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._deepLinkScroll);
\n    }
\n\n    /**\n     * Function to scroll to a given location on the page.\n     * @param {
String}
 loc - a properly formatted jQuery id selector. Example: '#foo'\n     * @function\n     */\n  }
, {
\n    key: \"scrollToLoc\",\n    value: function scrollToLoc(loc) {
\n      this._inTransition = true;
\n      var _this = this;
\n      var options = {
\n        animationEasing: this.options.animationEasing,\n        animationDuration: this.options.animationDuration,\n        threshold: this.options.threshold,\n        offset: this.options.offset\n      }
;
\n      _foundation_smoothScroll__WEBPACK_IMPORTED_MODULE_3__.SmoothScroll.scrollToLoc(loc, options, function () {
\n        _this._inTransition = false;
\n      }
);
\n    }
\n\n    /**\n     * Calls necessary functions to update Magellan upon DOM change\n     * @function\n     */\n  }
, {
\n    key: \"reflow\",\n    value: function reflow() {
\n      this.calcPoints();
\n      this._updateActive();
\n    }
\n\n    /**\n     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.\n     * @private\n     * @function\n     * @fires Magellan#update\n     */\n  }
, {
\n    key: \"_updateActive\",\n    value: function _updateActive( /*evt, elem, scrollPos*/\n    ) {
\n      var _this2 = this;
\n      if (this._inTransition) return;
\n      var newScrollPos = parseInt(window.pageYOffset, 10);
\n      var isScrollingUp = this.scrollPos > newScrollPos;
\n      this.scrollPos = newScrollPos;
\n      var activeIdx;
\n      // Before the first point: no link\n      if (newScrollPos < this.points[0] - this.options.offset - (isScrollingUp ? this.options.threshold : 0)) {
/* do nothing */}
\n      // At the bottom of the page: last link\n      else if (newScrollPos + this.winHeight === this.docHeight) {
\n        activeIdx = this.points.length - 1;
\n      }
\n      // Otherwhise, use the last visible link\n      else {
\n        var visibleLinks = this.points.filter(function (p) {
\n          return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
\n        }
);
\n        activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
\n      }
\n\n      // Get the new active link\n      var $oldActive = this.$active;
\n      var activeHash = '';
\n      if (typeof activeIdx !== 'undefined') {
\n        this.$active = this.$links.filter('[href=\"#' + this.$targets.eq(activeIdx).data('magellan-target') + '\"]');
\n        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
\n      }
 else {
\n        this.$active = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
\n      }
\n      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
\n      var isNewHash = activeHash !== window.location.hash;
\n\n      // Update the active link element\n      if (isNewActive) {
\n        $oldActive.removeClass(this.options.activeClass);
\n        this.$active.addClass(this.options.activeClass);
\n      }
\n\n      // Update the hash (it may have changed with the same active link)\n      if (this.options.deepLinking && isNewHash) {
\n        if (window.history.pushState) {
\n          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384\n          var url = activeHash ? activeHash : window.location.pathname + window.location.search;
\n          if (this.options.updateHistory) {
\n            window.history.pushState({
}
, '', url);
\n          }
 else {
\n            window.history.replaceState({
}
, '', url);
\n          }
\n        }
 else {
\n          window.location.hash = activeHash;
\n        }
\n      }
\n      if (isNewActive) {
\n        /**\n         * Fires when magellan is finished updating to the new active element.\n         * @event Magellan#update\n         */\n        this.$element.trigger('update.zf.magellan', [this.$active]);
\n      }
\n    }
\n\n    /**\n     * Destroys an instance of Magellan and resets the url of the window.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.off('.zf.trigger .zf.magellan').find(\".\".concat(this.options.activeClass)).removeClass(this.options.activeClass);
\n      if (this.options.deepLinking) {
\n        var hash = this.$active[0].getAttribute('href');
\n        window.location.hash.replace(hash, '');
\n      }
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._deepLinkScroll);
\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
\n    }
\n  }
]);
\n  return Magellan;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\n/**\n * Default settings for plugin\n */\nMagellan.defaults = {
\n  /**\n   * Amount of time, in ms, the animated scrolling should take between locations.\n   * @option\n   * @type {
number}
\n   * @default 500\n   */\n  animationDuration: 500,\n  /**\n   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {
string}
\n   * @default 'linear'\n   * @see {
@link https://api.jquery.com/animate|Jquery animate}
\n   */\n  animationEasing: 'linear',\n  /**\n   * Number of pixels to use as a marker for location changes.\n   * @option\n   * @type {
number}
\n   * @default 50\n   */\n  threshold: 50,\n  /**\n   * Class applied to the active locations link on the magellan container.\n   * @option\n   * @type {
string}
\n   * @default 'is-active'\n   */\n  activeClass: 'is-active',\n  /**\n   * Allows the script to manipulate the url of the current page, and if supported, alter the history.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  deepLinking: false,\n  /**\n   * Update the browser history with the active link, if deep linking is enabled.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  updateHistory: false,\n  /**\n   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  offset: 0\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.magellan.js?");


/***/ }
),

/***/ "./js/foundation.offcanvas.js":
/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   OffCanvas: function() {
 return /* binding */ OffCanvas;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n/**\n * OffCanvas module.\n * @module foundation.offCanvas\n * @requires foundation.util.keyboard\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.triggers\n */\nvar OffCanvas = /*#__PURE__*/function (_Plugin) {
\n  _inherits(OffCanvas, _Plugin);
\n  var _super = _createSuper(OffCanvas);
\n  function OffCanvas() {
\n    _classCallCheck(this, OffCanvas);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(OffCanvas, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of an off-canvas wrapper.\n     * @class\n     * @name OffCanvas\n     * @fires OffCanvas#init\n     * @param {
Object}
 element - jQuery object to initialize.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      var _this2 = this;
\n      this.className = 'OffCanvas';
 // ie9 back compat\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, OffCanvas.defaults, this.$element.data(), options);
\n      this.contentClasses = {
\n        base: [],\n        reveal: []\n      }
;
\n      this.$lastTrigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
\n      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
\n      this.position = 'left';
\n      this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
\n      this.nested = !!this.options.nested;
\n      this.$sticky = jquery__WEBPACK_IMPORTED_MODULE_0___default()();
\n      this.isInCanvas = false;
\n\n      // Defines the CSS transition/position classes of the off-canvas content container.\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['push', 'overlap']).each(function (index, val) {
\n        _this2.contentClasses.base.push('has-transition-' + val);
\n      }
);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(['left', 'right', 'top', 'bottom']).each(function (index, val) {
\n        _this2.contentClasses.base.push('has-position-' + val);
\n        _this2.contentClasses.reveal.push('has-reveal-' + val);
\n      }
);
\n\n      // Triggers init is idempotent, just need to make sure it is initialized\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_5__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery._init();
\n      this._init();
\n      this._events();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('OffCanvas', {
\n        'ESCAPE': 'close'\n      }
);
\n    }
\n\n    /**\n     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var id = this.$element.attr('id');
\n      this.$element.attr('aria-hidden', 'true');
\n\n      // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)\n      if (this.options.contentId) {
\n        this.$content = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + this.options.contentId);
\n      }
 else if (this.$element.siblings('[data-off-canvas-content]').length) {
\n        this.$content = this.$element.siblings('[data-off-canvas-content]').first();
\n      }
 else {
\n        this.$content = this.$element.closest('[data-off-canvas-content]').first();
\n      }
\n      if (!this.options.contentId) {
\n        // Assume that the off-canvas element is nested if it isn't a sibling of the content\n        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
\n      }
 else if (this.options.contentId && this.options.nested === null) {
\n        // Warning if using content ID without setting the nested option\n        // Once the element is nested it is required to work properly in this case\n        console.warn('Remember to use the nested option if using the content ID option!');
\n      }
\n      if (this.nested === true) {
\n        // Force transition overlap if nested\n        this.options.transition = 'overlap';
\n        // Remove appropriate classes if already assigned in markup\n        this.$element.removeClass('is-transition-push');
\n      }
\n      this.$element.addClass(\"is-transition-\".concat(this.options.transition, \" is-closed\"));
\n\n      // Find triggers that affect this element and add aria-expanded to them\n      this.$triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).find('[data-open=\"' + id + '\"], [data-close=\"' + id + '\"], [data-toggle=\"' + id + '\"]').attr('aria-expanded', 'false').attr('aria-controls', id);
\n\n      // Get position by checking for related CSS class\n      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\\-(left|top|right|bottom)/)[1] : this.position;
\n\n      // Add an overlay over the content if necessary\n      if (this.options.contentOverlay === true) {
\n        var overlay = document.createElement('div');
\n        var overlayPosition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$element).css(\"position\") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
\n        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
\n        this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(overlay);
\n        if (overlayPosition === 'is-overlay-fixed') {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$overlay).insertAfter(this.$element);
\n        }
 else {
\n          this.$content.append(this.$overlay);
\n        }
\n      }
\n\n      // Get the revealOn option from the class.\n      var revealOnRegExp = new RegExp((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.RegExpEscape)(this.options.revealClass) + '([^\\\\s]+)', 'g');
\n      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);
\n      if (revealOnClass) {
\n        this.options.isRevealed = true;
\n        this.options.revealOn = this.options.revealOn || revealOnClass[1];
\n      }
\n\n      // Ensure the `reveal-on-*` class is set.\n      if (this.options.isRevealed === true && this.options.revealOn) {
\n        this.$element.first().addClass(\"\".concat(this.options.revealClass).concat(this.options.revealOn));
\n        this._setMQChecker();
\n      }
\n      if (this.options.transitionTime) {
\n        this.$element.css('transition-duration', this.options.transitionTime);
\n      }
\n\n      // Find fixed elements that should stay fixed while off-canvas is opened\n      this.$sticky = this.$content.find('[data-off-canvas-sticky]');
\n      if (this.$sticky.length > 0 && this.options.transition === 'push') {
\n        // If there's at least one match force contentScroll:false because the absolute top value doesn't get recalculated on scroll\n        // Limit to push transition since there's no transform scope for overlap\n        this.options.contentScroll = false;
\n      }
\n      var inCanvasFor = this.$element.attr('class').match(/\\bin-canvas-for-(\\w+)/);
\n      if (inCanvasFor && inCanvasFor.length === 2) {
\n        // Set `inCanvasOn` option if found in-canvas-for-[BREAKPONT] CSS class\n        this.options.inCanvasOn = inCanvasFor[1];
\n      }
 else if (this.options.inCanvasOn) {
\n        // Ensure the CSS class is set\n        this.$element.addClass(\"in-canvas-for-\".concat(this.options.inCanvasOn));
\n      }
\n      if (this.options.inCanvasOn) {
\n        this._checkInCanvas();
\n      }
\n\n      // Initally remove all transition/position CSS classes from off-canvas content container.\n      this._removeContentClasses();
\n    }
\n\n    /**\n     * Adds event handlers to the off-canvas wrapper and the exit overlay.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this3 = this;
\n      this.$element.off('.zf.trigger .zf.offCanvas').on({
\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': this.close.bind(this),\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'keydown.zf.offCanvas': this._handleKeyboard.bind(this)\n      }
);
\n      if (this.options.closeOnClick === true) {
\n        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
\n        $target.on({
\n          'click.zf.offCanvas': this.close.bind(this)\n        }
);
\n      }
\n      if (this.options.inCanvasOn) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
\n          _this3._checkInCanvas();
\n        }
);
\n      }
\n    }
\n\n    /**\n     * Applies event listener for elements that will reveal at certain breakpoints.\n     * @private\n     */\n  }
, {
\n    key: \"_setMQChecker\",\n    value: function _setMQChecker() {
\n      var _this = this;
\n      this.onLoadListener = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.atLeast(_this.options.revealOn)) {
\n          _this.reveal(true);
\n        }
\n      }
);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.atLeast(_this.options.revealOn)) {
\n          _this.reveal(true);
\n        }
 else {
\n          _this.reveal(false);
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Checks if InCanvas on current breakpoint and adjust off-canvas accordingly\n     * @private\n     */\n  }
, {
\n    key: \"_checkInCanvas\",\n    value: function _checkInCanvas() {
\n      this.isInCanvas = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.atLeast(this.options.inCanvasOn);
\n      if (this.isInCanvas === true) {
\n        this.close();
\n      }
\n    }
\n\n    /**\n     * Removes the CSS transition/position classes of the off-canvas content container.\n     * Removing the classes is important when another off-canvas gets opened that uses the same content container.\n     * @param {
Boolean}
 hasReveal - true if related off-canvas element is revealed.\n     * @private\n     */\n  }
, {
\n    key: \"_removeContentClasses\",\n    value: function _removeContentClasses(hasReveal) {
\n      if (typeof hasReveal !== 'boolean') {
\n        this.$content.removeClass(this.contentClasses.base.join(' '));
\n      }
 else if (hasReveal === false) {
\n        this.$content.removeClass(\"has-reveal-\".concat(this.position));
\n      }
\n    }
\n\n    /**\n     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.\n     * Beforehand any transition/position class gets removed.\n     * @param {
Boolean}
 hasReveal - true if related off-canvas element is revealed.\n     * @private\n     */\n  }
, {
\n    key: \"_addContentClasses\",\n    value: function _addContentClasses(hasReveal) {
\n      this._removeContentClasses(hasReveal);
\n      if (typeof hasReveal !== 'boolean') {
\n        this.$content.addClass(\"has-transition-\".concat(this.options.transition, \" has-position-\").concat(this.position));
\n      }
 else if (hasReveal === true) {
\n        this.$content.addClass(\"has-reveal-\".concat(this.position));
\n      }
\n    }
\n\n    /**\n     * Preserves the fixed behavior of sticky elements on opening an off-canvas with push transition.\n     * Since the off-canvas container has got a transform scope in such a case, it is done by calculating position absolute values.\n     * @private\n     */\n  }
, {
\n    key: \"_fixStickyElements\",\n    value: function _fixStickyElements() {
\n      this.$sticky.each(function (_, el) {
\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
\n\n        // If sticky element is currently fixed, adjust its top value to match absolute position due to transform scope\n        // Limit to push transition because postion:fixed works without problems for overlap (no transform scope)\n        if ($el.css('position') === 'fixed') {
\n          // Save current inline styling to restore it if undoing the absolute fixing\n          var topVal = parseInt($el.css('top'), 10);
\n          $el.data('offCanvasSticky', {
\n            top: topVal\n          }
);
\n          var absoluteTopVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).scrollTop() + topVal;
\n          $el.css({
\n            top: \"\".concat(absoluteTopVal, \"px\"),\n            width: '100%',\n            transition: 'none'\n          }
);
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Restores the original fixed styling of sticky elements after having closed an off-canvas that got pseudo fixed beforehand.\n     * This reverts the changes of _fixStickyElements()\n     * @private\n     */\n  }
, {
\n    key: \"_unfixStickyElements\",\n    value: function _unfixStickyElements() {
\n      this.$sticky.each(function (_, el) {
\n        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
\n        var stickyData = $el.data('offCanvasSticky');
\n\n        // If sticky element has got data object with prior values (meaning it was originally fixed) restore these values once off-canvas is closed\n        if (_typeof(stickyData) === 'object') {
\n          $el.css({
\n            top: \"\".concat(stickyData.top, \"px\"),\n            width: '',\n            transition: ''\n          }
);
\n          $el.data('offCanvasSticky', '');
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.\n     * @param {
Boolean}
 isRevealed - true if element should be revealed.\n     * @function\n     */\n  }
, {
\n    key: \"reveal\",\n    value: function reveal(isRevealed) {
\n      if (isRevealed) {
\n        this.close();
\n        this.isRevealed = true;
\n        this.$element.attr('aria-hidden', 'false');
\n        this.$element.off('open.zf.trigger toggle.zf.trigger');
\n        this.$element.removeClass('is-closed');
\n      }
 else {
\n        this.isRevealed = false;
\n        this.$element.attr('aria-hidden', 'true');
\n        this.$element.off('open.zf.trigger toggle.zf.trigger').on({
\n          'open.zf.trigger': this.open.bind(this),\n          'toggle.zf.trigger': this.toggle.bind(this)\n        }
);
\n        this.$element.addClass('is-closed');
\n      }
\n      this._addContentClasses(isRevealed);
\n    }
\n\n    /**\n     * Stops scrolling of the body when OffCanvas is open on mobile Safari and other troublesome browsers.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_stopScrolling\",\n    value: function _stopScrolling() {
\n      return false;
\n    }
\n\n    /**\n     * Save current finger y-position\n     * @param event\n     * @private\n     */\n  }
, {
\n    key: \"_recordScrollable\",\n    value: function _recordScrollable(event) {
\n      var elem = this;
\n      elem.lastY = event.touches[0].pageY;
\n    }
\n\n    /**\n     * Prevent further scrolling when it hits the edges\n     * @param event\n     * @private\n     */\n  }
, {
\n    key: \"_preventDefaultAtEdges\",\n    value: function _preventDefaultAtEdges(event) {
\n      var elem = this;
\n      var _this = event.data;
\n      var delta = elem.lastY - event.touches[0].pageY;
\n      elem.lastY = event.touches[0].pageY;
\n      if (!_this._canScroll(delta, elem)) {
\n        event.preventDefault();
\n      }
\n    }
\n\n    /**\n     * Handle continuous scrolling of scrollbox\n     * Don't bubble up to _preventDefaultAtEdges\n     * @param event\n     * @private\n     */\n  }
, {
\n    key: \"_scrollboxTouchMoved\",\n    value: function _scrollboxTouchMoved(event) {
\n      var elem = this;
\n      var _this = event.data;
\n      var parent = elem.closest('[data-off-canvas], [data-off-canvas-scrollbox-outer]');
\n      var delta = elem.lastY - event.touches[0].pageY;
\n      parent.lastY = elem.lastY = event.touches[0].pageY;
\n      event.stopPropagation();
\n      if (!_this._canScroll(delta, elem)) {
\n        if (!_this._canScroll(delta, parent)) {
\n          event.preventDefault();
\n        }
 else {
\n          parent.scrollTop += delta;
\n        }
\n      }
\n    }
\n\n    /**\n     * Detect possibility of scrolling\n     * @param delta\n     * @param elem\n     * @returns boolean\n     * @private\n     */\n  }
, {
\n    key: \"_canScroll\",\n    value: function _canScroll(delta, elem) {
\n      var up = delta < 0;
\n      var down = delta > 0;
\n      var allowUp = elem.scrollTop > 0;
\n      var allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
\n      return up && allowUp || down && allowDown;
\n    }
\n\n    /**\n     * Opens the off-canvas menu.\n     * @function\n     * @param {
Object}
 event - Event object passed from listener.\n     * @param {
jQuery}
 trigger - element that triggered the off-canvas to open.\n     * @fires OffCanvas#opened\n     * @todo also trigger 'open' event?\n     */\n  }
, {
\n    key: \"open\",\n    value: function open(event, trigger) {
\n      var _this4 = this;
\n      if (this.$element.hasClass('is-open') || this.isRevealed || this.isInCanvas) {
\n        return;
\n      }
\n      var _this = this;
\n      if (trigger) {
\n        this.$lastTrigger = trigger;
\n      }
\n      if (this.options.forceTo === 'top') {
\n        window.scrollTo(0, 0);
\n      }
 else if (this.options.forceTo === 'bottom') {
\n        window.scrollTo(0, document.body.scrollHeight);
\n      }
\n      if (this.options.transitionTime && this.options.transition !== 'overlap') {
\n        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
\n      }
 else {
\n        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
\n      }
\n      this.$element.addClass('is-open').removeClass('is-closed');
\n      this.$triggers.attr('aria-expanded', 'true');
\n      this.$element.attr('aria-hidden', 'false');
\n      this.$content.addClass('is-open-' + this.position);
\n\n      // If `contentScroll` is set to false, add class and disable scrolling on touch devices.\n      if (this.options.contentScroll === false) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
\n        this.$element.on('touchstart', this._recordScrollable);
\n        this.$element.on('touchmove', this, this._preventDefaultAtEdges);
\n        this.$element.on('touchstart', '[data-off-canvas-scrollbox]', this._recordScrollable);
\n        this.$element.on('touchmove', '[data-off-canvas-scrollbox]', this, this._scrollboxTouchMoved);
\n      }
\n      if (this.options.contentOverlay === true) {
\n        this.$overlay.addClass('is-visible');
\n      }
\n      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
\n        this.$overlay.addClass('is-closable');
\n      }
\n      if (this.options.autoFocus === true) {
\n        this.$element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.transitionend)(this.$element), function () {
\n          if (!_this.$element.hasClass('is-open')) {
\n            return;
 // exit if prematurely closed\n          }
\n\n          var canvasFocus = _this.$element.find('[data-autofocus]');
\n          if (canvasFocus.length) {
\n            canvasFocus.eq(0).focus();
\n          }
 else {
\n            _this.$element.find('a, button').eq(0).focus();
\n          }
\n        }
);
\n      }
\n      if (this.options.trapFocus === true) {
\n        this.$content.attr('tabindex', '-1');
\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.trapFocus(this.$element);
\n      }
\n      if (this.options.transition === 'push') {
\n        this._fixStickyElements();
\n      }
\n      this._addContentClasses();
\n\n      /**\n       * Fires when the off-canvas menu opens.\n       * @event OffCanvas#opened\n       */\n      this.$element.trigger('opened.zf.offCanvas');
\n\n      /**\n       * Fires when the off-canvas menu open transition is done.\n       * @event OffCanvas#openedEnd\n       */\n      this.$element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.transitionend)(this.$element), function () {
\n        _this4.$element.trigger('openedEnd.zf.offCanvas');
\n      }
);
\n    }
\n\n    /**\n     * Closes the off-canvas menu.\n     * @function\n     * @param {
Function}
 cb - optional cb to fire after closure.\n     * @fires OffCanvas#close\n     * @fires OffCanvas#closed\n     */\n  }
, {
\n    key: \"close\",\n    value: function close() {
\n      var _this5 = this;
\n      if (!this.$element.hasClass('is-open') || this.isRevealed) {
\n        return;
\n      }
\n\n      /**\n       * Fires when the off-canvas menu closes.\n       * @event OffCanvas#close\n       */\n      this.$element.trigger('close.zf.offCanvas');
\n      this.$element.removeClass('is-open');
\n      this.$element.attr('aria-hidden', 'true');
\n      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom');
\n      if (this.options.contentOverlay === true) {
\n        this.$overlay.removeClass('is-visible');
\n      }
\n      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
\n        this.$overlay.removeClass('is-closable');
\n      }
\n      this.$triggers.attr('aria-expanded', 'false');
\n\n      // Listen to transitionEnd: add class, re-enable scrolling and release focus when done.\n      this.$element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.transitionend)(this.$element), function () {
\n        _this5.$element.addClass('is-closed');
\n        _this5._removeContentClasses();
\n        if (_this5.options.transition === 'push') {
\n          _this5._unfixStickyElements();
\n        }
\n\n        // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.\n        if (_this5.options.contentScroll === false) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').removeClass('is-off-canvas-open').off('touchmove', _this5._stopScrolling);
\n          _this5.$element.off('touchstart', _this5._recordScrollable);
\n          _this5.$element.off('touchmove', _this5._preventDefaultAtEdges);
\n          _this5.$element.off('touchstart', '[data-off-canvas-scrollbox]', _this5._recordScrollable);
\n          _this5.$element.off('touchmove', '[data-off-canvas-scrollbox]', _this5._scrollboxTouchMoved);
\n        }
\n        if (_this5.options.trapFocus === true) {
\n          _this5.$content.removeAttr('tabindex');
\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.releaseFocus(_this5.$element);
\n        }
\n\n        /**\n         * Fires when the off-canvas menu close transition is done.\n         * @event OffCanvas#closed\n         */\n        _this5.$element.trigger('closed.zf.offCanvas');
\n      }
);
\n    }
\n\n    /**\n     * Toggles the off-canvas menu open or closed.\n     * @function\n     * @param {
Object}
 event - Event object passed from listener.\n     * @param {
jQuery}
 trigger - element that triggered the off-canvas to open.\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle(event, trigger) {
\n      if (this.$element.hasClass('is-open')) {
\n        this.close(event, trigger);
\n      }
 else {
\n        this.open(event, trigger);
\n      }
\n    }
\n\n    /**\n     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_handleKeyboard\",\n    value: function _handleKeyboard(e) {
\n      var _this6 = this;
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e, 'OffCanvas', {
\n        close: function close() {
\n          _this6.close();
\n          _this6.$lastTrigger.focus();
\n          return true;
\n        }
,\n        handled: function handled() {
\n          e.preventDefault();
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Destroys the OffCanvas plugin.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.close();
\n      this.$element.off('.zf.trigger .zf.offCanvas');
\n      this.$overlay.off('.zf.offCanvas');
\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
\n    }
\n  }
]);
\n  return OffCanvas;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\nOffCanvas.defaults = {
\n  /**\n   * Allow the user to click outside of the menu to close it.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  closeOnClick: true,\n  /**\n   * Adds an overlay on top of `[data-off-canvas-content]`.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  contentOverlay: true,\n  /**\n   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.\n   * @option\n   * @type {
?string}
\n   * @default null\n   */\n  contentId: null,\n  /**\n   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.\n   * @option\n   * @type {
boolean}
\n   * @default null\n   */\n  nested: null,\n  /**\n   * Enable/disable scrolling of the main content when an off canvas panel is open.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  contentScroll: true,\n  /**\n   * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.\n   * @option\n   * @type {
string}
\n   * @default null\n   */\n  transitionTime: null,\n  /**\n   * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.\n   * @option\n   * @type {
string}
\n   * @default push\n   */\n  transition: 'push',\n  /**\n   * Force the page to scroll to top or bottom on open.\n   * @option\n   * @type {
?string}
\n   * @default null\n   */\n  forceTo: null,\n  /**\n   * Allow the OffCanvas to remain open for certain breakpoints.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  isRevealed: false,\n  /**\n   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.\n   * @option\n   * @type {
?string}
\n   * @default null\n   */\n  revealOn: null,\n  /**\n   * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.\n   * @option\n   * @type {
?string}
\n   * @default null\n   */\n  inCanvasOn: null,\n  /**\n   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  autoFocus: true,\n  /**\n   * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.\n   * @option\n   * @type {
string}
\n   * @default reveal-for-\n   * @todo improve the regex testing for this.\n   */\n  revealClass: 'reveal-for-',\n  /**\n   * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  trapFocus: false\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.offcanvas.js?");


/***/ }
),

/***/ "./js/foundation.orbit.js":
/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Orbit: function() {
 return /* binding */ Orbit;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");
\n/* harmony import */ var _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.timer */ \"./js/foundation.util.timer.js\");
\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n\n\n/**\n * Orbit module.\n * @module foundation.orbit\n * @requires foundation.util.keyboard\n * @requires foundation.util.motion\n * @requires foundation.util.timer\n * @requires foundation.util.imageLoader\n * @requires foundation.util.touch\n */\nvar Orbit = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Orbit, _Plugin);
\n  var _super = _createSuper(Orbit);
\n  function Orbit() {
\n    _classCallCheck(this, Orbit);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Orbit, [{
\n    key: \"_setup\",\n    value:\n    /**\n    * Creates a new instance of an orbit carousel.\n    * @class\n    * @name Orbit\n    * @param {
jQuery}
 element - jQuery object to make into an Orbit Carousel.\n    * @param {
Object}
 options - Overrides to the default plugin settings.\n    */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Orbit.defaults, this.$element.data(), options);
\n      this.className = 'Orbit';
 // ie9 back compat\n\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__.Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
 // Touch init is idempotent, we just need to make sure it's initialied.\n\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Orbit', {
\n        'ltr': {
\n          'ARROW_RIGHT': 'next',\n          'ARROW_LEFT': 'previous'\n        }
,\n        'rtl': {
\n          'ARROW_LEFT': 'next',\n          'ARROW_RIGHT': 'previous'\n        }
\n      }
);
\n    }
\n\n    /**\n    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.\n    * @function\n    * @private\n    */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide\n      this._reset();
\n      this.$wrapper = this.$element.find(\".\".concat(this.options.containerClass));
\n      this.$slides = this.$element.find(\".\".concat(this.options.slideClass));
\n      var $images = this.$element.find('img'),\n        initActive = this.$slides.filter('.is-active'),\n        id = this.$element[0].id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_5__.GetYoDigits)(6, 'orbit');
\n      this.$element.attr({
\n        'data-resize': id,\n        'id': id\n      }
);
\n      if (!initActive.length) {
\n        this.$slides.eq(0).addClass('is-active');
\n      }
\n      if (!this.options.useMUI) {
\n        this.$slides.addClass('no-motionui');
\n      }
\n      if ($images.length) {
\n        (0,_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__.onImagesLoaded)($images, this._prepareForOrbit.bind(this));
\n      }
 else {
\n        this._prepareForOrbit();
 //hehe\n      }
\n\n      if (this.options.bullets) {
\n        this._loadBullets();
\n      }
\n      this._events();
\n      if (this.options.autoPlay && this.$slides.length > 1) {
\n        this.geoSync();
\n      }
\n      if (this.options.accessible) {
\n        // allow wrapper to be focusable to enable arrow navigation\n        this.$wrapper.attr('tabindex', 0);
\n      }
\n    }
\n\n    /**\n    * Creates a jQuery collection of bullets, if they are being used.\n    * @function\n    * @private\n    */\n  }
, {
\n    key: \"_loadBullets\",\n    value: function _loadBullets() {
\n      this.$bullets = this.$element.find(\".\".concat(this.options.boxOfBullets)).find('button');
\n    }
\n\n    /**\n    * Sets a `timer` object on the orbit, and starts the counter for the next slide.\n    * @function\n    */\n  }
, {
\n    key: \"geoSync\",\n    value: function geoSync() {
\n      var _this = this;
\n      this.timer = new _foundation_util_timer__WEBPACK_IMPORTED_MODULE_3__.Timer(this.$element, {
\n        duration: this.options.timerDelay,\n        infinite: false\n      }
, function () {
\n        _this.changeSlide(true);
\n      }
);
\n      this.timer.start();
\n    }
\n\n    /**\n    * Sets wrapper and slide heights for the orbit.\n    * @function\n    * @private\n    */\n  }
, {
\n    key: \"_prepareForOrbit\",\n    value: function _prepareForOrbit() {
\n      this._setWrapperHeight();
\n    }
\n\n    /**\n    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.\n    * @function\n    * @private\n    * @param {
Function}
 cb - a callback function to fire when complete.\n    */\n  }
, {
\n    key: \"_setWrapperHeight\",\n    value: function _setWrapperHeight(cb) {
\n      //rewrite this to `for` loop\n      var max = 0,\n        temp,\n        counter = 0,\n        _this = this;
\n      this.$slides.each(function () {
\n        temp = this.getBoundingClientRect().height;
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-slide', counter);
\n\n        // hide all slides but the active one\n        if (!/mui/g.test(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({
\n            'display': 'none'\n          }
);
\n        }
\n        max = temp > max ? temp : max;
\n        counter++;
\n      }
);
\n      if (counter === this.$slides.length) {
\n        this.$wrapper.css({
\n          'height': max\n        }
);
 //only change the wrapper height property once.\n        if (cb) {
\n          cb(max);
\n        }
 //fire callback with max height dimension.\n      }
\n    }
\n\n    /**\n    * Sets the max-height of each slide.\n    * @function\n    * @private\n    */\n  }
, {
\n    key: \"_setSlideHeight\",\n    value: function _setSlideHeight(height) {
\n      this.$slides.each(function () {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css('max-height', height);
\n      }
);
\n    }
\n\n    /**\n    * Adds event listeners to basically everything within the element.\n    * @function\n    * @private\n    */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this;
\n\n      //***************************************\n      //**Now using custom event - thanks to:**\n      //**      Yohai Ararat of Toronto      **\n      //***************************************\n      //\n      this.$element.off('.resizeme.zf.trigger').on({
\n        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)\n      }
);
\n      if (this.$slides.length > 1) {
\n        if (this.options.swipe) {
\n          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
\n            e.preventDefault();
\n            _this.changeSlide(true);
\n          }
).on('swiperight.zf.orbit', function (e) {
\n            e.preventDefault();
\n            _this.changeSlide(false);
\n          }
);
\n        }
\n        //***************************************\n\n        if (this.options.autoPlay) {
\n          this.$slides.on('click.zf.orbit', function () {
\n            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);
\n            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
\n          }
);
\n          if (this.options.pauseOnHover) {
\n            this.$element.on('mouseenter.zf.orbit', function () {
\n              _this.timer.pause();
\n            }
).on('mouseleave.zf.orbit', function () {
\n              if (!_this.$element.data('clickedOn')) {
\n                _this.timer.start();
\n              }
\n            }
);
\n          }
\n        }
\n        if (this.options.navButtons) {
\n          var $controls = this.$element.find(\".\".concat(this.options.nextClass, \", .\").concat(this.options.prevClass));
\n          $controls.attr('tabindex', 0)\n          //also need to handle enter/return and spacebar key presses\n          .on('click.zf.orbit touchend.zf.orbit', function (e) {
\n            e.preventDefault();
\n            _this.changeSlide(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(_this.options.nextClass));
\n          }
);
\n        }
\n        if (this.options.bullets) {
\n          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
\n            if (/is-active/g.test(this.className)) {
\n              return false;
\n            }
 //if this is active, kick out of function.\n            var idx = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('slide'),\n              ltr = idx > _this.$slides.filter('.is-active').data('slide'),\n              $slide = _this.$slides.eq(idx);
\n            _this.changeSlide(ltr, $slide, idx);
\n          }
);
\n        }
\n        if (this.options.accessible) {
\n          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
\n            // handle keyboard event with keyboard util\n            _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e, 'Orbit', {
\n              next: function next() {
\n                _this.changeSlide(true);
\n              }
,\n              previous: function previous() {
\n                _this.changeSlide(false);
\n              }
,\n              handled: function handled() {
\n                // if bullet is focused, make sure focus moves\n                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is(_this.$bullets)) {
\n                  _this.$bullets.filter('.is-active').focus();
\n                }
\n              }
\n            }
);
\n          }
);
\n        }
\n      }
\n    }
\n\n    /**\n     * Resets Orbit so it can be reinitialized\n     */\n  }
, {
\n    key: \"_reset\",\n    value: function _reset() {
\n      // Don't do anything if there are no slides (first run)\n      if (typeof this.$slides === 'undefined') {
\n        return;
\n      }
\n      if (this.$slides.length > 1) {
\n        // Remove old events\n        this.$element.off('.zf.orbit').find('*').off('.zf.orbit');
\n\n        // Restart timer if autoPlay is enabled\n        if (this.options.autoPlay) {
\n          this.timer.restart();
\n        }
\n\n        // Reset all sliddes\n        this.$slides.each(function (el) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
\n        }
);
\n\n        // Show the first slide\n        this.$slides.first().addClass('is-active').show();
\n\n        // Triggers when the slide has finished animating\n        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]);
\n\n        // Select first bullet if bullets are present\n        if (this.options.bullets) {
\n          this._updateBullets(0);
\n        }
\n      }
\n    }
\n\n    /**\n    * Changes the current slide to a new one.\n    * @function\n    * @param {
Boolean}
 isLTR - if true the slide moves from right to left, if false the slide moves from left to right.\n    * @param {
jQuery}
 chosenSlide - the jQuery element of the slide to show next, if one is selected.\n    * @param {
Number}
 idx - the index of the new slide in its collection, if one chosen.\n    * @fires Orbit#slidechange\n    */\n  }
, {
\n    key: \"changeSlide\",\n    value: function changeSlide(isLTR, chosenSlide, idx) {
\n      if (!this.$slides) {
\n        return;
\n      }
 // Don't freak out if we're in the middle of cleanup\n      var $curSlide = this.$slides.filter('.is-active').eq(0);
\n      if (/mui/g.test($curSlide[0].className)) {
\n        return false;
\n      }
 //if the slide is currently animating, kick out of the function\n\n      var $firstSlide = this.$slides.first(),\n        $lastSlide = this.$slides.last(),\n        dirIn = isLTR ? 'Right' : 'Left',\n        dirOut = isLTR ? 'Left' : 'Right',\n        _this = this,\n        $newSlide;
\n      if (!chosenSlide) {
\n        //most of the time, this will be auto played or clicked from the navButtons.\n        $newSlide = isLTR ?\n        //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!\n        this.options.infiniteWrap ? $curSlide.next(\".\".concat(this.options.slideClass)).length ? $curSlide.next(\".\".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(\".\".concat(this.options.slideClass)) //pick next slide if moving left to right\n        : this.options.infiniteWrap ? $curSlide.prev(\".\".concat(this.options.slideClass)).length ? $curSlide.prev(\".\".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(\".\".concat(this.options.slideClass));
 //pick prev slide if moving right to left\n      }
 else {
\n        $newSlide = chosenSlide;
\n      }
\n      if ($newSlide.length) {
\n        /**\n        * Triggers before the next slide starts animating in and only if a next slide has been found.\n        * @event Orbit#beforeslidechange\n        */\n        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);
\n        if (this.options.bullets) {
\n          idx = idx || this.$slides.index($newSlide);
 //grab index to update bullets\n          this._updateBullets(idx);
\n        }
\n        if (this.options.useMUI && !this.$element.is(':hidden')) {
\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateIn($newSlide.addClass('is-active'), this.options[\"animInFrom\".concat(dirIn)], function () {
\n            $newSlide.css({
\n              'display': 'block'\n            }
).attr('aria-live', 'polite');
\n          }
);
\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateOut($curSlide.removeClass('is-active'), this.options[\"animOutTo\".concat(dirOut)], function () {
\n            $curSlide.removeAttr('aria-live');
\n            if (_this.options.autoPlay && !_this.timer.isPaused) {
\n              _this.timer.restart();
\n            }
\n            //do stuff?\n          }
);
\n        }
 else {
\n          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
\n          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();
\n          if (this.options.autoPlay && !this.timer.isPaused) {
\n            this.timer.restart();
\n          }
\n        }
\n        /**\n        * Triggers when the slide has finished animating in.\n        * @event Orbit#slidechange\n        */\n        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
\n      }
\n    }
\n\n    /**\n    * Updates the active state of the bullets, if displayed.\n    * Move the descriptor of the current slide `[data-slide-active-label]` to the newly active bullet.\n    * If no `[data-slide-active-label]` is set, will move the exceeding `span` element.\n    *\n    * @function\n    * @private\n    * @param {
Number}
 idx - the index of the current slide.\n    */\n  }
, {
\n    key: \"_updateBullets\",\n    value: function _updateBullets(idx) {
\n      var $oldBullet = this.$bullets.filter('.is-active');
\n      var $othersBullets = this.$bullets.not('.is-active');
\n      var $newBullet = this.$bullets.eq(idx);
\n      $oldBullet.removeClass('is-active').blur();
\n      $newBullet.addClass('is-active');
\n\n      // Find the descriptor for the current slide to move it to the new slide button\n      var activeStateDescriptor = $oldBullet.children('[data-slide-active-label]').last();
\n\n      // If not explicitely given, search for the last \"exceeding\" span element (compared to others bullets).\n      if (!activeStateDescriptor.length) {
\n        var spans = $oldBullet.children('span');
\n        var spanCountInOthersBullets = $othersBullets.toArray().map(function (b) {
\n          return jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).children('span').length;
\n        }
);
\n\n        // If there is an exceeding span element, use it as current slide descriptor\n        if (spanCountInOthersBullets.every(function (count) {
\n          return count < spans.length;
\n        }
)) {
\n          activeStateDescriptor = spans.last();
\n          activeStateDescriptor.attr('data-slide-active-label', '');
\n        }
\n      }
\n\n      // Move the current slide descriptor to the new slide button\n      if (activeStateDescriptor.length) {
\n        activeStateDescriptor.detach();
\n        $newBullet.append(activeStateDescriptor);
\n      }
\n    }
\n\n    /**\n    * Destroys the carousel and hides the element.\n    * @function\n    */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
\n    }
\n  }
]);
\n  return Orbit;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_6__.Plugin);
\nOrbit.defaults = {
\n  /**\n  * Tells the JS to look for and loadBullets.\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  bullets: true,\n  /**\n  * Tells the JS to apply event listeners to nav buttons\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  navButtons: true,\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {
string}
\n  * @default 'slide-in-right'\n  */\n  animInFromRight: 'slide-in-right',\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {
string}
\n  * @default 'slide-out-right'\n  */\n  animOutToRight: 'slide-out-right',\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {
string}
\n  * @default 'slide-in-left'\n  *\n  */\n  animInFromLeft: 'slide-in-left',\n  /**\n  * motion-ui animation class to apply\n  * @option\n   * @type {
string}
\n  * @default 'slide-out-left'\n  */\n  animOutToLeft: 'slide-out-left',\n  /**\n  * Allows Orbit to automatically animate on page load.\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  autoPlay: true,\n  /**\n  * Amount of time, in ms, between slide transitions\n  * @option\n   * @type {
number}
\n  * @default 5000\n  */\n  timerDelay: 5000,\n  /**\n  * Allows Orbit to infinitely loop through the slides\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  infiniteWrap: true,\n  /**\n  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  swipe: true,\n  /**\n  * Allows the timing function to pause animation on hover.\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  pauseOnHover: true,\n  /**\n  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  accessible: true,\n  /**\n  * Class applied to the container of Orbit\n  * @option\n   * @type {
string}
\n  * @default 'orbit-container'\n  */\n  containerClass: 'orbit-container',\n  /**\n  * Class applied to individual slides.\n  * @option\n   * @type {
string}
\n  * @default 'orbit-slide'\n  */\n  slideClass: 'orbit-slide',\n  /**\n  * Class applied to the bullet container. You're welcome.\n  * @option\n   * @type {
string}
\n  * @default 'orbit-bullets'\n  */\n  boxOfBullets: 'orbit-bullets',\n  /**\n  * Class applied to the `next` navigation button.\n  * @option\n   * @type {
string}
\n  * @default 'orbit-next'\n  */\n  nextClass: 'orbit-next',\n  /**\n  * Class applied to the `previous` navigation button.\n  * @option\n   * @type {
string}
\n  * @default 'orbit-previous'\n  */\n  prevClass: 'orbit-previous',\n  /**\n  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.\n  * @option\n   * @type {
boolean}
\n  * @default true\n  */\n  useMUI: true\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.orbit.js?");


/***/ }
),

/***/ "./js/foundation.positionable.js":
/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Positionable: function() {
 return /* binding */ Positionable;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation.util.box */ \"./js/foundation.util.box.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\nvar POSITIONS = ['left', 'right', 'top', 'bottom'];
\nvar VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
\nvar HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
\nvar ALIGNMENTS = {
\n  'left': VERTICAL_ALIGNMENTS,\n  'right': VERTICAL_ALIGNMENTS,\n  'top': HORIZONTAL_ALIGNMENTS,\n  'bottom': HORIZONTAL_ALIGNMENTS\n}
;
\nfunction nextItem(item, array) {
\n  var currentIdx = array.indexOf(item);
\n  if (currentIdx === array.length - 1) {
\n    return array[0];
\n  }
 else {
\n    return array[currentIdx + 1];
\n  }
\n}
\nvar Positionable = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Positionable, _Plugin);
\n  var _super = _createSuper(Positionable);
\n  function Positionable() {
\n    _classCallCheck(this, Positionable);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Positionable, [{
\n    key: \"_init\",\n    value:\n    /**\n     * Abstract class encapsulating the tether-like explicit positioning logic\n     * including repositioning based on overlap.\n     * Expects classes to define defaults for vOffset, hOffset, position,\n     * alignment, allowOverlap, and allowBottomOverlap. They can do this by\n     * extending the defaults, or (for now recommended due to the way docs are\n     * generated) by explicitly declaring them.\n     *\n     **/\n\n    function _init() {
\n      this.triedPositions = {
}
;
\n      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
\n      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
\n      this.originalPosition = this.position;
\n      this.originalAlignment = this.alignment;
\n    }
\n  }
, {
\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {
\n      return 'bottom';
\n    }
\n  }
, {
\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {
\n      switch (this.position) {
\n        case 'bottom':\n        case 'top':\n          return (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.rtl)() ? 'right' : 'left';
\n        case 'left':\n        case 'right':\n          return 'bottom';
\n      }
\n    }
\n\n    /**\n     * Adjusts the positionable possible positions by iterating through alignments\n     * and positions.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_reposition\",\n    value: function _reposition() {
\n      if (this._alignmentsExhausted(this.position)) {
\n        this.position = nextItem(this.position, POSITIONS);
\n        this.alignment = ALIGNMENTS[this.position][0];
\n      }
 else {
\n        this._realign();
\n      }
\n    }
\n\n    /**\n     * Adjusts the dropdown pane possible positions by iterating through alignments\n     * on the current position.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_realign\",\n    value: function _realign() {
\n      this._addTriedPosition(this.position, this.alignment);
\n      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
\n    }
\n  }
, {
\n    key: \"_addTriedPosition\",\n    value: function _addTriedPosition(position, alignment) {
\n      this.triedPositions[position] = this.triedPositions[position] || [];
\n      this.triedPositions[position].push(alignment);
\n    }
\n  }
, {
\n    key: \"_positionsExhausted\",\n    value: function _positionsExhausted() {
\n      var isExhausted = true;
\n      for (var i = 0;
 i < POSITIONS.length;
 i++) {
\n        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
\n      }
\n      return isExhausted;
\n    }
\n  }
, {
\n    key: \"_alignmentsExhausted\",\n    value: function _alignmentsExhausted(position) {
\n      return this.triedPositions[position] && this.triedPositions[position].length === ALIGNMENTS[position].length;
\n    }
\n\n    // When we're trying to center, we don't want to apply offset that's going to\n    // take us just off center, so wrap around to return 0 for the appropriate\n    // offset in those alignments.  TODO: Figure out if we want to make this\n    // configurable behavior... it feels more intuitive, especially for tooltips, but\n    // it's possible someone might actually want to start from center and then nudge\n    // slightly off.\n  }
, {
\n    key: \"_getVOffset\",\n    value: function _getVOffset() {
\n      return this.options.vOffset;
\n    }
\n  }
, {
\n    key: \"_getHOffset\",\n    value: function _getHOffset() {
\n      return this.options.hOffset;
\n    }
\n  }
, {
\n    key: \"_setPosition\",\n    value: function _setPosition($anchor, $element, $parent) {
\n      if ($anchor.attr('aria-expanded') === 'false') {
\n        return false;
\n      }
\n      if (!this.options.allowOverlap) {
\n        // restore original position & alignment before checking overlap\n        this.position = this.originalPosition;
\n        this.alignment = this.originalAlignment;
\n      }
\n      $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
\n      if (!this.options.allowOverlap) {
\n        var minOverlap = 100000000;
\n        // default coordinates to how we start, in case we can't figure out better\n        var minCoordinates = {
\n          position: this.position,\n          alignment: this.alignment\n        }
;
\n        while (!this._positionsExhausted()) {
\n          var overlap = _foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);
\n          if (overlap === 0) {
\n            return;
\n          }
\n          if (overlap < minOverlap) {
\n            minOverlap = overlap;
\n            minCoordinates = {
\n              position: this.position,\n              alignment: this.alignment\n            }
;
\n          }
\n          this._reposition();
\n          $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
\n        }
\n        // If we get through the entire loop, there was no non-overlapping\n        // position available. Pick the version with least overlap.\n        this.position = minCoordinates.position;
\n        this.alignment = minCoordinates.alignment;
\n        $element.offset(_foundation_util_box__WEBPACK_IMPORTED_MODULE_0__.Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
\n      }
\n    }
\n  }
]);
\n  return Positionable;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\nPositionable.defaults = {
\n  /**\n   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  position: 'auto',\n  /**\n   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  alignment: 'auto',\n  /**\n   * Allow overlap of container/window. If false, dropdown positionable first\n   * try to position as defined by data-position and data-alignment, but\n   * reposition if it would cause an overflow.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  allowOverlap: false,\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  allowBottomOverlap: true,\n  /**\n   * Number of pixels the positionable should be separated vertically from anchor\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  vOffset: 0,\n  /**\n   * Number of pixels the positionable should be separated horizontally from anchor\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  hOffset: 0\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.positionable.js?");


/***/ }
),

/***/ "./js/foundation.responsiveAccordionTabs.js":
/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   ResponsiveAccordionTabs: function() {
 return /* binding */ ResponsiveAccordionTabs;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.accordion */ \"./js/foundation.accordion.js\");
\n/* harmony import */ var _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.tabs */ \"./js/foundation.tabs.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n// The plugin matches the plugin classes with these plugin instances.\nvar MenuPlugins = {
\n  tabs: {
\n    cssClass: 'tabs',\n    plugin: _foundation_tabs__WEBPACK_IMPORTED_MODULE_5__.Tabs,\n    open: function open(plugin, target) {
\n      return plugin.selectTab(target);
\n    }
,\n    close: null /* not supported */,\n    toggle: null /* not supported */\n  }
,\n\n  accordion: {
\n    cssClass: 'accordion',\n    plugin: _foundation_accordion__WEBPACK_IMPORTED_MODULE_4__.Accordion,\n    open: function open(plugin, target) {
\n      return plugin.down(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
\n    }
,\n    close: function close(plugin, target) {
\n      return plugin.up(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
\n    }
,\n    toggle: function toggle(plugin, target) {
\n      return plugin.toggle(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target));
\n    }
\n  }
\n}
;
\n\n/**\n * ResponsiveAccordionTabs module.\n * @module foundation.responsiveAccordionTabs\n * @requires foundation.util.motion\n * @requires foundation.accordion\n * @requires foundation.tabs\n */\nvar ResponsiveAccordionTabs = /*#__PURE__*/function (_Plugin) {
\n  _inherits(ResponsiveAccordionTabs, _Plugin);
\n  var _super = _createSuper(ResponsiveAccordionTabs);
\n  function ResponsiveAccordionTabs(element, options) {
\n    var _this2;
\n    _classCallCheck(this, ResponsiveAccordionTabs);
\n    _this2 = _super.call(this, element, options);
\n    return _possibleConstructorReturn(_this2, _this2.options.reflow && _this2.storezfData || _assertThisInitialized(_this2));
\n  }
\n\n  /**\n   * Creates a new instance of a responsive accordion tabs.\n   * @class\n   * @name ResponsiveAccordionTabs\n   * @fires ResponsiveAccordionTabs#init\n   * @param {
jQuery}
 element - jQuery object to make into Responsive Accordion Tabs.\n   * @param {
Object}
 options - Overrides to the default plugin settings.\n   */\n  _createClass(ResponsiveAccordionTabs, [{
\n    key: \"_setup\",\n    value: function _setup(element, options) {
\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
\n      this.$element.data('zfPluginBase', this);
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, ResponsiveAccordionTabs.defaults, this.$element.data(), options);
\n      this.rules = this.$element.data('responsive-accordion-tabs');
\n      this.currentMq = null;
\n      this.currentRule = null;
\n      this.currentPlugin = null;
\n      this.className = 'ResponsiveAccordionTabs';
 // ie9 back compat\n      if (!this.$element.attr('id')) {
\n        this.$element.attr('id', (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'responsiveaccordiontabs'));
\n      }
\n      this._init();
\n      this._events();
\n    }
\n\n    /**\n     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();
\n\n      // The first time an Interchange plugin is initialized, this.rules is converted from a string of \"classes\" to an object of rules\n      if (typeof this.rules === 'string') {
\n        var rulesTree = {
}
;
\n\n        // Parse rules from \"classes\" pulled from data attribute\n        var rules = this.rules.split(' ');
\n\n        // Iterate through every rule found\n        for (var i = 0;
 i < rules.length;
 i++) {
\n          var rule = rules[i].split('-');
\n          var ruleSize = rule.length > 1 ? rule[0] : 'small';
\n          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
\n          if (MenuPlugins[rulePlugin] !== null) {
\n            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
\n          }
\n        }
\n        this.rules = rulesTree;
\n      }
\n      this._getAllOptions();
\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(this.rules)) {
\n        this._checkMediaQueries();
\n      }
\n    }
\n  }
, {
\n    key: \"_getAllOptions\",\n    value: function _getAllOptions() {
\n      //get all defaults and options\n      var _this = this;
\n      _this.allOptions = {
}
;
\n      for (var key in MenuPlugins) {
\n        if (MenuPlugins.hasOwnProperty(key)) {
\n          var obj = MenuPlugins[key];
\n          try {
\n            var dummyPlugin = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');
\n            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);
\n            for (var keyKey in tmpPlugin.options) {
\n              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
\n                var objObj = tmpPlugin.options[keyKey];
\n                _this.allOptions[keyKey] = objObj;
\n              }
\n            }
\n            tmpPlugin.destroy();
\n          }
 catch (e) {
\n            console.warn(\"Warning: Problems getting Accordion/Tab options: \".concat(e));
\n          }
\n        }
\n      }
\n    }
\n\n    /**\n     * Initializes events for the Menu.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
\n    }
\n\n    /**\n     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_checkMediaQueries\",\n    value: function _checkMediaQueries() {
\n      var matchedMq,\n        _this = this;
\n      // Iterate through each rule and find the last matching rule\n      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(this.rules, function (key) {
\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(key)) {
\n          matchedMq = key;
\n        }
\n      }
);
\n\n      // No match? No dice\n      if (!matchedMq) return;
\n\n      // Plugin already initialized? We good\n      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
\n\n      // Remove existing plugin-specific CSS classes\n      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(MenuPlugins, function (key, value) {
\n        _this.$element.removeClass(value.cssClass);
\n      }
);
\n\n      // Add the CSS class for the new plugin\n      this.$element.addClass(this.rules[matchedMq].cssClass);
\n\n      // Create an instance of the new plugin\n      if (this.currentPlugin) {
\n        //don't know why but on nested elements data zfPlugin get's lost\n        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
\n        this.currentPlugin.destroy();
\n      }
\n      this._handleMarkup(this.rules[matchedMq].cssClass);
\n      this.currentRule = this.rules[matchedMq];
\n      this.currentPlugin = new this.currentRule.plugin(this.$element, this.options);
\n      this.storezfData = this.currentPlugin.$element.data('zfPlugin');
\n    }
\n  }
, {
\n    key: \"_handleMarkup\",\n    value: function _handleMarkup(toSet) {
\n      var _this = this,\n        fromString = 'accordion';
\n      var $panels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + this.$element.attr('id') + ']');
\n      if ($panels.length) fromString = 'tabs';
\n      if (fromString === toSet) {
\n        return;
\n      }
\n      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
\n      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
\n      this.$element.removeAttr('role');
\n      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
\n      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');
\n      if (fromString === 'tabs') {
\n        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
\n        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
\n      }
 else {
\n        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
\n      }
\n      $panels.css({
\n        display: '',\n        visibility: ''\n      }
);
\n      $liHeads.css({
\n        display: '',\n        visibility: ''\n      }
);
\n      if (toSet === 'accordion') {
\n        $panels.each(function (key, value) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
\n            height: ''\n          }
);
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id=\"tabs-placeholder-' + _this.$element.attr('id') + '\"></div>').detach();
\n          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
\n          $liHeadsA.addClass('accordion-title');
\n        }
);
\n      }
 else if (toSet === 'tabs') {
\n        var $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-tabs-content=' + _this.$element.attr('id') + ']');
\n        var $placeholder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#tabs-placeholder-' + _this.$element.attr('id'));
\n        if ($placeholder.length) {
\n          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class=\"tabs-content\"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
\n          $placeholder.remove();
\n        }
 else {
\n          $tabsContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class=\"tabs-content\"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
\n        }
\n        $panels.each(function (key, value) {
\n          var tempValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).appendTo($tabsContent).addClass(tabsPanel);
\n          var hash = $liHeadsA.get(key).hash.slice(1);
\n          var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id') || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'accordion');
\n          if (hash !== id) {
\n            if (hash !== '') {
\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
\n            }
 else {
\n              hash = id;
\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()(value).attr('id', hash);
\n              jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href', jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
\n            }
\n          }
\n          var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()($liHeads.get(key)).hasClass('is-active');
\n          if (isActive) {
\n            tempValue.addClass('is-active');
\n          }
\n        }
);
\n        $liHeads.addClass(tabsTitle);
\n      }
\n      ;
\n    }
\n\n    /**\n     * Opens the plugin pane defined by `target`.\n     * @param {
jQuery | String}
 target - jQuery object or string of the id of the pane to open.\n     * @see Accordion.down\n     * @see Tabs.selectTab\n     * @function\n     */\n  }
, {
\n    key: \"open\",\n    value: function open() {
\n      if (this.currentRule && typeof this.currentRule.open === 'function') {
\n        var _this$currentRule;
\n        return (_this$currentRule = this.currentRule).open.apply(_this$currentRule, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
\n      }
\n    }
\n\n    /**\n     * Closes the plugin pane defined by `target`. Not availaible for Tabs.\n     * @param {
jQuery | String}
 target - jQuery object or string of the id of the pane to close.\n     * @see Accordion.up\n     * @function\n     */\n  }
, {
\n    key: \"close\",\n    value: function close() {
\n      if (this.currentRule && typeof this.currentRule.close === 'function') {
\n        var _this$currentRule2;
\n        return (_this$currentRule2 = this.currentRule).close.apply(_this$currentRule2, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
\n      }
\n    }
\n\n    /**\n     * Toggles the plugin pane defined by `target`. Not availaible for Tabs.\n     * @param {
jQuery | String}
 target - jQuery object or string of the id of the pane to toggle.\n     * @see Accordion.toggle\n     * @function\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle() {
\n      if (this.currentRule && typeof this.currentRule.toggle === 'function') {
\n        var _this$currentRule3;
\n        return (_this$currentRule3 = this.currentRule).toggle.apply(_this$currentRule3, [this.currentPlugin].concat(Array.prototype.slice.call(arguments)));
\n      }
\n    }
\n\n    /**\n     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      if (this.currentPlugin) this.currentPlugin.destroy();
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
\n    }
\n  }
]);
\n  return ResponsiveAccordionTabs;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin);
\nResponsiveAccordionTabs.defaults = {
}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.responsiveAccordionTabs.js?");


/***/ }
),

/***/ "./js/foundation.responsiveMenu.js":
/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   ResponsiveMenu: function() {
 return /* binding */ ResponsiveMenu;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.dropdownMenu */ \"./js/foundation.dropdownMenu.js\");
\n/* harmony import */ var _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.drilldown */ \"./js/foundation.drilldown.js\");
\n/* harmony import */ var _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.accordionMenu */ \"./js/foundation.accordionMenu.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\nvar MenuPlugins = {
\n  dropdown: {
\n    cssClass: 'dropdown',\n    plugin: _foundation_dropdownMenu__WEBPACK_IMPORTED_MODULE_4__.DropdownMenu\n  }
,\n  drilldown: {
\n    cssClass: 'drilldown',\n    plugin: _foundation_drilldown__WEBPACK_IMPORTED_MODULE_5__.Drilldown\n  }
,\n  accordion: {
\n    cssClass: 'accordion-menu',\n    plugin: _foundation_accordionMenu__WEBPACK_IMPORTED_MODULE_6__.AccordionMenu\n  }
\n}
;
\n\n// import \"foundation.util.triggers.js\";
\n\n/**\n * ResponsiveMenu module.\n * @module foundation.responsiveMenu\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n */\nvar ResponsiveMenu = /*#__PURE__*/function (_Plugin) {
\n  _inherits(ResponsiveMenu, _Plugin);
\n  var _super = _createSuper(ResponsiveMenu);
\n  function ResponsiveMenu() {
\n    _classCallCheck(this, ResponsiveMenu);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(ResponsiveMenu, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of a responsive menu.\n     * @class\n     * @name ResponsiveMenu\n     * @fires ResponsiveMenu#init\n     * @param {
jQuery}
 element - jQuery object to make into a dropdown menu.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element) {
\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
\n      this.rules = this.$element.data('responsive-menu');
\n      this.currentMq = null;
\n      this.currentPlugin = null;
\n      this.className = 'ResponsiveMenu';
 // ie9 back compat\n\n      this._init();
\n      this._events();
\n    }
\n\n    /**\n     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();
\n      // The first time an Interchange plugin is initialized, this.rules is converted from a string of \"classes\" to an object of rules\n      if (typeof this.rules === 'string') {
\n        var rulesTree = {
}
;
\n\n        // Parse rules from \"classes\" pulled from data attribute\n        var rules = this.rules.split(' ');
\n\n        // Iterate through every rule found\n        for (var i = 0;
 i < rules.length;
 i++) {
\n          var rule = rules[i].split('-');
\n          var ruleSize = rule.length > 1 ? rule[0] : 'small';
\n          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];
\n          if (MenuPlugins[rulePlugin] !== null) {
\n            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
\n          }
\n        }
\n        this.rules = rulesTree;
\n      }
\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default().isEmptyObject(this.rules)) {
\n        this._checkMediaQueries();
\n      }
\n      // Add data-mutate since children may need it.\n      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'responsive-menu'));
\n    }
\n\n    /**\n     * Initializes events for the Menu.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this;
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', function () {
\n        _this._checkMediaQueries();
\n      }
);
\n      // $(window).on('resize.zf.ResponsiveMenu', function() {
\n      //   _this._checkMediaQueries();
\n      // }
);
\n    }
\n\n    /**\n     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_checkMediaQueries\",\n    value: function _checkMediaQueries() {
\n      var matchedMq,\n        _this = this;
\n      // Iterate through each rule and find the last matching rule\n      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(this.rules, function (key) {
\n        if (_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(key)) {
\n          matchedMq = key;
\n        }
\n      }
);
\n\n      // No match? No dice\n      if (!matchedMq) return;
\n\n      // Plugin already initialized? We good\n      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return;
\n\n      // Remove existing plugin-specific CSS classes\n      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(MenuPlugins, function (key, value) {
\n        _this.$element.removeClass(value.cssClass);
\n      }
);
\n\n      // Add the CSS class for the new plugin\n      this.$element.addClass(this.rules[matchedMq].cssClass);
\n\n      // Create an instance of the new plugin\n      if (this.currentPlugin) this.currentPlugin.destroy();
\n      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {
}
);
\n    }
\n\n    /**\n     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.currentPlugin.destroy();
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('.zf.ResponsiveMenu');
\n    }
\n  }
]);
\n  return ResponsiveMenu;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin);
\nResponsiveMenu.defaults = {
}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.responsiveMenu.js?");


/***/ }
),

/***/ "./js/foundation.responsiveToggle.js":
/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   ResponsiveToggle: function() {
 return /* binding */ ResponsiveToggle;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n/**\n * ResponsiveToggle module.\n * @module foundation.responsiveToggle\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.motion\n */\nvar ResponsiveToggle = /*#__PURE__*/function (_Plugin) {
\n  _inherits(ResponsiveToggle, _Plugin);
\n  var _super = _createSuper(ResponsiveToggle);
\n  function ResponsiveToggle() {
\n    _classCallCheck(this, ResponsiveToggle);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(ResponsiveToggle, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of Tab Bar.\n     * @class\n     * @name ResponsiveToggle\n     * @fires ResponsiveToggle#init\n     * @param {
jQuery}
 element - jQuery object to attach tab bar functionality to.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element);
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, ResponsiveToggle.defaults, this.$element.data(), options);
\n      this.className = 'ResponsiveToggle';
 // ie9 back compat\n\n      this._init();
\n      this._events();
\n    }
\n\n    /**\n     * Initializes the tab bar by finding the target element, toggling element, and running update().\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery._init();
\n      var targetID = this.$element.data('responsive-toggle');
\n      if (!targetID) {
\n        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
\n      }
\n      this.$targetMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(targetID));
\n      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
\n        var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
\n        return target === targetID || target === \"\";
\n      }
);
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, this.options, this.$targetMenu.data());
\n\n      // If they were set, parse the animation classes\n      if (this.options.animate) {
\n        var input = this.options.animate.split(' ');
\n        this.animationIn = input[0];
\n        this.animationOut = input[1] || null;
\n      }
\n      this._update();
\n    }
\n\n    /**\n     * Adds necessary event handlers for the tab bar to work.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      this._updateMqHandler = this._update.bind(this);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._updateMqHandler);
\n      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
\n    }
\n\n    /**\n     * Checks the current media query to determine if the tab bar should be visible or hidden.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_update\",\n    value: function _update() {
\n      // Mobile\n      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(this.options.hideFor)) {
\n        this.$element.show();
\n        this.$targetMenu.hide();
\n      }
\n\n      // Desktop\n      else {
\n        this.$element.hide();
\n        this.$targetMenu.show();
\n      }
\n    }
\n\n    /**\n     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.\n     * @function\n     * @fires ResponsiveToggle#toggled\n     */\n  }
, {
\n    key: \"toggleMenu\",\n    value: function toggleMenu() {
\n      var _this = this;
\n      if (!_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_1__.MediaQuery.atLeast(this.options.hideFor)) {
\n        /**\n         * Fires when the element attached to the tab bar toggles.\n         * @event ResponsiveToggle#toggled\n         */\n        if (this.options.animate) {
\n          if (this.$targetMenu.is(':hidden')) {
\n            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateIn(this.$targetMenu, this.animationIn, function () {
\n              _this.$element.trigger('toggled.zf.responsiveToggle');
\n              _this.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
\n            }
);
\n          }
 else {
\n            _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateOut(this.$targetMenu, this.animationOut, function () {
\n              _this.$element.trigger('toggled.zf.responsiveToggle');
\n            }
);
\n          }
\n        }
 else {
\n          this.$targetMenu.toggle(0);
\n          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
\n          this.$element.trigger('toggled.zf.responsiveToggle');
\n        }
\n      }
\n    }
\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.off('.zf.responsiveToggle');
\n      this.$toggler.off('.zf.responsiveToggle');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._updateMqHandler);
\n    }
\n  }
]);
\n  return ResponsiveToggle;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_3__.Plugin);
\nResponsiveToggle.defaults = {
\n  /**\n   * The breakpoint after which the menu is always shown, and the tab bar is hidden.\n   * @option\n   * @type {
string}
\n   * @default 'medium'\n   */\n  hideFor: 'medium',\n  /**\n   * To decide if the toggle should be animated or not.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  animate: false\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.responsiveToggle.js?");


/***/ }
),

/***/ "./js/foundation.reveal.js":
/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Reveal: function() {
 return /* binding */ Reveal;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n\n\n/**\n * Reveal module.\n * @module foundation.reveal\n * @requires foundation.util.keyboard\n * @requires foundation.util.touch\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.motion if using animations\n */\nvar Reveal = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Reveal, _Plugin);
\n  var _super = _createSuper(Reveal);
\n  function Reveal() {
\n    _classCallCheck(this, Reveal);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Reveal, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of Reveal.\n     * @class\n     * @name Reveal\n     * @param {
jQuery}
 element - jQuery object to use for the modal.\n     * @param {
Object}
 options - optional parameters.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Reveal.defaults, this.$element.data(), options);
\n      this.className = 'Reveal';
 // ie9 back compat\n      this._init();
\n\n      // Touch and Triggers init are idempotent, just need to make sure they are initialized\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_7__.Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('Reveal', {
\n        'ESCAPE': 'close'\n      }
);
\n    }
\n\n    /**\n     * Initializes the modal by adding the overlay and close buttons, (if selected).\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var _this2 = this;
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery._init();
\n      this.id = this.$element.attr('id');
\n      this.isActive = false;
\n      this.cached = {
\n        mq: _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_4__.MediaQuery.current\n      }
;
\n      this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(this.id, \"\\\"]\")).length ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(this.id, \"\\\"]\")) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-toggle=\\\"\".concat(this.id, \"\\\"]\"));
\n      this.$anchor.attr({
\n        'aria-controls': this.id,\n        'aria-haspopup': 'dialog',\n        'tabindex': 0\n      }
);
\n      if (this.options.fullScreen || this.$element.hasClass('full')) {
\n        this.options.fullScreen = true;
\n        this.options.overlay = false;
\n      }
\n      if (this.options.overlay && !this.$overlay) {
\n        this.$overlay = this._makeOverlay(this.id);
\n      }
\n      this.$element.attr({
\n        'role': 'dialog',\n        'aria-hidden': true,\n        'data-yeti-box': this.id,\n        'data-resize': this.id\n      }
);
\n      if (this.$overlay) {
\n        this.$element.detach().appendTo(this.$overlay);
\n      }
 else {
\n        this.$element.detach().appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));
\n        this.$element.addClass('without-overlay');
\n      }
\n      this._events();
\n      if (this.options.deepLink && window.location.hash === \"#\".concat(this.id)) {
\n        this.onLoadListener = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
\n          return _this2.open();
\n        }
);
\n      }
\n    }
\n\n    /**\n     * Creates an overlay div to display behind the modal.\n     * @private\n     */\n  }
, {
\n    key: \"_makeOverlay\",\n    value: function _makeOverlay() {
\n      var additionalOverlayClasses = '';
\n      if (this.options.additionalOverlayClasses) {
\n        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
\n      }
\n      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
\n    }
\n\n    /**\n     * Updates position of modal\n     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter\n     * @private\n     */\n  }
, {
\n    key: \"_updatePosition\",\n    value: function _updatePosition() {
\n      var width = this.$element.outerWidth();
\n      var outerWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width();
\n      var height = this.$element.outerHeight();
\n      var outerHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();
\n      var left,\n        top = null;
\n      if (this.options.hOffset === 'auto') {
\n        left = parseInt((outerWidth - width) / 2, 10);
\n      }
 else {
\n        left = parseInt(this.options.hOffset, 10);
\n      }
\n      if (this.options.vOffset === 'auto') {
\n        if (height > outerHeight) {
\n          top = parseInt(Math.min(100, outerHeight / 10), 10);
\n        }
 else {
\n          top = parseInt((outerHeight - height) / 4, 10);
\n        }
\n      }
 else if (this.options.vOffset !== null) {
\n        top = parseInt(this.options.vOffset, 10);
\n      }
\n      if (top !== null) {
\n        this.$element.css({
\n          top: top + 'px'\n        }
);
\n      }
\n\n      // only worry about left if we don't have an overlay or we have a horizontal offset,\n      // otherwise we're perfectly in the middle\n      if (!this.$overlay || this.options.hOffset !== 'auto') {
\n        this.$element.css({
\n          left: left + 'px'\n        }
);
\n        this.$element.css({
\n          margin: '0px'\n        }
);
\n      }
\n    }
\n\n    /**\n     * Adds event handlers for the modal.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this3 = this;
\n      var _this = this;
\n      this.$element.on({
\n        'open.zf.trigger': this.open.bind(this),\n        'close.zf.trigger': function closeZfTrigger(event, $element) {
\n          if (event.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('[data-closable]')[0] === $element) {
\n            // only close reveal when it's explicitly called\n            return _this3.close.apply(_this3);
\n          }
\n        }
,\n        'toggle.zf.trigger': this.toggle.bind(this),\n        'resizeme.zf.trigger': function resizemeZfTrigger() {
\n          _this._updatePosition();
\n        }
\n      }
);
\n      if (this.options.closeOnClick && this.options.overlay) {
\n        this.$overlay.off('.zf.reveal').on('click.zf.dropdown tap.zf.dropdown', function (e) {
\n          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document, e.target)) {
\n            return;
\n          }
\n          _this.close();
\n        }
);
\n      }
\n      if (this.options.deepLink) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(\"hashchange.zf.reveal:\".concat(this.id), this._handleState.bind(this));
\n      }
\n    }
\n\n    /**\n     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.\n     * @private\n     */\n  }
, {
\n    key: \"_handleState\",\n    value: function _handleState() {
\n      if (window.location.hash === '#' + this.id && !this.isActive) {
\n        this.open();
\n      }
 else {
\n        this.close();
\n      }
\n    }
\n\n    /**\n    * Disables the scroll when Reveal is shown to prevent the background from shifting\n    * @param {
number}
 scrollTop - Scroll to visually apply, window current scroll by default\n    */\n  }
, {
\n    key: \"_disableScroll\",\n    value: function _disableScroll(scrollTop) {
\n      scrollTop = scrollTop || jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();
\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\", -scrollTop);
\n      }
\n    }
\n\n    /**\n    * Reenables the scroll when Reveal closes\n    * @param {
number}
 scrollTop - Scroll to restore, html \"top\" property by default (as set by `_disableScroll`)\n    */\n  }
, {
\n    key: \"_enableScroll\",\n    value: function _enableScroll(scrollTop) {
\n      scrollTop = scrollTop || parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\"), 10);
\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\", \"\");
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(-scrollTop);
\n      }
\n    }
\n\n    /**\n     * Opens the modal controlled by `this.$anchor`, and closes all others by default.\n     * @function\n     * @fires Reveal#closeme\n     * @fires Reveal#open\n     */\n  }
, {
\n    key: \"open\",\n    value: function open() {
\n      var _this4 = this;
\n      // either update or replace browser history\n      var hash = \"#\".concat(this.id);
\n      if (this.options.deepLink && window.location.hash !== hash) {
\n        if (window.history.pushState) {
\n          if (this.options.updateHistory) {
\n            window.history.pushState({
}
, '', hash);
\n          }
 else {
\n            window.history.replaceState({
}
, '', hash);
\n          }
\n        }
 else {
\n          window.location.hash = hash;
\n        }
\n      }
\n\n      // Remember anchor that opened it to set focus back later, have general anchors as fallback\n      this.$activeAnchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement).is(this.$anchor) ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.activeElement) : this.$anchor;
\n      this.isActive = true;
\n\n      // Make elements invisible, but remove display: none so we can get size and positioning\n      this.$element.css({
\n        'visibility': 'hidden'\n      }
).show().scrollTop(0);
\n      if (this.options.overlay) {
\n        this.$overlay.css({
\n          'visibility': 'hidden'\n        }
).show();
\n      }
\n      this._updatePosition();
\n      this.$element.hide().css({
\n        'visibility': ''\n      }
);
\n      if (this.$overlay) {
\n        this.$overlay.css({
\n          'visibility': ''\n        }
).hide();
\n        if (this.$element.hasClass('fast')) {
\n          this.$overlay.addClass('fast');
\n        }
 else if (this.$element.hasClass('slow')) {
\n          this.$overlay.addClass('slow');
\n        }
\n      }
\n      if (!this.options.multipleOpened) {
\n        /**\n         * Fires immediately before the modal opens.\n         * Closes any other modals that are currently open\n         * @event Reveal#closeme\n         */\n        this.$element.trigger('closeme.zf.reveal', this.id);
\n      }
\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
\n        this._disableScroll();
\n      }
\n      var _this = this;
\n\n      // Motion UI method of reveal\n      if (this.options.animationIn) {
\n        var afterAnimation = function afterAnimation() {
\n          _this.$element.attr({
\n            'aria-hidden': false,\n            'tabindex': -1\n          }
).focus();
\n          _this._addGlobalClasses();
\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.trapFocus(_this.$element);
\n        }
;
\n        if (this.options.overlay) {
\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateIn(this.$overlay, 'fade-in');
\n        }
\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateIn(this.$element, this.options.animationIn, function () {
\n          if (_this4.$element) {
\n            // protect against object having been removed\n            _this4.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.findFocusable(_this4.$element);
\n            afterAnimation();
\n          }
\n        }
);
\n      }
\n      // jQuery method of reveal\n      else {
\n        if (this.options.overlay) {
\n          this.$overlay.show(0);
\n        }
\n        this.$element.show(this.options.showDelay);
\n      }
\n\n      // handle accessibility\n      this.$element.attr({
\n        'aria-hidden': false,\n        'tabindex': -1\n      }
).focus();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.trapFocus(this.$element);
\n      this._addGlobalClasses();
\n      this._addGlobalListeners();
\n\n      /**\n       * Fires when the modal has successfully opened.\n       * @event Reveal#open\n       */\n      this.$element.trigger('open.zf.reveal');
\n    }
\n\n    /**\n     * Adds classes and listeners on document required by open modals.\n     *\n     * The following classes are added and updated:\n     * - `.is-reveal-open` - Prevents the scroll on document\n     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the\n     *                       scroll was not disabled. This prevent a \"shift\" of the page content due\n     *                       the scrollbar disappearing when the modal opens.\n     *\n     * @private\n     */\n  }
, {
\n    key: \"_addGlobalClasses\",\n    value: function _addGlobalClasses() {
\n      var updateScrollbarClass = function updateScrollbarClass() {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').toggleClass('zf-has-scroll', !!(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height() > jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height()));
\n      }
;
\n      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {
\n        return updateScrollbarClass();
\n      }
);
\n      updateScrollbarClass();
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('is-reveal-open');
\n    }
\n\n    /**\n     * Removes classes and listeners on document that were required by open modals.\n     * @private\n     */\n  }
, {
\n    key: \"_removeGlobalClasses\",\n    value: function _removeGlobalClasses() {
\n      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('is-reveal-open');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('zf-has-scroll');
\n    }
\n\n    /**\n     * Adds extra event handlers for the body and window if necessary.\n     * @private\n     */\n  }
, {
\n    key: \"_addGlobalListeners\",\n    value: function _addGlobalListeners() {
\n      var _this = this;
\n      if (!this.$element) {
\n        return;
\n      }
 // If we're in the middle of cleanup, don't freak out\n      this.focusableElements = _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.findFocusable(this.$element);
\n      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click.zf.dropdown tap.zf.dropdown', function (e) {
\n          if (e.target === _this.$element[0] || jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(_this.$element[0], e.target) || !jquery__WEBPACK_IMPORTED_MODULE_0___default().contains(document, e.target)) {
\n            return;
\n          }
\n          _this.close();
\n        }
);
\n      }
\n      if (this.options.closeOnEsc) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('keydown.zf.reveal', function (e) {
\n          _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e, 'Reveal', {
\n            close: function close() {
\n              if (_this.options.closeOnEsc) {
\n                _this.close();
\n              }
\n            }
\n          }
);
\n        }
);
\n      }
\n    }
\n\n    /**\n     * Closes the modal.\n     * @function\n     * @fires Reveal#closed\n     */\n  }
, {
\n    key: \"close\",\n    value: function close() {
\n      if (!this.isActive || !this.$element.is(':visible')) {
\n        return false;
\n      }
\n      var _this = this;
\n\n      // Motion UI method of hiding\n      if (this.options.animationOut) {
\n        if (this.options.overlay) {
\n          _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateOut(this.$overlay, 'fade-out');
\n        }
\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_5__.Motion.animateOut(this.$element, this.options.animationOut, finishUp);
\n      }
\n      // jQuery method of hiding\n      else {
\n        this.$element.hide(this.options.hideDelay);
\n        if (this.options.overlay) {
\n          this.$overlay.hide(0, finishUp);
\n        }
 else {
\n          finishUp();
\n        }
\n      }
\n\n      // Conditionals to remove extra event listeners added on open\n      if (this.options.closeOnEsc) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('keydown.zf.reveal');
\n      }
\n      if (!this.options.overlay && this.options.closeOnClick) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').off('click.zf.dropdown tap.zf.dropdown');
\n      }
\n      this.$element.off('keydown.zf.reveal');
\n      function finishUp() {
\n        // Get the current top before the modal is closed and restore the scroll after.\n        // TODO: use component properties instead of HTML properties\n        // See https://github.com/foundation/foundation-sites/pull/10786\n        var scrollTop = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"html\").css(\"top\"), 10);
\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
\n          _this._removeGlobalClasses();
 // also remove .is-reveal-open from the html element when there is no opened reveal\n        }
\n\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.releaseFocus(_this.$element);
\n        _this.$element.attr('aria-hidden', true);
\n        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
\n          _this._enableScroll(scrollTop);
\n        }
\n\n        /**\n        * Fires when the modal is done closing.\n        * @event Reveal#closed\n        */\n        _this.$element.trigger('closed.zf.reveal');
\n      }
\n\n      /**\n      * Resets the modal content\n      * This prevents a running video to keep going in the background\n      */\n      if (this.options.resetOnClose) {
\n        this.$element.html(this.$element.html());
\n      }
\n      this.isActive = false;
\n      // If deepLink and we did not switched to an other modal...\n      if (_this.options.deepLink && window.location.hash === \"#\".concat(this.id)) {
\n        // Remove the history hash\n        if (window.history.replaceState) {
\n          var urlWithoutHash = window.location.pathname + window.location.search;
\n          if (this.options.updateHistory) {
\n            window.history.pushState({
}
, '', urlWithoutHash);
 // remove the hash\n          }
 else {
\n            window.history.replaceState('', document.title, urlWithoutHash);
\n          }
\n        }
 else {
\n          window.location.hash = '';
\n        }
\n      }
\n      this.$activeAnchor.focus();
\n    }
\n\n    /**\n     * Toggles the open/closed state of a modal.\n     * @function\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle() {
\n      if (this.isActive) {
\n        this.close();
\n      }
 else {
\n        this.open();
\n      }
\n    }
\n  }
, {
\n    key: \"_destroy\",\n    value:\n    /**\n     * Destroys an instance of a modal.\n     * @function\n     */\n    function _destroy() {
\n      if (this.options.overlay) {
\n        this.$element.appendTo(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.appendTo));
 // move $element outside of $overlay to prevent error unregisterPlugin()\n        this.$overlay.hide().off().remove();
\n      }
\n      this.$element.hide().off();
\n      this.$anchor.off('.zf');
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(\".zf.reveal:\".concat(this.id));
\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
\n      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.reveal:visible').length === 0) {
\n        this._removeGlobalClasses();
 // also remove .is-reveal-open from the html element when there is no opened reveal\n      }
\n    }
\n  }
]);
\n  return Reveal;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\nReveal.defaults = {
\n  /**\n   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  animationIn: '',\n  /**\n   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  animationOut: '',\n  /**\n   * Time, in ms, to delay the opening of a modal after a click if no animation used.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  showDelay: 0,\n  /**\n   * Time, in ms, to delay the closing of a modal after a click if no animation used.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  hideDelay: 0,\n  /**\n   * Allows a click on the body/overlay to close the modal.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  closeOnClick: true,\n  /**\n   * Allows the modal to close if the user presses the `ESCAPE` key.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  closeOnEsc: true,\n  /**\n   * If true, allows multiple modals to be displayed at once.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  multipleOpened: false,\n  /**\n   * Distance, in pixels, the modal should push down from the top of the screen.\n   * @option\n   * @type {
number|string}
\n   * @default auto\n   */\n  vOffset: 'auto',\n  /**\n   * Distance, in pixels, the modal should push in from the side of the screen.\n   * @option\n   * @type {
number|string}
\n   * @default auto\n   */\n  hOffset: 'auto',\n  /**\n   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  fullScreen: false,\n  /**\n   * Allows the modal to generate an overlay div, which will cover the view when modal opens.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  overlay: true,\n  /**\n   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  resetOnClose: false,\n  /**\n   * Link the location hash to the modal.\n   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  deepLink: false,\n  /**\n   * If `deepLink` is enabled, update the browser history with the open modal\n   * @option\n   * @default false\n   */\n  updateHistory: false,\n  /**\n  * Allows the modal to append to custom div.\n  * @option\n  * @type {
string}
\n  * @default \"body\"\n  */\n  appendTo: \"body\",\n  /**\n   * Allows adding additional class names to the reveal overlay.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  additionalOverlayClasses: ''\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.reveal.js?");


/***/ }
),

/***/ "./js/foundation.slider.js":
/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Slider: function() {
 return /* binding */ Slider;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation.util.touch */ \"./js/foundation.util.touch.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n\n/**\n * Slider module.\n * @module foundation.slider\n * @requires foundation.util.motion\n * @requires foundation.util.triggers\n * @requires foundation.util.keyboard\n * @requires foundation.util.touch\n */\nvar Slider = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Slider, _Plugin);
\n  var _super = _createSuper(Slider);
\n  function Slider() {
\n    _classCallCheck(this, Slider);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Slider, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of a slider control.\n     * @class\n     * @name Slider\n     * @param {
jQuery}
 element - jQuery object to make into a slider control.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Slider.defaults, this.$element.data(), options);
\n      this.className = 'Slider';
 // ie9 back compat\n      this.initialized = false;
\n\n      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.\n      _foundation_util_touch__WEBPACK_IMPORTED_MODULE_5__.Touch.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_6__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.register('Slider', {
\n        'ltr': {
\n          'ARROW_RIGHT': 'increase',\n          'ARROW_UP': 'increase',\n          'ARROW_DOWN': 'decrease',\n          'ARROW_LEFT': 'decrease',\n          'SHIFT_ARROW_RIGHT': 'increaseFast',\n          'SHIFT_ARROW_UP': 'increaseFast',\n          'SHIFT_ARROW_DOWN': 'decreaseFast',\n          'SHIFT_ARROW_LEFT': 'decreaseFast',\n          'HOME': 'min',\n          'END': 'max'\n        }
,\n        'rtl': {
\n          'ARROW_LEFT': 'increase',\n          'ARROW_RIGHT': 'decrease',\n          'SHIFT_ARROW_LEFT': 'increaseFast',\n          'SHIFT_ARROW_RIGHT': 'decreaseFast'\n        }
\n      }
);
\n    }
\n\n    /**\n     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      this.inputs = this.$element.find('input');
\n      this.handles = this.$element.find('[data-slider-handle]');
\n      this.$handle = this.handles.eq(0);
\n      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(this.$handle.attr('aria-controls')));
\n      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);
\n      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
\n        this.options.disabled = true;
\n        this.$element.addClass(this.options.disabledClass);
\n      }
\n      if (!this.inputs.length) {
\n        this.inputs = jquery__WEBPACK_IMPORTED_MODULE_0___default()().add(this.$input);
\n        this.options.binding = true;
\n      }
\n      this._setInitAttr(0);
\n      if (this.handles[1]) {
\n        this.options.doubleSided = true;
\n        this.$handle2 = this.handles.eq(1);
\n        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(this.$handle2.attr('aria-controls')));
\n        if (!this.inputs[1]) {
\n          this.inputs = this.inputs.add(this.$input2);
\n        }
\n\n        // this.$handle.triggerHandler('click.zf.slider');
\n        this._setInitAttr(1);
\n      }
\n\n      // Set handle positions\n      this.setHandles();
\n      this._events();
\n      this.initialized = true;
\n    }
\n  }
, {
\n    key: \"setHandles\",\n    value: function setHandles() {
\n      var _this2 = this;
\n      if (this.handles[1]) {
\n        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), function () {
\n          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val());
\n        }
);
\n      }
 else {
\n        this._setHandlePos(this.$handle, this.inputs.eq(0).val());
\n      }
\n    }
\n  }
, {
\n    key: \"_reflow\",\n    value: function _reflow() {
\n      this.setHandles();
\n    }
\n    /**\n    * @function\n    * @private\n    * @param {
Number}
 value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)\n    */\n  }
, {
\n    key: \"_pctOfBar\",\n    value: function _pctOfBar(value) {
\n      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);
\n      switch (this.options.positionValueFunction) {
\n        case \"pow\":\n          pctOfBar = this._logTransform(pctOfBar);
\n          break;
\n        case \"log\":\n          pctOfBar = this._powTransform(pctOfBar);
\n          break;
\n      }
\n      return pctOfBar.toFixed(2);
\n    }
\n\n    /**\n    * @function\n    * @private\n    * @param {
Number}
 pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value\n    */\n  }
, {
\n    key: \"_value\",\n    value: function _value(pctOfBar) {
\n      switch (this.options.positionValueFunction) {
\n        case \"pow\":\n          pctOfBar = this._powTransform(pctOfBar);
\n          break;
\n        case \"log\":\n          pctOfBar = this._logTransform(pctOfBar);
\n          break;
\n      }
\n      var value;
\n      if (this.options.vertical) {
\n        // linear interpolation which is working with negative values for start\n        // https://math.stackexchange.com/a/1019084\n        value = parseFloat(this.options.end) + pctOfBar * (this.options.start - this.options.end);
\n      }
 else {
\n        value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
\n      }
\n      return value;
\n    }
\n\n    /**\n    * @function\n    * @private\n    * @param {
Number}
 value - floating point (typically between 0-1) to be transformed using the log function\n    */\n  }
, {
\n    key: \"_logTransform\",\n    value: function _logTransform(value) {
\n      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
\n    }
\n\n    /**\n    * @function\n    * @private\n    * @param {
Number}
 value - floating point (typically between 0-1) to be transformed using the power function\n    */\n  }
, {
\n    key: \"_powTransform\",\n    value: function _powTransform(value) {
\n      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
\n    }
\n\n    /**\n     * Sets the position of the selected handle and fill bar.\n     * @function\n     * @private\n     * @param {
jQuery}
 $hndl - the selected handle to move.\n     * @param {
Number}
 location - floating point between the start and end values of the slider bar.\n     * @param {
Function}
 cb - callback function to fire on completion.\n     * @fires Slider#moved\n     * @fires Slider#changed\n     */\n  }
, {
\n    key: \"_setHandlePos\",\n    value: function _setHandlePos($hndl, location, cb) {
\n      // don't move if the slider has been disabled since its initialization\n      if (this.$element.hasClass(this.options.disabledClass)) {
\n        return;
\n      }
\n      //might need to alter that slightly for bars that will have odd number selections.\n      location = parseFloat(location);
 //on input change events, convert string to number...grumble.\n\n      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max\n      if (location < this.options.start) {
\n        location = this.options.start;
\n      }
 else if (location > this.options.end) {
\n        location = this.options.end;
\n      }
\n      var isDbl = this.options.doubleSided;
\n      if (isDbl) {
\n        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.\n        if (this.handles.index($hndl) === 0) {
\n          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
\n          location = location >= h2Val ? h2Val - this.options.step : location;
\n        }
 else {
\n          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
\n          location = location <= h1Val ? h1Val + this.options.step : location;
\n        }
\n      }
\n      var _this = this,\n        vert = this.options.vertical,\n        hOrW = vert ? 'height' : 'width',\n        lOrT = vert ? 'top' : 'left',\n        handleDim = $hndl[0].getBoundingClientRect()[hOrW],\n        elemDim = this.$element[0].getBoundingClientRect()[hOrW],\n        //percentage of bar min/max value based on click or drag point\n        pctOfBar = this._pctOfBar(location),\n        //number of actual pixels to shift the handle, based on the percentage obtained above\n        pxToMove = (elemDim - handleDim) * pctOfBar,\n        //percentage of bar to shift the handle\n        movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal);
\n      //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value\n      location = parseFloat(location.toFixed(this.options.decimal));
\n      // declare empty object for css adjustments, only used with 2 handled-sliders\n      var css = {
}
;
\n      this._setValues($hndl, location);
\n\n      // TODO update to calculate based on values set to respective inputs??\n      if (isDbl) {
\n        var isLeftHndl = this.handles.index($hndl) === 0,\n          //empty variable, will be used for min-height/width for fill bar\n          dim,\n          //percentage w/h of the handle compared to the slider bar\n          handlePct = Math.floor(percent(handleDim, elemDim) * 100);
\n        //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar\n        if (isLeftHndl) {
\n          //left or top percentage value to apply to the fill bar.\n          css[lOrT] = \"\".concat(movement, \"%\");
\n          //calculate the new min-height/width for the fill bar.\n          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct;
\n          //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider\n          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.\n          if (cb && typeof cb === 'function') {
\n            cb();
\n          }
 //this is only needed for the initialization of 2 handled sliders\n        }
 else {
\n          //just caching the value of the left/bottom handle's left/top property\n          var handlePos = parseFloat(this.$handle[0].style[lOrT]);
\n          //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0\n          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself\n          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
\n        }
\n        // assign the min-height/width to our css object\n        css[\"min-\".concat(hOrW)] = \"\".concat(dim, \"%\");
\n      }
\n\n      //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.\n      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
\n      (0,_foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Move)(moveTime, $hndl, function () {
\n        // adjusting the left/top property of the handle, based on the percentage calculated above\n        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,\n        // fall back to next best guess.\n        if (isNaN(movement)) {
\n          $hndl.css(lOrT, \"\".concat(pctOfBar * 100, \"%\"));
\n        }
 else {
\n          $hndl.css(lOrT, \"\".concat(movement, \"%\"));
\n        }
\n        if (!_this.options.doubleSided) {
\n          //if single-handled, a simple method to expand the fill bar\n          _this.$fill.css(hOrW, \"\".concat(pctOfBar * 100, \"%\"));
\n        }
 else {
\n          //otherwise, use the css object we created above\n          _this.$fill.css(css);
\n        }
\n      }
);
\n      if (this.initialized) {
\n        this.$element.one('finished.zf.animate', function () {
\n          /**\n           * Fires when the handle is done moving.\n           * @event Slider#moved\n           */\n          _this.$element.trigger('moved.zf.slider', [$hndl]);
\n        }
);
\n        /**\n         * Fires when the value has not been change for a given time.\n         * @event Slider#changed\n         */\n        clearTimeout(_this.timeout);
\n        _this.timeout = setTimeout(function () {
\n          _this.$element.trigger('changed.zf.slider', [$hndl]);
\n        }
, _this.options.changedDelay);
\n      }
\n    }
\n\n    /**\n     * Sets the initial attribute for the slider element.\n     * @function\n     * @private\n     * @param {
Number}
 idx - index of the current handle/input to use.\n     */\n  }
, {
\n    key: \"_setInitAttr\",\n    value: function _setInitAttr(idx) {
\n      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
\n      var id = this.inputs.eq(idx).attr('id') || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.GetYoDigits)(6, 'slider');
\n      this.inputs.eq(idx).attr({
\n        'id': id,\n        'max': this.options.end,\n        'min': this.options.start,\n        'step': this.options.step\n      }
);
\n      this.inputs.eq(idx).val(initVal);
\n      this.handles.eq(idx).attr({
\n        'role': 'slider',\n        'aria-controls': id,\n        'aria-valuemax': this.options.end,\n        'aria-valuemin': this.options.start,\n        'aria-valuenow': initVal,\n        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',\n        'tabindex': 0\n      }
);
\n    }
\n\n    /**\n     * Sets the input and `aria-valuenow` values for the slider element.\n     * @function\n     * @private\n     * @param {
jQuery}
 $handle - the currently selected handle.\n     * @param {
Number}
 val - floating point of the new value.\n     */\n  }
, {
\n    key: \"_setValues\",\n    value: function _setValues($handle, val) {
\n      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
\n      this.inputs.eq(idx).val(val);
\n      $handle.attr('aria-valuenow', val);
\n    }
\n\n    /**\n     * Handles events on the slider element.\n     * Calculates the new location of the current handle.\n     * If there are two handles and the bar was clicked, it determines which handle to move.\n     * @function\n     * @private\n     * @param {
Object}
 e - the `event` object passed from the listener.\n     * @param {
jQuery}
 $handle - the current handle to calculate for, if selected.\n     * @param {
Number}
 val - floating point number for the new value of the slider.\n     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.\n     */\n  }
, {
\n    key: \"_handleEvent\",\n    value: function _handleEvent(e, $handle, val) {
\n      var value;
\n      if (!val) {
\n        //click or drag events\n        e.preventDefault();
\n        var _this = this,\n          vertical = this.options.vertical,\n          param = vertical ? 'height' : 'width',\n          direction = vertical ? 'top' : 'left',\n          eventOffset = vertical ? e.pageY : e.pageX,\n          barDim = this.$element[0].getBoundingClientRect()[param],\n          windowScroll = vertical ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop() : jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollLeft();
\n        var elemOffset = this.$element.offset()[direction];
\n\n        // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...\n        // best way to guess this is simulated is if clientY == pageY\n        if (e.clientY === e.pageY) {
\n          eventOffset = eventOffset + windowScroll;
\n        }
\n        var eventFromBar = eventOffset - elemOffset;
\n        var barXY;
\n        if (eventFromBar < 0) {
\n          barXY = 0;
\n        }
 else if (eventFromBar > barDim) {
\n          barXY = barDim;
\n        }
 else {
\n          barXY = eventFromBar;
\n        }
\n        var offsetPct = percent(barXY, barDim);
\n        value = this._value(offsetPct);
\n\n        // turn everything around for RTL, yay math!\n        if ((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.rtl)() && !this.options.vertical) {
\n          value = this.options.end - value;
\n        }
\n        value = _this._adjustValue(null, value);
\n        if (!$handle) {
\n          //figure out which handle it is, pass it to the next function.\n          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),\n            secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
\n          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
\n        }
\n      }
 else {
\n        //change event on input\n        value = this._adjustValue(null, val);
\n      }
\n      this._setHandlePos($handle, value);
\n    }
\n\n    /**\n     * Adjustes value for handle in regard to step value. returns adjusted value\n     * @function\n     * @private\n     * @param {
jQuery}
 $handle - the selected handle.\n     * @param {
Number}
 value - value to adjust. used if $handle is falsy\n     */\n  }
, {
\n    key: \"_adjustValue\",\n    value: function _adjustValue($handle, value) {
\n      var val,\n        step = this.options.step,\n        div = parseFloat(step / 2),\n        left,\n        previousVal,\n        nextVal;
\n      if (!!$handle) {
\n        val = parseFloat($handle.attr('aria-valuenow'));
\n      }
 else {
\n        val = value;
\n      }
\n      if (val >= 0) {
\n        left = val % step;
\n      }
 else {
\n        left = step + val % step;
\n      }
\n      previousVal = val - left;
\n      nextVal = previousVal + step;
\n      if (left === 0) {
\n        return val;
\n      }
\n      val = val >= previousVal + div ? nextVal : previousVal;
\n      return val;
\n    }
\n\n    /**\n     * Adds event listeners to the slider elements.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      this._eventsForHandle(this.$handle);
\n      if (this.handles[1]) {
\n        this._eventsForHandle(this.$handle2);
\n      }
\n    }
\n\n    /**\n     * Adds event listeners a particular handle\n     * @function\n     * @private\n     * @param {
jQuery}
 $handle - the current handle to apply listeners to.\n     */\n  }
, {
\n    key: \"_eventsForHandle\",\n    value: function _eventsForHandle($handle) {
\n      var _this = this,\n        curHandle;
\n      var handleChangeEvent = function handleChangeEvent(e) {
\n        var idx = _this.inputs.index(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
\n        _this._handleEvent(e, _this.handles.eq(idx), jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val());
\n      }
;
\n\n      // IE only triggers the change event when the input loses focus which strictly follows the HTML specification\n      // listen for the enter key and trigger a change\n      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events\n      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {
\n        if (e.keyCode === 13) handleChangeEvent.call(this, e);
\n      }
);
\n      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);
\n      if (this.options.clickSelect) {
\n        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
\n          if (_this.$element.data('dragging')) {
\n            return false;
\n          }
\n          if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).is('[data-slider-handle]')) {
\n            if (_this.options.doubleSided) {
\n              _this._handleEvent(e);
\n            }
 else {
\n              _this._handleEvent(e, _this.$handle);
\n            }
\n          }
\n        }
);
\n      }
\n      if (this.options.draggable) {
\n        this.handles.addTouch();
\n        var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
\n        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
\n          $handle.addClass('is-dragging');
\n          _this.$fill.addClass('is-dragging');
 //\n          _this.$element.data('dragging', true);
\n          curHandle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
\n          $body.on('mousemove.zf.slider', function (ev) {
\n            ev.preventDefault();
\n            _this._handleEvent(ev, curHandle);
\n          }
).on('mouseup.zf.slider', function (ev) {
\n            _this._handleEvent(ev, curHandle);
\n            $handle.removeClass('is-dragging');
\n            _this.$fill.removeClass('is-dragging');
\n            _this.$element.data('dragging', false);
\n            $body.off('mousemove.zf.slider mouseup.zf.slider');
\n          }
);
\n        }
)\n        // prevent events triggered by touch\n        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
\n          e.preventDefault();
\n        }
);
\n      }
\n      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
\n        var _$handle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,\n          oldValue = parseFloat($handle.attr('aria-valuenow')),\n          newValue;
\n\n        // handle keyboard event with keyboard util\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_1__.Keyboard.handleKey(e, 'Slider', {
\n          decrease: function decrease() {
\n            newValue = oldValue - _this.options.step;
\n          }
,\n          increase: function increase() {
\n            newValue = oldValue + _this.options.step;
\n          }
,\n          decreaseFast: function decreaseFast() {
\n            newValue = oldValue - _this.options.step * 10;
\n          }
,\n          increaseFast: function increaseFast() {
\n            newValue = oldValue + _this.options.step * 10;
\n          }
,\n          min: function min() {
\n            newValue = _this.options.start;
\n          }
,\n          max: function max() {
\n            newValue = _this.options.end;
\n          }
,\n          handled: function handled() {
\n            // only set handle pos when event was handled specially\n            e.preventDefault();
\n            _this._setHandlePos(_$handle, newValue);
\n          }
\n        }
);
\n        /*if (newValue) {
 // if pressed key has special function, update value\n          e.preventDefault();
\n          _this._setHandlePos(_$handle, newValue);
\n        }
*/\n      }
);
\n    }
\n\n    /**\n     * Destroys the slider plugin.\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.handles.off('.zf.slider');
\n      this.inputs.off('.zf.slider');
\n      this.$element.off('.zf.slider');
\n      clearTimeout(this.timeout);
\n    }
\n  }
]);
\n  return Slider;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_4__.Plugin);
\nSlider.defaults = {
\n  /**\n   * Minimum value for the slider scale.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  start: 0,\n  /**\n   * Maximum value for the slider scale.\n   * @option\n   * @type {
number}
\n   * @default 100\n   */\n  end: 100,\n  /**\n   * Minimum value change per change event.\n   * @option\n   * @type {
number}
\n   * @default 1\n   */\n  step: 1,\n  /**\n   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  initialStart: 0,\n  /**\n   * Value at which the right handle/second input should be set to on initialization.\n   * @option\n   * @type {
number}
\n   * @default 100\n   */\n  initialEnd: 100,\n  /**\n   * Allows the input to be located outside the container and visible. Set to by the JS\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  binding: false,\n  /**\n   * Allows the user to click/tap on the slider bar to select a value.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  clickSelect: true,\n  /**\n   * Set to true and use the `vertical` class to change alignment to vertical.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  vertical: false,\n  /**\n   * Allows the user to drag the slider handle(s) to select a value.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  draggable: true,\n  /**\n   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  disabled: false,\n  /**\n   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  doubleSided: false,\n  /**\n   * Potential future feature.\n   */\n  // steps: 100,\n  /**\n   * Number of decimal places the plugin should go to for floating point precision.\n   * @option\n   * @type {
number}
\n   * @default 2\n   */\n  decimal: 2,\n  /**\n   * Time delay for dragged elements.\n   */\n  // dragDelay: 0,\n  /**\n   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.\n   * @option\n   * @type {
number}
\n   * @default 200\n   */\n  moveTime: 200,\n  //update this if changing the transition time in the sass\n  /**\n   * Class applied to disabled sliders.\n   * @option\n   * @type {
string}
\n   * @default 'disabled'\n   */\n  disabledClass: 'disabled',\n  /**\n   * Will invert the default layout for a vertical<span data-tooltip title=\"who would do this???\"> </span>slider.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  invertVertical: false,\n  /**\n   * Milliseconds before the `changed.zf-slider` event is triggered after value change.\n   * @option\n   * @type {
number}
\n   * @default 500\n   */\n  changedDelay: 500,\n  /**\n  * Basevalue for non-linear sliders\n  * @option\n  * @type {
number}
\n  * @default 5\n  */\n  nonLinearBase: 5,\n  /**\n  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.\n  * @option\n  * @type {
string}
\n  * @default 'linear'\n  */\n  positionValueFunction: 'linear'\n}
;
\nfunction percent(frac, num) {
\n  return frac / num;
\n}
\nfunction absPosition($handle, dir, clickPos, param) {
\n  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
\n}
\nfunction baseLog(base, value) {
\n  return Math.log(value) / Math.log(base);
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.slider.js?");


/***/ }
),

/***/ "./js/foundation.smoothScroll.js":
/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   SmoothScroll: function() {
 return /* binding */ SmoothScroll;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n/**\n * SmoothScroll module.\n * @module foundation.smoothScroll\n */\nvar SmoothScroll = /*#__PURE__*/function (_Plugin) {
\n  _inherits(SmoothScroll, _Plugin);
\n  var _super = _createSuper(SmoothScroll);
\n  function SmoothScroll() {
\n    _classCallCheck(this, SmoothScroll);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(SmoothScroll, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of SmoothScroll.\n     * @class\n     * @name SmoothScroll\n     * @fires SmoothScroll#init\n     * @param {
Object}
 element - jQuery object to add the trigger to.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, SmoothScroll.defaults, this.$element.data(), options);
\n      this.className = 'SmoothScroll';
 // ie9 back compat\n\n      this._init();
\n    }
\n\n    /**\n     * Initialize the SmoothScroll plugin\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var id = this.$element[0].id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.GetYoDigits)(6, 'smooth-scroll');
\n      this.$element.attr({
\n        id: id\n      }
);
\n      this._events();
\n    }
\n\n    /**\n     * Initializes events for SmoothScroll.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      this._linkClickListener = this._handleLinkClick.bind(this);
\n      this.$element.on('click.zf.smoothScroll', this._linkClickListener);
\n      this.$element.on('click.zf.smoothScroll', 'a[href^=\"#\"]', this._linkClickListener);
\n    }
\n\n    /**\n     * Handle the given event to smoothly scroll to the anchor pointed by the event target.\n     * @param {
*}
 e - event\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_handleLinkClick\",\n    value: function _handleLinkClick(e) {
\n      var _this = this;
\n      // Follow the link if it does not point to an anchor.\n      if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).is('a[href^=\"#\"]')) return;
\n      var arrival = e.currentTarget.getAttribute('href');
\n      this._inTransition = true;
\n      SmoothScroll.scrollToLoc(arrival, this.options, function () {
\n        _this._inTransition = false;
\n      }
);
\n      e.preventDefault();
\n    }
\n  }
, {
\n    key: \"_destroy\",\n    value:\n    /**\n     * Destroys the SmoothScroll instance.\n     * @function\n     */\n    function _destroy() {
\n      this.$element.off('click.zf.smoothScroll', this._linkClickListener);
\n      this.$element.off('click.zf.smoothScroll', 'a[href^=\"#\"]', this._linkClickListener);
\n    }
\n  }
], [{
\n    key: \"scrollToLoc\",\n    value:\n    /**\n     * Function to scroll to a given location on the page.\n     * @param {
String}
 loc - A properly formatted jQuery id selector. Example: '#foo'\n     * @param {
Object}
 options - The options to use.\n     * @param {
Function}
 callback - The callback function.\n     * @static\n     * @function\n     */\n    function scrollToLoc(loc) {
\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
\n      var callback = arguments.length > 2 ? arguments[2] : undefined;
\n      var $loc = jquery__WEBPACK_IMPORTED_MODULE_0___default()(loc);
\n\n      // Do nothing if target does not exist to prevent errors\n      if (!$loc.length) return false;
\n      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').stop(true).animate({
\n        scrollTop: scrollPos\n      }
, options.animationDuration, options.animationEasing, function () {
\n        if (typeof callback === 'function') {
\n          callback();
\n        }
\n      }
);
\n    }
\n  }
]);
\n  return SmoothScroll;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__.Plugin);
\n/**\n * Default settings for plugin.\n */\nSmoothScroll.defaults = {
\n  /**\n   * Amount of time, in ms, the animated scrolling should take between locations.\n   * @option\n   * @type {
number}
\n   * @default 500\n   */\n  animationDuration: 500,\n  /**\n   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.\n   * @option\n   * @type {
string}
\n   * @default 'linear'\n   * @see {
@link https://api.jquery.com/animate|Jquery animate}
\n   */\n  animationEasing: 'linear',\n  /**\n   * Number of pixels to use as a marker for location changes.\n   * @option\n   * @type {
number}
\n   * @default 50\n   */\n  threshold: 50,\n  /**\n   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  offset: 0\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.smoothScroll.js?");


/***/ }
),

/***/ "./js/foundation.sticky.js":
/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Sticky: function() {
 return /* binding */ Sticky;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n/**\n * Sticky module.\n * @module foundation.sticky\n * @requires foundation.util.triggers\n * @requires foundation.util.mediaQuery\n */\nvar Sticky = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Sticky, _Plugin);
\n  var _super = _createSuper(Sticky);
\n  function Sticky() {
\n    _classCallCheck(this, Sticky);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Sticky, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of a sticky thing.\n     * @class\n     * @name Sticky\n     * @param {
jQuery}
 element - jQuery object to make sticky.\n     * @param {
Object}
 options - options object passed when creating the element programmatically.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Sticky.defaults, this.$element.data(), options);
\n      this.className = 'Sticky';
 // ie9 back compat\n\n      // Triggers init is idempotent, just need to make sure it is initialized\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      this._init();
\n    }
\n\n    /**\n     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__.MediaQuery._init();
\n      var $parent = this.$element.parent('[data-sticky-container]'),\n        id = this.$element[0].id || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.GetYoDigits)(6, 'sticky'),\n        _this = this;
\n      if ($parent.length) {
\n        this.$container = $parent;
\n      }
 else {
\n        this.wasWrapped = true;
\n        this.$element.wrap(this.options.container);
\n        this.$container = this.$element.parent();
\n      }
\n      this.$container.addClass(this.options.containerClass);
\n      this.$element.addClass(this.options.stickyClass).attr({
\n        'data-resize': id,\n        'data-mutate': id\n      }
);
\n      if (this.options.anchor !== '') {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor).attr({
\n          'data-mutate': id\n        }
);
\n      }
\n      this.scrollCount = this.options.checkEvery;
\n      this.isStuck = false;
\n      this.onLoadListener = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
\n        //We calculate the container height to have correct values for anchor points offset calculation.\n        _this.containerHeight = _this.$element.css(\"display\") === \"none\" ? 0 : _this.$element[0].getBoundingClientRect().height;
\n        _this.$container.css('height', _this.containerHeight);
\n        _this.elemHeight = _this.containerHeight;
\n        if (_this.options.anchor !== '') {
\n          _this.$anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + _this.options.anchor);
\n        }
 else {
\n          _this._parsePoints();
\n        }
\n        _this._setSizes(function () {
\n          var scroll = window.pageYOffset;
\n          _this._calc(false, scroll);
\n          //Unstick the element will ensure that proper classes are set.\n          if (!_this.isStuck) {
\n            _this._removeSticky(scroll >= _this.topPoint ? false : true);
\n          }
\n        }
);
\n        _this._events(id.split('-').reverse().join('-'));
\n      }
);
\n    }
\n\n    /**\n     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_parsePoints\",\n    value: function _parsePoints() {
\n      var top = this.options.topAnchor === \"\" ? 1 : this.options.topAnchor,\n        btm = this.options.btmAnchor === \"\" ? document.documentElement.scrollHeight : this.options.btmAnchor,\n        pts = [top, btm],\n        breaks = {
}
;
\n      for (var i = 0, len = pts.length;
 i < len && pts[i];
 i++) {
\n        var pt;
\n        if (typeof pts[i] === 'number') {
\n          pt = pts[i];
\n        }
 else {
\n          var place = pts[i].split(':'),\n            anchor = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(place[0]));
\n          pt = anchor.offset().top;
\n          if (place[1] && place[1].toLowerCase() === 'bottom') {
\n            pt += anchor[0].getBoundingClientRect().height;
\n          }
\n        }
\n        breaks[i] = pt;
\n      }
\n      this.points = breaks;
\n      return;
\n    }
\n\n    /**\n     * Adds event handlers for the scrolling element.\n     * @private\n     * @param {
String}
 id - pseudo-random id for unique scroll event listener.\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events(id) {
\n      var _this = this,\n        scrollListener = this.scrollListener = \"scroll.zf.\".concat(id);
\n      if (this.isOn) {
\n        return;
\n      }
\n      if (this.canStick) {
\n        this.isOn = true;
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener).on(scrollListener, function () {
\n          if (_this.scrollCount === 0) {
\n            _this.scrollCount = _this.options.checkEvery;
\n            _this._setSizes(function () {
\n              _this._calc(false, window.pageYOffset);
\n            }
);
\n          }
 else {
\n            _this.scrollCount--;
\n            _this._calc(false, window.pageYOffset);
\n          }
\n        }
);
\n      }
\n      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
\n        _this._eventsHandler(id);
\n      }
);
\n      this.$element.on('mutateme.zf.trigger', function () {
\n        _this._eventsHandler(id);
\n      }
);
\n      if (this.$anchor) {
\n        this.$anchor.on('mutateme.zf.trigger', function () {
\n          _this._eventsHandler(id);
\n        }
);
\n      }
\n    }
\n\n    /**\n     * Handler for events.\n     * @private\n     * @param {
String}
 id - pseudo-random id for unique scroll event listener.\n     */\n  }
, {
\n    key: \"_eventsHandler\",\n    value: function _eventsHandler(id) {
\n      var _this = this,\n        scrollListener = this.scrollListener = \"scroll.zf.\".concat(id);
\n      _this._setSizes(function () {
\n        _this._calc(false);
\n        if (_this.canStick) {
\n          if (!_this.isOn) {
\n            _this._events(id);
\n          }
\n        }
 else if (_this.isOn) {
\n          _this._pauseListeners(scrollListener);
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Removes event handlers for scroll and change events on anchor.\n     * @fires Sticky#pause\n     * @param {
String}
 scrollListener - unique, namespaced scroll listener attached to `window`\n     */\n  }
, {
\n    key: \"_pauseListeners\",\n    value: function _pauseListeners(scrollListener) {
\n      this.isOn = false;
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(scrollListener);
\n\n      /**\n       * Fires when the plugin is paused due to resize event shrinking the view.\n       * @event Sticky#pause\n       * @private\n       */\n      this.$element.trigger('pause.zf.sticky');
\n    }
\n\n    /**\n     * Called on every `scroll` event and on `_init`\n     * fires functions based on booleans and cached values\n     * @param {
Boolean}
 checkSizes - true if plugin should recalculate sizes and breakpoints.\n     * @param {
Number}
 scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.\n     */\n  }
, {
\n    key: \"_calc\",\n    value: function _calc(checkSizes, scroll) {
\n      if (checkSizes) {
\n        this._setSizes();
\n      }
\n      if (!this.canStick) {
\n        if (this.isStuck) {
\n          this._removeSticky(true);
\n        }
\n        return false;
\n      }
\n      if (!scroll) {
\n        scroll = window.pageYOffset;
\n      }
\n      if (scroll >= this.topPoint) {
\n        if (scroll <= this.bottomPoint) {
\n          if (!this.isStuck) {
\n            this._setSticky();
\n          }
\n        }
 else {
\n          if (this.isStuck) {
\n            this._removeSticky(false);
\n          }
\n        }
\n      }
 else {
\n        if (this.isStuck) {
\n          this._removeSticky(true);
\n        }
\n      }
\n    }
\n\n    /**\n     * Causes the $element to become stuck.\n     * Adds `position: fixed;
`, and helper classes.\n     * @fires Sticky#stuckto\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_setSticky\",\n    value: function _setSticky() {
\n      var _this = this,\n        stickTo = this.options.stickTo,\n        mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',\n        notStuckTo = stickTo === 'top' ? 'bottom' : 'top',\n        css = {
}
;
\n      css[mrgn] = \"\".concat(this.options[mrgn], \"em\");
\n      css[stickTo] = 0;
\n      css[notStuckTo] = 'auto';
\n      this.isStuck = true;
\n      this.$element.removeClass(\"is-anchored is-at-\".concat(notStuckTo)).addClass(\"is-stuck is-at-\".concat(stickTo)).css(css)\n      /**\n       * Fires when the $element has become `position: fixed;
`\n       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`\n       * @event Sticky#stuckto\n       */.trigger(\"sticky.zf.stuckto:\".concat(stickTo));
\n      this.$element.on(\"transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd\", function () {
\n        _this._setSizes();
\n      }
);
\n    }
\n\n    /**\n     * Causes the $element to become unstuck.\n     * Removes `position: fixed;
`, and helper classes.\n     * Adds other helper classes.\n     * @param {
Boolean}
 isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.\n     * @fires Sticky#unstuckfrom\n     * @private\n     */\n  }
, {
\n    key: \"_removeSticky\",\n    value: function _removeSticky(isTop) {
\n      var stickTo = this.options.stickTo,\n        stickToTop = stickTo === 'top',\n        css = {
}
,\n        anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,\n        mrgn = stickToTop ? 'marginTop' : 'marginBottom',\n        topOrBottom = isTop ? 'top' : 'bottom';
\n      css[mrgn] = 0;
\n      css.bottom = 'auto';
\n      if (isTop) {
\n        css.top = 0;
\n      }
 else {
\n        css.top = anchorPt;
\n      }
\n      this.isStuck = false;
\n      this.$element.removeClass(\"is-stuck is-at-\".concat(stickTo)).addClass(\"is-anchored is-at-\".concat(topOrBottom)).css(css)\n      /**\n       * Fires when the $element has become anchored.\n       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`\n       * @event Sticky#unstuckfrom\n       */.trigger(\"sticky.zf.unstuckfrom:\".concat(topOrBottom));
\n    }
\n\n    /**\n     * Sets the $element and $container sizes for plugin.\n     * Calls `_setBreakPoints`.\n     * @param {
Function}
 cb - optional callback function to fire on completion of `_setBreakPoints`.\n     * @private\n     */\n  }
, {
\n    key: \"_setSizes\",\n    value: function _setSizes(cb) {
\n      this.canStick = _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_3__.MediaQuery.is(this.options.stickyOn);
\n      if (!this.canStick) {
\n        if (cb && typeof cb === 'function') {
\n          cb();
\n        }
\n      }
\n      var newElemWidth = this.$container[0].getBoundingClientRect().width,\n        comp = window.getComputedStyle(this.$container[0]),\n        pdngl = parseInt(comp['padding-left'], 10),\n        pdngr = parseInt(comp['padding-right'], 10);
\n      if (this.$anchor && this.$anchor.length) {
\n        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
\n      }
 else {
\n        this._parsePoints();
\n      }
\n      this.$element.css({
\n        'max-width': \"\".concat(newElemWidth - pdngl - pdngr, \"px\")\n      }
);
\n\n      // Recalculate the height only if it is \"dynamic\"\n      if (this.options.dynamicHeight || !this.containerHeight) {
\n        // Get the sticked element height and apply it to the container to \"hold the place\"\n        var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;
\n        newContainerHeight = this.$element.css(\"display\") === \"none\" ? 0 : newContainerHeight;
\n        this.$container.css('height', newContainerHeight);
\n        this.containerHeight = newContainerHeight;
\n      }
\n      this.elemHeight = this.containerHeight;
\n      if (!this.isStuck) {
\n        if (this.$element.hasClass('is-at-bottom')) {
\n          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
\n          this.$element.css('top', anchorPt);
\n        }
\n      }
\n      this._setBreakPoints(this.containerHeight, function () {
\n        if (cb && typeof cb === 'function') {
\n          cb();
\n        }
\n      }
);
\n    }
\n\n    /**\n     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.\n     * @param {
Number}
 elemHeight - px value for sticky.$element height, calculated by `_setSizes`.\n     * @param {
Function}
 cb - optional callback function to be called on completion.\n     * @private\n     */\n  }
, {
\n    key: \"_setBreakPoints\",\n    value: function _setBreakPoints(elemHeight, cb) {
\n      if (!this.canStick) {
\n        if (cb && typeof cb === 'function') {
\n          cb();
\n        }
 else {
\n          return false;
\n        }
\n      }
\n      var mTop = emCalc(this.options.marginTop),\n        mBtm = emCalc(this.options.marginBottom),\n        topPoint = this.points ? this.points[0] : this.$anchor.offset().top,\n        bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,\n        // topPoint = this.$anchor.offset().top || this.points[0],\n        // bottomPoint = topPoint + this.anchorHeight || this.points[1],\n        winHeight = window.innerHeight;
\n      if (this.options.stickTo === 'top') {
\n        topPoint -= mTop;
\n        bottomPoint -= elemHeight + mTop;
\n      }
 else if (this.options.stickTo === 'bottom') {
\n        topPoint -= winHeight - (elemHeight + mBtm);
\n        bottomPoint -= winHeight - mBtm;
\n      }
 else {
\n        //this would be the stickTo: both option... tricky\n      }
\n      this.topPoint = topPoint;
\n      this.bottomPoint = bottomPoint;
\n      if (cb && typeof cb === 'function') {
\n        cb();
\n      }
\n    }
\n\n    /**\n     * Destroys the current sticky element.\n     * Resets the element to the top position first.\n     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this._removeSticky(true);
\n      this.$element.removeClass(\"\".concat(this.options.stickyClass, \" is-anchored is-at-top\")).css({
\n        height: '',\n        top: '',\n        bottom: '',\n        'max-width': ''\n      }
).off('resizeme.zf.trigger').off('mutateme.zf.trigger');
\n      if (this.$anchor && this.$anchor.length) {
\n        this.$anchor.off('change.zf.sticky');
\n      }
\n      if (this.scrollListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.scrollListener);
\n      if (this.onLoadListener) jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
\n      if (this.wasWrapped) {
\n        this.$element.unwrap();
\n      }
 else {
\n        this.$container.removeClass(this.options.containerClass).css({
\n          height: ''\n        }
);
\n      }
\n    }
\n  }
]);
\n  return Sticky;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\nSticky.defaults = {
\n  /**\n   * Customizable container template. Add your own classes for styling and sizing.\n   * @option\n   * @type {
string}
\n   * @default '&lt;
div data-sticky-container&gt;
&lt;
/div&gt;
'\n   */\n  container: '<div data-sticky-container></div>',\n  /**\n   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.\n   * @option\n   * @type {
string}
\n   * @default 'top'\n   */\n  stickTo: 'top',\n  /**\n   * If anchored to a single element, the id of that element.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  anchor: '',\n  /**\n   * If using more than one element as anchor points, the id of the top anchor.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  topAnchor: '',\n  /**\n   * If using more than one element as anchor points, the id of the bottom anchor.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  btmAnchor: '',\n  /**\n   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.\n   * @option\n   * @type {
number}
\n   * @default 1\n   */\n  marginTop: 1,\n  /**\n   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.\n   * @option\n   * @type {
number}
\n   * @default 1\n   */\n  marginBottom: 1,\n  /**\n   * Breakpoint string that is the minimum screen size an element should become sticky.\n   * @option\n   * @type {
string}
\n   * @default 'medium'\n   */\n  stickyOn: 'medium',\n  /**\n   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.\n   * @option\n   * @type {
string}
\n   * @default 'sticky'\n   */\n  stickyClass: 'sticky',\n  /**\n   * Class applied to sticky container. Foundation defaults to `sticky-container`.\n   * @option\n   * @type {
string}
\n   * @default 'sticky-container'\n   */\n  containerClass: 'sticky-container',\n  /**\n   * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  dynamicHeight: true,\n  /**\n   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.\n   * @option\n   * @type {
number}
\n   * @default -1\n   */\n  checkEvery: -1\n}
;
\n\n/**\n * Helper function to calculate em values\n * @param Number {
em}
 - number of em's to calculate into pixels\n */\nfunction emCalc(em) {
\n  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.sticky.js?");


/***/ }
),

/***/ "./js/foundation.tabs.js":
/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Tabs: function() {
 return /* binding */ Tabs;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.keyboard */ \"./js/foundation.util.keyboard.js\");
\n/* harmony import */ var _foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.imageLoader */ \"./js/foundation.util.imageLoader.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n/**\n * Tabs module.\n * @module foundation.tabs\n * @requires foundation.util.keyboard\n * @requires foundation.util.imageLoader if tabs contain images\n */\nvar Tabs = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Tabs, _Plugin);
\n  var _super = _createSuper(Tabs);
\n  function Tabs() {
\n    _classCallCheck(this, Tabs);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Tabs, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of tabs.\n     * @class\n     * @name Tabs\n     * @fires Tabs#init\n     * @param {
jQuery}
 element - jQuery object to make into tabs.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Tabs.defaults, this.$element.data(), options);
\n      this.className = 'Tabs';
 // ie9 back compat\n\n      this._init();
\n      _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.register('Tabs', {
\n        'ENTER': 'open',\n        'SPACE': 'open',\n        'ARROW_RIGHT': 'next',\n        'ARROW_UP': 'previous',\n        'ARROW_DOWN': 'next',\n        'ARROW_LEFT': 'previous'\n        // 'TAB': 'next',\n        // 'SHIFT_TAB': 'previous'\n      }
);
\n    }
\n\n    /**\n     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      var _this2 = this;
\n      var _this = this;
\n      this._isInitializing = true;
\n      this.$element.attr({
\n        'role': 'tablist'\n      }
);
\n      this.$tabTitles = this.$element.find(\".\".concat(this.options.linkClass));
\n      this.$tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-tabs-content=\\\"\".concat(this.$element[0].id, \"\\\"]\"));
\n      this.$tabTitles.each(function () {
\n        var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $link = $elem.find('a'),\n          isActive = $elem.hasClass(\"\".concat(_this.options.linkActiveClass)),\n          hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),\n          linkId = $link[0].id ? $link[0].id : \"\".concat(hash, \"-label\"),\n          $tabContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(hash));
\n        $elem.attr({
\n          'role': 'presentation'\n        }
);
\n        $link.attr({
\n          'role': 'tab',\n          'aria-controls': hash,\n          'aria-selected': isActive,\n          'id': linkId,\n          'tabindex': isActive ? '0' : '-1'\n        }
);
\n        $tabContent.attr({
\n          'role': 'tabpanel',\n          'aria-labelledby': linkId\n        }
);
\n\n        // Save up the initial hash to return to it later when going back in history\n        if (isActive) {
\n          _this._initialAnchor = \"#\".concat(hash);
\n        }
\n        if (!isActive) {
\n          $tabContent.attr('aria-hidden', 'true');
\n        }
\n        if (isActive && _this.options.autoFocus) {
\n          _this.onLoadListener = (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_2__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
\n              scrollTop: $elem.offset().top\n            }
, _this.options.deepLinkSmudgeDelay, function () {
\n              $link.focus();
\n            }
);
\n          }
);
\n        }
\n      }
);
\n      if (this.options.matchHeight) {
\n        var $images = this.$tabContent.find('img');
\n        if ($images.length) {
\n          (0,_foundation_util_imageLoader__WEBPACK_IMPORTED_MODULE_4__.onImagesLoaded)($images, this._setHeight.bind(this));
\n        }
 else {
\n          this._setHeight();
\n        }
\n      }
\n\n      // Current context-bound function to open tabs on page load or history hashchange\n      this._checkDeepLink = function () {
\n        var anchor = window.location.hash;
\n        if (!anchor.length) {
\n          // If we are still initializing and there is no anchor, then there is nothing to do\n          if (_this2._isInitializing) return;
\n          // Otherwise, move to the initial anchor\n          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
\n        }
\n        var anchorNoHash = anchor.indexOf('#') >= 0 ? anchor.slice(1) : anchor;
\n        var $anchor = anchorNoHash && jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(anchorNoHash));
\n        var $link = anchor && _this2.$element.find(\"[href$=\\\"\".concat(anchor, \"\\\"],[data-tabs-target=\\\"\").concat(anchorNoHash, \"\\\"]\")).first();
\n        // Whether the anchor element that has been found is part of this element\n        var isOwnAnchor = !!($anchor.length && $link.length);
\n        if (isOwnAnchor) {
\n          // If there is an anchor for the hash, select it\n          if ($anchor && $anchor.length && $link && $link.length) {
\n            _this2.selectTab($anchor, true);
\n          }
\n          // Otherwise, collapse everything\n          else {
\n            _this2._collapse();
\n          }
\n\n          // Roll up a little to show the titles\n          if (_this2.options.deepLinkSmudge) {
\n            var offset = _this2.$element.offset();
\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
\n              scrollTop: offset.top - _this2.options.deepLinkSmudgeOffset\n            }
, _this2.options.deepLinkSmudgeDelay);
\n          }
\n\n          /**\n           * Fires when the plugin has deeplinked at pageload\n           * @event Tabs#deeplink\n           */\n          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
\n        }
\n      }
;
\n\n      //use browser to open a tab, if it exists in this tabset\n      if (this.options.deepLink) {
\n        this._checkDeepLink();
\n      }
\n      this._events();
\n      this._isInitializing = false;
\n    }
\n\n    /**\n     * Adds event handlers for items within the tabs.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      this._addKeyHandler();
\n      this._addClickHandler();
\n      this._setHeightMqHandler = null;
\n      if (this.options.matchHeight) {
\n        this._setHeightMqHandler = this._setHeight.bind(this);
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
\n      }
\n      if (this.options.deepLink) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('hashchange', this._checkDeepLink);
\n      }
\n    }
\n\n    /**\n     * Adds click handlers for items within the tabs.\n     * @private\n     */\n  }
, {
\n    key: \"_addClickHandler\",\n    value: function _addClickHandler() {
\n      var _this = this;
\n      this.$element.off('click.zf.tabs').on('click.zf.tabs', \".\".concat(this.options.linkClass), function (e) {
\n        e.preventDefault();
\n        _this._handleTabChange(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
\n      }
);
\n    }
\n\n    /**\n     * Adds keyboard event handlers for items within the tabs.\n     * @private\n     */\n  }
, {
\n    key: \"_addKeyHandler\",\n    value: function _addKeyHandler() {
\n      var _this = this;
\n      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
\n        if (e.which === 9) return;
\n        var $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          $elements = $element.parent('ul').children('li'),\n          $prevElement,\n          $nextElement;
\n        $elements.each(function (i) {
\n          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is($element)) {
\n            if (_this.options.wrapOnKeys) {
\n              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
\n              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
\n            }
 else {
\n              $prevElement = $elements.eq(Math.max(0, i - 1));
\n              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
\n            }
\n            return;
\n          }
\n        }
);
\n\n        // handle keyboard event with keyboard util\n        _foundation_util_keyboard__WEBPACK_IMPORTED_MODULE_3__.Keyboard.handleKey(e, 'Tabs', {
\n          open: function open() {
\n            $element.find('[role=\"tab\"]').focus();
\n            _this._handleTabChange($element);
\n          }
,\n          previous: function previous() {
\n            $prevElement.find('[role=\"tab\"]').focus();
\n            _this._handleTabChange($prevElement);
\n          }
,\n          next: function next() {
\n            $nextElement.find('[role=\"tab\"]').focus();
\n            _this._handleTabChange($nextElement);
\n          }
,\n          handled: function handled() {
\n            e.preventDefault();
\n          }
\n        }
);
\n      }
);
\n    }
\n\n    /**\n     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.\n     * @param {
jQuery}
 $target - Tab to open.\n     * @param {
boolean}
 historyHandled - browser has already handled a history update\n     * @fires Tabs#change\n     * @function\n     */\n  }
, {
\n    key: \"_handleTabChange\",\n    value: function _handleTabChange($target, historyHandled) {
\n      // With `activeCollapse`, if the target is the active Tab, collapse it.\n      if ($target.hasClass(\"\".concat(this.options.linkActiveClass))) {
\n        if (this.options.activeCollapse) {
\n          this._collapse();
\n        }
\n        return;
\n      }
\n      var $oldTab = this.$element.find(\".\".concat(this.options.linkClass, \".\").concat(this.options.linkActiveClass)),\n        $tabLink = $target.find('[role=\"tab\"]'),\n        target = $tabLink.attr('data-tabs-target'),\n        anchor = target && target.length ? \"#\".concat(target) : $tabLink[0].hash,\n        $targetContent = this.$tabContent.find(anchor);
\n\n      //close old tab\n      this._collapseTab($oldTab);
\n\n      //open new tab\n      this._openTab($target);
\n\n      //either replace or update browser history\n      if (this.options.deepLink && !historyHandled) {
\n        if (this.options.updateHistory) {
\n          history.pushState({
}
, '', anchor);
\n        }
 else {
\n          history.replaceState({
}
, '', anchor);
\n        }
\n      }
\n\n      /**\n       * Fires when the plugin has successfully changed tabs.\n       * @event Tabs#change\n       */\n      this.$element.trigger('change.zf.tabs', [$target, $targetContent]);
\n\n      //fire to children a mutation event\n      $targetContent.find(\"[data-mutate]\").trigger(\"mutateme.zf.trigger\");
\n    }
\n\n    /**\n     * Opens the tab `$targetContent` defined by `$target`.\n     * @param {
jQuery}
 $target - Tab to open.\n     * @function\n     */\n  }
, {
\n    key: \"_openTab\",\n    value: function _openTab($target) {
\n      var $tabLink = $target.find('[role=\"tab\"]'),\n        hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),\n        $targetContent = this.$tabContent.find(\"#\".concat(hash));
\n      $target.addClass(\"\".concat(this.options.linkActiveClass));
\n      $tabLink.attr({
\n        'aria-selected': 'true',\n        'tabindex': '0'\n      }
);
\n      $targetContent.addClass(\"\".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
\n    }
\n\n    /**\n     * Collapses `$targetContent` defined by `$target`.\n     * @param {
jQuery}
 $target - Tab to collapse.\n     * @function\n     */\n  }
, {
\n    key: \"_collapseTab\",\n    value: function _collapseTab($target) {
\n      var $targetAnchor = $target.removeClass(\"\".concat(this.options.linkActiveClass)).find('[role=\"tab\"]').attr({
\n        'aria-selected': 'false',\n        'tabindex': -1\n      }
);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat($targetAnchor.attr('aria-controls'))).removeClass(\"\".concat(this.options.panelActiveClass)).attr({
\n        'aria-hidden': 'true'\n      }
);
\n    }
\n\n    /**\n     * Collapses the active Tab.\n     * @fires Tabs#collapse\n     * @function\n     */\n  }
, {
\n    key: \"_collapse\",\n    value: function _collapse() {
\n      var $activeTab = this.$element.find(\".\".concat(this.options.linkClass, \".\").concat(this.options.linkActiveClass));
\n      if ($activeTab.length) {
\n        this._collapseTab($activeTab);
\n\n        /**\n        * Fires when the plugin has successfully collapsed tabs.\n        * @event Tabs#collapse\n        */\n        this.$element.trigger('collapse.zf.tabs', [$activeTab]);
\n      }
\n    }
\n\n    /**\n     * Public method for selecting a content pane to display.\n     * @param {
jQuery | String}
 elem - jQuery object or string of the id of the pane to display.\n     * @param {
boolean}
 historyHandled - browser has already handled a history update\n     * @function\n     */\n  }
, {
\n    key: \"selectTab\",\n    value: function selectTab(elem, historyHandled) {
\n      var idStr, hashIdStr;
\n      if (_typeof(elem) === 'object') {
\n        idStr = elem[0].id;
\n      }
 else {
\n        idStr = elem;
\n      }
\n      if (idStr.indexOf('#') < 0) {
\n        hashIdStr = \"#\".concat(idStr);
\n      }
 else {
\n        hashIdStr = idStr;
\n        idStr = idStr.slice(1);
\n      }
\n      var $target = this.$tabTitles.has(\"[href$=\\\"\".concat(hashIdStr, \"\\\"],[data-tabs-target=\\\"\").concat(idStr, \"\\\"]\")).first();
\n      this._handleTabChange($target, historyHandled);
\n    }
\n  }
, {
\n    key: \"_setHeight\",\n    value:\n    /**\n     * Sets the height of each panel to the height of the tallest panel.\n     * If enabled in options, gets called on media query change.\n     * If loading content via external source, can be called directly or with _reflow.\n     * If enabled with `data-match-height=\"true\"`, tabs sets to equal height\n     * @function\n     * @private\n     */\n    function _setHeight() {
\n      var max = 0,\n        _this = this;
 // Lock down the `this` value for the root tabs object\n\n      if (!this.$tabContent) {
\n        return;
\n      }
\n      this.$tabContent.find(\".\".concat(this.options.panelClass)).css('min-height', '').each(function () {
\n        var panel = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n          isActive = panel.hasClass(\"\".concat(_this.options.panelActiveClass));
 // get the options from the parent instead of trying to get them from the child\n\n        if (!isActive) {
\n          panel.css({
\n            'visibility': 'hidden',\n            'display': 'block'\n          }
);
\n        }
\n        var temp = this.getBoundingClientRect().height;
\n        if (!isActive) {
\n          panel.css({
\n            'visibility': '',\n            'display': ''\n          }
);
\n        }
\n        max = temp > max ? temp : max;
\n      }
).css('min-height', \"\".concat(max, \"px\"));
\n    }
\n\n    /**\n     * Destroys an instance of tabs.\n     * @fires Tabs#destroyed\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.find(\".\".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(\".\".concat(this.options.panelClass)).hide();
\n      if (this.options.matchHeight) {
\n        if (this._setHeightMqHandler != null) {
\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
\n        }
\n      }
\n      if (this.options.deepLink) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off('hashchange', this._checkDeepLink);
\n      }
\n      if (this.onLoadListener) {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(this.onLoadListener);
\n      }
\n    }
\n  }
]);
\n  return Tabs;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_1__.Plugin);
\nTabs.defaults = {
\n  /**\n   * Link the location hash to the active pane.\n   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  deepLink: false,\n  /**\n   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  deepLinkSmudge: false,\n  /**\n   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment\n   * @option\n   * @type {
number}
\n   * @default 300\n   */\n  deepLinkSmudgeDelay: 300,\n  /**\n   * If `deepLinkSmudge` is enabled, animation offset from the top for the deep link adjustment\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  deepLinkSmudgeOffset: 0,\n  /**\n   * If `deepLink` is enabled, update the browser history with the open tab\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  updateHistory: false,\n  /**\n   * Allows the window to scroll to content of active pane on load.\n   * Not recommended if more than one tab panel per page.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  autoFocus: false,\n  /**\n   * Allows keyboard input to 'wrap' around the tab links.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  wrapOnKeys: true,\n  /**\n   * Allows the tab content panes to match heights if set to true.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  matchHeight: false,\n  /**\n   * Allows active tabs to collapse when clicked.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  activeCollapse: false,\n  /**\n   * Class applied to `li`'s in tab link list.\n   * @option\n   * @type {
string}
\n   * @default 'tabs-title'\n   */\n  linkClass: 'tabs-title',\n  /**\n   * Class applied to the active `li` in tab link list.\n   * @option\n   * @type {
string}
\n   * @default 'is-active'\n   */\n  linkActiveClass: 'is-active',\n  /**\n   * Class applied to the content containers.\n   * @option\n   * @type {
string}
\n   * @default 'tabs-panel'\n   */\n  panelClass: 'tabs-panel',\n  /**\n   * Class applied to the active content container.\n   * @option\n   * @type {
string}
\n   * @default 'is-active'\n   */\n  panelActiveClass: 'is-active'\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.tabs.js?");


/***/ }
),

/***/ "./js/foundation.toggler.js":
/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Toggler: function() {
 return /* binding */ Toggler;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");
\n/* harmony import */ var _foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.core.plugin */ \"./js/foundation.core.plugin.js\");
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n/**\n * Toggler module.\n * @module foundation.toggler\n * @requires foundation.util.motion\n * @requires foundation.util.triggers\n */\nvar Toggler = /*#__PURE__*/function (_Plugin) {
\n  _inherits(Toggler, _Plugin);
\n  var _super = _createSuper(Toggler);
\n  function Toggler() {
\n    _classCallCheck(this, Toggler);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Toggler, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of Toggler.\n     * @class\n     * @name Toggler\n     * @fires Toggler#init\n     * @param {
Object}
 element - jQuery object to add the trigger to.\n     * @param {
Object}
 options - Overrides to the default plugin settings.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Toggler.defaults, element.data(), options);
\n      this.className = '';
\n      this.className = 'Toggler';
 // ie9 back compat\n\n      // Triggers init is idempotent, just need to make sure it is initialized\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_4__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      this._init();
\n      this._events();
\n    }
\n\n    /**\n     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      // Collect triggers to set ARIA attributes to\n      var id = this.$element[0].id,\n        $triggers = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open~=\\\"\".concat(id, \"\\\"], [data-close~=\\\"\").concat(id, \"\\\"], [data-toggle~=\\\"\").concat(id, \"\\\"]\"));
\n      var input;
\n      // Parse animation classes if they were set\n      if (this.options.animate) {
\n        input = this.options.animate.split(' ');
\n        this.animationIn = input[0];
\n        this.animationOut = input[1] || null;
\n\n        // - aria-expanded: according to the element visibility.\n        $triggers.attr('aria-expanded', !this.$element.is(':hidden'));
\n      }
\n      // Otherwise, parse toggle class\n      else {
\n        input = this.options.toggler;
\n        if (typeof input !== 'string' || !input.length) {
\n          throw new Error(\"The 'toggler' option containing the target class is required, got \\\"\".concat(input, \"\\\"\"));
\n        }
\n        // Allow for a . at the beginning of the string\n        this.className = input[0] === '.' ? input.slice(1) : input;
\n\n        // - aria-expanded: according to the elements class set.\n        $triggers.attr('aria-expanded', this.$element.hasClass(this.className));
\n      }
\n\n      // - aria-controls: adding the element id to it if not already in it.\n      $triggers.each(function (index, trigger) {
\n        var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger);
\n        var controls = $trigger.attr('aria-controls') || '';
\n        var containsId = new RegExp(\"\\\\b\".concat((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_3__.RegExpEscape)(id), \"\\\\b\")).test(controls);
\n        if (!containsId) $trigger.attr('aria-controls', controls ? \"\".concat(controls, \" \").concat(id) : id);
\n      }
);
\n    }
\n\n    /**\n     * Initializes events for the toggle trigger.\n     * @function\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
\n    }
\n\n    /**\n     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was \"on\" or \"off\".\n     * @function\n     * @fires Toggler#on\n     * @fires Toggler#off\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle() {
\n      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
\n    }
\n  }
, {
\n    key: \"_toggleClass\",\n    value: function _toggleClass() {
\n      this.$element.toggleClass(this.className);
\n      var isOn = this.$element.hasClass(this.className);
\n      if (isOn) {
\n        /**\n         * Fires if the target element has the class after a toggle.\n         * @event Toggler#on\n         */\n        this.$element.trigger('on.zf.toggler');
\n      }
 else {
\n        /**\n         * Fires if the target element does not have the class after a toggle.\n         * @event Toggler#off\n         */\n        this.$element.trigger('off.zf.toggler');
\n      }
\n      this._updateARIA(isOn);
\n      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
\n    }
\n  }
, {
\n    key: \"_toggleAnimate\",\n    value: function _toggleAnimate() {
\n      var _this = this;
\n      if (this.$element.is(':hidden')) {
\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__.Motion.animateIn(this.$element, this.animationIn, function () {
\n          _this._updateARIA(true);
\n          this.trigger('on.zf.toggler');
\n          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
\n        }
);
\n      }
 else {
\n        _foundation_util_motion__WEBPACK_IMPORTED_MODULE_1__.Motion.animateOut(this.$element, this.animationOut, function () {
\n          _this._updateARIA(false);
\n          this.trigger('off.zf.toggler');
\n          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
\n        }
);
\n      }
\n    }
\n  }
, {
\n    key: \"_updateARIA\",\n    value: function _updateARIA(isOn) {
\n      var id = this.$element[0].id;
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-open=\\\"\".concat(id, \"\\\"], [data-close=\\\"\").concat(id, \"\\\"], [data-toggle=\\\"\").concat(id, \"\\\"]\")).attr({
\n        'aria-expanded': isOn ? true : false\n      }
);
\n    }
\n\n    /**\n     * Destroys the instance of Toggler on the element.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.off('.zf.toggler');
\n    }
\n  }
]);
\n  return Toggler;
\n}
(_foundation_core_plugin__WEBPACK_IMPORTED_MODULE_2__.Plugin);
\nToggler.defaults = {
\n  /**\n   * Class of the element to toggle. It can be provided with or without \".\"\n   * @option\n   * @type {
string}
\n   */\n  toggler: undefined,\n  /**\n   * Tells the plugin if the element should animated when toggled.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  animate: false\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.toggler.js?");


/***/ }
),

/***/ "./js/foundation.tooltip.js":
/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Tooltip: function() {
 return /* binding */ Tooltip;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.mediaQuery */ \"./js/foundation.util.mediaQuery.js\");
\n/* harmony import */ var _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation.util.triggers */ \"./js/foundation.util.triggers.js\");
\n/* harmony import */ var _foundation_positionable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation.positionable */ \"./js/foundation.positionable.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\nfunction _get() {
 if (typeof Reflect !== \"undefined\" && Reflect.get) {
 _get = Reflect.get.bind();
 }
 else {
 _get = function _get(target, property, receiver) {
 var base = _superPropBase(target, property);
 if (!base) return;
 var desc = Object.getOwnPropertyDescriptor(base, property);
 if (desc.get) {
 return desc.get.call(arguments.length < 3 ? target : receiver);
 }
 return desc.value;
 }
;
 }
 return _get.apply(this, arguments);
 }
\nfunction _superPropBase(object, property) {
 while (!Object.prototype.hasOwnProperty.call(object, property)) {
 object = _getPrototypeOf(object);
 if (object === null) break;
 }
 return object;
 }
\nfunction _inherits(subClass, superClass) {
 if (typeof superClass !== \"function\" && superClass !== null) {
 throw new TypeError(\"Super expression must either be null or a function\");
 }
 subClass.prototype = Object.create(superClass && superClass.prototype, {
 constructor: {
 value: subClass, writable: true, configurable: true }
 }
);
 Object.defineProperty(subClass, \"prototype\", {
 writable: false }
);
 if (superClass) _setPrototypeOf(subClass, superClass);
 }
\nfunction _setPrototypeOf(o, p) {
 _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
 o.__proto__ = p;
 return o;
 }
;
 return _setPrototypeOf(o, p);
 }
\nfunction _createSuper(Derived) {
 var hasNativeReflectConstruct = _isNativeReflectConstruct();
 return function _createSuperInternal() {
 var Super = _getPrototypeOf(Derived), result;
 if (hasNativeReflectConstruct) {
 var NewTarget = _getPrototypeOf(this).constructor;
 result = Reflect.construct(Super, arguments, NewTarget);
 }
 else {
 result = Super.apply(this, arguments);
 }
 return _possibleConstructorReturn(this, result);
 }
;
 }
\nfunction _possibleConstructorReturn(self, call) {
 if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {
 return call;
 }
 else if (call !== void 0) {
 throw new TypeError(\"Derived constructors may only return object or undefined\");
 }
 return _assertThisInitialized(self);
 }
\nfunction _assertThisInitialized(self) {
 if (self === void 0) {
 throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");
 }
 return self;
 }
\nfunction _isNativeReflectConstruct() {
 if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;
 if (Reflect.construct.sham) return false;
 if (typeof Proxy === \"function\") return true;
 try {
 Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
}
));
 return true;
 }
 catch (e) {
 return false;
 }
 }
\nfunction _getPrototypeOf(o) {
 _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
 return o.__proto__ || Object.getPrototypeOf(o);
 }
;
 return _getPrototypeOf(o);
 }
\n\n\n\n\n\n\n/**\n * Tooltip module.\n * @module foundation.tooltip\n * @requires foundation.util.box\n * @requires foundation.util.mediaQuery\n * @requires foundation.util.triggers\n */\nvar Tooltip = /*#__PURE__*/function (_Positionable) {
\n  _inherits(Tooltip, _Positionable);
\n  var _super = _createSuper(Tooltip);
\n  function Tooltip() {
\n    _classCallCheck(this, Tooltip);
\n    return _super.apply(this, arguments);
\n  }
\n  _createClass(Tooltip, [{
\n    key: \"_setup\",\n    value:\n    /**\n     * Creates a new instance of a Tooltip.\n     * @class\n     * @name Tooltip\n     * @fires Tooltip#init\n     * @param {
jQuery}
 element - jQuery object to attach a tooltip to.\n     * @param {
Object}
 options - object to extend the default configuration.\n     */\n    function _setup(element, options) {
\n      this.$element = element;
\n      this.options = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, Tooltip.defaults, this.$element.data(), options);
\n      this.className = 'Tooltip';
 // ie9 back compat\n\n      this.isActive = false;
\n      this.isClick = false;
\n\n      // Triggers init is idempotent, just need to make sure it is initialized\n      _foundation_util_triggers__WEBPACK_IMPORTED_MODULE_3__.Triggers.init((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n      this._init();
\n    }
\n\n    /**\n     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.\n     * @private\n     */\n  }
, {
\n    key: \"_init\",\n    value: function _init() {
\n      _foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__.MediaQuery._init();
\n      var elemId = this.$element.attr('aria-describedby') || (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.GetYoDigits)(6, 'tooltip');
\n      this.options.tipText = this.options.tipText || this.$element.attr('title');
\n      this.template = this.options.template ? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.options.template) : this._buildTemplate(elemId);
\n      if (this.options.allowHtml) {
\n        this.template.appendTo(document.body).html(this.options.tipText).hide();
\n      }
 else {
\n        this.template.appendTo(document.body).text(this.options.tipText).hide();
\n      }
\n      this.$element.attr({
\n        'title': '',\n        'aria-describedby': elemId,\n        'data-yeti-box': elemId,\n        'data-toggle': elemId,\n        'data-resize': elemId\n      }
).addClass(this.options.triggerClass);
\n      _get(_getPrototypeOf(Tooltip.prototype), \"_init\", this).call(this);
\n      this._events();
\n    }
\n  }
, {
\n    key: \"_getDefaultPosition\",\n    value: function _getDefaultPosition() {
\n      // handle legacy classnames\n      var elementClassName = this.$element[0].className;
\n      if (this.$element[0] instanceof SVGElement) {
\n        elementClassName = elementClassName.baseVal;
\n      }
\n      var position = elementClassName.match(/\\b(top|left|right|bottom)\\b/g);
\n      return position ? position[0] : 'top';
\n    }
\n  }
, {
\n    key: \"_getDefaultAlignment\",\n    value: function _getDefaultAlignment() {
\n      return 'center';
\n    }
\n  }
, {
\n    key: \"_getHOffset\",\n    value: function _getHOffset() {
\n      if (this.position === 'left' || this.position === 'right') {
\n        return this.options.hOffset + this.options.tooltipWidth;
\n      }
 else {
\n        return this.options.hOffset;
\n      }
\n    }
\n  }
, {
\n    key: \"_getVOffset\",\n    value: function _getVOffset() {
\n      if (this.position === 'top' || this.position === 'bottom') {
\n        return this.options.vOffset + this.options.tooltipHeight;
\n      }
 else {
\n        return this.options.vOffset;
\n      }
\n    }
\n\n    /**\n     * builds the tooltip element, adds attributes, and returns the template.\n     * @private\n     */\n  }
, {
\n    key: \"_buildTemplate\",\n    value: function _buildTemplate(id) {
\n      var templateClasses = \"\".concat(this.options.tooltipClass, \" \").concat(this.options.templateClasses).trim();
\n      var $template = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div></div>').addClass(templateClasses).attr({
\n        'role': 'tooltip',\n        'aria-hidden': true,\n        'data-is-active': false,\n        'data-is-focus': false,\n        'id': id\n      }
);
\n      return $template;
\n    }
\n\n    /**\n     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.\n     * if the tooltip is larger than the screen width, default to full width - any user selected margin\n     * @private\n     */\n  }
, {
\n    key: \"_setPosition\",\n    value: function _setPosition() {
\n      _get(_getPrototypeOf(Tooltip.prototype), \"_setPosition\", this).call(this, this.$element, this.template);
\n    }
\n\n    /**\n     * reveals the tooltip, and fires an event to close any other open tooltips on the page\n     * @fires Tooltip#closeme\n     * @fires Tooltip#show\n     * @function\n     */\n  }
, {
\n    key: \"show\",\n    value: function show() {
\n      if (this.options.showOn !== 'all' && !_foundation_util_mediaQuery__WEBPACK_IMPORTED_MODULE_2__.MediaQuery.is(this.options.showOn)) {
\n        // console.error('The screen is too small to display this tooltip');
\n        return false;
\n      }
\n      var _this = this;
\n      this.template.css('visibility', 'hidden').show();
\n      this._setPosition();
\n      this.template.removeClass('top bottom left right').addClass(this.position);
\n      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);
\n\n      /**\n       * Fires to close all other open tooltips on the page\n       * @event Closeme#tooltip\n       */\n      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
\n      this.template.attr({
\n        'data-is-active': true,\n        'aria-hidden': false\n      }
);
\n      _this.isActive = true;
\n      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {
\n        //maybe do stuff?\n      }
);
\n      /**\n       * Fires when the tooltip is shown\n       * @event Tooltip#show\n       */\n      this.$element.trigger('show.zf.tooltip');
\n    }
\n\n    /**\n     * Hides the current tooltip, and resets the positioning class if it was changed due to collision\n     * @fires Tooltip#hide\n     * @function\n     */\n  }
, {
\n    key: \"hide\",\n    value: function hide() {
\n      var _this = this;
\n      this.template.stop().attr({
\n        'aria-hidden': true,\n        'data-is-active': false\n      }
).fadeOut(this.options.fadeOutDuration, function () {
\n        _this.isActive = false;
\n        _this.isClick = false;
\n      }
);
\n      /**\n       * fires when the tooltip is hidden\n       * @event Tooltip#hide\n       */\n      this.$element.trigger('hide.zf.tooltip');
\n    }
\n\n    /**\n     * adds event listeners for the tooltip and its anchor\n     * TODO combine some of the listeners like focus and mouseenter, etc.\n     * @private\n     */\n  }
, {
\n    key: \"_events\",\n    value: function _events() {
\n      var _this = this;
\n      var hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined';
\n      var isFocus = false;
\n\n      // `disableForTouch: Fully disable the tooltip on touch devices\n      if (hasTouch && this.options.disableForTouch) return;
\n      if (!this.options.disableHover) {
\n        this.$element.on('mouseenter.zf.tooltip', function () {
\n          if (!_this.isActive) {
\n            _this.timeout = setTimeout(function () {
\n              _this.show();
\n            }
, _this.options.hoverDelay);
\n          }
\n        }
).on('mouseleave.zf.tooltip', (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.ignoreMousedisappear)(function () {
\n          clearTimeout(_this.timeout);
\n          if (!isFocus || _this.isClick && !_this.options.clickOpen) {
\n            _this.hide();
\n          }
\n        }
));
\n      }
\n      if (hasTouch) {
\n        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function () {
\n          _this.isActive ? _this.hide() : _this.show();
\n        }
);
\n      }
\n      if (this.options.clickOpen) {
\n        this.$element.on('mousedown.zf.tooltip', function () {
\n          if (_this.isClick) {
\n            //_this.hide();
\n            // _this.isClick = false;
\n          }
 else {
\n            _this.isClick = true;
\n            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
\n              _this.show();
\n            }
\n          }
\n        }
);
\n      }
 else {
\n        this.$element.on('mousedown.zf.tooltip', function () {
\n          _this.isClick = true;
\n        }
);
\n      }
\n      this.$element.on({
\n        // 'toggle.zf.trigger': this.toggle.bind(this),\n        // 'close.zf.trigger': this.hide.bind(this)\n        'close.zf.trigger': this.hide.bind(this)\n      }
);
\n      this.$element.on('focus.zf.tooltip', function () {
\n        isFocus = true;
\n        if (_this.isClick) {
\n          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't\n          // a real focus, otherwise on hover and come back we get bad behavior\n          if (!_this.options.clickOpen) {
\n            isFocus = false;
\n          }
\n          return false;
\n        }
 else {
\n          _this.show();
\n        }
\n      }
).on('focusout.zf.tooltip', function () {
\n        isFocus = false;
\n        _this.isClick = false;
\n        _this.hide();
\n      }
).on('resizeme.zf.trigger', function () {
\n        if (_this.isActive) {
\n          _this._setPosition();
\n        }
\n      }
);
\n    }
\n\n    /**\n     * adds a toggle method, in addition to the static show() & hide() functions\n     * @function\n     */\n  }
, {
\n    key: \"toggle\",\n    value: function toggle() {
\n      if (this.isActive) {
\n        this.hide();
\n      }
 else {
\n        this.show();
\n      }
\n    }
\n\n    /**\n     * Destroys an instance of tooltip, removes template element from the view.\n     * @function\n     */\n  }
, {
\n    key: \"_destroy\",\n    value: function _destroy() {
\n      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
\n      this.template.remove();
\n    }
\n  }
]);
\n  return Tooltip;
\n}
(_foundation_positionable__WEBPACK_IMPORTED_MODULE_4__.Positionable);
\nTooltip.defaults = {
\n  /**\n   * Time, in ms, before a tooltip should open on hover.\n   * @option\n   * @type {
number}
\n   * @default 200\n   */\n  hoverDelay: 200,\n  /**\n   * Time, in ms, a tooltip should take to fade into view.\n   * @option\n   * @type {
number}
\n   * @default 150\n   */\n  fadeInDuration: 150,\n  /**\n   * Time, in ms, a tooltip should take to fade out of view.\n   * @option\n   * @type {
number}
\n   * @default 150\n   */\n  fadeOutDuration: 150,\n  /**\n   * Disables hover events from opening the tooltip if set to true\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  disableHover: false,\n  /**\n   * Disable the tooltip for touch devices.\n   * This can be useful to make elements with a tooltip on it trigger their\n   * action on the first tap instead of displaying the tooltip.\n   * @option\n   * @type {
booelan}
\n   * @default false\n   */\n  disableForTouch: false,\n  /**\n   * Optional addtional classes to apply to the tooltip template on init.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  templateClasses: '',\n  /**\n   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.\n   * @option\n   * @type {
string}
\n   * @default 'tooltip'\n   */\n  tooltipClass: 'tooltip',\n  /**\n   * Class applied to the tooltip anchor element.\n   * @option\n   * @type {
string}
\n   * @default 'has-tip'\n   */\n  triggerClass: 'has-tip',\n  /**\n   * Minimum breakpoint size at which to open the tooltip.\n   * @option\n   * @type {
string}
\n   * @default 'small'\n   */\n  showOn: 'small',\n  /**\n   * Custom template to be used to generate markup for tooltip.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  template: '',\n  /**\n   * Text displayed in the tooltip template on open.\n   * @option\n   * @type {
string}
\n   * @default ''\n   */\n  tipText: '',\n  touchCloseText: 'Tap to close.',\n  /**\n   * Allows the tooltip to remain open if triggered with a click or touch event.\n   * @option\n   * @type {
boolean}
\n   * @default true\n   */\n  clickOpen: true,\n  /**\n   * Position of tooltip. Can be left, right, bottom, top, or auto.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  position: 'auto',\n  /**\n   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.\n   * @option\n   * @type {
string}
\n   * @default 'auto'\n   */\n  alignment: 'auto',\n  /**\n   * Allow overlap of container/window. If false, tooltip will first try to\n   * position as defined by data-position and data-alignment, but reposition if\n   * it would cause an overflow.  @option\n   * @type {
boolean}
\n   * @default false\n   */\n  allowOverlap: false,\n  /**\n   * Allow overlap of only the bottom of the container. This is the most common\n   * behavior for dropdowns, allowing the dropdown to extend the bottom of the\n   * screen but not otherwise influence or break out of the container.\n   * Less common for tooltips.\n   * @option\n   * @type {
boolean}
\n   * @default false\n   */\n  allowBottomOverlap: false,\n  /**\n   * Distance, in pixels, the template should push away from the anchor on the Y axis.\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  vOffset: 0,\n  /**\n   * Distance, in pixels, the template should push away from the anchor on the X axis\n   * @option\n   * @type {
number}
\n   * @default 0\n   */\n  hOffset: 0,\n  /**\n   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip\n   * @option\n   * @type {
number}
\n   * @default 14\n   */\n  tooltipHeight: 14,\n  /**\n   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip\n   * @option\n   * @type {
number}
\n   * @default 12\n   */\n  tooltipWidth: 12,\n  /**\n  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,\n  * allowing HTML may open yourself up to XSS attacks.\n  * @option\n  * @type {
boolean}
\n  * @default false\n  */\n  allowHtml: false\n}
;
\n\n/**\n * TODO utilize resize event trigger\n */\n\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.tooltip.js?");


/***/ }
),

/***/ "./js/foundation.util.box.js":
/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Box: function() {
 return /* binding */ Box;
 }
\n/* harmony export */ }
);
\nvar Box = {
\n  ImNotTouchingYou: ImNotTouchingYou,\n  OverlapArea: OverlapArea,\n  GetDimensions: GetDimensions,\n  GetExplicitOffsets: GetExplicitOffsets\n}
;
\n\n/**\n * Compares the dimensions of an element to a container and determines collision events with container.\n * @function\n * @param {
jQuery}
 element - jQuery object to test for collisions.\n * @param {
jQuery}
 parent - jQuery object to use as bounding container.\n * @param {
Boolean}
 lrOnly - set to true to check left and right values only.\n * @param {
Boolean}
 tbOnly - set to true to check top and bottom values only.\n * @default if no parent object passed, detects collisions with `window`.\n * @returns {
Boolean}
 - true if collision free, false if a collision in any direction.\n */\nfunction ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
\n  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
\n}
\nfunction OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
\n  var eleDims = GetDimensions(element),\n    topOver,\n    bottomOver,\n    leftOver,\n    rightOver;
\n  if (parent) {
\n    var parDims = GetDimensions(parent);
\n    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
\n    topOver = eleDims.offset.top - parDims.offset.top;
\n    leftOver = eleDims.offset.left - parDims.offset.left;
\n    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
\n  }
 else {
\n    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
\n    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
\n    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
\n    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
\n  }
\n  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
\n  topOver = Math.min(topOver, 0);
\n  leftOver = Math.min(leftOver, 0);
\n  rightOver = Math.min(rightOver, 0);
\n  if (lrOnly) {
\n    return leftOver + rightOver;
\n  }
\n  if (tbOnly) {
\n    return topOver + bottomOver;
\n  }
\n\n  // use sum of squares b/c we care about overlap area.\n  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
\n}
\n\n/**\n * Uses native methods to return an object of dimension values.\n * @function\n * @param {
jQuery || HTML}
 element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.\n * @returns {
Object}
 - nested object of integer pixel values\n * TODO - if element is window, return only those values.\n */\nfunction GetDimensions(elem) {
\n  elem = elem.length ? elem[0] : elem;
\n  if (elem === window || elem === document) {
\n    throw new Error(\"I'm sorry, Dave. I'm afraid I can't do that.\");
\n  }
\n  var rect = elem.getBoundingClientRect(),\n    parRect = elem.parentNode.getBoundingClientRect(),\n    winRect = document.body.getBoundingClientRect(),\n    winY = window.pageYOffset,\n    winX = window.pageXOffset;
\n  return {
\n    width: rect.width,\n    height: rect.height,\n    offset: {
\n      top: rect.top + winY,\n      left: rect.left + winX\n    }
,\n    parentDims: {
\n      width: parRect.width,\n      height: parRect.height,\n      offset: {
\n        top: parRect.top + winY,\n        left: parRect.left + winX\n      }
\n    }
,\n    windowDims: {
\n      width: winRect.width,\n      height: winRect.height,\n      offset: {
\n        top: winY,\n        left: winX\n      }
\n    }
\n  }
;
\n}
\n\n/**\n * Returns an object of top and left integer pixel values for dynamically rendered elements,\n * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where\n * you don't know alignment, but generally from\n * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.\n * @function\n * @param {
jQuery}
 element - jQuery object for the element being positioned.\n * @param {
jQuery}
 anchor - jQuery object for the element's anchor point.\n * @param {
String}
 position - a string relating to the desired position of the element, relative to it's anchor\n * @param {
Number}
 vOffset - integer pixel value of desired vertical separation between anchor and element.\n * @param {
Number}
 hOffset - integer pixel value of desired horizontal separation between anchor and element.\n * @param {
Boolean}
 isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.\n * TODO alter/rewrite to work with `em` values as well/instead of pixels\n */\nfunction GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
\n  var $eleDims = GetDimensions(element),\n    $anchorDims = anchor ? GetDimensions(anchor) : null;
\n  var topVal, leftVal;
\n  if ($anchorDims !== null) {
\n    // set position related attribute\n    switch (position) {
\n      case 'top':\n        topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
\n        break;
\n      case 'bottom':\n        topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
\n        break;
\n      case 'left':\n        leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
\n        break;
\n      case 'right':\n        leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
\n        break;
\n    }
\n\n    // set alignment related attribute\n    switch (position) {
\n      case 'top':\n      case 'bottom':\n        switch (alignment) {
\n          case 'left':\n            leftVal = $anchorDims.offset.left + hOffset;
\n            break;
\n          case 'right':\n            leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
\n            break;
\n          case 'center':\n            leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
\n            break;
\n        }
\n        break;
\n      case 'right':\n      case 'left':\n        switch (alignment) {
\n          case 'bottom':\n            topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
\n            break;
\n          case 'top':\n            topVal = $anchorDims.offset.top + vOffset;
\n            break;
\n          case 'center':\n            topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
\n            break;
\n        }
\n        break;
\n    }
\n  }
\n  return {
\n    top: topVal,\n    left: leftVal\n  }
;
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.box.js?");


/***/ }
),

/***/ "./js/foundation.util.imageLoader.js":
/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   onImagesLoaded: function() {
 return /* binding */ onImagesLoaded;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n\n\n/**\n * Runs a callback function when images are fully loaded.\n * @param {
Object}
 images - Image(s) to check if loaded.\n * @param {
Func}
 callback - Function to execute when image is fully loaded.\n */\nfunction onImagesLoaded(images, callback) {
\n  var unloaded = images.length;
\n  if (unloaded === 0) {
\n    callback();
\n  }
\n  images.each(function () {
\n    // Check if image is loaded\n    if (this.complete && typeof this.naturalWidth !== 'undefined') {
\n      singleImageLoaded();
\n    }
 else {
\n      // If the above check failed, simulate loading on detached element.\n      var image = new Image();
\n      // Still count image as loaded if it finalizes with an error.\n      var events = \"load.zf.images error.zf.images\";
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(image).one(events, function me() {
\n        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).off(events, me);
\n        singleImageLoaded();
\n      }
);
\n      image.src = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('src');
\n    }
\n  }
);
\n  function singleImageLoaded() {
\n    unloaded--;
\n    if (unloaded === 0) {
\n      callback();
\n    }
\n  }
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.imageLoader.js?");


/***/ }
),

/***/ "./js/foundation.util.keyboard.js":
/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Keyboard: function() {
 return /* binding */ Keyboard;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/*******************************************\n *                                         *\n * This util was created by Marius Olbertz *\n * Please thank Marius on GitHub /owlbertz *\n * or the web http://www.mariusolbertz.de/ *\n *                                         *\n ******************************************/\n\n\n\nvar keyCodes = {
\n  9: 'TAB',\n  13: 'ENTER',\n  27: 'ESCAPE',\n  32: 'SPACE',\n  35: 'END',\n  36: 'HOME',\n  37: 'ARROW_LEFT',\n  38: 'ARROW_UP',\n  39: 'ARROW_RIGHT',\n  40: 'ARROW_DOWN'\n}
;
\nvar commands = {
}
;
\n\n// Functions pulled out to be referenceable from internals\nfunction findFocusable($element) {
\n  if (!$element) {
\n    return false;
\n  }
\n  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
\n    if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is(':visible') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('tabindex') < 0) {
\n      return false;
\n    }
 //only have visible elements and those that have a tabindex greater or equal 0\n    return true;
\n  }
).sort(function (a, b) {
\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex') === jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex')) {
\n      return 0;
\n    }
\n    var aTabIndex = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex'), 10),\n      bTabIndex = parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex'), 10);
\n    // Undefined is treated the same as 0\n    if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(a).attr('tabindex') === 'undefined' && bTabIndex > 0) {
\n      return 1;
\n    }
\n    if (typeof jquery__WEBPACK_IMPORTED_MODULE_0___default()(b).attr('tabindex') === 'undefined' && aTabIndex > 0) {
\n      return -1;
\n    }
\n    if (aTabIndex === 0 && bTabIndex > 0) {
\n      return 1;
\n    }
\n    if (bTabIndex === 0 && aTabIndex > 0) {
\n      return -1;
\n    }
\n    if (aTabIndex < bTabIndex) {
\n      return -1;
\n    }
\n    if (aTabIndex > bTabIndex) {
\n      return 1;
\n    }
\n  }
);
\n}
\nfunction parseKey(event) {
\n  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
\n\n  // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events\n  key = key.replace(/\\W+/, '');
\n  if (event.shiftKey) key = \"SHIFT_\".concat(key);
\n  if (event.ctrlKey) key = \"CTRL_\".concat(key);
\n  if (event.altKey) key = \"ALT_\".concat(key);
\n\n  // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)\n  key = key.replace(/_$/, '');
\n  return key;
\n}
\nvar Keyboard = {
\n  keys: getKeyCodes(keyCodes),\n  /**\n   * Parses the (keyboard) event and returns a String that represents its key\n   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE\n   * @param {
Event}
 event - the event generated by the event handler\n   * @return String key - String that represents the key pressed\n   */\n  parseKey: parseKey,\n  /**\n   * Handles the given (keyboard) event\n   * @param {
Event}
 event - the event generated by the event handler\n   * @param {
String}
 component - Foundation component's name, e.g. Slider or Reveal\n   * @param {
Objects}
 functions - collection of functions that are to be executed\n   */\n  handleKey: function handleKey(event, component, functions) {
\n    var commandList = commands[component],\n      keyCode = this.parseKey(event),\n      cmds,\n      command,\n      fn;
\n    if (!commandList) return console.warn('Component not defined!');
\n\n    // Ignore the event if it was already handled\n    if (event.zfIsKeyHandled === true) return;
\n\n    // This component does not differentiate between ltr and rtl\n    if (typeof commandList.ltr === 'undefined') {
\n      cmds = commandList;
 // use plain list\n    }
 else {
\n      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa\n      if ((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.rtl)()) cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, commandList.ltr, commandList.rtl);
else cmds = jquery__WEBPACK_IMPORTED_MODULE_0___default().extend({
}
, commandList.rtl, commandList.ltr);
\n    }
\n    command = cmds[keyCode];
\n    fn = functions[command];
\n    // Execute the handler if found\n    if (fn && typeof fn === 'function') {
\n      var returnValue = fn.apply();
\n\n      // Mark the event as \"handled\" to prevent future handlings\n      event.zfIsKeyHandled = true;
\n\n      // Execute function when event was handled\n      if (functions.handled || typeof functions.handled === 'function') {
\n        functions.handled(returnValue);
\n      }
\n    }
 else {
\n      // Execute function when event was not handled\n      if (functions.unhandled || typeof functions.unhandled === 'function') {
\n        functions.unhandled();
\n      }
\n    }
\n  }
,\n  /**\n   * Finds all focusable elements within the given `$element`\n   * @param {
jQuery}
 $element - jQuery object to search within\n   * @return {
jQuery}
 $focusable - all focusable elements within `$element`\n   */\n\n  findFocusable: findFocusable,\n  /**\n   * Returns the component name name\n   * @param {
Object}
 component - Foundation component, e.g. Slider or Reveal\n   * @return String componentName\n   */\n  register: function register(componentName, cmds) {
\n    commands[componentName] = cmds;
\n  }
,\n  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?\n  //\n  /**\n   * Traps the focus in the given element.\n   * @param  {
jQuery}
 $element  jQuery object to trap the foucs into.\n   */\n  trapFocus: function trapFocus($element) {
\n    var $focusable = findFocusable($element),\n      $firstFocusable = $focusable.eq(0),\n      $lastFocusable = $focusable.eq(-1);
\n    $element.on('keydown.zf.trapfocus', function (event) {
\n      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
\n        event.preventDefault();
\n        $firstFocusable.focus();
\n      }
 else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
\n        event.preventDefault();
\n        $lastFocusable.focus();
\n      }
\n    }
);
\n  }
,\n  /**\n   * Releases the trapped focus from the given element.\n   * @param  {
jQuery}
 $element  jQuery object to release the focus for.\n   */\n  releaseFocus: function releaseFocus($element) {
\n    $element.off('keydown.zf.trapfocus');
\n  }
\n}
;
\n\n/*\n * Constants for easier comparing.\n * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE\n */\nfunction getKeyCodes(kcs) {
\n  var k = {
}
;
\n  for (var kc in kcs) {
\n    if (kcs.hasOwnProperty(kc)) k[kcs[kc]] = kcs[kc];
\n  }
\n  return k;
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.keyboard.js?");


/***/ }
),

/***/ "./js/foundation.util.mediaQuery.js":
/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   MediaQuery: function() {
 return /* binding */ MediaQuery;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _slicedToArray(arr, i) {
 return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
 }
\nfunction _nonIterableRest() {
 throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");
 }
\nfunction _unsupportedIterableToArray(o, minLen) {
 if (!o) return;
 if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);
 var n = Object.prototype.toString.call(o).slice(8, -1);
 if (n === \"Object\" && o.constructor) n = o.constructor.name;
 if (n === \"Map\" || n === \"Set\") return Array.from(o);
 if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
 }
\nfunction _arrayLikeToArray(arr, len) {
 if (len == null || len > arr.length) len = arr.length;
 for (var i = 0, arr2 = new Array(len);
 i < len;
 i++) arr2[i] = arr[i];
 return arr2;
 }
\nfunction _iterableToArrayLimit(arr, i) {
 var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"];
 if (null != _i) {
 var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
 try {
 if (_x = (_i = _i.call(arr)).next, 0 === i) {
 if (Object(_i) !== _i) return;
 _n = !1;
 }
 else for (;
 !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
 _n = !0);
 }
 catch (err) {
 _d = !0, _e = err;
 }
 finally {
 try {
 if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
 }
 finally {
 if (_d) throw _e;
 }
 }
 return _arr;
 }
 }
\nfunction _arrayWithHoles(arr) {
 if (Array.isArray(arr)) return arr;
 }
\n\n\n// Default set of media queries\n// const defaultQueries = {
\n//   'default' : 'only screen',\n//   landscape : 'only screen and (orientation: landscape)',\n//   portrait : 'only screen and (orientation: portrait)',\n//   retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +\n//     'only screen and (min--moz-device-pixel-ratio: 2),' +\n//     'only screen and (-o-min-device-pixel-ratio: 2/1),' +\n//     'only screen and (min-device-pixel-ratio: 2),' +\n//     'only screen and (min-resolution: 192dpi),' +\n//     'only screen and (min-resolution: 2dppx)'\n//   }
;
\n\n// matchMedia() polyfill - Test a CSS media type/query in JS.\n// Authors & copyright © 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license\n/* eslint-disable */\nwindow.matchMedia || (window.matchMedia = function () {
\n  \"use strict\";
\n\n  // For browsers that support matchMedium api such as IE 9 and webkit\n  var styleMedia = window.styleMedia || window.media;
\n\n  // For those that don't support matchMedium\n  if (!styleMedia) {
\n    var style = document.createElement('style'),\n      script = document.getElementsByTagName('script')[0],\n      info = null;
\n    style.type = 'text/css';
\n    style.id = 'matchmediajs-test';
\n    if (!script) {
\n      document.head.appendChild(style);
\n    }
 else {
\n      script.parentNode.insertBefore(style, script);
\n    }
\n\n    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers\n    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
\n    styleMedia = {
\n      matchMedium: function matchMedium(media) {
\n        var text = '@media ' + media + '{
 #matchmediajs-test {
 width: 1px;
 }
 }
';
\n\n        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers\n        if (style.styleSheet) {
\n          style.styleSheet.cssText = text;
\n        }
 else {
\n          style.textContent = text;
\n        }
\n\n        // Test if media query is true or false\n        return info.width === '1px';
\n      }
\n    }
;
\n  }
\n  return function (media) {
\n    return {
\n      matches: styleMedia.matchMedium(media || 'all'),\n      media: media || 'all'\n    }
;
\n  }
;
\n}
());
\n/* eslint-enable */\n\nvar MediaQuery = {
\n  queries: [],\n  current: '',\n  /**\n   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.\n   * @function\n   * @private\n   */\n  _init: function _init() {
\n    // make sure the initialization is only done once when calling _init() several times\n    if (this.isInitialized === true) {
\n      return this;
\n    }
 else {
\n      this.isInitialized = true;
\n    }
\n    var self = this;
\n    var $meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('meta.foundation-mq');
\n    if (!$meta.length) {
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('<meta class=\"foundation-mq\" name=\"foundation-mq\" content>').appendTo(document.head);
\n    }
\n    var extractedStyles = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.foundation-mq').css('font-family');
\n    var namedQueries;
\n    namedQueries = parseStyleToObject(extractedStyles);
\n    self.queries = [];
 // reset\n\n    for (var key in namedQueries) {
\n      if (namedQueries.hasOwnProperty(key)) {
\n        self.queries.push({
\n          name: key,\n          value: \"only screen and (min-width: \".concat(namedQueries[key], \")\")\n        }
);
\n      }
\n    }
\n    this.current = this._getCurrentSize();
\n    this._watcher();
\n  }
,\n  /**\n   * Reinitializes the media query helper.\n   * Useful if your CSS breakpoint configuration has just been loaded or has changed since the initialization.\n   * @function\n   * @private\n   */\n  _reInit: function _reInit() {
\n    this.isInitialized = false;
\n    this._init();
\n  }
,\n  /**\n   * Checks if the screen is at least as wide as a breakpoint.\n   * @function\n   * @param {
String}
 size - Name of the breakpoint to check.\n   * @returns {
Boolean}
 `true` if the breakpoint matches, `false` if it's smaller.\n   */\n  atLeast: function atLeast(size) {
\n    var query = this.get(size);
\n    if (query) {
\n      return window.matchMedia(query).matches;
\n    }
\n    return false;
\n  }
,\n  /**\n   * Checks if the screen is within the given breakpoint.\n   * If smaller than the breakpoint of larger than its upper limit it returns false.\n   * @function\n   * @param {
String}
 size - Name of the breakpoint to check.\n   * @returns {
Boolean}
 `true` if the breakpoint matches, `false` otherwise.\n   */\n  only: function only(size) {
\n    return size === this._getCurrentSize();
\n  }
,\n  /**\n   * Checks if the screen is within a breakpoint or smaller.\n   * @function\n   * @param {
String}
 size - Name of the breakpoint to check.\n   * @returns {
Boolean}
 `true` if the breakpoint matches, `false` if it's larger.\n   */\n  upTo: function upTo(size) {
\n    var nextSize = this.next(size);
\n\n    // If the next breakpoint does not match, the screen is smaller than\n    // the upper limit of this breakpoint.\n    if (nextSize) {
\n      return !this.atLeast(nextSize);
\n    }
\n\n    // If there is no next breakpoint, the \"size\" breakpoint does not have\n    // an upper limit and the screen will always be within it or smaller.\n    return true;
\n  }
,\n  /**\n   * Checks if the screen matches to a breakpoint.\n   * @function\n   * @param {
String}
 size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.\n   * @returns {
Boolean}
 `true` if the breakpoint matches, `false` if it does not.\n   */\n  is: function is(size) {
\n    var parts = size.trim().split(' ').filter(function (p) {
\n      return !!p.length;
\n    }
);
\n    var _parts = _slicedToArray(parts, 2),\n      bpSize = _parts[0],\n      _parts$ = _parts[1],\n      bpModifier = _parts$ === void 0 ? '' : _parts$;
\n\n    // Only the breakpont\n    if (bpModifier === 'only') {
\n      return this.only(bpSize);
\n    }
\n    // At least the breakpoint (included)\n    if (!bpModifier || bpModifier === 'up') {
\n      return this.atLeast(bpSize);
\n    }
\n    // Up to the breakpoint (included)\n    if (bpModifier === 'down') {
\n      return this.upTo(bpSize);
\n    }
\n    throw new Error(\"\\n      Invalid breakpoint passed to MediaQuery.is().\\n      Expected a breakpoint name formatted like \\\"<size> <modifier>\\\", got \\\"\".concat(size, \"\\\".\\n    \"));
\n  }
,\n  /**\n   * Gets the media query of a breakpoint.\n   * @function\n   * @param {
String}
 size - Name of the breakpoint to get.\n   * @returns {
String|null}
 - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.\n   */\n  get: function get(size) {
\n    for (var i in this.queries) {
\n      if (this.queries.hasOwnProperty(i)) {
\n        var query = this.queries[i];
\n        if (size === query.name) return query.value;
\n      }
\n    }
\n    return null;
\n  }
,\n  /**\n   * Get the breakpoint following the given breakpoint.\n   * @function\n   * @param {
String}
 size - Name of the breakpoint.\n   * @returns {
String|null}
 - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.\n   */\n  next: function next(size) {
\n    var _this = this;
\n    var queryIndex = this.queries.findIndex(function (q) {
\n      return _this._getQueryName(q) === size;
\n    }
);
\n    if (queryIndex === -1) {
\n      throw new Error(\"\\n        Unknown breakpoint \\\"\".concat(size, \"\\\" passed to MediaQuery.next().\\n        Ensure it is present in your Sass \\\"$breakpoints\\\" setting.\\n      \"));
\n    }
\n    var nextQuery = this.queries[queryIndex + 1];
\n    return nextQuery ? nextQuery.name : null;
\n  }
,\n  /**\n   * Returns the name of the breakpoint related to the given value.\n   * @function\n   * @private\n   * @param {
String|Object}
 value - Breakpoint name or query object.\n   * @returns {
String}
 Name of the breakpoint.\n   */\n  _getQueryName: function _getQueryName(value) {
\n    if (typeof value === 'string') return value;
\n    if (_typeof(value) === 'object') return value.name;
\n    throw new TypeError(\"\\n      Invalid value passed to MediaQuery._getQueryName().\\n      Expected a breakpoint name (String) or a breakpoint query (Object), got \\\"\".concat(value, \"\\\" (\").concat(_typeof(value), \")\\n    \"));
\n  }
,\n  /**\n   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).\n   * @function\n   * @private\n   * @returns {
String}
 Name of the current breakpoint.\n   */\n  _getCurrentSize: function _getCurrentSize() {
\n    var matched;
\n    for (var i = 0;
 i < this.queries.length;
 i++) {
\n      var query = this.queries[i];
\n      if (window.matchMedia(query.value).matches) {
\n        matched = query;
\n      }
\n    }
\n    return matched && this._getQueryName(matched);
\n  }
,\n  /**\n   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.\n   * @function\n   * @private\n   */\n  _watcher: function _watcher() {
\n    var _this2 = this;
\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize.zf.trigger', function () {
\n      var newSize = _this2._getCurrentSize(),\n        currentSize = _this2.current;
\n      if (newSize !== currentSize) {
\n        // Change the current media query\n        _this2.current = newSize;
\n\n        // Broadcast the media query change on the window\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
\n      }
\n    }
);
\n  }
\n}
;
\n\n// Thank you: https://github.com/sindresorhus/query-string\nfunction parseStyleToObject(str) {
\n  var styleObject = {
}
;
\n  if (typeof str !== 'string') {
\n    return styleObject;
\n  }
\n  str = str.trim().slice(1, -1);
 // browsers re-quote string style values\n\n  if (!str) {
\n    return styleObject;
\n  }
\n  styleObject = str.split('&').reduce(function (ret, param) {
\n    var parts = param.replace(/\\+/g, ' ').split('=');
\n    var key = parts[0];
\n    var val = parts[1];
\n    key = decodeURIComponent(key);
\n\n    // missing `=` should be `null`:\n    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n    val = typeof val === 'undefined' ? null : decodeURIComponent(val);
\n    if (!ret.hasOwnProperty(key)) {
\n      ret[key] = val;
\n    }
 else if (Array.isArray(ret[key])) {
\n      ret[key].push(val);
\n    }
 else {
\n      ret[key] = [ret[key], val];
\n    }
\n    return ret;
\n  }
, {
}
);
\n  return styleObject;
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.mediaQuery.js?");


/***/ }
),

/***/ "./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Motion: function() {
 return /* binding */ Motion;
 }
,\n/* harmony export */   Move: function() {
 return /* binding */ Move;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n\n\n\n/**\n * Motion module.\n * @module foundation.motion\n */\n\nvar initClasses = ['mui-enter', 'mui-leave'];
\nvar activeClasses = ['mui-enter-active', 'mui-leave-active'];
\nvar Motion = {
\n  animateIn: function animateIn(element, animation, cb) {
\n    animate(true, element, animation, cb);
\n  }
,\n  animateOut: function animateOut(element, animation, cb) {
\n    animate(false, element, animation, cb);
\n  }
\n}
;
\nfunction Move(duration, elem, fn) {
\n  var anim,\n    prog,\n    start = null;
\n  if (duration === 0) {
\n    fn.apply(elem);
\n    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
\n    return;
\n  }
\n  function move(ts) {
\n    if (!start) start = ts;
\n    prog = ts - start;
\n    fn.apply(elem);
\n    if (prog < duration) {
\n      anim = window.requestAnimationFrame(move, elem);
\n    }
 else {
\n      window.cancelAnimationFrame(anim);
\n      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
\n    }
\n  }
\n  anim = window.requestAnimationFrame(move);
\n}
\n\n/**\n * Animates an element in or out using a CSS transition class.\n * @function\n * @private\n * @param {
Boolean}
 isIn - Defines if the animation is in or out.\n * @param {
Object}
 element - jQuery or HTML object to animate.\n * @param {
String}
 animation - CSS class to use.\n * @param {
Function}
 cb - Callback to run when animation is finished.\n */\nfunction animate(isIn, element, animation, cb) {
\n  element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).eq(0);
\n  if (!element.length) return;
\n  var initClass = isIn ? initClasses[0] : initClasses[1];
\n  var activeClass = isIn ? activeClasses[0] : activeClasses[1];
\n\n  // Set up the animation\n  reset();
\n  element.addClass(animation).css('transition', 'none');
\n  requestAnimationFrame(function () {
\n    element.addClass(initClass);
\n    if (isIn) element.show();
\n  }
);
\n\n  // Start the animation\n  requestAnimationFrame(function () {
\n    // will trigger the browser to synchronously calculate the style and layout\n    // also called reflow or layout thrashing\n    // see https://gist.github.com/paulirish/5d52fb081b3570c81e3a\n    element[0].offsetWidth;
\n    element.css('transition', '').addClass(activeClass);
\n  }
);
\n\n  // Clean up the animation when it finishes\n  element.one((0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.transitionend)(element), finish);
\n\n  // Hides the element (for out animations), resets the element, and runs a callback\n  function finish() {
\n    if (!isIn) element.hide();
\n    reset();
\n    if (cb) cb.apply(element);
\n  }
\n\n  // Resets transitions and removes motion-specific classes\n  function reset() {
\n    element[0].style.transitionDuration = 0;
\n    element.removeClass(\"\".concat(initClass, \" \").concat(activeClass, \" \").concat(animation));
\n  }
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.motion.js?");


/***/ }
),

/***/ "./js/foundation.util.nest.js":
/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Nest: function() {
 return /* binding */ Nest;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n\nvar Nest = {
\n  Feather: function Feather(menu) {
\n    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
\n    menu.attr('role', 'menubar');
\n    menu.find('a').attr({
\n      'role': 'menuitem'\n    }
);
\n    var items = menu.find('li').attr({
\n        'role': 'none'\n      }
),\n      subMenuClass = \"is-\".concat(type, \"-submenu\"),\n      subItemClass = \"\".concat(subMenuClass, \"-item\"),\n      hasSubClass = \"is-\".concat(type, \"-submenu-parent\"),\n      applyAria = type !== 'accordion';
 // Accordions handle their own ARIA attriutes.\n\n    items.each(function () {
\n      var $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),\n        $sub = $item.children('ul');
\n      if ($sub.length) {
\n        $item.addClass(hasSubClass);
\n        if (applyAria) {
\n          var firstItem = $item.children('a:first');
\n          firstItem.attr({
\n            'aria-haspopup': true,\n            'aria-label': firstItem.attr('aria-label') || firstItem.text()\n          }
);
\n          // Note:  Drilldowns behave differently in how they hide, and so need\n          // additional attributes.  We should look if this possibly over-generalized\n          // utility (Nest) is appropriate when we rework menus in 6.4\n          if (type === 'drilldown') {
\n            $item.attr({
\n              'aria-expanded': false\n            }
);
\n          }
\n        }
\n        $sub.addClass(\"submenu \".concat(subMenuClass)).attr({
\n          'data-submenu': '',\n          'role': 'menubar'\n        }
);
\n        if (type === 'drilldown') {
\n          $sub.attr({
\n            'aria-hidden': true\n          }
);
\n        }
\n      }
\n      if ($item.parent('[data-submenu]').length) {
\n        $item.addClass(\"is-submenu-item \".concat(subItemClass));
\n      }
\n    }
);
\n    return;
\n  }
,\n  Burn: function Burn(menu, type) {
\n    var\n      //items = menu.find('li'),\n      subMenuClass = \"is-\".concat(type, \"-submenu\"),\n      subItemClass = \"\".concat(subMenuClass, \"-item\"),\n      hasSubClass = \"is-\".concat(type, \"-submenu-parent\");
\n    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass(\"\".concat(subMenuClass, \" \").concat(subItemClass, \" \").concat(hasSubClass, \" is-submenu-item submenu is-active\")).removeAttr('data-submenu').css('display', '');
\n  }
\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.nest.js?");


/***/ }
),

/***/ "./js/foundation.util.timer.js":
/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Timer: function() {
 return /* binding */ Timer;
 }
\n/* harmony export */ }
);
\nfunction Timer(elem, options, cb) {
\n  var _this = this,\n    duration = options.duration,\n    //options is an object for easily adding features later.\n    nameSpace = Object.keys(elem.data())[0] || 'timer',\n    remain = -1,\n    start,\n    timer;
\n  this.isPaused = false;
\n  this.restart = function () {
\n    remain = -1;
\n    clearTimeout(timer);
\n    this.start();
\n  }
;
\n  this.start = function () {
\n    this.isPaused = false;
\n    // if(!elem.data('paused')){
 return false;
 }
//maybe implement this sanity check if used for other things.\n    clearTimeout(timer);
\n    remain = remain <= 0 ? duration : remain;
\n    elem.data('paused', false);
\n    start = Date.now();
\n    timer = setTimeout(function () {
\n      if (options.infinite) {
\n        _this.restart();
 //rerun the timer.\n      }
\n\n      if (cb && typeof cb === 'function') {
\n        cb();
\n      }
\n    }
, remain);
\n    elem.trigger(\"timerstart.zf.\".concat(nameSpace));
\n  }
;
\n  this.pause = function () {
\n    this.isPaused = true;
\n    //if(elem.data('paused')){
 return false;
 }
//maybe implement this sanity check if used for other things.\n    clearTimeout(timer);
\n    elem.data('paused', true);
\n    var end = Date.now();
\n    remain = remain - (end - start);
\n    elem.trigger(\"timerpaused.zf.\".concat(nameSpace));
\n  }
;
\n}
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.timer.js?");


/***/ }
),

/***/ "./js/foundation.util.touch.js":
/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Touch: function() {
 return /* binding */ Touch;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\nfunction _classCallCheck(instance, Constructor) {
 if (!(instance instanceof Constructor)) {
 throw new TypeError(\"Cannot call a class as a function\");
 }
 }
\nfunction _defineProperties(target, props) {
 for (var i = 0;
 i < props.length;
 i++) {
 var descriptor = props[i];
 descriptor.enumerable = descriptor.enumerable || false;
 descriptor.configurable = true;
 if (\"value\" in descriptor) descriptor.writable = true;
 Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
 }
 }
\nfunction _createClass(Constructor, protoProps, staticProps) {
 if (protoProps) _defineProperties(Constructor.prototype, protoProps);
 if (staticProps) _defineProperties(Constructor, staticProps);
 Object.defineProperty(Constructor, \"prototype\", {
 writable: false }
);
 return Constructor;
 }
\nfunction _toPropertyKey(arg) {
 var key = _toPrimitive(arg, \"string\");
 return _typeof(key) === \"symbol\" ? key : String(key);
 }
\nfunction _toPrimitive(input, hint) {
 if (_typeof(input) !== \"object\" || input === null) return input;
 var prim = input[Symbol.toPrimitive];
 if (prim !== undefined) {
 var res = prim.call(input, hint || \"default\");
 if (_typeof(res) !== \"object\") return res;
 throw new TypeError(\"@@toPrimitive must return a primitive value.\");
 }
 return (hint === \"string\" ? String : Number)(input);
 }
\n//**************************************************\n//**Work inspired by multiple jquery swipe plugins**\n//**Done by Yohai Ararat ***************************\n//**************************************************\n\n\nvar Touch = {
}
;
\nvar startPosX,\n  startTime,\n  elapsedTime,\n  startEvent,\n  isMoving = false,\n  didMoved = false;
\nfunction onTouchEnd(e) {
\n  this.removeEventListener('touchmove', onTouchMove);
\n  this.removeEventListener('touchend', onTouchEnd);
\n\n  // If the touch did not move, consider it as a \"tap\"\n  if (!didMoved) {
\n    var tapEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default().Event('tap', startEvent || e);
\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(tapEvent);
\n  }
\n  startEvent = null;
\n  isMoving = false;
\n  didMoved = false;
\n}
\nfunction onTouchMove(e) {
\n  if (true === (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).preventDefault) {
\n    e.preventDefault();
\n  }
\n  if (isMoving) {
\n    var x = e.touches[0].pageX;
\n    // var y = e.touches[0].pageY;
\n    var dx = startPosX - x;
\n    // var dy = startPosY - y;
\n    var dir;
\n    didMoved = true;
\n    elapsedTime = new Date().getTime() - startTime;
\n    if (Math.abs(dx) >= (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).moveThreshold && elapsedTime <= (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).timeThreshold) {
\n      dir = dx > 0 ? 'left' : 'right';
\n    }
\n    // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
\n    //   dir = dy > 0 ? 'down' : 'up';
\n    // }
\n    if (dir) {
\n      e.preventDefault();
\n      onTouchEnd.apply(this, arguments);
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event('swipe', Object.assign({
}
, e)), dir).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default().Event(\"swipe\".concat(dir), Object.assign({
}
, e)));
\n    }
\n  }
\n}
\nfunction onTouchStart(e) {
\n  if (e.touches.length === 1) {
\n    startPosX = e.touches[0].pageX;
\n    startEvent = e;
\n    isMoving = true;
\n    didMoved = false;
\n    startTime = new Date().getTime();
\n    this.addEventListener('touchmove', onTouchMove, {
\n      passive: true === (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe).preventDefault\n    }
);
\n    this.addEventListener('touchend', onTouchEnd, false);
\n  }
\n}
\nfunction init() {
\n  this.addEventListener && this.addEventListener('touchstart', onTouchStart, {
\n    passive: true\n  }
);
\n}
\n\n// function teardown() {
\n//   this.removeEventListener('touchstart', onTouchStart);
\n// }
\nvar SpotSwipe = /*#__PURE__*/function () {
\n  function SpotSwipe() {
\n    _classCallCheck(this, SpotSwipe);
\n    this.version = '1.0.0';
\n    this.enabled = 'ontouchstart' in document.documentElement;
\n    this.preventDefault = false;
\n    this.moveThreshold = 75;
\n    this.timeThreshold = 200;
\n    this._init();
\n  }
\n  _createClass(SpotSwipe, [{
\n    key: \"_init\",\n    value: function _init() {
\n      (jquery__WEBPACK_IMPORTED_MODULE_0___default().event).special.swipe = {
\n        setup: init\n      }
;
\n      (jquery__WEBPACK_IMPORTED_MODULE_0___default().event).special.tap = {
\n        setup: init\n      }
;
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default().each(['left', 'up', 'down', 'right'], function () {
\n        (jquery__WEBPACK_IMPORTED_MODULE_0___default().event).special[\"swipe\".concat(this)] = {
\n          setup: function setup() {
\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).on('swipe', (jquery__WEBPACK_IMPORTED_MODULE_0___default().noop));
\n          }
\n        }
;
\n      }
);
\n    }
\n  }
]);
\n  return SpotSwipe;
\n}
();
\n/****************************************************\n * As far as I can tell, both setupSpotSwipe and    *\n * setupTouchHandler should be idempotent,          *\n * because they directly replace functions &        *\n * values, and do not add event handlers directly.  *\n ****************************************************/\nTouch.setupSpotSwipe = function () {
\n  (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe) = new SpotSwipe((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n}
;
\n\n/****************************************************\n * Method for adding pseudo drag events to elements *\n ***************************************************/\nTouch.setupTouchHandler = function () {
\n  (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn).addTouch = function () {
\n    this.each(function (i, el) {
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).bind('touchstart touchmove touchend touchcancel', function (event) {
\n        //we pass the original event object because the jQuery event\n        //object is normalized to w3c specs and does not provide the TouchList\n        handleTouch(event);
\n      }
);
\n    }
);
\n    var handleTouch = function handleTouch(event) {
\n      var touches = event.changedTouches,\n        first = touches[0],\n        eventTypes = {
\n          touchstart: 'mousedown',\n          touchmove: 'mousemove',\n          touchend: 'mouseup'\n        }
,\n        type = eventTypes[event.type],\n        simulatedEvent;
\n      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
\n        simulatedEvent = new window.MouseEvent(type, {
\n          'bubbles': true,\n          'cancelable': true,\n          'screenX': first.screenX,\n          'screenY': first.screenY,\n          'clientX': first.clientX,\n          'clientY': first.clientY\n        }
);
\n      }
 else {
\n        simulatedEvent = document.createEvent('MouseEvent');
\n        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);
\n      }
\n      first.target.dispatchEvent(simulatedEvent);
\n    }
;
\n  }
;
\n}
;
\nTouch.init = function () {
\n  if (typeof (jquery__WEBPACK_IMPORTED_MODULE_0___default().spotSwipe) === 'undefined') {
\n    Touch.setupSpotSwipe((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n    Touch.setupTouchHandler((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
\n  }
\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.touch.js?");


/***/ }
),

/***/ "./js/foundation.util.triggers.js":
/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


eval("__webpack_require__.r(__webpack_exports__);
\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {
\n/* harmony export */   Triggers: function() {
 return /* binding */ Triggers;
 }
\n/* harmony export */ }
);
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");
\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
\n/* harmony import */ var _foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation.core.utils */ \"./js/foundation.core.utils.js\");
\n/* harmony import */ var _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation.util.motion */ \"./js/foundation.util.motion.js\");
\nfunction _typeof(obj) {
 \"@babel/helpers - typeof\";
 return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {
 return typeof obj;
 }
 : function (obj) {
 return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;
 }
, _typeof(obj);
 }
\n\n\n\nvar MutationObserver = function () {
\n  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
\n  for (var i = 0;
 i < prefixes.length;
 i++) {
\n    if (\"\".concat(prefixes[i], \"MutationObserver\") in window) {
\n      return window[\"\".concat(prefixes[i], \"MutationObserver\")];
\n    }
\n  }
\n  return false;
\n}
();
\nvar triggers = function triggers(el, type) {
\n  el.data(type).split(' ').forEach(function (id) {
\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler'](\"\".concat(type, \".zf.trigger\"), [el]);
\n  }
);
\n}
;
\nvar Triggers = {
\n  Listeners: {
\n    Basic: {
}
,\n    Global: {
}
\n  }
,\n  Initializers: {
}
\n}
;
\nTriggers.Listeners.Basic = {
\n  openListener: function openListener() {
\n    triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'open');
\n  }
,\n  closeListener: function closeListener() {
\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('close');
\n    if (id) {
\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'close');
\n    }
 else {
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('close.zf.trigger');
\n    }
\n  }
,\n  toggleListener: function toggleListener() {
\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle');
\n    if (id) {
\n      triggers(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
\n    }
 else {
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('toggle.zf.trigger');
\n    }
\n  }
,\n  closeableListener: function closeableListener(e) {
\n    var animation = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('closable');
\n\n    // Only close the first closable element. See https://git.io/zf-7833\n    e.stopPropagation();
\n    if (animation !== '') {
\n      _foundation_util_motion__WEBPACK_IMPORTED_MODULE_2__.Motion.animateOut(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), animation, function () {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('closed.zf');
\n      }
);
\n    }
 else {
\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).fadeOut().trigger('closed.zf');
\n    }
\n  }
,\n  toggleFocusListener: function toggleFocusListener() {
\n    var id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('toggle-focus');
\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#\".concat(id)).triggerHandler('toggle.zf.trigger', [jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)]);
\n  }
\n}
;
\n\n// Elements with [data-open] will reveal a plugin that supports it when clicked.\nTriggers.Initializers.addOpenListener = function ($elem) {
\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
\n  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
\n}
;
\n\n// Elements with [data-close] will close a plugin that supports it when clicked.\n// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.\nTriggers.Initializers.addCloseListener = function ($elem) {
\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
\n  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
\n}
;
\n\n// Elements with [data-toggle] will toggle a plugin that supports it when clicked.\nTriggers.Initializers.addToggleListener = function ($elem) {
\n  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
\n  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
\n}
;
\n\n// Elements with [data-closable] will respond to close.zf.trigger events.\nTriggers.Initializers.addCloseableListener = function ($elem) {
\n  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
\n  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
\n}
;
\n\n// Elements with [data-toggle-focus] will respond to coming in and out of focus\nTriggers.Initializers.addToggleFocusListener = function ($elem) {
\n  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
\n  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
\n}
;
\n\n// More Global/complex listeners and triggers\nTriggers.Listeners.Global = {
\n  resizeListener: function resizeListener($nodes) {
\n    if (!MutationObserver) {
\n      //fallback for IE 9\n      $nodes.each(function () {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('resizeme.zf.trigger');
\n      }
);
\n    }
\n    //trigger all listening elements and signal a resize event\n    $nodes.attr('data-events', \"resize\");
\n  }
,\n  scrollListener: function scrollListener($nodes) {
\n    if (!MutationObserver) {
\n      //fallback for IE 9\n      $nodes.each(function () {
\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).triggerHandler('scrollme.zf.trigger');
\n      }
);
\n    }
\n    //trigger all listening elements and signal a scroll event\n    $nodes.attr('data-events', \"scroll\");
\n  }
,\n  closeMeListener: function closeMeListener(e, pluginId) {
\n    var plugin = e.namespace.split('.')[0];
\n    var plugins = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"[data-\".concat(plugin, \"]\")).not(\"[data-yeti-box=\\\"\".concat(pluginId, \"\\\"]\"));
\n    plugins.each(function () {
\n      var _this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
\n      _this.triggerHandler('close.zf.trigger', [_this]);
\n    }
);
\n  }
\n}
;
\n\n// Global, parses whole document.\nTriggers.Initializers.addClosemeListener = function (pluginName) {
\n  var yetiBoxes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-yeti-box]'),\n    plugNames = ['dropdown', 'tooltip', 'reveal'];
\n  if (pluginName) {
\n    if (typeof pluginName === 'string') {
\n      plugNames.push(pluginName);
\n    }
 else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
\n      plugNames = plugNames.concat(pluginName);
\n    }
 else {
\n      console.error('Plugin names must be strings');
\n    }
\n  }
\n  if (yetiBoxes.length) {
\n    var listeners = plugNames.map(function (name) {
\n      return \"closeme.zf.\".concat(name);
\n    }
).join(' ');
\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
\n  }
\n}
;
\nfunction debounceGlobalListener(debounce, trigger, listener) {
\n  var timer,\n    args = Array.prototype.slice.call(arguments, 3);
\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(trigger, function () {
\n    if (timer) {
\n      clearTimeout(timer);
\n    }
\n    timer = setTimeout(function () {
\n      listener.apply(null, args);
\n    }
, debounce || 10);
 //default time to emit scroll event\n  }
);
\n}
\n\nTriggers.Initializers.addResizeListener = function (debounce) {
\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-resize]');
\n  if ($nodes.length) {
\n    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
\n  }
\n}
;
\nTriggers.Initializers.addScrollListener = function (debounce) {
\n  var $nodes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-scroll]');
\n  if ($nodes.length) {
\n    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
\n  }
\n}
;
\nTriggers.Initializers.addMutationEventsListener = function ($elem) {
\n  if (!MutationObserver) {
\n    return false;
\n  }
\n  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]');
\n\n  //element callback\n  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
\n    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(mutationRecordsList[0].target);
\n\n    //trigger the event handler for the element depending on type\n    switch (mutationRecordsList[0].type) {
\n      case \"attributes\":\n        if ($target.attr(\"data-events\") === \"scroll\" && mutationRecordsList[0].attributeName === \"data-events\") {
\n          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
\n        }
\n        if ($target.attr(\"data-events\") === \"resize\" && mutationRecordsList[0].attributeName === \"data-events\") {
\n          $target.triggerHandler('resizeme.zf.trigger', [$target]);
\n        }
\n        if (mutationRecordsList[0].attributeName === \"style\") {
\n          $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");
\n          $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);
\n        }
\n        break;
\n      case \"childList\":\n        $target.closest(\"[data-mutate]\").attr(\"data-events\", \"mutate\");
\n        $target.closest(\"[data-mutate]\").triggerHandler('mutateme.zf.trigger', [$target.closest(\"[data-mutate]\")]);
\n        break;
\n      default:\n        return false;
\n      //nothing\n    }
\n  }
;
\n\n  if ($nodes.length) {
\n    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer\n    for (var i = 0;
 i <= $nodes.length - 1;
 i++) {
\n      var elementObserver = new MutationObserver(listeningElementsMutation);
\n      elementObserver.observe($nodes[i], {
\n        attributes: true,\n        childList: true,\n        characterData: false,\n        subtree: true,\n        attributeFilter: [\"data-events\", \"style\"]\n      }
);
\n    }
\n  }
\n}
;
\nTriggers.Initializers.addSimpleListeners = function () {
\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
\n  Triggers.Initializers.addOpenListener($document);
\n  Triggers.Initializers.addCloseListener($document);
\n  Triggers.Initializers.addToggleListener($document);
\n  Triggers.Initializers.addCloseableListener($document);
\n  Triggers.Initializers.addToggleFocusListener($document);
\n}
;
\nTriggers.Initializers.addGlobalListeners = function () {
\n  var $document = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document);
\n  Triggers.Initializers.addMutationEventsListener($document);
\n  Triggers.Initializers.addResizeListener(250);
\n  Triggers.Initializers.addScrollListener();
\n  Triggers.Initializers.addClosemeListener();
\n}
;
\nTriggers.init = function (__, Foundation) {
\n  (0,_foundation_core_utils__WEBPACK_IMPORTED_MODULE_1__.onLoad)(jquery__WEBPACK_IMPORTED_MODULE_0___default()(window), function () {
\n    if ((jquery__WEBPACK_IMPORTED_MODULE_0___default().triggersInitialized) !== true) {
\n      Triggers.Initializers.addSimpleListeners();
\n      Triggers.Initializers.addGlobalListeners();
\n      (jquery__WEBPACK_IMPORTED_MODULE_0___default().triggersInitialized) = true;
\n    }
\n  }
);
\n  if (Foundation) {
\n    Foundation.Triggers = Triggers;
\n    // Legacy included to be backwards compatible for now.\n    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
\n  }
\n}
;
\n\n\n//# sourceURL=webpack://foundation-sites/./js/foundation.util.triggers.js?");


/***/ }
),

/***/ "jquery":
/*!********************************************************************************************!*\
  !*** external {
"root":["jQuery"],"amd":"jQuery","commonjs":"jQuery","commonjs2":"jQuery"}
 ***!
  \********************************************************************************************/
/***/ (function(module) {


module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;


/***/ }
)

/******/ 	}
);

/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {
}
;

/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];

/******/ 		if (cachedModule !== undefined) {

/******/ 			return cachedModule.exports;

/******/ 		}

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {

/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {
}

/******/ 		}
;

/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;

/******/ 	}

/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {

/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {

/******/ 			var getter = module && module.__esModule ?
/******/ 				function() {
 return module['default'];
 }
 :
/******/ 				function() {
 return module;
 }
;

/******/ 			__webpack_require__.d(getter, {
 a: getter }
);

/******/ 			return getter;

/******/ 		}
;

/******/ 	}
();

/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {

/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {

/******/ 			for(var key in definition) {

/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {

/******/ 					Object.defineProperty(exports, key, {
 enumerable: true, get: definition[key] }
);

/******/ 				}

/******/ 			}

/******/ 		}
;

/******/ 	}
();

/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {

/******/ 		__webpack_require__.o = function(obj, prop) {
 return Object.prototype.hasOwnProperty.call(obj, prop);
 }

/******/ 	}
();

/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {

/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {

/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {

/******/ 				Object.defineProperty(exports, Symbol.toStringTag, {
 value: 'Module' }
);

/******/ 			}

/******/ 			Object.defineProperty(exports, '__esModule', {
 value: true }
);

/******/ 		}
;

/******/ 	}
();

/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./custom-build/js/vendor/foundation.js");

/******/ 	
/******/ 	return __webpack_exports__;

/******/ }
)()
;

}
);
