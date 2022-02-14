/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Daily',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: Object
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/LightswitchField.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/LightswitchField.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LightswitchField',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    on: {
      type: Boolean,
      "default": false
    },
    value: {
      type: String,
      "default": null
    },
    onLabel: {
      type: String,
      "default": null
    }
  },
  mounted: function mounted() {
    var _this = this;

    Garnish.$doc.ready(function () {
      var _$$data;

      var lightSwitch = (_$$data = $(_this.$refs.lightSwitch).data('lightswitch')) !== null && _$$data !== void 0 ? _$$data : new Craft.LightSwitch(_this.$refs.lightSwitch);

      if (_this.on) {
        lightSwitch.turnOn(false);
      }

      lightSwitch.setSettings({
        onChange: function onChange(value) {
          _this.$emit('change', !!value);
        }
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionButtons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionButtons.vue */ "./resources/assets/src/components/OptionButtons.vue");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/assets/src/constants/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Monthly',
  components: {
    OptionButtons: _OptionButtons_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: Object
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      days: Craft.RecurringDatesLocales.Weekdays,
      positions: _constants__WEBPACK_IMPORTED_MODULE_1__.POSITIONS,
      monthDays: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.fromPairs)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 32).map(function (day) {
        return [day, day];
      })),
      mode: this.value.position ? 'onThe' : this.value.monthDay ? 'on' : 'sameDay'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'OptionButtons',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: Array
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    fixedWidth: {
      type: Boolean,
      "default": false
    },
    columns: {
      type: Number,
      "default": 7
    },
    small: {
      type: Boolean,
      "default": false
    },
    options: {
      type: Object,
      "default": {},
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LightswitchField_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightswitchField.vue */ "./resources/assets/src/components/LightswitchField.vue");
/* harmony import */ var _Yearly_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Yearly.vue */ "./resources/assets/src/components/Yearly.vue");
/* harmony import */ var _Monthly_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Monthly.vue */ "./resources/assets/src/components/Monthly.vue");
/* harmony import */ var _Weekly_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Weekly.vue */ "./resources/assets/src/components/Weekly.vue");
/* harmony import */ var _Daily_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Daily.vue */ "./resources/assets/src/components/Daily.vue");
/* harmony import */ var _models_EventModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/EventModel */ "./resources/assets/src/models/EventModel.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RecurringDates',
  components: {
    LightswitchField: _LightswitchField_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Yearly: _Yearly_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Monthly: _Monthly_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Weekly: _Weekly_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Daily: _Daily_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    settings: {
      type: Object,
      "default": {}
    },
    value: {
      type: [String, Array],
      required: true,
      "default": []
    }
  },
  data: function data() {
    var _this = this;

    return {
      settings: _objectSpread({
        min: 0,
        max: null,
        allowRecurring: true,
        "static": false,
        fixed: false
      }, this.settings),
      dates: this.value.map(function (event) {
        return new _models_EventModel__WEBPACK_IMPORTED_MODULE_5__["default"](_this.name, event.id, event);
      })
    };
  },
  computed: {
    disabled: function disabled() {
      return this.settings.fixed;
    },
    staticItems: function staticItems() {
      return this.settings.fixed || this.settings["static"];
    },
    canAdd: function canAdd() {
      return !this.settings.fixed || !this.settings["static"] || !this.settings.max || this.dates.length < this.settings.max;
    }
  },
  created: function created() {
    if (this.dates.length < this.settings.min) {
      var missing = this.settings.min - this.dates.length;

      for (var i = 0; i < missing; i++) {
        this.dates.push(new _models_EventModel__WEBPACK_IMPORTED_MODULE_5__["default"](this.name, "NEW".concat(i)));
      }
    }
  },
  methods: {
    remove: function remove(id, $event) {
      $event.preventDefault();

      if (!this.settings["static"]) {
        this.dates = this.dates.filter(function (date) {
          return date.id !== id;
        });
      }
    },
    add: function add($event) {
      $event.preventDefault();

      if (this.canAdd) {
        this.dates.push(new _models_EventModel__WEBPACK_IMPORTED_MODULE_5__["default"](this.name, "NEW".concat(this.dates.length)));
      }
    },
    addException: function addException(date, $event) {
      $event.preventDefault();
      date.repeat.exceptions.push(new Date());
    },
    deleteException: function deleteException(date, index, $event) {
      $event.preventDefault();
      date.repeat.exceptions.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionButtons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionButtons.vue */ "./resources/assets/src/components/OptionButtons.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Weekly',
  components: {
    OptionButtons: _OptionButtons_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: Object
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      days: Craft.RecurringDatesLocales.Weekdays
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionButtons_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionButtons.vue */ "./resources/assets/src/components/OptionButtons.vue");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/assets/src/constants/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Yearly',
  components: {
    OptionButtons: _OptionButtons_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: Object
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      months: Craft.RecurringDatesLocales.Months,
      days: Craft.RecurringDatesLocales.Weekdays,
      positions: _constants__WEBPACK_IMPORTED_MODULE_1__.POSITIONS,
      monthDays: (0,lodash__WEBPACK_IMPORTED_MODULE_2__.fromPairs)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.range)(1, 32).map(function (day) {
        return [day, day];
      })),
      mode: this.value.position ? 'onThe' : this.value.monthDay ? 'on' : 'sameDay'
    };
  }
});

/***/ }),

/***/ "./resources/assets/src/constants/index.js":
/*!*************************************************!*\
  !*** ./resources/assets/src/constants/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSITIONS": () => (/* binding */ POSITIONS)
/* harmony export */ });
var POSITIONS = {
  '1': Craft.t('recurring-dates', 'First'),
  '2': Craft.t('recurring-dates', 'Second'),
  '3': Craft.t('recurring-dates', 'Third'),
  '4': Craft.t('recurring-dates', 'Fourth'),
  '5': Craft.t('recurring-dates', 'Fifth'),
  '-1': Craft.t('recurring-dates', 'Last')
};

/***/ }),

/***/ "./resources/assets/src/helpers/index.js":
/*!***********************************************!*\
  !*** ./resources/assets/src/helpers/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "namespaceInputId": () => (/* binding */ namespaceInputId),
/* harmony export */   "namespaceInputName": () => (/* binding */ namespaceInputName)
/* harmony export */ });
/**
 * Namespaces an HTML ID
 *
 * @param {string} namespace
 * @param {string} id
 * @returns {string}
 */
var namespaceInputId = function namespaceInputId(namespace, id) {
  return "".concat(namespace, "-").concat(id);
};
/**
 * Namespaces a input name
 *
 * @param {string} name
 * @param {string} namespace
 * @returns {string}
 */

var namespaceInputName = function namespaceInputName(name, namespace) {
  return name.replace(/([^\'"\[\]]+)([^\'"]*)/, "".concat(namespace, "[$1]$2"));
};

/***/ }),

/***/ "./resources/assets/src/models/EventModel.js":
/*!***************************************************!*\
  !*** ./resources/assets/src/models/EventModel.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./resources/assets/src/helpers/index.js");
/* harmony import */ var _RepeatModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RepeatModel */ "./resources/assets/src/models/RepeatModel.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _globalName = /*#__PURE__*/new WeakMap();

var EventModel = /*#__PURE__*/function () {
  /** @type {string} */

  /** @type {string} */

  /** @type {boolean} */

  /** @type {boolean} */

  /** @type {RepeatModel} */

  /** @type {{start: Date, end: Date}} */

  /**
   * @param {string | null} id
   * @param {*} data
   */
  function EventModel(globalName) {
    var _data$repeat;

    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, EventModel);

    _classPrivateFieldInitSpec(this, _globalName, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "allDay", false);

    _defineProperty(this, "recurring", false);

    _defineProperty(this, "repeat", void 0);

    _defineProperty(this, "startEnd", {});

    _classPrivateFieldSet(this, _globalName, globalName);

    this.id = id !== null && id !== void 0 ? id : 'NEW';
    this.allDay = data.allDay ? true : false;
    this.recurring = data.repeat ? true : false;
    this.repeat = new _RepeatModel__WEBPACK_IMPORTED_MODULE_1__["default"]((_data$repeat = data.repeat) !== null && _data$repeat !== void 0 ? _data$repeat : {});
    this.startEnd.start = data.startDate ? new Date(data.startDate) : new Date();
    this.startEnd.end = data.endDate ? new Date(data.endDate) : new Date();
  }
  /** @type {string} */


  _createClass(EventModel, [{
    key: "name",
    get: function get() {
      return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.namespaceInputName)((0,_helpers__WEBPACK_IMPORTED_MODULE_0__.namespaceInputName)(this.id, 'dates'), _classPrivateFieldGet(this, _globalName));
    }
  }]);

  return EventModel;
}();

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventModel);

/***/ }),

/***/ "./resources/assets/src/models/RepeatModel.js":
/*!****************************************************!*\
  !*** ./resources/assets/src/models/RepeatModel.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RepeatModel =
/** @type {'YEARLY' | 'MONTHLY' | 'WEEKLY' | 'DAILY'} */

/** @type {number} */

/** @type {string[]|null} */

/** @type {string[]|null} */

/** @type {string[]|null} */

/** @type {string[]|null} */

/** @type {'never' | 'onDate' | 'after'} */

/** @type {number} */

/** @type {Date} */

/** @type {Date[]} */
function RepeatModel() {
  var _data$frequency,
      _data$interval,
      _data$day,
      _data$month,
      _data$monthDay,
      _data$position,
      _data$endsAfter,
      _data$count,
      _this = this;

  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, RepeatModel);

  _defineProperty(this, "frequency", 'MONTHLY');

  _defineProperty(this, "interval", 1);

  _defineProperty(this, "day", null);

  _defineProperty(this, "month", null);

  _defineProperty(this, "monthDay", null);

  _defineProperty(this, "position", null);

  _defineProperty(this, "endsAfter", 'never');

  _defineProperty(this, "count", 1);

  _defineProperty(this, "endsOn", new Date());

  _defineProperty(this, "exceptions", []);

  this.frequency = (_data$frequency = data.frequency) !== null && _data$frequency !== void 0 ? _data$frequency : this.frequency;
  this.interval = (_data$interval = data.interval) !== null && _data$interval !== void 0 ? _data$interval : this.interval;
  this.day = (_data$day = data.day) !== null && _data$day !== void 0 ? _data$day : this.day;
  this.month = (_data$month = data.month) !== null && _data$month !== void 0 ? _data$month : this.month;
  this.monthDay = (_data$monthDay = data.monthDay) !== null && _data$monthDay !== void 0 ? _data$monthDay : this.monthDay;
  this.position = (_data$position = data.position) !== null && _data$position !== void 0 ? _data$position : this.position;
  this.endsAfter = (_data$endsAfter = data.endsAfter) !== null && _data$endsAfter !== void 0 ? _data$endsAfter : this.endsAfter;
  this.count = (_data$count = data.count) !== null && _data$count !== void 0 ? _data$count : this.count;
  this.endsOn = data.endsOn ? new Date(data.endsOn) : new Date();

  if (Array.isArray(data.exceptions)) {
    data.exceptions.forEach(function (exception) {
      _this.exceptions.push(new Date(exception));
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepeatModel);

/***/ }),

/***/ "./resources/assets/src/recurring-dates.js":
/*!*************************************************!*\
  !*** ./resources/assets/src/recurring-dates.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v-calendar */ "./node_modules/v-calendar/lib/v-calendar.umd.min.js");
/* harmony import */ var v_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(v_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RecurringDates_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/RecurringDates.vue */ "./resources/assets/src/components/RecurringDates.vue");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./resources/assets/src/helpers/index.js");



 // Register custom filters

vue__WEBPACK_IMPORTED_MODULE_0___default().filter('namespaceInputId', _helpers__WEBPACK_IMPORTED_MODULE_3__.namespaceInputId);
vue__WEBPACK_IMPORTED_MODULE_0___default().filter('namespaceInputName', _helpers__WEBPACK_IMPORTED_MODULE_3__.namespaceInputName);
vue__WEBPACK_IMPORTED_MODULE_0___default().filter('t', function (text) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'recurring-dates';
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return Craft.t(context, text, params);
});
vue__WEBPACK_IMPORTED_MODULE_0___default().filter('dateRaw', function (date) {
  return date.toISOString();
}); // Register v-calendar

vue__WEBPACK_IMPORTED_MODULE_0___default().use((v_calendar__WEBPACK_IMPORTED_MODULE_1___default())); // Add input field to Craft global

Craft.RecurringDates = Garnish.Base.extend({
  init: function init(idPrefix) {
    new (vue__WEBPACK_IMPORTED_MODULE_0___default())({
      el: "#".concat(idPrefix, "-field"),
      delimiters: ['${', '}'],
      components: {
        RecurringDates: _components_RecurringDates_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cdf-daily__option {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.cdf-daily__option > *:not(:first-child) {\n  padding-left: 10px;\n}\n.cdf-daily__option + .cdf-daily__option {\n  margin-top: 16px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cdf-monthly__option {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.cdf-monthly__option > *:not(:first-child) {\n  padding-left: 10px;\n}\n.cdf-monthly__option + .cdf-monthly__option {\n  margin-top: 16px;\n}\n.cdf-monthly__option-radio,\n.cdf-monthly__option-seperator {\n  height: 34px;\n  display: flex;\n  align-items: center;\n}\n.cdf-monthly__option-inputs > * + * {\n  margin-top: 8px;\n}\n.cdf-monthly__option-input--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n  pointer-events: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cdf-option-buttons {\n  overflow: hidden;\n  border-radius: 5px;\n  display: inline-block;\n}\n.cdf-option-buttons__buttons {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: -1px;\n  overflow: hidden;\n}\n.cdf-option-buttons--fixed .cdf-option-buttons__buttons {\n  display: grid;\n  gap: 1px;\n  grid-template-columns: repeat(var(--cdf-option-columns), 1fr);\n  grid-template-rows: 1fr;\n}\n.cdf-option-buttons--fixed .cdf-option-buttons__buttons::after {\n  content: \"\";\n  width: 1000%;\n  background-color: rgba(96, 125, 159, 0.1);\n}\n.cdf-option-buttons__button {\n  margin-right: 1px;\n  margin-top: 1px;\n}\n.cdf-option-buttons__button:last-child {\n  margin-right: 0;\n}\n.cdf-option-buttons--fixed .cdf-option-buttons__button {\n  margin: 0;\n}\n.cdf-option-buttons__button-checkbox {\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n}\n.cdf-option-buttons__button-checkbox:focus {\n  outline: 0;\n}\n.cdf-option-buttons__button-label {\n  background-color: rgba(96, 125, 159, 0.25);\n  box-sizing: border-box;\n  color: #3f4d5a;\n  cursor: pointer;\n  display: block;\n  height: 34px;\n  padding: 7px 14px;\n  text-align: center;\n}\n.cdf-option-buttons--small .cdf-option-buttons__button-label {\n  height: 24px;\n  padding: 2px 7px;\n  font-size: 12px;\n}\n.cdf-option-buttons__button-label:hover, .cdf-option-buttons__button-checkbox:focus-visible ~ .cdf-option-buttons__button-label {\n  background-color: rgba(96, 125, 159, 0.35);\n}\n.cdf-option-buttons__button-checkbox:checked ~ .cdf-option-buttons__button-label {\n  background-color: #607d9f;\n  color: #fff;\n}\n.cdf-option-buttons__button-checkbox:checked ~ .cdf-option-buttons__button-label:hover, .cdf-option-buttons__button-checkbox:checked:hover ~ .cdf-option-buttons__button-label {\n  background-color: rgba(96, 125, 159, 0.8);\n  color: #fff;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cdf-date {\n  padding-top: 8px;\n}\n.cdf-date__entry {\n  padding: 8px 16px 24px;\n  border: 1px solid rgba(51, 64, 77, 0.1);\n  border-radius: 5px;\n  background-color: #f3f7fc;\n}\n.cdf-date__entry + .cdf-date__entry {\n  margin-top: 16px;\n}\n.cdf-date__toolbar {\n  border-bottom: 1px solid rgba(51, 64, 77, 0.1);\n  color: #7b8793;\n  display: flex;\n  height: 30px;\n  justify-content: space-between;\n  line-height: 30px;\n  margin-bottom: 16px;\n}\n.cdf-date__fieldset {\n  margin-top: 0;\n}\n.cdf-date__legend {\n  color: #515f6c;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n.cdf-date__date-input {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -5px -10px;\n}\n.cdf-date__date-input > * {\n  margin: 5px 10px;\n}\n.cdf-date__start-end {\n  display: flex;\n  position: relative;\n  max-width: 350px;\n}\n.cdf-date__start-end-separator {\n  align-self: center;\n  color: #515f6c;\n  font-weight: bold;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.cdf-date__input {\n  line-height: 22px;\n}\n.cdf-date__recurring {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  margin: -10px;\n}\n.cdf-date__recurring > * {\n  margin: 10px;\n}\n.cdf-date__recurring-end-fields {\n  align-items: flex-start;\n  display: flex;\n  flex-wrap: wrap;\n  margin: -10px;\n}\n.cdf-date__recurring-end-fields > * {\n  margin: 10px;\n}\n.cdf-date__exception {\n  margin-bottom: 8px;\n}\n.cdf-date__add {\n  border-top: 1px solid rgba(51, 64, 77, 0.1);\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 16px;\n  padding-top: 16px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cdf-weekly__option {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.cdf-weekly__option > *:not(:first-child) {\n  padding-left: 10px;\n}\n.cdf-weekly__option + .cdf-weekly__option {\n  margin-top: 16px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cdf-yearly__option {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}\n.cdf-yearly__option > *:not(:first-child) {\n  padding-left: 10px;\n}\n.cdf-yearly__option + .cdf-yearly__option {\n  margin-top: 16px;\n}\n.cdf-yearly__option-radio,\n.cdf-yearly__option-seperator {\n  height: 34px;\n  display: flex;\n  align-items: center;\n}\n.cdf-yearly__option-inputs {\n  margin: -4px;\n}\n.cdf-yearly__option-inputs > * {\n  margin: 4px;\n}\n.cdf-yearly__option-inputs--flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.cdf-yearly__option-input--disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n  pointer-events: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.21';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function',
      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

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

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /**
   * Used to validate the `validate` option in `_.template` variable.
   *
   * Forbids characters which could potentially change the meaning of the function argument definition:
   * - "()," (modification of function parameters)
   * - "=" (default value)
   * - "[]{}" (destructuring of function parameters)
   * - "/" (beginning of a comment)
   * - whitespace
   */
  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

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

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

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

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

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

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

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
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

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

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

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

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

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
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

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

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

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

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

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

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

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

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

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
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

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
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

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
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

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
          index = assocIndexOf(data, key);

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
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

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
      return assocIndexOf(this.__data__, key) > -1;
    }

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
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

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
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

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
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

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
      return getMapData(this, key).get(key);
    }

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
      return getMapData(this, key).has(key);
    }

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
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

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
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

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
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

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
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

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
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
      }

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

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

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

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
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack);
        if (isObject(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key),
          srcValue = safeGet(source, key),
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || isFunction(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            }
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }

      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

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
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

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
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

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
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
          return object;
        }

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

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

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      var low = 0,
          high = array == null ? 0 : array.length;
      if (high === 0) {
        return 0;
      }

      value = iteratee(value);
      var valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

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
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

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
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

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

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

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

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision && nativeIsFinite(number)) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Check that cyclic values are equal.
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Check that cyclic values are equal.
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

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
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

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

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

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
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return new Ctor;

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return new Ctor;

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

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

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

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

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

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

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

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
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the property to get.
     * @returns {*} Returns the property value.
     */
    function safeGet(object, key) {
      if (key === 'constructor' && typeof object[key] === 'function') {
        return;
      }

      if (key == '__proto__') {
        return;
      }

      return object[key];
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

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

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46 /* . */) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

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

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

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
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

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

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

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
    var pull = baseRest(pullAll);

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
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

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
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     *
     * // Combining several predicates using `_.overEvery` or `_.overSome`.
     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
     * // => objects for ['fred', 'barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 30 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

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
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

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

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
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
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

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
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

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

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

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
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

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

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

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
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

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
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

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
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

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
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

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

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

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
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

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
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

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
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

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
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(object, sources) {
      object = Object(object);

      var index = -1;
      var length = sources.length;
      var guard = length > 2 ? sources[2] : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
      }

      while (++index < length) {
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;

        while (++propsIndex < propsLength) {
          var key = props[propsIndex];
          var value = object[key];

          if (value === undefined ||
              (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
            object[key] = source[key];
          }
        }
      }

      return object;
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

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
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

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
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (value != null &&
          typeof value.toString != 'function') {
        value = nativeObjectToString.call(value);
      }

      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

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
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
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
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

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
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

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
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

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
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
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
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      // The sourceURL gets injected into the source that's eval-ed, so be careful
      // to normalize all kinds of whitespace, so e.g. newlines (and unicode versions of it) can't sneak in
      // and escape the comment, thus injecting code that gets evaled.
      var sourceURL = '//# sourceURL=' +
        (hasOwnProperty.call(options, 'sourceURL')
          ? (options.sourceURL + '').replace(/\s/g, ' ')
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = hasOwnProperty.call(options, 'variable') && options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Throw an error if a forbidden character was found in `variable`, to prevent
      // potential command injection attacks.
      else if (reForbiddenIdentifierChars.test(variable)) {
        throw new Error(INVALID_TEMPL_VAR_ERROR_TEXT);
      }

      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return baseTrim(string);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.slice(0, trimmedEndIndex(string) + 1);
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

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

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

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

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matches({ 'a': 1 }), _.matches({ 'a': 4 })]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * **Note:** Multiple values can be checked by combining several matchers
     * using `_.overSome`
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     *
     * // Checking for several possible values
     * _.filter(objects, _.overSome([_.matchesProperty('a', 1), _.matchesProperty('a', 4)]));
     * // => [{ 'a': 1, 'b': 2, 'c': 3 }, { 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * Following shorthands are possible for providing predicates.
     * Pass an `Object` and it will be used as an parameter for `_.matches` to create the predicate.
     * Pass an `Array` of parameters for `_.matchesProperty` and the predicate will be created using them.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     *
     * var matchesFunc = _.overSome([{ 'a': 1 }, { 'a': 2 }])
     * var matchesPropertyFunc = _.overSome([['a', 1], ['a', 2]])
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

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

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

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
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name + '';
        if (!hasOwnProperty.call(realNames, key)) {
          realNames[key] = [];
        }
        realNames[key].push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else {}
}.call(this));


/***/ }),

