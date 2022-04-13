//Script for navbar effects on scroll
window.addEventListener("scroll", function() {
  const header = this.document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});


//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
      }
  }
}



//JS code for disabling right click on website
window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
}, false);

//JS code for Typed Script
(function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
})(this, function() {
  return function(t) {
      function e(n) {
          if (s[n]) return s[n].exports;
          var i = s[n] = {
              exports: {},
              id: n,
              loaded: !1
          };
          return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
      }
      var s = {};
      return e.m = t, e.c = s, e.p = "", e(0)
  }([function(t, e, s) {
      "use strict";

      function n(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var i = function() {
              function t(t, e) {
                  for (var s = 0; s < e.length; s++) {
                      var n = e[s];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                  }
              }
              return function(e, s, n) {
                  return s && t(e.prototype, s), n && t(e, n), e
              }
          }(),
          r = s(1),
          o = s(3),
          a = function() {
              function t(e, s) {
                  n(this, t), r.initializer.load(this, s, e), this.begin()
              }
              return i(t, [{
                  key: "toggle",
                  value: function() {
                      this.pause.status ? this.start() : this.stop()
                  }
              }, {
                  key: "stop",
                  value: function() {
                      this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                  }
              }, {
                  key: "start",
                  value: function() {
                      this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                  }
              }, {
                  key: "destroy",
                  value: function() {
                      this.reset(!1), this.options.onDestroy(this)
                  }
              }, {
                  key: "reset",
                  value: function() {
                      var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                      clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                  }
              }, {
                  key: "begin",
                  value: function() {
                      var t = this;
                      this.options.onBegin(this), this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                          t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                      }, this.startDelay)
                  }
              }, {
                  key: "typewrite",
                  value: function(t, e) {
                      var s = this;
                      this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                      var n = this.humanizer(this.typeSpeed),
                          i = 1;
                      return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void(this.timeout = setTimeout(function() {
                          e = o.htmlParser.typeHtmlChars(t, e, s);
                          var n = 0,
                              r = t.substr(e);
                          if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                              var a = 1;
                              r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0)
                          }
                          if ("`" === r.charAt(0)) {
                              for (;
                                  "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)););
                              var u = t.substring(0, e),
                                  l = t.substring(u.length + 1, e + i),
                                  c = t.substring(e + i + 1);
                              t = u + l + c, i--
                          }
                          s.timeout = setTimeout(function() {
                              s.toggleBlinking(!1), e >= t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                          }, n)
                      }, n))
                  }
              }, {
                  key: "keepTyping",
                  value: function(t, e, s) {
                      0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                      var n = t.substr(0, e);
                      this.replaceText(n), this.typewrite(t, e)
                  }
              }, {
                  key: "doneTyping",
                  value: function(t, e) {
                      var s = this;
                      this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                          s.backspace(t, e)
                      }, this.backDelay))
                  }
              }, {
                  key: "backspace",
                  value: function(t, e) {
                      var s = this;
                      if (this.pause.status === !0) return void this.setPauseStatus(t, e, !1);
                      if (this.fadeOut) return this.initFadeOut();
                      this.toggleBlinking(!1);
                      var n = this.humanizer(this.backSpeed);
                      this.timeout = setTimeout(function() {
                          e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                          var n = t.substr(0, e);
                          if (s.replaceText(n), s.smartBackspace) {
                              var i = s.strings[s.arrayPos + 1];
                              i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
                          }
                          e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                      }, n)
                  }
              }, {
                  key: "complete",
                  value: function() {
                      this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                  }
              }, {
                  key: "setPauseStatus",
                  value: function(t, e, s) {
                      this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e
                  }
              }, {
                  key: "toggleBlinking",
                  value: function(t) {
                      this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                  }
              }, {
                  key: "humanizer",
                  value: function(t) {
                      return Math.round(Math.random() * t / 2) + t
                  }
              }, {
                  key: "shuffleStringsIfNeeded",
                  value: function() {
                      this.shuffle && (this.sequence = this.sequence.sort(function() {
                          return Math.random() - .5
                      }))
                  }
              }, {
                  key: "initFadeOut",
                  value: function() {
                      var t = this;
                      return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                          t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                      }, this.fadeOutDelay)
                  }
              }, {
                  key: "replaceText",
                  value: function(t) {
                      this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                  }
              }, {
                  key: "bindFocusEvents",
                  value: function() {
                      var t = this;
                      this.isInput && (this.el.addEventListener("focus", function(e) {
                          t.stop()
                      }), this.el.addEventListener("blur", function(e) {
                          t.el.value && 0 !== t.el.value.length || t.start()
                      }))
                  }
              }, {
                  key: "insertCursor",
                  value: function() {
                      this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", !0), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                  }
              }]), t
          }();
      e["default"] = a, t.exports = e["default"]
  }, function(t, e, s) {
      "use strict";

      function n(t) {
          return t && t.__esModule ? t : {
              "default": t
          }
      }

      function i(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var r = Object.assign || function(t) {
              for (var e = 1; e < arguments.length; e++) {
                  var s = arguments[e];
                  for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
              }
              return t
          },
          o = function() {
              function t(t, e) {
                  for (var s = 0; s < e.length; s++) {
                      var n = e[s];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                  }
              }
              return function(e, s, n) {
                  return s && t(e.prototype, s), n && t(e, n), e
              }
          }(),
          a = s(2),
          u = n(a),
          l = function() {
              function t() {
                  i(this, t)
              }
              return o(t, [{
                  key: "load",
                  value: function(t, e, s) {
                      if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function(t) {
                              return t.trim()
                          }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                          t.strings = [], t.stringsElement.style.display = "none";
                          var n = Array.prototype.slice.apply(t.stringsElement.children),
                              i = n.length;
                          if (i)
                              for (var o = 0; o < i; o += 1) {
                                  var a = n[o];
                                  t.strings.push(a.innerHTML.trim())
                              }
                      }
                      t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                          status: !1,
                          typewrite: !0,
                          curString: "",
                          curStrPos: 0
                      }, t.typingComplete = !1;
                      for (var o in t.strings) t.sequence[o] = o;
                      t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                  }
              }, {
                  key: "getCurrentElContent",
                  value: function(t) {
                      var e = "";
                      return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                  }
              }, {
                  key: "appendAnimationCss",
                  value: function(t) {
                      var e = "data-typed-js-css";
                      if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                          var s = document.createElement("style");
                          s.type = "text/css", s.setAttribute(e, !0);
                          var n = "";
                          t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s))
                      }
                  }
              }]), t
          }();
      e["default"] = l;
      var c = new l;
      e.initializer = c
  }, function(t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var s = {
          strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: 1 / 0,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onBegin: function(t) {},
          onComplete: function(t) {},
          preStringTyped: function(t, e) {},
          onStringTyped: function(t, e) {},
          onLastStringBackspaced: function(t) {},
          onTypingPaused: function(t, e) {},
          onTypingResumed: function(t, e) {},
          onReset: function(t) {},
          onStop: function(t, e) {},
          onStart: function(t, e) {},
          onDestroy: function(t) {}
      };
      e["default"] = s, t.exports = e["default"]
  }, function(t, e) {
      "use strict";

      function s(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
      Object.defineProperty(e, "__esModule", {
          value: !0
      });
      var n = function() {
              function t(t, e) {
                  for (var s = 0; s < e.length; s++) {
                      var n = e[s];
                      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                  }
              }
              return function(e, s, n) {
                  return s && t(e.prototype, s), n && t(e, n), e
              }
          }(),
          i = function() {
              function t() {
                  s(this, t)
              }
              return n(t, [{
                  key: "typeHtmlChars",
                  value: function(t, e, s) {
                      if ("html" !== s.contentType) return e;
                      var n = t.substr(e).charAt(0);
                      if ("<" === n || "&" === n) {
                          var i = "";
                          for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)););
                          e++
                      }
                      return e
                  }
              }, {
                  key: "backSpaceHtmlChars",
                  value: function(t, e, s) {
                      if ("html" !== s.contentType) return e;
                      var n = t.substr(e).charAt(0);
                      if (">" === n || ";" === n) {
                          var i = "";
                          for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)););
                          e--
                      }
                      return e
                  }
              }]), t
          }();
      e["default"] = i;
      var r = new i;
      e.htmlParser = r
  }])
});

