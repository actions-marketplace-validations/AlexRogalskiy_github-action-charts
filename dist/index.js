module.exports = (() => {
  var __webpack_modules__ = {
    932: (module, __unused_webpack_exports, __nccwpck_require__) => {
      'use strict';
      const core = __nccwpck_require__(186);
      const webshot = __nccwpck_require__(166);
      const path = __nccwpck_require__(622);
      const config = __nccwpck_require__(570);
      async function snap(e, t, n) {
        try {
          await webshot(e, t, n, e => {
            if (e) throw e;
            console.log('screenshot captured');
          });
        } catch (e) {
          console.error(e);
        }
      }
      async function run() {
        const e = core.getInput('name') || config.name;
        const t = core.getInput('path') || config.path;
        const n = core.getInput('url');
        const r = core.getInput('width');
        const i = core.getInput('height');
        const o = { shotSize: { width: r, height: i }, windowSize: { width: r, height: i } };
        const s = path.join(t, `${e}.png`);
        const a = { ...config.options, ...o };
        const u = `https://styled-charts.vercel.app/api?url=${n}&width=${r}&height=${i}`;
        await snap(u, s, a);
        core.setOutput('image', 'image downloaded in root directory');
      }
      module.exports = run;
      if (require.main === require.cache[eval('__filename')]) {
        run().then(e => console.log('Done!'));
      }
    },
    351: function (e, t, n) {
      'use strict';
      var r =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var n in e) if (Object.hasOwnProperty.call(e, n)) t[n] = e[n];
          t['default'] = e;
          return t;
        };
      Object.defineProperty(t, '__esModule', { value: true });
      const i = r(n(87));
      const o = n(278);
      function issueCommand(e, t, n) {
        const r = new Command(e, t, n);
        process.stdout.write(r.toString() + i.EOL);
      }
      t.issueCommand = issueCommand;
      function issue(e, t = '') {
        issueCommand(e, {}, t);
      }
      t.issue = issue;
      const s = '::';
      class Command {
        constructor(e, t, n) {
          if (!e) {
            e = 'missing.command';
          }
          this.command = e;
          this.properties = t;
          this.message = n;
        }
        toString() {
          let e = s + this.command;
          if (this.properties && Object.keys(this.properties).length > 0) {
            e += ' ';
            let t = true;
            for (const n in this.properties) {
              if (this.properties.hasOwnProperty(n)) {
                const r = this.properties[n];
                if (r) {
                  if (t) {
                    t = false;
                  } else {
                    e += ',';
                  }
                  e += `${n}=${escapeProperty(r)}`;
                }
              }
            }
          }
          e += `${s}${escapeData(this.message)}`;
          return e;
        }
      }
      function escapeData(e) {
        return o.toCommandValue(e).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
      }
      function escapeProperty(e) {
        return o
          .toCommandValue(e)
          .replace(/%/g, '%25')
          .replace(/\r/g, '%0D')
          .replace(/\n/g, '%0A')
          .replace(/:/g, '%3A')
          .replace(/,/g, '%2C');
      }
    },
    186: function (e, t, n) {
      'use strict';
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          function adopt(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                });
          }
          return new (n || (n = Promise))(function (n, i) {
            function fulfilled(e) {
              try {
                step(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function rejected(e) {
              try {
                step(r['throw'](e));
              } catch (e) {
                i(e);
              }
            }
            function step(e) {
              e.done ? n(e.value) : adopt(e.value).then(fulfilled, rejected);
            }
            step((r = r.apply(e, t || [])).next());
          });
        };
      var i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var n in e) if (Object.hasOwnProperty.call(e, n)) t[n] = e[n];
          t['default'] = e;
          return t;
        };
      Object.defineProperty(t, '__esModule', { value: true });
      const o = n(351);
      const s = n(717);
      const a = n(278);
      const u = i(n(87));
      const c = i(n(622));
      var f;
      (function (e) {
        e[(e['Success'] = 0)] = 'Success';
        e[(e['Failure'] = 1)] = 'Failure';
      })((f = t.ExitCode || (t.ExitCode = {})));
      function exportVariable(e, t) {
        const n = a.toCommandValue(t);
        process.env[e] = n;
        const r = process.env['GITHUB_ENV'] || '';
        if (r) {
          const t = '_GitHubActionsFileCommandDelimeter_';
          const r = `${e}<<${t}${u.EOL}${n}${u.EOL}${t}`;
          s.issueCommand('ENV', r);
        } else {
          o.issueCommand('set-env', { name: e }, n);
        }
      }
      t.exportVariable = exportVariable;
      function setSecret(e) {
        o.issueCommand('add-mask', {}, e);
      }
      t.setSecret = setSecret;
      function addPath(e) {
        const t = process.env['GITHUB_PATH'] || '';
        if (t) {
          s.issueCommand('PATH', e);
        } else {
          o.issueCommand('add-path', {}, e);
        }
        process.env['PATH'] = `${e}${c.delimiter}${process.env['PATH']}`;
      }
      t.addPath = addPath;
      function getInput(e, t) {
        const n = process.env[`INPUT_${e.replace(/ /g, '_').toUpperCase()}`] || '';
        if (t && t.required && !n) {
          throw new Error(`Input required and not supplied: ${e}`);
        }
        return n.trim();
      }
      t.getInput = getInput;
      function setOutput(e, t) {
        o.issueCommand('set-output', { name: e }, t);
      }
      t.setOutput = setOutput;
      function setCommandEcho(e) {
        o.issue('echo', e ? 'on' : 'off');
      }
      t.setCommandEcho = setCommandEcho;
      function setFailed(e) {
        process.exitCode = f.Failure;
        error(e);
      }
      t.setFailed = setFailed;
      function isDebug() {
        return process.env['RUNNER_DEBUG'] === '1';
      }
      t.isDebug = isDebug;
      function debug(e) {
        o.issueCommand('debug', {}, e);
      }
      t.debug = debug;
      function error(e) {
        o.issue('error', e instanceof Error ? e.toString() : e);
      }
      t.error = error;
      function warning(e) {
        o.issue('warning', e instanceof Error ? e.toString() : e);
      }
      t.warning = warning;
      function info(e) {
        process.stdout.write(e + u.EOL);
      }
      t.info = info;
      function startGroup(e) {
        o.issue('group', e);
      }
      t.startGroup = startGroup;
      function endGroup() {
        o.issue('endgroup');
      }
      t.endGroup = endGroup;
      function group(e, t) {
        return r(this, void 0, void 0, function* () {
          startGroup(e);
          let n;
          try {
            n = yield t();
          } finally {
            endGroup();
          }
          return n;
        });
      }
      t.group = group;
      function saveState(e, t) {
        o.issueCommand('save-state', { name: e }, t);
      }
      t.saveState = saveState;
      function getState(e) {
        return process.env[`STATE_${e}`] || '';
      }
      t.getState = getState;
    },
    717: function (e, t, n) {
      'use strict';
      var r =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var n in e) if (Object.hasOwnProperty.call(e, n)) t[n] = e[n];
          t['default'] = e;
          return t;
        };
      Object.defineProperty(t, '__esModule', { value: true });
      const i = r(n(747));
      const o = r(n(87));
      const s = n(278);
      function issueCommand(e, t) {
        const n = process.env[`GITHUB_${e}`];
        if (!n) {
          throw new Error(`Unable to find environment variable for file command ${e}`);
        }
        if (!i.existsSync(n)) {
          throw new Error(`Missing file at path: ${n}`);
        }
        i.appendFileSync(n, `${s.toCommandValue(t)}${o.EOL}`, { encoding: 'utf8' });
      }
      t.issueCommand = issueCommand;
    },
    278: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: true });
      function toCommandValue(e) {
        if (e === null || e === undefined) {
          return '';
        } else if (typeof e === 'string' || e instanceof String) {
          return e;
        }
        return JSON.stringify(e);
      }
      t.toCommandValue = toCommandValue;
    },
    746: (e, t, n) => {
      var r = n(747);
      var i = n(622);
      var o = n(129);
      var s = n(666);
      var a = process.platform === 'win32';
      var u = s({ max: 50, maxAge: 30 * 1e3 });
      function readShebang(e) {
        var t;
        var n;
        var o;
        var s;
        if (e.indexOf(i.sep) !== -1) {
          e = i.resolve(e);
        }
        s = u.get(e);
        if (s) {
          return s;
        }
        t = new Buffer(150);
        try {
          n = r.openSync(e, 'r');
          r.readSync(n, t, 0, 150, 0);
        } catch (e) {}
        o = t
          .toString()
          .trim()
          .match(/\#\!\/usr\/bin\/env ([^\r\n]+)/i);
        s = o && o[1];
        u.set(e, s);
        return s;
      }
      function escapeArg(e, t) {
        e = '' + e;
        if (!t) {
          e = e.replace(/([\(\)%!\^<>&|;,"' ])/g, '^$1');
        } else {
          e = e.replace(/(\\*)"/gi, '$1$1\\"');
          e = e.replace(/(\\*)$/, '$1$1');
          e = '"' + e + '"';
        }
        return e;
      }
      function escapeCommand(e) {
        return /^[a-z0-9_-]+$/i.test(e) ? e : escapeArg(e, true);
      }
      function spawn(e, t, n) {
        var r;
        var i;
        t = t || [];
        n = n || {};
        if (!a) {
          return o.spawn(e, t, n);
        }
        i = readShebang(e);
        if (i) {
          t.unshift(e);
          e = i;
        }
        r = e !== 'echo';
        e = escapeCommand(e);
        t = t.map(function (e) {
          return escapeArg(e, r);
        });
        t = ['/s', '/c', '"' + e + (t.length ? ' ' + t.join(' ') : '') + '"'];
        e = process.env.comspec || 'cmd.exe';
        n.windowsVerbatimArguments = true;
        return o.spawn(e, t, n);
      }
      e.exports = spawn;
      e.exports.spawn = spawn;
    },
    878: function (e) {
      (function (t, n) {
        true ? (e.exports = n()) : 0;
      })(this, function () {
        'use strict';
        function objectOrFunction(e) {
          var t = typeof e;
          return e !== null && (t === 'object' || t === 'function');
        }
        function isFunction(e) {
          return typeof e === 'function';
        }
        var e = void 0;
        if (Array.isArray) {
          e = Array.isArray;
        } else {
          e = function (e) {
            return Object.prototype.toString.call(e) === '[object Array]';
          };
        }
        var t = e;
        var n = 0;
        var r = void 0;
        var i = void 0;
        var o = function asap(e, t) {
          l[n] = e;
          l[n + 1] = t;
          n += 2;
          if (n === 2) {
            if (i) {
              i(flush);
            } else {
              h();
            }
          }
        };
        function setScheduler(e) {
          i = e;
        }
        function setAsap(e) {
          o = e;
        }
        var s = typeof window !== 'undefined' ? window : undefined;
        var a = s || {};
        var u = a.MutationObserver || a.WebKitMutationObserver;
        var c =
          typeof self === 'undefined' &&
          typeof process !== 'undefined' &&
          {}.toString.call(process) === '[object process]';
        var f =
          typeof Uint8ClampedArray !== 'undefined' &&
          typeof importScripts !== 'undefined' &&
          typeof MessageChannel !== 'undefined';
        function useNextTick() {
          return function () {
            return process.nextTick(flush);
          };
        }
        function useVertxTimer() {
          if (typeof r !== 'undefined') {
            return function () {
              r(flush);
            };
          }
          return useSetTimeout();
        }
        function useMutationObserver() {
          var e = 0;
          var t = new u(flush);
          var n = document.createTextNode('');
          t.observe(n, { characterData: true });
          return function () {
            n.data = e = ++e % 2;
          };
        }
        function useMessageChannel() {
          var e = new MessageChannel();
          e.port1.onmessage = flush;
          return function () {
            return e.port2.postMessage(0);
          };
        }
        function useSetTimeout() {
          var e = setTimeout;
          return function () {
            return e(flush, 1);
          };
        }
        var l = new Array(1e3);
        function flush() {
          for (var e = 0; e < n; e += 2) {
            var t = l[e];
            var r = l[e + 1];
            t(r);
            l[e] = undefined;
            l[e + 1] = undefined;
          }
          n = 0;
        }
        function attemptVertx() {
          try {
            var e = Function('return this')().require('vertx');
            r = e.runOnLoop || e.runOnContext;
            return useVertxTimer();
          } catch (e) {
            return useSetTimeout();
          }
        }
        var h = void 0;
        if (c) {
          h = useNextTick();
        } else if (u) {
          h = useMutationObserver();
        } else if (f) {
          h = useMessageChannel();
        } else if (s === undefined && 'function' === 'function') {
          h = attemptVertx();
        } else {
          h = useSetTimeout();
        }
        function then(e, t) {
          var n = this;
          var r = new this.constructor(noop);
          if (r[p] === undefined) {
            makePromise(r);
          }
          var i = n._state;
          if (i) {
            var s = arguments[i - 1];
            o(function () {
              return invokeCallback(i, r, s, n._result);
            });
          } else {
            subscribe(n, r, e, t);
          }
          return r;
        }
        function resolve$1(e) {
          var t = this;
          if (e && typeof e === 'object' && e.constructor === t) {
            return e;
          }
          var n = new t(noop);
          resolve(n, e);
          return n;
        }
        var p = Math.random().toString(36).substring(2);
        function noop() {}
        var d = void 0;
        var m = 1;
        var _ = 2;
        function selfFulfillment() {
          return new TypeError('You cannot resolve a promise with itself');
        }
        function cannotReturnOwn() {
          return new TypeError('A promises callback cannot return that same promise.');
        }
        function tryThen(e, t, n, r) {
          try {
            e.call(t, n, r);
          } catch (e) {
            return e;
          }
        }
        function handleForeignThenable(e, t, n) {
          o(function (e) {
            var r = false;
            var i = tryThen(
              n,
              t,
              function (n) {
                if (r) {
                  return;
                }
                r = true;
                if (t !== n) {
                  resolve(e, n);
                } else {
                  fulfill(e, n);
                }
              },
              function (t) {
                if (r) {
                  return;
                }
                r = true;
                reject(e, t);
              },
              'Settle: ' + (e._label || ' unknown promise')
            );
            if (!r && i) {
              r = true;
              reject(e, i);
            }
          }, e);
        }
        function handleOwnThenable(e, t) {
          if (t._state === m) {
            fulfill(e, t._result);
          } else if (t._state === _) {
            reject(e, t._result);
          } else {
            subscribe(
              t,
              undefined,
              function (t) {
                return resolve(e, t);
              },
              function (t) {
                return reject(e, t);
              }
            );
          }
        }
        function handleMaybeThenable(e, t, n) {
          if (t.constructor === e.constructor && n === then && t.constructor.resolve === resolve$1) {
            handleOwnThenable(e, t);
          } else {
            if (n === undefined) {
              fulfill(e, t);
            } else if (isFunction(n)) {
              handleForeignThenable(e, t, n);
            } else {
              fulfill(e, t);
            }
          }
        }
        function resolve(e, t) {
          if (e === t) {
            reject(e, selfFulfillment());
          } else if (objectOrFunction(t)) {
            var n = void 0;
            try {
              n = t.then;
            } catch (t) {
              reject(e, t);
              return;
            }
            handleMaybeThenable(e, t, n);
          } else {
            fulfill(e, t);
          }
        }
        function publishRejection(e) {
          if (e._onerror) {
            e._onerror(e._result);
          }
          publish(e);
        }
        function fulfill(e, t) {
          if (e._state !== d) {
            return;
          }
          e._result = t;
          e._state = m;
          if (e._subscribers.length !== 0) {
            o(publish, e);
          }
        }
        function reject(e, t) {
          if (e._state !== d) {
            return;
          }
          e._state = _;
          e._result = t;
          o(publishRejection, e);
        }
        function subscribe(e, t, n, r) {
          var i = e._subscribers;
          var s = i.length;
          e._onerror = null;
          i[s] = t;
          i[s + m] = n;
          i[s + _] = r;
          if (s === 0 && e._state) {
            o(publish, e);
          }
        }
        function publish(e) {
          var t = e._subscribers;
          var n = e._state;
          if (t.length === 0) {
            return;
          }
          var r = void 0,
            i = void 0,
            o = e._result;
          for (var s = 0; s < t.length; s += 3) {
            r = t[s];
            i = t[s + n];
            if (r) {
              invokeCallback(n, r, i, o);
            } else {
              i(o);
            }
          }
          e._subscribers.length = 0;
        }
        function invokeCallback(e, t, n, r) {
          var i = isFunction(n),
            o = void 0,
            s = void 0,
            a = true;
          if (i) {
            try {
              o = n(r);
            } catch (e) {
              a = false;
              s = e;
            }
            if (t === o) {
              reject(t, cannotReturnOwn());
              return;
            }
          } else {
            o = r;
          }
          if (t._state !== d) {
          } else if (i && a) {
            resolve(t, o);
          } else if (a === false) {
            reject(t, s);
          } else if (e === m) {
            fulfill(t, o);
          } else if (e === _) {
            reject(t, o);
          }
        }
        function initializePromise(e, t) {
          try {
            t(
              function resolvePromise(t) {
                resolve(e, t);
              },
              function rejectPromise(t) {
                reject(e, t);
              }
            );
          } catch (t) {
            reject(e, t);
          }
        }
        var v = 0;
        function nextId() {
          return v++;
        }
        function makePromise(e) {
          e[p] = v++;
          e._state = undefined;
          e._result = undefined;
          e._subscribers = [];
        }
        function validationError() {
          return new Error('Array Methods must be provided an Array');
        }
        var y = (function () {
          function Enumerator(e, n) {
            this._instanceConstructor = e;
            this.promise = new e(noop);
            if (!this.promise[p]) {
              makePromise(this.promise);
            }
            if (t(n)) {
              this.length = n.length;
              this._remaining = n.length;
              this._result = new Array(this.length);
              if (this.length === 0) {
                fulfill(this.promise, this._result);
              } else {
                this.length = this.length || 0;
                this._enumerate(n);
                if (this._remaining === 0) {
                  fulfill(this.promise, this._result);
                }
              }
            } else {
              reject(this.promise, validationError());
            }
          }
          Enumerator.prototype._enumerate = function _enumerate(e) {
            for (var t = 0; this._state === d && t < e.length; t++) {
              this._eachEntry(e[t], t);
            }
          };
          Enumerator.prototype._eachEntry = function _eachEntry(e, t) {
            var n = this._instanceConstructor;
            var r = n.resolve;
            if (r === resolve$1) {
              var i = void 0;
              var o = void 0;
              var s = false;
              try {
                i = e.then;
              } catch (e) {
                s = true;
                o = e;
              }
              if (i === then && e._state !== d) {
                this._settledAt(e._state, t, e._result);
              } else if (typeof i !== 'function') {
                this._remaining--;
                this._result[t] = e;
              } else if (n === g) {
                var a = new n(noop);
                if (s) {
                  reject(a, o);
                } else {
                  handleMaybeThenable(a, e, i);
                }
                this._willSettleAt(a, t);
              } else {
                this._willSettleAt(
                  new n(function (t) {
                    return t(e);
                  }),
                  t
                );
              }
            } else {
              this._willSettleAt(r(e), t);
            }
          };
          Enumerator.prototype._settledAt = function _settledAt(e, t, n) {
            var r = this.promise;
            if (r._state === d) {
              this._remaining--;
              if (e === _) {
                reject(r, n);
              } else {
                this._result[t] = n;
              }
            }
            if (this._remaining === 0) {
              fulfill(r, this._result);
            }
          };
          Enumerator.prototype._willSettleAt = function _willSettleAt(e, t) {
            var n = this;
            subscribe(
              e,
              undefined,
              function (e) {
                return n._settledAt(m, t, e);
              },
              function (e) {
                return n._settledAt(_, t, e);
              }
            );
          };
          return Enumerator;
        })();
        function all(e) {
          return new y(this, e).promise;
        }
        function race(e) {
          var n = this;
          if (!t(e)) {
            return new n(function (e, t) {
              return t(new TypeError('You must pass an array to race.'));
            });
          } else {
            return new n(function (t, r) {
              var i = e.length;
              for (var o = 0; o < i; o++) {
                n.resolve(e[o]).then(t, r);
              }
            });
          }
        }
        function reject$1(e) {
          var t = this;
          var n = new t(noop);
          reject(n, e);
          return n;
        }
        function needsResolver() {
          throw new TypeError(
            'You must pass a resolver function as the first argument to the promise constructor'
          );
        }
        function needsNew() {
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        }
        var g = (function () {
          function Promise(e) {
            this[p] = nextId();
            this._result = this._state = undefined;
            this._subscribers = [];
            if (noop !== e) {
              typeof e !== 'function' && needsResolver();
              this instanceof Promise ? initializePromise(this, e) : needsNew();
            }
          }
          Promise.prototype.catch = function _catch(e) {
            return this.then(null, e);
          };
          Promise.prototype.finally = function _finally(e) {
            var t = this;
            var n = t.constructor;
            if (isFunction(e)) {
              return t.then(
                function (t) {
                  return n.resolve(e()).then(function () {
                    return t;
                  });
                },
                function (t) {
                  return n.resolve(e()).then(function () {
                    throw t;
                  });
                }
              );
            }
            return t.then(e, e);
          };
          return Promise;
        })();
        g.prototype.then = then;
        g.all = all;
        g.race = race;
        g.resolve = resolve$1;
        g.reject = reject$1;
        g._setScheduler = setScheduler;
        g._setAsap = setAsap;
        g._asap = o;
        function polyfill() {
          var e = void 0;
          if (typeof global !== 'undefined') {
            e = global;
          } else if (typeof self !== 'undefined') {
            e = self;
          } else {
            try {
              e = Function('return this')();
            } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
            }
          }
          var t = e.Promise;
          if (t) {
            var n = null;
            try {
              n = Object.prototype.toString.call(t.resolve());
            } catch (e) {}
            if (n === '[object Promise]' && !t.cast) {
              return;
            }
          }
          e.Promise = g;
        }
        g.polyfill = polyfill;
        g.Promise = g;
        return g;
      });
    },
    666: e => {
      (function () {
        if (true && e.exports) {
          e.exports = LRUCache;
        } else {
          this.LRUCache = LRUCache;
        }
        function hOP(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        function naiveLength() {
          return 1;
        }
        var t = false;
        function typeCheckKey(e) {
          if (!t && typeof e !== 'string' && typeof e !== 'number') {
            t = true;
            console.error(
              new TypeError('LRU: key must be a string or number. Almost certainly a bug! ' + typeof e).stack
            );
          }
        }
        function LRUCache(e) {
          if (!(this instanceof LRUCache)) return new LRUCache(e);
          if (typeof e === 'number') e = { max: e };
          if (!e) e = {};
          this._max = e.max;
          if (!this._max || !(typeof this._max === 'number') || this._max <= 0) this._max = Infinity;
          this._lengthCalculator = e.length || naiveLength;
          if (typeof this._lengthCalculator !== 'function') this._lengthCalculator = naiveLength;
          this._allowStale = e.stale || false;
          this._maxAge = e.maxAge || null;
          this._dispose = e.dispose;
          this.reset();
        }
        Object.defineProperty(LRUCache.prototype, 'max', {
          set: function (e) {
            if (!e || !(typeof e === 'number') || e <= 0) e = Infinity;
            this._max = e;
            if (this._length > this._max) trim(this);
          },
          get: function () {
            return this._max;
          },
          enumerable: true,
        });
        Object.defineProperty(LRUCache.prototype, 'lengthCalculator', {
          set: function (e) {
            if (typeof e !== 'function') {
              this._lengthCalculator = naiveLength;
              this._length = this._itemCount;
              for (var t in this._cache) {
                this._cache[t].length = 1;
              }
            } else {
              this._lengthCalculator = e;
              this._length = 0;
              for (var t in this._cache) {
                this._cache[t].length = this._lengthCalculator(this._cache[t].value);
                this._length += this._cache[t].length;
              }
            }
            if (this._length > this._max) trim(this);
          },
          get: function () {
            return this._lengthCalculator;
          },
          enumerable: true,
        });
        Object.defineProperty(LRUCache.prototype, 'length', {
          get: function () {
            return this._length;
          },
          enumerable: true,
        });
        Object.defineProperty(LRUCache.prototype, 'itemCount', {
          get: function () {
            return this._itemCount;
          },
          enumerable: true,
        });
        LRUCache.prototype.forEach = function (e, t) {
          t = t || this;
          var n = 0;
          var r = this._itemCount;
          for (var i = this._mru - 1; i >= 0 && n < r; i--)
            if (this._lruList[i]) {
              n++;
              var o = this._lruList[i];
              if (isStale(this, o)) {
                del(this, o);
                if (!this._allowStale) o = undefined;
              }
              if (o) {
                e.call(t, o.value, o.key, this);
              }
            }
        };
        LRUCache.prototype.keys = function () {
          var e = new Array(this._itemCount);
          var t = 0;
          for (var n = this._mru - 1; n >= 0 && t < this._itemCount; n--)
            if (this._lruList[n]) {
              var r = this._lruList[n];
              e[t++] = r.key;
            }
          return e;
        };
        LRUCache.prototype.values = function () {
          var e = new Array(this._itemCount);
          var t = 0;
          for (var n = this._mru - 1; n >= 0 && t < this._itemCount; n--)
            if (this._lruList[n]) {
              var r = this._lruList[n];
              e[t++] = r.value;
            }
          return e;
        };
        LRUCache.prototype.reset = function () {
          if (this._dispose && this._cache) {
            for (var e in this._cache) {
              this._dispose(e, this._cache[e].value);
            }
          }
          this._cache = Object.create(null);
          this._lruList = Object.create(null);
          this._mru = 0;
          this._lru = 0;
          this._length = 0;
          this._itemCount = 0;
        };
        LRUCache.prototype.dump = function () {
          var e = [];
          var t = 0;
          for (var n = this._mru - 1; n >= 0 && t < this._itemCount; n--)
            if (this._lruList[n]) {
              var r = this._lruList[n];
              if (!isStale(this, r)) {
                ++t;
                e.push({ k: r.key, v: r.value, e: r.now + (r.maxAge || 0) });
              }
            }
          return e;
        };
        LRUCache.prototype.dumpLru = function () {
          return this._lruList;
        };
        LRUCache.prototype.set = function (e, t, n) {
          n = n || this._maxAge;
          typeCheckKey(e);
          var r = n ? Date.now() : 0;
          var i = this._lengthCalculator(t);
          if (hOP(this._cache, e)) {
            if (i > this._max) {
              del(this, this._cache[e]);
              return false;
            }
            if (this._dispose) this._dispose(e, this._cache[e].value);
            this._cache[e].now = r;
            this._cache[e].maxAge = n;
            this._cache[e].value = t;
            this._length += i - this._cache[e].length;
            this._cache[e].length = i;
            this.get(e);
            if (this._length > this._max) trim(this);
            return true;
          }
          var o = new Entry(e, t, this._mru++, i, r, n);
          if (o.length > this._max) {
            if (this._dispose) this._dispose(e, t);
            return false;
          }
          this._length += o.length;
          this._lruList[o.lu] = this._cache[e] = o;
          this._itemCount++;
          if (this._length > this._max) trim(this);
          return true;
        };
        LRUCache.prototype.has = function (e) {
          typeCheckKey(e);
          if (!hOP(this._cache, e)) return false;
          var t = this._cache[e];
          if (isStale(this, t)) {
            return false;
          }
          return true;
        };
        LRUCache.prototype.get = function (e) {
          typeCheckKey(e);
          return get(this, e, true);
        };
        LRUCache.prototype.peek = function (e) {
          typeCheckKey(e);
          return get(this, e, false);
        };
        LRUCache.prototype.pop = function () {
          var e = this._lruList[this._lru];
          del(this, e);
          return e || null;
        };
        LRUCache.prototype.del = function (e) {
          typeCheckKey(e);
          del(this, this._cache[e]);
        };
        LRUCache.prototype.load = function (e) {
          this.reset();
          var t = Date.now();
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            typeCheckKey(r.k);
            var i = r.e || 0;
            if (i === 0) {
              this.set(r.k, r.v);
            } else {
              var o = i - t;
              if (o > 0) this.set(r.k, r.v, o);
            }
          }
        };
        function get(e, t, n) {
          typeCheckKey(t);
          var r = e._cache[t];
          if (r) {
            if (isStale(e, r)) {
              del(e, r);
              if (!e._allowStale) r = undefined;
            } else {
              if (n) use(e, r);
            }
            if (r) r = r.value;
          }
          return r;
        }
        function isStale(e, t) {
          if (!t || (!t.maxAge && !e._maxAge)) return false;
          var n = false;
          var r = Date.now() - t.now;
          if (t.maxAge) {
            n = r > t.maxAge;
          } else {
            n = e._maxAge && r > e._maxAge;
          }
          return n;
        }
        function use(e, t) {
          shiftLU(e, t);
          t.lu = e._mru++;
          e._lruList[t.lu] = t;
        }
        function trim(e) {
          while (e._lru < e._mru && e._length > e._max) del(e, e._lruList[e._lru]);
        }
        function shiftLU(e, t) {
          delete e._lruList[t.lu];
          while (e._lru < e._mru && !e._lruList[e._lru]) e._lru++;
        }
        function del(e, t) {
          if (t) {
            if (e._dispose) e._dispose(t.key, t.value);
            e._length -= t.length;
            e._itemCount--;
            delete e._cache[t.key];
            shiftLU(e, t);
          }
        }
        function Entry(e, t, n, r, i, o) {
          this.key = e;
          this.value = t;
          this.lu = n;
          this.length = r;
          this.now = i;
          if (o) this.maxAge = o;
        }
      })();
    },
    284: e => {
      'use strict';
      var t = process.platform === 'win32';
      var n = t ? /[^:]\\$/ : /.\/$/;
      e.exports = function () {
        var e;
        if (t) {
          e =
            process.env.TEMP || process.env.TMP || (process.env.SystemRoot || process.env.windir) + '\\temp';
        } else {
          e = process.env.TMPDIR || process.env.TMP || process.env.TEMP || '/tmp';
        }
        if (n.test(e)) {
          e = e.slice(0, -1);
        }
        return e;
      };
    },
    379: e => {
      e.exports.location = 'phantom\\bin\\phantomjs.exe';
      e.exports.platform = 'win32';
      e.exports.arch = 'x64';
    },
    403: (e, t, n) => {
      var r;
      var i = n(747);
      var o = n(622);
      var s = n(129).spawn;
      var a = n(878).Promise;
      try {
        var u = n(379);
        t.ET = o.resolve(__dirname, u.location);
        r = u.platform;
        r = u.arch;
      } catch (e) {
        t.ET = null;
      }
      r = '2.1.1';
      r = function (e) {
        return e
          .replace(/:[^:]*node_modules[^:]*/g, '')
          .replace(/(^|:)\.\/bin(\:|$)/g, ':')
          .replace(/^:+/, '')
          .replace(/:+$/, '');
      };
      if (t.ET) {
        try {
          var c = i.statSync(t.ET);
          var f = c.mode | parseInt('0555', 8);
          if (f !== c.mode) {
            i.chmodSync(t.ET, f);
          }
        } catch (e) {}
      }
      t.GL = function () {
        var e = Array.prototype.slice.call(arguments);
        return s(t.ET, e);
      };
      r = function () {
        var e = arguments;
        return new a(function (n, r) {
          try {
            var i = t.GL.apply(null, e);
            var o = true;
            var s = '';
            i.stdout.on('data', function () {
              if (!o) return;
              o = false;
              n(i);
            });
            i.stderr.on('data', function (e) {
              s = s + e.toString('utf8');
            });
            i.on('error', function (e) {
              if (!o) return;
              o = false;
              r(e);
            });
            i.on('exit', function (e) {
              if (!o) return;
              o = false;
              if (e == 0) {
                if (s.indexOf('Error:') == 0) {
                  r(new Error(s));
                } else {
                  n(i);
                }
              } else {
                r(new Error('Exit code: ' + e));
              }
            });
          } catch (e) {
            r(e);
          }
        });
      };
    },
    517: (e, t, n) => {
      const r = n(747);
      const i = n(622);
      const o = n(417);
      const s = n(284);
      const a = process.binding('constants');
      const u = s(),
        c = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
        f = /XXXXXX/,
        l = 3,
        h = (a.O_CREAT || a.fs.O_CREAT) | (a.O_EXCL || a.fs.O_EXCL) | (a.O_RDWR || a.fs.O_RDWR),
        p = a.EBADF || a.os.errno.EBADF,
        d = a.ENOENT || a.os.errno.ENOENT,
        m = 448,
        _ = 384,
        v = [];
      var y = false,
        g = false;
      function _randomChars(e) {
        var t = [],
          n = null;
        try {
          n = o.randomBytes(e);
        } catch (t) {
          n = o.pseudoRandomBytes(e);
        }
        for (var r = 0; r < e; r++) {
          t.push(c[n[r] % c.length]);
        }
        return t.join('');
      }
      function _isUndefined(e) {
        return typeof e === 'undefined';
      }
      function _parseArguments(e, t) {
        if (typeof e == 'function') {
          return [t || {}, e];
        }
        if (_isUndefined(e)) {
          return [{}, t];
        }
        return [e, t];
      }
      function _generateTmpName(e) {
        if (e.name) {
          return i.join(e.dir || u, e.name);
        }
        if (e.template) {
          return e.template.replace(f, _randomChars(6));
        }
        const t = [e.prefix || 'tmp-', process.pid, _randomChars(12), e.postfix || ''].join('');
        return i.join(e.dir || u, t);
      }
      function tmpName(e, t) {
        var n = _parseArguments(e, t),
          i = n[0],
          o = n[1],
          s = i.name ? 1 : i.tries || l;
        if (isNaN(s) || s < 0) return o(new Error('Invalid tries'));
        if (i.template && !i.template.match(f)) return o(new Error('Invalid template provided'));
        (function _getUniqueName() {
          const e = _generateTmpName(i);
          r.stat(e, function (t) {
            if (!t) {
              if (s-- > 0) return _getUniqueName();
              return o(new Error('Could not get a unique tmp filename, max tries reached ' + e));
            }
            o(null, e);
          });
        })();
      }
      function tmpNameSync(e) {
        var t = _parseArguments(e),
          n = t[0],
          i = n.name ? 1 : n.tries || l;
        if (isNaN(i) || i < 0) throw new Error('Invalid tries');
        if (n.template && !n.template.match(f)) throw new Error('Invalid template provided');
        do {
          const e = _generateTmpName(n);
          try {
            r.statSync(e);
          } catch (t) {
            return e;
          }
        } while (i-- > 0);
        throw new Error('Could not get a unique tmp filename, max tries reached');
      }
      function file(e, t) {
        var n = _parseArguments(e, t),
          i = n[0],
          o = n[1];
        i.postfix = _isUndefined(i.postfix) ? '.tmp' : i.postfix;
        tmpName(i, function _tmpNameCreated(e, t) {
          if (e) return o(e);
          r.open(t, h, i.mode || _, function _fileCreated(e, n) {
            if (e) return o(e);
            if (i.discardDescriptor) {
              return r.close(n, function _discardCallback(e) {
                if (e) {
                  try {
                    r.unlinkSync(t);
                  } catch (t) {
                    if (!isENOENT(t)) {
                      e = t;
                    }
                  }
                  return o(e);
                }
                o(null, t, undefined, _prepareTmpFileRemoveCallback(t, -1, i));
              });
            }
            if (i.detachDescriptor) {
              return o(null, t, n, _prepareTmpFileRemoveCallback(t, -1, i));
            }
            o(null, t, n, _prepareTmpFileRemoveCallback(t, n, i));
          });
        });
      }
      function fileSync(e) {
        var t = _parseArguments(e),
          n = t[0];
        n.postfix = n.postfix || '.tmp';
        const i = n.discardDescriptor || n.detachDescriptor;
        const o = tmpNameSync(n);
        var s = r.openSync(o, h, n.mode || _);
        if (n.discardDescriptor) {
          r.closeSync(s);
          s = undefined;
        }
        return { name: o, fd: s, removeCallback: _prepareTmpFileRemoveCallback(o, i ? -1 : s, n) };
      }
      function _rmdirRecursiveSync(e) {
        const t = [e];
        do {
          var n = t.pop(),
            o = false,
            s = r.readdirSync(n);
          for (var a = 0, u = s.length; a < u; a++) {
            var c = i.join(n, s[a]),
              f = r.lstatSync(c);
            if (f.isDirectory()) {
              if (!o) {
                o = true;
                t.push(n);
              }
              t.push(c);
            } else {
              r.unlinkSync(c);
            }
          }
          if (!o) {
            r.rmdirSync(n);
          }
        } while (t.length !== 0);
      }
      function dir(e, t) {
        var n = _parseArguments(e, t),
          i = n[0],
          o = n[1];
        tmpName(i, function _tmpNameCreated(e, t) {
          if (e) return o(e);
          r.mkdir(t, i.mode || m, function _dirCreated(e) {
            if (e) return o(e);
            o(null, t, _prepareTmpDirRemoveCallback(t, i));
          });
        });
      }
      function dirSync(e) {
        var t = _parseArguments(e),
          n = t[0];
        const i = tmpNameSync(n);
        r.mkdirSync(i, n.mode || m);
        return { name: i, removeCallback: _prepareTmpDirRemoveCallback(i, n) };
      }
      function _prepareTmpFileRemoveCallback(e, t, n) {
        const i = _prepareRemoveCallback(
          function _removeCallback(e) {
            try {
              if (0 <= e[0]) {
                r.closeSync(e[0]);
              }
            } catch (e) {
              if (!isEBADF(e) && !isENOENT(e)) {
                throw e;
              }
            }
            try {
              r.unlinkSync(e[1]);
            } catch (e) {
              if (!isENOENT(e)) {
                throw e;
              }
            }
          },
          [t, e]
        );
        if (!n.keep) {
          v.unshift(i);
        }
        return i;
      }
      function _prepareTmpDirRemoveCallback(e, t) {
        const n = t.unsafeCleanup ? _rmdirRecursiveSync : r.rmdirSync.bind(r);
        const i = _prepareRemoveCallback(n, e);
        if (!t.keep) {
          v.unshift(i);
        }
        return i;
      }
      function _prepareRemoveCallback(e, t) {
        var n = false;
        return function _cleanupCallback(r) {
          if (!n) {
            const r = v.indexOf(_cleanupCallback);
            if (r >= 0) {
              v.splice(r, 1);
            }
            n = true;
            e(t);
          }
          if (r) r(null);
        };
      }
      function _garbageCollector() {
        if (g && !y) {
          return;
        }
        while (v.length) {
          try {
            v[0].call(null);
          } catch (e) {}
        }
      }
      function isEBADF(e) {
        return isExpectedError(e, -p, 'EBADF');
      }
      function isENOENT(e) {
        return isExpectedError(e, -d, 'ENOENT');
      }
      function isExpectedError(e, t, n) {
        return e.code == t || e.code == n;
      }
      function setGracefulCleanup() {
        y = true;
      }
      const S = process.versions.node.split('.').map(function (e) {
        return parseInt(e, 10);
      });
      if (S[0] === 0 && (S[1] < 9 || (S[1] === 9 && S[2] < 5))) {
        process.addListener('uncaughtException', function _uncaughtExceptionThrown(e) {
          g = true;
          _garbageCollector();
          throw e;
        });
      }
      process.addListener('exit', function _exit(e) {
        if (e) g = true;
        _garbageCollector();
      });
      e.exports.tmpdir = u;
      e.exports.dir = dir;
      e.exports.dirSync = dirSync;
      e.exports.file = file;
      e.exports.fileSync = fileSync;
      e.exports.tmpName = tmpName;
      e.exports.tmpNameSync = tmpNameSync;
      e.exports.setGracefulCleanup = setGracefulCleanup;
    },
    853: (e, t) => {
      t.phantom = {
        windowSize: { width: 1024, height: 768 },
        shotSize: { width: 'window', height: 'window' },
        shotOffset: { left: 0, right: 0, top: 0, bottom: 0 },
        defaultWhiteBackground: false,
        customCSS: '',
        takeShotOnCallback: false,
        streamType: 'png',
        siteType: 'url',
        renderDelay: 0,
        quality: 75,
        errorIfStatusIsNot200: false,
        errorIfJSException: false,
        cookies: [],
        captureSelector: false,
        zoomFactor: 1,
      };
      t.phantomPage = ['paperSize', 'customHeaders', 'settings'];
      t.phantomCallback = [
        'onAlert',
        'onCallback',
        'onClosing',
        'onConfirm',
        'onConsoleMessage',
        'onError',
        'onFilePicker',
        'onInitialized',
        'onLoadFinished',
        'onLoadStarted',
        'onNavigationRequested',
        'onPageCreated',
        'onPrompt',
        'onResourceRequested',
        'onResourceReceived',
        'onResourceTimeout',
        'onResourceError',
        'onUrlChanged',
      ];
      t.caller = { phantomPath: 'phantomjs', phantomConfig: '', timeout: 0 };
      t.mergeObjects = function mergeObjects(e, t) {
        var n = {};
        Object.keys(e).forEach(function (r) {
          n[r] = toString.call(e[r]) === '[object Object]' ? mergeObjects(e[r], t[r] || {}) : e[r] || t[r];
        });
        Object.keys(t).forEach(function (e) {
          if (n.hasOwnProperty(e)) return;
          n[e] = t[e];
        });
        return n;
      };
      t.filterObject = function filterObject(e, t) {
        var n = {};
        t.forEach(function (t) {
          if (e[t]) n[t] = e[t];
        });
        return n;
      };
    },
    166: (e, t, n) => {
      var r = n(835),
        i = n(854),
        o = n(517),
        s = n(413),
        a = n(746),
        u = n(853),
        c = n.ab + 'webshot.phantom.js',
        f = ['jpeg', 'jpg', 'png', 'pdf'],
        l = ['url', 'html', 'file'];
      e.exports = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        var t = null;
        var s = {};
        var a = null;
        var c = e.shift();
        var h = e[e.length - 1];
        if (Object.prototype.toString.call(h) == '[object Function]') {
          t = e.pop();
        }
        switch (e.length) {
          case 1:
            var p = e.pop();
            if (toString.call(p) === '[object String]') {
              a = p;
            } else {
              s = p;
            }
            break;
          case 2:
            a = e.shift();
            s = e.shift();
            break;
        }
        var d = !a;
        var m = u.mergeObjects(u.caller, u.phantom);
        try {
          m.phantomPath = n(403).ET;
        } catch (e) {}
        s = processOptions(s, m);
        var _ = a ? a.substring(~(~a.lastIndexOf('.') || ~a.length) + 1) : s.streamType;
        if (!~f.indexOf(_.toLowerCase())) {
          return t(new Error('All files must end with one of the following extensions: ' + f.join(', ')));
        }
        if (!~l.indexOf(s.siteType)) {
          var v = new Error(e.siteType + ' is not a valid sitetype.');
          if (t) return t(v);
          throw v;
        }
        if (s.siteType === 'url') {
          c = r.parse(c).protocol ? c : 'http://' + c;
        }
        var y = function () {
          if (s.siteType === 'html') {
            var e = o.fileSync();
            var n = e.name;
            i.writeSync(e.fd, c, null, 'utf-8');
            i.close(e.fd);
            s.siteType = 'file';
            c = n;
            return y();
          } else {
            return spawnPhantom(c, a, d, s, t);
          }
        };
        if (a) {
          i.exists(a, function (e) {
            if (e) {
              i.unlink(a, function (e) {
                if (e) return t(e);
                return y();
              });
            } else {
              return y();
            }
          });
        } else {
          return y();
        }
      };
      function processOptions(e, t) {
        e.windowSize = e.windowSize || e.screenSize;
        if (e.userAgent) {
          e.settings = e.settings || {};
          e.settings.userAgent = e.userAgent;
        }
        if (e.script) {
          e.onLoadFinished = e.onLoadFinished || e.script;
        }
        var n = u.mergeObjects(e, t);
        u.phantomCallback.forEach(function (e) {
          var t = n[e];
          if (t) {
            if (toString.call(t) === '[object Function]') {
              n[e] = { fn: t.toString(), context: {} };
            } else {
              t.fn = t.fn.toString();
            }
          }
        });
        return n;
      }
      function spawnPhantom(e, t, r, i, o) {
        var c = u.filterObject(i, Object.keys(u.phantom).concat(u.phantomPage).concat(u.phantomCallback));
        c.site = e;
        c.path = t;
        c.streaming = r;
        var f = [n.ab + 'webshot.phantom.js', JSON.stringify(c)];
        if (i.phantomConfig) {
          f = Object.keys(i.phantomConfig)
            .map(function (e) {
              return '--' + e + '=' + i.phantomConfig[e];
            })
            .concat(f);
        }
        var l = a.spawn(i.phantomPath, f);
        var h = null;
        var p = false;
        if (i.timeout) {
          h = setTimeout(function () {
            if (!p) {
              p = true;
              l.kill('SIGKILL');
              var e = new Error('PhantomJS did not respond within the given ' + 'timeout setting.');
              if (o) return o(e);
              d.emit('error', e);
            }
          }, i.timeout);
        }
        if (!r) {
          l.stderr.on('data', function (e) {
            if (i.errorIfJSException) {
              p = true;
              clearTimeout(h);
              o(new Error('' + e));
            }
          });
          l.on('exit', function (e) {
            if (!p) {
              p = true;
              clearTimeout(h);
              o(e ? new Error('PhantomJS exited with return value ' + e) : null);
            }
          });
        } else {
          var d = new s.Stream();
          d.readable = true;
          l.stdout.on('data', function (e) {
            clearTimeout(h);
            d.emit('data', new Buffer('' + e, 'base64'));
          });
          l.stderr.on('data', function (e) {
            if (i.errorIfJSException) {
              d.emit('error', '' + e);
            }
          });
          l.on('exit', function () {
            d.emit('end');
          });
          if (o) {
            o(null, d);
          } else {
            return d;
          }
        }
      }
    },
    997: e => {
      'use strict';
      e.exports = clone;
      function clone(e) {
        if (e === null || typeof e !== 'object') return e;
        if (e instanceof Object) var t = { __proto__: e.__proto__ };
        else var t = Object.create(null);
        Object.getOwnPropertyNames(e).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
        });
        return t;
      }
    },
    854: (e, t, n) => {
      var r = n(747);
      var i = n(556);
      var o = n(961);
      var s = n(997);
      var a = [];
      var u = n(669);
      function noop() {}
      var c = noop;
      if (u.debuglog) c = u.debuglog('gfs4');
      else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ''))
        c = function () {
          var e = u.format.apply(u, arguments);
          e = 'GFS4: ' + e.split(/\n/).join('\nGFS4: ');
          console.error(e);
        };
      if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || '')) {
        process.on('exit', function () {
          c(a);
          n(357).equal(a.length, 0);
        });
      }
      e.exports = patch(s(r));
      if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !r.__patched) {
        e.exports = patch(r);
        r.__patched = true;
      }
      e.exports.close = (function (e) {
        return function (t, n) {
          return e.call(r, t, function (e) {
            if (!e) retry();
            if (typeof n === 'function') n.apply(this, arguments);
          });
        };
      })(r.close);
      e.exports.closeSync = (function (e) {
        return function (t) {
          var n = e.apply(r, arguments);
          retry();
          return n;
        };
      })(r.closeSync);
      if (!/\bgraceful-fs\b/.test(r.closeSync.toString())) {
        r.closeSync = e.exports.closeSync;
        r.close = e.exports.close;
      }
      function patch(e) {
        i(e);
        e.gracefulify = patch;
        e.FileReadStream = ReadStream;
        e.FileWriteStream = WriteStream;
        e.createReadStream = createReadStream;
        e.createWriteStream = createWriteStream;
        var t = e.readFile;
        e.readFile = readFile;
        function readFile(e, n, r) {
          if (typeof n === 'function') (r = n), (n = null);
          return go$readFile(e, n, r);
          function go$readFile(e, n, r) {
            return t(e, n, function (t) {
              if (t && (t.code === 'EMFILE' || t.code === 'ENFILE')) enqueue([go$readFile, [e, n, r]]);
              else {
                if (typeof r === 'function') r.apply(this, arguments);
                retry();
              }
            });
          }
        }
        var n = e.writeFile;
        e.writeFile = writeFile;
        function writeFile(e, t, r, i) {
          if (typeof r === 'function') (i = r), (r = null);
          return go$writeFile(e, t, r, i);
          function go$writeFile(e, t, r, i) {
            return n(e, t, r, function (n) {
              if (n && (n.code === 'EMFILE' || n.code === 'ENFILE')) enqueue([go$writeFile, [e, t, r, i]]);
              else {
                if (typeof i === 'function') i.apply(this, arguments);
                retry();
              }
            });
          }
        }
        var r = e.appendFile;
        if (r) e.appendFile = appendFile;
        function appendFile(e, t, n, i) {
          if (typeof n === 'function') (i = n), (n = null);
          return go$appendFile(e, t, n, i);
          function go$appendFile(e, t, n, i) {
            return r(e, t, n, function (r) {
              if (r && (r.code === 'EMFILE' || r.code === 'ENFILE')) enqueue([go$appendFile, [e, t, n, i]]);
              else {
                if (typeof i === 'function') i.apply(this, arguments);
                retry();
              }
            });
          }
        }
        var s = e.readdir;
        e.readdir = readdir;
        function readdir(e, t, n) {
          var r = [e];
          if (typeof t !== 'function') {
            r.push(t);
          } else {
            n = t;
          }
          r.push(go$readdir$cb);
          return go$readdir(r);
          function go$readdir$cb(e, t) {
            if (t && t.sort) t.sort();
            if (e && (e.code === 'EMFILE' || e.code === 'ENFILE')) enqueue([go$readdir, [r]]);
            else {
              if (typeof n === 'function') n.apply(this, arguments);
              retry();
            }
          }
        }
        function go$readdir(t) {
          return s.apply(e, t);
        }
        if (process.version.substr(0, 4) === 'v0.8') {
          var a = o(e);
          ReadStream = a.ReadStream;
          WriteStream = a.WriteStream;
        }
        var u = e.ReadStream;
        if (u) {
          ReadStream.prototype = Object.create(u.prototype);
          ReadStream.prototype.open = ReadStream$open;
        }
        var c = e.WriteStream;
        if (c) {
          WriteStream.prototype = Object.create(c.prototype);
          WriteStream.prototype.open = WriteStream$open;
        }
        e.ReadStream = ReadStream;
        e.WriteStream = WriteStream;
        function ReadStream(e, t) {
          if (this instanceof ReadStream) return u.apply(this, arguments), this;
          else return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
        }
        function ReadStream$open() {
          var e = this;
          open(e.path, e.flags, e.mode, function (t, n) {
            if (t) {
              if (e.autoClose) e.destroy();
              e.emit('error', t);
            } else {
              e.fd = n;
              e.emit('open', n);
              e.read();
            }
          });
        }
        function WriteStream(e, t) {
          if (this instanceof WriteStream) return c.apply(this, arguments), this;
          else return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
        }
        function WriteStream$open() {
          var e = this;
          open(e.path, e.flags, e.mode, function (t, n) {
            if (t) {
              e.destroy();
              e.emit('error', t);
            } else {
              e.fd = n;
              e.emit('open', n);
            }
          });
        }
        function createReadStream(e, t) {
          return new ReadStream(e, t);
        }
        function createWriteStream(e, t) {
          return new WriteStream(e, t);
        }
        var f = e.open;
        e.open = open;
        function open(e, t, n, r) {
          if (typeof n === 'function') (r = n), (n = null);
          return go$open(e, t, n, r);
          function go$open(e, t, n, r) {
            return f(e, t, n, function (i, o) {
              if (i && (i.code === 'EMFILE' || i.code === 'ENFILE')) enqueue([go$open, [e, t, n, r]]);
              else {
                if (typeof r === 'function') r.apply(this, arguments);
                retry();
              }
            });
          }
        }
        return e;
      }
      function enqueue(e) {
        c('ENQUEUE', e[0].name, e[1]);
        a.push(e);
      }
      function retry() {
        var e = a.shift();
        if (e) {
          c('RETRY', e[0].name, e[1]);
          e[0].apply(null, e[1]);
        }
      }
    },
    961: (e, t, n) => {
      var r = n(413).Stream;
      e.exports = legacy;
      function legacy(e) {
        return { ReadStream: ReadStream, WriteStream: WriteStream };
        function ReadStream(t, n) {
          if (!(this instanceof ReadStream)) return new ReadStream(t, n);
          r.call(this);
          var i = this;
          this.path = t;
          this.fd = null;
          this.readable = true;
          this.paused = false;
          this.flags = 'r';
          this.mode = 438;
          this.bufferSize = 64 * 1024;
          n = n || {};
          var o = Object.keys(n);
          for (var s = 0, a = o.length; s < a; s++) {
            var u = o[s];
            this[u] = n[u];
          }
          if (this.encoding) this.setEncoding(this.encoding);
          if (this.start !== undefined) {
            if ('number' !== typeof this.start) {
              throw TypeError('start must be a Number');
            }
            if (this.end === undefined) {
              this.end = Infinity;
            } else if ('number' !== typeof this.end) {
              throw TypeError('end must be a Number');
            }
            if (this.start > this.end) {
              throw new Error('start must be <= end');
            }
            this.pos = this.start;
          }
          if (this.fd !== null) {
            process.nextTick(function () {
              i._read();
            });
            return;
          }
          e.open(this.path, this.flags, this.mode, function (e, t) {
            if (e) {
              i.emit('error', e);
              i.readable = false;
              return;
            }
            i.fd = t;
            i.emit('open', t);
            i._read();
          });
        }
        function WriteStream(t, n) {
          if (!(this instanceof WriteStream)) return new WriteStream(t, n);
          r.call(this);
          this.path = t;
          this.fd = null;
          this.writable = true;
          this.flags = 'w';
          this.encoding = 'binary';
          this.mode = 438;
          this.bytesWritten = 0;
          n = n || {};
          var i = Object.keys(n);
          for (var o = 0, s = i.length; o < s; o++) {
            var a = i[o];
            this[a] = n[a];
          }
          if (this.start !== undefined) {
            if ('number' !== typeof this.start) {
              throw TypeError('start must be a Number');
            }
            if (this.start < 0) {
              throw new Error('start must be >= zero');
            }
            this.pos = this.start;
          }
          this.busy = false;
          this._queue = [];
          if (this.fd === null) {
            this._open = e.open;
            this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
            this.flush();
          }
        }
      }
    },
    556: (e, t, n) => {
      var r = n(619);
      var i = process.cwd;
      var o = null;
      var s = process.env.GRACEFUL_FS_PLATFORM || process.platform;
      process.cwd = function () {
        if (!o) o = i.call(process);
        return o;
      };
      try {
        process.cwd();
      } catch (e) {}
      var a = process.chdir;
      process.chdir = function (e) {
        o = null;
        a.call(process, e);
      };
      e.exports = patch;
      function patch(e) {
        if (r.hasOwnProperty('O_SYMLINK') && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
          patchLchmod(e);
        }
        if (!e.lutimes) {
          patchLutimes(e);
        }
        e.chown = chownFix(e.chown);
        e.fchown = chownFix(e.fchown);
        e.lchown = chownFix(e.lchown);
        e.chmod = chmodFix(e.chmod);
        e.fchmod = chmodFix(e.fchmod);
        e.lchmod = chmodFix(e.lchmod);
        e.chownSync = chownFixSync(e.chownSync);
        e.fchownSync = chownFixSync(e.fchownSync);
        e.lchownSync = chownFixSync(e.lchownSync);
        e.chmodSync = chmodFixSync(e.chmodSync);
        e.fchmodSync = chmodFixSync(e.fchmodSync);
        e.lchmodSync = chmodFixSync(e.lchmodSync);
        e.stat = statFix(e.stat);
        e.fstat = statFix(e.fstat);
        e.lstat = statFix(e.lstat);
        e.statSync = statFixSync(e.statSync);
        e.fstatSync = statFixSync(e.fstatSync);
        e.lstatSync = statFixSync(e.lstatSync);
        if (!e.lchmod) {
          e.lchmod = function (e, t, n) {
            if (n) process.nextTick(n);
          };
          e.lchmodSync = function () {};
        }
        if (!e.lchown) {
          e.lchown = function (e, t, n, r) {
            if (r) process.nextTick(r);
          };
          e.lchownSync = function () {};
        }
        if (s === 'win32') {
          e.rename = (function (t) {
            return function (n, r, i) {
              var o = Date.now();
              var s = 0;
              t(n, r, function CB(a) {
                if (a && (a.code === 'EACCES' || a.code === 'EPERM') && Date.now() - o < 6e4) {
                  setTimeout(function () {
                    e.stat(r, function (e, o) {
                      if (e && e.code === 'ENOENT') t(n, r, CB);
                      else i(a);
                    });
                  }, s);
                  if (s < 100) s += 10;
                  return;
                }
                if (i) i(a);
              });
            };
          })(e.rename);
        }
        e.read = (function (t) {
          return function (n, r, i, o, s, a) {
            var u;
            if (a && typeof a === 'function') {
              var c = 0;
              u = function (f, l, h) {
                if (f && f.code === 'EAGAIN' && c < 10) {
                  c++;
                  return t.call(e, n, r, i, o, s, u);
                }
                a.apply(this, arguments);
              };
            }
            return t.call(e, n, r, i, o, s, u);
          };
        })(e.read);
        e.readSync = (function (t) {
          return function (n, r, i, o, s) {
            var a = 0;
            while (true) {
              try {
                return t.call(e, n, r, i, o, s);
              } catch (e) {
                if (e.code === 'EAGAIN' && a < 10) {
                  a++;
                  continue;
                }
                throw e;
              }
            }
          };
        })(e.readSync);
        function patchLchmod(e) {
          e.lchmod = function (t, n, i) {
            e.open(t, r.O_WRONLY | r.O_SYMLINK, n, function (t, r) {
              if (t) {
                if (i) i(t);
                return;
              }
              e.fchmod(r, n, function (t) {
                e.close(r, function (e) {
                  if (i) i(t || e);
                });
              });
            });
          };
          e.lchmodSync = function (t, n) {
            var i = e.openSync(t, r.O_WRONLY | r.O_SYMLINK, n);
            var o = true;
            var s;
            try {
              s = e.fchmodSync(i, n);
              o = false;
            } finally {
              if (o) {
                try {
                  e.closeSync(i);
                } catch (e) {}
              } else {
                e.closeSync(i);
              }
            }
            return s;
          };
        }
        function patchLutimes(e) {
          if (r.hasOwnProperty('O_SYMLINK')) {
            e.lutimes = function (t, n, i, o) {
              e.open(t, r.O_SYMLINK, function (t, r) {
                if (t) {
                  if (o) o(t);
                  return;
                }
                e.futimes(r, n, i, function (t) {
                  e.close(r, function (e) {
                    if (o) o(t || e);
                  });
                });
              });
            };
            e.lutimesSync = function (t, n, i) {
              var o = e.openSync(t, r.O_SYMLINK);
              var s;
              var a = true;
              try {
                s = e.futimesSync(o, n, i);
                a = false;
              } finally {
                if (a) {
                  try {
                    e.closeSync(o);
                  } catch (e) {}
                } else {
                  e.closeSync(o);
                }
              }
              return s;
            };
          } else {
            e.lutimes = function (e, t, n, r) {
              if (r) process.nextTick(r);
            };
            e.lutimesSync = function () {};
          }
        }
        function chmodFix(t) {
          if (!t) return t;
          return function (n, r, i) {
            return t.call(e, n, r, function (e) {
              if (chownErOk(e)) e = null;
              if (i) i.apply(this, arguments);
            });
          };
        }
        function chmodFixSync(t) {
          if (!t) return t;
          return function (n, r) {
            try {
              return t.call(e, n, r);
            } catch (e) {
              if (!chownErOk(e)) throw e;
            }
          };
        }
        function chownFix(t) {
          if (!t) return t;
          return function (n, r, i, o) {
            return t.call(e, n, r, i, function (e) {
              if (chownErOk(e)) e = null;
              if (o) o.apply(this, arguments);
            });
          };
        }
        function chownFixSync(t) {
          if (!t) return t;
          return function (n, r, i) {
            try {
              return t.call(e, n, r, i);
            } catch (e) {
              if (!chownErOk(e)) throw e;
            }
          };
        }
        function statFix(t) {
          if (!t) return t;
          return function (n, r) {
            return t.call(e, n, function (e, t) {
              if (!t) return r.apply(this, arguments);
              if (t.uid < 0) t.uid += 4294967296;
              if (t.gid < 0) t.gid += 4294967296;
              if (r) r.apply(this, arguments);
            });
          };
        }
        function statFixSync(t) {
          if (!t) return t;
          return function (n) {
            var r = t.call(e, n);
            if (r.uid < 0) r.uid += 4294967296;
            if (r.gid < 0) r.gid += 4294967296;
            return r;
          };
        }
        function chownErOk(e) {
          if (!e) return true;
          if (e.code === 'ENOSYS') return true;
          var t = !process.getuid || process.getuid() !== 0;
          if (t) {
            if (e.code === 'EINVAL' || e.code === 'EPERM') return true;
          }
          return false;
        }
      }
    },
    570: e => {
      'use strict';
      const t = {
        name: 'demo',
        path: 'demo',
        options: { shotSize: { width: 1024, height: 768 }, windowSize: { width: 1024, height: 768 } },
      };
      e.exports = t;
    },
    357: e => {
      'use strict';
      e.exports = require('assert');
    },
    129: e => {
      'use strict';
      e.exports = require('child_process');
    },
    619: e => {
      'use strict';
      e.exports = require('constants');
    },
    417: e => {
      'use strict';
      e.exports = require('crypto');
    },
    747: e => {
      'use strict';
      e.exports = require('fs');
    },
    87: e => {
      'use strict';
      e.exports = require('os');
    },
    622: e => {
      'use strict';
      e.exports = require('path');
    },
    413: e => {
      'use strict';
      e.exports = require('stream');
    },
    835: e => {
      'use strict';
      e.exports = require('url');
    },
    669: e => {
      'use strict';
      e.exports = require('util');
    },
  };
  var __webpack_module_cache__ = {};
  function __nccwpck_require__(e) {
    if (__webpack_module_cache__[e]) {
      return __webpack_module_cache__[e].exports;
    }
    var t = (__webpack_module_cache__[e] = { exports: {} });
    var n = true;
    try {
      __webpack_modules__[e].call(t.exports, t, t.exports, __nccwpck_require__);
      n = false;
    } finally {
      if (n) delete __webpack_module_cache__[e];
    }
    return t.exports;
  }
  __nccwpck_require__.ab = __dirname + '/';
  return __nccwpck_require__(932);
})();