/***/ "./resources/assets/src/recurring-dates.scss":
/*!***************************************************!*\
  !*** ./resources/assets/src/recurring-dates.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Daily.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Monthly.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionButtons.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringDates.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Weekly.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Yearly.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/v-calendar/lib/v-calendar.umd.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/v-calendar/lib/v-calendar.umd.min.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function(e,t){ true?module.exports=t(__webpack_require__(/*! vue */ "vue")):0})("undefined"!==typeof self?self:this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"00fd":function(e,t,n){var r=n("9e69"),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,s=r?r.toStringTag:void 0;function c(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(c){}var a=i.call(e);return r&&(t?e[s]=n:delete e[s]),a}e.exports=c},"03dd":function(e,t,n){var r=n("eac5"),a=n("57a5"),o=Object.prototype,i=o.hasOwnProperty;function s(e){if(!r(e))return a(e);var t=[];for(var n in Object(e))i.call(e,n)&&"constructor"!=n&&t.push(n);return t}e.exports=s},"0621":function(e,t,n){var r=n("9e69"),a=n("d370"),o=n("6747"),i=r?r.isConcatSpreadable:void 0;function s(e){return o(e)||a(e)||!!(i&&e&&e[i])}e.exports=s},"06cf":function(e,t,n){var r=n("83ab"),a=n("d1e7"),o=n("5c6c"),i=n("fc6a"),s=n("c04e"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=i(e),t=s(t,!0),u)try{return l(e,t)}catch(n){}if(c(e,t))return o(!a.f.call(e,t),e[t])}},"0733":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n("2fa3"),a=n("9404");const o=function(e,t){if(!e||!e.addEventListener||!Object(a["k"])(t))return null;let n=!1,o=!1;const i=function(){return n=!0},s=function(){return n=!1},c=function(e){if(n)return n=!1,o=!0,void t(e);"click"!==e.type||o||t(e),o=!1};return Object(r["k"])(e,"touchstart",i,{passive:!0}),Object(r["k"])(e,"touchmove",s,{passive:!0}),Object(r["k"])(e,"click",c,{passive:!0}),Object(r["k"])(e,"touchend",c,{passive:!0}),function(){Object(r["j"])(e,"touchstart",i),Object(r["j"])(e,"touchmove",s),Object(r["j"])(e,"click",c),Object(r["j"])(e,"touchend",c)}},i=function(e,t,{maxSwipeTime:n,minHorizontalSwipeDistance:o,maxVerticalSwipeDistance:i}){if(!e||!e.addEventListener||!Object(a["k"])(t))return null;let s=0,c=0,u=null,l=!1;function d(e){const t=e.changedTouches[0];s=t.screenX,c=t.screenY,u=(new Date).getTime(),l=!0}function f(e){if(!l)return;l=!1;const r=e.changedTouches[0],a=r.screenX-s,d=r.screenY-c,f=(new Date).getTime()-u;if(f<n&&Math.abs(a)>=o&&Math.abs(d)<=i){const e={toLeft:!1,toRight:!1};a<0?e.toLeft=!0:e.toRight=!0,t(e)}}return Object(r["k"])(e,"touchstart",d,{passive:!0}),Object(r["k"])(e,"touchend",f,{passive:!0}),function(){Object(r["j"])(e,"touchstart",d),Object(r["j"])(e,"touchend",f)}}},"07c7":function(e,t){function n(){return!1}e.exports=n},"087d":function(e,t){function n(e,t){var n=-1,r=t.length,a=e.length;while(++n<r)e[a+n]=t[n];return e}e.exports=n},"08cc":function(e,t,n){var r=n("1a8c");function a(e){return e===e&&!r(e)}e.exports=a},"0b07":function(e,t,n){var r=n("34ac"),a=n("3698");function o(e,t){var n=a(e,t);return r(n)?n:void 0}e.exports=o},"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,o="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,c,u,l){var d=n+e.length,f=c.length,p=s;return void 0!==u&&(u=r(u),p=i),o.call(l,p,(function(r,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":i=u[o.slice(1,-1)];break;default:var s=+o;if(0===s)return r;if(s>f){var l=a(s/10);return 0===l?r:l<=f?void 0===c[l-1]?o.charAt(1):c[l-1]+o.charAt(1):r}i=c[s-1]}return void 0===i?"":i}))}},"0cfb":function(e,t,n){var r=n("83ab"),a=n("d039"),o=n("cc12");e.exports=!r&&!a((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d24":function(e,t,n){(function(e){var r=n("2b3e"),a=n("07c7"),o=t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,s=i&&i.exports===o,c=s?r.Buffer:void 0,u=c?c.isBuffer:void 0,l=u||a;e.exports=l}).call(this,n("62e4")(e))},"0da5":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-nav-header{display:flex;justify-content:space-between}.vc-nav-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;line-height:var(--leading-snug);border-width:2px;border-style:solid;border-color:transparent;border-radius:var(--rounded)}.vc-nav-arrow.is-left{margin-right:auto}.vc-nav-arrow.is-right{margin-left:auto}.vc-nav-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-nav-arrow:hover{background-color:var(--gray-900)}.vc-nav-arrow:focus{border-color:var(--accent-600)}.vc-nav-title{color:var(--accent-100);font-weight:var(--font-bold);line-height:var(--leading-snug);padding:4px 8px;border-radius:var(--rounded);border-width:2px;border-style:solid;border-color:transparent;-webkit-user-select:none;user-select:none}.vc-nav-title:hover{background-color:var(--gray-900)}.vc-nav-title:focus{border-color:var(--accent-600)}.vc-nav-items{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:2px;grid-column-gap:5px}.vc-nav-item{width:48px;text-align:center;line-height:var(--leading-snug);font-weight:var(--font-semibold);padding:4px 0;cursor:pointer;border-color:transparent;border-width:2px;border-style:solid;border-radius:var(--rounded);-webkit-user-select:none;user-select:none}.vc-nav-item:hover{color:var(--white);background-color:var(--gray-900);box-shadow:var(--shadow-inner)}.vc-nav-item.is-active{color:var(--accent-900);background:var(--accent-100);font-weight:var(--font-bold);box-shadow:var(--shadow)}.vc-nav-item.is-current{color:var(--accent-100);font-weight:var(--bold);border-color:var(--accent-100)}.vc-nav-item:focus{border-color:var(--accent-600)}.vc-nav-item.is-disabled{opacity:.25;pointer-events:none}.vc-is-dark .vc-nav-title{color:var(--gray-900)}.vc-is-dark .vc-nav-title:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-title:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-arrow:hover{background-color:var(--gray-200)}.vc-is-dark .vc-nav-arrow:focus{border-color:var(--accent-400)}.vc-is-dark .vc-nav-item:hover{color:var(--gray-900);background-color:var(--gray-200);box-shadow:none}.vc-is-dark .vc-nav-item.is-active{color:var(--white);background:var(--accent-500)}.vc-is-dark .vc-nav-item.is-current{color:var(--accent-600);border-color:var(--accent-500)}.vc-is-dark .vc-nav-item:focus{border-color:var(--accent-400)}",""]),e.exports=t},"0f0f":function(e,t,n){var r=n("8eeb"),a=n("9934");function o(e,t){return e&&r(t,a(t),e)}e.exports=o},"0f5c":function(e,t,n){var r=n("159a");function a(e,t,n){return null==e?e:r(e,t,n)}e.exports=a},"100e":function(e,t,n){var r=n("cd9d"),a=n("2286"),o=n("c1c9");function i(e,t){return o(a(e,t,r),e+"")}e.exports=i},1041:function(e,t,n){var r=n("8eeb"),a=n("a029");function o(e,t){return r(e,a(e),t)}e.exports=o},"107c":function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1290:function(e,t){function n(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},1310:function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},1315:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("8bbf"),a=n.n(r),o=n("9404");function i(e){return Object(o["n"])(e)&&(e={min:e}),Object(o["h"])(e)||(e=[e]),e.map((function(e){return Object(o["e"])(e,"raw")?e.raw:Object(o["q"])(e,(function(e,t){return t=Object(o["d"])({min:"min-width",max:"max-width"},t,t),`(${t}: ${e})`})).join(" and ")})).join(", ")}var s=n("85a9");let c=!1,u=!1,l=null;function d(e=s,t){l&&!t||c||(c=!0,u=!0,l=new a.a({data(){return{matches:[],queries:[]}},methods:{refreshQueries(){var t=this;window&&window.matchMedia&&(this.queries=Object(o["r"])(e,(function(e){const n=window.matchMedia(i(e));return Object(o["k"])(n.addEventListener)?n.addEventListener("change",t.refreshMatches):n.addListener(t.refreshMatches),n})),this.refreshMatches())},refreshMatches(){this.matches=Object(o["w"])(this.queries).filter((function(e){return e[1].matches})).map((function(e){return e[0]}))}}}),c=!1)}a.a.mixin({beforeCreate(){c||d()},mounted(){u&&l&&(l.refreshQueries(),u=!1)},computed:{$screens(){return function(e,t){return l.matches.reduce((function(t,n){return Object(o["e"])(e,n)?e[n]:t}),Object(o["o"])(t)?e.default:t)}}}})},1349:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-time-picker[data-v-021f332c]{display:flex;align-items:center;padding:8px}.vc-time-picker.vc-invalid[data-v-021f332c]{pointer-events:none;opacity:.5}.vc-time-picker.vc-bordered[data-v-021f332c]{border-top:1px solid var(--gray-400)}.vc-date-time[data-v-021f332c]{margin-left:8px}.vc-disabled[data-v-021f332c]{pointer-events:none;opacity:.5}.vc-time-icon[data-v-021f332c]{width:16px;height:16px;color:var(--gray-600)}.vc-date[data-v-021f332c]{display:flex;align-items:center;font-size:var(--text-sm);font-weight:var(--font-semibold);text-transform:uppercase;padding:0 0 4px 4px;margin-top:-4px}.vc-date .vc-weekday[data-v-021f332c]{color:var(--gray-700);letter-spacing:var(--tracking-wide)}.vc-date .vc-month[data-v-021f332c]{color:var(--accent-600);margin-left:8px}.vc-date .vc-day[data-v-021f332c]{color:var(--accent-600);margin-left:4px}.vc-date .vc-year[data-v-021f332c]{color:var(--gray-500);margin-left:8px}.vc-am-pm[data-v-021f332c],.vc-time[data-v-021f332c]{display:flex;align-items:center}.vc-am-pm[data-v-021f332c]{background:var(--gray-200);margin-left:8px;padding:4px;border-radius:var(--rounded);height:30px}.vc-am-pm button[data-v-021f332c]{color:var(--gray-900);font-size:var(--text-sm);font-weight:var(--font-medium);padding:0 4px;background:transparent;border:2px solid transparent;border-radius:var(--rounded);line-height:var(--leading-snug)}.vc-am-pm button[data-v-021f332c]:hover{color:var(--gray-600)}.vc-am-pm button[data-v-021f332c]:focus{border-color:var(--accent-400)}.vc-am-pm button.active[data-v-021f332c]{background:var(--accent-600);color:var(--white)}.vc-am-pm button.active[data-v-021f332c]:hover{background:var(--accent-500)}.vc-am-pm button.active[data-v-021f332c]:focus{border-color:var(--accent-400)}.vc-is-dark .vc-time-picker[data-v-021f332c]{border-color:var(--gray-700)}.vc-is-dark .vc-time-icon[data-v-021f332c],.vc-is-dark .vc-weekday[data-v-021f332c]{color:var(--gray-400)}.vc-is-dark .vc-day[data-v-021f332c],.vc-is-dark .vc-month[data-v-021f332c]{color:var(--accent-400)}.vc-is-dark .vc-year[data-v-021f332c]{color:var(--gray-500)}.vc-is-dark .vc-am-pm[data-v-021f332c]{background:var(--gray-700)}.vc-is-dark .vc-am-pm[data-v-021f332c]:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button[data-v-021f332c]{color:var(--gray-100)}.vc-is-dark .vc-am-pm button[data-v-021f332c]:hover{color:var(--gray-400)}.vc-is-dark .vc-am-pm button[data-v-021f332c]:focus{border-color:var(--accent-500)}.vc-is-dark .vc-am-pm button.active[data-v-021f332c]{background:var(--accent-500);color:var(--white)}.vc-is-dark .vc-am-pm button.active[data-v-021f332c]:hover{background:var(--accent-600)}.vc-is-dark .vc-am-pm button.active[data-v-021f332c]:focus{border-color:var(--accent-500)}",""]),e.exports=t},1368:function(e,t,n){var r=n("da03"),a=function(){var e=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function o(e){return!!a&&a in e}e.exports=o},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"159a":function(e,t,n){var r=n("32b3"),a=n("e2e4"),o=n("c098"),i=n("1a8c"),s=n("f4d6");function c(e,t,n,c){if(!i(e))return e;t=a(t,e);var u=-1,l=t.length,d=l-1,f=e;while(null!=f&&++u<l){var p=s(t[u]),h=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return e;if(u!=d){var v=f[p];h=c?c(v,p,f):void 0,void 0===h&&(h=i(v)?v:o(t[u+1])?[]:{})}r(f,p,h),f=f[p]}return e}e.exports=c},"15f3":function(e,t,n){var r=n("89d9"),a=n("8604");function o(e,t){return r(e,t,(function(t,n){return a(e,n)}))}e.exports=o},1838:function(e,t,n){var r=n("c05f"),a=n("9b02"),o=n("8604"),i=n("f608"),s=n("08cc"),c=n("20ec"),u=n("f4d6"),l=1,d=2;function f(e,t){return i(e)&&s(t)?c(u(e),t):function(n){var i=a(n,e);return void 0===i&&i===t?o(n,e):r(t,i,l|d)}}e.exports=f},"18d8":function(e,t,n){var r=n("234d"),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,(function(e,n,r,a){t.push(r?a.replace(o,"$1"):n||e)})),t}));e.exports=i},"1a2d":function(e,t,n){var r=n("42a2"),a=n("1310"),o="[object Map]";function i(e){return a(e)&&r(e)==o}e.exports=i},"1a8c":function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},"1bac":function(e,t,n){var r=n("7d1f"),a=n("a029"),o=n("9934");function i(e){return r(e,o,a)}e.exports=i},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c3c":function(e,t,n){var r=n("9e69"),a=n("2474"),o=n("9638"),i=n("a2be"),s=n("edfa"),c=n("ac41"),u=1,l=2,d="[object Boolean]",f="[object Date]",p="[object Error]",h="[object Map]",v="[object Number]",b="[object RegExp]",m="[object Set]",g="[object String]",y="[object Symbol]",w="[object ArrayBuffer]",x="[object DataView]",D=r?r.prototype:void 0,j=D?D.valueOf:void 0;function O(e,t,n,r,D,O,k){switch(n){case x:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case w:return!(e.byteLength!=t.byteLength||!O(new a(e),new a(t)));case d:case f:case v:return o(+e,+t);case p:return e.name==t.name&&e.message==t.message;case b:case g:return e==t+"";case h:var M=s;case m:var P=r&u;if(M||(M=c),e.size!=t.size&&!P)return!1;var Y=k.get(e);if(Y)return Y==t;r|=l,k.set(e,t);var S=i(M(e),M(t),r,D,O,k);return k["delete"](e),S;case y:if(j)return j.call(e)==j.call(t)}return!1}e.exports=O},"1cec":function(e,t,n){var r=n("0b07"),a=n("2b3e"),o=r(a,"Promise");e.exports=o},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1efc":function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}e.exports=n},"1f64":function(e,t,n){"use strict";var r=n("6a43"),a=n.n(r);a.a},"1fc8":function(e,t,n){var r=n("4245");function a(e,t){var n=r(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}e.exports=a},"20ec":function(e,t){function n(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}}e.exports=n},2285:function(e,t,n){"use strict";var r=n("2a4d"),a=n.n(r);a.a},2286:function(e,t,n){var r=n("85e3"),a=Math.max;function o(e,t,n){return t=a(void 0===t?e.length-1:t,0),function(){var o=arguments,i=-1,s=a(o.length-t,0),c=Array(s);while(++i<s)c[i]=o[t+i];i=-1;var u=Array(t+1);while(++i<t)u[i]=o[i];return u[t]=n(c),r(e,this,u)}}e.exports=o},"22f3":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cfe5"),a=n("2fa3"),o=n("9404");class i{constructor({key:e,hashcode:t,highlight:n,content:i,dot:s,bar:c,popover:u,dates:l,excludeDates:d,excludeMode:f,customData:p,order:h,pinPage:v},b,m){this.key=Object(o["o"])(e)?Object(a["c"])():e,this.hashcode=t,this.customData=p,this.order=h||0,this.dateOpts={order:h,locale:m},this.pinPage=v,n&&(this.highlight=b.normalizeHighlight(n)),i&&(this.content=b.normalizeContent(i)),s&&(this.dot=b.normalizeDot(s)),c&&(this.bar=b.normalizeBar(c)),u&&(this.popover=u),this.dates=m.normalizeDates(l,this.dateOpts),this.hasDates=!!Object(a["b"])(this.dates),this.excludeDates=m.normalizeDates(d,this.dateOpts),this.hasExcludeDates=!!Object(a["b"])(this.excludeDates),this.excludeMode=f||"intersects",this.hasExcludeDates&&!this.hasDates&&(this.dates.push(new r["a"]({},this.dateOpts)),this.hasDates=!0),this.isComplex=Object(o["v"])(this.dates,(function(e){return e.isComplex}))}intersectsDate(e){return e=e instanceof r["a"]?e:new r["a"](e,this.dateOpts),!this.excludesDate(e)&&(this.dates.find((function(t){return t.intersectsDate(e)}))||!1)}includesDate(e){return e=e instanceof r["a"]?e:new r["a"](e,this.dateOpts),!this.excludesDate(e)&&(this.dates.find((function(t){return t.includesDate(e)}))||!1)}excludesDate(e){var t=this;return e=e instanceof r["a"]?e:new r["a"](e,this.dateOpts),this.hasExcludeDates&&this.excludeDates.find((function(n){return"intersects"===t.excludeMode&&n.intersectsDate(e)||"includes"===t.excludeMode&&n.includesDate(e)}))}intersectsDay(e){return!this.excludesDay(e)&&(this.dates.find((function(t){return t.intersectsDay(e)}))||!1)}excludesDay(e){return this.hasExcludeDates&&this.excludeDates.find((function(t){return t.intersectsDay(e)}))}}},"234d":function(e,t,n){var r=n("e380"),a=500;function o(e){var t=r(e,(function(e){return n.size===a&&n.clear(),e})),n=t.cache;return t}e.exports=o},"23a5":function(e){e.exports=JSON.parse('{"maxSwipeTime":300,"minHorizontalSwipeDistance":60,"maxVerticalSwipeDistance":80}')},"23cb":function(e,t,n){var r=n("a691"),a=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?a(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),a=n("06cf").f,o=n("9112"),i=n("6eeb"),s=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,f,p,h,v=e.target,b=e.global,m=e.stat;if(l=b?r:m?r[v]||s(v,{}):(r[v]||{}).prototype,l)for(d in t){if(p=t[d],e.noTargetGet?(h=a(l,d),f=h&&h.value):f=l[d],n=u(b?d:v+(m?".":"#")+d,e.forced),!n&&void 0!==f){if(typeof p===typeof f)continue;c(p,f)}(e.sham||f&&f.sham)&&o(p,"sham",!0),i(l,d,p,e)}}},2411:function(e,t,n){var r=n("f909"),a=n("2ec1"),o=a((function(e,t,n,a){r(e,t,n,a)}));e.exports=o},"241c":function(e,t,n){var r=n("ca84"),a=n("7839"),o=a.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"242e":function(e,t,n){var r=n("72af"),a=n("ec69");function o(e,t){return e&&r(e,t,a)}e.exports=o},2474:function(e,t,n){var r=n("2b3e"),a=r.Uint8Array;e.exports=a},2478:function(e,t,n){var r=n("4245");function a(e){return r(this,e).get(e)}e.exports=a},"24fb":function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var o=a(r),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}function a(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=r(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},2524:function(e,t,n){var r=n("6044"),a="__lodash_hash_undefined__";function o(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?a:t,this}e.exports=o},"253c":function(e,t,n){var r=n("3729"),a=n("1310"),o="[object Arguments]";function i(e){return a(e)&&r(e)==o}e.exports=i},2593:function(e,t,n){var r=n("15f3"),a=n("c6cf"),o=a((function(e,t){return null==e?{}:r(e,t)}));e.exports=o},"26e8":function(e,t){function n(e,t){return null!=e&&t in Object(e)}e.exports=n},"28c9":function(e,t){function n(){this.__data__=[],this.size=0}e.exports=n},"29ae":function(e,t,n){"use strict";n.d(t,"a",(function(){return ae})),n.d(t,"b",(function(){return we}));n("5319");var r=n("fe1f");function a(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function o(e,t){var n=l(t);return n.formatToParts?s(n,e):c(n,e)}var i={year:0,month:1,day:2,hour:3,minute:4,second:5};function s(e,t){for(var n=e.formatToParts(t),r=[],a=0;a<n.length;a++){var o=i[n[a].type];o>=0&&(r[o]=parseInt(n[a].value,10))}return r}function c(e,t){var n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var u={};function l(e){if(!u[e]){var t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n="06/25/2014, 00:00:00"===t||"‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00"===t;u[e]=n?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return u[e]}var d=36e5,f=6e4,p={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/,timezoneIANA:/(UTC|(?:[a-zA-Z]+\/[a-zA-Z_-]+(?:\/[a-zA-Z_]+)?))$/};function h(e,t,n){var r,a,o;if(r=p.timezoneZ.exec(e),r)return 0;if(r=p.timezoneHH.exec(e),r)return o=parseInt(r[2],10),g(o)?(a=o*d,"+"===r[1]?-a:a):NaN;if(r=p.timezoneHHMM.exec(e),r){o=parseInt(r[2],10);var i=parseInt(r[3],10);return g(o,i)?(a=o*d+i*f,"+"===r[1]?-a:a):NaN}if(r=p.timezoneIANA.exec(e),r){t=new Date(t||Date.now());var s=n?t:v(t),c=b(s,e),u=n?c:m(t,c,e);return-u}return 0}function v(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}function b(e,t){var n=o(e,t),r=Date.UTC(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5]),a=e.getTime(),i=a%1e3;return a-=i>=0?i:1e3+i,r-a}function m(e,t,n){var r=e.getTime(),a=r-t,o=b(new Date(a),n);if(t===o)return t;a-=o-t;var i=b(new Date(a),n);return o===i?o:Math.max(o,i)}function g(e,t){return null==t||!(t<0||t>59)}var y=36e5,w=6e4,x=2,D={dateTimeDelimeter:/[T ]/,plainTime:/:/,timeZoneDelimeter:/[Z ]/i,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/};function j(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var n=t||{},o=null==n.additionalDigits?x:Object(r["a"])(n.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||"object"===typeof e&&"[object Date]"===Object.prototype.toString.call(e))return new Date(e.getTime());if("number"===typeof e||"[object Number]"===Object.prototype.toString.call(e))return new Date(e);if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i=O(e),s=k(i.date,o),c=s.year,u=s.restDateString,l=M(u,c);if(isNaN(l))return new Date(NaN);if(l){var d,f=l.getTime(),p=0;if(i.time&&(p=P(i.time),isNaN(p)))return new Date(NaN);if(i.timezone||n.timeZone){if(d=h(i.timezone||n.timeZone,new Date(f+p)),isNaN(d))return new Date(NaN)}else d=a(new Date(f+p)),d=a(new Date(f+p+d));return new Date(f+p+d)}return new Date(NaN)}function O(e){var t,n={},r=e.split(D.dateTimeDelimeter);if(D.plainTime.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],n.timezone=r[2],D.timeZoneDelimeter.test(n.date)&&(n.date=e.split(D.timeZoneDelimeter)[0],t=e.substr(n.date.length,e.length))),t){var a=D.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function k(e,t){var n,r=D.YYY[t],a=D.YYYYY[t];if(n=D.YYYY.exec(e)||a.exec(e),n){var o=n[1];return{year:parseInt(o,10),restDateString:e.slice(o.length)}}if(n=D.YY.exec(e)||r.exec(e),n){var i=n[1];return{year:100*parseInt(i,10),restDateString:e.slice(i.length)}}return{year:null}}function M(e,t){if(null===t)return null;var n,r,a,o;if(0===e.length)return r=new Date(0),r.setUTCFullYear(t),r;if(n=D.MM.exec(e),n)return r=new Date(0),a=parseInt(n[1],10)-1,I(t,a)?(r.setUTCFullYear(t,a),r):new Date(NaN);if(n=D.DDD.exec(e),n){r=new Date(0);var i=parseInt(n[1],10);return T(t,i)?(r.setUTCFullYear(t,0,i),r):new Date(NaN)}if(n=D.MMDD.exec(e),n){r=new Date(0),a=parseInt(n[1],10)-1;var s=parseInt(n[2],10);return I(t,a,s)?(r.setUTCFullYear(t,a,s),r):new Date(NaN)}if(n=D.Www.exec(e),n)return o=parseInt(n[1],10)-1,C(t,o)?Y(t,o):new Date(NaN);if(n=D.WwwD.exec(e),n){o=parseInt(n[1],10)-1;var c=parseInt(n[2],10)-1;return C(t,o,c)?Y(t,o,c):new Date(NaN)}return null}function P(e){var t,n,r;if(t=D.HH.exec(e),t)return n=parseFloat(t[1].replace(",",".")),$(n)?n%24*y:NaN;if(t=D.HHMM.exec(e),t)return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),$(n,r)?n%24*y+r*w:NaN;if(t=D.HHMMSS.exec(e),t){n=parseInt(t[1],10),r=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return $(n,r,a)?n%24*y+r*w+1e3*a:NaN}return null}function Y(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=r.getUTCDay()||7,o=7*t+n+1-a;return r.setUTCDate(r.getUTCDate()+o),r}var S=[31,28,31,30,31,30,31,31,30,31,30,31],E=[31,29,31,30,31,30,31,31,30,31,30,31];function _(e){return e%400===0||e%4===0&&e%100!==0}function I(e,t,n){if(t<0||t>11)return!1;if(null!=n){if(n<1)return!1;var r=_(e);if(r&&n>E[t])return!1;if(!r&&n>S[t])return!1}return!0}function T(e,t){if(t<1)return!1;var n=_(e);return!(n&&t>366)&&!(!n&&t>365)}function C(e,t,n){return!(t<0||t>52)&&(null==n||!(n<0||n>6))}function $(e,t,n){return(null==e||!(e<0||e>=25))&&((null==t||!(t<0||t>=60))&&(null==n||!(n<0||n>=60)))}var A=n("fd3a"),N=n("8c86");function F(e,t){Object(N["a"])(1,arguments);var n=t||{},a=n.locale,o=a&&a.options&&a.options.weekStartsOn,i=null==o?0:Object(r["a"])(o),s=null==n.weekStartsOn?i:Object(r["a"])(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=Object(A["a"])(e),u=c.getDay(),l=(u<s?7:0)+u-s;return c.setDate(c.getDate()-l),c.setHours(0,0,0,0),c}function z(e){return Object(N["a"])(1,arguments),F(e,{weekStartsOn:1})}function L(e){Object(N["a"])(1,arguments);var t=Object(A["a"])(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var a=z(r),o=new Date(0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);var i=z(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function H(e){Object(N["a"])(1,arguments);var t=L(e),n=new Date(0);n.setFullYear(t,0,4),n.setHours(0,0,0,0);var r=z(n);return r}var R=6048e5;function W(e){Object(N["a"])(1,arguments);var t=Object(A["a"])(e),n=z(t).getTime()-H(t).getTime();return Math.round(n/R)+1}function V(e,t){var n,a;Object(N["a"])(1,arguments);var o=Object(A["a"])(e),i=o.getFullYear(),s=null===t||void 0===t||null===(n=t.locale)||void 0===n||null===(a=n.options)||void 0===a?void 0:a.firstWeekContainsDate,c=null==s?1:Object(r["a"])(s),u=null==(null===t||void 0===t?void 0:t.firstWeekContainsDate)?c:Object(r["a"])(t.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setFullYear(i+1,0,u),l.setHours(0,0,0,0);var d=F(l,t),f=new Date(0);f.setFullYear(i,0,u),f.setHours(0,0,0,0);var p=F(f,t);return o.getTime()>=d.getTime()?i+1:o.getTime()>=p.getTime()?i:i-1}function U(e,t){Object(N["a"])(1,arguments);var n=t||{},a=n.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:Object(r["a"])(o),s=null==n.firstWeekContainsDate?i:Object(r["a"])(n.firstWeekContainsDate),c=V(e,t),u=new Date(0);u.setFullYear(c,0,s),u.setHours(0,0,0,0);var l=F(u,t);return l}var B=6048e5;function Z(e,t){Object(N["a"])(1,arguments);var n=Object(A["a"])(e),r=F(n,t).getTime()-U(n,t).getTime();return Math.round(r/B)+1}var q=6048e5;function G(e,t,n){Object(N["a"])(2,arguments);var r=F(e,n),o=F(t,n),i=r.getTime()-a(r),s=o.getTime()-a(o);return Math.round((i-s)/q)}function K(e){Object(N["a"])(1,arguments);var t=Object(A["a"])(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}function X(e){Object(N["a"])(1,arguments);var t=Object(A["a"])(e);return t.setDate(1),t.setHours(0,0,0,0),t}function J(e,t){return Object(N["a"])(1,arguments),G(K(e),X(e),t)+1}var Q=n("f7f1"),ee=n("cfe5"),te=n("f15d"),ne=n("2fa3"),re=n("9404");const ae={DATE_TIME:1,DATE:2,TIME:3},oe={1:["year","month","day","hours","minutes","seconds","milliseconds"],2:["year","month","day"],3:["hours","minutes","seconds","milliseconds"]},ie=/d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,se=/\d\d?/,ce=/\d{3}/,ue=/\d{4}/,le=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i,de=/\[([^]*?)\]/gm,fe=function(){},pe=function(e){return function(t,n,r){const a=r[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~a&&(t.month=a)}},he=["L","iso"],ve=7,be=[31,28,31,30,31,30,31,31,30,31,30,31],me={D(e){return e.day},DD(e){return Object(ne["m"])(e.day)},Do(e,t){return t.DoFn(e.day)},d(e){return e.weekday-1},dd(e){return Object(ne["m"])(e.weekday-1)},W(e,t){return t.dayNamesNarrow[e.weekday-1]},WW(e,t){return t.dayNamesShorter[e.weekday-1]},WWW(e,t){return t.dayNamesShort[e.weekday-1]},WWWW(e,t){return t.dayNames[e.weekday-1]},M(e){return e.month},MM(e){return Object(ne["m"])(e.month)},MMM(e,t){return t.monthNamesShort[e.month-1]},MMMM(e,t){return t.monthNames[e.month-1]},YY(e){return String(e.year).substr(2)},YYYY(e){return Object(ne["m"])(e.year,4)},h(e){return e.hours%12||12},hh(e){return Object(ne["m"])(e.hours%12||12)},H(e){return e.hours},HH(e){return Object(ne["m"])(e.hours)},m(e){return e.minutes},mm(e){return Object(ne["m"])(e.minutes)},s(e){return e.seconds},ss(e){return Object(ne["m"])(e.seconds)},S(e){return Math.round(e.milliseconds/100)},SS(e){return Object(ne["m"])(Math.round(e.milliseconds/10),2)},SSS(e){return Object(ne["m"])(e.milliseconds,3)},a(e,t){return e.hours<12?t.amPm[0]:t.amPm[1]},A(e,t){return e.hours<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},Z(){return"Z"},ZZ(e){const t=e.timezoneOffset;return`${t>0?"-":"+"}${Object(ne["m"])(Math.floor(Math.abs(t)/60),2)}`},ZZZ(e){const t=e.timezoneOffset;return`${t>0?"-":"+"}${Object(ne["m"])(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}`},ZZZZ(e){const t=e.timezoneOffset;return`${t>0?"-":"+"}${Object(ne["m"])(Math.floor(Math.abs(t)/60),2)}:${Object(ne["m"])(Math.abs(t)%60,2)}`}},ge={D:[se,function(e,t){e.day=t}],Do:[new RegExp(se.source+le.source),function(e,t){e.day=parseInt(t,10)}],d:[se,fe],W:[le,fe],M:[se,function(e,t){e.month=t-1}],MMM:[le,pe("monthNamesShort")],MMMM:[le,pe("monthNames")],YY:[se,function(e,t){const n=new Date,r=+n.getFullYear().toString().substr(0,2);e.year=`${t>68?r-1:r}${t}`}],YYYY:[ue,function(e,t){e.year=t}],S:[/\d/,function(e,t){e.millisecond=100*t}],SS:[/\d{2}/,function(e,t){e.millisecond=10*t}],SSS:[ce,function(e,t){e.millisecond=t}],h:[se,function(e,t){e.hour=t}],m:[se,function(e,t){e.minute=t}],s:[se,function(e,t){e.second=t}],a:[le,function(e,t,n){const r=t.toLowerCase();r===n.amPm[0]?e.isPm=!1:r===n.amPm[1]&&(e.isPm=!0)}],Z:[/[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,function(e,t){"Z"===t&&(t="+00:00");const n=(""+t).match(/([+-]|\d\d)/gi);if(n){const t=60*n[1]+parseInt(n[2],10);e.timezoneOffset="+"===n[0]?t:-t}}]};function ye(e,t){const n=(new Intl.DateTimeFormat).resolvedOptions().locale;let r;Object(re["n"])(e)?r=e:Object(re["e"])(e,"id")&&(r=e.id),r=(r||n).toLowerCase();const a=Object.keys(t),o=function(e){return a.find((function(t){return t.toLowerCase()===e}))};r=o(r)||o(r.substring(0,2))||n;const i={...t["en-IE"],...t[r],id:r};return e=Object(re["m"])(e)?Object(re["c"])(e,i):i,e}ge.DD=ge.D,ge.dd=ge.d,ge.WWWW=ge.WWW=ge.WW=ge.W,ge.MM=ge.M,ge.mm=ge.m,ge.hh=ge.H=ge.HH=ge.h,ge.ss=ge.s,ge.A=ge.a,ge.ZZZZ=ge.ZZZ=ge.ZZ=ge.Z;class we{constructor(e,{locales:t=te["a"],timezone:n}={}){const{id:r,firstDayOfWeek:a,masks:o}=ye(e,t);this.id=r,this.daysInWeek=ve,this.firstDayOfWeek=Object(re["a"])(a,1,ve),this.masks=o,this.timezone=n||void 0,this.dayNames=this.getDayNames("long"),this.dayNamesShort=this.getDayNames("short"),this.dayNamesShorter=this.dayNamesShort.map((function(e){return e.substring(0,2)})),this.dayNamesNarrow=this.getDayNames("narrow"),this.monthNames=this.getMonthNames("long"),this.monthNamesShort=this.getMonthNames("short"),this.amPm=["am","pm"],this.monthData={},this.getMonthComps=this.getMonthComps.bind(this),this.parse=this.parse.bind(this),this.format=this.format.bind(this),this.toPage=this.toPage.bind(this)}format(e,t){var n=this;if(e=this.normalizeDate(e),!e)return"";t=this.normalizeMasks(t)[0];const r=[];t=t.replace(de,(function(e,t){return r.push(t),"??"}));const a=/Z$/.test(t)?"utc":this.timezone,o=this.getDateParts(e,a);return t=t.replace(ie,(function(e){return e in me?me[e](o,n):e.slice(1,e.length-1)})),t.replace(/\?\?/g,(function(){return r.shift()}))}parse(e,t){var n=this;const r=this.normalizeMasks(t);return r.map((function(t){if("string"!==typeof t)throw new Error("Invalid mask in fecha.parse");let r=e;if(r.length>1e3)return!1;let a=!0;const o={};if(t.replace(ie,(function(e){if(ge[e]){const t=ge[e],i=r.search(t[0]);~i?r.replace(t[0],(function(e){return t[1](o,e,n),r=r.substr(i+e.length),e})):a=!1}return ge[e]?"":e.slice(1,e.length-1)})),!a)return!1;const i=new Date;let s;return!0===o.isPm&&null!=o.hour&&12!==+o.hour?o.hour=+o.hour+12:!1===o.isPm&&12===+o.hour&&(o.hour=0),null!=o.timezoneOffset?(o.minute=+(o.minute||0)-+o.timezoneOffset,s=new Date(Date.UTC(o.year||i.getFullYear(),o.month||0,o.day||1,o.hour||0,o.minute||0,o.second||0,o.millisecond||0))):s=n.getDateFromParts({year:o.year||i.getFullYear(),month:(o.month||0)+1,day:o.day||1,hours:o.hour||0,minutes:o.minute||0,seconds:o.second||0,milliseconds:o.millisecond||0}),s})).find((function(e){return e}))||new Date(e)}normalizeMasks(e){var t=this;return(Object(ne["b"])(e)&&e||[Object(re["n"])(e)&&e||"YYYY-MM-DD"]).map((function(e){return he.reduce((function(e,n){return e.replace(n,t.masks[n]||"")}),e)}))}normalizeDate(e,t={}){let n=null,{type:r,fillDate:a}=t;const{mask:o,patch:i,time:s}=t,c="auto"===r||!r;if(Object(re["l"])(e)?(r="number",n=new Date(+e)):Object(re["n"])(e)?(r="string",n=e?this.parse(e,o||"iso"):null):Object(re["m"])(e)?(r="object",n=this.getDateFromParts(e)):(r="date",n=Object(re["j"])(e)?new Date(e.getTime()):null),n&&i){a=null==a?new Date:this.normalizeDate(a);const e={...this.getDateParts(a),...Object(re["t"])(this.getDateParts(n),oe[i])};n=this.getDateFromParts(e)}return c&&(t.type=r),n&&!isNaN(n.getTime())?(s&&(n=this.adjustTimeForDate(n,{timeAdjust:s})),n):null}denormalizeDate(e,{type:t,mask:n}={}){switch(t){case"number":return e?e.getTime():NaN;case"string":return e?this.format(e,n||"iso"):"";default:return e?new Date(e):null}}adjustTimeForDate(e,{timeAdjust:t}){if(t){const n=this.getDateParts(e);if("now"===t){const e=this.getDateParts(new Date);n.hours=e.hours,n.minutes=e.minutes,n.seconds=e.seconds,n.milliseconds=e.milliseconds}else{const e=new Date(`2000-01-01T${t}Z`);n.hours=e.getUTCHours(),n.minutes=e.getUTCMinutes(),n.seconds=e.getUTCSeconds(),n.milliseconds=e.getUTCMilliseconds()}e=this.getDateFromParts(n)}return e}normalizeDates(e,t){return t=t||{},t.locale=this,(Object(re["h"])(e)?e:[e]).map((function(e){return e&&(e instanceof ee["a"]?e:new ee["a"](e,t))})).filter((function(e){return e}))}getDateParts(e,t=this.timezone){if(!e)return null;let n=e;if(t){const r=new Date(e.toLocaleString("en-US",{timeZone:t}));r.setMilliseconds(e.getMilliseconds());const a=r.getTime()-e.getTime();n=new Date(e.getTime()+a)}const r=n.getMilliseconds(),a=n.getSeconds(),o=n.getMinutes(),i=n.getHours(),s=n.getMonth()+1,c=n.getFullYear(),u=this.getMonthComps(s,c),l=n.getDate(),d=u.days-l+1,f=n.getDay()+1,p=Math.floor((l-1)/7+1),h=Math.floor((u.days-l)/7+1),v=Math.ceil((l+Math.abs(u.firstWeekday-u.firstDayOfWeek))/7),b=u.weeks-v+1,m={milliseconds:r,seconds:a,minutes:o,hours:i,day:l,dayFromEnd:d,weekday:f,weekdayOrdinal:p,weekdayOrdinalFromEnd:h,week:v,weekFromEnd:b,month:s,year:c,date:e,isValid:!0};return m.timezoneOffset=this.getTimezoneOffset(m),m}getDateFromParts(e){if(!e)return null;const t=new Date,{year:n=t.getFullYear(),month:r=t.getMonth()+1,day:a=t.getDate(),hours:o=0,minutes:i=0,seconds:s=0,milliseconds:c=0}=e;if(this.timezone){const e=`${Object(ne["m"])(n,4)}-${Object(ne["m"])(r,2)}-${Object(ne["m"])(a,2)}T${Object(ne["m"])(o,2)}:${Object(ne["m"])(i,2)}:${Object(ne["m"])(s,2)}.${Object(ne["m"])(c,3)}`;return j(e,{timeZone:this.timezone})}return new Date(n,r-1,a,o,i,s,c)}getTimezoneOffset(e){const{year:t,month:n,day:r,hours:a=0,minutes:o=0,seconds:i=0,milliseconds:s=0}=e;let c;const u=new Date(Date.UTC(t,n-1,r,a,o,i,s));if(this.timezone){const e=`${Object(ne["m"])(t,4)}-${Object(ne["m"])(n,2)}-${Object(ne["m"])(r,2)}T${Object(ne["m"])(a,2)}:${Object(ne["m"])(o,2)}:${Object(ne["m"])(i,2)}.${Object(ne["m"])(s,3)}`;c=j(e,{timeZone:this.timezone})}else c=new Date(t,n-1,r,a,o,i,s);return(c-u)/6e4}toPage(e,t){return Object(re["l"])(e)?Object(ne["a"])(t,e):Object(re["n"])(e)?this.getDateParts(this.normalizeDate(e)):Object(re["j"])(e)?this.getDateParts(e):Object(re["m"])(e)?e:null}getMonthDates(e=2e3){const t=[];for(let n=0;n<12;n++)t.push(new Date(e,n,15));return t}getMonthNames(e){const t=new Intl.DateTimeFormat(this.id,{month:e,timezome:"UTC"});return this.getMonthDates().map((function(e){return t.format(e)}))}getWeekdayDates(e=this.firstDayOfWeek){const t=[],n=2020,r=1,a=5+e-1;for(let o=0;o<ve;o++)t.push(this.getDateFromParts({year:n,month:r,day:a+o,hours:12}));return t}getDayNames(e){const t=new Intl.DateTimeFormat(this.id,{weekday:e,timeZone:this.timezone});return this.getWeekdayDates(1).map((function(e){return t.format(e)}))}getMonthComps(e,t){const n=`${e}-${t}`;let r=this.monthData[n];if(!r){const a=t%4===0&&t%100!==0||t%400===0,o=new Date(t,e-1,1),i=o.getDay()+1,s=2===e&&a?29:be[e-1],c=this.firstDayOfWeek-1,u=J(o,{weekStartsOn:c}),l=[],d=[];for(let e=0;e<u;e++){const t=Object(Q["a"])(o,7*e);l.push(Z(t,{weekStartsOn:c})),d.push(W(t))}r={firstDayOfWeek:this.firstDayOfWeek,inLeapYear:a,firstWeekday:i,days:s,weeks:u,month:e,year:t,weeknumbers:l,isoWeeknumbers:d},this.monthData[n]=r}return r}getThisMonthComps(){const{month:e,year:t}=this.getDateParts(new Date);return this.getMonthComps(e,t)}getPrevMonthComps(e,t){return 1===e?this.getMonthComps(12,t-1):this.getMonthComps(e-1,t)}getNextMonthComps(e,t){return 12===e?this.getMonthComps(1,t+1):this.getMonthComps(e+1,t)}getDayId(e){return this.format(e,"YYYY-MM-DD")}getCalendarDays({weeks:e,monthComps:t,prevMonthComps:n,nextMonthComps:r}){var a=this;const o=[],{firstDayOfWeek:i,firstWeekday:s,isoWeeknumbers:c,weeknumbers:u}=t,l=s+(s<i?ve:0)-i;let d=!0,f=!1,p=!1;const h=new Intl.DateTimeFormat(this.id,{weekday:"long",year:"numeric",month:"long",day:"numeric"});let v=n.days-l+1,b=n.days-v+1,m=Math.floor((v-1)/ve+1),g=1,y=n.weeks,w=1,x=n.month,D=n.year;const j=new Date,O=j.getDate(),k=j.getMonth()+1,M=j.getFullYear(),P=function(e,t,n){return function(r,o,i,s){return a.normalizeDate({year:e,month:t,day:n,hours:r,minutes:o,seconds:i,milliseconds:s})}};for(let Y=1;Y<=e;Y++){for(let n=1,a=i;n<=ve;n++,a+=a===ve?1-ve:1){d&&a===s&&(v=1,b=t.days,m=Math.floor((v-1)/ve+1),g=Math.floor((t.days-v)/ve+1),y=1,w=t.weeks,x=t.month,D=t.year,d=!1,f=!0);const i=P(D,x,v),l={start:i(0,0,0),end:i(23,59,59,999)},j=l.start,S=`${Object(ne["m"])(D,4)}-${Object(ne["m"])(x,2)}-${Object(ne["m"])(v,2)}`,E=n,_=ve-n,I=u[Y-1],T=c[Y-1],C=v===O&&x===k&&D===M,$=f&&1===v,A=f&&v===t.days,N=1===Y,F=Y===e,z=1===n,L=n===ve;o.push({id:S,label:v.toString(),ariaLabel:h.format(new Date(D,x-1,v)),day:v,dayFromEnd:b,weekday:a,weekdayPosition:E,weekdayPositionFromEnd:_,weekdayOrdinal:m,weekdayOrdinalFromEnd:g,week:y,weekFromEnd:w,weeknumber:I,isoWeeknumber:T,month:x,year:D,dateFromTime:i,date:j,range:l,isToday:C,isFirstDay:$,isLastDay:A,inMonth:f,inPrevMonth:d,inNextMonth:p,onTop:N,onBottom:F,onLeft:z,onRight:L,classes:["id-"+S,"day-"+v,"day-from-end-"+b,"weekday-"+a,"weekday-position-"+E,"weekday-ordinal-"+m,"weekday-ordinal-from-end-"+g,"week-"+y,"week-from-end-"+w,{"is-today":C,"is-first-day":$,"is-last-day":A,"in-month":f,"in-prev-month":d,"in-next-month":p,"on-top":N,"on-bottom":F,"on-left":z,"on-right":L}]}),f&&A?(f=!1,p=!0,v=1,b=r.days,m=1,g=Math.floor((r.days-v)/ve+1),y=1,w=r.weeks,x=r.month,D=r.year):(v++,b--,m=Math.floor((v-1)/ve+1),g=Math.floor((t.days-v)/ve+1))}y++,w--}return o}}},"29f3":function(e,t){var n=Object.prototype,r=n.toString;function a(e){return r.call(e)}e.exports=a},"2a4d":function(e,t,n){var r=n("7dfe");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("99a6e87a",r,!0,{sourceMap:!1,shadowMode:!1})},"2af9":function(e,t,n){"use strict";n.r(t),n.d(t,"Calendar",(function(){return Sn})),n.d(t,"CalendarNav",(function(){return Jt})),n.d(t,"DatePicker",(function(){return Xn})),n.d(t,"Popover",(function(){return bt}));n("ddb0");var r=n("f7f1"),a=n("fe1f"),o=n("fd3a"),i=n("8c86");function s(e,t){Object(i["a"])(2,arguments);var n=Object(o["a"])(e),r=Object(a["a"])(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var s=n.getDate(),c=new Date(n.getTime());c.setMonth(n.getMonth()+r+1,0);var u=c.getDate();return s>=u?c:(n.setFullYear(c.getFullYear(),c.getMonth(),s),n)}function c(e,t){Object(i["a"])(2,arguments);var n=Object(a["a"])(t);return s(e,12*n)}function u(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function l(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function d(e){var t=l(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function f(e){var t=l(e).Element;return e instanceof t||e instanceof Element}function p(e){var t=l(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function h(e){var t=l(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function v(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function b(e){return e!==l(e)&&p(e)?v(e):d(e)}function m(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){return((f(e)?e.ownerDocument:e.document)||window.document).documentElement}function y(e){return u(g(e)).left+d(e).scrollLeft}function w(e){return l(e).getComputedStyle(e)}function x(e){var t=w(e),n=t.overflow,r=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function D(e,t,n){void 0===n&&(n=!1);var r=g(t),a=u(e),o=p(t),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&(("body"!==m(t)||x(r))&&(i=b(t)),p(t)?(s=u(t),s.x+=t.clientLeft,s.y+=t.clientTop):r&&(s.x=y(r))),{x:a.left+i.scrollLeft-s.x,y:a.top+i.scrollTop-s.y,width:a.width,height:a.height}}function j(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function O(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||e.host||g(e)}function k(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:p(e)&&x(e)?e:k(O(e))}function M(e,t){void 0===t&&(t=[]);var n=k(e),r="body"===m(n),a=l(n),o=r?[a].concat(a.visualViewport||[],x(n)?n:[]):n,i=t.concat(o);return r?i:i.concat(M(O(o)))}function P(e){return["table","td","th"].indexOf(m(e))>=0}function Y(e){if(!p(e)||"fixed"===w(e).position)return null;var t=e.offsetParent;if(t){var n=g(t);if("body"===m(t)&&"static"===w(t).position&&"static"!==w(n).position)return n}return t}function S(e){var t=O(e);while(p(t)&&["html","body"].indexOf(m(t))<0){var n=w(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}function E(e){var t=l(e),n=Y(e);while(n&&P(n)&&"static"===w(n).position)n=Y(n);return n&&"body"===m(n)&&"static"===w(n).position?t:n||S(e)||t}var _="top",I="bottom",T="right",C="left",$="auto",A=[_,I,T,C],N="start",F="end",z="clippingParents",L="viewport",H="popper",R="reference",W=A.reduce((function(e,t){return e.concat([t+"-"+N,t+"-"+F])}),[]),V=[].concat(A,[$]).reduce((function(e,t){return e.concat([t,t+"-"+N,t+"-"+F])}),[]),U="beforeRead",B="read",Z="afterRead",q="beforeMain",G="main",K="afterMain",X="beforeWrite",J="write",Q="afterWrite",ee=[U,B,Z,q,G,K,X,J,Q];function te(e){var t=new Map,n=new Set,r=[];function a(e){n.add(e.name);var o=[].concat(e.requires||[],e.requiresIfExists||[]);o.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&a(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||a(e)})),r}function ne(e){var t=te(e);return ee.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function re(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function ae(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var oe={placement:"bottom",modifiers:[],strategy:"absolute"};function ie(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function se(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,a=t.defaultOptions,o=void 0===a?oe:a;return function(e,t,n){void 0===n&&(n=o);var a={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},oe),o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,c={state:a,setOptions:function(n){l(),a.options=Object.assign(Object.assign(Object.assign({},o),a.options),n),a.scrollParents={reference:f(e)?M(e):e.contextElement?M(e.contextElement):[],popper:M(t)};var i=ne(ae([].concat(r,a.options.modifiers)));return a.orderedModifiers=i.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!s){var e=a.elements,t=e.reference,n=e.popper;if(ie(t,n)){a.rects={reference:D(t,E(n),"fixed"===a.options.strategy),popper:j(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(e){return a.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<a.orderedModifiers.length;r++)if(!0!==a.reset){var o=a.orderedModifiers[r],i=o.fn,u=o.options,l=void 0===u?{}:u,d=o.name;"function"===typeof i&&(a=i({state:a,options:l,name:d,instance:c})||a)}else a.reset=!1,r=-1}}},update:re((function(){return new Promise((function(e){c.forceUpdate(),e(a)}))})),destroy:function(){l(),s=!0}};if(!ie(e,t))return c;function u(){a.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var s=o({state:a,name:t,instance:c,options:r}),u=function(){};i.push(s||u)}}))}function l(){i.forEach((function(e){return e()})),i=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ce={passive:!0};function ue(e){var t=e.state,n=e.instance,r=e.options,a=r.scroll,o=void 0===a||a,i=r.resize,s=void 0===i||i,c=l(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach((function(e){e.addEventListener("scroll",n.update,ce)})),s&&c.addEventListener("resize",n.update,ce),function(){o&&u.forEach((function(e){e.removeEventListener("scroll",n.update,ce)})),s&&c.removeEventListener("resize",n.update,ce)}}var le={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ue,data:{}};function de(e){return e.split("-")[0]}function fe(e){return e.split("-")[1]}function pe(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function he(e){var t,n=e.reference,r=e.element,a=e.placement,o=a?de(a):null,i=a?fe(a):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(o){case _:t={x:s,y:n.y-r.height};break;case I:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case C:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=o?pe(o):null;if(null!=u){var l="y"===u?"height":"width";switch(i){case N:t[u]=Math.floor(t[u])-Math.floor(n[l]/2-r[l]/2);break;case F:t[u]=Math.floor(t[u])+Math.ceil(n[l]/2-r[l]/2);break;default:}}return t}function ve(e){var t=e.state,n=e.name;t.modifiersData[n]=he({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var be={name:"popperOffsets",enabled:!0,phase:"read",fn:ve,data:{}},me={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ge(e){var t=e.x,n=e.y,r=window,a=r.devicePixelRatio||1;return{x:Math.round(t*a)/a||0,y:Math.round(n*a)/a||0}}function ye(e){var t,n=e.popper,r=e.popperRect,a=e.placement,o=e.offsets,i=e.position,s=e.gpuAcceleration,c=e.adaptive,u=ge(o),d=u.x,f=u.y,p=o.hasOwnProperty("x"),h=o.hasOwnProperty("y"),v=C,b=_,m=window;if(c){var y=E(n);y===l(n)&&(y=g(n)),a===_&&(b=I,f-=y.clientHeight-r.height,f*=s?1:-1),a===C&&(v=T,d-=y.clientWidth-r.width,d*=s?1:-1)}var w,x=Object.assign({position:i},c&&me);return s?Object.assign(Object.assign({},x),{},(w={},w[b]=h?"0":"",w[v]=p?"0":"",w.transform=(m.devicePixelRatio||1)<2?"translate("+d+"px, "+f+"px)":"translate3d("+d+"px, "+f+"px, 0)",w)):Object.assign(Object.assign({},x),{},(t={},t[b]=h?f+"px":"",t[v]=p?d+"px":"",t.transform="",t))}function we(e){var t=e.state,n=e.options,r=n.gpuAcceleration,a=void 0===r||r,o=n.adaptive,i=void 0===o||o,s={placement:de(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),ye(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),ye(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})}var xe={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:we,data:{}};function De(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},a=t.elements[e];p(a)&&m(a)&&(Object.assign(a.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)})))}))}function je(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],a=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),i=o.reduce((function(e,t){return e[t]="",e}),{});p(r)&&m(r)&&(Object.assign(r.style,i),Object.keys(a).forEach((function(e){r.removeAttribute(e)})))}))}}var Oe={name:"applyStyles",enabled:!0,phase:"write",fn:De,effect:je,requires:["computeStyles"]};function ke(e,t,n){var r=de(e),a=[C,_].indexOf(r)>=0?-1:1,o="function"===typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,i=o[0],s=o[1];return i=i||0,s=(s||0)*a,[C,T].indexOf(r)>=0?{x:s,y:i}:{x:i,y:s}}function Me(e){var t=e.state,n=e.options,r=e.name,a=n.offset,o=void 0===a?[0,0]:a,i=V.reduce((function(e,n){return e[n]=ke(n,t.rects,o),e}),{}),s=i[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=i}var Pe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Me},Ye={left:"right",right:"left",bottom:"top",top:"bottom"};function Se(e){return e.replace(/left|right|bottom|top/g,(function(e){return Ye[e]}))}var Ee={start:"end",end:"start"};function _e(e){return e.replace(/start|end/g,(function(e){return Ee[e]}))}function Ie(e){var t=l(e),n=g(e),r=t.visualViewport,a=n.clientWidth,o=n.clientHeight,i=0,s=0;return r&&(a=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,s=r.offsetTop)),{width:a,height:o,x:i+y(e),y:s}}function Te(e){var t=g(e),n=d(e),r=e.ownerDocument.body,a=Math.max(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Math.max(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),i=-n.scrollLeft+y(e),s=-n.scrollTop;return"rtl"===w(r||t).direction&&(i+=Math.max(t.clientWidth,r?r.clientWidth:0)-a),{width:a,height:o,x:i,y:s}}function Ce(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(h(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $e(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ae(e){var t=u(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ne(e,t){return t===L?$e(Ie(e)):p(t)?Ae(t):$e(Te(g(e)))}function Fe(e){var t=M(O(e)),n=["absolute","fixed"].indexOf(w(e).position)>=0,r=n&&p(e)?E(e):e;return f(r)?t.filter((function(e){return f(e)&&Ce(e,r)&&"body"!==m(e)})):[]}function ze(e,t,n){var r="clippingParents"===t?Fe(e):[].concat(t),a=[].concat(r,[n]),o=a[0],i=a.reduce((function(t,n){var r=Ne(e,n);return t.top=Math.max(r.top,t.top),t.right=Math.min(r.right,t.right),t.bottom=Math.min(r.bottom,t.bottom),t.left=Math.max(r.left,t.left),t}),Ne(e,o));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Le(){return{top:0,right:0,bottom:0,left:0}}function He(e){return Object.assign(Object.assign({},Le()),e)}function Re(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function We(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,o=n.boundary,i=void 0===o?z:o,s=n.rootBoundary,c=void 0===s?L:s,l=n.elementContext,d=void 0===l?H:l,p=n.altBoundary,h=void 0!==p&&p,v=n.padding,b=void 0===v?0:v,m=He("number"!==typeof b?b:Re(b,A)),y=d===H?R:H,w=e.elements.reference,x=e.rects.popper,D=e.elements[h?y:d],j=ze(f(D)?D:D.contextElement||g(e.elements.popper),i,c),O=u(w),k=he({reference:O,element:x,strategy:"absolute",placement:a}),M=$e(Object.assign(Object.assign({},x),k)),P=d===H?M:O,Y={top:j.top-P.top+m.top,bottom:P.bottom-j.bottom+m.bottom,left:j.left-P.left+m.left,right:P.right-j.right+m.right},S=e.modifiersData.offset;if(d===H&&S){var E=S[a];Object.keys(Y).forEach((function(e){var t=[T,I].indexOf(e)>=0?1:-1,n=[_,I].indexOf(e)>=0?"y":"x";Y[e]+=E[n]*t}))}return Y}function Ve(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=n.boundary,o=n.rootBoundary,i=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?V:c,l=fe(r),d=l?s?W:W.filter((function(e){return fe(e)===l})):A,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=We(e,{placement:n,boundary:a,rootBoundary:o,padding:i})[de(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Ue(e){if(de(e)===$)return[];var t=Se(e);return[_e(e),t,_e(t)]}function Be(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,o=void 0===a||a,i=n.altAxis,s=void 0===i||i,c=n.fallbackPlacements,u=n.padding,l=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,h=void 0===p||p,v=n.allowedAutoPlacements,b=t.options.placement,m=de(b),g=m===b,y=c||(g||!h?[Se(b)]:Ue(b)),w=[b].concat(y).reduce((function(e,n){return e.concat(de(n)===$?Ve(t,{placement:n,boundary:l,rootBoundary:d,padding:u,flipVariations:h,allowedAutoPlacements:v}):n)}),[]),x=t.rects.reference,D=t.rects.popper,j=new Map,O=!0,k=w[0],M=0;M<w.length;M++){var P=w[M],Y=de(P),S=fe(P)===N,E=[_,I].indexOf(Y)>=0,A=E?"width":"height",F=We(t,{placement:P,boundary:l,rootBoundary:d,altBoundary:f,padding:u}),z=E?S?T:C:S?I:_;x[A]>D[A]&&(z=Se(z));var L=Se(z),H=[];if(o&&H.push(F[Y]<=0),s&&H.push(F[z]<=0,F[L]<=0),H.every((function(e){return e}))){k=P,O=!1;break}j.set(P,H)}if(O)for(var R=h?3:1,W=function(e){var t=w.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},V=R;V>0;V--){var U=W(V);if("break"===U)break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}}var Ze={name:"flip",enabled:!0,phase:"main",fn:Be,requiresIfExists:["offset"],data:{_skip:!1}};function qe(e){return"x"===e?"y":"x"}function Ge(e,t,n){return Math.max(e,Math.min(t,n))}function Ke(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,o=void 0===a||a,i=n.altAxis,s=void 0!==i&&i,c=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,f=n.tether,p=void 0===f||f,h=n.tetherOffset,v=void 0===h?0:h,b=We(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),m=de(t.placement),g=fe(t.placement),y=!g,w=pe(m),x=qe(w),D=t.modifiersData.popperOffsets,O=t.rects.reference,k=t.rects.popper,M="function"===typeof v?v(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):v,P={x:0,y:0};if(D){if(o){var Y="y"===w?_:C,S="y"===w?I:T,$="y"===w?"height":"width",A=D[w],F=D[w]+b[Y],z=D[w]-b[S],L=p?-k[$]/2:0,H=g===N?O[$]:k[$],R=g===N?-k[$]:-O[$],W=t.elements.arrow,V=p&&W?j(W):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Le(),B=U[Y],Z=U[S],q=Ge(0,O[$],V[$]),G=y?O[$]/2-L-q-B-M:H-q-B-M,K=y?-O[$]/2+L+q+Z+M:R+q+Z+M,X=t.elements.arrow&&E(t.elements.arrow),J=X?"y"===w?X.clientTop||0:X.clientLeft||0:0,Q=t.modifiersData.offset?t.modifiersData.offset[t.placement][w]:0,ee=D[w]+G-Q-J,te=D[w]+K-Q,ne=Ge(p?Math.min(F,ee):F,A,p?Math.max(z,te):z);D[w]=ne,P[w]=ne-A}if(s){var re="x"===w?_:C,ae="x"===w?I:T,oe=D[x],ie=oe+b[re],se=oe-b[ae],ce=Ge(ie,oe,se);D[x]=ce,P[x]=ce-oe}t.modifiersData[r]=P}}var Xe={name:"preventOverflow",enabled:!0,phase:"main",fn:Ke,requiresIfExists:["offset"]};function Je(e){var t,n=e.state,r=e.name,a=n.elements.arrow,o=n.modifiersData.popperOffsets,i=de(n.placement),s=pe(i),c=[C,T].indexOf(i)>=0,u=c?"height":"width";if(a&&o){var l=n.modifiersData[r+"#persistent"].padding,d=j(a),f="y"===s?_:C,p="y"===s?I:T,h=n.rects.reference[u]+n.rects.reference[s]-o[s]-n.rects.popper[u],v=o[s]-n.rects.reference[s],b=E(a),m=b?"y"===s?b.clientHeight||0:b.clientWidth||0:0,g=h/2-v/2,y=l[f],w=m-d[u]-l[p],x=m/2-d[u]/2+g,D=Ge(y,x,w),O=s;n.modifiersData[r]=(t={},t[O]=D,t.centerOffset=D-x,t)}}function Qe(e){var t=e.state,n=e.options,r=e.name,a=n.element,o=void 0===a?"[data-popper-arrow]":a,i=n.padding,s=void 0===i?0:i;null!=o&&("string"!==typeof o||(o=t.elements.popper.querySelector(o),o))&&Ce(t.elements.popper,o)&&(t.elements.arrow=o,t.modifiersData[r+"#persistent"]={padding:He("number"!==typeof s?s:Re(s,A))})}var et={name:"arrow",enabled:!0,phase:"main",fn:Je,effect:Qe,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function tt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function nt(e){return[_,T,I,C].some((function(t){return e[t]>=0}))}function rt(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,i=We(t,{elementContext:"reference"}),s=We(t,{altBoundary:!0}),c=tt(i,r),u=tt(s,a,o),l=nt(c),d=nt(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var at,ot,it={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rt},st=[le,be,xe,Oe,Pe,Ze,Xe,et,it],ct=se({defaultModifiers:st}),ut=n("2fa3"),lt=n("0733"),dt=n("9404"),ft={name:"Popover",render(e){return e("div",{class:["vc-popover-content-wrapper",{"is-interactive":this.isInteractive}],ref:"popover"},[e("transition",{props:{name:this.transition,appear:!0},on:{beforeEnter:this.beforeEnter,afterEnter:this.afterEnter,beforeLeave:this.beforeLeave,afterLeave:this.afterLeave}},[this.isVisible&&e("div",{attrs:{tabindex:-1},class:["vc-popover-content","direction-"+this.direction,this.contentClass]},[this.content,e("span",{class:["vc-popover-caret","direction-"+this.direction,"align-"+this.alignment]})])])])},props:{id:{type:String,required:!0},contentClass:String},data(){return{ref:null,opts:null,data:null,transition:"slide-fade",placement:"bottom",positionFixed:!1,modifiers:[],isInteractive:!1,isHovered:!1,isFocused:!1,showDelay:0,hideDelay:110,autoHide:!1,popperEl:null}},computed:{content(){var e=this;return Object(dt["k"])(this.$scopedSlots.default)&&this.$scopedSlots.default({direction:this.direction,alignment:this.alignment,data:this.data,updateLayout:this.setupPopper,hide:function(t){return e.hide(t)}})||this.$slots.default},popperOptions(){return{placement:this.placement,strategy:this.positionFixed?"fixed":"absolute",modifiers:[{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:this.onPopperUpdate},...this.modifiers||[]],onFirstUpdate:this.onPopperUpdate}},isVisible(){return!(!this.ref||!this.content)},direction(){return this.placement&&this.placement.split("-")[0]||"bottom"},alignment(){const e="left"===this.direction||"right"===this.direction;let t=this.placement.split("-");return t=t.length>1?t[1]:"",["start","top","left"].includes(t)?e?"top":"left":["end","bottom","right"].includes(t)?e?"bottom":"right":e?"middle":"center"},state(){return this.$popovers[this.id]}},watch:{opts(e,t){t&&t.callback&&t.callback({...t,completed:!e,reason:e?"Overridden by action":null})}},mounted(){this.popoverEl=this.$refs.popover,this.addEvents()},beforeDestroy(){this.removeEvents()},methods:{addEvents(){Object(ut["k"])(this.popoverEl,"click",this.onClick),Object(ut["k"])(this.popoverEl,"mouseover",this.onMouseOver),Object(ut["k"])(this.popoverEl,"mouseleave",this.onMouseLeave),Object(ut["k"])(this.popoverEl,"focusin",this.onFocusIn),Object(ut["k"])(this.popoverEl,"focusout",this.onFocusOut),Object(ut["k"])(document,"keydown",this.onDocumentKeydown),this.removeDocHandler=Object(lt["b"])(document,this.onDocumentClick),Object(ut["k"])(document,"show-popover",this.onDocumentShowPopover),Object(ut["k"])(document,"hide-popover",this.onDocumentHidePopover),Object(ut["k"])(document,"toggle-popover",this.onDocumentTogglePopover),Object(ut["k"])(document,"update-popover",this.onDocumentUpdatePopover)},removeEvents(){Object(ut["j"])(this.popoverEl,"click",this.onClick),Object(ut["j"])(this.popoverEl,"mouseover",this.onMouseOver),Object(ut["j"])(this.popoverEl,"mouseleave",this.onMouseLeave),Object(ut["j"])(this.popoverEl,"focusin",this.onFocusIn),Object(ut["j"])(this.popoverEl,"focusout",this.onFocusOut),Object(ut["j"])(document,"keydown",this.onDocumentKeydown),this.removeDocHandler&&this.removeDocHandler(),Object(ut["j"])(document,"show-popover",this.onDocumentShowPopover),Object(ut["j"])(document,"hide-popover",this.onDocumentHidePopover),Object(ut["j"])(document,"toggle-popover",this.onDocumentTogglePopover),Object(ut["j"])(document,"update-popover",this.onDocumentUpdatePopover)},onClick(e){e.stopPropagation()},onMouseOver(){this.isHovered=!0,this.isInteractive&&this.show()},onMouseLeave(){this.isHovered=!1,!this.autoHide||this.isFocused||this.ref&&this.ref===document.activeElement||this.hide()},onFocusIn(){this.isFocused=!0,this.isInteractive&&this.show()},onFocusOut(e){e.relatedTarget&&Object(ut["e"])(this.popoverEl,e.relatedTarget)||(this.isFocused=!1,!this.isHovered&&this.autoHide&&this.hide())},onDocumentClick(e){this.$refs.popover&&this.ref&&(Object(ut["e"])(this.popoverEl,e.target)||Object(ut["e"])(this.ref,e.target)||this.hide())},onDocumentKeydown(e){"Esc"!==e.key&&"Escape"!==e.key||this.hide()},onDocumentShowPopover({detail:e}){e.id&&e.id===this.id&&this.show(e)},onDocumentHidePopover({detail:e}){e.id&&e.id===this.id&&this.hide(e)},onDocumentTogglePopover({detail:e}){e.id&&e.id===this.id&&this.toggle(e)},onDocumentUpdatePopover({detail:e}){e.id&&e.id===this.id&&this.update(e)},show(e={}){var t=this;e.action="show";const n=e.ref||this.ref,r=e.showDelay>=0?e.showDelay:this.showDelay;if(!n)return void(e.callback&&e.callback({completed:!1,reason:"Invalid reference element provided"}));clearTimeout(this.timeout),this.opts=e;const a=function(){Object.assign(t,e),t.setupPopper(),t.opts=null};r>0?this.timeout=setTimeout((function(){return a()}),r):a()},hide(e={}){var t=this;e.action="hide";const n=e.ref||this.ref,r=e.hideDelay>=0?e.hideDelay:this.hideDelay;if(!this.ref||n!==this.ref)return void(e.callback&&e.callback({...e,completed:!1,reason:this.ref?"Invalid reference element provided":"Popover already hidden"}));const a=function(){t.ref=null,t.opts=null};clearTimeout(this.timeout),this.opts=e,r>0?this.timeout=setTimeout(a,r):a()},toggle(e={}){this.isVisible&&e.ref===this.ref?this.hide(e):this.show(e)},update(e={}){Object.assign(this,e),this.setupPopper()},setupPopper(){var e=this;this.$nextTick((function(){e.ref&&e.$refs.popover&&(e.popper&&e.popper.reference!==e.ref&&e.destroyPopper(),e.popper?e.popper.update():e.popper=ct(e.ref,e.popoverEl,e.popperOptions))}))},onPopperUpdate(e){e.placement?this.placement=e.placement:e.state&&(this.placement=e.state.placement)},beforeEnter(e){this.$emit("beforeShow",e)},afterEnter(e){this.$emit("afterShow",e)},beforeLeave(e){this.$emit("beforeHide",e)},afterLeave(e){this.destroyPopper(),this.$emit("afterHide",e)},destroyPopper(){this.popper&&(this.popper.destroy(),this.popper=null)}}},pt=ft;n("d99e");function ht(e,t,n,r,a,o,i,s){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):a&&(c=s?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:u}}var vt=ht(pt,at,ot,!1,null,"05016e86",null),bt=vt.exports,mt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-day-popover-row"},[e.indicator?n("div",{staticClass:"vc-day-popover-row-indicator"},[n("span",{class:e.indicator.class,style:e.indicator.style})]):e._e(),n("div",{staticClass:"vc-day-popover-row-content"},[e._t("default",[e._v(e._s(e.attribute.popover?e.attribute.popover.label:"No content provided"))])],2)])},gt=[],yt=n("51ec");const wt={inject:["sharedState"],mixins:[yt["a"]],computed:{masks(){return this.sharedState.masks},theme(){return this.sharedState.theme},locale(){return this.sharedState.locale},dayPopoverId(){return this.sharedState.dayPopoverId}},methods:{format(e,t){return this.locale.format(e,t)},pageForDate(e){return this.locale.getDateParts(this.locale.normalizeDate(e))}}},xt=["base","start","end","startEnd"],Dt=["class","contentClass","style","contentStyle","color","fillMode"],jt={color:"blue",isDark:!1,highlight:{base:{fillMode:"light"},start:{fillMode:"solid"},end:{fillMode:"solid"}},dot:{base:{fillMode:"solid"},start:{fillMode:"solid"},end:{fillMode:"solid"}},bar:{base:{fillMode:"solid"},start:{fillMode:"solid"},end:{fillMode:"solid"}},content:{base:{},start:{},end:{}}};class Ot{constructor(e){Object.assign(this,jt,e)}normalizeAttr({config:e,type:t}){let n=this.color,r={};const a=this[t];if(!0===e||Object(dt["n"])(e))n=Object(dt["n"])(e)?e:n,r={...a};else{if(!Object(dt["m"])(e))return null;r=Object(dt["f"])(e,xt)?{...e}:{base:{...e},start:{...e},end:{...e}}}return Object(dt["b"])(r,{start:r.startEnd,end:r.startEnd},a),Object(dt["w"])(r).forEach((function([e,t]){let a=n;!0===t||Object(dt["n"])(t)?(a=Object(dt["n"])(t)?t:a,r[e]={color:a}):Object(dt["m"])(t)&&(Object(dt["f"])(t,Dt)?r[e]={...t}:r[e]={}),Object(dt["e"])(r,e+".color")||Object(dt["u"])(r,e+".color",a)})),r}normalizeHighlight(e){var t=this;const n=this.normalizeAttr({config:e,type:"highlight"});return Object(dt["w"])(n).forEach((function([e,n]){const r=Object(dt["b"])(n,{isDark:t.isDark,color:t.color});n.style={...t.getHighlightBgStyle(r),...n.style},n.contentStyle={...t.getHighlightContentStyle(r),...n.contentStyle}})),n}getHighlightBgStyle({fillMode:e,color:t,isDark:n}){switch(e){case"outline":case"none":return{backgroundColor:n?"var(--gray-900)":"var(--white)",border:"2px solid",borderColor:n?`var(--${t}-200)`:`var(--${t}-700)`,borderRadius:"var(--rounded-full)"};case"light":return{backgroundColor:n?`var(--${t}-800)`:`var(--${t}-200)`,opacity:n?.75:1,borderRadius:"var(--rounded-full)"};case"solid":return{backgroundColor:n?`var(--${t}-500)`:`var(--${t}-600)`,borderRadius:"var(--rounded-full)"};default:return{borderRadius:"var(--rounded-full)"}}}getHighlightContentStyle({fillMode:e,color:t,isDark:n}){switch(e){case"outline":case"none":return{fontWeight:"var(--font-bold)",color:n?`var(--${t}-100)`:`var(--${t}-900)`};case"light":return{fontWeight:"var(--font-bold)",color:n?`var(--${t}-100)`:`var(--${t}-900)`};case"solid":return{fontWeight:"var(--font-bold)",color:"var(--white)"};default:return""}}bgAccentHigh({color:e,isDark:t}){return{backgroundColor:t?`var(--${e}-500)`:`var(--${e}-600)`}}contentAccent({color:e,isDark:t}){return e?{fontWeight:"var(--font-bold)",color:t?`var(--${e}-100)`:`var(--${e}-900)`}:null}normalizeDot(e){return this.normalizeNonHighlight("dot",e,this.bgAccentHigh)}normalizeBar(e){return this.normalizeNonHighlight("bar",e,this.bgAccentHigh)}normalizeContent(e){return this.normalizeNonHighlight("content",e,this.contentAccent)}normalizeNonHighlight(e,t,n){var r=this;const a=this.normalizeAttr({type:e,config:t});return Object(dt["w"])(a).forEach((function([e,t]){Object(dt["b"])(t,{isDark:r.isDark,color:r.color}),t.style={...n(t),...t.style}})),a}}var kt=n("29ae"),Mt=n("1315"),Pt=n("22f3");const Yt={mixins:[yt["a"]],props:{color:String,isDark:Boolean,firstDayOfWeek:Number,masks:Object,locale:[String,Object],timezone:String,minDate:null,maxDate:null,minDateExact:null,maxDateExact:null,disabledDates:null,availableDates:null,theme:null},computed:{$theme(){return this.theme instanceof Ot?this.theme:new Ot({color:this.passedProp("color","blue"),isDark:this.passedProp("isDark",!1)})},$locale(){if(this.locale instanceof kt["b"])return this.locale;const e=Object(dt["m"])(this.locale)?this.locale:{id:this.locale,firstDayOfWeek:this.firstDayOfWeek,masks:this.masks};return new kt["b"](e,{locales:this.$locales,timezone:this.timezone})},disabledDates_(){const e=this.normalizeDates(this.disabledDates),{minDate:t,minDateExact:n,maxDate:r,maxDateExact:a}=this;if(n||t){const r=n?this.normalizeDate(n):this.normalizeDate(t,{time:"00:00:00"});e.push({start:null,end:new Date(r.getTime()-1e3)})}if(a||r){const t=a?this.normalizeDate(a):this.normalizeDate(r,{time:"23:59:59"});e.push({start:new Date(t.getTime()+1e3),end:null})}return e},availableDates_(){return this.normalizeDates(this.availableDates)},disabledAttribute(){return new Pt["a"]({key:"disabled",dates:this.disabledDates_,excludeDates:this.availableDates_,excludeMode:"includes",order:100},this.$theme,this.$locale)}},created(){Object(Mt["a"])(this.$defaults.screens)},methods:{formatDate(e,t){return this.$locale?this.$locale.format(e,t):""},parseDate(e,t){if(!this.$locale)return null;const n=this.$locale.parse(e,t);return Object(dt["j"])(n)?n:null},normalizeDate(e,t){return this.$locale?this.$locale.normalizeDate(e,t):e},normalizeDates(e){return this.$locale.normalizeDates(e,{isFullDay:!0})},pageForDate(e){return this.$locale.getDateParts(this.normalizeDate(e))},pageForThisMonth(){return this.pageForDate(new Date)}}},St={methods:{safeScopedSlot(e,t,n=null){return Object(dt["k"])(this.$scopedSlots[e])?this.$scopedSlots[e](t):n}}},Et=wt,_t=Yt,It=St;var Tt={name:"PopoverRow",mixins:[Et],props:{attribute:Object},computed:{indicator(){const{highlight:e,dot:t,bar:n,popover:r}=this.attribute;if(r&&r.hideIndicator)return null;if(e){const{color:t,isDark:n}=e.start;return{style:{...this.theme.bgAccentHigh({color:t,isDark:!n}),width:"10px",height:"5px",borderRadius:"3px"}}}if(t){const{color:e,isDark:n}=t.start;return{style:{...this.theme.bgAccentHigh({color:e,isDark:!n}),width:"5px",height:"5px",borderRadius:"50%"}}}if(n){const{color:e,isDark:t}=n.start;return{style:{...this.theme.bgAccentHigh({color:e,isDark:!t}),width:"10px",height:"3px"}}}return null}}},Ct=Tt,$t=(n("d438"),ht(Ct,mt,gt,!1,null,"eb5afd1a",null)),At=$t.exports,Nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-nav-container"},[n("div",{staticClass:"vc-nav-header"},[n("span",{staticClass:"vc-nav-arrow is-left",class:{"is-disabled":!e.prevItemsEnabled},attrs:{role:"button",tabindex:e.prevItemsEnabled?0:void 0},on:{click:e.movePrev,keydown:function(t){return e.onSpaceOrEnter(t,e.movePrev)}}},[e._t("nav-left-button",[n("svg-icon",{attrs:{name:"left-arrow",width:"20px",height:"24px"}})])],2),n("span",{staticClass:"vc-nav-title vc-grid-focus",style:{whiteSpace:"nowrap"},attrs:{role:"button",tabindex:"0"},on:{click:e.toggleMode,keydown:function(t){return e.onSpaceOrEnter(t,e.toggleMode)}}},[e._v(" "+e._s(e.title)+" ")]),n("span",{staticClass:"vc-nav-arrow is-right",class:{"is-disabled":!e.nextItemsEnabled},attrs:{role:"button",tabindex:e.nextItemsEnabled?0:void 0},on:{click:e.moveNext,keydown:function(t){return e.onSpaceOrEnter(t,e.moveNext)}}},[e._t("nav-right-button",[n("svg-icon",{attrs:{name:"right-arrow",width:"20px",height:"24px"}})])],2)]),n("div",{staticClass:"vc-nav-items"},e._l(e.activeItems,(function(t){return n("span",{key:t.label,class:e.getItemClasses(t),attrs:{role:"button","data-id":t.id,"aria-label":t.ariaLabel,tabindex:t.isDisabled?void 0:0},on:{click:t.click,keydown:function(n){return e.onSpaceOrEnter(n,t.click)}}},[e._v(" "+e._s(t.label)+" ")])})),0)])},Ft=[],zt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._g({staticClass:"vc-svg-icon",attrs:{width:e.width,height:e.height,viewBox:e.viewBox}},e.$listeners),[n("path",{attrs:{d:e.path}})])},Lt=[];const Ht="26px",Rt="0 0 32 32",Wt={"left-arrow":{viewBox:"0 -1 16 34",path:"M11.196 10c0 0.143-0.071 0.304-0.179 0.411l-7.018 7.018 7.018 7.018c0.107 0.107 0.179 0.268 0.179 0.411s-0.071 0.304-0.179 0.411l-0.893 0.893c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-8.321-8.321c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l8.321-8.321c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l0.893 0.893c0.107 0.107 0.179 0.25 0.179 0.411z"},"right-arrow":{viewBox:"-5 -1 16 34",path:"M10.625 17.429c0 0.143-0.071 0.304-0.179 0.411l-8.321 8.321c-0.107 0.107-0.268 0.179-0.411 0.179s-0.304-0.071-0.411-0.179l-0.893-0.893c-0.107-0.107-0.179-0.25-0.179-0.411 0-0.143 0.071-0.304 0.179-0.411l7.018-7.018-7.018-7.018c-0.107-0.107-0.179-0.268-0.179-0.411s0.071-0.304 0.179-0.411l0.893-0.893c0.107-0.107 0.268-0.179 0.411-0.179s0.304 0.071 0.411 0.179l8.321 8.321c0.107 0.107 0.179 0.268 0.179 0.411z"}};var Vt={props:["name"],data(){return{width:Ht,height:Ht,viewBox:Rt,path:"",isBaseline:!1}},mounted(){this.updateIcon()},watch:{name(){this.updateIcon()}},methods:{updateIcon(){const e=Wt[this.name];e&&(this.width=e.width||Ht,this.height=e.height||Ht,this.viewBox=e.viewBox,this.path=e.path)}}},Ut=Vt,Bt=(n("9010"),ht(Ut,zt,Lt,!1,null,"63f7b5ec",null)),Zt=Bt.exports;const qt=12;var Gt={name:"CalendarNav",components:{SvgIcon:Zt},mixins:[Et],props:{value:{type:Object,default:function(){return{month:0,year:0}}},validator:{type:Function,default:function(){return function(){return!0}}}},data(){return{monthMode:!0,yearIndex:0,yearGroupIndex:0,onSpaceOrEnter:ut["l"]}},computed:{month(){return this.value&&this.value.month||0},year(){return this.value&&this.value.year||0},title(){return this.monthMode?this.yearIndex:`${this.firstYear} - ${this.lastYear}`},monthItems(){return this.getMonthItems(this.yearIndex)},yearItems(){return this.getYearItems(this.yearGroupIndex)},prevItemsEnabled(){return this.monthMode?this.prevMonthItemsEnabled:this.prevYearItemsEnabled},nextItemsEnabled(){return this.monthMode?this.nextMonthItemsEnabled:this.nextYearItemsEnabled},prevMonthItemsEnabled(){return this.getMonthItems(this.yearIndex-1).some((function(e){return!e.isDisabled}))},nextMonthItemsEnabled(){return this.getMonthItems(this.yearIndex+1).some((function(e){return!e.isDisabled}))},prevYearItemsEnabled(){return this.getYearItems(this.yearGroupIndex-1).some((function(e){return!e.isDisabled}))},nextYearItemsEnabled(){return this.getYearItems(this.yearGroupIndex+1).some((function(e){return!e.isDisabled}))},activeItems(){return this.monthMode?this.monthItems:this.yearItems},firstYear(){return Object(dt["g"])(this.yearItems.map((function(e){return e.year})))},lastYear(){return Object(dt["p"])(this.yearItems.map((function(e){return e.year})))}},watch:{year(){this.yearIndex=this.year},yearIndex(e){this.yearGroupIndex=this.getYearGroupIndex(e)},value(){this.focusFirstItem()}},created(){this.yearIndex=this.year},mounted(){this.focusFirstItem()},methods:{focusFirstItem(){var e=this;this.$nextTick((function(){const t=e.$el.querySelector(".vc-nav-item:not(.is-disabled)");t&&t.focus()}))},getItemClasses({isActive:e,isCurrent:t,isDisabled:n}){const r=["vc-nav-item"];return e?r.push("is-active"):t&&r.push("is-current"),n&&r.push("is-disabled"),r},getYearGroupIndex(e){return Math.floor(e/qt)},getMonthItems(e){var t=this;const{month:n,year:r}=this.pageForDate(new Date);return this.locale.getMonthDates().map((function(a,o){const i=o+1;return{month:i,year:e,id:`${e}.${Object(ut["m"])(i,2)}`,label:t.locale.format(a,t.masks.navMonths),ariaLabel:t.locale.format(a,"MMMM YYYY"),isActive:i===t.month&&e===t.year,isCurrent:i===n&&e===r,isDisabled:!t.validator({month:i,year:e}),click:function(){return t.monthClick(i,e)}}}))},getYearItems(e){var t=this;const{_:n,year:r}=this.pageForDate(new Date),a=e*qt,o=a+qt,i=[];for(let s=a;s<o;s+=1){let e=!1;for(let t=1;t<12;t++)if(e=this.validator({month:t,year:s}),e)break;i.push({year:s,id:s,label:s,ariaLabel:s,isActive:s===this.year,isCurrent:s===r,isDisabled:!e,click:function(){return t.yearClick(s)}})}return i},monthClick(e,t){this.validator({month:e,year:t})&&this.$emit("input",{month:e,year:t})},yearClick(e){this.yearIndex=e,this.monthMode=!0,this.focusFirstItem()},toggleMode(){this.monthMode=!this.monthMode},movePrev(){this.prevItemsEnabled&&(this.monthMode&&this.movePrevYear(),this.movePrevYearGroup())},moveNext(){this.nextItemsEnabled&&(this.monthMode&&this.moveNextYear(),this.moveNextYearGroup())},movePrevYear(){this.yearIndex--},moveNextYear(){this.yearIndex++},movePrevYearGroup(){this.yearGroupIndex--},moveNextYearGroup(){this.yearGroupIndex++}}},Kt=Gt,Xt=(n("3c55"),ht(Kt,Nt,Ft,!1,null,null,null)),Jt=Xt.exports;function Qt(e){document&&document.dispatchEvent(new CustomEvent("show-popover",{detail:e}))}function en(e){document&&document.dispatchEvent(new CustomEvent("hide-popover",{detail:e}))}function tn(e){document&&document.dispatchEvent(new CustomEvent("toggle-popover",{detail:e}))}function nn(e){document&&document.dispatchEvent(new CustomEvent("update-popover",{detail:e}))}function rn(e){const{visibility:t}=e,n="click"===t,r="hover"===t,a="hover-focus"===t,o="focus"===t;e.autoHide=!n;let i=!1,s=!1;return{click(t){n&&(e.ref=t.target,tn(e),t.stopPropagation())},mousemove(t){e.ref=t.currentTarget,i||(i=!0,(r||a)&&Qt(e))},mouseleave(t){e.ref=t.target,i&&(i=!1,(r||a&&!s)&&en(e))},focusin(t){e.ref=t.currentTarget,s||(s=!0,(o||a)&&Qt(e))},focusout(t){e.ref=t.currentTarget,s&&!Object(ut["e"])(e.ref,t.relatedTarget)&&(s=!1,(o||a&&!i)&&en(e))}}}var an,on,sn,cn,un,ln,dn,fn,pn={name:"CalendarDay",mixins:[Et,It],render(e){var t=this;const n=function(){return t.hasBackgrounds&&e("div",{class:"vc-highlights vc-day-layer"},t.backgrounds.map((function({key:t,wrapperClass:n,class:r,style:a}){return e("div",{key:t,class:n},[e("div",{class:r,style:a})])})))},r=function(){return t.safeScopedSlot("day-content",{day:t.day,attributes:t.day.attributes,attributesMap:t.day.attributesMap,dayProps:t.dayContentProps,dayEvents:t.dayContentEvents})||e("span",{class:t.dayContentClass,style:t.dayContentStyle,attrs:{...t.dayContentProps},on:t.dayContentEvents,ref:"content"},[t.day.label])},a=function(){return t.hasDots&&e("div",{class:"vc-day-layer vc-day-box-center-bottom"},[e("div",{class:"vc-dots"},t.dots.map((function({key:t,class:n,style:r}){return e("span",{key:t,class:n,style:r})})))])},o=function(){return t.hasBars&&e("div",{class:"vc-day-layer vc-day-box-center-bottom"},[e("div",{class:"vc-bars"},t.bars.map((function({key:t,class:n,style:r}){return e("span",{key:t,class:n,style:r})})))])};return e("div",{class:["vc-day",...this.day.classes,{"vc-day-box-center-center":!this.$scopedSlots["day-content"]},{"is-not-in-month":!this.inMonth}]},[n(),r(),a(),o()])},inject:["sharedState"],props:{day:{type:Object,required:!0}},data(){return{glyphs:{},dayContentEvents:{}}},computed:{label(){return this.day.label},startTime(){return this.day.range.start.getTime()},endTime(){return this.day.range.end.getTime()},inMonth(){return this.day.inMonth},isDisabled(){return this.day.isDisabled},backgrounds(){return this.glyphs.backgrounds},hasBackgrounds(){return!!Object(ut["b"])(this.backgrounds)},content(){return this.glyphs.content},dots(){return this.glyphs.dots},hasDots(){return!!Object(ut["b"])(this.dots)},bars(){return this.glyphs.bars},hasBars(){return!!Object(ut["b"])(this.bars)},popovers(){return this.glyphs.popovers},hasPopovers(){return!!Object(ut["b"])(this.popovers)},dayContentClass(){return["vc-day-content vc-focusable",{"is-disabled":this.isDisabled},Object(dt["d"])(Object(dt["p"])(this.content),"class")||""]},dayContentStyle(){return Object(dt["d"])(Object(dt["p"])(this.content),"style")},dayContentProps(){let e;return this.day.isFocusable?e="0":this.day.inMonth&&(e="-1"),{tabindex:e,"aria-label":this.day.ariaLabel,"aria-disabled":this.day.isDisabled?"true":"false",role:"button"}},dayEvent(){return{...this.day,el:this.$refs.content,popovers:this.popovers}}},watch:{theme(){this.refresh()},popovers(){this.refreshPopovers()}},mounted(){this.refreshPopovers()},methods:{getDayEvent(e){return{...this.dayEvent,event:e}},click(e){this.$emit("dayclick",this.getDayEvent(e))},mouseenter(e){this.$emit("daymouseenter",this.getDayEvent(e))},mouseleave(e){this.$emit("daymouseleave",this.getDayEvent(e))},focusin(e){this.$emit("dayfocusin",this.getDayEvent(e))},focusout(e){this.$emit("dayfocusout",this.getDayEvent(e))},keydown(e){this.$emit("daykeydown",this.getDayEvent(e))},refresh(){var e=this;if(!this.day.refresh)return;this.day.refresh=!1;const t={backgrounds:[],dots:[],bars:[],popovers:[],content:[]};this.$set(this.day,"attributes",Object.values(this.day.attributesMap||{}).sort((function(e,t){return e.order-t.order}))),this.day.attributes.forEach((function(n){const{targetDate:r}=n,{isDate:a,isComplex:o,startTime:i,endTime:s}=r,c=e.startTime<=i,u=e.endTime>=s,l=c&&u,d=c||u,f={isDate:a,isComplex:o,onStart:c,onEnd:u,onStartAndEnd:l,onStartOrEnd:d};e.processHighlight(n,f,t),e.processNonHighlight(n,"content",f,t.content),e.processNonHighlight(n,"dot",f,t.dots),e.processNonHighlight(n,"bar",f,t.bars),e.processPopover(n,t)})),this.glyphs=t},processHighlight({key:e,highlight:t},{isDate:n,isComplex:r,onStart:a,onEnd:o,onStartAndEnd:i},{backgrounds:s,content:c}){if(!t)return;const{base:u,start:l,end:d}=t;n||r||i?(s.push({key:e,wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight",l.class],style:l.style}),c.push({key:e+"-content",class:l.contentClass,style:l.contentStyle})):a?(s.push({key:e+"-base",wrapperClass:"vc-day-layer vc-day-box-right-center",class:["vc-highlight vc-highlight-base-start",u.class],style:u.style}),s.push({key:e,wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight",l.class],style:l.style}),c.push({key:e+"-content",class:l.contentClass,style:l.contentStyle})):o?(s.push({key:e+"-base",wrapperClass:"vc-day-layer vc-day-box-left-center",class:["vc-highlight vc-highlight-base-end",u.class],style:u.style}),s.push({key:e,wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight",d.class],style:d.style}),c.push({key:e+"-content",class:d.contentClass,style:d.contentStyle})):(s.push({key:e+"-middle",wrapperClass:"vc-day-layer vc-day-box-center-center",class:["vc-highlight vc-highlight-base-middle",u.class],style:u.style}),c.push({key:e+"-content",class:u.contentClass,style:u.contentStyle}))},processNonHighlight(e,t,{isDate:n,onStart:r,onEnd:a},o){if(!e[t])return;const{key:i}=e,s="vc-"+t,{base:c,start:u,end:l}=e[t];n||r?o.push({key:i,class:[s,u.class],style:u.style}):a?o.push({key:i,class:[s,l.class],style:l.style}):o.push({key:i,class:[s,c.class],style:c.style})},processPopover(e,{popovers:t}){const{key:n,customData:r,popover:a}=e;if(!a)return;const o=Object(dt["b"])({key:n,customData:r,attribute:e},{...a},{visibility:a.label?"hover":"click",placement:"bottom",isInteractive:!a.label});t.splice(0,0,o)},refreshPopovers(){let e={};Object(ut["b"])(this.popovers)&&(e=rn(Object(dt["b"])({id:this.dayPopoverId,data:this.day},...this.popovers))),this.dayContentEvents=Object(ut["h"])({click:this.click,mouseenter:this.mouseenter,mouseleave:this.mouseleave,focusin:this.focusin,focusout:this.focusout,keydown:this.keydown},e),nn({id:this.dayPopoverId,data:this.day})}}},hn=pn,vn=(n("1f64"),ht(hn,an,on,!1,null,"4420d078",null)),bn=vn.exports,mn={name:"CalendarPane",mixins:[Et,It],render(e){var t=this;const n=this.safeScopedSlot("header",this.page)||e("div",{class:"vc-header align-"+this.titlePosition},[e("div",{class:"vc-title",on:this.navPopoverEvents},[this.safeScopedSlot("header-title",this.page,this.page.title)])]),r=this.weekdayLabels.map((function(t,n){return e("div",{key:n+1,class:"vc-weekday"},[t])})),a=this.showWeeknumbers_.startsWith("left"),o=this.showWeeknumbers_.startsWith("right");a?r.unshift(e("div",{class:"vc-weekday"})):o&&r.push(e("div",{class:"vc-weekday"}));const i=function(n){return e("div",{class:["vc-weeknumber"]},[e("span",{class:["vc-weeknumber-content","is-"+t.showWeeknumbers_],on:{click:function(e){t.$emit("weeknumberclick",{weeknumber:n,days:t.page.days.filter((function(e){return e[t.weeknumberKey]===n})),event:e})}}},[n])])},s=[],{daysInWeek:c}=this.locale;this.page.days.forEach((function(n,r){const u=r%c;(a&&0===u||o&&u===c)&&s.push(i(n[t.weeknumberKey])),s.push(e(bn,{attrs:{day:n},on:{...t.$listeners},scopedSlots:t.$scopedSlots,key:n.id,ref:"days",refInFor:!0})),o&&u===c-1&&s.push(i(n[t.weeknumberKey]))}));const u=e("div",{class:{"vc-weeks":!0,"vc-show-weeknumbers":this.showWeeknumbers_,"is-left":a,"is-right":o}},[r,s]);return e("div",{class:["vc-pane","row-from-end-"+this.rowFromEnd,"column-from-end-"+this.columnFromEnd],ref:"pane"},[n,u])},inheritAttrs:!1,props:{page:Object,position:Number,row:Number,rowFromEnd:Number,column:Number,columnFromEnd:Number,titlePosition:String,navVisibility:String,showWeeknumbers:[Boolean,String],showIsoWeeknumbers:[Boolean,String]},computed:{weeknumberKey(){return this.showWeeknumbers?"weeknumber":"isoWeeknumber"},showWeeknumbers_(){const e=this.showWeeknumbers||this.showIsoWeeknumbers;return null==e?"":Object(dt["i"])(e)?e?"left":"":e.startsWith("right")?this.columnFromEnd>1?"right":e:this.column>1?"left":e},navVisibility_(){return this.propOrDefault("navVisibility","navVisibility")},navPlacement(){switch(this.titlePosition){case"left":return"bottom-start";case"right":return"bottom-end";default:return"bottom"}},navPopoverEvents(){const{sharedState:e,navVisibility_:t,navPlacement:n,page:r,position:a}=this;return rn({id:e.navPopoverId,visibility:t,placement:n,modifiers:[{name:"flip",options:{fallbackPlacements:["bottom"]}}],data:{page:r,position:a},isInteractive:!0})},weekdayLabels(){var e=this;return this.locale.getWeekdayDates().map((function(t){return e.format(t,e.masks.weekdays)}))}},methods:{refresh(){this.$refs.days.forEach((function(e){return e.refresh()}))}}},gn=mn,yn=(n("fccf"),n("4889"),ht(gn,sn,cn,!1,null,"74ad501d",null)),wn=yn.exports,xn={name:"CustomTransition",render(e){return e("transition",{props:{name:this.name_,appear:this.appear},on:{beforeEnter:this.beforeEnter,afterEnter:this.afterEnter}},[this.$slots.default])},props:{name:String,appear:Boolean},computed:{name_(){return this.name||"none"}},methods:{beforeEnter(e){this.$emit("beforeEnter",e),this.$emit("beforeTransition",e)},afterEnter(e){this.$emit("afterEnter",e),this.$emit("afterTransition",e)}}},Dn=xn,jn=(n("2285"),ht(Dn,un,ln,!1,null,"5be4b00c",null)),On=jn.exports,kn=n("9349"),Mn=(n("3ee2"),{name:"Calendar",render(e){var t=this;const n=this.pages.map((function(n,r){const a=r+1,o=Math.ceil((r+1)/t.columns),i=t.rows-o+1,s=a%t.columns||t.columns,c=t.columns-s+1;return e(wn,{attrs:{...t.$attrs,attributes:t.store},props:{page:n,position:a,row:o,rowFromEnd:i,column:s,columnFromEnd:c,titlePosition:t.titlePosition_},on:{...t.$listeners,dayfocusin:function(e){t.lastFocusedDay=e,t.$emit("dayfocusin",e)},dayfocusout:function(e){t.lastFocusedDay=null,t.$emit("dayfocusout",e)}},scopedSlots:t.$scopedSlots,key:n.key,ref:"pages",refInFor:!0})})),r=function(n){const r=function(){return t.move(n?-t.step_:t.step_)},a=function(e){return Object(ut["l"])(e,r)},o=n?!t.canMovePrev:!t.canMoveNext;return e("div",{class:["vc-arrow","is-"+(n?"left":"right"),{"is-disabled":o}],attrs:{role:"button"},on:{click:r,keydown:a}},[(n?t.safeScopedSlot("header-left-button",{click:r}):t.safeScopedSlot("header-right-button",{click:r}))||e(Zt,{props:{name:n?"left-arrow":"right-arrow"}})])},a=function(){return e(bt,{props:{id:t.sharedState.navPopoverId,contentClass:"vc-nav-popover-container"},ref:"navPopover",scopedSlots:{default:function({data:n}){const{position:r,page:a}=n;return e(Jt,{props:{value:a,position:r,validator:function(e){return t.canMove(e,{position:r})}},on:{input:function(e){return t.move(e,{position:r})}},scopedSlots:t.$scopedSlots})}}})},o=function(){return e(bt,{props:{id:t.sharedState.dayPopoverId,contentClass:"vc-day-popover-container"},scopedSlots:{default:function({data:n,updateLayout:r,hide:a}){const o=Object.values(n.attributes).filter((function(e){return e.popover})),i=t.$locale.masks,s=t.formatDate,c=s(n.date,i.dayPopover);return t.safeScopedSlot("day-popover",{day:n,attributes:o,masks:i,format:s,dayTitle:c,updateLayout:r,hide:a})||e("div",[i.dayPopover&&e("div",{class:["vc-day-popover-header"]},[c]),o.map((function(t){return e(At,{key:t.key,props:{attribute:t}})}))])}}})};return e("div",{attrs:{"data-helptext":"Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year"},class:["vc-container","vc-"+this.$theme.color,{"vc-is-expanded":this.isExpanded,"vc-is-dark":this.$theme.isDark}],on:{keydown:this.handleKeydown,mouseup:function(e){return e.preventDefault()}},ref:"container"},[a(),e("div",{class:["vc-pane-container",{"in-transition":this.inTransition}]},[e(On,{props:{name:this.transitionName},on:{beforeEnter:function(){t.inTransition=!0},afterEnter:function(){t.inTransition=!1}}},[e("div",{class:"vc-pane-layout",style:{gridTemplateColumns:`repeat(${this.columns}, 1fr)`},attrs:{...this.$attrs},key:Object(ut["b"])(this.pages)?this.pages[0].key:""},n)]),e("div",{class:["vc-arrows-container title-"+this.titlePosition_]},[r(!0),r(!1)]),this.$scopedSlots.footer&&this.$scopedSlots.footer()]),o()])},mixins:[_t,It],provide(){return{sharedState:this.sharedState}},props:{rows:{type:Number,default:1},columns:{type:Number,default:1},step:Number,titlePosition:String,isExpanded:Boolean,fromDate:Date,toDate:Date,fromPage:Object,toPage:Object,minPage:Object,maxPage:Object,transition:String,attributes:[Object,Array],trimWeeks:Boolean,disablePageSwipe:Boolean},data(){return{pages:[],store:null,lastFocusedDay:null,focusableDay:(new Date).getDate(),transitionName:"",inTransition:!1,sharedState:{navPopoverId:Object(ut["c"])(),dayPopoverId:Object(ut["c"])(),theme:{},masks:{},locale:{}}}},computed:{titlePosition_(){return this.propOrDefault("titlePosition","titlePosition")},firstPage(){return Object(dt["g"])(this.pages)},lastPage(){return Object(dt["p"])(this.pages)},minPage_(){return this.minPage||this.pageForDate(this.minDate)},maxPage_(){return this.maxPage||this.pageForDate(this.maxDate)},count(){return this.rows*this.columns},step_(){return this.step||this.count},canMovePrev(){return this.canMove(-this.step_)},canMoveNext(){return this.canMove(this.step_)}},watch:{$locale(){this.refreshLocale(),this.refreshPages({page:this.firstPage,ignoreCache:!0}),this.initStore()},$theme(){this.refreshTheme(),this.initStore()},fromDate(){this.refreshPages()},fromPage(e){const t=this.pages&&this.pages[0];Object(ut["q"])(e,t)||this.refreshPages()},toPage(e){const t=this.pages&&this.pages[this.pages.length-1];Object(ut["q"])(e,t)||this.refreshPages()},count(){this.refreshPages()},attributes:{handler(e){const{adds:t,deletes:n}=this.store.refresh(e);this.refreshAttrs(this.pages,t,n)},deep:!0},pages(e){this.refreshAttrs(e,this.store.list,null,!0)},disabledAttribute(){this.refreshDisabledDays()},lastFocusedDay(e){e&&(this.focusableDay=e.day,this.refreshFocusableDays())},inTransition(e){e?this.$emit("transition-start"):(this.$emit("transition-end"),this.transitionPromise&&(this.transitionPromise.resolve(!0),this.transitionPromise=null))}},created(){this.refreshLocale(),this.refreshTheme(),this.initStore(),this.refreshPages()},mounted(){var e=this;if(!this.disablePageSwipe){const t=Object(lt["a"])(this.$refs.container,(function({toLeft:t,toRight:n}){t?e.moveNext():n&&e.movePrev()}),this.$defaults.touch);this.$once("beforeDestroy",(function(){return t()}))}},methods:{refreshLocale(){this.sharedState.locale=this.$locale,this.sharedState.masks=this.$locale.masks},refreshTheme(){this.sharedState.theme=this.$theme},canMove(e,t={}){var n=this;const r=this.$locale.toPage(e,this.firstPage);let{position:a}=t;if(Object(dt["l"])(e)&&(a=1),!r)return Promise.reject(new Error("Invalid argument provided: "+e));if(!a)if(Object(ut["o"])(r,this.firstPage))a=-1;else{if(!Object(ut["n"])(r,this.lastPage))return Promise.resolve(!0);a=1}return Object.assign(t,this.getTargetPageRange(r,{position:a,force:!0})),Object(ut["s"])(t.fromPage,t.toPage).some((function(e){return Object(ut["p"])(e,n.minPage_,n.maxPage_)}))},movePrev(e){return this.move(-this.step_,e)},moveNext(e){return this.move(this.step_,e)},move(e,t={}){const n=this.canMove(e,t);return t.force||n?(this.$refs.navPopover.hide({hideDelay:0}),t.fromPage&&!Object(ut["q"])(t.fromPage,this.firstPage)?this.refreshPages({...t,page:t.fromPage,position:1,force:!0}):Promise.resolve(!0)):Promise.reject(new Error("Move target is disabled: "+JSON.stringify(t)))},focusDate(e,t={}){var n=this;return this.move(e,t).then((function(){const t=n.$el.querySelector(`.id-${n.$locale.getDayId(e)}.in-month .vc-focusable`);return t?(t.focus(),Promise.resolve(!0)):Promise.resolve(!1)}))},showPageRange(e,t){let n,r;if(Object(dt["j"])(e))n=this.pageForDate(e);else{if(!Object(dt["m"])(e))return Promise.reject(new Error("Invalid page range provided."));{const{month:t,year:a}=e,{from:o,to:i}=e;Object(dt["l"])(t)&&Object(dt["l"])(a)?n=e:(o||i)&&(n=Object(dt["j"])(o)?this.pageForDate(o):o,r=Object(dt["j"])(i)?this.pageForDate(i):i)}}const a=this.lastPage;let o=n;return Object(ut["n"])(r,a)&&(o=Object(ut["a"])(r,-(this.pages.length-1))),Object(ut["o"])(o,n)&&(o=n),this.refreshPages({...t,page:o})},getTargetPageRange(e,{position:t,force:n}={}){let r=null,a=null;if(Object(ut["r"])(e)){let n=0;t=+t,isNaN(t)||(n=t>0?1-t:-(this.count+t)),r=Object(ut["a"])(e,n)}else r=this.getDefaultInitialPage();return a=Object(ut["a"])(r,this.count-1),n||(Object(ut["o"])(r,this.minPage_)?r=this.minPage_:Object(ut["n"])(a,this.maxPage_)&&(r=Object(ut["a"])(this.maxPage_,1-this.count)),a=Object(ut["a"])(r,this.count-1)),{fromPage:r,toPage:a}},getDefaultInitialPage(){let e=this.fromPage||this.pageForDate(this.fromDate);if(!Object(ut["r"])(e)){const t=this.toPage||this.pageForDate(this.toPage);Object(ut["r"])(t)&&(e=Object(ut["a"])(t,1-this.count))}return Object(ut["r"])(e)||(e=this.getPageForAttributes()),Object(ut["r"])(e)||(e=this.pageForThisMonth()),e},refreshPages({page:e,position:t=1,force:n,transition:r,ignoreCache:a}={}){var o=this;return new Promise((function(i,s){const{fromPage:c,toPage:u}=o.getTargetPageRange(e,{position:t,force:n}),l=[];for(let e=0;e<o.count;e++)l.push(o.buildPage(Object(ut["a"])(c,e),a));o.refreshDisabledDays(l),o.refreshFocusableDays(l),o.transitionName=o.getPageTransition(o.pages[0],l[0],r),o.pages=l,o.$emit("update:from-page",c),o.$emit("update:to-page",u),o.transitionName&&"none"!==o.transitionName?o.transitionPromise={resolve:i,reject:s}:i(!0)}))},refreshDisabledDays(e){var t=this;this.getPageDays(e).forEach((function(e){e.isDisabled=!!t.disabledAttribute&&t.disabledAttribute.intersectsDay(e)}))},refreshFocusableDays(e){var t=this;this.getPageDays(e).forEach((function(e){e.isFocusable=e.inMonth&&e.day===t.focusableDay}))},getPageDays(e=this.pages){return e.reduce((function(e,t){return e.concat(t.days)}),[])},getPageTransition(e,t,n=this.transition){if("none"===n)return n;if("fade"===n||!n&&this.count>1||!Object(ut["r"])(e)||!Object(ut["r"])(t))return"fade";const r=Object(ut["o"])(t,e);return"slide-v"===n?r?"slide-down":"slide-up":r?"slide-right":"slide-left"},getPageForAttributes(){let e=null;const t=this.store.pinAttr;if(t&&t.hasDates){let[n]=t.dates;n=n.start||n.date,e=this.pageForDate(n)}return e},buildPage({month:e,year:t},n){var r=this;const a=`${t.toString()}-${e.toString()}`;let o=this.pages.find((function(e){return e.key===a}));if(!o||n){const n=new Date(t,e-1,15),i=this.$locale.getMonthComps(e,t),s=this.$locale.getPrevMonthComps(e,t),c=this.$locale.getNextMonthComps(e,t);o={key:a,month:e,year:t,weeks:this.trimWeeks?i.weeks:6,title:this.$locale.format(n,this.$locale.masks.title),shortMonthLabel:this.$locale.format(n,"MMM"),monthLabel:this.$locale.format(n,"MMMM"),shortYearLabel:t.toString().substring(2),yearLabel:t.toString(),monthComps:i,prevMonthComps:s,nextMonthComps:c,canMove:function(e){return r.canMove(e)},move:function(e){return r.move(e)},moveThisMonth:function(){return r.moveThisMonth()},movePrevMonth:function(){return r.move(s)},moveNextMonth:function(){return r.move(c)},refresh:!0},o.days=this.$locale.getCalendarDays(o)}return o},initStore(){this.store=new kn["a"](this.$theme,this.$locale,this.attributes),this.refreshAttrs(this.pages,this.store.list,[],!0)},refreshAttrs(e=[],t=[],n=[],r){var a=this;Object(ut["b"])(e)&&(e.forEach((function(e){e.days.forEach((function(e){let a={};r?e.refresh=!0:Object(dt["f"])(e.attributesMap,n)?(a=Object(dt["s"])(e.attributesMap,n),e.refresh=!0):a=e.attributesMap||{},t.forEach((function(t){const n=t.intersectsDay(e);if(n){const r={...t,targetDate:n};a[t.key]=r,e.refresh=!0}})),e.refresh&&(e.attributesMap=a)}))})),this.$nextTick((function(){a.$refs.pages.forEach((function(e){return e.refresh()}))})))},handleKeydown(e){const t=this.lastFocusedDay;null!=t&&(t.event=e,this.handleDayKeydown(t))},handleDayKeydown(e){const{dateFromTime:t,event:n}=e,a=t(12);let o=null;switch(n.key){case"ArrowLeft":o=Object(r["a"])(a,-1);break;case"ArrowRight":o=Object(r["a"])(a,1);break;case"ArrowUp":o=Object(r["a"])(a,-7);break;case"ArrowDown":o=Object(r["a"])(a,7);break;case"Home":o=Object(r["a"])(a,1-e.weekdayPosition);break;case"End":o=Object(r["a"])(a,e.weekdayPositionFromEnd);break;case"PageUp":o=n.altKey?c(a,-1):s(a,-1);break;case"PageDown":o=n.altKey?c(a,1):s(a,1);break}o&&(n.preventDefault(),this.focusDate(o).catch((function(){})))}}}),Pn=Mn,Yn=(n("de5e"),ht(Pn,dn,fn,!1,null,null,null)),Sn=Yn.exports,En=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-time-picker",class:[{"vc-disabled":e.isDisabled,"vc-bordered":e.showBorder}]},[n("div",[n("svg",{staticClass:"vc-time-icon",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),n("div",{staticClass:"vc-date-time"},[e.date?n("div",{staticClass:"vc-date"},[n("span",{staticClass:"vc-weekday"},[e._v(" "+e._s(e.locale.format(e.date,"WWW"))+" ")]),n("span",{staticClass:"vc-month"},[e._v(" "+e._s(e.locale.format(e.date,"MMM"))+" ")]),n("span",{staticClass:"vc-day"},[e._v(" "+e._s(e.locale.format(e.date,"D"))+" ")]),n("span",{staticClass:"vc-year"},[e._v(" "+e._s(e.locale.format(e.date,"YYYY"))+" ")])]):e._e(),n("div",{staticClass:"vc-time"},[n("time-select",{attrs:{options:e.hourOptions},model:{value:e.hours,callback:function(t){e.hours=e._n(t)},expression:"hours"}}),n("span",{staticStyle:{margin:"0 4px"}},[e._v(":")]),n("time-select",{attrs:{options:e.minuteOptions},model:{value:e.minutes,callback:function(t){e.minutes=e._n(t)},expression:"minutes"}}),e.is24hr?e._e():n("div",{staticClass:"vc-am-pm",class:{"vc-disabled":!(e.hours>=0)}},[n("button",{class:{active:e.isAM},attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.isAM=!0}}},[e._v(" AM ")]),n("button",{class:{active:!e.isAM},attrs:{type:"button"},on:{click:function(t){t.preventDefault(),e.isAM=!1}}},[e._v(" PM ")])])],1)])])},_n=[],In=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-select"},[n("select",e._b({on:{change:function(t){return e.$emit("input",t.target.value)}}},"select",e.$attrs,!1),e._l(e.options,(function(t){return n("option",{key:t.value,attrs:{disabled:t.disabled},domProps:{value:t.value}},[e._v(e._s(t.label))])})),0),n("div",{staticClass:"vc-select-arrow"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])},Tn=[],Cn={inheritAttrs:!1,props:{options:Array}},$n=Cn,An=(n("4f46"),ht($n,In,Tn,!1,null,"14bdabaf",null)),Nn=An.exports,Fn={name:"TimePicker",components:{TimeSelect:Nn},props:{value:{type:Object,required:!0},locale:{type:Object,required:!0},theme:{type:Object,required:!0},is24hr:{type:Boolean,default:!0},minuteIncrement:{type:Number,default:1},showBorder:Boolean,isDisabled:Boolean},data(){return{hours:0,minutes:0,isAM:!0}},computed:{date(){let e=this.locale.normalizeDate(this.value);return 24===this.value.hours&&(e=new Date(e.getTime()-1)),e},hourOptions(){const e=[{value:0,label:"12"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"}],t=[{value:0,label:"00"},{value:1,label:"01"},{value:2,label:"02"},{value:3,label:"03"},{value:4,label:"04"},{value:5,label:"05"},{value:6,label:"06"},{value:7,label:"07"},{value:8,label:"08"},{value:9,label:"09"},{value:10,label:"10"},{value:11,label:"11"},{value:12,label:"12"},{value:13,label:"13"},{value:14,label:"14"},{value:15,label:"15"},{value:16,label:"16"},{value:17,label:"17"},{value:18,label:"18"},{value:19,label:"19"},{value:20,label:"20"},{value:21,label:"21"},{value:22,label:"22"},{value:23,label:"23"}];return this.is24hr?t:e},minuteOptions(){const e=[];let t=0,n=!1;while(t<=59)e.push({value:t,label:Object(ut["m"])(t,2)}),n=n||t===this.minutes,t+=this.minuteIncrement,!n&&t>this.minutes&&(n=!0,e.push({value:this.minutes,label:Object(ut["m"])(this.minutes,2),disabled:!0}));return e}},watch:{value(){this.setup()},hours(){this.updateValue()},minutes(){this.updateValue()},isAM(){this.updateValue()}},created(){this.setup()},methods:{protected(e){var t=this;this.busy||(this.busy=!0,e(),this.$nextTick((function(){return t.busy=!1})))},setup(){var e=this;this.protected((function(){let{hours:t}=e.value;24===t&&(t=0);let n=!0;!e.is24hr&&t>=12&&(t-=12,n=!1),e.hours=t,e.minutes=e.value.minutes,e.isAM=n}))},updateValue(){var e=this;this.protected((function(){let t=e.hours;e.is24hr||e.isAM||(t+=12),e.$emit("input",{...e.value,hours:t,minutes:e.minutes,seconds:0,milliseconds:0})}))}}},zn=Fn,Ln=(n("4440"),ht(zn,En,_n,!1,null,"021f332c",null)),Hn=Ln.exports;const Rn={type:"auto",mask:"iso",timeAdjust:""},Wn={start:{...Rn},end:{...Rn}},Vn={DATE:"date",DATE_TIME:"datetime",TIME:"time"},Un={NONE:0,START:1,END:2,BOTH:3};var Bn,Zn,qn={name:"DatePicker",render(e){var t=this;const n=function(){if(!t.dateParts)return null;const n=t.isRange?t.dateParts:[t.dateParts[0]];return e("div",[...n.map((function(n,r){return e(Hn,{props:{value:n,locale:t.$locale,theme:t.$theme,is24hr:t.is24hr,minuteIncrement:t.minuteIncrement,showBorder:!t.isTime,isDisabled:t.isDateTime&&!n.isValid||t.isDragging},on:{input:function(e){return t.onTimeInput(e,0===r)}}})})),t.$scopedSlots.footer&&t.$scopedSlots.footer()])},r=function(){return e(Sn,{attrs:{...t.$attrs,attributes:t.attributes_,theme:t.$theme,locale:t.$locale},props:{minDate:t.minDateExact||t.minDate,maxDate:t.maxDateExact||t.maxDate,disabledDates:t.disabledDates,availableDates:t.availableDates},on:{...t.$listeners,dayclick:t.onDayClick,daykeydown:t.onDayKeydown,daymouseenter:t.onDayMouseEnter},scopedSlots:{...t.$scopedSlots,footer:t.isDateTime?n:t.$scopedSlots.footer},ref:"calendar"})},a=function(){return t.isTime?e("div",{class:["vc-container","vc-"+t.$theme.color,{"vc-is-dark":t.$theme.isDark}]},[n()]):r()};return this.$scopedSlots.default&&e("span",[this.$scopedSlots.default(this.slotArgs),e(bt,{props:{id:this.datePickerPopoverId,placement:"bottom-start",contentClass:"vc-container"+(this.isDark?" vc-is-dark":"")},on:{beforeShow:function(e){return t.$emit("popoverWillShow",e)},afterShow:function(e){return t.$emit("popoverDidShow",e)},beforeHide:function(e){return t.$emit("popoverWillHide",e)},afterHide:function(e){return t.$emit("popoverDidHide",e)}},scopedSlots:{default(){return a()}},ref:"popover"})])||a()},mixins:[_t],props:{mode:{type:String,default:Vn.DATE},value:{type:null,required:!0},modelConfig:{type:Object,default:function(){return{...Rn}}},is24hr:Boolean,minuteIncrement:Number,isRequired:Boolean,isRange:Boolean,updateOnInput:Boolean,inputDebounce:Number,popover:{type:Object,default:function(){return{}}},dragAttribute:Object,selectAttribute:Object,attributes:Array},data(){return{value_:null,dateParts:null,activeDate:"",dragValue:null,inputValues:["",""],updateTimeout:null,watchValue:!0,datePickerPopoverId:Object(ut["c"])()}},computed:{updateOnInput_(){return this.propOrDefault("updateOnInput","datePicker.updateOnInput")},inputDebounce_(){return this.propOrDefault("inputDebounce","datePicker.inputDebounce")},isDate(){return this.mode.toLowerCase()===Vn.DATE},isDateTime(){return this.mode.toLowerCase()===Vn.DATE_TIME},isTime(){return this.mode.toLowerCase()===Vn.TIME},isDragging(){return!!this.dragValue},modelConfig_(){return this.isRange?{start:{...Wn.start,...this.modelConfig.start||this.modelConfig},end:{...Wn.end,...this.modelConfig.end||this.modelConfig}}:{...Rn,...this.modelConfig}},inputMask(){const e=this.$locale.masks;return this.isTime?this.is24hr?e.inputTime24hr:e.inputTime:this.isDateTime?this.is24hr?e.inputDateTime24hr:e.inputDateTime:this.$locale.masks.input},inputMaskHasTime(){return/[Hh]/g.test(this.inputMask)},inputMaskHasDate(){return/[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(this.inputMask)},inputMaskPatch(){return this.inputMaskHasTime&&this.inputMaskHasDate?kt["a"].DATE_TIME:this.inputMaskHasDate?kt["a"].DATE:this.inputMaskHasTime?kt["a"].TIME:void 0},slotArgs(){var e=this;const{isRange:t,isDragging:n,updateValue:r,showPopover:a,hidePopover:o,togglePopover:i}=this,s=t?{start:this.inputValues[0],end:this.inputValues[1]}:this.inputValues[0],c=[!0,!1].map((function(t){return{input:e.onInputInput(t),change:e.onInputChange(t),keyup:e.onInputKeyup,...rn({...e.popover_,id:e.datePickerPopoverId,callback:function(n){"show"===n.action&&n.completed&&e.onInputShow(t)}})}})),u=t?{start:c[0],end:c[1]}:c[0];return{inputValue:s,inputEvents:u,isDragging:n,updateValue:r,showPopover:a,hidePopover:o,togglePopover:i,getPopoverTriggerEvents:rn}},popover_(){return this.propOrDefault("popover","datePicker.popover","merge")},selectAttribute_(){if(!this.hasValue(this.value_))return null;const e={key:"select-drag",...this.selectAttribute,dates:this.value_,pinPage:!0},{dot:t,bar:n,highlight:r,content:a}=e;return t||n||r||a||(e.highlight=!0),e},dragAttribute_(){if(!this.isRange||!this.hasValue(this.dragValue))return null;const e={key:"select-drag",...this.dragAttribute,dates:this.dragValue},{dot:t,bar:n,highlight:r,content:a}=e;return t||n||r||a||(e.highlight={startEnd:{fillMode:"outline"}}),e},attributes_(){const e=Object(dt["h"])(this.attributes)?[...this.attributes]:[];return this.dragAttribute_?e.push(this.dragAttribute_):this.selectAttribute_&&e.push(this.selectAttribute_),e}},watch:{inputMask(){this.formatInput()},value(){this.watchValue&&this.forceUpdateValue(this.value,{config:this.modelConfig_,notify:!1,formatInput:!0,hidePopover:!1})},value_(){this.refreshDateParts()},dragValue(){this.refreshDateParts()},timezone(){this.refreshDateParts(),this.forceUpdateValue(this.value_,{notify:!0,formatInput:!0})}},created(){this.forceUpdateValue(this.value,{config:this.modelConfig_,notify:!1,formatInput:!0,hidePopover:!1}),this.refreshDateParts()},mounted(){var e=this;Object(ut["k"])(document,"keydown",this.onDocumentKeyDown);const t=Object(lt["b"])(document,(function(t){document.body.contains(t.target)&&!Object(ut["e"])(e.$el,t.target)&&(e.dragValue=null,e.formatInput())}));this.$once("beforeDestroy",(function(){Object(ut["j"])(document,"keydown",e.onDocumentKeyDown),t()}))},methods:{getDateParts(e){return this.$locale.getDateParts(e)},getDateFromParts(e){return this.$locale.getDateFromParts(e)},refreshDateParts(){var e=this;const t=this.dragValue||this.value_,n=[];this.isRange?(t&&t.start?n.push(this.getDateParts(t.start)):n.push({}),t&&t.end?n.push(this.getDateParts(t.end)):n.push({})):t?n.push(this.getDateParts(t)):n.push({}),this.$nextTick((function(){return e.dateParts=n}))},onDocumentKeyDown(e){this.dragValue&&"Escape"===e.key&&(this.dragValue=null)},onDayClick(e){this.handleDayClick(e),this.$emit("dayclick",e)},onDayKeydown(e){switch(e.event.key){case" ":case"Enter":this.handleDayClick(e),e.event.preventDefault();break;case"Escape":this.hidePopover()}this.$emit("daykeydown",e)},handleDayClick(e){const{keepVisibleOnInput:t,visibility:n}=this.popover_,r={patch:kt["a"].DATE,adjustTime:!0,formatInput:!0,hidePopover:this.isDate&&!t&&"visible"!==n};this.isRange?(this.isDragging?this.dragTrackingValue.end=e.date:this.dragTrackingValue={...e.range},r.isDragging=!this.isDragging,r.rangePriority=r.isDragging?Un.NONE:Un.BOTH,r.hidePopover=r.hidePopover&&!r.isDragging,this.updateValue(this.dragTrackingValue,r)):(r.clearIfEqual=!this.isRequired,this.updateValue(e.date,r))},onDayMouseEnter(e){this.isDragging&&(this.dragTrackingValue.end=e.date,this.updateValue(this.dragTrackingValue,{patch:kt["a"].DATE,adjustTime:!0,formatInput:!0,hidePopover:!1,rangePriority:Un.NONE}))},onTimeInput(e,t){var n=this;let r=null;if(this.isRange){const n=t?e:this.dateParts[0],a=t?this.dateParts[1]:e;r={start:n,end:a}}else r=e;this.updateValue(r,{patch:kt["a"].TIME,rangePriority:t?Un.START:Un.END}).then((function(){return n.adjustPageRange(t)}))},onInputInput(e){var t=this;return function(n){t.updateOnInput_&&t.onInputUpdate(n.target.value,e,{formatInput:!1,hidePopover:!1,debounce:t.inputDebounce_})}},onInputChange(e){var t=this;return function(n){t.onInputUpdate(n.target.value,e,{formatInput:!0,hidePopover:!1})}},onInputUpdate(e,t,n){var r=this;this.inputValues.splice(t?0:1,1,e);const a=this.isRange?{start:this.inputValues[0],end:this.inputValues[1]||this.inputValues[0]}:e,o={type:"string",mask:this.inputMask};this.updateValue(a,{...n,config:o,patch:this.inputMaskPatch,rangePriority:t?Un.START:Un.END}).then((function(){return r.adjustPageRange(t)}))},onInputShow(e){this.adjustPageRange(e)},onInputKeyup(e){"Escape"===e.key&&this.updateValue(this.value_,{formatInput:!0,hidePopover:!0})},updateValue(e,t={}){var n=this;return clearTimeout(this.updateTimeout),new Promise((function(r){const{debounce:a,...o}=t;a>0?n.updateTimeout=setTimeout((function(){n.forceUpdateValue(e,o),r(n.value_)}),a):(n.forceUpdateValue(e,o),r(n.value_))}))},forceUpdateValue(e,{config:t=this.modelConfig_,patch:n=kt["a"].DATE_TIME,notify:r=!0,clearIfEqual:a=!1,formatInput:o=!0,hidePopover:i=!1,adjustTime:s=!1,isDragging:c=this.isDragging,rangePriority:u=Un.BOTH}={}){var l=this;let d=this.normalizeValue(e,t,n,u);!d&&this.isRequired&&(d=this.value_),s&&(d=this.adjustTimeForValue(d,t));const f=this.valueIsDisabled(d);if(f){if(c)return;d=this.value_,i=!1}const p=c?"dragValue":"value_";let h=!this.valuesAreEqual(this[p],d);if(f||h||!a||(d=null,h=!0),h&&(this.$set(this,p,d),c||(this.dragValue=null)),r&&h){const e=this.denormalizeValue(d),t=this.isDragging?"drag":"input";this.watchValue=!1,this.$emit(t,e),this.$nextTick((function(){return l.watchValue=!0}))}i&&this.hidePopover(),o&&this.formatInput()},hasValue(e){return this.isRange?Object(dt["m"])(e)&&e.start&&e.end:!!e},normalizeValue(e,t,n,r){if(!this.hasValue(e))return null;if(this.isRange){const a={},o=e.start>e.end?e.end:e.start,i=this.value_&&this.value_.start||this.modelConfig_.start.fillDate,s=t.start||t;a.start=this.normalizeDate(o,{...s,fillDate:i,patch:n});const c=e.start>e.end?e.start:e.end,u=this.value_&&this.value_.end||this.modelConfig_.end.fillDate,l=t.end||t;return a.end=this.normalizeDate(c,{...l,fillDate:u,patch:n}),this.sortRange(a,r)}return this.normalizeDate(e,{...t,fillDate:this.value_||this.modelConfig_.fillDate,patch:n})},adjustTimeForValue(e,t){return this.hasValue(e)?this.isRange?{start:this.$locale.adjustTimeForDate(e.start,t.start||t),end:this.$locale.adjustTimeForDate(e.end,t.end||t)}:this.$locale.adjustTimeForDate(e,t):null},sortRange(e,t=Un.NONE){const{start:n,end:r}=e;if(n>r)switch(t){case Un.START:return{start:n,end:n};case Un.END:return{start:r,end:r};case Un.BOTH:return{start:r,end:n}}return{start:n,end:r}},denormalizeValue(e,t=this.modelConfig_){return this.isRange?this.hasValue(e)?{start:this.$locale.denormalizeDate(e.start,t.start||t),end:this.$locale.denormalizeDate(e.end,t.end||t)}:null:this.$locale.denormalizeDate(e,t)},valuesAreEqual(e,t){if(this.isRange){const n=this.hasValue(e),r=this.hasValue(t);return!n&&!r||n===r&&(Object(ut["d"])(e.start,t.start)&&Object(ut["d"])(e.end,t.end))}return Object(ut["d"])(e,t)},valueIsDisabled(e){return this.hasValue(e)&&this.disabledAttribute&&this.disabledAttribute.intersectsDate(e)},formatInput(){var e=this;this.$nextTick((function(){const t={type:"string",mask:e.inputMask},n=e.denormalizeValue(e.dragValue||e.value_,t);e.isRange?e.inputValues=[n&&n.start,n&&n.end]:e.inputValues=[n,""]}))},showPopover(e={}){Qt({ref:this.$el,...this.popover_,...e,isInteractive:!0,id:this.datePickerPopoverId})},hidePopover(e={}){en({hideDelay:10,...this.popover_,...e,id:this.datePickerPopoverId})},togglePopover(e){tn({ref:this.$el,...this.popover_,...e,isInteractive:!0,id:this.datePickerPopoverId})},adjustPageRange(e){var t=this;this.$nextTick((function(){const n=t.$refs.calendar,r=t.getPageForValue(e),a=e?1:-1;r&&n&&!Object(ut["p"])(r,n.firstPage,n.lastPage)&&n.move(r,{position:a,transition:"fade"})}))},getPageForValue(e){return this.hasValue(this.value_)?this.pageForDate(this.isRange?this.value_[e?"start":"end"]:this.value_):null},move(e,t){return this.$refs.calendar?this.$refs.calendar.move(e,t):Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"))},focusDate(e,t){return this.$refs.calendar?this.$refs.calendar.focusDate(e,t):Promise.reject(new Error("Navigation disabled while calendar is not yet displayed"))}}},Gn=qn,Kn=ht(Gn,Bn,Zn,!1,null,null,null),Xn=Kn.exports},"2b10":function(e,t){function n(e,t,n){var r=-1,a=e.length;t<0&&(t=-t>a?0:a+t),n=n>a?a:n,n<0&&(n+=a),a=t>n?0:n-t>>>0,t>>>=0;var o=Array(a);while(++r<a)o[r]=e[r+t];return o}e.exports=n},"2b3e":function(e,t,n){var r=n("585a"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();e.exports=o},"2d00":function(e,t,n){var r,a,o=n("da84"),i=n("342f"),s=o.process,c=s&&s.versions,u=c&&c.v8;u?(r=u.split("."),a=r[0]<4?1:r[0]+r[1]):i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(a=r[1]))),e.exports=a&&+a},"2d7c":function(e,t){function n(e,t){var n=-1,r=null==e?0:e.length,a=0,o=[];while(++n<r){var i=e[n];t(i,n,e)&&(o[a++]=i)}return o}e.exports=n},"2dcb":function(e,t,n){var r=n("91e9"),a=r(Object.getPrototypeOf,Object);e.exports=a},"2ec1":function(e,t,n){var r=n("100e"),a=n("9aff");function o(e){return r((function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,s=o>2?n[2]:void 0;i=e.length>3&&"function"==typeof i?(o--,i):void 0,s&&a(n[0],n[1],s)&&(i=o<3?void 0:i,o=1),t=Object(t);while(++r<o){var c=n[r];c&&e(t,c,r,i)}return t}))}e.exports=o},"2fa3":function(e,t,n){"use strict";n.d(t,"m",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"r",(function(){return s})),n.d(t,"o",(function(){return c})),n.d(t,"n",(function(){return u})),n.d(t,"p",(function(){return l})),n.d(t,"q",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"s",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"i",(function(){return b})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return g})),n.d(t,"e",(function(){return y})),n.d(t,"l",(function(){return w})),n.d(t,"c",(function(){return x})),n.d(t,"g",(function(){return D}));n("ddb0");var r=n("9404");const a=function(e,t,n="0"){e=null!==e&&void 0!==e?String(e):"",t=t||2;while(e.length<t)e=`${n}${e}`;return e},o=function(e,t){return Object(r["k"])(e)?e(t):e},i=function(...e){const t={};return e.forEach((function(e){return Object.entries(e).forEach((function([e,n]){t[e]?Object(r["h"])(t[e])?t[e].push(n):t[e]=[t[e],n]:t[e]=n}))})),t},s=function(e){return!!(e&&e.month&&e.year)},c=function(e,t){return!(!s(e)||!s(t))&&(e.year===t.year?e.month<t.month:e.year<t.year)},u=function(e,t){return!(!s(e)||!s(t))&&(e.year===t.year?e.month>t.month:e.year>t.year)},l=function(e,t,n){return!!e&&!c(e,t)&&!u(e,n)},d=function(e,t){return!(!e&&t)&&(!(e&&!t)&&(!e&&!t||e.month===t.month&&e.year===t.year))},f=function({month:e,year:t},n){const r=n>0?1:-1;for(let a=0;a<Math.abs(n);a++)e+=r,e>12?(e=1,t++):e<1&&(e=12,t--);return{month:e,year:t}},p=function(e,t){if(!s(e)||!s(t))return[];const n=[];while(!u(e,t))n.push(e),e=f(e,1);return n};function h(e,t){const n=Object(r["j"])(e),a=Object(r["j"])(t);return!n&&!a||n===a&&e.getTime()===t.getTime()}const v=function(e){return Object(r["h"])(e)&&e.length},b=function(e,t,n){const a=[];return n.forEach((function(n){const o=n.name||n.toString(),i=n.mixin,s=n.validate;if(Object.prototype.hasOwnProperty.call(e,o)){const n=s?s(e[o]):e[o];t[o]=i&&Object(r["m"])(n)?{...i,...n}:n,a.push(o)}})),{target:t,assigned:a.length?a:null}},m=function(e,t,n,r){e&&t&&n&&e.addEventListener(t,n,r)},g=function(e,t,n,r){e&&t&&e.removeEventListener(t,n,r)},y=function(e,t){return!!e&&!!t&&(e===t||e.contains(t))},w=function(e,t){" "!==e.key&&"Enter"!==e.key||(t(e),e.preventDefault())},x=function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`};function D(e){let t,n=0,r=0;if(0===e.length)return n;for(r=0;r<e.length;r++)t=e.charCodeAt(r),n=(n<<5)-n+t,n|=0;return n}},"2fcc":function(e,t){function n(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n}e.exports=n},3092:function(e,t,n){var r=n("4284"),a=n("badf"),o=n("361d"),i=n("6747"),s=n("9aff");function c(e,t,n){var c=i(e)?r:o;return n&&s(e,t,n)&&(t=void 0),c(e,a(t,3))}e.exports=c},"30c9":function(e,t,n){var r=n("9520"),a=n("b218");function o(e){return null!=e&&a(e.length)&&!r(e)}e.exports=o},"32b3":function(e,t,n){var r=n("872a"),a=n("9638"),o=Object.prototype,i=o.hasOwnProperty;function s(e,t,n){var o=e[t];i.call(e,t)&&a(o,n)&&(void 0!==n||t in e)||r(e,t,n)}e.exports=s},"32f4":function(e,t,n){var r=n("2d7c"),a=n("d327"),o=Object.prototype,i=o.propertyIsEnumerable,s=Object.getOwnPropertySymbols,c=s?function(e){return null==e?[]:(e=Object(e),r(s(e),(function(t){return i.call(e,t)})))}:a;e.exports=c},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"34ac":function(e,t,n){var r=n("9520"),a=n("1368"),o=n("1a8c"),i=n("dc57"),s=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,u=Function.prototype,l=Object.prototype,d=u.toString,f=l.hasOwnProperty,p=RegExp("^"+d.call(f).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(e){if(!o(e)||a(e))return!1;var t=r(e)?p:c;return t.test(i(e))}e.exports=h},"34e9":function(e,t,n){"use strict";(function(e){n("ddb0");var r=n("2af9"),a=n("ed08");function o(e,t){if(o.installed)return;o.installed=!0;const n=a["setupCalendar"](t);Object.entries(r).forEach((function([t,r]){e.component(`${n.componentPrefix}${t}`,r)}))}n.d(t,"c",(function(){return r["Calendar"]})),n.d(t,"d",(function(){return r["CalendarNav"]})),n.d(t,"f",(function(){return r["DatePicker"]})),n.d(t,"h",(function(){return r["Popover"]})),n.d(t,"a",(function(){return a["Attribute"]})),n.d(t,"b",(function(){return a["AttributeStore"]})),n.d(t,"e",(function(){return a["DateInfo"]})),n.d(t,"g",(function(){return a["Locale"]})),n.d(t,"i",(function(){return a["addHorizontalSwipeHandler"]})),n.d(t,"j",(function(){return a["addPages"]})),n.d(t,"k",(function(){return a["addTapOrClickHandler"]})),n.d(t,"l",(function(){return a["arrayHasItems"]})),n.d(t,"m",(function(){return a["createGuid"]})),n.d(t,"n",(function(){return a["datesAreEqual"]})),n.d(t,"p",(function(){return a["elementContains"]})),n.d(t,"q",(function(){return a["evalFn"]})),n.d(t,"r",(function(){return a["hash"]})),n.d(t,"s",(function(){return a["mergeEvents"]})),n.d(t,"t",(function(){return a["mixinOptionalProps"]})),n.d(t,"u",(function(){return a["off"]})),n.d(t,"v",(function(){return a["on"]})),n.d(t,"w",(function(){return a["onSpaceOrEnter"]})),n.d(t,"x",(function(){return a["pad"]})),n.d(t,"y",(function(){return a["pageIsAfterPage"]})),n.d(t,"z",(function(){return a["pageIsBeforePage"]})),n.d(t,"A",(function(){return a["pageIsBetweenPages"]})),n.d(t,"B",(function(){return a["pageIsEqualToPage"]})),n.d(t,"C",(function(){return a["pageIsValid"]})),n.d(t,"D",(function(){return a["pageRangeToArray"]})),n.d(t,"E",(function(){return a["setupCalendar"]}));const i={install:o,...r,...a};let s=null;"undefined"!==typeof window?s=window.Vue:"undefined"!==typeof e&&(s=e.Vue),s&&s.use(i),t["o"]=i}).call(this,n("c8ba"))},"361d":function(e,t,n){var r=n("48a0");function a(e,t){var n;return r(e,(function(e,r,a){return n=t(e,r,a),!n})),!!n}e.exports=a},3621:function(e,t,n){var r=n("1349");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("4ffb218e",r,!0,{sourceMap:!1,shadowMode:!1})},3698:function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},3729:function(e,t,n){var r=n("9e69"),a=n("00fd"),o=n("29f3"),i="[object Null]",s="[object Undefined]",c=r?r.toStringTag:void 0;function u(e){return null==e?void 0===e?s:i:c&&c in Object(e)?a(e):o(e)}e.exports=u},"37e8":function(e,t,n){var r=n("83ab"),a=n("9bf2"),o=n("825a"),i=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=i(t),s=r.length,c=0;while(s>c)a.f(e,n=r[c++],t[n]);return e}},3818:function(e,t,n){var r=n("7e64"),a=n("8057"),o=n("32b3"),i=n("5b01"),s=n("0f0f"),c=n("e538"),u=n("4359"),l=n("54eb"),d=n("1041"),f=n("a994"),p=n("1bac"),h=n("42a2"),v=n("c87c"),b=n("c2b6"),m=n("fa21"),g=n("6747"),y=n("0d24"),w=n("cc45"),x=n("1a8c"),D=n("d7ee"),j=n("ec69"),O=n("9934"),k=1,M=2,P=4,Y="[object Arguments]",S="[object Array]",E="[object Boolean]",_="[object Date]",I="[object Error]",T="[object Function]",C="[object GeneratorFunction]",$="[object Map]",A="[object Number]",N="[object Object]",F="[object RegExp]",z="[object Set]",L="[object String]",H="[object Symbol]",R="[object WeakMap]",W="[object ArrayBuffer]",V="[object DataView]",U="[object Float32Array]",B="[object Float64Array]",Z="[object Int8Array]",q="[object Int16Array]",G="[object Int32Array]",K="[object Uint8Array]",X="[object Uint8ClampedArray]",J="[object Uint16Array]",Q="[object Uint32Array]",ee={};function te(e,t,n,S,E,_){var I,$=t&k,A=t&M,F=t&P;if(n&&(I=E?n(e,S,E,_):n(e)),void 0!==I)return I;if(!x(e))return e;var z=g(e);if(z){if(I=v(e),!$)return u(e,I)}else{var L=h(e),H=L==T||L==C;if(y(e))return c(e,$);if(L==N||L==Y||H&&!E){if(I=A||H?{}:m(e),!$)return A?d(e,s(I,e)):l(e,i(I,e))}else{if(!ee[L])return E?e:{};I=b(e,L,$)}}_||(_=new r);var R=_.get(e);if(R)return R;_.set(e,I),D(e)?e.forEach((function(r){I.add(te(r,t,n,r,e,_))})):w(e)&&e.forEach((function(r,a){I.set(a,te(r,t,n,a,e,_))}));var W=F?A?p:f:A?O:j,V=z?void 0:W(e);return a(V||e,(function(r,a){V&&(a=r,r=e[a]),o(I,a,te(r,t,n,a,e,_))})),I}ee[Y]=ee[S]=ee[W]=ee[V]=ee[E]=ee[_]=ee[U]=ee[B]=ee[Z]=ee[q]=ee[G]=ee[$]=ee[A]=ee[N]=ee[F]=ee[z]=ee[L]=ee[H]=ee[K]=ee[X]=ee[J]=ee[Q]=!0,ee[I]=ee[T]=ee[R]=!1,e.exports=te},3852:function(e,t,n){var r=n("96f3"),a=n("e2c0");function o(e,t){return null!=e&&a(e,t,r)}e.exports=o},"39ff":function(e,t,n){var r=n("0b07"),a=n("2b3e"),o=r(a,"WeakMap");e.exports=o},"3b4a":function(e,t,n){var r=n("0b07"),a=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=a},"3bb4":function(e,t,n){var r=n("08cc"),a=n("ec69");function o(e){var t=a(e),n=t.length;while(n--){var o=t[n],i=e[o];t[n]=[o,i,r(i)]}return t}e.exports=o},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},"3c55":function(e,t,n){"use strict";var r=n("e969"),a=n.n(r);a.a},"3db9":function(e,t,n){var r=n("adc8");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("2b7f9a9d",r,!0,{sourceMap:!1,shadowMode:!1})},"3ee2":function(e,t,n){var r=n("dc8c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("13d41af5",r,!0,{sourceMap:!1,shadowMode:!1})},"3eea":function(e,t,n){var r=n("7948"),a=n("3818"),o=n("4bb5"),i=n("e2e4"),s=n("8eeb"),c=n("e0e7"),u=n("c6cf"),l=n("1bac"),d=1,f=2,p=4,h=u((function(e,t){var n={};if(null==e)return n;var u=!1;t=r(t,(function(t){return t=i(t,e),u||(u=t.length>1),t})),s(e,l(e),n),u&&(n=a(n,d|f|p,c));var h=t.length;while(h--)o(n,t[h]);return n}));e.exports=h},"3f84":function(e,t,n){var r=n("85e3"),a=n("100e"),o=n("e031"),i=n("2411"),s=a((function(e){return e.push(void 0,o),r(i,void 0,e)}));e.exports=s},"3f8c":function(e,t){e.exports={}},"41c3":function(e,t,n){var r=n("1a8c"),a=n("eac5"),o=n("ec8c"),i=Object.prototype,s=i.hasOwnProperty;function c(e){if(!r(e))return o(e);var t=a(e),n=[];for(var i in e)("constructor"!=i||!t&&s.call(e,i))&&n.push(i);return n}e.exports=c},4245:function(e,t,n){var r=n("1290");function a(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}e.exports=a},4284:function(e,t){function n(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(t(e[n],n,e))return!0;return!1}e.exports=n},"428f":function(e,t,n){var r=n("da84");e.exports=r},"42a2":function(e,t,n){var r=n("b5a7"),a=n("79bc"),o=n("1cec"),i=n("c869"),s=n("39ff"),c=n("3729"),u=n("dc57"),l="[object Map]",d="[object Object]",f="[object Promise]",p="[object Set]",h="[object WeakMap]",v="[object DataView]",b=u(r),m=u(a),g=u(o),y=u(i),w=u(s),x=c;(r&&x(new r(new ArrayBuffer(1)))!=v||a&&x(new a)!=l||o&&x(o.resolve())!=f||i&&x(new i)!=p||s&&x(new s)!=h)&&(x=function(e){var t=c(e),n=t==d?e.constructor:void 0,r=n?u(n):"";if(r)switch(r){case b:return v;case m:return l;case g:return f;case y:return p;case w:return h}return t}),e.exports=x},4359:function(e,t){function n(e,t){var n=-1,r=e.length;t||(t=Array(r));while(++n<r)t[n]=e[n];return t}e.exports=n},4416:function(e,t){function n(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}e.exports=n},4440:function(e,t,n){"use strict";var r=n("3621"),a=n.n(r);a.a},"44ad":function(e,t,n){var r=n("d039"),a=n("c6b6"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?o.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),a=n("7c73"),o=n("9bf2"),i=r("unscopables"),s=Array.prototype;void 0==s[i]&&o.f(s,i,{configurable:!0,value:a(null)}),e.exports=function(e){s[i][e]=!0}},4746:function(e,t,n){var r=n("973b");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("3c500e11",r,!0,{sourceMap:!1,shadowMode:!1})},4889:function(e,t,n){"use strict";var r=n("df9e"),a=n.n(r);a.a},"48a0":function(e,t,n){var r=n("242e"),a=n("950a"),o=a(r);e.exports=o},4930:function(e,t,n){var r=n("2d00"),a=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!a((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"495a":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-pane[data-v-74ad501d]{min-width:250px}.vc-header[data-v-74ad501d]{display:flex;justify-content:center;align-items:center;padding:10px 18px 0 18px}.vc-header.align-left[data-v-74ad501d]{justify-content:flex-start}.vc-header.align-right[data-v-74ad501d]{justify-content:flex-end}.vc-title[data-v-74ad501d]{font-size:var(--text-lg);color:var(--gray-800);font-weight:var(--font-semibold);line-height:28px;cursor:pointer;-webkit-user-select:none;user-select:none;white-space:nowrap}.vc-title[data-v-74ad501d]:hover{opacity:.75}.vc-weeknumber[data-v-74ad501d]{position:relative}.vc-weeknumber[data-v-74ad501d],.vc-weeknumber-content[data-v-74ad501d]{display:flex;justify-content:center;align-items:center}.vc-weeknumber-content[data-v-74ad501d]{font-size:var(--text-xs);font-weight:var(--font-medium);font-style:italic;width:28px;height:28px;margin-top:2px;color:var(--gray-500);-webkit-user-select:none;user-select:none}.vc-weeknumber-content.is-left-outside[data-v-74ad501d]{position:absolute;left:var(--weeknumber-offset)}.vc-weeknumber-content.is-right-outside[data-v-74ad501d]{position:absolute;right:var(--weeknumber-offset)}.vc-weeks[data-v-74ad501d]{display:grid;grid-template-columns:repeat(7,1fr);position:relative;-webkit-overflow-scrolling:touch;padding:5px;min-width:250px}.vc-weeks.vc-show-weeknumbers[data-v-74ad501d]{grid-template-columns:auto repeat(7,1fr)}.vc-weeks.vc-show-weeknumbers.is-right[data-v-74ad501d]{grid-template-columns:repeat(7,1fr) auto}.vc-weekday[data-v-74ad501d]{text-align:center;color:var(--gray-500);font-size:var(--text-sm);font-weight:var(--font-bold);line-height:14px;padding-top:4px;padding-bottom:8px;cursor:default;-webkit-user-select:none;user-select:none}.vc-is-dark .vc-header[data-v-74ad501d]{color:var(--gray-200)}.vc-is-dark .vc-title[data-v-74ad501d]{color:var(--gray-100)}.vc-is-dark .vc-weekday[data-v-74ad501d]{color:var(--accent-200)}",""]),e.exports=t},"499e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],c=o[2],u=o[3],l={id:e+":"+a,css:s,media:c,sourceMap:u};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var a="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=a&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,l=function(){},d=null,f="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,a){u=n,d=a||{};var i=r(e,t);return v(i),function(t){for(var n=[],a=0;a<i.length;a++){var s=i[a],c=o[s.id];c.refs--,n.push(c)}t?(i=r(e,t),v(i)):i=[];for(a=0;a<n.length;a++){c=n[a];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=o[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(m(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(m(n.parts[a]));o[n.id]={id:n.id,refs:1,parts:i}}}}function b(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(p){var a=c++;r=s||(s=b()),t=y.bind(null,r,a,!1),n=y.bind(null,r,a,!0)}else r=b(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function w(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(f,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},"49f4":function(e,t,n){var r=n("6044");function a(){this.__data__=r?r(null):{},this.size=0}e.exports=a},"4bb5":function(e,t,n){var r=n("e2e4"),a=n("4416"),o=n("8296"),i=n("f4d6");function s(e,t){return t=r(t,e),e=o(e,t),null==e||delete e[i(a(t))]}e.exports=s},"4cef":function(e,t){var n=/\s/;function r(e){var t=e.length;while(t--&&n.test(e.charAt(t)));return t}e.exports=r},"4cfe":function(e,t){function n(e){return void 0===e}e.exports=n},"4d64":function(e,t,n){var r=n("fc6a"),a=n("50c4"),o=n("23cb"),i=function(e){return function(t,n,i){var s,c=r(t),u=a(c.length),l=o(i,u);if(e&&n!=n){while(u>l)if(s=c[l++],s!=s)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},"4d8c":function(e,t,n){var r=n("5c69");function a(e){var t=null==e?0:e.length;return t?r(e,1):[]}e.exports=a},"4f46":function(e,t,n){"use strict";var r=n("4746"),a=n.n(r);a.a},"4f50":function(e,t,n){var r=n("b760"),a=n("e538"),o=n("c8fe"),i=n("4359"),s=n("fa21"),c=n("d370"),u=n("6747"),l=n("dcbe"),d=n("0d24"),f=n("9520"),p=n("1a8c"),h=n("60ed"),v=n("73ac"),b=n("8adb"),m=n("8de2");function g(e,t,n,g,y,w,x){var D=b(e,n),j=b(t,n),O=x.get(j);if(O)r(e,n,O);else{var k=w?w(D,j,n+"",e,t,x):void 0,M=void 0===k;if(M){var P=u(j),Y=!P&&d(j),S=!P&&!Y&&v(j);k=j,P||Y||S?u(D)?k=D:l(D)?k=i(D):Y?(M=!1,k=a(j,!0)):S?(M=!1,k=o(j,!0)):k=[]:h(j)||c(j)?(k=D,c(D)?k=m(D):p(D)&&!f(D)||(k=s(j))):M=!1}M&&(x.set(j,k),y(k,j,g,w,x),x["delete"](j)),r(e,n,k)}}e.exports=g},"501e":function(e,t,n){var r=n("3729"),a=n("1310"),o="[object Number]";function i(e){return"number"==typeof e||a(e)&&r(e)==o}e.exports=i},"50c4":function(e,t,n){var r=n("a691"),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},"50d8":function(e,t){function n(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}e.exports=n},5135:function(e,t,n){var r=n("7b0b"),a={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return a.call(r(e),t)}},"51ec":function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n("8bbf"),a=n.n(r),o=n("9404"),i=n("23a5"),s=n("7efe"),c=n("85a9"),u=n("f15d");const l={componentPrefix:"v",navVisibility:"click",titlePosition:"center",transition:"slide-h",touch:i,masks:s,screens:c,locales:u["a"],datePicker:{updateOnInput:!0,inputDebounce:1e3,popover:{visibility:"hover-focus",placement:"bottom-start",keepVisibleOnInput:!1,isInteractive:!0}}};let d=null;const f=function(e){return d||(d=new a.a({data(){return{defaults:Object(o["c"])(e,l)}},computed:{locales(){var e=this;return Object(o["r"])(this.defaults.locales,(function(t){return t.masks=Object(o["c"])(t.masks,e.defaults.masks),t}))}}})),d.defaults},p={beforeCreate(){f()},computed:{$defaults(){return d.defaults},$locales(){return d.locales}},methods:{propOrDefault(e,t,n){return this.passedProp(e,Object(o["d"])(this.$defaults,t),n)},passedProp(e,t,n){if(Object(o["e"])(this.$options.propsData,e)){const r=this[e];return Object(o["m"])(r)&&"merge"===n?Object(o["c"])(r,t):r}return t}}}},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("d039"),o=n("825a"),i=n("50c4"),s=n("a691"),c=n("1d80"),u=n("8aa5"),l=n("0cb2"),d=n("14c3"),f=n("b622"),p=f("replace"),h=Math.max,v=Math.min,b=function(e){return void 0===e?e:String(e)},m=function(){return"$0"==="a".replace(/./,"$0")}(),g=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),y=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=g?"$":"$0";return[function(e,n){var r=c(this),a=void 0==e?void 0:e[p];return void 0!==a?a.call(e,r,n):t.call(String(r),e,n)},function(e,a){if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var c=n(t,this,e,a);if(c.done)return c.value}var f=o(this),p=String(e),m="function"===typeof a;m||(a=String(a));var g=f.global;if(g){var y=f.unicode;f.lastIndex=0}var w=[];while(1){var x=d(f,p);if(null===x)break;if(w.push(x),!g)break;var D=String(x[0]);""===D&&(f.lastIndex=u(p,i(f.lastIndex),y))}for(var j="",O=0,k=0;k<w.length;k++){x=w[k];for(var M=String(x[0]),P=h(v(s(x.index),p.length),0),Y=[],S=1;S<x.length;S++)Y.push(b(x[S]));var E=x.groups;if(m){var _=[M].concat(Y,P,p);void 0!==E&&_.push(E);var I=String(a.apply(void 0,_))}else I=l(M,p,P,Y,E,a);P>=O&&(j+=p.slice(O,P)+I,O=P+M.length)}return j+p.slice(O)}]}),!y||!m||g)},"53b1":function(e,t,n){var r=n("495a");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("2a6e04f4",r,!0,{sourceMap:!1,shadowMode:!1})},"54eb":function(e,t,n){var r=n("8eeb"),a=n("32f4");function o(e,t){return r(e,a(e),t)}e.exports=o},"55a3":function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},5692:function(e,t,n){var r=n("c430"),a=n("c6cd");(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.15.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),a=n("241c"),o=n("7418"),i=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},"57a5":function(e,t,n){var r=n("91e9"),a=r(Object.keys,Object);e.exports=a},"585a":function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("c8ba"))},"5b01":function(e,t,n){var r=n("8eeb"),a=n("ec69");function o(e,t){return e&&r(t,a(t),e)}e.exports=o},"5c69":function(e,t,n){var r=n("087d"),a=n("0621");function o(e,t,n,i,s){var c=-1,u=e.length;n||(n=a),s||(s=[]);while(++c<u){var l=e[c];t>0&&n(l)?t>1?o(l,t-1,n,i,s):r(s,l):i||(s[s.length]=l)}return s}e.exports=o},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5d89":function(e,t,n){var r=n("f8af");function a(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}e.exports=a},"5e2e":function(e,t,n){var r=n("28c9"),a=n("69d5"),o=n("b4c0"),i=n("fba5"),s=n("67ca");function c(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype["delete"]=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,e.exports=c},6044:function(e,t,n){var r=n("0b07"),a=r(Object,"create");e.exports=a},"60ed":function(e,t,n){var r=n("3729"),a=n("2dcb"),o=n("1310"),i="[object Object]",s=Function.prototype,c=Object.prototype,u=s.toString,l=c.hasOwnProperty,d=u.call(Object);function f(e){if(!o(e)||r(e)!=i)return!1;var t=a(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&u.call(n)==d}e.exports=f},6220:function(e,t,n){var r=n("b1d2"),a=n("b047"),o=n("99d3"),i=o&&o.isDate,s=i?a(i):r;e.exports=s},"62e4":function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"642a":function(e,t,n){var r=n("966f"),a=n("3bb4"),o=n("20ec");function i(e){var t=a(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(n){return n===e||r(n,e,t)}}e.exports=i},6547:function(e,t,n){var r=n("a691"),a=n("1d80"),o=function(e){return function(t,n){var o,i,s=String(a(t)),c=r(n),u=s.length;return c<0||c>=u?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(i=s.charCodeAt(c+1))<56320||i>57343?e?s.charAt(c):o:e?s.slice(c,c+2):i-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"656b":function(e,t,n){var r=n("e2e4"),a=n("f4d6");function o(e,t){t=r(t,e);var n=0,o=t.length;while(null!=e&&n<o)e=e[a(t[n++])];return n&&n==o?e:void 0}e.exports=o},6679:function(e,t,n){var r=n("3729"),a=n("1310"),o="[object Boolean]";function i(e){return!0===e||!1===e||a(e)&&r(e)==o}e.exports=i},6747:function(e,t){var n=Array.isArray;e.exports=n},"67ca":function(e,t,n){var r=n("cb5a");function a(e,t){var n=this.__data__,a=r(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}e.exports=a},"69d5":function(e,t,n){var r=n("cb5a"),a=Array.prototype,o=a.splice;function i(e){var t=this.__data__,n=r(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():o.call(t,n,1),--this.size,!0}e.exports=i},"69f3":function(e,t,n){var r,a,o,i=n("7f9a"),s=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),d=n("c6cd"),f=n("f772"),p=n("d012"),h="Object already initialized",v=s.WeakMap,b=function(e){return o(e)?a(e):r(e,{})},m=function(e){return function(t){var n;if(!c(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(i||d.state){var g=d.state||(d.state=new v),y=g.get,w=g.has,x=g.set;r=function(e,t){if(w.call(g,e))throw new TypeError(h);return t.facade=e,x.call(g,e,t),t},a=function(e){return y.call(g,e)||{}},o=function(e){return w.call(g,e)}}else{var D=f("state");p[D]=!0,r=function(e,t){if(l(e,D))throw new TypeError(h);return t.facade=e,u(e,D,t),t},a=function(e){return l(e,D)?e[D]:{}},o=function(e){return l(e,D)}}e.exports={set:r,get:a,has:o,enforce:b,getterFor:m}},"6a43":function(e,t,n){var r=n("a10d");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("79e769b1",r,!0,{sourceMap:!1,shadowMode:!1})},"6eeb":function(e,t,n){var r=n("da84"),a=n("9112"),o=n("5135"),i=n("ce4e"),s=n("8925"),c=n("69f3"),u=c.get,l=c.enforce,d=String(String).split("String");(e.exports=function(e,t,n,s){var c,u=!!s&&!!s.unsafe,f=!!s&&!!s.enumerable,p=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||a(n,"name",t),c=l(n),c.source||(c.source=d.join("string"==typeof t?t:""))),e!==r?(u?!p&&e[t]&&(f=!0):delete e[t],f?e[t]=n:a(e,t,n)):f?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||s(this)}))},"6f6c":function(e,t){var n=/\w*$/;function r(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}e.exports=r},"6fcd":function(e,t,n){var r=n("50d8"),a=n("d370"),o=n("6747"),i=n("0d24"),s=n("c098"),c=n("73ac"),u=Object.prototype,l=u.hasOwnProperty;function d(e,t){var n=o(e),u=!n&&a(e),d=!n&&!u&&i(e),f=!n&&!u&&!d&&c(e),p=n||u||d||f,h=p?r(e.length,String):[],v=h.length;for(var b in e)!t&&!l.call(e,b)||p&&("length"==b||d&&("offset"==b||"parent"==b)||f&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||s(b,v))||h.push(b);return h}e.exports=d},"70b8":function(e,t,n){var r=n("fcff");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("407d10db",r,!0,{sourceMap:!1,shadowMode:!1})},"72af":function(e,t,n){var r=n("99cd"),a=r();e.exports=a},"72f0":function(e,t){function n(e){return function(){return e}}e.exports=n},"72f5":function(e,t,n){var r=n("9e2e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("2997fbdf",r,!0,{sourceMap:!1,shadowMode:!1})},"73ac":function(e,t,n){var r=n("743f"),a=n("b047"),o=n("99d3"),i=o&&o.isTypedArray,s=i?a(i):r;e.exports=s},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"743f":function(e,t,n){var r=n("3729"),a=n("b218"),o=n("1310"),i="[object Arguments]",s="[object Array]",c="[object Boolean]",u="[object Date]",l="[object Error]",d="[object Function]",f="[object Map]",p="[object Number]",h="[object Object]",v="[object RegExp]",b="[object Set]",m="[object String]",g="[object WeakMap]",y="[object ArrayBuffer]",w="[object DataView]",x="[object Float32Array]",D="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",k="[object Int32Array]",M="[object Uint8Array]",P="[object Uint8ClampedArray]",Y="[object Uint16Array]",S="[object Uint32Array]",E={};function _(e){return o(e)&&a(e.length)&&!!E[r(e)]}E[x]=E[D]=E[j]=E[O]=E[k]=E[M]=E[P]=E[Y]=E[S]=!0,E[i]=E[s]=E[y]=E[c]=E[w]=E[u]=E[l]=E[d]=E[f]=E[p]=E[h]=E[v]=E[b]=E[m]=E[g]=!1,e.exports=_},7530:function(e,t,n){var r=n("1a8c"),a=Object.create,o=function(){function e(){}return function(t){if(!r(t))return{};if(a)return a(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=o},"76dd":function(e,t,n){var r=n("ce86");function a(e){return null==e?"":r(e)}e.exports=a},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7948:function(e,t){function n(e,t){var n=-1,r=null==e?0:e.length,a=Array(r);while(++n<r)a[n]=t(e[n],n,e);return a}e.exports=n},"79bc":function(e,t,n){var r=n("0b07"),a=n("2b3e"),o=r(a,"Map");e.exports=o},"7a48":function(e,t,n){var r=n("6044"),a=Object.prototype,o=a.hasOwnProperty;function i(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}e.exports=i},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7b83":function(e,t,n){var r=n("7c64"),a=n("93ed"),o=n("2478"),i=n("a524"),s=n("1fc8");function c(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype["delete"]=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,e.exports=c},"7b97":function(e,t,n){var r=n("7e64"),a=n("a2be"),o=n("1c3c"),i=n("b1e5"),s=n("42a2"),c=n("6747"),u=n("0d24"),l=n("73ac"),d=1,f="[object Arguments]",p="[object Array]",h="[object Object]",v=Object.prototype,b=v.hasOwnProperty;function m(e,t,n,v,m,g){var y=c(e),w=c(t),x=y?p:s(e),D=w?p:s(t);x=x==f?h:x,D=D==f?h:D;var j=x==h,O=D==h,k=x==D;if(k&&u(e)){if(!u(t))return!1;y=!0,j=!1}if(k&&!j)return g||(g=new r),y||l(e)?a(e,t,n,v,m,g):o(e,t,x,n,v,m,g);if(!(n&d)){var M=j&&b.call(e,"__wrapped__"),P=O&&b.call(t,"__wrapped__");if(M||P){var Y=M?e.value():e,S=P?t.value():t;return g||(g=new r),m(Y,S,n,v,g)}}return!!k&&(g||(g=new r),i(e,t,n,v,m,g))}e.exports=m},"7c64":function(e,t,n){var r=n("e24b"),a=n("5e2e"),o=n("79bc");function i(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}e.exports=i},"7c73":function(e,t,n){var r,a=n("825a"),o=n("37e8"),i=n("7839"),s=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",f="<",p="prototype",h="script",v=l("IE_PROTO"),b=function(){},m=function(e){return f+h+d+e+f+"/"+h+d},g=function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+h+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(m("document.F=Object")),e.close(),e.F},w=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}w=r?g(r):y();var e=i.length;while(e--)delete w[p][i[e]];return w()};s[v]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(b[p]=a(e),n=new b,b[p]=null,n[v]=e):n=w(),void 0===t?n:o(n,t)}},"7d1f":function(e,t,n){var r=n("087d"),a=n("6747");function o(e,t,n){var o=t(e);return a(e)?o:r(o,n(e))}e.exports=o},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),a=n("9ed3"),o=n("e163"),i=n("d2bb"),s=n("d44e"),c=n("9112"),u=n("6eeb"),l=n("b622"),d=n("c430"),f=n("3f8c"),p=n("ae93"),h=p.IteratorPrototype,v=p.BUGGY_SAFARI_ITERATORS,b=l("iterator"),m="keys",g="values",y="entries",w=function(){return this};e.exports=function(e,t,n,l,p,x,D){a(n,t,l);var j,O,k,M=function(e){if(e===p&&_)return _;if(!v&&e in S)return S[e];switch(e){case m:return function(){return new n(this,e)};case g:return function(){return new n(this,e)};case y:return function(){return new n(this,e)}}return function(){return new n(this)}},P=t+" Iterator",Y=!1,S=e.prototype,E=S[b]||S["@@iterator"]||p&&S[p],_=!v&&E||M(p),I="Array"==t&&S.entries||E;if(I&&(j=o(I.call(new e)),h!==Object.prototype&&j.next&&(d||o(j)===h||(i?i(j,h):"function"!=typeof j[b]&&c(j,b,w)),s(j,P,!0,!0),d&&(f[P]=w))),p==g&&E&&E.name!==g&&(Y=!0,_=function(){return E.call(this)}),d&&!D||S[b]===_||c(S,b,_),f[t]=_,p)if(O={values:M(g),keys:x?_:M(m),entries:M(y)},D)for(k in O)(v||Y||!(k in S))&&u(S,k,O[k]);else r({target:t,proto:!0,forced:v||Y},O);return O}},"7dfe":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".none-enter-active[data-v-5be4b00c],.none-leave-active[data-v-5be4b00c]{transition-duration:0s}.fade-enter-active[data-v-5be4b00c],.fade-leave-active[data-v-5be4b00c],.slide-down-enter-active[data-v-5be4b00c],.slide-down-leave-active[data-v-5be4b00c],.slide-left-enter-active[data-v-5be4b00c],.slide-left-leave-active[data-v-5be4b00c],.slide-right-enter-active[data-v-5be4b00c],.slide-right-leave-active[data-v-5be4b00c],.slide-up-enter-active[data-v-5be4b00c],.slide-up-leave-active[data-v-5be4b00c]{transition:transform var(--slide-duration) var(--slide-timing),opacity var(--slide-duration) var(--slide-timing);-webkit-backface-visibility:hidden;backface-visibility:hidden}.fade-leave-active[data-v-5be4b00c],.none-leave-active[data-v-5be4b00c],.slide-down-leave-active[data-v-5be4b00c],.slide-left-leave-active[data-v-5be4b00c],.slide-right-leave-active[data-v-5be4b00c],.slide-up-leave-active[data-v-5be4b00c]{position:absolute;width:100%}.fade-enter[data-v-5be4b00c],.fade-leave-to[data-v-5be4b00c],.none-enter[data-v-5be4b00c],.none-leave-to[data-v-5be4b00c],.slide-down-enter[data-v-5be4b00c],.slide-down-leave-to[data-v-5be4b00c],.slide-left-enter[data-v-5be4b00c],.slide-left-leave-to[data-v-5be4b00c],.slide-right-enter[data-v-5be4b00c],.slide-right-leave-to[data-v-5be4b00c],.slide-up-enter[data-v-5be4b00c],.slide-up-leave-to[data-v-5be4b00c]{opacity:0}.slide-left-enter[data-v-5be4b00c],.slide-right-leave-to[data-v-5be4b00c]{transform:translateX(var(--slide-translate))}.slide-left-leave-to[data-v-5be4b00c],.slide-right-enter[data-v-5be4b00c]{transform:translateX(calc(var(--slide-translate)*-1))}.slide-down-leave-to[data-v-5be4b00c],.slide-up-enter[data-v-5be4b00c]{transform:translateY(var(--slide-translate))}.slide-down-enter[data-v-5be4b00c],.slide-up-leave-to[data-v-5be4b00c]{transform:translateY(calc(var(--slide-translate)*-1))}",""]),e.exports=t},"7e64":function(e,t,n){var r=n("5e2e"),a=n("efb6"),o=n("2fcc"),i=n("802a"),s=n("55a3"),c=n("d02c");function u(e){var t=this.__data__=new r(e);this.size=t.size}u.prototype.clear=a,u.prototype["delete"]=o,u.prototype.get=i,u.prototype.has=s,u.prototype.set=c,e.exports=u},"7ed2":function(e,t){var n="__lodash_hash_undefined__";function r(e){return this.__data__.set(e,n),this}e.exports=r},"7efe":function(e){e.exports=JSON.parse('{"title":"MMMM YYYY","weekdays":"W","navMonths":"MMM","input":["L","YYYY-MM-DD","YYYY/MM/DD"],"inputDateTime":["L h:mm A","YYYY-MM-DD h:mm A","YYYY/MM/DD h:mm A"],"inputDateTime24hr":["L HH:mm","YYYY-MM-DD HH:mm","YYYY/MM/DD HH:mm"],"inputTime":["h:mm A"],"inputTime24hr":["HH:mm"],"dayPopover":"WWW, MMM D, YYYY","data":["L","YYYY-MM-DD","YYYY/MM/DD"],"iso":"YYYY-MM-DDTHH:mm:ss.SSSZ"}')},"7f9a":function(e,t,n){var r=n("da84"),a=n("8925"),o=r.WeakMap;e.exports="function"===typeof o&&/native code/.test(a(o))},"802a":function(e,t){function n(e){return this.__data__.get(e)}e.exports=n},8057:function(e,t){function n(e,t){var n=-1,r=null==e?0:e.length;while(++n<r)if(!1===t(e[n],n,e))break;return e}e.exports=n},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},8296:function(e,t,n){var r=n("656b"),a=n("2b10");function o(e,t){return t.length<2?e:r(e,a(t,0,-1))}e.exports=o},8384:function(e,t){function n(e,t,n){return e===e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}e.exports=n},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"85a9":function(e){e.exports=JSON.parse('{"sm":"640px","md":"768px","lg":"1024px","xl":"1280px"}')},"85e3":function(e,t){function n(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}e.exports=n},8604:function(e,t,n){var r=n("26e8"),a=n("e2c0");function o(e,t){return null!=e&&a(e,t,r)}e.exports=o},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"872a":function(e,t,n){var r=n("3b4a");function a(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}e.exports=a},8925:function(e,t,n){var r=n("c6cd"),a=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return a.call(e)}),e.exports=r.inspectSource},"89d9":function(e,t,n){var r=n("656b"),a=n("159a"),o=n("e2e4");function i(e,t,n){var i=-1,s=t.length,c={};while(++i<s){var u=t[i],l=r(e,u);n(l,u)&&a(c,o(u,e),l)}return c}e.exports=i},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8adb":function(e,t){function n(e,t){if(("constructor"!==t||"function"!==typeof e[t])&&"__proto__"!=t)return e[t]}e.exports=n},"8bbf":function(t,n){t.exports=e},"8c86":function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,"a",(function(){return r}))},"8d74":function(e,t,n){var r=n("4cef"),a=/^\s+/;function o(e){return e?e.slice(0,r(e)+1).replace(a,""):e}e.exports=o},"8de2":function(e,t,n){var r=n("8eeb"),a=n("9934");function o(e){return r(e,a(e))}e.exports=o},"8eeb":function(e,t,n){var r=n("32b3"),a=n("872a");function o(e,t,n,o){var i=!n;n||(n={});var s=-1,c=t.length;while(++s<c){var u=t[s],l=o?o(n[u],e[u],u,n,e):void 0;void 0===l&&(l=e[u]),i?a(n,u,l):r(n,u,l)}return n}e.exports=o},9010:function(e,t,n){"use strict";var r=n("70b8"),a=n.n(r);a.a},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),a=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return a.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"91e9":function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),o=n("5692"),i=n("7c73"),s=n("69f3").get,c=n("fce3"),u=n("107c"),l=RegExp.prototype.exec,d=o("native-string-replace",String.prototype.replace),f=l,p=function(){var e=/a/,t=/b*/g;return l.call(e,"a"),l.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),h=a.UNSUPPORTED_Y||a.BROKEN_CARET,v=void 0!==/()??/.exec("")[1],b=p||v||h||c||u;b&&(f=function(e){var t,n,a,o,c,u,b,m=this,g=s(m),y=g.raw;if(y)return y.lastIndex=m.lastIndex,t=f.call(y,e),m.lastIndex=y.lastIndex,t;var w=g.groups,x=h&&m.sticky,D=r.call(m),j=m.source,O=0,k=e;if(x&&(D=D.replace("y",""),-1===D.indexOf("g")&&(D+="g"),k=String(e).slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==e[m.lastIndex-1])&&(j="(?: "+j+")",k=" "+k,O++),n=new RegExp("^(?:"+j+")",D)),v&&(n=new RegExp("^"+j+"$(?!\\s)",D)),p&&(a=m.lastIndex),o=l.call(x?n:m,k),x?o?(o.input=o.input.slice(O),o[0]=o[0].slice(O),o.index=m.lastIndex,m.lastIndex+=o[0].length):m.lastIndex=0:p&&o&&(m.lastIndex=m.global?o.index+o[0].length:a),v&&o&&o.length>1&&d.call(o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&w)for(o.groups=u=i(null),c=0;c<w.length;c++)b=w[c],u[b[0]]=o[b[1]];return o}),e.exports=f},9349:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("ddb0");var r=n("22f3"),a=n("2fa3");class o{constructor(e,t,n){this.theme=e,this.locale=t,this.map={},this.refresh(n,!0)}refresh(e,t){var n=this;const o={},i=[];let s=null;const c=[],u=t?new Set:new Set(Object.keys(this.map));return Object(a["b"])(e)&&e.forEach((function(e,l){if(!e||!e.dates)return;const d=e.key?e.key.toString():l.toString(),f=e.order||0,p=Object(a["g"])(JSON.stringify(e));let h=n.map[d];!t&&h&&h.hashcode===p?u.delete(d):(h=new r["a"]({key:d,order:f,hashcode:p,...e},n.theme,n.locale),c.push(h)),h&&h.pinPage&&(s=h),o[d]=h,i.push(h)})),this.map=o,this.list=i,this.pinAttr=s,{adds:c,deletes:Array.from(u)}}}},"93ed":function(e,t,n){var r=n("4245");function a(e){var t=r(this,e)["delete"](e);return this.size-=t?1:0,t}e.exports=a},9404:function(e,t,n){"use strict";n.d(t,"j",(function(){return B})),n.d(t,"m",(function(){return Z})),n.d(t,"e",(function(){return q})),n.d(t,"f",(function(){return G})),n.d(t,"v",(function(){return K}));var r=n("6679"),a=n.n(r);n.d(t,"i",(function(){return a.a}));var o=n("501e"),i=n.n(o);n.d(t,"l",(function(){return i.a}));var s=n("e2a0"),c=n.n(s);n.d(t,"n",(function(){return c.a}));var u=n("dcbe"),l=n.n(u);n.d(t,"h",(function(){return l.a}));var d=n("9520"),f=n.n(d);n.d(t,"k",(function(){return f.a}));var p=n("4cfe"),h=n.n(p);n.d(t,"o",(function(){return h.a}));var v=n("6220"),b=n.n(v),m=n("f678"),g=n.n(m);n.d(t,"a",(function(){return g.a}));var y=n("9b02"),w=n.n(y);n.d(t,"d",(function(){return w.a}));var x=n("0f5c"),D=n.n(x);n.d(t,"u",(function(){return D.a}));var j=n("9e86"),O=n.n(j);n.d(t,"r",(function(){return O.a}));var k=n("f542"),M=n.n(k);n.d(t,"w",(function(){return M.a}));var P=n("95ae"),Y=n.n(P);n.d(t,"b",(function(){return Y.a}));var S=n("3f84"),E=n.n(S);n.d(t,"c",(function(){return E.a}));var _=n("2593"),I=n.n(_);n.d(t,"t",(function(){return I.a}));var T=n("3eea"),C=n.n(T);n.d(t,"s",(function(){return C.a}));var $=n("3852"),A=n.n($),N=n("dd61"),F=n.n(N);n.d(t,"q",(function(){return F.a}));var z=n("a59b"),L=n.n(z);n.d(t,"g",(function(){return L.a}));var H=n("4416"),R=n.n(H);n.d(t,"p",(function(){return R.a}));var W=n("3092"),V=n.n(W);const U=function(e){return Object.prototype.toString.call(e).slice(8,-1)},B=function(e){return b()(e)&&!isNaN(e.getTime())},Z=function(e){return"Object"===U(e)},q=A.a,G=function(e,t){return V()(t,(function(t){return A()(e,t)}))},K=V.a},"94ca":function(e,t,n){var r=n("d039"),a=/#|\.prototype\./,o=function(e,t){var n=s[i(e)];return n==u||n!=c&&("function"==typeof t?r(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},s=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},"950a":function(e,t,n){var r=n("30c9");function a(e,t){return function(n,a){if(null==n)return n;if(!r(n))return e(n,a);var o=n.length,i=t?o:-1,s=Object(n);while(t?i--:++i<o)if(!1===a(s[i],i,s))break;return n}}e.exports=a},9520:function(e,t,n){var r=n("3729"),a=n("1a8c"),o="[object AsyncFunction]",i="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";function u(e){if(!a(e))return!1;var t=r(e);return t==i||t==s||t==o||t==c}e.exports=u},"95ae":function(e,t,n){var r=n("100e"),a=n("9638"),o=n("9aff"),i=n("9934"),s=Object.prototype,c=s.hasOwnProperty,u=r((function(e,t){e=Object(e);var n=-1,r=t.length,u=r>2?t[2]:void 0;u&&o(t[0],t[1],u)&&(r=1);while(++n<r){var l=t[n],d=i(l),f=-1,p=d.length;while(++f<p){var h=d[f],v=e[h];(void 0===v||a(v,s[h])&&!c.call(e,h))&&(e[h]=l[h])}}return e}));e.exports=u},9638:function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},"966f":function(e,t,n){var r=n("7e64"),a=n("c05f"),o=1,i=2;function s(e,t,n,s){var c=n.length,u=c,l=!s;if(null==e)return!u;e=Object(e);while(c--){var d=n[c];if(l&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}while(++c<u){d=n[c];var f=d[0],p=e[f],h=d[1];if(l&&d[2]){if(void 0===p&&!(f in e))return!1}else{var v=new r;if(s)var b=s(p,h,f,e,t,v);if(!(void 0===b?a(h,p,o|i,s,v):b))return!1}}return!0}e.exports=s},"96f3":function(e,t){var n=Object.prototype,r=n.hasOwnProperty;function a(e,t){return null!=e&&r.call(e,t)}e.exports=a},"973b":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-select[data-v-14bdabaf]{position:relative}.vc-select select[data-v-14bdabaf]{flex-grow:1;display:block;-webkit-appearance:none;appearance:none;width:52px;height:30px;font-size:var(--text-base);font-weight:var(--font-medium);text-align:left;background-color:var(--gray-200);border:2px solid;border-color:var(--gray-200);color:var(--gray-900);padding:0 20px 0 8px;border-radius:var(--rounded);line-height:var(--leading-tight);text-indent:0;cursor:pointer;-moz-padding-start:3px}.vc-select select[data-v-14bdabaf]:hover{color:var(--gray-600)}.vc-select select[data-v-14bdabaf]:focus{outline:0;border-color:var(--accent-400);background-color:var(--white)}.vc-select-arrow[data-v-14bdabaf]{display:flex;align-items:center;pointer-events:none;position:absolute;top:0;bottom:0;right:0;padding:0 4px 0 0;color:var(--gray-500)}.vc-select-arrow svg[data-v-14bdabaf]{width:16px;height:16px;fill:currentColor}.vc-is-dark select[data-v-14bdabaf]{background:var(--gray-700);color:var(--gray-100);border-color:var(--gray-700)}.vc-is-dark select[data-v-14bdabaf]:hover{color:var(--gray-400)}.vc-is-dark select[data-v-14bdabaf]:focus{border-color:var(--accent-500);background-color:var(--gray-800)}",""]),e.exports=t},"97d3":function(e,t,n){var r=n("48a0"),a=n("30c9");function o(e,t){var n=-1,o=a(e)?Array(e.length):[];return r(e,(function(e,r,a){o[++n]=t(e,r,a)})),o}e.exports=o},9934:function(e,t,n){var r=n("6fcd"),a=n("41c3"),o=n("30c9");function i(e){return o(e)?r(e,!0):a(e)}e.exports=i},"99cd":function(e,t){function n(e){return function(t,n,r){var a=-1,o=Object(t),i=r(t),s=i.length;while(s--){var c=i[e?s:++a];if(!1===n(o[c],c,o))break}return t}}e.exports=n},"99d3":function(e,t,n){(function(e){var r=n("585a"),a=t&&!t.nodeType&&t,o=a&&"object"==typeof e&&e&&!e.nodeType&&e,i=o&&o.exports===a,s=i&&r.process,c=function(){try{var e=o&&o.require&&o.require("util").types;return e||s&&s.binding&&s.binding("util")}catch(t){}}();e.exports=c}).call(this,n("62e4")(e))},"9aff":function(e,t,n){var r=n("9638"),a=n("30c9"),o=n("c098"),i=n("1a8c");function s(e,t,n){if(!i(n))return!1;var s=typeof t;return!!("number"==s?a(n)&&o(t,n.length):"string"==s&&t in n)&&r(n[t],e)}e.exports=s},"9b02":function(e,t,n){var r=n("656b");function a(e,t,n){var a=null==e?void 0:r(e,t);return void 0===a?n:a}e.exports=a},"9bf2":function(e,t,n){var r=n("83ab"),a=n("0cfb"),o=n("825a"),i=n("c04e"),s=Object.defineProperty;t.f=r?s:function(e,t,n){if(o(e),t=i(t,!0),o(n),a)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9e2e":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-pane-container{width:100%;position:relative}.vc-pane-container.in-transition{overflow:hidden}.vc-pane-layout{display:grid}.vc-arrow{display:flex;justify-content:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;pointer-events:auto;color:var(--gray-600);border-width:2px;border-style:solid;border-radius:var(--rounded);border-color:transparent}.vc-arrow:hover{background:var(--gray-200)}.vc-arrow:focus{border-color:var(--gray-300)}.vc-arrow.is-disabled{opacity:.25;pointer-events:none;cursor:not-allowed}.vc-day-popover-container{color:var(--white);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded);font-size:var(--text-xs);font-weight:var(--font-medium);padding:4px 8px;box-shadow:var(--shadow)}.vc-day-popover-header{font-size:var(--text-xs);color:var(--gray-300);font-weight:var(--font-semibold);text-align:center}.vc-arrows-container{width:100%;position:absolute;top:0;display:flex;justify-content:space-between;padding:8px 10px;pointer-events:none}.vc-arrows-container.title-left{justify-content:flex-end}.vc-arrows-container.title-right{justify-content:flex-start}.vc-is-dark .vc-arrow{color:var(--white)}.vc-is-dark .vc-arrow:hover{background:var(--gray-800)}.vc-is-dark .vc-arrow:focus{border-color:var(--gray-700)}.vc-is-dark .vc-day-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}.vc-is-dark .vc-day-popover-header{color:var(--gray-700)}",""]),e.exports=t},"9e69":function(e,t,n){var r=n("2b3e"),a=r.Symbol;e.exports=a},"9e83":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-nav-popover-container{color:var(--white);font-size:var(--text-sm);font-weight:var(--font-semibold);background-color:var(--gray-800);border:1px solid;border-color:var(--gray-700);border-radius:var(--rounded-lg);padding:4px;box-shadow:var(--shadow)}.vc-is-dark .vc-nav-popover-container{color:var(--gray-800);background-color:var(--white);border-color:var(--gray-100)}",""]),e.exports=t},"9e86":function(e,t,n){var r=n("872a"),a=n("242e"),o=n("badf");function i(e,t){var n={};return t=o(t,3),a(e,(function(e,a,o){r(n,a,t(e,a,o))})),n}e.exports=i},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,a=n("7c73"),o=n("5c6c"),i=n("d44e"),s=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=a(r,{next:o(1,n)}),i(e,u,!1,!0),s[u]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),a=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a029:function(e,t,n){var r=n("087d"),a=n("2dcb"),o=n("32f4"),i=n("d327"),s=Object.getOwnPropertySymbols,c=s?function(e){var t=[];while(e)r(t,o(e)),e=a(e);return t}:i;e.exports=c},a10d:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-day[data-v-4420d078]{position:relative;min-height:32px;z-index:1}.vc-day.is-not-in-month *[data-v-4420d078]{opacity:0;pointer-events:none}.vc-day-layer[data-v-4420d078]{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none}.vc-day-box-center-center[data-v-4420d078]{display:flex;justify-content:center;align-items:center;transform-origin:50% 50%}.vc-day-box-left-center[data-v-4420d078]{display:flex;justify-content:flex-start;align-items:center;transform-origin:0 50%}.vc-day-box-right-center[data-v-4420d078]{display:flex;justify-content:flex-end;align-items:center;transform-origin:100% 50%}.vc-day-box-center-bottom[data-v-4420d078]{display:flex;justify-content:center;align-items:flex-end}.vc-day-content[data-v-4420d078]{display:flex;justify-content:center;align-items:center;font-size:var(--text-sm);font-weight:var(--font-medium);width:28px;height:28px;line-height:28px;border-radius:var(--rounded-full);-webkit-user-select:none;user-select:none;cursor:pointer}.vc-day-content[data-v-4420d078]:hover{background-color:rgba(204,214,224,.3)}.vc-day-content[data-v-4420d078]:focus{font-weight:var(--font-bold);background-color:rgba(204,214,224,.4)}.vc-day-content.is-disabled[data-v-4420d078]{color:var(--gray-400)}.vc-is-dark .vc-day-content[data-v-4420d078]:hover{background-color:rgba(114,129,151,.3)}.vc-is-dark .vc-day-content[data-v-4420d078]:focus{background-color:rgba(114,129,151,.4)}.vc-is-dark .vc-day-content.is-disabled[data-v-4420d078]{color:var(--gray-600)}.vc-highlights[data-v-4420d078]{overflow:hidden;pointer-events:none;z-index:-1}.vc-highlight[data-v-4420d078]{width:28px;height:28px}.vc-highlight.vc-highlight-base-start[data-v-4420d078]{width:50%!important;border-radius:0!important;border-right-width:0!important}.vc-highlight.vc-highlight-base-end[data-v-4420d078]{width:50%!important;border-radius:0!important;border-left-width:0!important}.vc-highlight.vc-highlight-base-middle[data-v-4420d078]{width:100%;border-radius:0!important;border-left-width:0!important;border-right-width:0!important;margin:0 -1px}.vc-dots[data-v-4420d078]{display:flex;justify-content:center;align-items:center}.vc-dot[data-v-4420d078]{width:5px;height:5px;border-radius:50%;transition:all var(--day-content-transition-time)}.vc-dot[data-v-4420d078]:not(:last-child){margin-right:3px}.vc-bars[data-v-4420d078]{display:flex;justify-content:flex-start;align-items:center;width:75%}.vc-bar[data-v-4420d078]{flex-grow:1;height:3px;transition:all var(--day-content-transition-time)}",""]),e.exports=t},a2be:function(e,t,n){var r=n("d612"),a=n("4284"),o=n("c584"),i=1,s=2;function c(e,t,n,c,u,l){var d=n&i,f=e.length,p=t.length;if(f!=p&&!(d&&p>f))return!1;var h=l.get(e),v=l.get(t);if(h&&v)return h==t&&v==e;var b=-1,m=!0,g=n&s?new r:void 0;l.set(e,t),l.set(t,e);while(++b<f){var y=e[b],w=t[b];if(c)var x=d?c(w,y,b,t,e,l):c(y,w,b,e,t,l);if(void 0!==x){if(x)continue;m=!1;break}if(g){if(!a(t,(function(e,t){if(!o(g,t)&&(y===e||u(y,e,n,c,l)))return g.push(t)}))){m=!1;break}}else if(y!==w&&!u(y,w,n,c,l)){m=!1;break}}return l["delete"](e),l["delete"](t),m}e.exports=c},a2db:function(e,t,n){var r=n("9e69"),a=r?r.prototype:void 0,o=a?a.valueOf:void 0;function i(e){return o?Object(o.call(e)):{}}e.exports=i},a3fd:function(e,t,n){var r=n("7948");function a(e,t){return r(t,(function(t){return[t,e[t]]}))}e.exports=a},a454:function(e,t,n){var r=n("72f0"),a=n("3b4a"),o=n("cd9d"),i=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:o;e.exports=i},a524:function(e,t,n){var r=n("4245");function a(e){return r(this,e).has(e)}e.exports=a},a59b:function(e,t){function n(e){return e&&e.length?e[0]:void 0}e.exports=n},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a994:function(e,t,n){var r=n("7d1f"),a=n("32f4"),o=n("ec69");function i(e){return r(e,o,a)}e.exports=i},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ac41:function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}e.exports=n},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},adc8:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-day-popover-row[data-v-eb5afd1a]{--day-content-transition-time:0.13s ease-in;display:flex;align-items:center;transition:all var(--day-content-transition-time)}.vc-day-popover-row[data-v-eb5afd1a]:not(:first-child){margin-top:3px}.vc-day-popover-row-indicator[data-v-eb5afd1a]{display:flex;justify-content:center;align-items:center;flex-grow:0;width:15px;margin-right:3px}.vc-day-popover-row-indicator span[data-v-eb5afd1a]{transition:all var(--day-content-transition-time)}.vc-day-popover-row-content[data-v-eb5afd1a]{display:flex;align-items:center;flex-wrap:none;flex-grow:1;width:max-content}",""]),e.exports=t},ae93:function(e,t,n){"use strict";var r,a,o,i=n("d039"),s=n("e163"),c=n("9112"),u=n("5135"),l=n("b622"),d=n("c430"),f=l("iterator"),p=!1,h=function(){return this};[].keys&&(o=[].keys(),"next"in o?(a=s(s(o)),a!==Object.prototype&&(r=a)):p=!0);var v=void 0==r||i((function(){var e={};return r[f].call(e)!==e}));v&&(r={}),d&&!v||u(r,f)||c(r,f,h),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b047:function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},b1d2:function(e,t,n){var r=n("3729"),a=n("1310"),o="[object Date]";function i(e){return a(e)&&r(e)==o}e.exports=i},b1e5:function(e,t,n){var r=n("a994"),a=1,o=Object.prototype,i=o.hasOwnProperty;function s(e,t,n,o,s,c){var u=n&a,l=r(e),d=l.length,f=r(t),p=f.length;if(d!=p&&!u)return!1;var h=d;while(h--){var v=l[h];if(!(u?v in t:i.call(t,v)))return!1}var b=c.get(e),m=c.get(t);if(b&&m)return b==t&&m==e;var g=!0;c.set(e,t),c.set(t,e);var y=u;while(++h<d){v=l[h];var w=e[v],x=t[v];if(o)var D=u?o(x,w,v,t,e,c):o(w,x,v,e,t,c);if(!(void 0===D?w===x||s(w,x,n,o,c):D)){g=!1;break}y||(y="constructor"==v)}if(g&&!y){var j=e.constructor,O=t.constructor;j==O||!("constructor"in e)||!("constructor"in t)||"function"==typeof j&&j instanceof j&&"function"==typeof O&&O instanceof O||(g=!1)}return c["delete"](e),c["delete"](t),g}e.exports=s},b218:function(e,t){var n=9007199254740991;function r(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}e.exports=r},b4b0:function(e,t,n){var r=n("8d74"),a=n("1a8c"),o=n("ffd6"),i=NaN,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function d(e){if("number"==typeof e)return e;if(o(e))return i;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):s.test(e)?i:+e}e.exports=d},b4c0:function(e,t,n){var r=n("cb5a");function a(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}e.exports=a},b5a7:function(e,t,n){var r=n("0b07"),a=n("2b3e"),o=r(a,"DataView");e.exports=o},b622:function(e,t,n){var r=n("da84"),a=n("5692"),o=n("5135"),i=n("90e3"),s=n("4930"),c=n("fdbf"),u=a("wks"),l=r.Symbol,d=c?l:l&&l.withoutSetter||i;e.exports=function(e){return o(u,e)&&(s||"string"==typeof u[e])||(s&&o(l,e)?u[e]=l[e]:u[e]=d("Symbol."+e)),u[e]}},b760:function(e,t,n){var r=n("872a"),a=n("9638");function o(e,t,n){(void 0!==n&&!a(e[t],n)||void 0===n&&!(t in e))&&r(e,t,n)}e.exports=o},badf:function(e,t,n){var r=n("642a"),a=n("1838"),o=n("cd9d"),i=n("6747"),s=n("f9ce");function c(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?i(e)?a(e[0],e[1]):r(e):s(e)}e.exports=c},bbc0:function(e,t,n){var r=n("6044"),a="__lodash_hash_undefined__",o=Object.prototype,i=o.hasOwnProperty;function s(e){var t=this.__data__;if(r){var n=t[e];return n===a?void 0:n}return i.call(t,e)?t[e]:void 0}e.exports=s},bffb:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'.vc-popover-content-wrapper[data-v-05016e86]{--popover-horizontal-content-offset:8px;--popover-vertical-content-offset:10px;--popover-slide-translation:15px;--popover-transition-time:0.14s ease-in-out;--popover-caret-horizontal-offset:18px;--popover-caret-vertical-offset:8px;position:absolute;display:block;outline:none;z-index:10}.vc-popover-content-wrapper[data-v-05016e86]:not(.is-interactive){pointer-events:none}.vc-popover-content[data-v-05016e86]{position:relative;outline:none;z-index:10;box-shadow:var(--shadow-lg)}.vc-popover-content.direction-bottom[data-v-05016e86]{margin-top:var(--popover-vertical-content-offset)}.vc-popover-content.direction-top[data-v-05016e86]{margin-bottom:var(--popover-vertical-content-offset)}.vc-popover-content.direction-left[data-v-05016e86]{margin-right:var(--popover-horizontal-content-offset)}.vc-popover-content.direction-right[data-v-05016e86]{margin-left:var(--popover-horizontal-content-offset)}.vc-popover-caret[data-v-05016e86]{content:"";position:absolute;display:block;width:12px;height:12px;border-top:inherit;border-left:inherit;background-color:inherit;-webkit-user-select:none;user-select:none;z-index:-1}.vc-popover-caret.direction-bottom[data-v-05016e86]{top:0}.vc-popover-caret.direction-bottom.align-left[data-v-05016e86]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-center[data-v-05016e86]{transform:translateX(-50%) translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-bottom.align-right[data-v-05016e86]{transform:translateY(-50%) rotate(45deg)}.vc-popover-caret.direction-top[data-v-05016e86]{top:100%}.vc-popover-caret.direction-top.align-left[data-v-05016e86]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-center[data-v-05016e86]{transform:translateX(-50%) translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-top.align-right[data-v-05016e86]{transform:translateY(-50%) rotate(-135deg)}.vc-popover-caret.direction-left[data-v-05016e86]{left:100%}.vc-popover-caret.direction-left.align-top[data-v-05016e86]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-middle[data-v-05016e86]{transform:translateY(-50%) translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-left.align-bottom[data-v-05016e86]{transform:translateX(-50%) rotate(135deg)}.vc-popover-caret.direction-right[data-v-05016e86]{left:0}.vc-popover-caret.direction-right.align-top[data-v-05016e86]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-middle[data-v-05016e86]{transform:translateY(-50%) translateX(-50%) rotate(-45deg)}.vc-popover-caret.direction-right.align-bottom[data-v-05016e86]{transform:translateX(-50%) rotate(-45deg)}.vc-popover-caret.align-left[data-v-05016e86]{left:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-center[data-v-05016e86]{left:50%}.vc-popover-caret.align-right[data-v-05016e86]{right:var(--popover-caret-horizontal-offset)}.vc-popover-caret.align-top[data-v-05016e86]{top:var(--popover-caret-vertical-offset)}.vc-popover-caret.align-middle[data-v-05016e86]{top:50%}.vc-popover-caret.align-bottom[data-v-05016e86]{bottom:var(--popover-caret-vertical-offset)}.fade-enter-active[data-v-05016e86],.fade-leave-active[data-v-05016e86],.slide-fade-enter-active[data-v-05016e86],.slide-fade-leave-active[data-v-05016e86]{transition:all var(--popover-transition-time);pointer-events:none}.fade-enter[data-v-05016e86],.fade-leave-to[data-v-05016e86],.slide-fade-enter[data-v-05016e86],.slide-fade-leave-to[data-v-05016e86]{opacity:0}.slide-fade-enter.direction-bottom[data-v-05016e86],.slide-fade-leave-to.direction-bottom[data-v-05016e86]{transform:translateY(calc(var(--popover-slide-translation)*-1))}.slide-fade-enter.direction-top[data-v-05016e86],.slide-fade-leave-to.direction-top[data-v-05016e86]{transform:translateY(var(--popover-slide-translation))}.slide-fade-enter.direction-left[data-v-05016e86],.slide-fade-leave-to.direction-left[data-v-05016e86]{transform:translateX(var(--popover-slide-translation))}.slide-fade-enter.direction-right[data-v-05016e86],.slide-fade-leave-to.direction-right[data-v-05016e86]{transform:translateX(calc(var(--popover-slide-translation)*-1))}',""]),e.exports=t},c04e:function(e,t,n){var r=n("861d");e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},c05f:function(e,t,n){var r=n("7b97"),a=n("1310");function o(e,t,n,i,s){return e===t||(null==e||null==t||!a(e)&&!a(t)?e!==e&&t!==t:r(e,t,n,i,o,s))}e.exports=o},c098:function(e,t){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function a(e,t){var a=typeof e;return t=null==t?n:t,!!t&&("number"==a||"symbol"!=a&&r.test(e))&&e>-1&&e%1==0&&e<t}e.exports=a},c1c9:function(e,t,n){var r=n("a454"),a=n("f3c1"),o=a(r);e.exports=o},c2b6:function(e,t,n){var r=n("f8af"),a=n("5d89"),o=n("6f6c"),i=n("a2db"),s=n("c8fe"),c="[object Boolean]",u="[object Date]",l="[object Map]",d="[object Number]",f="[object RegExp]",p="[object Set]",h="[object String]",v="[object Symbol]",b="[object ArrayBuffer]",m="[object DataView]",g="[object Float32Array]",y="[object Float64Array]",w="[object Int8Array]",x="[object Int16Array]",D="[object Int32Array]",j="[object Uint8Array]",O="[object Uint8ClampedArray]",k="[object Uint16Array]",M="[object Uint32Array]";function P(e,t,n){var P=e.constructor;switch(t){case b:return r(e);case c:case u:return new P(+e);case m:return a(e,n);case g:case y:case w:case x:case D:case j:case O:case k:case M:return s(e,n);case l:return new P;case d:case h:return new P(e);case f:return o(e);case p:return new P;case v:return i(e)}}e.exports=P},c3fc:function(e,t,n){var r=n("42a2"),a=n("1310"),o="[object Set]";function i(e){return a(e)&&r(e)==o}e.exports=i},c430:function(e,t){e.exports=!1},c584:function(e,t){function n(e,t){return e.has(t)}e.exports=n},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),a=n("ce4e"),o="__core-js_shared__",i=r[o]||a(o,{});e.exports=i},c6cf:function(e,t,n){var r=n("4d8c"),a=n("2286"),o=n("c1c9");function i(e){return o(a(e,void 0,r),e+"")}e.exports=i},c869:function(e,t,n){var r=n("0b07"),a=n("2b3e"),o=r(a,"Set");e.exports=o},c87c:function(e,t){var n=Object.prototype,r=n.hasOwnProperty;function a(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&r.call(e,"index")&&(n.index=e.index,n.input=e.input),n}e.exports=a},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},c8fe:function(e,t,n){var r=n("f8af");function a(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}e.exports=a},ca84:function(e,t,n){var r=n("5135"),a=n("fc6a"),o=n("4d64").indexOf,i=n("d012");e.exports=function(e,t){var n,s=a(e),c=0,u=[];for(n in s)!r(i,n)&&r(s,n)&&u.push(n);while(t.length>c)r(s,n=t[c++])&&(~o(u,n)||u.push(n));return u}},cb5a:function(e,t,n){var r=n("9638");function a(e,t){var n=e.length;while(n--)if(r(e[n][0],t))return n;return-1}e.exports=a},cc12:function(e,t,n){var r=n("da84"),a=n("861d"),o=r.document,i=a(o)&&a(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},cc45:function(e,t,n){var r=n("1a2d"),a=n("b047"),o=n("99d3"),i=o&&o.isMap,s=i?a(i):r;e.exports=s},cd9d:function(e,t){function n(e){return e}e.exports=n},ce4e:function(e,t,n){var r=n("da84"),a=n("9112");e.exports=function(e,t){try{a(r,e,t)}catch(n){r[e]=t}return t}},ce86:function(e,t,n){var r=n("9e69"),a=n("7948"),o=n("6747"),i=n("ffd6"),s=1/0,c=r?r.prototype:void 0,u=c?c.toString:void 0;function l(e){if("string"==typeof e)return e;if(o(e))return a(e,l)+"";if(i(e))return u?u.call(e):"";var t=e+"";return"0"==t&&1/e==-s?"-0":t}e.exports=l},cebd:function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}e.exports=n},cfe5:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("f7f1"),a=n("2fa3"),o=n("9404"),i=n("29ae");const s=864e5;class c{constructor(e,{order:t=0,locale:n,isFullDay:s}={}){if(this.isDateInfo=!0,this.order=t,this.locale=n instanceof i["b"]?n:new i["b"](n),this.firstDayOfWeek=this.locale.firstDayOfWeek,!Object(o["m"])(e)){const t=this.locale.normalizeDate(e);e=s?{start:t,end:t}:{startOn:t,endOn:t}}let u=null,l=null;if(e.start?u=this.locale.normalizeDate(e.start,{...this.opts,time:"00:00:00"}):e.startOn&&(u=this.locale.normalizeDate(e.startOn,this.opts)),e.end?l=this.locale.normalizeDate(e.end,{...this.opts,time:"23:59:59"}):e.endOn&&(l=this.locale.normalizeDate(e.endOn,this.opts)),u&&l&&u>l){const e=u;u=l,l=e}else u&&e.span>=1&&(l=Object(r["a"])(u,e.span-1));this.start=u,this.startTime=u?u.getTime():NaN,this.end=l,this.endTime=l?l.getTime():NaN,this.isDate=this.startTime&&this.startTime===this.endTime,this.isRange=!this.isDate;const d=Object(a["i"])(e,{},c.patternProps);if(d.assigned&&(this.on={and:d.target}),e.on){const t=(Object(o["h"])(e.on)?e.on:[e.on]).map((function(e){if(Object(o["k"])(e))return e;const t=Object(a["i"])(e,{},c.patternProps);return t.assigned?t.target:null})).filter((function(e){return e}));t.length&&(this.on={...this.on,or:t})}this.isComplex=!!this.on}get opts(){return{order:this.order,locale:this.locale}}toDateInfo(e){return e.isDateInfo?e:new c(e,this.opts)}startOfWeek(e){const t=e.getDay()+1,n=t>=this.firstDayOfWeek?this.firstDayOfWeek-t:-(7-(this.firstDayOfWeek-t));return Object(r["a"])(e,n)}diffInDays(e,t){return Math.round((t-e)/s)}diffInWeeks(e,t){return this.diffInDays(this.startOfWeek(e),this.startOfWeek(t))}diffInYears(e,t){return t.getUTCFullYear()-e.getUTCFullYear()}diffInMonths(e,t){return 12*this.diffInYears(e,t)+(t.getMonth()-e.getMonth())}static get patterns(){return{dailyInterval:{test:function(e,t,n){return n.diffInDays(n.start||new Date,e.date)%t===0}},weeklyInterval:{test:function(e,t,n){return n.diffInWeeks(n.start||new Date,e.date)%t===0}},monthlyInterval:{test:function(e,t,n){return n.diffInMonths(n.start||new Date,e.date)%t===0}},yearlyInterval:{test:function(){return function(e,t,n){return n.diffInYears(n.start||new Date,e.date)%t===0}}},days:{validate:function(e){return Object(o["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.day)||t.includes(-e.dayFromEnd)}},weekdays:{validate:function(e){return Object(o["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.weekday)}},ordinalWeekdays:{validate:function(e){return Object.keys(e).reduce((function(t,n){const r=e[n];return r?(t[n]=Object(o["h"])(r)?r:[parseInt(r,10)],t):t}),{})},test:function(e,t){return Object.keys(t).map((function(e){return parseInt(e,10)})).find((function(n){return t[n].includes(e.weekday)&&(n===e.weekdayOrdinal||n===-e.weekdayOrdinalFromEnd)}))}},weekends:{validate:function(e){return e},test:function(e){return 1===e.weekday||7===e.weekday}},workweek:{validate:function(e){return e},test:function(e){return e.weekday>=2&&e.weekday<=6}},weeks:{validate:function(e){return Object(o["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.week)||t.includes(-e.weekFromEnd)}},months:{validate:function(e){return Object(o["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.month)}},years:{validate:function(e){return Object(o["h"])(e)?e:[parseInt(e,10)]},test:function(e,t){return t.includes(e.year)}}}}static get patternProps(){return Object.keys(c.patterns).map((function(e){return{name:e,validate:c.patterns[e].validate}}))}static testConfig(e,t,n){return Object(o["k"])(e)?e(t):Object(o["m"])(e)?Object.keys(e).every((function(r){return c.patterns[r].test(t,e[r],n)})):null}iterateDatesInRange({start:e,end:t},n){if(!e||!t||!Object(o["k"])(n))return null;e=this.locale.normalizeDate(e,{...this.opts,time:"00:00:00"});const a={i:0,date:e,day:this.locale.getDateParts(e),finished:!1};let i=null;for(;!a.finished&&a.date<=t;a.i++)i=n(a),a.date=Object(r["a"])(a.date,1),a.day=this.locale.getDateParts(a.date);return i}shallowIntersectingRange(e){return this.rangeShallowIntersectingRange(this,this.toDateInfo(e))}rangeShallowIntersectingRange(e,t){if(!this.dateShallowIntersectsDate(e,t))return null;const n=e.toRange(),r=t.toRange();let a=null,o=null;return n.start?a=r.start?n.start>r.start?n.start:r.start:n.start:r.start&&(a=r.start),n.end?o=r.end?n.end<r.end?n.end:r.end:n.end:r.end&&(o=r.end),{start:a,end:o}}intersectsDate(e){var t=this;const n=this.toDateInfo(e);if(!this.shallowIntersectsDate(n))return null;if(!this.on)return this;const r=this.rangeShallowIntersectingRange(this,n);let a=!1;return this.iterateDatesInRange(r,(function(e){t.matchesDay(e.day)&&(a=a||n.matchesDay(e.day),e.finished=a)})),a}shallowIntersectsDate(e){return this.dateShallowIntersectsDate(this,this.toDateInfo(e))}dateShallowIntersectsDate(e,t){return e.isDate?t.isDate?e.startTime===t.startTime:this.dateShallowIncludesDate(t,e):t.isDate?this.dateShallowIncludesDate(e,t):!(e.start&&t.end&&e.start>t.end)&&!(e.end&&t.start&&e.end<t.start)}includesDate(e){var t=this;const n=this.toDateInfo(e);if(!this.shallowIncludesDate(n))return!1;if(!this.on)return!0;const r=this.rangeShallowIntersectingRange(this,n);let a=!0;return this.iterateDatesInRange(r,(function(e){t.matchesDay(e.day)&&(a=a&&n.matchesDay(e.day),e.finished=!a)})),a}shallowIncludesDate(e){return this.dateShallowIncludesDate(this,e.isDate?e:new c(e,this.opts))}dateShallowIncludesDate(e,t){return e.isDate?t.isDate?e.startTime===t.startTime:!(!t.startTime||!t.endTime)&&(e.startTime===t.startTime&&e.startTime===t.endTime):t.isDate?!(e.start&&t.start<e.start)&&!(e.end&&t.start>e.end):!(e.start&&(!t.start||t.start<e.start))&&!(e.end&&(!t.end||t.end>e.end))}intersectsDay(e){return this.shallowIntersectsDate(e.range)&&this.matchesDay(e)?this:null}matchesDay(e){var t=this;return!this.on||!(this.on.and&&!c.testConfig(this.on.and,e,this))&&!(this.on.or&&!this.on.or.some((function(n){return c.testConfig(n,e,t)})))}toRange(){return new c({start:this.start,end:this.end},this.opts)}compare(e){if(this.order!==e.order)return this.order-e.order;if(this.isDate!==e.isDate)return this.isDate?1:-1;if(this.isDate)return 0;const t=this.start-e.start;return 0!==t?t:this.end-e.end}}},d012:function(e,t){e.exports={}},d02c:function(e,t,n){var r=n("5e2e"),a=n("79bc"),o=n("7b83"),i=200;function s(e,t){var n=this.__data__;if(n instanceof r){var s=n.__data__;if(!a||s.length<i-1)return s.push([e,t]),this.size=++n.size,this;n=this.__data__=new o(s)}return n.set(e,t),this.size=n.size,this}e.exports=s},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("428f"),a=n("da84"),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(a[e]):r[e]&&r[e][t]||a[e]&&a[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!r.call({1:2},1);t.f=o?function(e){var t=a(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),a=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),a(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d327:function(e,t){function n(){return[]}e.exports=n},d370:function(e,t,n){var r=n("253c"),a=n("1310"),o=Object.prototype,i=o.hasOwnProperty,s=o.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return a(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},d438:function(e,t,n){"use strict";var r=n("3db9"),a=n.n(r);a.a},d44e:function(e,t,n){var r=n("9bf2").f,a=n("5135"),o=n("b622"),i=o("toStringTag");e.exports=function(e,t,n){e&&!a(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},d483:function(e,t,n){var r=n("bffb");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("e3b25692",r,!0,{sourceMap:!1,shadowMode:!1})},d612:function(e,t,n){var r=n("7b83"),a=n("7ed2"),o=n("dc0f");function i(e){var t=-1,n=null==e?0:e.length;this.__data__=new r;while(++t<n)this.add(e[t])}i.prototype.add=i.prototype.push=a,i.prototype.has=o,e.exports=i},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),o=n("d039"),i=n("b622"),s=n("9112"),c=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,l){var d=i(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var h=/./[d],v=t(d,""[e],(function(e,t,n,r,o){var i=t.exec;return i===a||i===u.exec?f&&!o?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,v[0]),r(u,d,v[1])}l&&s(u[d],"sham",!0)}},d7ee:function(e,t,n){var r=n("c3fc"),a=n("b047"),o=n("99d3"),i=o&&o.isSet,s=i?a(i):r;e.exports=s},d99e:function(e,t,n){"use strict";var r=n("d483"),a=n.n(r);a.a},da03:function(e,t,n){var r=n("2b3e"),a=r["__core-js_shared__"];e.exports=a},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc0f:function(e,t){function n(e){return this.__data__.has(e)}e.exports=n},dc57:function(e,t){var n=Function.prototype,r=n.toString;function a(e){if(null!=e){try{return r.call(e)}catch(t){}try{return e+""}catch(t){}}return""}e.exports=a},dc8c:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-container{--white:#fff;--black:#000;--gray-100:#f7fafc;--gray-200:#edf2f7;--gray-300:#e2e8f0;--gray-400:#cbd5e0;--gray-500:#a0aec0;--gray-600:#718096;--gray-700:#4a5568;--gray-800:#2d3748;--gray-900:#1a202c;--red-100:#fff5f5;--red-200:#fed7d7;--red-300:#feb2b2;--red-400:#fc8181;--red-500:#f56565;--red-600:#e53e3e;--red-700:#c53030;--red-800:#9b2c2c;--red-900:#742a2a;--orange-100:#fffaf0;--orange-200:#feebc8;--orange-300:#fbd38d;--orange-400:#f6ad55;--orange-500:#ed8936;--orange-600:#dd6b20;--orange-700:#c05621;--orange-800:#9c4221;--orange-900:#7b341e;--yellow-100:ivory;--yellow-200:#fefcbf;--yellow-300:#faf089;--yellow-400:#f6e05e;--yellow-500:#ecc94b;--yellow-600:#d69e2e;--yellow-700:#b7791f;--yellow-800:#975a16;--yellow-900:#744210;--green-100:#f0fff4;--green-200:#c6f6d5;--green-300:#9ae6b4;--green-400:#68d391;--green-500:#48bb78;--green-600:#38a169;--green-700:#2f855a;--green-800:#276749;--green-900:#22543d;--teal-100:#e6fffa;--teal-200:#b2f5ea;--teal-300:#81e6d9;--teal-400:#4fd1c5;--teal-500:#38b2ac;--teal-600:#319795;--teal-700:#2c7a7b;--teal-800:#285e61;--teal-900:#234e52;--blue-100:#ebf8ff;--blue-200:#bee3f8;--blue-300:#90cdf4;--blue-400:#63b3ed;--blue-500:#4299e1;--blue-600:#3182ce;--blue-700:#2b6cb0;--blue-800:#2c5282;--blue-900:#2a4365;--indigo-100:#ebf4ff;--indigo-200:#c3dafe;--indigo-300:#a3bffa;--indigo-400:#7f9cf5;--indigo-500:#667eea;--indigo-600:#5a67d8;--indigo-700:#4c51bf;--indigo-800:#434190;--indigo-900:#3c366b;--purple-100:#faf5ff;--purple-200:#e9d8fd;--purple-300:#d6bcfa;--purple-400:#b794f4;--purple-500:#9f7aea;--purple-600:#805ad5;--purple-700:#6b46c1;--purple-800:#553c9a;--purple-900:#44337a;--pink-100:#fff5f7;--pink-200:#fed7e2;--pink-300:#fbb6ce;--pink-400:#f687b3;--pink-500:#ed64a6;--pink-600:#d53f8c;--pink-700:#b83280;--pink-800:#97266d;--pink-900:#702459}.vc-container.vc-red{--accent-100:var(--red-100);--accent-200:var(--red-200);--accent-300:var(--red-300);--accent-400:var(--red-400);--accent-500:var(--red-500);--accent-600:var(--red-600);--accent-700:var(--red-700);--accent-800:var(--red-800);--accent-900:var(--red-900)}.vc-container.vc-orange{--accent-100:var(--orange-100);--accent-200:var(--orange-200);--accent-300:var(--orange-300);--accent-400:var(--orange-400);--accent-500:var(--orange-500);--accent-600:var(--orange-600);--accent-700:var(--orange-700);--accent-800:var(--orange-800);--accent-900:var(--orange-900)}.vc-container.vc-yellow{--accent-100:var(--yellow-100);--accent-200:var(--yellow-200);--accent-300:var(--yellow-300);--accent-400:var(--yellow-400);--accent-500:var(--yellow-500);--accent-600:var(--yellow-600);--accent-700:var(--yellow-700);--accent-800:var(--yellow-800);--accent-900:var(--yellow-900)}.vc-container.vc-green{--accent-100:var(--green-100);--accent-200:var(--green-200);--accent-300:var(--green-300);--accent-400:var(--green-400);--accent-500:var(--green-500);--accent-600:var(--green-600);--accent-700:var(--green-700);--accent-800:var(--green-800);--accent-900:var(--green-900)}.vc-container.vc-teal{--accent-100:var(--teal-100);--accent-200:var(--teal-200);--accent-300:var(--teal-300);--accent-400:var(--teal-400);--accent-500:var(--teal-500);--accent-600:var(--teal-600);--accent-700:var(--teal-700);--accent-800:var(--teal-800);--accent-900:var(--teal-900)}.vc-container.vc-blue{--accent-100:var(--blue-100);--accent-200:var(--blue-200);--accent-300:var(--blue-300);--accent-400:var(--blue-400);--accent-500:var(--blue-500);--accent-600:var(--blue-600);--accent-700:var(--blue-700);--accent-800:var(--blue-800);--accent-900:var(--blue-900)}.vc-container.vc-indigo{--accent-100:var(--indigo-100);--accent-200:var(--indigo-200);--accent-300:var(--indigo-300);--accent-400:var(--indigo-400);--accent-500:var(--indigo-500);--accent-600:var(--indigo-600);--accent-700:var(--indigo-700);--accent-800:var(--indigo-800);--accent-900:var(--indigo-900)}.vc-container.vc-purple{--accent-100:var(--purple-100);--accent-200:var(--purple-200);--accent-300:var(--purple-300);--accent-400:var(--purple-400);--accent-500:var(--purple-500);--accent-600:var(--purple-600);--accent-700:var(--purple-700);--accent-800:var(--purple-800);--accent-900:var(--purple-900)}.vc-container.vc-pink{--accent-100:var(--pink-100);--accent-200:var(--pink-200);--accent-300:var(--pink-300);--accent-400:var(--pink-400);--accent-500:var(--pink-500);--accent-600:var(--pink-600);--accent-700:var(--pink-700);--accent-800:var(--pink-800);--accent-900:var(--pink-900)}.vc-container{--font-normal:400;--font-medium:500;--font-semibold:600;--font-bold:700;--text-xs:12px;--text-sm:14px;--text-base:16px;--text-lg:18px;--leading-snug:1.375;--rounded:0.25rem;--rounded-lg:0.5rem;--rounded-full:9999px;--shadow:0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);--shadow-lg:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);--shadow-inner:inset 0 2px 4px 0 rgba(0,0,0,0.06);--slide-translate:22px;--slide-duration:0.15s;--slide-timing:ease;--day-content-transition-time:0.13s ease-in;--weeknumber-offset:-34px;position:relative;display:inline-flex;width:max-content;height:max-content;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;color:var(--gray-900);background-color:var(--white);border:1px solid;border-color:var(--gray-400);border-radius:var(--rounded-lg);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent}.vc-container,.vc-container *{box-sizing:border-box}.vc-container:focus,.vc-container :focus{outline:none}.vc-container [role=button],.vc-container button{cursor:pointer}.vc-container.vc-is-expanded{min-width:100%}.vc-container .vc-container{border:none}.vc-container.vc-is-dark{color:var(--gray-100);background-color:var(--gray-900);border-color:var(--gray-700)}",""]),e.exports=t},dcbe:function(e,t,n){var r=n("30c9"),a=n("1310");function o(e){return a(e)&&r(e)}e.exports=o},dd61:function(e,t,n){var r=n("7948"),a=n("badf"),o=n("97d3"),i=n("6747");function s(e,t){var n=i(e)?r:o;return n(e,a(t,3))}e.exports=s},ddb0:function(e,t,n){var r=n("da84"),a=n("fdbc"),o=n("e260"),i=n("9112"),s=n("b622"),c=s("iterator"),u=s("toStringTag"),l=o.values;for(var d in a){var f=r[d],p=f&&f.prototype;if(p){if(p[c]!==l)try{i(p,c,l)}catch(v){p[c]=l}if(p[u]||i(p,u,d),a[d])for(var h in o)if(p[h]!==o[h])try{i(p,h,o[h])}catch(v){p[h]=o[h]}}}},de5e:function(e,t,n){"use strict";var r=n("72f5"),a=n.n(r);a.a},df75:function(e,t,n){var r=n("ca84"),a=n("7839");e.exports=Object.keys||function(e){return r(e,a)}},df9e:function(e,t,n){var r=n("9e83");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("29f48e5f",r,!0,{sourceMap:!1,shadowMode:!1})},e031:function(e,t,n){var r=n("f909"),a=n("1a8c");function o(e,t,n,i,s,c){return a(e)&&a(t)&&(c.set(t,e),r(e,t,void 0,o,c),c["delete"](t)),e}e.exports=o},e0e7:function(e,t,n){var r=n("60ed");function a(e){return r(e)?void 0:e}e.exports=a},e163:function(e,t,n){var r=n("5135"),a=n("7b0b"),o=n("f772"),i=n("e177"),s=o("IE_PROTO"),c=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=a(e),r(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e24b:function(e,t,n){var r=n("49f4"),a=n("1efc"),o=n("bbc0"),i=n("7a48"),s=n("2524");function c(e){var t=-1,n=null==e?0:e.length;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype["delete"]=a,c.prototype.get=o,c.prototype.has=i,c.prototype.set=s,e.exports=c},e260:function(e,t,n){"use strict";var r=n("fc6a"),a=n("44d2"),o=n("3f8c"),i=n("69f3"),s=n("7dd0"),c="Array Iterator",u=i.set,l=i.getterFor(c);e.exports=s(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,a("keys"),a("values"),a("entries")},e2a0:function(e,t,n){var r=n("3729"),a=n("6747"),o=n("1310"),i="[object String]";function s(e){return"string"==typeof e||!a(e)&&o(e)&&r(e)==i}e.exports=s},e2c0:function(e,t,n){var r=n("e2e4"),a=n("d370"),o=n("6747"),i=n("c098"),s=n("b218"),c=n("f4d6");function u(e,t,n){t=r(t,e);var u=-1,l=t.length,d=!1;while(++u<l){var f=c(t[u]);if(!(d=null!=e&&n(e,f)))break;e=e[f]}return d||++u!=l?d:(l=null==e?0:e.length,!!l&&s(l)&&i(f,l)&&(o(e)||a(e)))}e.exports=u},e2e4:function(e,t,n){var r=n("6747"),a=n("f608"),o=n("18d8"),i=n("76dd");function s(e,t){return r(e)?e:a(e,t)?[e]:o(i(e))}e.exports=s},e380:function(e,t,n){var r=n("7b83"),a="Expected a function";function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(a);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},e3f8:function(e,t,n){var r=n("656b");function a(e){return function(t){return r(t,e)}}e.exports=a},e538:function(e,t,n){(function(e){var r=n("2b3e"),a=t&&!t.nodeType&&t,o=a&&"object"==typeof e&&e&&!e.nodeType&&e,i=o&&o.exports===a,s=i?r.Buffer:void 0,c=s?s.allocUnsafe:void 0;function u(e,t){if(t)return e.slice();var n=e.length,r=c?c(n):new e.constructor(n);return e.copy(r),r}e.exports=u}).call(this,n("62e4")(e))},e893:function(e,t,n){var r=n("5135"),a=n("56ef"),o=n("06cf"),i=n("9bf2");e.exports=function(e,t){for(var n=a(t),s=i.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||s(e,l,c(t,l))}}},e969:function(e,t,n){var r=n("0da5");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("61c2bd5e",r,!0,{sourceMap:!1,shadowMode:!1})},eac5:function(e,t){var n=Object.prototype;function r(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||n;return e===r}e.exports=r},ec47:function(e,t,n){var r=n("a3fd"),a=n("42a2"),o=n("edfa"),i=n("cebd"),s="[object Map]",c="[object Set]";function u(e){return function(t){var n=a(t);return n==s?o(t):n==c?i(t):r(t,e(t))}}e.exports=u},ec69:function(e,t,n){var r=n("6fcd"),a=n("03dd"),o=n("30c9");function i(e){return o(e)?r(e):a(e)}e.exports=i},ec8c:function(e,t){function n(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}e.exports=n},ed08:function(e,t,n){"use strict";n.r(t),n.d(t,"Locale",(function(){return r["b"]})),n.d(t,"DateInfo",(function(){return a["a"]})),n.d(t,"Attribute",(function(){return o["a"]})),n.d(t,"AttributeStore",(function(){return i["a"]})),n.d(t,"setupCalendar",(function(){return u})),n.d(t,"pad",(function(){return l["m"]})),n.d(t,"evalFn",(function(){return l["f"]})),n.d(t,"mergeEvents",(function(){return l["h"]})),n.d(t,"pageIsValid",(function(){return l["r"]})),n.d(t,"pageIsBeforePage",(function(){return l["o"]})),n.d(t,"pageIsAfterPage",(function(){return l["n"]})),n.d(t,"pageIsBetweenPages",(function(){return l["p"]})),n.d(t,"pageIsEqualToPage",(function(){return l["q"]})),n.d(t,"addPages",(function(){return l["a"]})),n.d(t,"pageRangeToArray",(function(){return l["s"]})),n.d(t,"datesAreEqual",(function(){return l["d"]})),n.d(t,"arrayHasItems",(function(){return l["b"]})),n.d(t,"mixinOptionalProps",(function(){return l["i"]})),n.d(t,"on",(function(){return l["k"]})),n.d(t,"off",(function(){return l["j"]})),n.d(t,"elementContains",(function(){return l["e"]})),n.d(t,"onSpaceOrEnter",(function(){return l["l"]})),n.d(t,"createGuid",(function(){return l["c"]})),n.d(t,"hash",(function(){return l["g"]})),n.d(t,"addTapOrClickHandler",(function(){return d["b"]})),n.d(t,"addHorizontalSwipeHandler",(function(){return d["a"]}));var r=n("29ae"),a=n("cfe5"),o=n("22f3"),i=n("9349"),s=n("51ec"),c=n("1315"),u=function(e){const t=Object(s["b"])(e);return Object(c["a"])(t.screens,!0),t},l=n("2fa3"),d=n("0733")},edfa:function(e,t){function n(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}e.exports=n},ef5d:function(e,t){function n(e){return function(t){return null==t?void 0:t[e]}}e.exports=n},efb6:function(e,t,n){var r=n("5e2e");function a(){this.__data__=new r,this.size=0}e.exports=a},f15d:function(e,t,n){"use strict";n("ddb0");var r=n("9404");const a={ar:{dow:7,L:"D/‏M/‏YYYY"},bg:{dow:2,L:"D.MM.YYYY"},ca:{dow:2,L:"DD/MM/YYYY"},"zh-CN":{dow:2,L:"YYYY/MM/DD"},"zh-TW":{dow:1,L:"YYYY/MM/DD"},hr:{dow:2,L:"DD.MM.YYYY"},cs:{dow:2,L:"DD.MM.YYYY"},da:{dow:2,L:"DD.MM.YYYY"},nl:{dow:2,L:"DD-MM-YYYY"},"en-US":{dow:1,L:"MM/DD/YYYY"},"en-AU":{dow:2,L:"DD/MM/YYYY"},"en-CA":{dow:1,L:"YYYY-MM-DD"},"en-GB":{dow:2,L:"DD/MM/YYYY"},"en-IE":{dow:2,L:"DD-MM-YYYY"},"en-NZ":{dow:2,L:"DD/MM/YYYY"},"en-ZA":{dow:1,L:"YYYY/MM/DD"},eo:{dow:2,L:"YYYY-MM-DD"},et:{dow:2,L:"DD.MM.YYYY"},fi:{dow:2,L:"DD.MM.YYYY"},fr:{dow:2,L:"DD/MM/YYYY"},"fr-CA":{dow:1,L:"YYYY-MM-DD"},"fr-CH":{dow:2,L:"DD.MM.YYYY"},de:{dow:2,L:"DD.MM.YYYY"},he:{dow:1,L:"DD.MM.YYYY"},id:{dow:2,L:"DD/MM/YYYY"},it:{dow:2,L:"DD/MM/YYYY"},ja:{dow:1,L:"YYYY年M月D日"},ko:{dow:1,L:"YYYY.MM.DD"},lv:{dow:2,L:"DD.MM.YYYY"},lt:{dow:2,L:"DD.MM.YYYY"},mk:{dow:2,L:"D.MM.YYYY"},nb:{dow:2,L:"D. MMMM YYYY"},nn:{dow:2,L:"D. MMMM YYYY"},pl:{dow:2,L:"DD.MM.YYYY"},pt:{dow:2,L:"DD/MM/YYYY"},ro:{dow:2,L:"DD.MM.YYYY"},ru:{dow:2,L:"DD.MM.YYYY"},sk:{dow:2,L:"DD.MM.YYYY"},"es-ES":{dow:2,L:"DD/MM/YYYY"},"es-MX":{dow:2,L:"DD/MM/YYYY"},sv:{dow:2,L:"YYYY-MM-DD"},th:{dow:1,L:"DD/MM/YYYY"},tr:{dow:2,L:"DD.MM.YYYY"},uk:{dow:2,L:"DD.MM.YYYY"},vi:{dow:2,L:"DD/MM/YYYY"}};a.en=a["en-US"],a.es=a["es-ES"],a.no=a.nb,a.zh=a["zh-CN"],Object(r["w"])(a).forEach((function([e,{dow:t,L:n}]){a[e]={id:e,firstDayOfWeek:t,masks:{L:n}}})),t["a"]=a},f3c1:function(e,t){var n=800,r=16,a=Date.now;function o(e){var t=0,o=0;return function(){var i=a(),s=r-(i-o);if(o=i,s>0){if(++t>=n)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}e.exports=o},f4d6:function(e,t,n){var r=n("ffd6"),a=1/0;function o(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}e.exports=o},f542:function(e,t,n){var r=n("ec47"),a=n("ec69"),o=r(a);e.exports=o},f608:function(e,t,n){var r=n("6747"),a=n("ffd6"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;function s(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||(i.test(e)||!o.test(e)||null!=t&&e in Object(t))}e.exports=s},f678:function(e,t,n){var r=n("8384"),a=n("b4b0");function o(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=a(n),n=n===n?n:0),void 0!==t&&(t=a(t),t=t===t?t:0),r(a(e),t,n)}e.exports=o},f772:function(e,t,n){var r=n("5692"),a=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=a(e))}},f7f1:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("fe1f"),a=n("fd3a"),o=n("8c86");function i(e,t){Object(o["a"])(2,arguments);var n=Object(a["a"])(e),i=Object(r["a"])(t);return isNaN(i)?new Date(NaN):i?(n.setDate(n.getDate()+i),n):n}},f8af:function(e,t,n){var r=n("2474");function a(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}e.exports=a},f909:function(e,t,n){var r=n("7e64"),a=n("b760"),o=n("72af"),i=n("4f50"),s=n("1a8c"),c=n("9934"),u=n("8adb");function l(e,t,n,d,f){e!==t&&o(t,(function(o,c){if(f||(f=new r),s(o))i(e,t,c,n,l,d,f);else{var p=d?d(u(e,c),o,c+"",e,t,f):void 0;void 0===p&&(p=o),a(e,c,p)}}),c)}e.exports=l},f9ce:function(e,t,n){var r=n("ef5d"),a=n("e3f8"),o=n("f608"),i=n("f4d6");function s(e){return o(e)?r(i(e)):a(e)}e.exports=s},fa21:function(e,t,n){var r=n("7530"),a=n("2dcb"),o=n("eac5");function i(e){return"function"!=typeof e.constructor||o(e)?{}:r(a(e))}e.exports=i},fb15:function(e,t,n){"use strict";if(n.r(t),n.d(t,"Calendar",(function(){return o["c"]})),n.d(t,"CalendarNav",(function(){return o["d"]})),n.d(t,"DatePicker",(function(){return o["f"]})),n.d(t,"Popover",(function(){return o["h"]})),n.d(t,"Locale",(function(){return o["g"]})),n.d(t,"DateInfo",(function(){return o["e"]})),n.d(t,"Attribute",(function(){return o["a"]})),n.d(t,"AttributeStore",(function(){return o["b"]})),n.d(t,"setupCalendar",(function(){return o["E"]})),n.d(t,"pad",(function(){return o["x"]})),n.d(t,"evalFn",(function(){return o["q"]})),n.d(t,"mergeEvents",(function(){return o["s"]})),n.d(t,"pageIsValid",(function(){return o["C"]})),n.d(t,"pageIsBeforePage",(function(){return o["z"]})),n.d(t,"pageIsAfterPage",(function(){return o["y"]})),n.d(t,"pageIsBetweenPages",(function(){return o["A"]})),n.d(t,"pageIsEqualToPage",(function(){return o["B"]})),n.d(t,"addPages",(function(){return o["j"]})),n.d(t,"pageRangeToArray",(function(){return o["D"]})),n.d(t,"datesAreEqual",(function(){return o["n"]})),n.d(t,"arrayHasItems",(function(){return o["l"]})),n.d(t,"mixinOptionalProps",(function(){return o["t"]})),n.d(t,"on",(function(){return o["v"]})),n.d(t,"off",(function(){return o["u"]})),n.d(t,"elementContains",(function(){return o["p"]})),n.d(t,"onSpaceOrEnter",(function(){return o["w"]})),n.d(t,"createGuid",(function(){return o["m"]})),n.d(t,"hash",(function(){return o["r"]})),n.d(t,"addTapOrClickHandler",(function(){return o["k"]})),n.d(t,"addHorizontalSwipeHandler",(function(){return o["i"]})),"undefined"!==typeof window){var r=window.document.currentScript,a=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);a&&(n.p=a[1])}var o=n("34e9");t["default"]=o["o"]},fba5:function(e,t,n){var r=n("cb5a");function a(e){return r(this.__data__,e)>-1}e.exports=a},fc6a:function(e,t,n){var r=n("44ad"),a=n("1d80");e.exports=function(e){return r(a(e))}},fccf:function(e,t,n){"use strict";var r=n("53b1"),a=n.n(r);a.a},fce3:function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fcff:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".vc-svg-icon[data-v-63f7b5ec]{display:inline-block;stroke:currentColor;stroke-width:0}.vc-svg-icon path[data-v-63f7b5ec]{fill:currentColor}",""]),e.exports=t},fd3a:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("8c86");function a(e){Object(r["a"])(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fe1f:function(e,t,n){"use strict";function r(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,"a",(function(){return r}))},ffd6:function(e,t,n){var r=n("3729"),a=n("1310"),o="[object Symbol]";function i(e){return"symbol"==typeof e||a(e)&&r(e)==o}e.exports=i}})}));
