module.exports=(()=>{var __webpack_modules__={932:(module,__unused_webpack_exports,__nccwpck_require__)=>{"use strict";const core=__nccwpck_require__(186);const webshot=__nccwpck_require__(166);const path=__nccwpck_require__(622);const config=__nccwpck_require__(570);const{notBlankOrElse:notBlankOrElse,createOptions:createOptions,objToString:objToString}=__nccwpck_require__(608);async function createSnapshot(e,t,n){console.log(`Generating screenshot with parameters:\n    url=${e},\n    name=${t},\n    options=${objToString(n)}\n`);try{await webshot(e,t,n,()=>{console.log("screenshot captured")})}catch(e){console.error(e)}}async function run(){const e=notBlankOrElse(core.getInput("name"),config.name);const t=notBlankOrElse(core.getInput("path"),config.path);const n=core.getInput("url");const r=core.getInput("width");const i=core.getInput("height");const o=`https://styled-charts.vercel.app/api?url=${n}&width=${r}&height=${i}`;const s=path.join(t,`${e}.png`);const c={...createOptions(r,i),...config.options};await createSnapshot(o,s,c);core.setOutput("image","image downloaded in root directory")}module.exports=run;if(require.main===require.cache[eval("__filename")]){run()}},351:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=r(n(87));const o=n(278);function issueCommand(e,t,n){const r=new Command(e,t,n);process.stdout.write(r.toString()+i.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const s="::";class Command{constructor(e,t,n){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=n}toString(){let e=s+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const n in this.properties){if(this.properties.hasOwnProperty(n)){const r=this.properties[n];if(r){if(t){t=false}else{e+=","}e+=`${n}=${escapeProperty(r)}`}}}}e+=`${s}${escapeData(this.message)}`;return e}}function escapeData(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){function adopt(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||(n=Promise))(function(n,i){function fulfilled(e){try{step(r.next(e))}catch(e){i(e)}}function rejected(e){try{step(r["throw"](e))}catch(e){i(e)}}function step(e){e.done?n(e.value):adopt(e.value).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})};var i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=n(351);const s=n(717);const c=n(278);const u=i(n(87));const a=i(n(622));var l;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(l=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const n=c.toCommandValue(t);process.env[e]=n;const r=process.env["GITHUB_ENV"]||"";if(r){const t="_GitHubActionsFileCommandDelimeter_";const r=`${e}<<${t}${u.EOL}${n}${u.EOL}${t}`;s.issueCommand("ENV",r)}else{o.issueCommand("set-env",{name:e},n)}}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){s.issueCommand("PATH",e)}else{o.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${a.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n){throw new Error(`Input required and not supplied: ${e}`)}return n.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){o.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=l.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){o.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+u.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return r(this,void 0,void 0,function*(){startGroup(e);let n;try{n=yield t()}finally{endGroup()}return n})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)if(Object.hasOwnProperty.call(e,n))t[n]=e[n];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const i=r(n(747));const o=r(n(87));const s=n(278);function issueCommand(e,t){const n=process.env[`GITHUB_${e}`];if(!n){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!i.existsSync(n)){throw new Error(`Missing file at path: ${n}`)}i.appendFileSync(n,`${s.toCommandValue(t)}${o.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},746:(e,t,n)=>{var r=n(747);var i=n(622);var o=n(129);var s=n(666);var c=process.platform==="win32";var u=s({max:50,maxAge:30*1e3});function readShebang(e){var t;var n;var o;var s;if(e.indexOf(i.sep)!==-1){e=i.resolve(e)}s=u.get(e);if(s){return s}t=new Buffer(150);try{n=r.openSync(e,"r");r.readSync(n,t,0,150,0)}catch(e){}o=t.toString().trim().match(/\#\!\/usr\/bin\/env ([^\r\n]+)/i);s=o&&o[1];u.set(e,s);return s}function escapeArg(e,t){e=""+e;if(!t){e=e.replace(/([\(\)%!\^<>&|;,"' ])/g,"^$1")}else{e=e.replace(/(\\*)"/gi,'$1$1\\"');e=e.replace(/(\\*)$/,"$1$1");e='"'+e+'"'}return e}function escapeCommand(e){return/^[a-z0-9_-]+$/i.test(e)?e:escapeArg(e,true)}function spawn(e,t,n){var r;var i;t=t||[];n=n||{};if(!c){return o.spawn(e,t,n)}i=readShebang(e);if(i){t.unshift(e);e=i}r=e!=="echo";e=escapeCommand(e);t=t.map(function(e){return escapeArg(e,r)});t=["/s","/c",'"'+e+(t.length?" "+t.join(" "):"")+'"'];e=process.env.comspec||"cmd.exe";n.windowsVerbatimArguments=true;return o.spawn(e,t,n)}e.exports=spawn;e.exports.spawn=spawn},878:function(e){(function(t,n){true?e.exports=n():0})(this,function(){"use strict";function objectOrFunction(e){var t=typeof e;return e!==null&&(t==="object"||t==="function")}function isFunction(e){return typeof e==="function"}var e=void 0;if(Array.isArray){e=Array.isArray}else{e=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}var t=e;var n=0;var r=void 0;var i=void 0;var o=function asap(e,t){f[n]=e;f[n+1]=t;n+=2;if(n===2){if(i){i(flush)}else{h()}}};function setScheduler(e){i=e}function setAsap(e){o=e}var s=typeof window!=="undefined"?window:undefined;var c=s||{};var u=c.MutationObserver||c.WebKitMutationObserver;var a=typeof self==="undefined"&&typeof process!=="undefined"&&{}.toString.call(process)==="[object process]";var l=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function useNextTick(){return function(){return process.nextTick(flush)}}function useVertxTimer(){if(typeof r!=="undefined"){return function(){r(flush)}}return useSetTimeout()}function useMutationObserver(){var e=0;var t=new u(flush);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function useMessageChannel(){var e=new MessageChannel;e.port1.onmessage=flush;return function(){return e.port2.postMessage(0)}}function useSetTimeout(){var e=setTimeout;return function(){return e(flush,1)}}var f=new Array(1e3);function flush(){for(var e=0;e<n;e+=2){var t=f[e];var r=f[e+1];t(r);f[e]=undefined;f[e+1]=undefined}n=0}function attemptVertx(){try{var e=Function("return this")().require("vertx");r=e.runOnLoop||e.runOnContext;return useVertxTimer()}catch(e){return useSetTimeout()}}var h=void 0;if(a){h=useNextTick()}else if(u){h=useMutationObserver()}else if(l){h=useMessageChannel()}else if(s===undefined&&"function"==="function"){h=attemptVertx()}else{h=useSetTimeout()}function then(e,t){var n=this;var r=new this.constructor(noop);if(r[p]===undefined){makePromise(r)}var i=n._state;if(i){var s=arguments[i-1];o(function(){return invokeCallback(i,r,s,n._result)})}else{subscribe(n,r,e,t)}return r}function resolve$1(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(noop);resolve(n,e);return n}var p=Math.random().toString(36).substring(2);function noop(){}var _=void 0;var d=1;var v=2;function selfFulfillment(){return new TypeError("You cannot resolve a promise with itself")}function cannotReturnOwn(){return new TypeError("A promises callback cannot return that same promise.")}function tryThen(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function handleForeignThenable(e,t,n){o(function(e){var r=false;var i=tryThen(n,t,function(n){if(r){return}r=true;if(t!==n){resolve(e,n)}else{fulfill(e,n)}},function(t){if(r){return}r=true;reject(e,t)},"Settle: "+(e._label||" unknown promise"));if(!r&&i){r=true;reject(e,i)}},e)}function handleOwnThenable(e,t){if(t._state===d){fulfill(e,t._result)}else if(t._state===v){reject(e,t._result)}else{subscribe(t,undefined,function(t){return resolve(e,t)},function(t){return reject(e,t)})}}function handleMaybeThenable(e,t,n){if(t.constructor===e.constructor&&n===then&&t.constructor.resolve===resolve$1){handleOwnThenable(e,t)}else{if(n===undefined){fulfill(e,t)}else if(isFunction(n)){handleForeignThenable(e,t,n)}else{fulfill(e,t)}}}function resolve(e,t){if(e===t){reject(e,selfFulfillment())}else if(objectOrFunction(t)){var n=void 0;try{n=t.then}catch(t){reject(e,t);return}handleMaybeThenable(e,t,n)}else{fulfill(e,t)}}function publishRejection(e){if(e._onerror){e._onerror(e._result)}publish(e)}function fulfill(e,t){if(e._state!==_){return}e._result=t;e._state=d;if(e._subscribers.length!==0){o(publish,e)}}function reject(e,t){if(e._state!==_){return}e._state=v;e._result=t;o(publishRejection,e)}function subscribe(e,t,n,r){var i=e._subscribers;var s=i.length;e._onerror=null;i[s]=t;i[s+d]=n;i[s+v]=r;if(s===0&&e._state){o(publish,e)}}function publish(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=void 0,i=void 0,o=e._result;for(var s=0;s<t.length;s+=3){r=t[s];i=t[s+n];if(r){invokeCallback(n,r,i,o)}else{i(o)}}e._subscribers.length=0}function invokeCallback(e,t,n,r){var i=isFunction(n),o=void 0,s=void 0,c=true;if(i){try{o=n(r)}catch(e){c=false;s=e}if(t===o){reject(t,cannotReturnOwn());return}}else{o=r}if(t._state!==_){}else if(i&&c){resolve(t,o)}else if(c===false){reject(t,s)}else if(e===d){fulfill(t,o)}else if(e===v){reject(t,o)}}function initializePromise(e,t){try{t(function resolvePromise(t){resolve(e,t)},function rejectPromise(t){reject(e,t)})}catch(t){reject(e,t)}}var m=0;function nextId(){return m++}function makePromise(e){e[p]=m++;e._state=undefined;e._result=undefined;e._subscribers=[]}function validationError(){return new Error("Array Methods must be provided an Array")}var g=function(){function Enumerator(e,n){this._instanceConstructor=e;this.promise=new e(noop);if(!this.promise[p]){makePromise(this.promise)}if(t(n)){this.length=n.length;this._remaining=n.length;this._result=new Array(this.length);if(this.length===0){fulfill(this.promise,this._result)}else{this.length=this.length||0;this._enumerate(n);if(this._remaining===0){fulfill(this.promise,this._result)}}}else{reject(this.promise,validationError())}}Enumerator.prototype._enumerate=function _enumerate(e){for(var t=0;this._state===_&&t<e.length;t++){this._eachEntry(e[t],t)}};Enumerator.prototype._eachEntry=function _eachEntry(e,t){var n=this._instanceConstructor;var r=n.resolve;if(r===resolve$1){var i=void 0;var o=void 0;var s=false;try{i=e.then}catch(e){s=true;o=e}if(i===then&&e._state!==_){this._settledAt(e._state,t,e._result)}else if(typeof i!=="function"){this._remaining--;this._result[t]=e}else if(n===y){var c=new n(noop);if(s){reject(c,o)}else{handleMaybeThenable(c,e,i)}this._willSettleAt(c,t)}else{this._willSettleAt(new n(function(t){return t(e)}),t)}}else{this._willSettleAt(r(e),t)}};Enumerator.prototype._settledAt=function _settledAt(e,t,n){var r=this.promise;if(r._state===_){this._remaining--;if(e===v){reject(r,n)}else{this._result[t]=n}}if(this._remaining===0){fulfill(r,this._result)}};Enumerator.prototype._willSettleAt=function _willSettleAt(e,t){var n=this;subscribe(e,undefined,function(e){return n._settledAt(d,t,e)},function(e){return n._settledAt(v,t,e)})};return Enumerator}();function all(e){return new g(this,e).promise}function race(e){var n=this;if(!t(e)){return new n(function(e,t){return t(new TypeError("You must pass an array to race."))})}else{return new n(function(t,r){var i=e.length;for(var o=0;o<i;o++){n.resolve(e[o]).then(t,r)}})}}function reject$1(e){var t=this;var n=new t(noop);reject(n,e);return n}function needsResolver(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function needsNew(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var y=function(){function Promise(e){this[p]=nextId();this._result=this._state=undefined;this._subscribers=[];if(noop!==e){typeof e!=="function"&&needsResolver();this instanceof Promise?initializePromise(this,e):needsNew()}}Promise.prototype.catch=function _catch(e){return this.then(null,e)};Promise.prototype.finally=function _finally(e){var t=this;var n=t.constructor;if(isFunction(e)){return t.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})})}return t.then(e,e)};return Promise}();y.prototype.then=then;y.all=all;y.race=race;y.resolve=resolve$1;y.reject=reject$1;y._setScheduler=setScheduler;y._setAsap=setAsap;y._asap=o;function polyfill(){var e=void 0;if(typeof global!=="undefined"){e=global}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=y}y.polyfill=polyfill;y.Promise=y;return y})},758:(e,t,n)=>{var r=e.exports=n(992);var i=n(357);n(263);var o=n(669);function noop(){}var s=noop;if(o.debuglog)s=o.debuglog("gfs");else if(/\bgfs\b/i.test(process.env.NODE_DEBUG||""))s=function(){var e=o.format.apply(o,arguments);e="GFS: "+e.split(/\n/).join("\nGFS: ");console.error(e)};if(/\bgfs\b/i.test(process.env.NODE_DEBUG||"")){process.on("exit",function(){s("fds",u);s(h);i.equal(h.length,0)})}var c=r.open;r.open=open;function open(e,t,n,r){if(typeof n==="function")r=n,n=null;if(typeof r!=="function")r=noop;new OpenReq(e,t,n,r)}function OpenReq(e,t,n,r){this.path=e;this.flags=t;this.mode=n;this.cb=r;Req.call(this)}o.inherits(OpenReq,Req);OpenReq.prototype.process=function(){c.call(r,this.path,this.flags,this.mode,this.done)};var u={};OpenReq.prototype.done=function(e,t){s("open done",e,t);if(t)u["fd"+t]=this.path;Req.prototype.done.call(this,e,t)};var a=r.readdir;r.readdir=readdir;function readdir(e,t){if(typeof t!=="function")t=noop;new ReaddirReq(e,t)}function ReaddirReq(e,t){this.path=e;this.cb=t;Req.call(this)}o.inherits(ReaddirReq,Req);ReaddirReq.prototype.process=function(){a.call(r,this.path,this.done)};ReaddirReq.prototype.done=function(e,t){if(t&&t.sort)t=t.sort();Req.prototype.done.call(this,e,t);onclose()};var l=r.close;r.close=close;function close(e,t){s("close",e);if(typeof t!=="function")t=noop;delete u["fd"+e];l.call(r,e,function(e){onclose();t(e)})}var f=r.closeSync;r.closeSync=closeSync;function closeSync(e){try{return f(e)}finally{onclose()}}function Req(){this.done=this.done.bind(this);this.failures=0;this.process()}Req.prototype.done=function(e,t){var n=false;if(e){var r=e.code;var n=r==="EMFILE"||r==="ENFILE";if(process.platform==="win32")n=n||r==="OK"}if(n){this.failures++;enqueue(this)}else{var i=this.cb;i(e,t)}};var h=[];function enqueue(e){h.push(e);s("enqueue %d %s",h.length,e.constructor.name,e)}function onclose(){var e=h.shift();if(e){s("process",e.constructor.name,e);e.process()}}},263:(e,t,n)=>{var r=n(992);var i=n(619);var o=process.cwd;var s=null;process.cwd=function(){if(!s)s=o.call(process);return s};var c=process.chdir;process.chdir=function(e){s=null;c.call(process,e)};if(i.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)){r.lchmod=function(e,t,n){n=n||noop;r.open(e,i.O_WRONLY|i.O_SYMLINK,t,function(e,i){if(e){n(e);return}r.fchmod(i,t,function(e){r.close(i,function(t){n(e||t)})})})};r.lchmodSync=function(e,t){var n=r.openSync(e,i.O_WRONLY|i.O_SYMLINK,t);var o,s;try{var c=r.fchmodSync(n,t)}catch(e){o=e}try{r.closeSync(n)}catch(e){s=e}if(o||s)throw o||s;return c}}if(!r.lutimes){if(i.hasOwnProperty("O_SYMLINK")){r.lutimes=function(e,t,n,o){r.open(e,i.O_SYMLINK,function(e,i){o=o||noop;if(e)return o(e);r.futimes(i,t,n,function(e){r.close(i,function(t){return o(e||t)})})})};r.lutimesSync=function(e,t,n){var o=r.openSync(e,i.O_SYMLINK),s,c,u;try{var u=r.futimesSync(o,t,n)}catch(e){s=e}try{r.closeSync(o)}catch(e){c=e}if(s||c)throw s||c;return u}}else if(r.utimensat&&i.hasOwnProperty("AT_SYMLINK_NOFOLLOW")){r.lutimes=function(e,t,n,o){r.utimensat(e,t,n,i.AT_SYMLINK_NOFOLLOW,o)};r.lutimesSync=function(e,t,n){return r.utimensatSync(e,t,n,i.AT_SYMLINK_NOFOLLOW)}}else{r.lutimes=function(e,t,n,r){process.nextTick(r)};r.lutimesSync=function(){}}}r.chown=chownFix(r.chown);r.fchown=chownFix(r.fchown);r.lchown=chownFix(r.lchown);r.chmod=chownFix(r.chmod);r.fchmod=chownFix(r.fchmod);r.lchmod=chownFix(r.lchmod);r.chownSync=chownFixSync(r.chownSync);r.fchownSync=chownFixSync(r.fchownSync);r.lchownSync=chownFixSync(r.lchownSync);r.chmodSync=chownFix(r.chmodSync);r.fchmodSync=chownFix(r.fchmodSync);r.lchmodSync=chownFix(r.lchmodSync);function chownFix(e){if(!e)return e;return function(t,n,i,o){return e.call(r,t,n,i,function(e,t){if(chownErOk(e))e=null;o(e,t)})}}function chownFixSync(e){if(!e)return e;return function(t,n,i){try{return e.call(r,t,n,i)}catch(e){if(!chownErOk(e))throw e}}}function chownErOk(e){if(!e)return true;if(e.code==="ENOSYS")return true;var t=!process.getuid||process.getuid()!==0;if(t){if(e.code==="EINVAL"||e.code==="EPERM")return true}return false}if(!r.lchmod){r.lchmod=function(e,t,n){process.nextTick(n)};r.lchmodSync=function(){}}if(!r.lchown){r.lchown=function(e,t,n,r){process.nextTick(r)};r.lchownSync=function(){}}if(process.platform==="win32"){var u=r.rename;r.rename=function rename(e,t,n){var r=Date.now();u(e,t,function CB(i){if(i&&(i.code==="EACCES"||i.code==="EPERM")&&Date.now()-r<1e3){return u(e,t,CB)}if(n)n(i)})}}var a=r.read;r.read=function(e,t,n,i,o,s){var c;if(s&&typeof s==="function"){var u=0;c=function(l,f,h){if(l&&l.code==="EAGAIN"&&u<10){u++;return a.call(r,e,t,n,i,o,c)}s.apply(this,arguments)}}return a.call(r,e,t,n,i,o,c)};var l=r.readSync;r.readSync=function(e,t,n,i,o){var s=0;while(true){try{return l.call(r,e,t,n,i,o)}catch(e){if(e.code==="EAGAIN"&&s<10){s++;continue}throw e}}}},666:e=>{(function(){if(true&&e.exports){e.exports=LRUCache}else{this.LRUCache=LRUCache}function hOP(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function naiveLength(){return 1}var t=false;function typeCheckKey(e){if(!t&&typeof e!=="string"&&typeof e!=="number"){t=true;console.error(new TypeError("LRU: key must be a string or number. Almost certainly a bug! "+typeof e).stack)}}function LRUCache(e){if(!(this instanceof LRUCache))return new LRUCache(e);if(typeof e==="number")e={max:e};if(!e)e={};this._max=e.max;if(!this._max||!(typeof this._max==="number")||this._max<=0)this._max=Infinity;this._lengthCalculator=e.length||naiveLength;if(typeof this._lengthCalculator!=="function")this._lengthCalculator=naiveLength;this._allowStale=e.stale||false;this._maxAge=e.maxAge||null;this._dispose=e.dispose;this.reset()}Object.defineProperty(LRUCache.prototype,"max",{set:function(e){if(!e||!(typeof e==="number")||e<=0)e=Infinity;this._max=e;if(this._length>this._max)trim(this)},get:function(){return this._max},enumerable:true});Object.defineProperty(LRUCache.prototype,"lengthCalculator",{set:function(e){if(typeof e!=="function"){this._lengthCalculator=naiveLength;this._length=this._itemCount;for(var t in this._cache){this._cache[t].length=1}}else{this._lengthCalculator=e;this._length=0;for(var t in this._cache){this._cache[t].length=this._lengthCalculator(this._cache[t].value);this._length+=this._cache[t].length}}if(this._length>this._max)trim(this)},get:function(){return this._lengthCalculator},enumerable:true});Object.defineProperty(LRUCache.prototype,"length",{get:function(){return this._length},enumerable:true});Object.defineProperty(LRUCache.prototype,"itemCount",{get:function(){return this._itemCount},enumerable:true});LRUCache.prototype.forEach=function(e,t){t=t||this;var n=0;var r=this._itemCount;for(var i=this._mru-1;i>=0&&n<r;i--)if(this._lruList[i]){n++;var o=this._lruList[i];if(isStale(this,o)){del(this,o);if(!this._allowStale)o=undefined}if(o){e.call(t,o.value,o.key,this)}}};LRUCache.prototype.keys=function(){var e=new Array(this._itemCount);var t=0;for(var n=this._mru-1;n>=0&&t<this._itemCount;n--)if(this._lruList[n]){var r=this._lruList[n];e[t++]=r.key}return e};LRUCache.prototype.values=function(){var e=new Array(this._itemCount);var t=0;for(var n=this._mru-1;n>=0&&t<this._itemCount;n--)if(this._lruList[n]){var r=this._lruList[n];e[t++]=r.value}return e};LRUCache.prototype.reset=function(){if(this._dispose&&this._cache){for(var e in this._cache){this._dispose(e,this._cache[e].value)}}this._cache=Object.create(null);this._lruList=Object.create(null);this._mru=0;this._lru=0;this._length=0;this._itemCount=0};LRUCache.prototype.dump=function(){var e=[];var t=0;for(var n=this._mru-1;n>=0&&t<this._itemCount;n--)if(this._lruList[n]){var r=this._lruList[n];if(!isStale(this,r)){++t;e.push({k:r.key,v:r.value,e:r.now+(r.maxAge||0)})}}return e};LRUCache.prototype.dumpLru=function(){return this._lruList};LRUCache.prototype.set=function(e,t,n){n=n||this._maxAge;typeCheckKey(e);var r=n?Date.now():0;var i=this._lengthCalculator(t);if(hOP(this._cache,e)){if(i>this._max){del(this,this._cache[e]);return false}if(this._dispose)this._dispose(e,this._cache[e].value);this._cache[e].now=r;this._cache[e].maxAge=n;this._cache[e].value=t;this._length+=i-this._cache[e].length;this._cache[e].length=i;this.get(e);if(this._length>this._max)trim(this);return true}var o=new Entry(e,t,this._mru++,i,r,n);if(o.length>this._max){if(this._dispose)this._dispose(e,t);return false}this._length+=o.length;this._lruList[o.lu]=this._cache[e]=o;this._itemCount++;if(this._length>this._max)trim(this);return true};LRUCache.prototype.has=function(e){typeCheckKey(e);if(!hOP(this._cache,e))return false;var t=this._cache[e];if(isStale(this,t)){return false}return true};LRUCache.prototype.get=function(e){typeCheckKey(e);return get(this,e,true)};LRUCache.prototype.peek=function(e){typeCheckKey(e);return get(this,e,false)};LRUCache.prototype.pop=function(){var e=this._lruList[this._lru];del(this,e);return e||null};LRUCache.prototype.del=function(e){typeCheckKey(e);del(this,this._cache[e])};LRUCache.prototype.load=function(e){this.reset();var t=Date.now();for(var n=e.length-1;n>=0;n--){var r=e[n];typeCheckKey(r.k);var i=r.e||0;if(i===0){this.set(r.k,r.v)}else{var o=i-t;if(o>0)this.set(r.k,r.v,o)}}};function get(e,t,n){typeCheckKey(t);var r=e._cache[t];if(r){if(isStale(e,r)){del(e,r);if(!e._allowStale)r=undefined}else{if(n)use(e,r)}if(r)r=r.value}return r}function isStale(e,t){if(!t||!t.maxAge&&!e._maxAge)return false;var n=false;var r=Date.now()-t.now;if(t.maxAge){n=r>t.maxAge}else{n=e._maxAge&&r>e._maxAge}return n}function use(e,t){shiftLU(e,t);t.lu=e._mru++;e._lruList[t.lu]=t}function trim(e){while(e._lru<e._mru&&e._length>e._max)del(e,e._lruList[e._lru])}function shiftLU(e,t){delete e._lruList[t.lu];while(e._lru<e._mru&&!e._lruList[e._lru])e._lru++}function del(e,t){if(t){if(e._dispose)e._dispose(t.key,t.value);e._length-=t.length;e._itemCount--;delete e._cache[t.key];shiftLU(e,t)}}function Entry(e,t,n,r,i,o){this.key=e;this.value=t;this.lu=n;this.length=r;this.now=i;if(o)this.maxAge=o}})()},284:e=>{"use strict";var t=process.platform==="win32";var n=t?/[^:]\\$/:/.\/$/;e.exports=function(){var e;if(t){e=process.env.TEMP||process.env.TMP||(process.env.SystemRoot||process.env.windir)+"\\temp"}else{e=process.env.TMPDIR||process.env.TMP||process.env.TEMP||"/tmp"}if(n.test(e)){e=e.slice(0,-1)}return e}},379:e=>{e.exports.location="phantom\\bin\\phantomjs.exe";e.exports.platform="win32";e.exports.arch="x64"},403:(e,t,n)=>{var r;var i=n(747);var o=n(622);var s=n(129).spawn;var c=n(878).Promise;try{var u=n(379);t.ET=o.resolve(__dirname,u.location);r=u.platform;r=u.arch}catch(e){t.ET=null}r="2.1.1";r=function(e){return e.replace(/:[^:]*node_modules[^:]*/g,"").replace(/(^|:)\.\/bin(\:|$)/g,":").replace(/^:+/,"").replace(/:+$/,"")};if(t.ET){try{var a=i.statSync(t.ET);var l=a.mode|parseInt("0555",8);if(l!==a.mode){i.chmodSync(t.ET,l)}}catch(e){}}t.GL=function(){var e=Array.prototype.slice.call(arguments);return s(t.ET,e)};r=function(){var e=arguments;return new c(function(n,r){try{var i=t.GL.apply(null,e);var o=true;var s="";i.stdout.on("data",function(){if(!o)return;o=false;n(i)});i.stderr.on("data",function(e){s=s+e.toString("utf8")});i.on("error",function(e){if(!o)return;o=false;r(e)});i.on("exit",function(e){if(!o)return;o=false;if(e==0){if(s.indexOf("Error:")==0){r(new Error(s))}else{n(i)}}else{r(new Error("Exit code: "+e))}})}catch(e){r(e)}})}},517:(e,t,n)=>{const r=n(747);const i=n(622);const o=n(417);const s=n(284);const c=process.binding("constants");const u=s(),a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",l=/XXXXXX/,f=3,h=(c.O_CREAT||c.fs.O_CREAT)|(c.O_EXCL||c.fs.O_EXCL)|(c.O_RDWR||c.fs.O_RDWR),p=c.EBADF||c.os.errno.EBADF,_=c.ENOENT||c.os.errno.ENOENT,d=448,v=384,m=[];var g=false,y=false;function _randomChars(e){var t=[],n=null;try{n=o.randomBytes(e)}catch(t){n=o.pseudoRandomBytes(e)}for(var r=0;r<e;r++){t.push(a[n[r]%a.length])}return t.join("")}function _isUndefined(e){return typeof e==="undefined"}function _parseArguments(e,t){if(typeof e=="function"){return[t||{},e]}if(_isUndefined(e)){return[{},t]}return[e,t]}function _generateTmpName(e){if(e.name){return i.join(e.dir||u,e.name)}if(e.template){return e.template.replace(l,_randomChars(6))}const t=[e.prefix||"tmp-",process.pid,_randomChars(12),e.postfix||""].join("");return i.join(e.dir||u,t)}function tmpName(e,t){var n=_parseArguments(e,t),i=n[0],o=n[1],s=i.name?1:i.tries||f;if(isNaN(s)||s<0)return o(new Error("Invalid tries"));if(i.template&&!i.template.match(l))return o(new Error("Invalid template provided"));(function _getUniqueName(){const e=_generateTmpName(i);r.stat(e,function(t){if(!t){if(s-- >0)return _getUniqueName();return o(new Error("Could not get a unique tmp filename, max tries reached "+e))}o(null,e)})})()}function tmpNameSync(e){var t=_parseArguments(e),n=t[0],i=n.name?1:n.tries||f;if(isNaN(i)||i<0)throw new Error("Invalid tries");if(n.template&&!n.template.match(l))throw new Error("Invalid template provided");do{const e=_generateTmpName(n);try{r.statSync(e)}catch(t){return e}}while(i-- >0);throw new Error("Could not get a unique tmp filename, max tries reached")}function file(e,t){var n=_parseArguments(e,t),i=n[0],o=n[1];i.postfix=_isUndefined(i.postfix)?".tmp":i.postfix;tmpName(i,function _tmpNameCreated(e,t){if(e)return o(e);r.open(t,h,i.mode||v,function _fileCreated(e,n){if(e)return o(e);if(i.discardDescriptor){return r.close(n,function _discardCallback(e){if(e){try{r.unlinkSync(t)}catch(t){if(!isENOENT(t)){e=t}}return o(e)}o(null,t,undefined,_prepareTmpFileRemoveCallback(t,-1,i))})}if(i.detachDescriptor){return o(null,t,n,_prepareTmpFileRemoveCallback(t,-1,i))}o(null,t,n,_prepareTmpFileRemoveCallback(t,n,i))})})}function fileSync(e){var t=_parseArguments(e),n=t[0];n.postfix=n.postfix||".tmp";const i=n.discardDescriptor||n.detachDescriptor;const o=tmpNameSync(n);var s=r.openSync(o,h,n.mode||v);if(n.discardDescriptor){r.closeSync(s);s=undefined}return{name:o,fd:s,removeCallback:_prepareTmpFileRemoveCallback(o,i?-1:s,n)}}function _rmdirRecursiveSync(e){const t=[e];do{var n=t.pop(),o=false,s=r.readdirSync(n);for(var c=0,u=s.length;c<u;c++){var a=i.join(n,s[c]),l=r.lstatSync(a);if(l.isDirectory()){if(!o){o=true;t.push(n)}t.push(a)}else{r.unlinkSync(a)}}if(!o){r.rmdirSync(n)}}while(t.length!==0)}function dir(e,t){var n=_parseArguments(e,t),i=n[0],o=n[1];tmpName(i,function _tmpNameCreated(e,t){if(e)return o(e);r.mkdir(t,i.mode||d,function _dirCreated(e){if(e)return o(e);o(null,t,_prepareTmpDirRemoveCallback(t,i))})})}function dirSync(e){var t=_parseArguments(e),n=t[0];const i=tmpNameSync(n);r.mkdirSync(i,n.mode||d);return{name:i,removeCallback:_prepareTmpDirRemoveCallback(i,n)}}function _prepareTmpFileRemoveCallback(e,t,n){const i=_prepareRemoveCallback(function _removeCallback(e){try{if(0<=e[0]){r.closeSync(e[0])}}catch(e){if(!isEBADF(e)&&!isENOENT(e)){throw e}}try{r.unlinkSync(e[1])}catch(e){if(!isENOENT(e)){throw e}}},[t,e]);if(!n.keep){m.unshift(i)}return i}function _prepareTmpDirRemoveCallback(e,t){const n=t.unsafeCleanup?_rmdirRecursiveSync:r.rmdirSync.bind(r);const i=_prepareRemoveCallback(n,e);if(!t.keep){m.unshift(i)}return i}function _prepareRemoveCallback(e,t){var n=false;return function _cleanupCallback(r){if(!n){const r=m.indexOf(_cleanupCallback);if(r>=0){m.splice(r,1)}n=true;e(t)}if(r)r(null)}}function _garbageCollector(){if(y&&!g){return}while(m.length){try{m[0].call(null)}catch(e){}}}function isEBADF(e){return isExpectedError(e,-p,"EBADF")}function isENOENT(e){return isExpectedError(e,-_,"ENOENT")}function isExpectedError(e,t,n){return e.code==t||e.code==n}function setGracefulCleanup(){g=true}const w=process.versions.node.split(".").map(function(e){return parseInt(e,10)});if(w[0]===0&&(w[1]<9||w[1]===9&&w[2]<5)){process.addListener("uncaughtException",function _uncaughtExceptionThrown(e){y=true;_garbageCollector();throw e})}process.addListener("exit",function _exit(e){if(e)y=true;_garbageCollector()});e.exports.tmpdir=u;e.exports.dir=dir;e.exports.dirSync=dirSync;e.exports.file=file;e.exports.fileSync=fileSync;e.exports.tmpName=tmpName;e.exports.tmpNameSync=tmpNameSync;e.exports.setGracefulCleanup=setGracefulCleanup},853:(e,t)=>{t.phantom={windowSize:{width:1024,height:768},shotSize:{width:"window",height:"window"},shotOffset:{left:0,right:0,top:0,bottom:0},defaultWhiteBackground:false,customCSS:"",takeShotOnCallback:false,streamType:"png",siteType:"url",renderDelay:0,quality:75,errorIfStatusIsNot200:false,errorIfJSException:false,cookies:[],captureSelector:false,zoomFactor:1};t.phantomPage=["paperSize","customHeaders","settings"];t.phantomCallback=["onAlert","onCallback","onClosing","onConfirm","onConsoleMessage","onError","onFilePicker","onInitialized","onLoadFinished","onLoadStarted","onNavigationRequested","onPageCreated","onPrompt","onResourceRequested","onResourceReceived","onResourceTimeout","onResourceError","onUrlChanged"];t.caller={phantomPath:"phantomjs",phantomConfig:"",timeout:0};t.mergeObjects=function mergeObjects(e,t){var n={};Object.keys(e).forEach(function(r){n[r]=toString.call(e[r])==="[object Object]"?mergeObjects(e[r],t[r]||{}):e[r]||t[r]});Object.keys(t).forEach(function(e){if(n.hasOwnProperty(e))return;n[e]=t[e]});return n};t.filterObject=function filterObject(e,t){var n={};t.forEach(function(t){if(e[t])n[t]=e[t]});return n}},166:(e,t,n)=>{var r=n(835),i=n(758),o=n(517),s=n(413),c=n(746),u=n(853),a=n.ab+"webshot.phantom.js",l=["jpeg","jpg","png","pdf"],f=["url","html","file"];e.exports=function(){var e=Array.prototype.slice.call(arguments,0);var t=null;var s={};var c=null;var a=e.shift();var h=e[e.length-1];if(Object.prototype.toString.call(h)=="[object Function]"){t=e.pop()}switch(e.length){case 1:var p=e.pop();if(toString.call(p)==="[object String]"){c=p}else{s=p}break;case 2:c=e.shift();s=e.shift();break}var _=!c;var d=u.mergeObjects(u.caller,u.phantom);try{d.phantomPath=n(403).ET}catch(e){}s=processOptions(s,d);var v=c?c.substring(~(~c.lastIndexOf(".")||~c.length)+1):s.streamType;if(!~l.indexOf(v.toLowerCase())){return t(new Error("All files must end with one of the following extensions: "+l.join(", ")))}if(!~f.indexOf(s.siteType)){var m=new Error(e.siteType+" is not a valid sitetype.");if(t)return t(m);throw m}if(s.siteType==="url"){a=r.parse(a).protocol?a:"http://"+a}var g=function(){if(s.siteType==="html"){var e=o.fileSync();var n=e.name;i.writeSync(e.fd,a,null,"utf-8");i.close(e.fd);s.siteType="file";a=n;return g()}else{return spawnPhantom(a,c,_,s,t)}};if(c){i.exists(c,function(e){if(e){i.unlink(c,function(e){if(e)return t(e);return g()})}else{return g()}})}else{return g()}};function processOptions(e,t){e.windowSize=e.windowSize||e.screenSize;if(e.userAgent){e.settings=e.settings||{};e.settings.userAgent=e.userAgent}if(e.script){e.onLoadFinished=e.onLoadFinished||e.script}var n=u.mergeObjects(e,t);u.phantomCallback.forEach(function(e){var t=n[e];if(t){if(toString.call(t)==="[object Function]"){n[e]={fn:t.toString(),context:{}}}else{t.fn=t.fn.toString()}}});return n}function spawnPhantom(e,t,r,i,o){var a=u.filterObject(i,Object.keys(u.phantom).concat(u.phantomPage).concat(u.phantomCallback));a.site=e;a.path=t;a.streaming=r;var l=[n.ab+"webshot.phantom.js",JSON.stringify(a)];if(i.phantomConfig){l=Object.keys(i.phantomConfig).map(function(e){return"--"+e+"="+i.phantomConfig[e]}).concat(l)}var f=c.spawn(i.phantomPath,l);var h=null;var p=false;if(i.timeout){h=setTimeout(function(){if(!p){p=true;f.kill("SIGKILL");var e=new Error("PhantomJS did not respond within the given "+"timeout setting.");if(o)return o(e);_.emit("error",e)}},i.timeout)}if(!r){f.stderr.on("data",function(e){if(i.errorIfJSException){p=true;clearTimeout(h);o(new Error(""+e))}});f.on("exit",function(e){if(!p){p=true;clearTimeout(h);o(e?new Error("PhantomJS exited with return value "+e):null)}})}else{var _=new s.Stream;_.readable=true;f.stdout.on("data",function(e){clearTimeout(h);_.emit("data",new Buffer(""+e,"base64"))});f.stderr.on("data",function(e){if(i.errorIfJSException){_.emit("error",""+e)}});f.on("exit",function(){_.emit("end")});if(o){o(null,_)}else{return _}}}},570:e=>{"use strict";const t={name:"chart",path:"images",options:{shotSize:{width:1024,height:768},windowSize:{width:1024,height:768}}};e.exports=t},608:e=>{"use strict";const t=(e,t)=>{return{shotSize:{width:e,height:t},windowSize:{width:e,height:t}}};const n=e=>{return e&&e.length>0};const r=e=>{return!e||/^\s*$/.test(e)};const i=(e,t)=>{return r(e)?t:e};const o=e=>{let t="";for(let n in e){if(e.hasOwnProperty(n)){t+=n+" => "+(typeof e[n]==="object"?"["+o(e[n])+"]":e[n]+", ")}}return t};e.exports={createOptions:t,objToString:o,isNonEmptyString:n,isBlankString:r,notBlankOrElse:i}},992:module=>{module.exports=eval("require")("./fs.js")},357:e=>{"use strict";e.exports=require("assert")},129:e=>{"use strict";e.exports=require("child_process")},619:e=>{"use strict";e.exports=require("constants")},417:e=>{"use strict";e.exports=require("crypto")},747:e=>{"use strict";e.exports=require("fs")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},413:e=>{"use strict";e.exports=require("stream")},835:e=>{"use strict";e.exports=require("url")},669:e=>{"use strict";e.exports=require("util")}};var __webpack_module_cache__={};function __nccwpck_require__(e){if(__webpack_module_cache__[e]){return __webpack_module_cache__[e].exports}var t=__webpack_module_cache__[e]={exports:{}};var n=true;try{__webpack_modules__[e].call(t.exports,t,t.exports,__nccwpck_require__);n=false}finally{if(n)delete __webpack_module_cache__[e]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(932)})();