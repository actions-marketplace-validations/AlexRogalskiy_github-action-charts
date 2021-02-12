module.exports=(()=>{var __webpack_modules__={650:(e,t)=>{t.phantom={windowSize:{width:1024,height:768},shotSize:{width:"window",height:"window"},shotOffset:{left:0,right:0,top:0,bottom:0},defaultWhiteBackground:false,customCSS:"",takeShotOnCallback:false,streamType:"png",siteType:"url",renderDelay:0,quality:75,errorIfStatusIsNot200:false,errorIfJSException:false,cookies:[],captureSelector:false,zoomFactor:1};t.phantomPage=["paperSize","customHeaders","settings"];t.phantomCallback=["onAlert","onCallback","onClosing","onConfirm","onConsoleMessage","onError","onFilePicker","onInitialized","onLoadFinished","onLoadStarted","onNavigationRequested","onPageCreated","onPrompt","onResourceRequested","onResourceReceived","onResourceTimeout","onResourceError","onUrlChanged"];t.caller={phantomPath:"phantomjs",phantomConfig:"",timeout:0};t.mergeObjects=function mergeObjects(e,t){var o={};Object.keys(e).forEach(function(n){o[n]=toString.call(e[n])==="[object Object]"?mergeObjects(e[n],t[n]||{}):e[n]||t[n]});Object.keys(t).forEach(function(e){if(o.hasOwnProperty(e))return;o[e]=t[e]});return o};t.filterObject=function filterObject(e,t){var o={};t.forEach(function(t){if(e[t])o[t]=e[t]});return o}},918:(__unused_webpack_module,__unused_webpack_exports,__nccwpck_require__)=>{var system=__nccwpck_require__(223),page=__nccwpck_require__(437).create(),fs=__nccwpck_require__(747),optUtils=__nccwpck_require__(650);var options=JSON.parse(system.args[1]);var site=options.site;var path=options.path;var streaming=options.streaming;page.viewportSize={width:options.windowSize.width,height:options.windowSize.height};page.onError=function(e,t){var o=["ERROR: "+e];if(t&&t.length){o.push("TRACE:");t.forEach(function(e){o.push(" -> "+e.file+": "+e.line+(e.function?' (in function "'+e.function+'")':""))})}system.stderr.write(o.join("\n"))};if(options.errorIfStatusIsNot200){page.onResourceReceived=function(e){if(e.url===site&&e.status!==200){system.stderr.write("Status must be 200; is "+e.status);page.close();phantom.exit(0)}}}if(Array.isArray(options.cookies)){for(var i=0;i<options.cookies.length;++i){phantom.addCookie(options.cookies[i])}}else if(options.cookies===null){phantom.cookiesEnabled=false}optUtils.phantomCallback.forEach(function(e){var t=options[e];if(e==="onCallback"&&options.takeShotOnCallback)return;if(e==="onLoadFinished"&&!options.takeShotOnCallback)return;if(t){page[e]=buildEvaluationFn(t.fn,t.context)}});var toOverwrite=optUtils.mergeObjects(optUtils.filterObject(options,optUtils.phantomPage),page);optUtils.phantomPage.forEach(function(e){if(toOverwrite[e])page[e]=toOverwrite[e]});var _takeScreenshot=function(e){if(e==="fail"){page.close();phantom.exit(1);return}window.setTimeout(function(){if(options.customCSS){page.evaluate(function(e){var t=document.createElement("style");var o=document.createTextNode(e);t.setAttribute("type","text/css");t.appendChild(o);document.head.insertBefore(t,document.head.firstChild)},options.customCSS)}if(options.captureSelector){page.clipRect=page.evaluate(function(e,t){try{var o=document.querySelector(e).getBoundingClientRect();return{top:o.top*t,left:o.left*t,width:o.width*t,height:o.height*t}}catch(t){throw new Error("Unable to fetch bounds for element "+e)}},options.captureSelector,options.zoomFactor)}else{page.clipRect={top:options.shotOffset.top,left:options.shotOffset.left,width:pixelCount(page,"width",options.shotSize.width)-options.shotOffset.right,height:pixelCount(page,"height",options.shotSize.height)-options.shotOffset.bottom}}if(options.defaultWhiteBackground){page.evaluate(function(){var e=document.createElement("style");var t=document.createTextNode("body { background: #fff }");e.setAttribute("type","text/css");e.appendChild(t);document.head.insertBefore(e,document.head.firstChild)})}if(!streaming){page.render(path,{quality:options.quality})}else{console.log(page.renderBase64(options.streamType))}page.close();phantom.exit(0)},options.renderDelay)};var takeScreenshot;if(options.onCallback&&options.takeShotOnCallback){takeScreenshot=function(e){buildEvaluationFn(options.onCallback.fn,options.onCallback.context)(e);if(e=="takeShot"){_takeScreenshot()}}}else if(options.onLoadFinished&&!options.takeShotOnCallback){takeScreenshot=function(e){buildEvaluationFn(options.onLoadFinished.fn,options.onLoadFinished.context)(e);_takeScreenshot(e)}}else{takeScreenshot=_takeScreenshot}if(options.siteType=="url"){if(options.takeShotOnCallback){page.onCallback=takeScreenshot;page.open(site)}else{page.open(site,takeScreenshot)}}else{try{var f=fs.open(site,"r");var pageContent=f.read();f.close();page[options.takeShotOnCallback?"onCallback":"onLoadFinished"]=takeScreenshot;page.setContent(pageContent,"");page.reload()}catch(e){console.error(e);phantom.exit(1)}}function pixelCount(e,t,o){var n=e.evaluate(function(e){var t=document.body||{};var o=document.documentElement||{};return{width:Math.max(t.offsetWidth,t.scrollWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)*e,height:Math.max(t.offsetHeight,t.scrollHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)*e}},options.zoomFactor||1);var i={window:e.viewportSize[t],all:n[t]}[o]||o;return i}function buildEvaluationFn(fn,context){return function(){var args=Array.prototype.slice.call(arguments);page.evaluate(function(fn,context,args){eval("("+fn+")").apply(context,args)},fn,context,args)}}},223:module=>{module.exports=eval("require")("system")},437:module=>{module.exports=eval("require")("webpage")},747:e=>{"use strict";e.exports=require("fs")}};var __webpack_module_cache__={};function __nccwpck_require__(e){if(__webpack_module_cache__[e]){return __webpack_module_cache__[e].exports}var t=__webpack_module_cache__[e]={exports:{}};var o=true;try{__webpack_modules__[e](t,t.exports,__nccwpck_require__);o=false}finally{if(o)delete __webpack_module_cache__[e]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(918)})();