//# sourceMappingURL=v-calendar.umd.min.js.map

/***/ }),

/***/ "./resources/assets/src/components/Daily.vue":
/*!***************************************************!*\
  !*** ./resources/assets/src/components/Daily.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Daily_vue_vue_type_template_id_696aa98f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Daily.vue?vue&type=template&id=696aa98f& */ "./resources/assets/src/components/Daily.vue?vue&type=template&id=696aa98f&");
/* harmony import */ var _Daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Daily.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Daily.vue?vue&type=script&lang=js&");
/* harmony import */ var _Daily_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Daily.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Daily_vue_vue_type_template_id_696aa98f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Daily_vue_vue_type_template_id_696aa98f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Daily.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/LightswitchField.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/src/components/LightswitchField.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LightswitchField_vue_vue_type_template_id_6dd191ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightswitchField.vue?vue&type=template&id=6dd191ca& */ "./resources/assets/src/components/LightswitchField.vue?vue&type=template&id=6dd191ca&");
/* harmony import */ var _LightswitchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightswitchField.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/LightswitchField.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LightswitchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LightswitchField_vue_vue_type_template_id_6dd191ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _LightswitchField_vue_vue_type_template_id_6dd191ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/LightswitchField.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Monthly.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/src/components/Monthly.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Monthly_vue_vue_type_template_id_5c616203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Monthly.vue?vue&type=template&id=5c616203& */ "./resources/assets/src/components/Monthly.vue?vue&type=template&id=5c616203&");
/* harmony import */ var _Monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Monthly.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Monthly.vue?vue&type=script&lang=js&");
/* harmony import */ var _Monthly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Monthly.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Monthly_vue_vue_type_template_id_5c616203___WEBPACK_IMPORTED_MODULE_0__.render,
  _Monthly_vue_vue_type_template_id_5c616203___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Monthly.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/OptionButtons.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/src/components/OptionButtons.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OptionButtons_vue_vue_type_template_id_156e0d42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionButtons.vue?vue&type=template&id=156e0d42& */ "./resources/assets/src/components/OptionButtons.vue?vue&type=template&id=156e0d42&");
