(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true})), module);
  };

  // node_modules/director/build/director.min.js
  var require_director_min = __commonJS((exports) => {
    (function(a) {
      function k(a2, b2, c2, d2) {
        var e2 = 0, f2 = 0, g2 = 0, c2 = (c2 || "(").toString(), d2 = (d2 || ")").toString(), h2;
        for (h2 = 0; h2 < a2.length; h2++) {
          var i2 = a2[h2];
          if (i2.indexOf(c2, e2) > i2.indexOf(d2, e2) || ~i2.indexOf(c2, e2) && !~i2.indexOf(d2, e2) || !~i2.indexOf(c2, e2) && ~i2.indexOf(d2, e2)) {
            f2 = i2.indexOf(c2, e2), g2 = i2.indexOf(d2, e2);
            if (~f2 && !~g2 || !~f2 && ~g2) {
              var j2 = a2.slice(0, (h2 || 1) + 1).join(b2);
              a2 = [j2].concat(a2.slice((h2 || 1) + 1));
            }
            e2 = (g2 > f2 ? g2 : f2) + 1, h2 = 0;
          } else
            e2 = 0;
        }
        return a2;
      }
      function j(a2, b2) {
        var c2, d2 = 0, e2 = "";
        while (c2 = a2.substr(d2).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/))
          d2 = c2.index + c2[0].length, c2[0] = c2[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)"), e2 += a2.substr(0, c2.index) + c2[0];
        a2 = e2 += a2.substr(d2);
        var f2 = a2.match(/:([^\/]+)/ig), g2, h2;
        if (f2) {
          h2 = f2.length;
          for (var j2 = 0; j2 < h2; j2++)
            g2 = f2[j2], g2.slice(0, 2) === "::" ? a2 = g2.slice(1) : a2 = a2.replace(g2, i(g2, b2));
        }
        return a2;
      }
      function i(a2, b2, c2) {
        c2 = a2;
        for (var d2 in b2)
          if (b2.hasOwnProperty(d2)) {
            c2 = b2[d2](a2);
            if (c2 !== a2)
              break;
          }
        return c2 === a2 ? "([._a-zA-Z0-9-%()]+)" : c2;
      }
      function h(a2, b2, c2) {
        if (!a2.length)
          return c2();
        var d2 = 0;
        (function e2() {
          b2(a2[d2], function(b3) {
            b3 || b3 === false ? (c2(b3), c2 = function() {
            }) : (d2 += 1, d2 === a2.length ? c2() : e2());
          });
        })();
      }
      function g(a2) {
        var b2 = [];
        for (var c2 = 0, d2 = a2.length; c2 < d2; c2++)
          b2 = b2.concat(a2[c2]);
        return b2;
      }
      function f(a2, b2) {
        for (var c2 = 0; c2 < a2.length; c2 += 1)
          if (b2(a2[c2], c2, a2) === false)
            return;
      }
      function c() {
        return b.hash === "" || b.hash === "#";
      }
      var b = document.location, d = {mode: "modern", hash: b.hash, history: false, check: function() {
        var a2 = b.hash;
        a2 != this.hash && (this.hash = a2, this.onHashChanged());
      }, fire: function() {
        this.mode === "modern" ? this.history === true ? window.onpopstate() : window.onhashchange() : this.onHashChanged();
      }, init: function(a2, b2) {
        function d2(a3) {
          for (var b3 = 0, c3 = e.listeners.length; b3 < c3; b3++)
            e.listeners[b3](a3);
        }
        var c2 = this;
        this.history = b2, e.listeners || (e.listeners = []);
        if ("onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7))
          this.history === true ? setTimeout(function() {
            window.onpopstate = d2;
          }, 500) : window.onhashchange = d2, this.mode = "modern";
        else {
          var f2 = document.createElement("iframe");
          f2.id = "state-frame", f2.style.display = "none", document.body.appendChild(f2), this.writeFrame(""), "onpropertychange" in document && "attachEvent" in document && document.attachEvent("onpropertychange", function() {
            event.propertyName === "location" && c2.check();
          }), window.setInterval(function() {
            c2.check();
          }, 50), this.onHashChanged = d2, this.mode = "legacy";
        }
        e.listeners.push(a2);
        return this.mode;
      }, destroy: function(a2) {
        if (!!e && !!e.listeners) {
          var b2 = e.listeners;
          for (var c2 = b2.length - 1; c2 >= 0; c2--)
            b2[c2] === a2 && b2.splice(c2, 1);
        }
      }, setHash: function(a2) {
        this.mode === "legacy" && this.writeFrame(a2), this.history === true ? (window.history.pushState({}, document.title, a2), this.fire()) : b.hash = a2[0] === "/" ? a2 : "/" + a2;
        return this;
      }, writeFrame: function(a2) {
        var b2 = document.getElementById("state-frame"), c2 = b2.contentDocument || b2.contentWindow.document;
        c2.open(), c2.write("<script>_hash = '" + a2 + "'; onload = parent.listener.syncHash;<script>"), c2.close();
      }, syncHash: function() {
        var a2 = this._hash;
        a2 != b.hash && (b.hash = a2);
        return this;
      }, onHashChanged: function() {
      }}, e = a.Router = function(a2) {
        if (this instanceof e)
          this.params = {}, this.routes = {}, this.methods = ["on", "once", "after", "before"], this.scope = [], this._methods = {}, this._insert = this.insert, this.insert = this.insertEx, this.historySupport = (window.history != null ? window.history.pushState : null) != null, this.configure(), this.mount(a2 || {});
        else
          return new e(a2);
      };
      e.prototype.init = function(a2) {
        var e2 = this, f2;
        this.handler = function(a3) {
          var b2 = a3 && a3.newURL || window.location.hash, c2 = e2.history === true ? e2.getPath() : b2.replace(/.*#/, "");
          e2.dispatch("on", c2.charAt(0) === "/" ? c2 : "/" + c2);
        }, d.init(this.handler, this.history), this.history === false ? c() && a2 ? b.hash = a2 : c() || e2.dispatch("on", "/" + b.hash.replace(/^(#\/|#|\/)/, "")) : (this.convert_hash_in_init ? (f2 = c() && a2 ? a2 : c() ? null : b.hash.replace(/^#/, ""), f2 && window.history.replaceState({}, document.title, f2)) : f2 = this.getPath(), (f2 || this.run_in_init === true) && this.handler());
        return this;
      }, e.prototype.explode = function() {
        var a2 = this.history === true ? this.getPath() : b.hash;
        a2.charAt(1) === "/" && (a2 = a2.slice(1));
        return a2.slice(1, a2.length).split("/");
      }, e.prototype.setRoute = function(a2, b2, c2) {
        var e2 = this.explode();
        typeof a2 == "number" && typeof b2 == "string" ? e2[a2] = b2 : typeof c2 == "string" ? e2.splice(a2, b2, s) : e2 = [a2], d.setHash(e2.join("/"));
        return e2;
      }, e.prototype.insertEx = function(a2, b2, c2, d2) {
        a2 === "once" && (a2 = "on", c2 = function(a3) {
          var b3 = false;
          return function() {
            if (!b3) {
              b3 = true;
              return a3.apply(this, arguments);
            }
          };
        }(c2));
        return this._insert(a2, b2, c2, d2);
      }, e.prototype.getRoute = function(a2) {
        var b2 = a2;
        if (typeof a2 == "number")
          b2 = this.explode()[a2];
        else if (typeof a2 == "string") {
          var c2 = this.explode();
          b2 = c2.indexOf(a2);
        } else
          b2 = this.explode();
        return b2;
      }, e.prototype.destroy = function() {
        d.destroy(this.handler);
        return this;
      }, e.prototype.getPath = function() {
        var a2 = window.location.pathname;
        a2.substr(0, 1) !== "/" && (a2 = "/" + a2);
        return a2;
      };
      var l = /\?.*/;
      e.prototype.configure = function(a2) {
        a2 = a2 || {};
        for (var b2 = 0; b2 < this.methods.length; b2++)
          this._methods[this.methods[b2]] = true;
        this.recurse = a2.recurse || this.recurse || false, this.async = a2.async || false, this.delimiter = a2.delimiter || "/", this.strict = typeof a2.strict == "undefined" ? true : a2.strict, this.notfound = a2.notfound, this.resource = a2.resource, this.history = a2.html5history && this.historySupport || false, this.run_in_init = this.history === true && a2.run_handler_in_init !== false, this.convert_hash_in_init = this.history === true && a2.convert_hash_in_init !== false, this.every = {after: a2.after || null, before: a2.before || null, on: a2.on || null};
        return this;
      }, e.prototype.param = function(a2, b2) {
        a2[0] !== ":" && (a2 = ":" + a2);
        var c2 = new RegExp(a2, "g");
        this.params[a2] = function(a3) {
          return a3.replace(c2, b2.source || b2);
        };
        return this;
      }, e.prototype.on = e.prototype.route = function(a2, b2, c2) {
        var d2 = this;
        !c2 && typeof b2 == "function" && (c2 = b2, b2 = a2, a2 = "on");
        if (Array.isArray(b2))
          return b2.forEach(function(b3) {
            d2.on(a2, b3, c2);
          });
        b2.source && (b2 = b2.source.replace(/\\\//ig, "/"));
        if (Array.isArray(a2))
          return a2.forEach(function(a3) {
            d2.on(a3.toLowerCase(), b2, c2);
          });
        b2 = b2.split(new RegExp(this.delimiter)), b2 = k(b2, this.delimiter), this.insert(a2, this.scope.concat(b2), c2);
      }, e.prototype.path = function(a2, b2) {
        var c2 = this, d2 = this.scope.length;
        a2.source && (a2 = a2.source.replace(/\\\//ig, "/")), a2 = a2.split(new RegExp(this.delimiter)), a2 = k(a2, this.delimiter), this.scope = this.scope.concat(a2), b2.call(this, this), this.scope.splice(d2, a2.length);
      }, e.prototype.dispatch = function(a2, b2, c2) {
        function h2() {
          d2.last = e2.after, d2.invoke(d2.runlist(e2), d2, c2);
        }
        var d2 = this, e2 = this.traverse(a2, b2.replace(l, ""), this.routes, ""), f2 = this._invoked, g2;
        this._invoked = true;
        if (!e2 || e2.length === 0) {
          this.last = [], typeof this.notfound == "function" && this.invoke([this.notfound], {method: a2, path: b2}, c2);
          return false;
        }
        this.recurse === "forward" && (e2 = e2.reverse()), g2 = this.every && this.every.after ? [this.every.after].concat(this.last) : [this.last];
        if (g2 && g2.length > 0 && f2) {
          this.async ? this.invoke(g2, this, h2) : (this.invoke(g2, this), h2());
          return true;
        }
        h2();
        return true;
      }, e.prototype.invoke = function(a2, b2, c2) {
        var d2 = this, e2;
        this.async ? (e2 = function(c3, d3) {
          if (Array.isArray(c3))
            return h(c3, e2, d3);
          typeof c3 == "function" && c3.apply(b2, (a2.captures || []).concat(d3));
        }, h(a2, e2, function() {
          c2 && c2.apply(b2, arguments);
        })) : (e2 = function(c3) {
          if (Array.isArray(c3))
            return f(c3, e2);
          if (typeof c3 == "function")
            return c3.apply(b2, a2.captures || []);
          typeof c3 == "string" && d2.resource && d2.resource[c3].apply(b2, a2.captures || []);
        }, f(a2, e2));
      }, e.prototype.traverse = function(a2, b2, c2, d2, e2) {
        function l2(a3) {
          function c3(a4) {
            for (var b4 = a4.length - 1; b4 >= 0; b4--)
              Array.isArray(a4[b4]) ? (c3(a4[b4]), a4[b4].length === 0 && a4.splice(b4, 1)) : e2(a4[b4]) || a4.splice(b4, 1);
          }
          function b3(a4) {
            var c4 = [];
            for (var d4 = 0; d4 < a4.length; d4++)
              c4[d4] = Array.isArray(a4[d4]) ? b3(a4[d4]) : a4[d4];
            return c4;
          }
          if (!e2)
            return a3;
          var d3 = b3(a3);
          d3.matched = a3.matched, d3.captures = a3.captures, d3.after = a3.after.filter(e2), c3(d3);
          return d3;
        }
        var f2 = [], g2, h2, i2, j2, k2;
        if (b2 === this.delimiter && c2[a2]) {
          j2 = [[c2.before, c2[a2]].filter(Boolean)], j2.after = [c2.after].filter(Boolean), j2.matched = true, j2.captures = [];
          return l2(j2);
        }
        for (var m in c2)
          if (c2.hasOwnProperty(m) && (!this._methods[m] || this._methods[m] && typeof c2[m] == "object" && !Array.isArray(c2[m]))) {
            g2 = h2 = d2 + this.delimiter + m, this.strict || (h2 += "[" + this.delimiter + "]?"), i2 = b2.match(new RegExp("^" + h2));
            if (!i2)
              continue;
            if (i2[0] && i2[0] == b2 && c2[m][a2]) {
              j2 = [[c2[m].before, c2[m][a2]].filter(Boolean)], j2.after = [c2[m].after].filter(Boolean), j2.matched = true, j2.captures = i2.slice(1), this.recurse && c2 === this.routes && (j2.push([c2.before, c2.on].filter(Boolean)), j2.after = j2.after.concat([c2.after].filter(Boolean)));
              return l2(j2);
            }
            j2 = this.traverse(a2, b2, c2[m], g2);
            if (j2.matched) {
              j2.length > 0 && (f2 = f2.concat(j2)), this.recurse && (f2.push([c2[m].before, c2[m].on].filter(Boolean)), j2.after = j2.after.concat([c2[m].after].filter(Boolean)), c2 === this.routes && (f2.push([c2.before, c2.on].filter(Boolean)), j2.after = j2.after.concat([c2.after].filter(Boolean)))), f2.matched = true, f2.captures = j2.captures, f2.after = j2.after;
              return l2(f2);
            }
          }
        return false;
      }, e.prototype.insert = function(a2, b2, c2, d2) {
        var e2, f2, g2, h2, i2;
        b2 = b2.filter(function(a3) {
          return a3 && a3.length > 0;
        }), d2 = d2 || this.routes, i2 = b2.shift(), /\:|\*/.test(i2) && !/\\d|\\w/.test(i2) && (i2 = j(i2, this.params));
        if (b2.length > 0) {
          d2[i2] = d2[i2] || {};
          return this.insert(a2, b2, c2, d2[i2]);
        }
        {
          if (!!i2 || !!b2.length || d2 !== this.routes) {
            f2 = typeof d2[i2], g2 = Array.isArray(d2[i2]);
            if (d2[i2] && !g2 && f2 == "object") {
              e2 = typeof d2[i2][a2];
              switch (e2) {
                case "function":
                  d2[i2][a2] = [d2[i2][a2], c2];
                  return;
                case "object":
                  d2[i2][a2].push(c2);
                  return;
                case "undefined":
                  d2[i2][a2] = c2;
                  return;
              }
            } else if (f2 == "undefined") {
              h2 = {}, h2[a2] = c2, d2[i2] = h2;
              return;
            }
            throw new Error("Invalid route context: " + f2);
          }
          e2 = typeof d2[a2];
          switch (e2) {
            case "function":
              d2[a2] = [d2[a2], c2];
              return;
            case "object":
              d2[a2].push(c2);
              return;
            case "undefined":
              d2[a2] = c2;
              return;
          }
        }
      }, e.prototype.extend = function(a2) {
        function e2(a3) {
          b2._methods[a3] = true, b2[a3] = function() {
            var c3 = arguments.length === 1 ? [a3, ""] : [a3];
            b2.on.apply(b2, c3.concat(Array.prototype.slice.call(arguments)));
          };
        }
        var b2 = this, c2 = a2.length, d2;
        for (d2 = 0; d2 < c2; d2++)
          e2(a2[d2]);
      }, e.prototype.runlist = function(a2) {
        var b2 = this.every && this.every.before ? [this.every.before].concat(g(a2)) : g(a2);
        this.every && this.every.on && b2.push(this.every.on), b2.captures = a2.captures, b2.source = a2.source;
        return b2;
      }, e.prototype.mount = function(a2, b2) {
        function d2(b3, d3) {
          var e3 = b3, f2 = b3.split(c2.delimiter), g2 = typeof a2[b3], h2 = f2[0] === "" || !c2._methods[f2[0]], i2 = h2 ? "on" : e3;
          h2 && (e3 = e3.slice((e3.match(new RegExp("^" + c2.delimiter)) || [""])[0].length), f2.shift());
          h2 && g2 === "object" && !Array.isArray(a2[b3]) ? (d3 = d3.concat(f2), c2.mount(a2[b3], d3)) : (h2 && (d3 = d3.concat(e3.split(c2.delimiter)), d3 = k(d3, c2.delimiter)), c2.insert(i2, d3, a2[b3]));
        }
        if (!!a2 && typeof a2 == "object" && !Array.isArray(a2)) {
          var c2 = this;
          b2 = b2 || [], Array.isArray(b2) || (b2 = b2.split(c2.delimiter));
          for (var e2 in a2)
            a2.hasOwnProperty(e2) && d2(e2, b2.slice(0));
        }
      };
    })(typeof exports == "object" ? exports : window);
  });

  // src/date.js
  Date.prototype.getWeek = function() {
    const date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  };

  // src/app.js
  var import_director2 = __toModule(require_director_min());

  // node_modules/lit-html/lib/directive.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var directives = new WeakMap();
  var isDirective = (o) => {
    return typeof o === "function" && directives.has(o);
  };

  // node_modules/lit-html/lib/dom.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0;
  var removeNodes = (container, start, end = null) => {
    while (start !== end) {
      const n = start.nextSibling;
      container.removeChild(start);
      start = n;
    }
  };

  // node_modules/lit-html/lib/part.js
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var noChange = {};
  var nothing = {};

  // node_modules/lit-html/lib/template.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var marker = `{{lit-${String(Math.random()).slice(2)}}}`;
  var nodeMarker = `<!--${marker}-->`;
  var markerRegex = new RegExp(`${marker}|${nodeMarker}`);
  var boundAttributeSuffix = "$lit$";
  var Template = class {
    constructor(result, element) {
      this.parts = [];
      this.element = element;
      const nodesToRemove = [];
      const stack = [];
      const walker = document.createTreeWalker(element.content, 133, null, false);
      let lastPartIndex = 0;
      let index = -1;
      let partIndex = 0;
      const {strings, values: {length}} = result;
      while (partIndex < length) {
        const node = walker.nextNode();
        if (node === null) {
          walker.currentNode = stack.pop();
          continue;
        }
        index++;
        if (node.nodeType === 1) {
          if (node.hasAttributes()) {
            const attributes = node.attributes;
            const {length: length2} = attributes;
            let count = 0;
            for (let i = 0; i < length2; i++) {
              if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                count++;
              }
            }
            while (count-- > 0) {
              const stringForPart = strings[partIndex];
              const name = lastAttributeNameRegex.exec(stringForPart)[2];
              const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              const attributeValue = node.getAttribute(attributeLookupName);
              node.removeAttribute(attributeLookupName);
              const statics = attributeValue.split(markerRegex);
              this.parts.push({type: "attribute", index, name, strings: statics});
              partIndex += statics.length - 1;
            }
          }
          if (node.tagName === "TEMPLATE") {
            stack.push(node);
            walker.currentNode = node.content;
          }
        } else if (node.nodeType === 3) {
          const data = node.data;
          if (data.indexOf(marker) >= 0) {
            const parent = node.parentNode;
            const strings2 = data.split(markerRegex);
            const lastIndex = strings2.length - 1;
            for (let i = 0; i < lastIndex; i++) {
              let insert;
              let s2 = strings2[i];
              if (s2 === "") {
                insert = createMarker();
              } else {
                const match = lastAttributeNameRegex.exec(s2);
                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                  s2 = s2.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                }
                insert = document.createTextNode(s2);
              }
              parent.insertBefore(insert, node);
              this.parts.push({type: "node", index: ++index});
            }
            if (strings2[lastIndex] === "") {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = strings2[lastIndex];
            }
            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8) {
          if (node.data === marker) {
            const parent = node.parentNode;
            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              parent.insertBefore(createMarker(), node);
            }
            lastPartIndex = index;
            this.parts.push({type: "node", index});
            if (node.nextSibling === null) {
              node.data = "";
            } else {
              nodesToRemove.push(node);
              index--;
            }
            partIndex++;
          } else {
            let i = -1;
            while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
              this.parts.push({type: "node", index: -1});
              partIndex++;
            }
          }
        }
      }
      for (const n of nodesToRemove) {
        n.parentNode.removeChild(n);
      }
    }
  };
  var endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
  };
  var isTemplatePartActive = (part) => part.index !== -1;
  var createMarker = () => document.createComment("");
  var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

  // node_modules/lit-html/lib/template-instance.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var TemplateInstance = class {
    constructor(template, processor, options) {
      this.__parts = [];
      this.template = template;
      this.processor = processor;
      this.options = options;
    }
    update(values) {
      let i = 0;
      for (const part of this.__parts) {
        if (part !== void 0) {
          part.setValue(values[i]);
        }
        i++;
      }
      for (const part of this.__parts) {
        if (part !== void 0) {
          part.commit();
        }
      }
    }
    _clone() {
      const fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      const stack = [];
      const parts2 = this.template.parts;
      const walker = document.createTreeWalker(fragment, 133, null, false);
      let partIndex = 0;
      let nodeIndex = 0;
      let part;
      let node = walker.nextNode();
      while (partIndex < parts2.length) {
        part = parts2[partIndex];
        if (!isTemplatePartActive(part)) {
          this.__parts.push(void 0);
          partIndex++;
          continue;
        }
        while (nodeIndex < part.index) {
          nodeIndex++;
          if (node.nodeName === "TEMPLATE") {
            stack.push(node);
            walker.currentNode = node.content;
          }
          if ((node = walker.nextNode()) === null) {
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        }
        if (part.type === "node") {
          const part2 = this.processor.handleTextExpression(this.options);
          part2.insertAfterNode(node.previousSibling);
          this.__parts.push(part2);
        } else {
          this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
        }
        partIndex++;
      }
      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }
      return fragment;
    }
  };

  // node_modules/lit-html/lib/template-result.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", {createHTML: (s2) => s2});
  var commentMarker = ` ${marker} `;
  var TemplateResult = class {
    constructor(strings, values, type, processor) {
      this.strings = strings;
      this.values = values;
      this.type = type;
      this.processor = processor;
    }
    getHTML() {
      const l = this.strings.length - 1;
      let html2 = "";
      let isCommentBinding = false;
      for (let i = 0; i < l; i++) {
        const s2 = this.strings[i];
        const commentOpen = s2.lastIndexOf("<!--");
        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s2.indexOf("-->", commentOpen + 1) === -1;
        const attributeMatch = lastAttributeNameRegex.exec(s2);
        if (attributeMatch === null) {
          html2 += s2 + (isCommentBinding ? commentMarker : nodeMarker);
        } else {
          html2 += s2.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
        }
      }
      html2 += this.strings[l];
      return html2;
    }
    getTemplateElement() {
      const template = document.createElement("template");
      let value = this.getHTML();
      if (policy !== void 0) {
        value = policy.createHTML(value);
      }
      template.innerHTML = value;
      return template;
    }
  };

  // node_modules/lit-html/lib/parts.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var isPrimitive = (value) => {
    return value === null || !(typeof value === "object" || typeof value === "function");
  };
  var isIterable = (value) => {
    return Array.isArray(value) || !!(value && value[Symbol.iterator]);
  };
  var AttributeCommitter = class {
    constructor(element, name, strings) {
      this.dirty = true;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.parts = [];
      for (let i = 0; i < strings.length - 1; i++) {
        this.parts[i] = this._createPart();
      }
    }
    _createPart() {
      return new AttributePart(this);
    }
    _getValue() {
      const strings = this.strings;
      const l = strings.length - 1;
      const parts2 = this.parts;
      if (l === 1 && strings[0] === "" && strings[1] === "") {
        const v = parts2[0].value;
        if (typeof v === "symbol") {
          return String(v);
        }
        if (typeof v === "string" || !isIterable(v)) {
          return v;
        }
      }
      let text = "";
      for (let i = 0; i < l; i++) {
        text += strings[i];
        const part = parts2[i];
        if (part !== void 0) {
          const v = part.value;
          if (isPrimitive(v) || !isIterable(v)) {
            text += typeof v === "string" ? v : String(v);
          } else {
            for (const t of v) {
              text += typeof t === "string" ? t : String(t);
            }
          }
        }
      }
      text += strings[l];
      return text;
    }
    commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  };
  var AttributePart = class {
    constructor(committer) {
      this.value = void 0;
      this.committer = committer;
    }
    setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value;
        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
    commit() {
      while (isDirective(this.value)) {
        const directive2 = this.value;
        this.value = noChange;
        directive2(this);
      }
      if (this.value === noChange) {
        return;
      }
      this.committer.commit();
    }
  };
  var NodePart = class {
    constructor(options) {
      this.value = void 0;
      this.__pendingValue = void 0;
      this.options = options;
    }
    appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
    insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    appendIntoPart(part) {
      part.__insert(this.startNode = createMarker());
      part.__insert(this.endNode = createMarker());
    }
    insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());
      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      if (this.startNode.parentNode === null) {
        return;
      }
      while (isDirective(this.__pendingValue)) {
        const directive2 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive2(this);
      }
      const value = this.__pendingValue;
      if (value === noChange) {
        return;
      }
      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        this.__commitText(value);
      }
    }
    __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
      if (this.value === value) {
        return;
      }
      this.clear();
      this.__insert(value);
      this.value = value;
    }
    __commitText(value) {
      const node = this.startNode.nextSibling;
      value = value == null ? "" : value;
      const valueAsString = typeof value === "string" ? value : String(value);
      if (node === this.endNode.previousSibling && node.nodeType === 3) {
        node.data = valueAsString;
      } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }
      this.value = value;
    }
    __commitTemplateResult(value) {
      const template = this.options.templateFactory(value);
      if (this.value instanceof TemplateInstance && this.value.template === template) {
        this.value.update(value.values);
      } else {
        const instance = new TemplateInstance(template, value.processor, this.options);
        const fragment = instance._clone();
        instance.update(value.values);
        this.__commitNode(fragment);
        this.value = instance;
      }
    }
    __commitIterable(value) {
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      }
      const itemParts = this.value;
      let partIndex = 0;
      let itemPart;
      for (const item of value) {
        itemPart = itemParts[partIndex];
        if (itemPart === void 0) {
          itemPart = new NodePart(this.options);
          itemParts.push(itemPart);
          if (partIndex === 0) {
            itemPart.appendIntoPart(this);
          } else {
            itemPart.insertAfterPart(itemParts[partIndex - 1]);
          }
        }
        itemPart.setValue(item);
        itemPart.commit();
        partIndex++;
      }
      if (partIndex < itemParts.length) {
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
    clear(startNode = this.startNode) {
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  };
  var BooleanAttributePart = class {
    constructor(element, name, strings) {
      this.value = void 0;
      this.__pendingValue = void 0;
      if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") {
        throw new Error("Boolean attributes can only contain a single expression");
      }
      this.element = element;
      this.name = name;
      this.strings = strings;
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      while (isDirective(this.__pendingValue)) {
        const directive2 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive2(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      const value = !!this.__pendingValue;
      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, "");
        } else {
          this.element.removeAttribute(this.name);
        }
        this.value = value;
      }
      this.__pendingValue = noChange;
    }
  };
  var PropertyCommitter = class extends AttributeCommitter {
    constructor(element, name, strings) {
      super(element, name, strings);
      this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
    }
    _createPart() {
      return new PropertyPart(this);
    }
    _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }
      return super._getValue();
    }
    commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element[this.name] = this._getValue();
      }
    }
  };
  var PropertyPart = class extends AttributePart {
  };
  var eventOptionsSupported = false;
  (() => {
    try {
      const options = {
        get capture() {
          eventOptionsSupported = true;
          return false;
        }
      };
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (_e) {
    }
  })();
  var EventPart = class {
    constructor(element, eventName, eventContext) {
      this.value = void 0;
      this.__pendingValue = void 0;
      this.element = element;
      this.eventName = eventName;
      this.eventContext = eventContext;
      this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
      this.__pendingValue = value;
    }
    commit() {
      while (isDirective(this.__pendingValue)) {
        const directive2 = this.__pendingValue;
        this.__pendingValue = noChange;
        directive2(this);
      }
      if (this.__pendingValue === noChange) {
        return;
      }
      const newListener = this.__pendingValue;
      const oldListener = this.value;
      const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }
      this.value = newListener;
      this.__pendingValue = noChange;
    }
    handleEvent(event2) {
      if (typeof this.value === "function") {
        this.value.call(this.eventContext || this.element, event2);
      } else {
        this.value.handleEvent(event2);
      }
    }
  };
  var getOptions = (o) => o && (eventOptionsSupported ? {capture: o.capture, passive: o.passive, once: o.once} : o.capture);

  // node_modules/lit-html/lib/default-template-processor.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var DefaultTemplateProcessor = class {
    handleAttributeExpressions(element, name, strings, options) {
      const prefix = name[0];
      if (prefix === ".") {
        const committer2 = new PropertyCommitter(element, name.slice(1), strings);
        return committer2.parts;
      }
      if (prefix === "@") {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }
      if (prefix === "?") {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }
      const committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
    }
    handleTextExpression(options) {
      return new NodePart(options);
    }
  };
  var defaultTemplateProcessor = new DefaultTemplateProcessor();

  // node_modules/lit-html/lib/template-factory.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === void 0) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== void 0) {
      return template;
    }
    const key = result.strings.join(marker);
    template = templateCache.keyString.get(key);
    if (template === void 0) {
      template = new Template(result, result.getTemplateElement());
      templateCache.keyString.set(key, template);
    }
    templateCache.stringsArray.set(result.strings, template);
    return template;
  }
  var templateCaches = new Map();

  // node_modules/lit-html/lib/render.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var parts = new WeakMap();
  var render = (result, container, options) => {
    let part = parts.get(container);
    if (part === void 0) {
      removeNodes(container, container.firstChild);
      parts.set(container, part = new NodePart(Object.assign({templateFactory}, options)));
      part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
  };

  // node_modules/lit-html/lit-html.js
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  if (typeof window !== "undefined") {
    (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.3.0");
  }
  var html = (strings, ...values) => new TemplateResult(strings, values, "html", defaultTemplateProcessor);

  // src/component.js
  var Component = class {
    constructor(name) {
      this.name = name;
    }
    render() {
    }
  };

  // src/task.js
  var Task = class {
    name;
    description;
    type;
    createdAt;
    constructor({name, description, type, createdAt, completions}) {
      this.name = name || "";
      this.description = description || "";
      this.type = type || "oneshot";
      this.createdAt = createdAt ? new Date(createdAt) : new Date();
      this.completions = completions ? completions.map((c) => new Date(c)) : [];
    }
    isActive() {
      if (this.type === "monthly") {
      }
    }
    isCompleted() {
      const lastCompletion = this.getLastCompletion();
      if (!lastCompletion)
        return false;
      const now = new Date();
      switch (this.type) {
        case "monthly":
          return lastCompletion.getMonth() === now.getMonth() && lastCompletion.getFullYear() === now.getFullYear();
        case "weekly":
          return lastCompletion.getFullYear() === now.getFullYear() && lastCompletion.getWeek() === now.getWeek();
        case "once":
          return true;
      }
    }
    getLastCompletion() {
      if (this.completions.length === 0)
        return null;
      return this.completions[this.completions.length - 1];
    }
  };
  var storedTaskData = localStorage.getItem("tasks");
  var taskData = storedTaskData ? JSON.parse(storedTaskData) : [];
  var tasks = taskData.map((t) => new Task(t));
  var saveTasks = () => {
    localStorage["tasks"] = JSON.stringify(tasks);
  };

  // src/home-page.js
  var HomePage = class extends Component {
    constructor() {
      super("home");
      this.completedTasks = 3;
    }
    render() {
      return html`
      <h2>You have completed ${this.completedTasks} tasks this week!</h2>
      <h2>Open tasks</h2>
      ${this.renderTasks()}
    `;
    }
    renderTasks() {
      return html`
      <div class="task-list">
        ${tasks.map((t) => html`
              <div class="task-card" @click="${() => this.viewTask(t)}">
                <div class="title">${t.name}</div>
                <div class="subtitle">${t.description}</div>
              </div>
            `)}
      </div>
    `;
    }
    viewTask(task) {
      window.location = "#/tasks/edit/" + task.name;
    }
  };

  // src/edit-task.js
  var EditTask = class extends Comment {
    constructor({task, isNew = false}) {
      super();
      console.log(task);
      this.task = task;
      this.isNew = isNew;
    }
    render() {
      return html`
      <h1>${this.isNew ? "Create" : "Edit"} task</h1>
      <form action="">
        <div class="form-group">
          <div>
            <label for="name">Name</label>
          </div>
          <input
            type="text"
            id="name"
            required
            value="${this.task.name}"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <div>
            <label for="description">Description</label>
          </div>
          <textarea id="description">${this.task.description}</textarea>
        </div>
        <div class="form-group">
          <div>
            <label for="type">Type</label>
          </div>
          <select name="type" id="type">
            <option value="once">Once</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit" @click=${(e) => this.save(e)}>Save</button>
          <button @click=${(e) => this.delete(e)}>Delete task</button>
        </div>
      </form>
    `;
    }
    save(e) {
      e.preventDefault();
      const form = document.forms[0];
      if (!form.reportValidity())
        return;
      this.task.name = form.elements["name"].value;
      this.task.description = form.elements["description"].value;
      this.task.type = form.elements["type"].value;
      if (this.isNew) {
        tasks.push(this.task);
      }
      saveTasks();
      router.setRoute("/");
    }
    delete(e) {
      if (!this.isNew) {
        const index = tasks.indexOf(this.task);
        if (index !== -1) {
          tasks.splice(index, 1);
          saveTasks();
        }
      }
      router.setRoute("/");
    }
  };

  // src/bottom-nav.js
  var import_director = __toModule(require_director_min());
  var BottomNav = class {
    constructor(selector, router2) {
      this.router = router2;
      this.elem = document.querySelector(selector);
      this.buttons = this.elem.querySelectorAll("a");
    }
    setActive(name) {
      console.log("Activating", name);
      this.buttons.forEach((b) => {
        if (b.dataset.name === name) {
          b.classList.add("active");
        } else {
          b.classList.remove("active");
        }
      });
    }
  };

  // src/archive.js
  var Archive = class extends Component {
    constructor() {
      super("archive");
    }
    render() {
      return html` <h2>Archive</h2> `;
    }
  };

  // src/settings.js
  var Settings = class extends Component {
    constructor() {
      super("settings");
    }
    render() {
      return html` <h2>Settings</h2> `;
    }
  };

  // src/app.js
  var content = document.querySelector("#content");
  var actionBar = new BottomNav("#bottom-nav", router);
  var showPage = (page) => {
    actionBar.setActive(page.name);
    render(page.render(), content);
  };
  var routes = {
    "/": () => {
      let homePage = new HomePage();
      showPage(homePage);
    },
    create: () => {
      const newTask = new Task({});
      const page = new EditTask({task: newTask, isNew: true});
      showPage(page);
    },
    "/tasks/edit/:taskId": (taskName) => {
      const task = tasks.find((t) => t.name === decodeURIComponent(taskName));
      if (!task) {
        throw new Error(`Couldn't find task '${taskName}'`);
      }
      const page = new EditTask({task, isNew: false});
      showPage(page);
    },
    "/archive": () => {
      const page = new Archive();
      showPage(page);
    },
    "/settings": () => {
      const page = new Settings();
      showPage(page);
    }
  };
  var router = import_director2.Router(routes);
  router.init();
})();
