/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/subscribe-now-scenario.js":
/*!******************************************!*\
  !*** ./editor/subscribe-now-scenario.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    useCopyToClipboard = _wp$compose.useCopyToClipboard;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    CustomSelectControl = _wp$components.CustomSelectControl,
    TextControl = _wp$components.TextControl,
    Button = _wp$components.Button,
    Icon = _wp$components.Icon;
var __ = wp.i18n.__;
var _JetFBHooks = JetFBHooks,
    withSelectFormFields = _JetFBHooks.withSelectFormFields,
    withSelectGateways = _JetFBHooks.withSelectGateways,
    withDispatchGateways = _JetFBHooks.withDispatchGateways;
var _JetFBComponents = JetFBComponents,
    GatewayFetchButton = _JetFBComponents.GatewayFetchButton,
    BaseHelp = _JetFBComponents.BaseHelp;
var RawHTML = wp.element.RawHTML;

function SubscribeNowScenario(_ref) {
  var gatewayGeneral = _ref.gatewayGeneral,
      formFields = _ref.formFields,
      getSpecificOrGlobal = _ref.getSpecificOrGlobal,
      loadingGateway = _ref.loadingGateway,
      currentScenario = _ref.currentScenario,
      setScenario = _ref.setScenario,
      scenarioSource = _ref.scenarioSource,
      noticeOperations = _ref.noticeOperations,
      scenarioLabel = _ref.scenarioLabel;
  var _loadingGateway$respo = loadingGateway.response.data,
      fetchedPlans = _loadingGateway$respo === void 0 ? [] : _loadingGateway$respo;

  var displayNotice = function displayNotice(status) {
    return function (response) {
      var _response$actions;

      noticeOperations.removeNotice(gatewayGeneral.gateway);
      noticeOperations.createNotice({
        status: status,
        content: response.message,
        id: gatewayGeneral.gateway,
        actions: (_response$actions = response === null || response === void 0 ? void 0 : response.actions) !== null && _response$actions !== void 0 ? _response$actions : []
      });
    };
  };

  var getPlan = function getPlan(planID) {
    return fetchedPlans.find(function (plan) {
      return plan.key === planID;
    });
  };

  var currentPlan = getPlan(currentScenario.plan_manual);
  var copyRef = useCopyToClipboard(currentScenario.plan_manual, console.log);
  return wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: scenarioLabel('fetch_button_label')
  }, wp.element.createElement("div", {
    className: "jet-user-fields-map__list"
  }, !loadingGateway.success && !loadingGateway.loading && wp.element.createElement("span", {
    className: 'description-controls'
  }, scenarioLabel('fetch_button_help')), wp.element.createElement(GatewayFetchButton, {
    initialLabel: scenarioLabel('fetch_button'),
    label: scenarioLabel('fetch_button_retry'),
    apiArgs: _objectSpread(_objectSpread({}, scenarioSource.fetch), {}, {
      data: {
        client_id: getSpecificOrGlobal('client_id'),
        secret: getSpecificOrGlobal('secret')
      }
    }),
    onFail: displayNotice('error')
  }))), loadingGateway.success && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: scenarioLabel('subscribe_plan_field'),
    key: 'form_fields_subscribe_plan_field',
    value: currentScenario.plan_field,
    labelPosition: "side",
    onChange: function onChange(plan_field) {
      return setScenario({
        plan_field: plan_field
      });
    },
    options: formFields
  }), !currentScenario.plan_field && wp.element.createElement(React.Fragment, null, wp.element.createElement(BaseControl, {
    label: scenarioLabel('subscribe_plan'),
    key: "scenario_plan_manual"
  }, wp.element.createElement(CustomSelectControl, {
    hideLabelFromVision: true,
    options: fetchedPlans,
    value: currentPlan,
    onChange: function onChange(_ref2) {
      var selectedItem = _ref2.selectedItem;

      if (selectedItem.disabled) {
        return;
      }

      setScenario({
        plan_manual: selectedItem.key
      });
    }
  })), currentPlan && currentPlan.key && wp.element.createElement(React.Fragment, null, wp.element.createElement(Button, {
    isLink: true,
    ref: copyRef,
    style: {
      marginBottom: currentPlan.description ? 'unset' : '1em'
    }
  }, scenarioLabel('copy_plan_button')), currentPlan.description && wp.element.createElement(BaseHelp, null, wp.element.createElement(RawHTML, null, currentPlan.description)))), wp.element.createElement(SelectControl, {
    label: scenarioLabel('quantity_field'),
    key: 'form_fields_quantity_field',
    value: currentScenario.quantity_field,
    labelPosition: "side",
    onChange: function onChange(quantity_field) {
      return setScenario({
        quantity_field: quantity_field
      });
    },
    options: formFields
  }), !currentScenario.quantity_field && wp.element.createElement(TextControl, {
    key: 'control_quantity_manual',
    label: scenarioLabel('quantity_manual'),
    value: currentScenario.quantity_manual,
    onChange: function onChange(quantity_manual) {
      return setScenario({
        quantity_manual: quantity_manual
      });
    }
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(function () {
  return _objectSpread(_objectSpread({}, withSelectFormFields([], __('Manual Input', 'jet-form-builder')).apply(void 0, arguments)), withSelectGateways.apply(void 0, arguments));
}), withDispatch(function () {
  return _objectSpread({}, withDispatchGateways.apply(void 0, arguments));
}))(SubscribeNowScenario));

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./editor/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribe_now_scenario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe-now-scenario */ "./editor/subscribe-now-scenario.js");

var _JetFBActions = JetFBActions,
    registerGateway = _JetFBActions.registerGateway;
var __ = wp.i18n.__;
var BaseControl = wp.components.BaseControl;
var scenario = 'SUBSCRIBE_NOW';
var gateway = 'paypal';
registerGateway(gateway, _subscribe_now_scenario__WEBPACK_IMPORTED_MODULE_0__["default"], scenario);
registerGateway(gateway, function (_ref) {
  var CURRENT_SCENARIO = _ref.CURRENT_SCENARIO,
      Placeholder = _ref.Placeholder;

  if (CURRENT_SCENARIO !== scenario) {
    return Placeholder;
  }

  return wp.element.createElement(BaseControl, {
    key: "payment_result_macros_base_control"
  }, wp.element.createElement("h4", null, __('Available macros list: ', 'jet-form-builder'), wp.element.createElement("br", null), __('%gateway_status% - subscription status returned from payment gateway;', 'jet-form-builder'), wp.element.createElement("br", null), __('%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder'), wp.element.createElement("br", null)));
}, 'macrosList');
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map