/* harmony import */ var _OptionButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionButtons.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/OptionButtons.vue?vue&type=script&lang=js&");
/* harmony import */ var _OptionButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionButtons.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OptionButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionButtons_vue_vue_type_template_id_156e0d42___WEBPACK_IMPORTED_MODULE_0__.render,
  _OptionButtons_vue_vue_type_template_id_156e0d42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/OptionButtons.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/RecurringDates.vue":
/*!************************************************************!*\
  !*** ./resources/assets/src/components/RecurringDates.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RecurringDates_vue_vue_type_template_id_6a17e4a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecurringDates.vue?vue&type=template&id=6a17e4a2& */ "./resources/assets/src/components/RecurringDates.vue?vue&type=template&id=6a17e4a2&");
/* harmony import */ var _RecurringDates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecurringDates.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/RecurringDates.vue?vue&type=script&lang=js&");
/* harmony import */ var _RecurringDates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecurringDates.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RecurringDates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecurringDates_vue_vue_type_template_id_6a17e4a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _RecurringDates_vue_vue_type_template_id_6a17e4a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/RecurringDates.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Weekly.vue":
/*!****************************************************!*\
  !*** ./resources/assets/src/components/Weekly.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Weekly_vue_vue_type_template_id_4fd5e8fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weekly.vue?vue&type=template&id=4fd5e8fb& */ "./resources/assets/src/components/Weekly.vue?vue&type=template&id=4fd5e8fb&");