// Rotating Sphere Script
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TagCloud = t()
}(this, function() {
  "use strict";

  function i(e, t) {
      for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
  }

  function a() {
      return (a = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n, i = arguments[t];
              for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
          }
          return e
      }).apply(this, arguments)
  }

  function t(t, e) {
      var n, i = Object.keys(t);
      return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), i.push.apply(i, n)), i
  }

  function r(i) {
      for (var e = 1; e < arguments.length; e++) {
          var o = null != arguments[e] ? arguments[e] : {};
          e % 2 ? t(Object(o), !0).forEach(function(e) {
              var t, n;
              t = i, e = o[n = e], n in t ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : t[n] = e
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
          })
      }
      return i
  }
  var o = function() {
      function o() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document.body,
              t = 1 < arguments.length ? arguments[1] : void 0,
              n = 2 < arguments.length ? arguments[2] : void 0;
          ! function(e) {
              if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function")
          }(this);
          var i = this;
          if (!e || 1 !== e.nodeType) return new Error("Incorrect element type");
          i.$container = e, i.texts = t || [], i.config = r(r({}, o._defaultConfig), n || {}), i.radius = i.config.radius, i.depth = 2 * i.radius, i.size = 1.5 * i.radius, i.maxSpeed = o._getMaxSpeed(i.config.maxSpeed), i.initSpeed = o._getInitSpeed(i.config.initSpeed), i.direction = i.config.direction, i.keep = i.config.keep, i.paused = !1, i._createElment(), i._init(), o.list.push({
              el: i.$el,
              container: e,
              instance: i
          })
      }
      var e, t, n;
      return e = o, n = [{
          key: "_on",
          value: function(e, t, n, i) {
              e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent("on".concat(t), n) : e["on".concat(t)] = n
          }
      }], (t = [{
          key: "_createElment",
          value: function() {
              var n = this,
                  i = document.createElement("div");
              i.className = n.config.containerClass, n.config.useContainerInlineStyles && (i.style.position = "relative", i.style.width = "".concat(2 * n.radius, "px"), i.style.height = "".concat(2 * n.radius, "px")), n.items = [], n.texts.forEach(function(e, t) {
                  t = n._createTextItem(e, t);
                  i.appendChild(t.el), n.items.push(t)
              }), n.$container.appendChild(i), n.$el = i
          }
      }, {
          key: "_createTextItem",
          value: function(e) {
              var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                  i = this,
                  o = document.createElement("span");
              return o.className = i.config.itemClass, i.config.useItemInlineStyles && (o.style.willChange = "transform, opacity, filter", o.style.position = "absolute", o.style.top = "50%", o.style.left = "50%", o.style.zIndex = n + 1, o.style.filter = "alpha(opacity=0)", o.style.opacity = 0, t = "50% 50%", o.style.WebkitTransformOrigin = t, o.style.MozTransformOrigin = t, o.style.OTransformOrigin = t, o.style.transformOrigin = t, t = "translate3d(-50%, -50%, 0) scale(1)", o.style.WebkitTransform = t, o.style.MozTransform = t, o.style.OTransform = t, o.style.transform = t), o.innerText = e, r({
                  el: o
              }, i._computePosition(n))
          }
      }, {
          key: "_computePosition",
          value: function(e) {
              var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                  n = this.texts.length;
              t && (e = Math.floor(Math.random() * (n + 1)));
              e = Math.acos((2 * e + 1) / n - 1), n = Math.sqrt((n + 1) * Math.PI) * e;
              return {
                  x: this.size * Math.cos(n) * Math.sin(e) / 2,
                  y: this.size * Math.sin(n) * Math.sin(e) / 2,
                  z: this.size * Math.cos(e) / 2
              }
          }
      }, {
          key: "_requestInterval",
          value: function(n, i) {
              var o = window.requestAnimationFrame,
                  a = (new Date).getTime(),
                  r = {};
              return r.value = o(function e() {
                  r.value = o(e);
                  var t = (new Date).getTime();
                  i <= t - a && (n.call(), a = (new Date).getTime())
              }), r
          }
      }, {
          key: "_init",
          value: function() {
              var n = this;
              n.active = !1, n.mouseX0 = n.initSpeed * Math.sin(n.direction * (Math.PI / 180)), n.mouseY0 = -n.initSpeed * Math.cos(n.direction * (Math.PI / 180)), n.mouseX = n.mouseX0, n.mouseY = n.mouseY0, o._on(n.$el, "mouseover", function() {
                  n.active = !0
              }), o._on(n.$el, "mouseout", function() {
                  n.active = !1
              }), o._on(n.keep ? window : n.$el, "mousemove", function(e) {
                  e = e || window.event;
                  var t = n.$el.getBoundingClientRect();
                  n.mouseX = (e.clientX - (t.left + t.width / 2)) / 5, n.mouseY = (e.clientY - (t.top + t.height / 2)) / 5
              }), n._next(), n.interval = n._requestInterval(function() {
                  n._next.call(n)
              }, 10)
          }
      }, {
          key: "_next",
          value: function() {
              var e, t, n, a, r = this;
              r.paused || (r.keep || r.active || (r.mouseX = Math.abs(r.mouseX - r.mouseX0) < 1 ? r.mouseX0 : (r.mouseX + r.mouseX0) / 2, r.mouseY = Math.abs(r.mouseY - r.mouseY0) < 1 ? r.mouseY0 : (r.mouseY + r.mouseY0) / 2), e = -(Math.min(Math.max(-r.mouseY, -r.size), r.size) / r.radius) * r.maxSpeed, t = Math.min(Math.max(-r.mouseX, -r.size), r.size) / r.radius * r.maxSpeed, Math.abs(e) <= .01 && Math.abs(t) <= .01 || (n = Math.PI / 180, a = [Math.sin(e * n), Math.cos(e * n), Math.sin(t * n), Math.cos(t * n)], r.items.forEach(function(e) {
                  var t = e.x,
                      n = e.y * a[1] + e.z * -a[0],
                      i = e.y * a[0] + e.z * a[1],
                      o = t * a[3] + i * a[2],
                      n = n,
                      i = i * a[3] - t * a[2],
                      t = 2 * r.depth / (2 * r.depth + i);
                  e.x = o, e.y = n, e.z = i, e.scale = t.toFixed(3);
                  o = (1 < (o = t * t - .25) ? 1 : o).toFixed(3), n = e.el, i = (e.x - n.offsetWidth / 2).toFixed(2), t = (e.y - n.offsetHeight / 2).toFixed(2), e = "translate3d(".concat(i, "px, ").concat(t, "px, 0) scale(").concat(e.scale, ")");
                  n.style.WebkitTransform = e, n.style.MozTransform = e, n.style.OTransform = e, n.style.transform = e, n.style.filter = "alpha(opacity=".concat(100 * o, ")"), n.style.opacity = o
              })))
          }
      }, {
          key: "update",
          value: function(e) {
              var i = this;
              i.texts = e || [], i.texts.forEach(function(e, t) {
                  var n = i.items[t];
                  n || (a(n = i._createTextItem(e, t), i._computePosition(t, !0)), i.$el.appendChild(n.el), i.items.push(n)), n.el.innerText = e
              });
              var t = i.texts.length,
                  e = i.items.length;
              t < e && i.items.splice(t, e - t).forEach(function(e) {
                  i.$el.removeChild(e.el)
              })
          }
      }, {
          key: "destroy",
          value: function() {
              var t = this;
              t.interval = null;
              var e = o.list.findIndex(function(e) {
                  return e.el === t.$el
              }); - 1 !== e && o.list.splice(e, 1), t.$container && t.$el && t.$container.removeChild(t.$el)
          }
      }, {
          key: "pause",
          value: function() {
              this.paused = !0
          }
      }, {
          key: "resume",
          value: function() {
              this.paused = !1
          }
      }]) && i(e.prototype, t), n && i(e, n), o
  }();
  o.list = [], o._defaultConfig = {
      radius: 100,
      maxSpeed: "normal",
      initSpeed: "normal",
      direction: 135,
      keep: !0,
      useContainerInlineStyles: !0,
      useItemInlineStyles: !0,
      containerClass: "tagcloud",
      itemClass: "tagcloud--item"
  }, o._getMaxSpeed = function(e) {
      return {
          slow: .5,
          normal: 1,
          fast: 2
      } [e] || 1
  }, o._getInitSpeed = function(e) {
      return {
          slow: 16,
          normal: 32,
          fast: 80
      } [e] || 32
  };
  return function(e, t, n) {
      "string" == typeof e && (e = document.querySelectorAll(e)), e.forEach || (e = [e]);
      var i = [];
      return e.forEach(function(e) {
          e && i.push(new o(e, t, n))
      }), i.length <= 1 ? i[0] : i
  }
});