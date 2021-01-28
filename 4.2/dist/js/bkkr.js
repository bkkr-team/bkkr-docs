/*!
<<<<<<< HEAD:docs/static/4.2/dist/js/bkkr.js
	* BKKR v4.2.11 (https://github.com/bkkr-team/bkkr-framework)
	* Copyright 2015-2021 Imre Bekker
=======
	* BKKR v4.2.13 (https://github.com/bkkr-team/bkkr-framework)
	* Copyright 2015-2020 Imre Bekker
>>>>>>> de7161822a9f55a60aca51b70245b1a6123d02f0:packages/core/dist/js/bkkr.js
	* Licensed under MIT (https://github.com/tetkosimi/bkkr/blob/master/LICENSE)
	*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bkkr = {}, global.jQuery, global.Popper));
}(this, (function (exports, $, Popper) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Popper__default = /*#__PURE__*/_interopDefaultLegacy(Popper);

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

  /**
   * --------------------------------------------------------------------------
   * BKKR (v4.2.13): util.js
   * --------------------------------------------------------------------------
   */

  var Util = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */
    var TRANSITION_END = 'transitionend';
    var MAX_UID = 1000000;
    var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

    function toType(obj) {
      return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
    }

    function getSpecialTransitionEndEvent() {
      return {
        bindType: TRANSITION_END,
        delegateType: TRANSITION_END,
        handle: function handle(event) {
          if ($(event.target).is(this)) {
            return Reflect.apply(event.handleObj.handler, this, arguments);
          }

          return undefined;
        }
      };
    }

    function transitionEndEmulator(duration) {
      var _this = this;

      var called = false;
      $(this).one(Util.TRANSITION_END, function () {
        called = true;
      });
      setTimeout(function () {
        if (!called) {
          Util.triggerTransitionEnd(_this);
        }
      }, duration);
      return this;
    }

    function setTransitionEndSupport() {
      $.fn.emulateTransitionEnd = transitionEndEmulator;
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */


    var Util = {
      //
      // Inspectors
      // ---------------
      TRANSITION_END: 'bsTransitionEnd',
      IS_SAFARI: false,
      IS_IE: false,
      IS_OPERA: false,
      IS_CHROME: false,
      IS_BLINK: false,
      IS_FIREFOX: false,
      IS_EDGE: false,
      getUID: function getUID(prefix) {
        do {
          prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
        } while (document.getElementById(prefix));

        return prefix;
      },
      getSelectorFromElement: function getSelectorFromElement(element) {
        var selector = element.getAttribute('data-target');

        if (!selector || selector === '#') {
          var hrefAttr = element.getAttribute('href');
          selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
        }

        return selector && document.querySelector(selector) ? selector : null;
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
        if (!element) {
          return 0;
        } // Get transition-duration of the element


        var transitionDuration = $(element).css('transition-duration');
        var floatTransitionDuration = parseFloat(transitionDuration); // Return 0 if element or transition duration is not found

        if (!floatTransitionDuration) {
          return 0;
        } // If multiple durations are defined, take the first


        transitionDuration = transitionDuration.split(',')[0];
        return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER;
      },
      reflow: function reflow(element) {
        return element.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(element) {
        $(element).trigger(TRANSITION_END);
      },
      isElement: function isElement(obj) {
        return (obj[0] || obj).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
        for (var property in configTypes) {
          if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
            var expectedTypes = configTypes[property];
            var value = config[property];
            var valueType = value && Util.isElement(value) ? 'element' : toType(value);

            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
            }
          }
        }
      },
      //
      // Determine the mobile operating system.
      // This function returns one of 'iOS', 'Android', or 'Windows Phone'.
      //
      // @returns {String}
      //
      getMobileOperatingSystem: function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera; // Windows Phone must come first because its UA also contains "Android"

        if (/windows phone/i.test(userAgent)) {
          return 'windows-phone';
        }

        if (/android/i.test(userAgent)) {
          return 'android';
        } // iOS detection from: http://stackoverflow.com/a/9039885/177710


        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          return 'ios';
        }

        return false;
      },
      //
      // DEPRECATED
      //
      // Determine Safari browser.
      // This function returns true or false.
      //
      // @returns {Boolean}
      //
      isSafari: function isSafari() {
        // eslint-disable-next-line no-console
        console.warn('[DEPRECATE] bkkr.Util.isSafari() is deprecated, use bkkr.Util.IS_SAFARI instead.');
      },
      //
      // DEPRECATED
      //
      // Determine IE/EDGE browsers.
      // This function returns true or false.
      //
      // @returns {Boolean}
      //
      isIE: function isIE() {
        // eslint-disable-next-line no-console
        console.warn('[DEPRECATE] bkkr.Util.isIE() is deprecated, use bkkr.Util.IS_IE instead.');
      },
      //
      // Determine the browser.
      // This function returns one of 'opera', 'firefox', 'safari', 'ie', 'edge', 'chrome', or 'blink'.
      //
      // @returns {String}
      //
      getBrowser: function getBrowser() {
        // Opera 8.0+
        // eslint-disable-next-line no-undef
        if (Boolean(window.opr) && Boolean(opr.addons) || Boolean(window.opera) || navigator.userAgent.indexOf(' OPR/') >= 0) {
          this.IS_OPERA = true;
          return 'opera';
        } // Firefox 1.0+
        // eslint-disable-next-line no-undef


        if (typeof InstallTrigger !== 'undefined') {
          this.IS_FIREFOX = true;
          return 'firefox';
        } // Safari 3.0+ "[object HTMLElementConstructor]"


        if (/constructor/i.test(window.HTMLElement) || function (p) {
          return p.toString() === '[object SafariRemoteNotification]'; // eslint-disable-next-line no-undef
        }(!window.safari || typeof safari !== 'undefined' && safari.pushNotification)) {
          this.IS_SAFARI = true;
          return 'safari';
        } // Internet Explorer 6-11


        if (
        /* @cc_on!@ */
         Boolean(document.documentMode)) {
          this.IS_IE = true;
          return 'ie';
        } // Edge 20+


        if (!this.IS_IE && Boolean(window.StyleMedia)) {
          this.IS_EDGE = true;
          return 'edge';
        } // Chrome 1 - 68


        if (Boolean(window.chrome) && Boolean(window.chrome.webstore)) {
          this.IS_CHROME = true;
          return 'chrome';
        } // Blink engine detection


        if ((this.IS_CHROME || this.IS_OPERA) && Boolean(window.CSS)) {
          this.IS_BLINK = true;
          return 'blink';
        }

        return false;
      },
      //
      // Get platform details.
      //
      getPlatform: function getPlatform() {
        var _os = this.getMobileOperatingSystem();

        var _browser = this.getBrowser();

        if (_os) {
          $(document.body).addClass("platform-" + _os);
        }

        if (_browser) {
          $(document.body).addClass("platform-" + _browser);
        }
      },
      //
      // Checks that element is in the view
      // This function returns true or false.
      //
      // @returns {Boolean}
      //
      isElementInView: function isElementInView(element, fullInView, isSection) {
        var _h = 2;
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = element.offset().top;
        var elementBottom = elementTop + element.height();

        if (fullInView === true) {
          return pageTop < elementTop && pageBottom > elementBottom;
        }

        if (isSection === true) {
          return elementTop <= pageBottom - $(window).height() / _h && elementBottom >= pageTop;
        }

        return elementTop <= pageBottom && elementBottom >= pageTop;
      },
      //
      // Checks that the client supports CSS variables
      // This function returns true or false.
      //
      // @returns {Boolean}
      //
      isCssVarSupported: function isCssVarSupported() {
        var isSupported = window.CSS && window.CSS.supports && window.CSS.supports('--a', 0);
        return isSupported;
      },
      //
      // Helpers
      // ---------------
      // Scrolls to the specified element
      // Default 20% offset on top
      scrollTo: function scrollTo(element, fullyTop) {
        var _animationPeriod = 1500;
        var _animationShortPeriod = 750;
        var _divider = 5;
        window.requestAnimationFrame(function () {
          if (fullyTop) {
            $('html,body').stop().animate({
              scrollTop: $(element).offset().top
            }, _animationShortPeriod, 'swing');
          } else {
            $('html,body').stop().animate({
              scrollTop: $(element).offset().top - $(window).height() / _divider
            }, _animationPeriod, 'swing');
          }
        });
      },
      // Hide with aria-hidden
      hideThis: function hideThis(element, styleClass) {
        if (styleClass) {
          if ($(element).hasClass('show')) {
            $(element).removeClass('show');
          }

          $(element).attr('aria-hidden', 'false').addClass('hide');
        } else {
          $(element).attr('aria-hidden', 'true');
        }
      },
      // Show with aria-hidden
      showThis: function showThis(element, styleClass) {
        if (styleClass) {
          if ($(element).hasClass('hide')) {
            $(element).removeClass('hide');
          }

          $(element).attr('aria-hidden', 'false').addClass('show');
        } else {
          $(element).attr('aria-hidden', 'false');
        }
      },
      // Checks that element has a specified class
      hasClass: function hasClass(element, selector) {
        if (element !== null && element.className.replace(/[\t\n]/g, ' ').indexOf(selector) > -1) {
          return true;
        }

        return false;
      },
      // Add new class
      addClass: function addClass(element, otherclass) {
        element.className = element.className + " " + otherclass;
      },
      // Remove a class
      removeClass: function removeClass(element, removeclass) {
        element.className = element.className.replace(" " + removeclass, '');
      },
      // Toggle 2 classes
      toggleClass: function toggleClass(element, aClass, bClass) {
        if ($(element).hasClass(aClass)) {
          $(element).removeClass(aClass);

          if (bClass) {
            $(element).addClass(bClass);
          }
        } else {
          if (bClass) {
            $(element).removeClass(bClass);
          }

          $(element).addClass(aClass);
        }
      },
      // Gives a CSS custom property value applied at the element
      // element {Element}
      // varName {String} without '--'
      //
      // For example:
      // readCssVar(document.querySelector('.box'), 'color');
      getCssVar: function getCssVar(element, varName) {
        var elem = document.getElementsByTagName(element)[0];
        var elementStyles = getComputedStyle(elem);
        return elementStyles.getPropertyValue("--" + varName).trim();
      },
      // Writes a CSS custom property value at the element
      // element {Element}
      // varName {String} without '--'
      //
      // For example:
      // readCssVar(document.querySelector('.box'), 'color', 'white');
      setCssVar: function setCssVar(element, varName, value) {
        var elem = document.getElementsByTagName(element)[0];
        return elem.style.setProperty("--" + varName, value);
      },
      // The will-change CSS property hints to browsers how an element is expected to change.
      // Browsers may set up optimizations before an element is actually changed.
      // These kinds of optimizations can increase the responsiveness of a page by doing potentially
      // expensive work before they are actually required.
      //
      // https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
      willChange: function willChange(element, property) {
        // The optimizable properties that are going to change
        // in the animation's keyframes block
        $(element).css('willChange', property);
      },
      removeWillChange: function removeWillChange(element) {
        $(element).css('willChange', 'auto');
      },
      // Color handlers
      //
      // @Pimp Trizkit
      // https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
      shadeColor: function shadeColor(color, percent) {
        var _hexdivider = 16;
        var _frange = 16;
        var _H = 8;
        var _G = 0x00FF;
        var _B = 0x0000FF;
        var _RB = 0x1000000;
        var _GB = 0x10000;
        var _BB = 0x100;
        var f = parseInt(color.slice(1), _hexdivider);
        var t = percent < 0 ? 0 : _frange;
        var p = percent < 0 ? percent * -1 : percent;
        var R = f >> _hexdivider;
        var G = f >> _H & _G;
        var B = f & _B;
        return "#" + (_RB + (Math.round((t - R) * p) + R) * _GB + (Math.round((t - G) * p) + G) * _BB + (Math.round((t - B) * p) + B)).toString(_hexdivider).slice(1);
      },
      blendColors: function blendColors(c0, c1, p) {
        var _hexdivider = 16;
        var _H = 8;
        var _G = 0x00FF;
        var _B = 0x0000FF;
        var _RB = 0x1000000;
        var _GB = 0x10000;
        var _BB = 0x100;
        var f = parseInt(c0.slice(1), _hexdivider);
        var t = parseInt(c1.slice(1), _hexdivider);
        var R1 = f >> _hexdivider;
        var G1 = f >> _H & _G;
        var B1 = f & _B;
        var R2 = t >> _hexdivider;
        var G2 = t >> _H & _G;
        var B2 = t & _B;
        return "#" + (_RB + (Math.round((R2 - R1) * p) + R1) * _GB + (Math.round((G2 - G1) * p) + G1) * _BB + (Math.round((B2 - B1) * p) + B1)).toString(_hexdivider).slice(1);
      },
      shadeRGBColor: function shadeRGBColor(color, percent) {
        var _frange = 16;
        var _slice = 4;
        var f = color.split(',');
        var t = percent < 0 ? 0 : _frange;
        var p = percent < 0 ? percent * -1 : percent;
        var R = parseInt(f[0].slice(_slice), 10);
        var G = parseInt(f[1], 10);
        var B = parseInt(f[2], 10);
        return "rgb(" + (Math.round((t - R) * p) + R) + "," + (Math.round((t - G) * p) + G) + "," + (Math.round((t - B) * p) + B) + ")";
      },
      blendRGBColors: function blendRGBColors(c0, c1, p) {
        var _slice = 4;
        var f = c0.split(',');
        var t = c1.split(',');
        var R = parseInt(f[0].slice(_slice), 10);
        var G = parseInt(f[1], 10);
        var B = parseInt(f[2], 10);
        return "rgb(" + (Math.round((parseInt(t[0].slice(_slice), 10) - R) * p) + R) + "," + (Math.round((parseInt(t[1], 10) - G) * p) + G) + "," + (Math.round((parseInt(t[2], 10) - B) * p) + B) + ")";
      },
      shade: function shade(color, percent) {
        var c = 7;

        if (color.length > c) {
          return this.shadeRGBColor(color, percent);
        }

        return this.shadeColor(color, percent);
      },
      blend: function blend(color1, color2, percent) {
        var c = 7;

        if (color1.length > c) {
          return this.blendRGBColors(color1, color2, percent);
        }

        return this.blendColors(color1, color2, percent);
      },
      //
      // Cookies
      // ---------------
      // Set new cookie
      setCookie: function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        var MS = 1000;
        var SEC = 60;
        var MIN = 60;
        var H = 24;
        d.setTime(d.getTime() + exdays * H * MIN * SEC * MS);
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires;
      },
      // Checks that cookie
      getCookie: function getCookie(cname) {
        var c;
        var i;
        var name = cname + "=";
        var ca = document.cookie.split(';');

        for (i = 0; i < ca.length; i++) {
          c = ca[i];

          while (c.charAt(0) === ' ') {
            c = c.slice(1);
          }

          if (c.indexOf(name) === 0) {
            return decodeURIComponent(c.splice(name.length, c.length));
          }
        }

        return false;
      },
      findShadowRoot: function findShadowRoot(element) {
        if (!document.documentElement.attachShadow) {
          return null;
        } // Can find the shadow root otherwise it'll return the document


        if (typeof element.getRootNode === 'function') {
          var root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }

        if (element instanceof ShadowRoot) {
          return element;
        } // when we don't find a shadow root


        if (!element.parentNode) {
          return null;
        }

        return Util.findShadowRoot(element.parentNode);
      }
    };
    setTransitionEndSupport();
    return Util;
  }($__default);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.2.13';
  var DATA_KEY = 'bkkr.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $__default.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $__default(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $__default.Event(Event.CLOSE);
      $__default(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $__default(element).removeClass(ClassName.SHOW);

      if (!$__default(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $__default(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $__default(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default.fn[NAME] = Alert._jQueryInterface;
  $__default.fn[NAME].Constructor = Alert;

  $__default.fn[NAME].noConflict = function () {
    $__default.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.2.13';
  var DATA_KEY$1 = 'bkkr.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $__default.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $__default(this._element).closest(Selector$1.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $__default(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $__default(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
      }

      if (triggerChangeEvent) {
        $__default(this._element).toggleClass(ClassName$1.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $__default.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $__default(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$__default(button).hasClass(ClassName$1.BUTTON)) {
      button = $__default(button).closest(Selector$1.BUTTON);
    }

    Button._jQueryInterface.call($__default(button), 'toggle');
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $__default(event.target).closest(Selector$1.BUTTON)[0];
    $__default(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default.fn[NAME$1] = Button._jQueryInterface;
  $__default.fn[NAME$1].Constructor = Button;

  $__default.fn[NAME$1].noConflict = function () {
    $__default.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'collapse';
  var VERSION$2 = '4.2.13';
  var DATA_KEY$2 = 'bkkr.collapse';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $__default.fn[NAME$2];
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$2 = {
    SHOW: "show" + EVENT_KEY$2,
    SHOWN: "shown" + EVENT_KEY$2,
    HIDE: "hide" + EVENT_KEY$2,
    HIDDEN: "hidden" + EVENT_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$2 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$2.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($__default(this._element).hasClass(ClassName$2.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $__default(this._element).hasClass(ClassName$2.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$2.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$2.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $__default(actives).not(this._selector).data(DATA_KEY$2);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $__default.Event(Event$2.SHOW);
      $__default(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($__default(actives).not(this._selector), 'hide');

        if (!activesData) {
          $__default(actives).data(DATA_KEY$2, null);
        }
      }

      var dimension = this._getDimension();

      $__default(this._element).removeClass(ClassName$2.COLLAPSE).addClass(ClassName$2.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $__default(this._triggerArray).removeClass(ClassName$2.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $__default(_this._element).removeClass(ClassName$2.COLLAPSING).addClass(ClassName$2.COLLAPSE).addClass(ClassName$2.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $__default(_this._element).trigger(Event$2.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$__default(this._element).hasClass(ClassName$2.SHOW)) {
        return;
      }

      var startEvent = $__default.Event(Event$2.HIDE);
      $__default(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $__default(this._element).addClass(ClassName$2.COLLAPSING).removeClass(ClassName$2.COLLAPSE).removeClass(ClassName$2.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $__default([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$2.SHOW)) {
              $__default(trigger).addClass(ClassName$2.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $__default(_this2._element).removeClass(ClassName$2.COLLAPSING).addClass(ClassName$2.COLLAPSE).trigger(Event$2.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $__default(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $__default.removeData(this._element, DATA_KEY$2);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $__default(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $__default(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $__default(element).hasClass(ClassName$2.SHOW);

      if (triggerArray.length) {
        $__default(triggerArray).toggleClass(ClassName$2.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default(this);
        var data = $this.data(DATA_KEY$2);

        var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$2, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $__default(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $__default(selectors).each(function () {
      var $target = $__default(this);
      var data = $target.data(DATA_KEY$2);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default.fn[NAME$2] = Collapse._jQueryInterface;
  $__default.fn[NAME$2].Constructor = Collapse;

  $__default.fn[NAME$2].noConflict = function () {
    $__default.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'dropdown';
  var VERSION$3 = '4.2.13';
  var DATA_KEY$3 = 'bkkr.dropdown';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $__default.fn[NAME$3];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$3 = {
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    CLICK: "click" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$3 + DATA_API_KEY$3,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    // MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$3 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$1 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$1 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $__default(this._element).hasClass(ClassName$3.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $__default(this._menu).hasClass(ClassName$3.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default.Event(Event$3.SHOW, relatedTarget);
      $__default(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper__default === 'undefined') {
          throw new TypeError('Dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $__default(parent).addClass(ClassName$3.POSITION_STATIC);
        }

        this._popper = new Popper__default(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $__default(parent).closest(Selector$3.NAVBAR_NAV).length === 0) {
        $__default(document.body).children().on('mouseover', null, $__default.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $__default(this._menu).toggleClass(ClassName$3.SHOW);
      $__default(parent).toggleClass(ClassName$3.SHOW).trigger($__default.Event(Event$3.SHOWN, relatedTarget));
    };

    _proto.show = function show() {
      if (this._element.disabled || $__default(this._element).hasClass(ClassName$3.DISABLED) || $__default(this._menu).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $__default.Event(Event$3.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $__default(this._menu).toggleClass(ClassName$3.SHOW);
      $__default(parent).toggleClass(ClassName$3.SHOW).trigger($__default.Event(Event$3.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $__default(this._element).hasClass(ClassName$3.DISABLED) || !$__default(this._menu).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $__default.Event(Event$3.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $__default(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default(this._menu).toggleClass(ClassName$3.SHOW);
      $__default(parent).toggleClass(ClassName$3.SHOW).trigger($__default.Event(Event$3.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $__default.removeData(this._element, DATA_KEY$3);
      $__default(this._element).off(EVENT_KEY$3);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $__default(this._element).on(Event$3.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default(this._element).data(), config);
      Util.typeCheckConfig(NAME$3, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$3.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $__default(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$3.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($__default(this._menu).hasClass(ClassName$3.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$3.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$3.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($__default(this._menu).hasClass(ClassName$3.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $__default(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default(this).data(DATA_KEY$3);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $__default(this).data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $__default(toggles[i]).data(DATA_KEY$3);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$__default(parent).hasClass(ClassName$3.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $__default.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $__default.Event(Event$3.HIDE, relatedTarget);
        $__default(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $__default(document.body).children().off('mouseover', null, $__default.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $__default(dropdownMenu).removeClass(ClassName$3.SHOW);
        $__default(parent).removeClass(ClassName$3.SHOW).trigger($__default.Event(Event$3.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $__default(event.target).closest(Selector$3.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $__default(this).hasClass(ClassName$3.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $__default(parent).hasClass(ClassName$3.SHOW);

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$3.DATA_TOGGLE);
          $__default(toggle).trigger('focus');
        }

        $__default(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$3.VISIBLE_ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$1;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default(document).on(Event$3.KEYDOWN_DATA_API, Selector$3.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$3.KEYDOWN_DATA_API, Selector$3.MENU, Dropdown._dataApiKeydownHandler).on(Event$3.CLICK_DATA_API + " " + Event$3.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($__default(this), 'toggle');
  }).on(Event$3.CLICK_DATA_API, Selector$3.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default.fn[NAME$3] = Dropdown._jQueryInterface;
  $__default.fn[NAME$3].Constructor = Dropdown;

  $__default.fn[NAME$3].noConflict = function () {
    $__default.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'modal';
  var VERSION$4 = '4.2.13';
  var DATA_KEY$4 = 'bkkr.modal';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $__default.fn[NAME$4];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$2 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$2 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    FOCUSIN: "focusin" + EVENT_KEY$4,
    RESIZE: "resize" + EVENT_KEY$4,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$4,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$4,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$4,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$4 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$4.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($__default(this._element).hasClass(ClassName$4.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $__default.Event(Event$4.SHOW, {
        relatedTarget: relatedTarget
      });
      $__default(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default(this._element).on(Event$4.CLICK_DISMISS, Selector$4.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $__default(this._dialog).on(Event$4.MOUSEDOWN_DISMISS, function () {
        $__default(_this._element).one(Event$4.MOUSEUP_DISMISS, function (event) {
          if ($__default(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $__default.Event(Event$4.HIDE);
      $__default(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $__default(this._element).hasClass(ClassName$4.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $__default(document).off(Event$4.FOCUSIN);
      $__default(this._element).removeClass(ClassName$4.SHOW);
      $__default(this._element).off(Event$4.CLICK_DISMISS);
      $__default(this._dialog).off(Event$4.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $__default(htmlElement).off(EVENT_KEY$4);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $__default(document).off(Event$4.FOCUSIN);
      $__default.removeData(this._element, DATA_KEY$4);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$2, config);
      Util.typeCheckConfig(NAME$4, config, DefaultType$2);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $__default(this._element).hasClass(ClassName$4.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($__default(this._dialog).hasClass(ClassName$4.SCROLLABLE)) {
        this._dialog.querySelector(Selector$4.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $__default(this._element).addClass(ClassName$4.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $__default.Event(Event$4.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $__default(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $__default(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $__default(document).off(Event$4.FOCUSIN) // Guard against infinite focus loop
      .on(Event$4.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $__default(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $__default(this._element).on(Event$4.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $__default(this._element).off(Event$4.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $__default(window).on(Event$4.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $__default(window).off(Event$4.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $__default(document.body).removeClass(ClassName$4.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $__default(_this7._element).trigger(Event$4.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $__default(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $__default(this._element).hasClass(ClassName$4.FADE) ? ClassName$4.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$4.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $__default(this._backdrop).appendTo(document.body);
        $__default(this._element).on(Event$4.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $__default(this._backdrop).addClass(ClassName$4.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $__default(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $__default(this._backdrop).removeClass(ClassName$4.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($__default(this._element).hasClass(ClassName$4.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $__default(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$4.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$4.STICKY_CONTENT)); // Adjust fixed content padding

        $__default(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $__default(element).css('padding-right');
          $__default(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $__default(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $__default(element).css('margin-right');
          $__default(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $__default(document.body).css('padding-right');
        $__default(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $__default(document.body).addClass(ClassName$4.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$4.FIXED_CONTENT));
      $__default(fixedContent).each(function (index, element) {
        var padding = $__default(element).data('padding-right');
        $__default(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$4.STICKY_CONTENT));
      $__default(elements).each(function (index, element) {
        var margin = $__default(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $__default(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $__default(document.body).data('padding-right');
      $__default(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$4.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $__default(this).data(DATA_KEY$4);

        var _config = _extends({}, Default$2, $__default(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $__default(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default(document).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $__default(target).data(DATA_KEY$4) ? 'toggle' : _extends({}, $__default(target).data(), $__default(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $__default(target).one(Event$4.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$4.HIDDEN, function () {
        if ($__default(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($__default(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default.fn[NAME$4] = Modal._jQueryInterface;
  $__default.fn[NAME$4].Constructor = Modal;

  $__default.fn[NAME$4].noConflict = function () {
    $__default.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * BKKR (v4.2.13): navigator.js
   * --------------------------------------------------------------------------
   */

  var Navigator = function ($) {
    /**
     * --------------------------------------------------------------------------
     * Variables
     * --------------------------------------------------------------------------
     */
    var sidebarOpened = false;
    /**
     * --------------------------------------------------------------------------
     * Public Navigator Api
     * --------------------------------------------------------------------------
     */

    var Navigator = {
      // Checks that separators are exist, then put some listeners
      useSeparators: function useSeparators(element) {
        var separators = $(element);

        if (separators) {
          separators.click(function () {
            Util.scrollTo(this.parentElement.parentElement, false);
          });
        }
      },
      // Checks that JumpToTop button is exists, then put a unique listener
      useJumpToTop: function useJumpToTop(element) {
        var jumpToTopBtn = $(element);

        if (jumpToTopBtn) {
          $(window).scroll(function () {
            if ($(window).scrollTop() > $(window).height()) {
              jumpToTopBtn.addClass('show');
            } else if (jumpToTopBtn.hasClass('show')) {
              jumpToTopBtn.removeClass('show');
            }
          });
          jumpToTopBtn.click(function () {
            Util.scrollTo('body', true);
          });
        }
      },
      // Handle the cookie infos
      useCookieInfo: function useCookieInfo() {
        var _year = 365;
        var cookieAcceptedName = '__gac';
        var cookiesAccepted = Util.getCookie(cookieAcceptedName);

        if (cookiesAccepted !== 1) {
          $('#cookiesInfo').css({
            display: 'block'
          });
          $('#cookiesInfo #acceptCookies').on('click', function () {
            Util.setCookie(cookieAcceptedName, '1', _year);
            $('#cookiesInfo').slideUp('fast');
          });
        }
      },
      // Sidebar handlers
      toggle: function toggle(sidebar, navigationButton) {
        // Update if it was opened
        if (sidebarOpened === false) {
          this.open(sidebar, navigationButton);
        } else if (sidebarOpened === true) {
          this.close(sidebar, navigationButton);
        }
      },
      open: function open(sidebar, navigationButton) {
        window.requestAnimationFrame(function () {
          // Change styleclasses on navigation button
          if ($(navigationButton).hasClass('animate-reverse')) {
            $(navigationButton).removeClass('animate-reverse');
          }

          $(navigationButton).addClass('animate-in'); // Change styleclasses on sidebar

          if ($(sidebar).hasClass('animate-reverse')) {
            $(sidebar).removeClass('animate-reverse');
          }

          $(sidebar).addClass('animate-in');
          $('body').css('overflow', 'hidden'); // disable scrolling

          sidebarOpened = true;
        });
      },
      close: function close(sidebar, navigationButton) {
        window.requestAnimationFrame(function () {
          // Update if it was opened
          $(navigationButton).removeClass('animate-in').addClass('animate-reverse');
          $(sidebar).removeClass('animate-in').addClass('animate-reverse');
          $('body').css('overflow', 'auto'); // enables scrolling

          sidebarOpened = false;
        });
      },
      // Sidebar listeners
      sidebarListeners: function sidebarListeners() {
        var _this = this;

        var navigationButton = '#mainNavButton';
        var sidebar = '#mainSidebar';
        var breakpoint = 992;
        $(navigationButton).click(function () {
          _this.toggle(sidebar, navigationButton);
        });
        $('#mainSidebar + .navbar-overlay').click(function () {
          _this.toggle(sidebar, navigationButton);
        });

        if (window.innerWidth < breakpoint) {
          $('#mainSidebar a[href]:not([href^="#"])').click(function () {
            _this.toggle(sidebar, navigationButton);
          });
        }
      }
    };
    return Navigator;
  }($__default);

  /**
   * --------------------------------------------------------------------------
   * BKKR (v4.2.13): reflect.js
   * --------------------------------------------------------------------------
   */

  var Reflect$1 = function ($) {
    /**
     * --------------------------------------------------------------------------
     * Private Reflect Helpers
     * --------------------------------------------------------------------------
     */
    function doTextAnimation(elems) {
      var _timeout = 750;
      elems.each(function (i, elem) {
        var currentElement = $(elem);

        if (!currentElement.hasClass('js-text-animation-item-animate')) {
          var isElementInView = Util.isElementInView(currentElement, false, false);

          if (isElementInView) {
            currentElement.addClass('js-text-animation-item-animate');
            setTimeout(function () {
              currentElement.addClass('js-remove-changes');
            }, _timeout);
          }
        }
      });
    }
    /**
     * --------------------------------------------------------------------------
     * Public Reflect Api
     * --------------------------------------------------------------------------
     */


    var Reflect = {
      // Parallax handler
      useParallax: function useParallax(element, offset, enableOrientation) {
        var _h = 4;

        var _offset = offset || 0; // 161


        var _enableOrientation = enableOrientation || false;

        var parallaxElems = $(element);

        if (parallaxElems) {
          var yScroll = 0;
          var yTilt = -20;
          var xTilt = -20;
          $(window).scroll(function () {
            window.requestAnimationFrame(function () {
              parallaxElems.each(function (i, parallax) {
                var currentElement = $(parallax);
                var x = currentElement.closest('section').position();
                var isElementInView = Util.isElementInView(currentElement.closest('section'), false, false);
                yScroll = ($(window).scrollTop() - (x.top - _offset)) / _h;

                if (isElementInView) {
                  Util.willChange(currentElement, 'transform');
                  currentElement.css({
                    '-webkit-transform': "translate(" + xTilt + "px, " + (yScroll + yTilt) + "px) scale(1.2)",
                    transform: "translate(" + xTilt + "px, " + (yScroll + yTilt) + "px) scale(1.2)"
                  });
                  Util.removeWillChange(currentElement);
                }
              });
            });
          });

          if (_enableOrientation) {
            window.addEventListener('deviceorientation', function (eventData) {
              parallaxElems.each(function (i, parallax) {
                var yCorrection = 90;
                var yShift = 40;
                var xOffset = 40;
                var xShift = 20;
                var rotation = 180;
                var multiplier = 2;
                var currentElement = $(parallax);
                var isElementInView = Util.isElementInView(currentElement.closest('section'), false, false);
                Util.willChange(currentElement, 'transform');

                if (isElementInView) {
                  // Retrieving the front/back tilting of the device and moves the
                  // background in the opposite way of the tilt
                  yTilt = Math.round((-eventData.beta + yCorrection) * (yShift / rotation) - yShift); // Retrieve the side to side tilting of the device and move the
                  // background the opposite direction.

                  xTilt = Math.round(-eventData.gamma * (xShift / rotation) - xShift); // This 'if' statement checks if the phone is upside down and corrects
                  // the value that is returned.

                  if (xTilt > 0) {
                    xTilt = -xTilt;
                  } else if (xTilt < -xOffset) {
                    xTilt = -(xTilt + multiplier * xOffset);
                  }

                  if (window.innerHeight > window.innerWidth) {
                    currentElement.css({
                      '-webkit-transform': "translate(" + xTilt + "px, " + (yScroll + yTilt) + "px) scale(1.2)",
                      transform: "translate(" + xTilt + "px, " + (yScroll + yTilt) + "px) scale(1.2)"
                    });
                  } else {
                    currentElement.css({
                      '-webkit-transform': "translate(" + (yScroll + yTilt) + "px, " + xTilt + "px) scale(1.2)",
                      transform: "translate(" + (yScroll + yTilt) + "px, " + xTilt + "px) scale(1.2)"
                    });
                  }
                }

                Util.removeWillChange(currentElement);
              });
            }, false);
          }
        }
      },
      // Ripple activation effect for buttons
      rippleButton: function rippleButton(element) {
        var _h = 2;
        var d;
        var ink;
        var parent;
        var x;
        var y;
        $(element).click(function (e) {
          parent = $(this); // create .ink element if it doesn't exist

          if (parent.find('.ripple-effect').length === 0) {
            parent.prepend('<span class=\'ripple-effect\'></span>');
          }

          ink = parent.find('.ripple-effect'); // incase of quick double clicks stop the previous animation

          ink.removeClass('animate'); // set size of .ink

          if (!ink.height() && !ink.width()) {
            // use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({
              height: d,
              width: d
            });
          } // get click coordinates
          // logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;


          x = e.pageX - parent.offset().left - ink.width() / _h;
          y = e.pageY - parent.offset().top - ink.height() / _h; // set the position and add class .animate

          ink.css({
            top: y + "px",
            left: x + "px"
          }).addClass('animate');
        });
      },
      // Ripple activation effect for flat inputs
      rippleInput: function rippleInput(element) {
        var _timeoutPeriod = 200;
        var _multiplier = 100;
        var ink;
        var parent;
        var x;
        $(element).click(function (e) {
          parent = $(this);

          if (parent.find('.ripple').length === 0) {
            parent.find('.bar').prepend('<span class=\'ripple\'></span>');
          }

          ink = parent.find('.ripple'); // incase of quick double clicks stop the previous animation

          ink.removeClass('animate'); // get click coordinates

          x = e.pageX - parent.offset().left;
          x = x / parent.outerWidth() * _multiplier; // set the position

          ink.css({
            left: x + "%"
          }); // add class .animate

          setTimeout(function () {
            ink.addClass('animate');
          }, _timeoutPeriod);
        });
        $(element).focusout(function () {
          if (parent.find('.ripple').length !== 0) {
            ink = parent.find('.ripple'); // incase of quick double clicks stop the previous animation

            ink.removeClass('animate');
          }
        });
      },
      // Checks that neccessary sections are exist, then put a some function
      useSectionHighlight: function useSectionHighlight(elements) {
        var sections = $(elements);

        if (sections) {
          var d;
          $(window).scroll(function () {
            sections.each(function (i, elem) {
              var currentElement = $(elem);
              var isElementInView = Util.isElementInView(currentElement, false, true);

              if (isElementInView) {
                if (d > -1 && d !== i) {
                  $(sections[d]).removeClass('js-animation-item-animate');
                }

                d = i;

                if (!$(currentElement).hasClass('js-animation-item-animate')) {
                  $(currentElement).addClass('js-animation-item-animate');
                }
              }
            });
          });
        }
      },
      // Text block animation
      useTextAnimation: function useTextAnimation(elements) {
        var elems = $(elements);

        if (elems) {
          // Animate on first time
          doTextAnimation(elems); // Scope scroll

          $(window).scroll(function () {
            doTextAnimation(elems);
          });
        }
      },
      // Input max character counter
      useInputMaxCount: function useInputMaxCount(element) {
        $(element).bind('keyup keydown keypress', function () {
          var _$$val = $(this).val(),
              length = _$$val.length;

          var max = $(this).attr('maxlength');
          var elem = $(this).parent().parent().find('.input-counter-text').first();

          if (elem) {
            elem.text(length + "/" + max);
          }
        });
      }
    };
    return Reflect;
  }($__default);

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'scrollspy';
  var VERSION$5 = '4.2.13';
  var DATA_KEY$5 = 'bkkr.scrollspy';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $__default.fn[NAME$5];
  var Default$3 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$3 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$5 = {
    ACTIVATE: "activate" + EVENT_KEY$5,
    SCROLL: "scroll" + EVENT_KEY$5,
    LOAD_DATA_API: "load" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    DROPDOWN_ITEM: 'dropdown-item',
    // DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$5 = {
    DATA_SPY: '[data-spy="scroll"]',
    // ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$5.NAV_LINKS + "," + (this._config.target + " " + Selector$5.LIST_ITEMS + ",") + (this._config.target + " " + Selector$5.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $__default(this._scrollElement).on(Event$5.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // remove sketch reliance on jQuery position/offset
            return [$__default(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $__default.removeData(this._element, DATA_KEY$5);
      $__default(this._scrollElement).off(EVENT_KEY$5);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$3, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $__default(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$5);
          $__default(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $__default([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$5.DROPDOWN_ITEM)) {
        $link.closest(Selector$5.DROPDOWN).find(Selector$5.DROPDOWN_TOGGLE).addClass(ClassName$5.ACTIVE);
        $link.addClass(ClassName$5.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$5.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$5.NAV_LIST_GROUP).prev(Selector$5.NAV_LINKS + ", " + Selector$5.LIST_ITEMS).addClass(ClassName$5.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$5.NAV_LIST_GROUP).prev(Selector$5.NAV_ITEMS).children(Selector$5.NAV_LINKS).addClass(ClassName$5.ACTIVE);
      }

      $__default(this._scrollElement).trigger(Event$5.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$5.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$5.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default(this).data(DATA_KEY$5);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $__default(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default(window).on(Event$5.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$5.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $__default(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default.fn[NAME$5] = ScrollSpy._jQueryInterface;
  $__default.fn[NAME$5].Constructor = ScrollSpy;

  $__default.fn[NAME$5].noConflict = function () {
    $__default.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tab';
  var VERSION$6 = '4.2.13';
  var DATA_KEY$6 = 'bkkr.tab';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$6 = $__default.fn[NAME$6];
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    CLICK_DATA_API: "click" + EVENT_KEY$6 + DATA_API_KEY$6
  };
  var ClassName$6 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default(this._element).hasClass(ClassName$6.ACTIVE) || $__default(this._element).hasClass(ClassName$6.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default(this._element).closest(Selector$6.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$6.ACTIVE_UL : Selector$6.ACTIVE;
        previous = $__default.makeArray($__default(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default.Event(Event$6.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $__default.Event(Event$6.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $__default(previous).trigger(hideEvent);
      }

      $__default(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default.Event(Event$6.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default.Event(Event$6.SHOWN, {
          relatedTarget: previous
        });
        $__default(previous).trigger(hiddenEvent);
        $__default(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default.removeData(this._element, DATA_KEY$6);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default(container).find(Selector$6.ACTIVE_UL) : $__default(container).children(Selector$6.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default(active).hasClass(ClassName$6.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $__default(active).removeClass(ClassName$6.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default(active).removeClass(ClassName$6.ACTIVE);
        var dropdownChild = $__default(active.parentNode).find(Selector$6.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default(dropdownChild).removeClass(ClassName$6.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default(element).addClass(ClassName$6.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$6.FADE)) {
        element.classList.add(ClassName$6.SHOW);
      }

      if (element.parentNode && $__default(element.parentNode).hasClass(ClassName$6.DROPDOWN_MENU)) {
        var dropdownElement = $__default(element).closest(Selector$6.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$6.DROPDOWN_TOGGLE));
          $__default(dropdownToggleList).addClass(ClassName$6.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default(this);
        var data = $this.data(DATA_KEY$6);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default(document).on(Event$6.CLICK_DATA_API, Selector$6.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default.fn[NAME$6] = Tab._jQueryInterface;
  $__default.fn[NAME$6].Constructor = Tab;

  $__default.fn[NAME$6].noConflict = function () {
    $__default.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'toast';
  var VERSION$7 = '4.2.13';
  var DATA_KEY$7 = 'bkkr.toast';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $__default.fn[NAME$7];
  var Event$7 = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$7,
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7
  };
  var ClassName$7 = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$4 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$4 = {
    animation: false,
    autohide: true,
    delay: 5000
  };
  var Selector$7 = {
    DATA_DISMISS: '[data-dismiss="toast"]'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      $__default(this._element).trigger(Event$7.SHOW);

      if (this._config.animation) {
        this._element.classList.add(ClassName$7.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$7.SHOWING);

        _this._element.classList.add(ClassName$7.SHOW);

        $__default(_this._element).trigger(Event$7.SHOWN);

        if (_this._config.autohide) {
          _this.hide();
        }
      };

      this._element.classList.remove(ClassName$7.HIDE);

      this._element.classList.add(ClassName$7.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;

      if (!this._element.classList.contains(ClassName$7.SHOW)) {
        return;
      }

      $__default(this._element).trigger(Event$7.HIDE);

      if (withoutTimeout) {
        this._close();
      } else {
        this._timeout = setTimeout(function () {
          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$7.SHOW)) {
        this._element.classList.remove(ClassName$7.SHOW);
      }

      $__default(this._element).off(Event$7.CLICK_DISMISS);
      $__default.removeData(this._element, DATA_KEY$7);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default$4, $__default(this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$7, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      $__default(this._element).on(Event$7.CLICK_DISMISS, Selector$7.DATA_DISMISS, function () {
        return _this3.hide(true);
      });
    };

    _proto._close = function _close() {
      var _this4 = this;

      var complete = function complete() {
        _this4._element.classList.add(ClassName$7.HIDE);

        $__default(_this4._element).trigger(Event$7.HIDDEN);
      };

      this._element.classList.remove(ClassName$7.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $__default(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $__default(this);
        var data = $element.data(DATA_KEY$7);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default.fn[NAME$7] = Toast._jQueryInterface;
  $__default.fn[NAME$7].Constructor = Toast;

  $__default.fn[NAME$7].noConflict = function () {
    $__default.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Toast._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * BKKR (v4.2.13): sanitizer.js
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'tooltip';
  var VERSION$8 = '4.2.13';
  var DATA_KEY$8 = 'bkkr.tooltip';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var JQUERY_NO_CONFLICT$8 = $__default.fn[NAME$8];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$5 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$5 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$8 = {
    HIDE: "hide" + EVENT_KEY$8,
    HIDDEN: "hidden" + EVENT_KEY$8,
    SHOW: "show" + EVENT_KEY$8,
    SHOWN: "shown" + EVENT_KEY$8,
    INSERTED: "inserted" + EVENT_KEY$8,
    CLICK: "click" + EVENT_KEY$8,
    FOCUSIN: "focusin" + EVENT_KEY$8,
    FOCUSOUT: "focusout" + EVENT_KEY$8,
    MOUSEENTER: "mouseenter" + EVENT_KEY$8,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$8
  };
  var ClassName$8 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$8 = {
    // TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper__default === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $__default(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $__default(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($__default(this.getTipElement()).hasClass(ClassName$8.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $__default.removeData(this.element, this.constructor.DATA_KEY);
      $__default(this.element).off(this.constructor.EVENT_KEY);
      $__default(this.element).closest('.modal').off('hide.bkkr.modal');

      if (this.tip) {
        $__default(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($__default(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $__default.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $__default(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $__default.contains(shadowRoot === null ? this.element.ownerDocument.documentElement : shadowRoot, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $__default(tip).addClass(ClassName$8.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $__default(tip).data(this.constructor.DATA_KEY, this);

        if (!$__default.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $__default(tip).appendTo(container);
        }

        $__default(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper__default(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$8.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $__default(tip).addClass(ClassName$8.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $__default(document.body).children().on('mouseover', null, $__default.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $__default(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($__default(this.tip).hasClass(ClassName$8.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $__default(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $__default.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $__default(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $__default(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $__default(tip).removeClass(ClassName$8.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $__default(document.body).children().off('mouseover', null, $__default.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($__default(this.tip).hasClass(ClassName$8.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $__default(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $__default(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $__default(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($__default(tip.querySelectorAll(Selector$8.TOOLTIP_INNER)), this.getTitle());
      $__default(tip).removeClass(ClassName$8.FADE + " " + ClassName$8.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$__default(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($__default(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getOffset = function _getOffset() {
      var _this3 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $__default(this.config.container);
      }

      return $__default(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this4 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $__default(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
            return _this4.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
          $__default(_this4.element).on(eventIn, _this4.config.selector, function (event) {
            return _this4._enter(event);
          }).on(eventOut, _this4.config.selector, function (event) {
            return _this4._leave(event);
          });
        }
      });
      $__default(this.element).closest('.modal').on('hide.bkkr.modal', function () {
        if (_this4.element) {
          _this4.hide();
        }
      });

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($__default(context.getTipElement()).hasClass(ClassName$8.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $__default(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $__default(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $__default(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _extends({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$8, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $__default(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $__default(tip).removeClass(ClassName$8.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $__default(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$8;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$8;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$8;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$8;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default.fn[NAME$8] = Tooltip._jQueryInterface;
  $__default.fn[NAME$8].Constructor = Tooltip;

  $__default.fn[NAME$8].noConflict = function () {
    $__default.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return Tooltip._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * BKKR (v4.2.13): index.js
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('BKKR\'s JavaScript requires jQuery. jQuery must be included before BKKR\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('BKKR\'s JavaScript requires at least jQuery v1.9.1 but less than v4.2.13');
    }
  })($__default);

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Navigator = Navigator;
  exports.Reflect = Reflect$1;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bkkr.js.map