/* harmony import */ var _Weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Weekly.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Weekly.vue?vue&type=script&lang=js&");
/* harmony import */ var _Weekly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Weekly.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Weekly_vue_vue_type_template_id_4fd5e8fb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Weekly_vue_vue_type_template_id_4fd5e8fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Weekly.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Yearly.vue":
/*!****************************************************!*\
  !*** ./resources/assets/src/components/Yearly.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Yearly_vue_vue_type_template_id_0b2fb684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Yearly.vue?vue&type=template&id=0b2fb684& */ "./resources/assets/src/components/Yearly.vue?vue&type=template&id=0b2fb684&");
/* harmony import */ var _Yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Yearly.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Yearly.vue?vue&type=script&lang=js&");
/* harmony import */ var _Yearly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Yearly.vue?vue&type=style&index=0&lang=scss& */ "./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Yearly_vue_vue_type_template_id_0b2fb684___WEBPACK_IMPORTED_MODULE_0__.render,
  _Yearly_vue_vue_type_template_id_0b2fb684___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Yearly.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Daily.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/src/components/Daily.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Daily.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/LightswitchField.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/src/components/LightswitchField.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightswitchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LightswitchField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/LightswitchField.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LightswitchField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Monthly.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/assets/src/components/Monthly.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Monthly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/OptionButtons.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/src/components/OptionButtons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionButtons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/RecurringDates.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/src/components/RecurringDates.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringDates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Weekly.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/src/components/Weekly.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Weekly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Yearly.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/src/components/Yearly.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Yearly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Daily.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Monthly.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionButtons.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringDates.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Weekly.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Yearly.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/assets/src/components/Daily.vue?vue&type=template&id=696aa98f&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/src/components/Daily.vue?vue&type=template&id=696aa98f& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_template_id_696aa98f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_template_id_696aa98f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Daily_vue_vue_type_template_id_696aa98f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Daily.vue?vue&type=template&id=696aa98f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=template&id=696aa98f&");


/***/ }),

/***/ "./resources/assets/src/components/LightswitchField.vue?vue&type=template&id=6dd191ca&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/src/components/LightswitchField.vue?vue&type=template&id=6dd191ca& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightswitchField_vue_vue_type_template_id_6dd191ca___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightswitchField_vue_vue_type_template_id_6dd191ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LightswitchField_vue_vue_type_template_id_6dd191ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LightswitchField.vue?vue&type=template&id=6dd191ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/LightswitchField.vue?vue&type=template&id=6dd191ca&");


/***/ }),

/***/ "./resources/assets/src/components/Monthly.vue?vue&type=template&id=5c616203&":
/*!************************************************************************************!*\
  !*** ./resources/assets/src/components/Monthly.vue?vue&type=template&id=5c616203& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_template_id_5c616203___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_template_id_5c616203___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Monthly_vue_vue_type_template_id_5c616203___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Monthly.vue?vue&type=template&id=5c616203& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=template&id=5c616203&");


/***/ }),

/***/ "./resources/assets/src/components/OptionButtons.vue?vue&type=template&id=156e0d42&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/src/components/OptionButtons.vue?vue&type=template&id=156e0d42& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_template_id_156e0d42___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_template_id_156e0d42___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionButtons_vue_vue_type_template_id_156e0d42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OptionButtons.vue?vue&type=template&id=156e0d42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=template&id=156e0d42&");


/***/ }),

/***/ "./resources/assets/src/components/RecurringDates.vue?vue&type=template&id=6a17e4a2&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/src/components/RecurringDates.vue?vue&type=template&id=6a17e4a2& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_template_id_6a17e4a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_template_id_6a17e4a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecurringDates_vue_vue_type_template_id_6a17e4a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RecurringDates.vue?vue&type=template&id=6a17e4a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=template&id=6a17e4a2&");


/***/ }),

/***/ "./resources/assets/src/components/Weekly.vue?vue&type=template&id=4fd5e8fb&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/src/components/Weekly.vue?vue&type=template&id=4fd5e8fb& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_template_id_4fd5e8fb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_template_id_4fd5e8fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Weekly_vue_vue_type_template_id_4fd5e8fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Weekly.vue?vue&type=template&id=4fd5e8fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=template&id=4fd5e8fb&");


/***/ }),

/***/ "./resources/assets/src/components/Yearly.vue?vue&type=template&id=0b2fb684&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/src/components/Yearly.vue?vue&type=template&id=0b2fb684& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_template_id_0b2fb684___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_template_id_0b2fb684___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Yearly_vue_vue_type_template_id_0b2fb684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Yearly.vue?vue&type=template&id=0b2fb684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=template&id=0b2fb684&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=template&id=696aa98f&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Daily.vue?vue&type=template&id=696aa98f& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "cdf-daily" }, [
    _c("legend", { staticClass: "visually-hidden" }, [
      _vm._v(_vm._s(_vm._f("t")("Repeat daily")))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-daily__option" }, [
      _c("div", { staticClass: "cdf-daily__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("every")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-daily__option-input" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("interval", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat interval")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value.interval,
              expression: "value.interval"
            }
          ],
          staticClass: "nicetext text",
          class: { disabled: _vm.disabled },
          attrs: {
            type: "number",
            min: "1",
            steps: "1",
            name: _vm._f("namespaceInputName")("interval", _vm.name),
            id: _vm._f("namespaceInputId")("interval", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { value: _vm.value.interval },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.value, "interval", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-daily__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("day(s)")))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/LightswitchField.vue?vue&type=template&id=6dd191ca&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/LightswitchField.vue?vue&type=template&id=6dd191ca& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "lightswitch-outer-container" }, [
    _c(
      "span",
      {
        staticClass: "visually-hidden",
        attrs: { id: _vm._f("namespaceInputId")("desc", _vm.id) }
      },
      [
        _vm._v(
          "\n    " +
            _vm._s(
              _vm._f("t")("Check for {onLabel}.", "app", {
                onLabel: _vm.onLabel
              })
            ) +
            "\n  "
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "lightswitch-inner-container" }, [
      _c(
        "button",
        {
          ref: "lightSwitch",
          staticClass: "lightswitch",
          class: { disabled: _vm.disabled },
          attrs: {
            disabled: _vm.disabled,
            type: "button",
            role: "checkbox",
            id: _vm.id,
            "aria-describedby": _vm._f("namespaceInputId")("desc", _vm.id)
          }
        },
        [
          _c("div", { staticClass: "lightswitch-container" }, [
            _c("div", { staticClass: "handle" }),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "hidden", name: _vm.name, disabled: _vm.disabled }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _vm.onLabel
        ? _c(
            "span",
            { attrs: { "data-toggle": "on", "aria-hidden": "true" } },
            [_vm._v(_vm._s(_vm.onLabel))]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=template&id=5c616203&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Monthly.vue?vue&type=template&id=5c616203& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "cdf-monthly" }, [
    _c("legend", { staticClass: "visually-hidden" }, [
      _vm._v(_vm._s(_vm._f("t")("Repeat monthly")))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-monthly__option" }, [
      _c("div", { staticClass: "cdf-monthly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("every")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-monthly__option-input" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("interval", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat interval")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value.interval,
              expression: "value.interval"
            }
          ],
          staticClass: "nicetext text",
          class: { disabled: _vm.disabled },
          attrs: {
            type: "number",
            min: "1",
            steps: "1",
            name: _vm._f("namespaceInputName")("interval", _vm.name),
            id: _vm._f("namespaceInputId")("interval", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { value: _vm.value.interval },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.value, "interval", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-monthly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("month(s)")))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-monthly__option" }, [
      _c("div", { staticClass: "cdf-monthly__option-radio" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("mode-on", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat monthly on the same day")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mode,
              expression: "mode"
            }
          ],
          class: { disabled: _vm.disabled },
          attrs: {
            type: "radio",
            name: _vm._f("namespaceInputName")("mode", _vm.name),
            value: "sameDay",
            id: _vm._f("namespaceInputId")("mode-same-day", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { checked: _vm._q(_vm.mode, "sameDay") },
          on: {
            change: function($event) {
              _vm.mode = "sameDay"
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-monthly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("on the same day")))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-monthly__option" }, [
      _c("div", { staticClass: "cdf-monthly__option-radio" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("mode-on", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat monthly on")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mode,
              expression: "mode"
            }
          ],
          class: { disabled: _vm.disabled },
          attrs: {
            type: "radio",
            name: _vm._f("namespaceInputName")("mode", _vm.name),
            value: "on",
            id: _vm._f("namespaceInputId")("mode-on", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { checked: _vm._q(_vm.mode, "on") },
          on: {
            change: function($event) {
              _vm.mode = "on"
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-monthly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("on days")))
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "cdf-monthly__option-input",
          class: { "cdf-monthly__option-input--disabled": _vm.mode !== "on" }
        },
        [
          _c("option-buttons", {
            attrs: {
              disabled: _vm.disabled || _vm.mode !== "on",
              id: _vm._f("namespaceInputId")("month-day", _vm.id),
              name: _vm._f("namespaceInputName")("monthDay", _vm.name),
              value: _vm.value.monthDay || [],
              options: _vm.monthDays,
              fixedWidth: true,
              small: true
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-monthly__option" }, [
      _c("div", { staticClass: "cdf-monthly__option-radio" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("mode-on-the", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat monthly on the")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mode,
              expression: "mode"
            }
          ],
          class: { disabled: _vm.disabled },
          attrs: {
            type: "radio",
            name: _vm._f("namespaceInputName")("mode", _vm.name),
            value: "onThe",
            id: _vm._f("namespaceInputId")("mode-on-the", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { checked: _vm._q(_vm.mode, "onThe") },
          on: {
            change: function($event) {
              _vm.mode = "onThe"
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-monthly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("on the")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-monthly__option-inputs" }, [
        _c(
          "div",
          {
            staticClass: "cdf-monthly__option-input",
            class: {
              "cdf-monthly__option-input--disabled": _vm.mode !== "onThe"
            }
          },
          [
            _c("option-buttons", {
              attrs: {
                disabled: _vm.disabled || _vm.mode !== "onThe",
                id: _vm._f("namespaceInputId")("position", _vm.id),
                name: _vm._f("namespaceInputName")("position", _vm.name),
                value: _vm.value.position || [],
                options: _vm.positions
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "cdf-monthly__option-input",
            class: {
              "cdf-monthly__option-input--disabled": _vm.mode !== "onThe"
            }
          },
          [
            _c("option-buttons", {
              attrs: {
                disabled: _vm.disabled || _vm.mode !== "onThe",
                id: _vm._f("namespaceInputId")("day", _vm.id),
                name: _vm._f("namespaceInputName")("day", _vm.name),
                value: _vm.value.day || [],
                options: _vm.days
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=template&id=156e0d42&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/OptionButtons.vue?vue&type=template&id=156e0d42& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "fieldset",
    {
      staticClass: "cdf-option-buttons",
      class: {
        "cdf-option-buttons--fixed": _vm.fixedWidth,
        "cdf-option-buttons--small": _vm.small
      },
      style: "--cdf-option-columns: " + _vm.columns + ";"
    },
    [
      _c(
        "legend",
        {
          staticClass: "visually-hidden cdf-option-buttons__legend",
          attrs: { for: _vm.id }
        },
        [_vm._v(_vm._s(_vm.legend))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "cdf-option-buttons__buttons" },
        _vm._l(_vm.options, function(label, key) {
          return _c(
            "div",
            { key: key, staticClass: "cdf-option-buttons__button" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.value,
                    expression: "value"
                  }
                ],
                staticClass: "cdf-option-buttons__button-checkbox",
                attrs: {
                  type: "checkbox",
                  name: _vm.name + "[]",
                  id: _vm._f("namespaceInputId")(
                    key.toString().toLowerCase(),
                    _vm.id
                  ),
                  disabled: _vm.disabled
                },
                domProps: {
                  value: key,
                  checked: Array.isArray(_vm.value)
                    ? _vm._i(_vm.value, key) > -1
                    : _vm.value
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.value,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = key,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.value = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.value = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.value = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "cdf-option-buttons__button-label",
                  attrs: {
                    for: _vm._f("namespaceInputId")(
                      key.toString().toLowerCase(),
                      _vm.id
                    )
                  }
                },
                [_vm._v(_vm._s(label))]
              )
            ]
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=template&id=6a17e4a2&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/RecurringDates.vue?vue&type=template&id=6a17e4a2& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cdf-date" },
    [
      _vm._l(_vm.dates, function(date, index) {
        return _c("div", { key: date.id, staticClass: "cdf-date__entry" }, [
          _c("input", {
            attrs: {
              type: "hidden",
              name: _vm._f("namespaceInputName")("sortOrder[]", _vm.name)
            },
            domProps: { value: date.id }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "cdf-date__toolbar" }, [
            _c("span", { staticClass: "cdf-date__toolbar-label" }, [
              _vm._v(_vm._s(_vm._f("t")("Date")))
            ]),
            _vm._v(" "),
            !_vm.staticItems
              ? _c("button", {
                  staticClass: "delete icon",
                  attrs: { title: _vm._f("t")("Delete date") },
                  on: {
                    click: function($event) {
                      return _vm.remove(date.id, $event)
                    }
                  }
                })
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("fieldset", { staticClass: "cdf-date__fieldset" }, [
            _c("legend", { staticClass: "cdf-date__legend" }, [
              _vm._v(_vm._s(_vm._f("t")("Start & End")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "cdf-date__date-input" },
              [
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: _vm._f("namespaceInputName")(
                      "startEnd[start][raw]",
                      date.name
                    ),
                    disabled: _vm.disabled
                  },
                  domProps: { value: _vm._f("dateRaw")(date.startEnd.start) }
                }),
                _vm._v(" "),
                _c("input", {
                  attrs: {
                    type: "hidden",
                    name: _vm._f("namespaceInputName")(
                      "startEnd[end][raw]",
                      date.name
                    ),
                    disabled: _vm.disabled
                  },
                  domProps: { value: _vm._f("dateRaw")(date.startEnd.end) }
                }),
                _vm._v(" "),
                _c("v-date-picker", {
                  staticClass: "cdf-date__start-end",
                  attrs: {
                    mode: date.allDay ? "date" : "dateTime",
                    "is-range": "",
                    is24hr: ""
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var inputValue = ref.inputValue
                          var inputEvents = ref.inputEvents
                          return [
                            _c(
                              "label",
                              {
                                staticClass: "visually-hidden",
                                attrs: {
                                  for: _vm._f("namespaceInputId")(
                                    "start",
                                    _vm.id + "-" + index
                                  )
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm._f("t")("Start")) +
                                    "\n            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "input",
                              _vm._g(
                                {
                                  staticClass:
                                    "nicetext text fullwidth cdf-date__input",
                                  class: { disabled: _vm.disabled },
                                  attrs: {
                                    id: _vm._f("namespaceInputId")(
                                      "start",
                                      _vm.id + "-" + index
                                    ),
                                    name: _vm._f("namespaceInputName")(
                                      "startEnd[start][formatted]",
                                      date.name
                                    ),
                                    disabled: _vm.disabled
                                  },
                                  domProps: { value: inputValue.start }
                                },
                                _vm.disabled ? null : inputEvents.start
                              )
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              { staticClass: "cdf-date__start-end-separator" },
                              [_vm._v("–")]
                            ),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "visually-hidden",
                                attrs: {
                                  for: _vm._f("namespaceInputId")(
                                    "end",
                                    _vm.id + "-" + index
                                  )
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm._f("t")("End")) +
                                    "\n            "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "input",
                              _vm._g(
                                {
                                  staticClass:
                                    "nicetext text fullwidth cdf-date__input",
                                  class: { disabled: _vm.disabled },
                                  attrs: {
                                    id: _vm._f("namespaceInputId")(
                                      "end",
                                      _vm.id + "-" + index
                                    ),
                                    name: _vm._f("namespaceInputName")(
                                      "startEnd[end][formatted]",
                                      date.name
                                    ),
                                    disabled: _vm.disabled
                                  },
                                  domProps: { value: inputValue.end }
                                },
                                _vm.disabled ? null : inputEvents.end
                              )
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    true
                  ),
                  model: {
                    value: date.startEnd,
                    callback: function($$v) {
                      _vm.$set(date, "startEnd", $$v)
                    },
                    expression: "date.startEnd"
                  }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "cdf-date__all-day" },
                  [
                    _c("lightswitch-field", {
                      attrs: {
                        id: _vm._f("namespaceInputId")(
                          "all-day",
                          _vm.id + "-" + index
                        ),
                        name: _vm._f("namespaceInputName")("allDay", date.name),
                        onLabel: _vm._f("t")("All Day"),
                        on: date.allDay,
                        disabled: _vm.disabled
                      },
                      on: {
                        change: function($event) {
                          date.allDay = $event
                        }
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.settings.allowRecurring
                  ? _c(
                      "div",
                      { staticClass: "cdf-date__has-recurring" },
                      [
                        _c("lightswitch-field", {
                          attrs: {
                            id: _vm._f("namespaceInputId")(
                              "recurring",
                              _vm.id + "-" + index
                            ),
                            name: _vm._f("namespaceInputName")(
                              "recurring",
                              date.name
                            ),
                            onLabel: _vm._f("t")("Repeat date"),
                            on: date.recurring,
                            disabled: _vm.disabled
                          },
                          on: {
                            change: function($event) {
                              date.recurring = $event
                            }
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          date.recurring && _vm.settings.allowRecurring
            ? _c("fieldset", { staticClass: "cdf-date__fieldset" }, [
                _c("legend", { staticClass: "cdf-date__legend" }, [
                  _vm._v(_vm._s(_vm._f("t")("Repeat")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "cdf-date__recurring" }, [
                  _c(
                    "div",
                    { staticClass: "cdf-date__recurring-type select" },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: date.repeat.frequency,
                              expression: "date.repeat.frequency"
                            }
                          ],
                          staticClass: "cdf-date__select",
                          class: { disabled: _vm.disabled },
                          attrs: {
                            name: _vm._f("namespaceInputName")(
                              "repeat[frequency]",
                              date.name
                            ),
                            id: _vm._f("namespaceInputId")(
                              "repeat-frequency",
                              _vm.id + "-" + index
                            ),
                            disabled: _vm.disabled
                          },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                date.repeat,
                                "frequency",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "YEARLY" } }, [
                            _vm._v(_vm._s(_vm._f("t")("Yearly")))
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "MONTHLY" } }, [
                            _vm._v(_vm._s(_vm._f("t")("Monthly")))
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "WEEKLY" } }, [
                            _vm._v(_vm._s(_vm._f("t")("Weekly")))
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "DAILY" } }, [
                            _vm._v(_vm._s(_vm._f("t")("Daily")))
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cdf-date__recurring-settings" },
                    [
                      date.repeat.frequency === "YEARLY"
                        ? _c("yearly", {
                            attrs: {
                              id: _vm._f("namespaceInputId")(
                                "repeat-settings",
                                _vm.id + "-" + index
                              ),
                              name: _vm._f("namespaceInputName")(
                                "repeat",
                                date.name
                              ),
                              value: date.repeat,
                              disabled: _vm.disabled
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      date.repeat.frequency === "MONTHLY"
                        ? _c("monthly", {
                            attrs: {
                              id: _vm._f("namespaceInputId")(
                                "repeat-settings",
                                _vm.id + "-" + index
                              ),
                              name: _vm._f("namespaceInputName")(
                                "repeat",
                                date.name
                              ),
                              value: date.repeat,
                              disabled: _vm.disabled
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      date.repeat.frequency === "WEEKLY"
                        ? _c("weekly", {
                            attrs: {
                              id: _vm._f("namespaceInputId")(
                                "repeat-settings",
                                _vm.id + "-" + index
                              ),
                              name: _vm._f("namespaceInputName")(
                                "repeat",
                                date.name
                              ),
                              value: date.repeat,
                              disabled: _vm.disabled
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      date.repeat.frequency === "DAILY"
                        ? _c("daily", {
                            attrs: {
                              id: _vm._f("namespaceInputId")(
                                "repeat-settings",
                                _vm.id + "-" + index
                              ),
                              name: _vm._f("namespaceInputName")(
                                "repeat",
                                date.name
                              ),
                              value: date.repeat,
                              disabled: _vm.disabled
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("fieldset", { staticClass: "cdf-date__recurring-end" }, [
                  _c("legend", { staticClass: "cdf-date__legend" }, [
                    _vm._v(_vm._s(_vm._f("t")("End")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cdf-date__recurring-end-fields" },
                    [
                      _c(
                        "div",
                        { staticClass: "cdf-date__recurring-end-input select" },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: date.repeat.endsAfter,
                                  expression: "date.repeat.endsAfter"
                                }
                              ],
                              staticClass: "cdf-date__select",
                              class: { disabled: _vm.disabled },
                              attrs: {
                                name: _vm._f("namespaceInputName")(
                                  "repeat[endsAfter]",
                                  date.name
                                ),
                                id: _vm._f("namespaceInputId")(
                                  "repeat-ends-after",
                                  _vm.id + "-" + index
                                ),
                                disabled: _vm.disabled
                              },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    date.repeat,
                                    "endsAfter",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "never" } }, [
                                _vm._v(_vm._s(_vm._f("t")("Never")))
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "after" } }, [
                                _vm._v(_vm._s(_vm._f("t")("After")))
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "onDate" } }, [
                                _vm._v(_vm._s(_vm._f("t")("On Date")))
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      date.repeat.endsAfter === "after"
                        ? _c(
                            "div",
                            { staticClass: "cdf-date__recurring-end-input" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "visually-hidden",
                                  attrs: {
                                    for: _vm._f("namespaceInputId")(
                                      "repeat-end-after",
                                      _vm.id + "-" + index
                                    )
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        _vm._f("t")("Number of Executions")
                                      ) +
                                      "\n            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "flex" }, [
                                _c("div", { staticClass: "textwrapper" }, [
                                  _c("input", {
                                    staticClass: "nicetext text",
                                    class: { disabled: _vm.disabled },
                                    attrs: {
                                      id: _vm._f("namespaceInputId")(
                                        "repeat-count",
                                        _vm.id + "-" + index
                                      ),
                                      name: _vm._f("namespaceInputName")(
                                        "repeat[count]",
                                        date.name
                                      ),
                                      type: "number",
                                      min: "1",
                                      steps: "1",
                                      disabled: _vm.disabled
                                    },
                                    domProps: { value: date.repeat.count }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "label light" }, [
                                  _vm._v(_vm._s(_vm._f("t")("executions")))
                                ])
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      date.repeat.endsAfter === "onDate"
                        ? _c("input", {
                            attrs: {
                              type: "hidden",
                              name: _vm._f("namespaceInputName")(
                                "repeat[endsOn][raw]",
                                date.name
                              )
                            },
                            domProps: {
                              value: _vm._f("dateRaw")(date.repeat.endsOn)
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      date.repeat.endsAfter === "onDate"
                        ? _c("v-date-picker", {
                            staticClass: "cdf-date__recurring-end-input",
                            attrs: { mode: "date", is24hr: "" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var inputValue = ref.inputValue
                                    var inputEvents = ref.inputEvents
                                    return [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "visually-hidden",
                                          attrs: {
                                            for: _vm._f("namespaceInputId")(
                                              "repeat-end-on",
                                              _vm.id + "-" + index
                                            )
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                " +
                                              _vm._s(
                                                _vm._f("t")("End on Date")
                                              ) +
                                              "\n              "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "input",
                                        _vm._g(
                                          {
                                            staticClass: "nicetext text",
                                            class: { disabled: _vm.disabled },
                                            attrs: {
                                              id: _vm._f("namespaceInputId")(
                                                "repeat-ends-on",
                                                _vm.id + "-" + index
                                              ),
                                              name: _vm._f(
                                                "namespaceInputName"
                                              )(
                                                "repeat[endsOn][formatted]",
                                                date.name
                                              ),
                                              disabled: _vm.disabled
                                            },
                                            domProps: { value: inputValue }
                                          },
                                          inputEvents
                                        )
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            ),
                            model: {
                              value: date.repeat.endsOn,
                              callback: function($$v) {
                                _vm.$set(date.repeat, "endsOn", $$v)
                              },
                              expression: "date.repeat.endsOn"
                            }
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "fieldset",
                  { staticClass: "cdf-date__recurring-exceptions" },
                  [
                    _c("legend", { staticClass: "cdf-date__legend" }, [
                      _vm._v(_vm._s(_vm._f("t")("Exceptions")))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "cdf-date__exceptions" },
                      [
                        _vm._l(date.repeat.exceptions, function(
                          exception,
                          index
                        ) {
                          return _c(
                            "div",
                            { key: index, staticClass: "cdf-date__exception" },
                            [
                              _c("input", {
                                attrs: {
                                  type: "hidden",
                                  name: _vm._f("namespaceInputName")(
                                    "repeat[exceptions][" + index + "][raw]",
                                    date.name
                                  )
                                },
                                domProps: {
                                  value: _vm._f("dateRaw")(
                                    date.repeat.exceptions[index]
                                  )
                                }
                              }),
                              _vm._v(" "),
                              _c("v-date-picker", {
                                staticClass: "cdf-date__exception-input",
                                attrs: { mode: "date", is24hr: "" },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var inputValue = ref.inputValue
                                        var inputEvents = ref.inputEvents
                                        return [
                                          _c(
                                            "label",
                                            {
                                              staticClass: "visually-hidden",
                                              attrs: {
                                                for: _vm._f("namespaceInputId")(
                                                  "exception",
                                                  _vm.id + "-" + index
                                                )
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                  " +
                                                  _vm._s(
                                                    _vm._f("t")(
                                                      "Exception on Date"
                                                    )
                                                  ) +
                                                  "\n                "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "input",
                                            _vm._g(
                                              {
                                                staticClass: "nicetext text",
                                                class: {
                                                  disabled: _vm.disabled
                                                },
                                                attrs: {
                                                  id: _vm._f(
                                                    "namespaceInputId"
                                                  )(
                                                    "exception",
                                                    _vm.id + "-" + index
                                                  ),
                                                  name: _vm._f(
                                                    "namespaceInputName"
                                                  )(
                                                    "repeat[exceptions][" +
                                                      index +
                                                      "][formatted]",
                                                    date.name
                                                  ),
                                                  disabled: _vm.disabled
                                                },
                                                domProps: { value: inputValue }
                                              },
                                              inputEvents
                                            )
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                ),
                                model: {
                                  value: date.repeat.exceptions[index],
                                  callback: function($$v) {
                                    _vm.$set(date.repeat.exceptions, index, $$v)
                                  },
                                  expression: "date.repeat.exceptions[index]"
                                }
                              }),
                              _vm._v(" "),
                              !_vm.disabled
                                ? _c("button", {
                                    staticClass: "btn delete icon",
                                    attrs: {
                                      title: _vm._f("t")("Delete exception")
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteException(
                                          date,
                                          index,
                                          $event
                                        )
                                      }
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
                        }),
                        _vm._v(" "),
                        !_vm.disabled
                          ? _c(
                              "div",
                              { staticClass: "cdf-date__exception-add" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn add icon",
                                    on: {
                                      click: function($event) {
                                        return _vm.addException(date, $event)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(_vm._f("t")("Add exception")) +
                                        "\n            "
                                    )
                                  ]
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                )
              ])
            : _vm._e()
        ])
      }),
      _vm._v(" "),
      !_vm.staticItems
        ? _c("div", { staticClass: "cdf-date__add" }, [
            _c(
              "button",
              {
                staticClass: "btn add icon",
                attrs: { disabled: !_vm.canAdd },
                on: {
                  click: function($event) {
                    return _vm.add($event)
                  }
                }
              },
              [_vm._v("\n      " + _vm._s(_vm._f("t")("Add date")) + "\n    ")]
            )
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=template&id=4fd5e8fb&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Weekly.vue?vue&type=template&id=4fd5e8fb& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "cdf-weekly" }, [
    _c("legend", { staticClass: "visually-hidden" }, [
      _vm._v(_vm._s(_vm._f("t")("Repeat weekly")))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-weekly__option" }, [
      _c("div", { staticClass: "cdf-weekly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("every")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-weekly__option-input" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("interval", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat interval")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value.interval,
              expression: "value.interval"
            }
          ],
          staticClass: "nicetext text",
          class: { disabled: _vm.disabled },
          attrs: {
            type: "number",
            min: "1",
            steps: "1",
            name: _vm._f("namespaceInputName")("interval", _vm.name),
            id: _vm._f("namespaceInputId")("interval", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { value: _vm.value.interval },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.value, "interval", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-weekly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("weeks(s)")))
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "cdf-weekly__option" },
      [
        _c("option-buttons", {
          attrs: {
            disabled: _vm.disabled,
            id: _vm._f("namespaceInputId")("day", _vm.id),
            name: _vm._f("namespaceInputName")("day", _vm.name),
            value: _vm.value.day || [],
            options: _vm.days
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=template&id=0b2fb684&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/src/components/Yearly.vue?vue&type=template&id=0b2fb684& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("fieldset", { staticClass: "cdf-yearly" }, [
    _c("legend", { staticClass: "visually-hidden" }, [
      _vm._v(_vm._s(_vm._f("t")("Repeat yearly")))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-yearly__option" }, [
      _c("div", { staticClass: "cdf-yearly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("every")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-yearly__option-input" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("interval", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat interval")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value.interval,
              expression: "value.interval"
            }
          ],
          staticClass: "nicetext text",
          class: { disabled: _vm.disabled },
          attrs: {
            type: "number",
            min: "1",
            steps: "1",
            name: _vm._f("namespaceInputName")("interval", _vm.name),
            id: _vm._f("namespaceInputId")("interval", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { value: _vm.value.interval },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.value, "interval", $event.target.value)
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-yearly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("years(s)")))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-yearly__option" }, [
      _c("div", { staticClass: "cdf-yearly__option-radio" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("mode-same-day", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat yearly on")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mode,
              expression: "mode"
            }
          ],
          class: { disabled: _vm.disabled },
          attrs: {
            type: "radio",
            name: _vm._f("namespaceInputName")("mode", _vm.name),
            value: "sameDay",
            id: _vm._f("namespaceInputId")("mode-same-day", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { checked: _vm._q(_vm.mode, "sameDay") },
          on: {
            change: function($event) {
              _vm.mode = "sameDay"
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-yearly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("on the same day")))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-yearly__option" }, [
      _c("div", { staticClass: "cdf-yearly__option-radio" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("mode-on", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat yearly on")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mode,
              expression: "mode"
            }
          ],
          class: { disabled: _vm.disabled },
          attrs: {
            type: "radio",
            name: _vm._f("namespaceInputName")("mode", _vm.name),
            value: "on",
            id: _vm._f("namespaceInputId")("mode-on", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { checked: _vm._q(_vm.mode, "on") },
          on: {
            change: function($event) {
              _vm.mode = "on"
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-yearly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("on")))
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "cdf-yearly__option-inputs cdf-yearly__option-inputs--flex"
        },
        [
          _c(
            "div",
            {
              staticClass: "cdf-yearly__option-input",
              class: { "cdf-yearly__option-input--disabled": _vm.mode !== "on" }
            },
            [
              _c("option-buttons", {
                attrs: {
                  disabled: _vm.disabled || _vm.mode !== "on",
                  id: _vm._f("namespaceInputId")("month", _vm.id),
                  name: _vm._f("namespaceInputName")("month", _vm.name),
                  value: _vm.value.month || [],
                  options: _vm.months,
                  fixedWidth: true,
                  columns: 3,
                  small: true
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "cdf-yearly__option-input",
              class: { "cdf-yearly__option-input--disabled": _vm.mode !== "on" }
            },
            [
              _c("option-buttons", {
                attrs: {
                  disabled: _vm.disabled || _vm.mode !== "on",
                  id: _vm._f("namespaceInputId")("month-day", _vm.id),
                  name: _vm._f("namespaceInputName")("monthDay", _vm.name),
                  value: _vm.value.monthDay || [],
                  options: _vm.monthDays,
                  fixedWidth: true,
                  small: true
                }
              })
            ],
            1
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "cdf-yearly__option" }, [
      _c("div", { staticClass: "cdf-yearly__option-radio" }, [
        _c(
          "label",
          {
            staticClass: "visually-hidden",
            attrs: { for: _vm._f("namespaceInputId")("mode-on-the", _vm.id) }
          },
          [_vm._v(_vm._s(_vm._f("t")("Repeat yearly on the")))]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.mode,
              expression: "mode"
            }
          ],
          class: { disabled: _vm.disabled },
          attrs: {
            type: "radio",
            name: _vm._f("namespaceInputName")("mode", _vm.name),
            value: "onThe",
            id: _vm._f("namespaceInputId")("mode-on-the", _vm.id),
            disabled: _vm.disabled
          },
          domProps: { checked: _vm._q(_vm.mode, "onThe") },
          on: {
            change: function($event) {
              _vm.mode = "onThe"
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-yearly__option-seperator" }, [
        _vm._v(_vm._s(_vm._f("t")("on the")))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cdf-yearly__option-inputs" }, [
        _c(
          "div",
          {
            staticClass: "cdf-yearly__option-input",
            class: {
              "cdf-yearly__option-input--disabled": _vm.mode !== "onThe"
            }
          },
          [
            _c("option-buttons", {
              attrs: {
                disabled: _vm.disabled || _vm.mode !== "onThe",
                id: _vm._f("namespaceInputId")("position", _vm.id),
                name: _vm._f("namespaceInputName")("position", _vm.name),
                value: _vm.value.position || [],
                options: _vm.positions
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "cdf-yearly__option-input",
            class: {
              "cdf-yearly__option-input--disabled": _vm.mode !== "onThe"
            }
          },
          [
            _c("option-buttons", {
              attrs: {
                disabled: _vm.disabled || _vm.mode !== "onThe",
                id: _vm._f("namespaceInputId")("day", _vm.id),
                name: _vm._f("namespaceInputName")("day", _vm.name),
                value: _vm.value.day || [],
                options: _vm.days
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "cdf-yearly__option-seperator" }, [
          _vm._v(_vm._s(_vm._f("t")("of")))
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "cdf-yearly__option-input",
            class: {
              "cdf-yearly__option-input--disabled": _vm.mode !== "onThe"
            }
          },
          [
            _c("option-buttons", {
              attrs: {
                disabled: _vm.disabled || _vm.mode !== "onThe",
                id: _vm._f("namespaceInputId")("month", _vm.id),
                name: _vm._f("namespaceInputName")("month", _vm.name),
                value: _vm.value.month || [],
                options: _vm.months,
                fixedWidth: true,
                columns: 3,
                small: true
              }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
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


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/resources/assets/dist/recurring-dates": 0,
/******/ 			"resources/assets/dist/recurring-dates": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk"] = globalThis["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["resources/assets/dist/recurring-dates"], () => (__webpack_require__("./resources/assets/src/recurring-dates.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["resources/assets/dist/recurring-dates"], () => (__webpack_require__("./resources/assets/src/recurring-dates.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;