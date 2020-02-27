(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Scheduler"] = factory();
	else
		root["Scheduler"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "ee7e123ab28abbcac198";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Scheduler": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/scheduler/index.js","common","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['schedule', 'teamings'],
  mounted: function mounted() {
    this.$refs['tag'].focus();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _Schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Schedule */ "./vendor/cl/scheduler/js/Schedule.js");
/* harmony import */ var _ScheduleEditor_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleEditor.vue */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": ConsoleComponentBase,
  data: function data() {
    return {
      teamings: null,
      schedules: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.setTitle(': Schedules');
    this.addNav2('Add Schedule', 5, function () {
      _this.add();
    });
    this.$site.api.get('/api/scheduler/schedules', {}).then(function (response) {
      if (!response.hasError()) {
        _this.take(response);
      } else {
        _this.$site.toast(_this, response);
      }
    })["catch"](function (error) {
      _this.$site.toast(_this, error);
    });
  },
  methods: {
    teamingName: function teamingName(teamingid) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.teamings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var teaming = _step.value;

          if (+teaming.id === +teamingid) {
            return teaming.name;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return 'None';
    },
    take: function take(response) {
      var data = response.getData('schedules').attributes;
      this.schedules = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var row = _step2.value;
          this.schedules.push(new _Schedule__WEBPACK_IMPORTED_MODULE_1__["Schedule"](row));
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var teamings = response.getData('teamings');

      if (teamings !== null) {
        this.teamings = teamings.attributes;
      }
    },
    add: function add() {
      var _this2 = this;

      var schedule = new _Schedule__WEBPACK_IMPORTED_MODULE_1__["Schedule"]();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: 'New Schedule',
        content: '<div id="cl-schedule"></div>',
        addClass: 'cl-dialog-narrow',
        buttons: [{
          contents: 'Add',
          focus: true,
          click: function click(dialog) {
            if (!_this2.$site.Tags.validate(schedule.tag)) {
              return;
            }

            if (schedule.name.trim() === '') {
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK);
              return;
            }

            var params = {
              tag: schedule.tag.trim(),
              name: schedule.name.trim(),
              teaming: schedule.teaming
            };

            _this2.$site.api.post('/api/scheduler/schedules/new', params).then(function (response) {
              if (!response.hasError()) {
                _this2.take(response);

                dialog.close();
              } else {
                _this2.$site.toast(_this2, response);
              }
            })["catch"](function (error) {
              _this2.$site.toast(_this2, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(schedule);
    },
    editer: function editer(schedule) {
      var _this3 = this;

      schedule = schedule.clone();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: 'Edit Schedule',
        content: '<div id="cl-schedule"></div>',
        addClass: 'cl-dialog-narrow',
        buttons: [{
          contents: 'Update',
          focus: true,
          click: function click(dialog) {
            if (!_this3.$site.Tags.validate(schedule.tag)) {
              return;
            }

            if (schedule.name.trim() === '') {
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Must enter name', 'You must provide a non-empty name', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK);
              return;
            }

            var params = {
              id: schedule.id,
              tag: schedule.tag.trim(),
              name: schedule.name.trim(),
              teaming: schedule.teaming
            };

            _this3.$site.api.post('/api/scheduler/schedules/update', params).then(function (response) {
              if (!response.hasError()) {
                _this3.take(response);

                dialog.close();
              } else {
                _this3.$site.toast(_this3, response);
              }
            })["catch"](function (error) {
              _this3.$site.toast(_this3, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(schedule);
    },
    dialogVue: function dialogVue(schedule) {
      // Create a Vue inside the dialog box
      var teamings = this.teamings;
      new this.$site.Vue({
        el: '#cl-schedule',
        data: function data() {
          return {
            schedule: schedule,
            teamings: teamings
          };
        },
        template: "<editor :schedule=\"schedule\" :teamings=\"teamings\"></editor>",
        components: {
          editor: _ScheduleEditor_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
        }
      });
    },
    deleter: function deleter(schedule) {
      var _this4 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Are you sure?', 'Are you sure you want to delete ' + schedule.name, dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OKCANCEL, function () {
        _this4.$site.api.post('/api/scheduler/schedules/delete', {
          id: schedule.id
        }).then(function (response) {
          if (!response.hasError()) {
            _this4.take(response);

            dialog.close();
          } else {
            _this4.$site.toast(_this4, response);
          }
        })["catch"](function (error) {
          _this4.$site.toast(_this4, error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _Schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Schedule */ "./vendor/cl/scheduler/js/Schedule.js");
/* harmony import */ var _Slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slot */ "./vendor/cl/scheduler/js/Slot.js");
/* harmony import */ var users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! users-cl/js/Vue/UserVueBase.vue */ "./vendor/cl/users/js/Vue/UserVueBase.vue");
/* harmony import */ var _SlotEditor_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SlotEditor.vue */ "./vendor/cl/scheduler/js/SlotEditor.vue");
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
/* harmony import */ var site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! site-cl/js/Util/StickyNav */ "./vendor/cl/site/js/Util/StickyNav.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
  props: ['json'],
  data: function data() {
    return {
      schedule: null,
      days: [],
      teamMode: false,
      team: null,
      staff: false,
      latest: 0,
      time: 0,
      timer: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    new site_cl_js_Util_StickyNav__WEBPACK_IMPORTED_MODULE_7__["StickyNav"]('nav.cl-nav');
    this.clearMenu();
    this.schedule = new _Schedule__WEBPACK_IMPORTED_MODULE_2__["Schedule"](this.json.schedule);
    this.setTime();
    this.timer = setInterval(function () {
      _this.setTime();
    }, 1000);
    this.newSlots(this.json.slots);

    if (this.json.team !== undefined) {
      this.teamMode = true;
      this.team = this.json.team;
    }

    this.setTitle(this.schedule.name);
    this.staff = this.user.atLeast(course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"].STAFF);

    if (this.staff) {
      this.addMenu('Add Slot', function () {
        _this.add();
      });
    }

    this.$site.polling.addClient('scheduler', function (params) {
      params.scheduler = {
        scheduleId: _this.schedule.id,
        after: _this.latest
      };
    }, function (response) {
      _this.take(response);
    });
  },
  destroyed: function destroyed() {
    clearInterval(this.timer);
    this.timer = 0;
  },
  methods: {
    take: function take(response) {
      var slots = response.getData('slots');

      if (slots !== null) {
        var data = slots.attributes;
        this.newSlots(data);
      }
    },
    owned: function owned(slot) {
      if (this.teamMode) {
        return this.team !== null && slot.teamId === this.team.id;
      }

      return this.user.member.id === slot.memberId;
    },
    ownedForDay: function ownedForDay(day) {
      var cnt = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = day.slots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var slot = _step.value;

          if (slot.booked()) {
            cnt++;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return cnt;
    },
    setTime: function setTime() {
      this.time = Math.round(new Date().getTime() / 1000);
    },
    book: function book(slot) {
      var _this2 = this;

      var params = {
        id: slot.id,
        teamMode: this.teamMode ? 1 : 0
      };

      if (this.teamMode) {
        if (this.team !== null) {
          params['teamId'] = this.team.id;
        } else {
          this.$site.toast(this, 'Not a member of a team!');
          return;
        }
      }

      this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/book', params).then(function (response) {
        if (!response.hasError()) {
          _this2.take(response);
        } else {
          _this2.$site.toast(_this2, response);
        }
      })["catch"](function (error) {
        _this2.$site.toast(_this2, error);
      });
    },
    unbook: function unbook(slot) {
      var _this3 = this;

      this.$site.api.post('/api/scheduler/slots/' + this.schedule.id + '/unbook', {
        id: slot.id
      }).then(function (response) {
        if (!response.hasError()) {
          _this3.take(response);
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    },
    newSlots: function newSlots(slots) {
      //
      // Collect up slots by days
      //
      this.days = [];
      var lastDay = null;
      var daySlots = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = slots[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var slotData = _step2.value;
          var slot = new _Slot__WEBPACK_IMPORTED_MODULE_3__["Slot"](slotData);

          if (slot.updated > this.latest) {
            this.latest = slot.updated;
          }

          var day = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_6__["TimeFormatter"].absoluteUNIX(slot.time, 'long-date');

          if (day !== lastDay) {
            // We have a new day
            if (daySlots.length > 0) {
              this.days.push({
                day: lastDay,
                slots: daySlots
              });
            }

            lastDay = day;
            daySlots = [];
          }

          daySlots.push(slot);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (daySlots.length > 0) {
        this.days.push({
          day: lastDay,
          slots: daySlots
        });
      }
    },
    add: function add() {
      var _this4 = this;

      var slot = new _Slot__WEBPACK_IMPORTED_MODULE_3__["Slot"]();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: 'New Slot',
        content: '<div id="cl-schedule-slot"></div>',
        addClass: 'cl-schedule-dialog',
        buttons: [{
          contents: 'Add',
          focus: true,
          click: function click(dialog) {
            if (slot.time === '' || slot.time === 0) {
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Must enter time', 'You must provide a date and time', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK);
              return;
            }

            var params = {
              time: slot.time,
              duration: slot.duration,
              location: slot.location,
              repeat: slot.repeat
            };

            _this4.$site.api.post('/api/scheduler/slots/' + _this4.schedule.id + '/new', params).then(function (response) {
              if (!response.hasError()) {
                _this4.take(response);

                dialog.close();
              } else {
                _this4.$site.toast(_this4, response);
              }
            })["catch"](function (error) {
              _this4.$site.toast(_this4, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(slot);
    },
    editer: function editer(slot) {
      var _this5 = this;

      slot = slot.clone();
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
        title: 'Edit Slot',
        content: '<div id="cl-schedule-slot"></div>',
        addClass: 'cl-schedule-dialog',
        buttons: [{
          contents: 'Update',
          focus: true,
          click: function click(dialog) {
            if (slot.time === '' || slot.time === 0) {
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Must enter time', 'You must provide a date and time', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK);
              return;
            }

            var params = {
              id: slot.id,
              time: slot.time,
              duration: slot.duration,
              location: slot.location
            };

            _this5.$site.api.post('/api/scheduler/slots/' + _this5.schedule.id + '/update', params).then(function (response) {
              if (!response.hasError()) {
                _this5.take(response);

                dialog.close();
              } else {
                _this5.$site.toast(_this5, response);
              }
            })["catch"](function (error) {
              _this5.$site.toast(_this5, error);
            });
          }
        }, {
          contents: 'Cancel',
          click: function click(dialog) {
            dialog.close();
          }
        }]
      });
      this.dialogVue(slot);
    },
    dialogVue: function dialogVue(slot) {
      // Create a Vue inside the dialog box
      new this.$site.Vue({
        el: '#cl-schedule-slot',
        site: this.$site,
        data: function data() {
          return {
            slot: slot
          };
        },
        template: "<editor :schedule-slot=\"slot\"></editor>",
        components: {
          editor: _SlotEditor_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
        }
      });
    },
    deleter: function deleter(slot) {
      var _this6 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Are you sure?', 'Are you sure you want to delete?', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OKCANCEL, function () {
        _this6.$site.api.post('/api/scheduler/slots/' + _this6.schedule.id + '/delete', {
          id: slot.id
        }).then(function (response) {
          if (!response.hasError()) {
            _this6.take(response);

            dialog.close();
          } else {
            _this6.$site.toast(_this6, response);
          }
        })["catch"](function (error) {
          _this6.$site.toast(_this6, error);
        });
      });
    },
    timeFormat: function timeFormat(time) {
      return site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_6__["TimeFormatter"].absoluteUNIX(time, 'short-time');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['schedule-slot'],
  data: function data() {
    return {
      time: null,
      fpConfig: {
        enableTime: true,
        dateFormat: "m-d-Y h:iK",
        wrap: true
      }
    };
  },
  components: {
    'flatPickr': vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.time = this.scheduleSlot.time !== 0 ? this.scheduleSlot.time * 1000 : null;
  },
  updated: function updated() {
    if (this.time === null || typeof this.time === 'number') {
      return;
    }

    var matches = this.time.match(/([0-9]*)-([0-9]*)-([0-9]*)\s([0-9]*):([0-9]*)([AP])/);
    var hours = +matches[4];

    if (matches[6] === 'P') {
      if (hours < 12) {
        hours += 12;
      }
    } else {
      if (hours === 12) {
        hours = 0;
      }
    }

    var date = new Date(matches[3], matches[1] - 1, matches[2], hours, matches[5]);
    this.scheduleSlot.time = this.time !== '' ? Math.floor(date.getTime() / 1000) : 0;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['menu'],
  data: function data() {
    return {
      homeLink: Site.root + '/'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': Site.Site.PageVueBase,
  computed: {
    user: function user() {
      return this.$store.state.user.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Not scoped */\ndiv.cl-schedule-dialog {\n  width: 300px;\n}\ndiv.cl-schedule-view h2 {\n  border: 0;\n  text-align: center;\n  padding-left: 3.5em;\n}\ndiv.cl-schedule-view span.cl-info {\n  font-weight: normal;\n  font-size: 0.7em;\n}\ndiv.cl-schedule-view table {\n  border: 0;\n  box-shadow: none;\n}\ndiv.cl-schedule-view table td:first-child {\n  width: 6em;\n  text-align: right;\n  vertical-align: top;\n  border: 0;\n  font-size: 0.85em;\n  padding-right: 3px;\n}\ndiv.cl-schedule-view table td:nth-child(2) {\n  position: relative;\n  width: 20em;\n  height: 4.5em;\n  text-align: center;\n  border-left: 1px solid black;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n  border-bottom: none;\n}\ndiv.cl-schedule-view table td:nth-child(2) span.location {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  font-style: italic;\n  font-size: 0.9em;\n}\ndiv.cl-schedule-view table td:nth-child(2) a {\n  text-decoration: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.45em 0 0 0;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 1.3em;\n  color: #2a2;\n}\ndiv.cl-schedule-view table tr:last-child td:nth-child(2) {\n  border-bottom: 1px solid black;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) {\n  background-color: lime;\n  color: black;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.booked {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.25em 0 0 0;\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 1.5em;\n  color: black;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.unbook {\n  position: absolute;\n  right: 2px;\n  top: -3px;\n  width: 16px;\n  height: 16px;\n  padding: 0;\n}\ndiv.cl-schedule-view table tr.booked td:nth-child(2) span.unbook a {\n  padding: 0;\n}\ndiv.cl-schedule-view table tr.owned td:nth-child(2) {\n  background-color: #faa;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flatpickr-input[readonly][data-v-6f2f3240] {\n  text-align: center;\n}\n.narrow[data-v-6f2f3240] {\n  width: 3em;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dialog-cl-column" }, [
    _c("div", [
      _c("form", [
        _c("p", [
          _c("label", [
            _vm._v("Tag"),
            _c("br"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.schedule.tag,
                  expression: "schedule.tag"
                }
              ],
              ref: "tag",
              attrs: { type: "text" },
              domProps: { value: _vm.schedule.tag },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.schedule, "tag", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _c("label", [
            _vm._v("Name"),
            _c("br"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.schedule.name,
                  expression: "schedule.name"
                }
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.schedule.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.schedule, "name", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _vm.teamings !== null
          ? _c("p", [
              _c("label", [_vm._v("Teaming")]),
              _c("br"),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.schedule.teaming,
                      expression: "schedule.teaming"
                    }
                  ],
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
                        _vm.schedule,
                        "teaming",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { domProps: { value: 0 } }, [_vm._v("None")]),
                  _vm._v(" "),
                  _vm._l(_vm.teamings, function(teaming) {
                    return _c("option", { domProps: { value: teaming.id } }, [
                      _vm._v(_vm._s(teaming.name))
                    ])
                  })
                ],
                2
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _vm.schedules !== null
      ? _c("div", { staticClass: "full" }, [
          _vm.schedules.length > 0
            ? _c(
                "table",
                [
                  _c("tr", [
                    _c("th"),
                    _vm._v(" "),
                    _c("th", [_vm._v("Tag")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _vm.teamings !== null
                      ? _c("th", [_vm._v("Teaming")])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.schedules, function(schedule) {
                    return _c("tr", { key: schedule.id }, [
                      _c("td", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.editer(schedule)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src:
                                  _vm.root + "/vendor/cl/site/img/pencil16.png",
                                alt: "Edit",
                                title: "Edit"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.deleter(schedule)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: _vm.root + "/vendor/cl/site/img/x.png",
                                alt: "Delete",
                                title: "Delete"
                              }
                            })
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.root + "/cl/schedule/" + schedule.tag
                            }
                          },
                          [_vm._v(_vm._s(schedule.tag))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(schedule.name))]),
                      _vm._v(" "),
                      _vm.teamings !== null
                        ? _c("td", [
                            _vm._v(_vm._s(_vm.teamingName(schedule.teaming)))
                          ])
                        : _vm._e()
                    ])
                  })
                ],
                2
              )
            : _c("div", { staticClass: "center" }, [
                _c("p", [_vm._v("There are currently no defined schedules.")]),
                _vm._v(" "),
                _c("p", [_vm._v("Choose Add Schedule to add a new schedule.")])
              ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content cl-schedule-view" },
    _vm._l(_vm.days, function(day) {
      return _c("div", [
        _c("h2", [
          _vm._v(_vm._s(day.day) + " "),
          _c("span", { staticClass: "cl-info" }, [
            _vm._v(
              _vm._s(day.slots.length) +
                " slots/" +
                _vm._s(day.slots.length - _vm.ownedForDay(day)) +
                " open"
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "table",
          _vm._l(day.slots, function(slot) {
            return _c(
              "tr",
              {
                class: slot.booked()
                  ? _vm.owned(slot)
                    ? "booked owned"
                    : "booked"
                  : ""
              },
              [
                _c(
                  "td",
                  [
                    _vm._v(_vm._s(_vm.timeFormat(slot.time))),
                    _vm.staff
                      ? [
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.editer(slot)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src:
                                    _vm.root +
                                    "/vendor/cl/site/img/pencil16.png",
                                  alt: "Edit",
                                  title: "Edit"
                                }
                              })
                            ]
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.deleter(slot)
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: _vm.root + "/vendor/cl/site/img/x.png",
                                  alt: "Delete",
                                  title: "Delete"
                                }
                              })
                            ]
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c("td", [
                  slot.booked()
                    ? _c("span", { staticClass: "booked" }, [
                        _vm._v(_vm._s(slot.teamName))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !slot.booked() && slot.time > _vm.time
                    ? _c(
                        "a",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.book(slot)
                            }
                          }
                        },
                        [_vm._v("Click to Book")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "location" }, [
                    _vm._v(_vm._s(slot.location))
                  ]),
                  _vm._v(" "),
                  slot.booked() &&
                  (_vm.staff || (_vm.owned(slot) && slot.time > _vm.time))
                    ? _c("span", { staticClass: "unbook" }, [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.unbook(slot)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: _vm.root + "/vendor/cl/site/img/x.png",
                                alt: "Unbook",
                                title: "Unbook"
                              }
                            })
                          ]
                        )
                      ])
                    : _vm._e()
                ])
              ]
            )
          }),
          0
        )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dialog-cl-column" }, [
    _c("div", [
      _c("form", [
        _c("p", { staticClass: "flatpickr" }, [
          _c(
            "label",
            [
              _vm._v("Date and Time"),
              _c("br"),
              _vm._v(" "),
              _c("flat-pickr", {
                attrs: { config: _vm.fpConfig, "data-input": "" },
                model: {
                  value: _vm.time,
                  callback: function($$v) {
                    _vm.time = $$v
                  },
                  expression: "time"
                }
              }),
              _vm._v(" "),
              _vm._m(0)
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _c("label", [
            _vm._v("Duration (minutes): "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.scheduleSlot.duration,
                  expression: "scheduleSlot.duration"
                }
              ],
              staticClass: "narrow",
              attrs: { type: "text" },
              domProps: { value: _vm.scheduleSlot.duration },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.scheduleSlot, "duration", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("p", [
          _c("label", [
            _vm._v("Location"),
            _c("br"),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.scheduleSlot.location,
                  expression: "scheduleSlot.location"
                }
              ],
              attrs: { type: "text" },
              domProps: { value: _vm.scheduleSlot.location },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.scheduleSlot, "location", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _vm.scheduleSlot.id === 0
          ? _c("p", { staticClass: "center" }, [
              _c("label", [
                _vm._v("Repeat: "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.scheduleSlot.repeat,
                      expression: "scheduleSlot.repeat"
                    }
                  ],
                  staticClass: "narrow",
                  attrs: { type: "text" },
                  domProps: { value: _vm.scheduleSlot.repeat },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.scheduleSlot, "repeat", $event.target.value)
                    }
                  }
                })
              ])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-toggle": "", title: "Toggle Calendar" } }, [
      _c("span", { staticClass: "icons-cl icons-cl-calendar" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "cl-nav" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "dividers" },
        [
          _c("li", [
            _c("a", { attrs: { href: _vm.homeLink } }, [
              _c("span", { staticClass: "home" }, [_vm._v("Home")])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.menu, function(item) {
            return _c("li", [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return item.click()
                    }
                  }
                },
                [_vm._v(_vm._s(item.name))]
              )
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0d94fb9e", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("612f5790", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/course/js/Members/Member.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Members/Member.js ***!
  \***********************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");

/**
 * Member of a course
 * Attaches to a user Object
 * @constructor
 */

var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    this.created = json.created !== undefined ? json.created : null;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

    this.created = null; // When user was created

    role = null; // Membership role
  }

  this.role = function () {
    return role;
  };

  this.setRole = function (role_) {
    role = role_;
  };
};

Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].prototype);
Member.prototype.constructor = Member;
/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */

Member.prototype.getSection = function (store) {
  return store.getters['course/section'](this.semester, this.section);
};
/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */


Member.prototype.getAssignment = function (store, assigntag) {
  var section = this.getSection(store);
  return section.getAssignment(assigntag);
}; // The possible member roles
// Must match values in Member.php


Member.GUEST = 'G'; ///< Guest user visiting the site

Member.USER = 'U'; ///< Standard user from User, don't use for Member

Member.DROPPED = 'D'; ///< User has dropped the course

Member.STUDENT = 'T'; ///< Enrolled student in course

Member.STAFF = 'S'; ///< Any course staff

Member.GRADER = 'R'; ///< Graders

Member.ULA = 'L'; ///< Undergraduate Learning Assistant

Member.TA = 'E'; ///< Teaching assistant

Member.INSTRUCTOR = 'I'; ///< Course instructor

Member.ADMIN = 'A'; ///< Admin

Member.prototype.getRoles = function () {
  var roles = {};
  roles[Member.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[Member.DROPPED] = {
    name: 'Dropped',
    priority: 2
  };
  roles[Member.USER] = {
    name: 'User',
    priority: 3,
    skip: true
  };
  roles[Member.STUDENT] = {
    name: 'Student',
    priority: 4
  };
  roles[Member.STAFF] = {
    name: 'Staff',
    priority: 5,
    skip: true
  };
  roles[Member.GRADER] = {
    name: 'Grader',
    priority: 6
  };
  roles[Member.ULA] = {
    name: 'Undergraduate Learning Assistant',
    "short": 'ULA',
    priority: 7
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    "short": 'TA',
    priority: 8
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 9
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



/***/ }),

/***/ "./vendor/cl/scheduler/index.js":
/*!**************************************!*\
  !*** ./vendor/cl/scheduler/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_ScheduleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ScheduleFactory */ "./vendor/cl/scheduler/js/ScheduleFactory.js");
/* harmony import */ var _js_Console_SchedulerConsole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Console/SchedulerConsole */ "./vendor/cl/scheduler/js/Console/SchedulerConsole.js");
/**
 * @file
 * The main Scheduler entry point
 */

 //
// Create the scheduler runtime component
//

_js_ScheduleFactory__WEBPACK_IMPORTED_MODULE_0__["ScheduleFactory"].create(Site.Site); //
// Install the console components
//

if (Site.Site.console !== undefined) {
  _js_Console_SchedulerConsole__WEBPACK_IMPORTED_MODULE_1__["SchedulerConsole"].setup(Site.Site.console);
}

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue":
/*!***********************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/ScheduleEditor.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleEditor.vue?vue&type=template&id=581a201e& */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&");
/* harmony import */ var _ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('581a201e')) {
      api.createRecord('581a201e', component.options)
    } else {
      api.reload('581a201e', component.options)
    }
    module.hot.accept(/*! ./ScheduleEditor.vue?vue&type=template&id=581a201e& */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleEditor.vue?vue&type=template&id=581a201e& */ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&");
(function () {
      api.rerender('581a201e', {
        render: _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/scheduler/js/Console/ScheduleEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleEditor.vue?vue&type=template&id=581a201e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/ScheduleEditor.vue?vue&type=template&id=581a201e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleEditor_vue_vue_type_template_id_581a201e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulerConsole.js":
/*!************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulerConsole.js ***!
  \************************************************************/
/*! exports provided: SchedulerConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulerConsole", function() { return SchedulerConsole; });
/* harmony import */ var course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _SchedulesEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulesEditor.vue */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue");


/**
 * @file
 * Scheduler system console components
 */

var SchedulerConsole = function SchedulerConsole() {};

SchedulerConsole.setup = function (Console) {
  Console.tables.add({
    title: 'Scheduler',
    order: 100,
    api: '/api/scheduler/tables'
  });
  var page = {
    title: 'Main',
    route: '',
    order: 1
  };
  Console.components.addOption({
    atLeast: course_cl_js_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].TA,
    page: page,
    section: {
      title: 'Course',
      order: 5
    },
    title: 'Schedules',
    order: 11,
    route: '/schedules',
    routes: [{
      route: '/schedules',
      component: _SchedulesEditor_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    }]
  });
};

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue":
/*!************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulesEditor.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchedulesEditor.vue?vue&type=template&id=fcccece8& */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&");
/* harmony import */ var _SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SchedulesEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('fcccece8')) {
      api.createRecord('fcccece8', component.options)
    } else {
      api.reload('fcccece8', component.options)
    }
    module.hot.accept(/*! ./SchedulesEditor.vue?vue&type=template&id=fcccece8& */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SchedulesEditor.vue?vue&type=template&id=fcccece8& */ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&");
(function () {
      api.rerender('fcccece8', {
        render: _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/scheduler/js/Console/SchedulesEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SchedulesEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&":
/*!*******************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SchedulesEditor.vue?vue&type=template&id=fcccece8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/Console/SchedulesEditor.vue?vue&type=template&id=fcccece8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SchedulesEditor_vue_vue_type_template_id_fcccece8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/scheduler/js/Schedule.js":
/*!********************************************!*\
  !*** ./vendor/cl/scheduler/js/Schedule.js ***!
  \********************************************/
/*! exports provided: Schedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule", function() { return Schedule; });
/**
 * Object the represents a schedule
 * @param data
 * @constructor
 */
var Schedule = function Schedule(data) {
  if (data !== undefined) {
    this.id = data.id;
    this.tag = data.tag;
    this.name = data.name;
    this.teaming = data.teaming;
  } else {
    this.id = 0;
    this.tag = '';
    this.name = '';
    this.teaming = 0;
  }

  this.clone = function () {
    return new Schedule(this);
  };
};

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleFactory.js":
/*!***************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleFactory.js ***!
  \***************************************************/
/*! exports provided: ScheduleFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleFactory", function() { return ScheduleFactory; });
/* harmony import */ var site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVue */ "./vendor/cl/site/js/Vue/PageVue.js");
/* harmony import */ var site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/Vue/PageNav.vue */ "./vendor/cl/site/js/Vue/PageNav.vue");
/* harmony import */ var _ScheduleVue_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleVue.vue */ "./vendor/cl/scheduler/js/ScheduleVue.vue");
/**
 * @file
 * The Schedule system creation factory.
 */



var ScheduleFactory = function ScheduleFactory() {};

ScheduleFactory.create = function (site) {
  site.ready(function () {
    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_0__["PageVue"].create('div.cl-schedule-view', 'Schedule', _ScheduleVue_vue__WEBPACK_IMPORTED_MODULE_2__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
};

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue":
/*!************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleVue.vue?vue&type=template&id=51a40e0a& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&");
/* harmony import */ var _ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScheduleVue.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('51a40e0a')) {
      api.createRecord('51a40e0a', component.options)
    } else {
      api.reload('51a40e0a', component.options)
    }
    module.hot.accept(/*! ./ScheduleVue.vue?vue&type=template&id=51a40e0a& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScheduleVue.vue?vue&type=template&id=51a40e0a& */ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&");
(function () {
      api.rerender('51a40e0a', {
        render: _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/scheduler/js/ScheduleVue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleVue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleVue.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ScheduleVue.vue?vue&type=template&id=51a40e0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/ScheduleVue.vue?vue&type=template&id=51a40e0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScheduleVue_vue_vue_type_template_id_51a40e0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/scheduler/js/Slot.js":
/*!****************************************!*\
  !*** ./vendor/cl/scheduler/js/Slot.js ***!
  \****************************************/
/*! exports provided: Slot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slot", function() { return Slot; });
var Slot = function Slot(data) {
  if (data !== undefined) {
    this.id = data.id;
    this.time = data.time;
    this.duration = data.duration;
    this.updated = data.updated;
    this.location = data.location;
    this.teamId = data.teamId;
    this.teamName = data.teamName;
    this.memberId = data.memberId;
  } else {
    this.id = 0;
    this.time = 0;
    this.duration = 10;
    this.updated = 0;
    this.location = '';
    this.teamName = null;
    this.teamId = null;
    this.memberId = null;
  }

  this.repeat = 1;

  this.clone = function () {
    return new Slot(this);
  };

  this.booked = function () {
    return this.teamId !== null || this.memberId !== null;
  };
};

/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&");
/* harmony import */ var _SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SlotEditor.vue?vue&type=script&lang=js& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6f2f3240",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('6f2f3240')) {
      api.createRecord('6f2f3240', component.options)
    } else {
      api.reload('6f2f3240', component.options)
    }
    module.hot.accept(/*! ./SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& */ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&");
(function () {
      api.rerender('6f2f3240', {
        render: _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/scheduler/js/SlotEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=style&index=0&id=6f2f3240&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_style_index_0_id_6f2f3240_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/scheduler/js/SlotEditor.vue?vue&type=template&id=6f2f3240&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SlotEditor_vue_vue_type_template_id_6f2f3240_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/TimeFormatter.js":
/*!********************************************!*\
  !*** ./vendor/cl/site/js/TimeFormatter.js ***!
  \********************************************/
/*! exports provided: TimeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return TimeFormatter; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Utility functions to format times.
 */

/**
 * Utility functions to format times.
 * @constructor
 */

var TimeFormatter = function TimeFormatter() {};
/**
 * Convert a time to the format we display
 * Time is relative to a specified time (or current time)
 * @param {moment} time Time to convert (moment)
 * @param {moment} currentTime Current time (moment)
 * @param {string} format Moment format
 * @returns {string}
 */

TimeFormatter.relative = function (time, currentTime, format) {
  if (currentTime === undefined || currentTime === null) {
    currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default.a.now();
  }

  var elapsed = currentTime.diff(time);

  if (elapsed < 60000) {
    return '<1 min ago';
  }

  if (elapsed < 3600000) {
    // Within an hour ago
    var mins = Math.floor(elapsed / 60000);
    return '' + mins + ' min ago';
  }
  /*
   * Determine if it was today
   */


  if (time.date() === currentTime.date() && time.month() === currentTime.month() && time.year() === currentTime.year()) {
    var hour = time.hour();
    var am = 'am';

    if (hour === 0) {
      hour = 12;
    } else if (hour === 12) {
      am = 'pm';
    } else if (hour > 12) {
      am = 'pm';
      hour -= 12;
    }

    var minute = time.minute();

    if (minute < 10) {
      minute = '0' + minute;
    }

    return "Today at " + hour + ':' + minute + am;
  }

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  }

  return time.format(format);
};
/**
 * Display a Unix time as an absolute time.
 * @param {int} time Unix time (seconds)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.absoluteUNIX = function (time, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  } else if (format === 'short') {
    format = 'ddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long') {
    format = 'dddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long-date') {
    format = 'dddd, M-DD-YYYY';
  } else if (format === 'short-time') {
    format = 'h:mma';
  }

  return t.format(format);
};
/**
 * Display a Unix time as a relative time.
 * @param {int} time Unix time (seconds)
 * @param {int} currentTime Current time as UNIX time (optional)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.relativeUNIX = function (time, currentTime, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);
  var c = currentTime !== undefined && currentTime !== null ? moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(currentTime) : moment__WEBPACK_IMPORTED_MODULE_0___default()();
  return this.relative(t, c, format);
};

/***/ }),

/***/ "./vendor/cl/site/js/Util/StickyNav.js":
/*!*********************************************!*\
  !*** ./vendor/cl/site/js/Util/StickyNav.js ***!
  \*********************************************/
/*! exports provided: StickyNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyNav", function() { return StickyNav; });
/**
 * Make the nav bar 'sticky'. It sticks to the top
 * of the page instead of scrolling off.
 * @param sel Selector to find the nav bar.
 * @constructor
 */
var StickyNav = function StickyNav(sel) {
  var navs = [];
  var spacer = document.createElement('div');
  var installed = false;
  var els = document.querySelectorAll(sel);

  for (var i = 0; i < els.length; i++) {
    navs.push({
      nav: els[i],
      sticky: els[i].offsetTop
    });
  }

  window.addEventListener('scroll', function (event) {
    for (var _i = 0; _i < navs.length; _i++) {
      var nav = navs[_i];

      if (window.pageYOffset >= nav.sticky) {
        if (!installed) {
          nav.nav.classList.add("cl-sticky");
          nav.nav.parentNode.appendChild(spacer);
          installed = true;
        }

        spacer.style.height = nav.nav.clientHeight + 'px';
      } else {
        if (installed) {
          nav.nav.classList.remove("cl-sticky");
          spacer.parentNode.removeChild(spacer);
          installed = false;
        }
      }
    }
  });
};

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony import */ var _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNav.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0dbf4cb0')) {
      api.createRecord('0dbf4cb0', component.options)
    } else {
      api.reload('0dbf4cb0', component.options)
    }
    module.hot.accept(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
(function () {
      api.rerender('0dbf4cb0', {
        render: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVue.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVue.js ***!
  \******************************************/
/*! exports provided: PageVue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVue", function() { return PageVue; });
/**
 * Basic Vue-based site page starter
 *
 * How to use:
 * @code
 * site.ready(() => {
 *    PageVue.create('div.cl-grade-assignment', 'Assignment Grade', GradeAssignmentVue);
 *    PageVue.create('div.cl-grades', 'Grades', GradesVue);
 * });
 * @endcode
 *
 * @constructor PageVue
 */
var PageVue = function PageVue() {};
/**
 * Create a page in a given component, replacing the provided
 * selector. The selector is assumed to contain JSON data that is
 * then provided to the component in the json property.
 *
 * @param sel Selector for a div to replace with the view.
 * @param title Initial title to apply to the page
 * @param component Component to display (Vue)
 * @param nav Optional navigation component, like PageNav
 */

PageVue.create = function (sel, title, component, nav) {
  var element = document.querySelector(sel);

  if (element === null) {
    return;
  }

  var navtag = nav !== undefined ? '<page-nav :menu="menu"></page-nav>' : '';
  var template = "<div><site-header :title=\"title\">".concat(navtag, "</site-header>\n<page-vue :json=\"json\"></page-vue><site-footer></site-footer>\n</div>");
  var Header = Site.info.header.component();
  var Footer = Site.info.footer.component();
  var json = JSON.parse(element.textContent);
  var store = Site.store;
  var site = Site.Site;
  var components = {
    'site-header': Header,
    'site-footer': Footer,
    'page-vue': component
  };

  if (nav !== undefined) {
    components['page-nav'] = nav;
  }

  new Site.Vue({
    el: element,
    site: site,
    store: store,
    data: {
      title: title,
      json: json,
      menu: []
    },
    template: template,
    components: components,
    methods: {
      /**
       * Set the site title. This can be used from
       * the child Vue's using this.$parent.setTitle('')
       * @memberof PageVue
       * @instance
       * @param {string} title Title to set
       */
      setTitle: function setTitle(title) {
        this.title = title;
        document.title = Site.info.siteName + ' ' + title;
      },
      setMenu: function setMenu(menu) {
        this.menu = menu;
      },
      getMenu: function getMenu() {
        return this.menu;
      }
    }
  });
};

/***/ }),

/***/ "./vendor/cl/users/js/Users/Membership.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Users/Membership.js ***!
  \************************************************/
/*! exports provided: Membership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return Membership; });
/**
 * @file
 * A membership associated with a user.
 *
 * This is a base object that will be inherited by
 * actual membership objects.
 */
var Membership = function Membership() {
  /// The User object for this membership
  this.user = null;
};



/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserVueBase.vue?vue&type=script&lang=js& */ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c7e4e49e')) {
      api.createRecord('c7e4e49e', component.options)
    } else {
      api.reload('c7e4e49e', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/users/js/Vue/UserVueBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserVueBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlc0VkaXRvci52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1Nsb3RFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlP2VhOGUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TbG90RWRpdG9yLnZ1ZT85OGYwIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL0NvbnNvbGUvU2NoZWR1bGVFZGl0b3IudnVlPzM1MTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlc0VkaXRvci52dWU/OTM4ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1NjaGVkdWxlVnVlLnZ1ZT8zODBiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2xvdEVkaXRvci52dWU/OTI2ZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/ZTQ0MiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1NjaGVkdWxlVnVlLnZ1ZT9kYjZkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2xvdEVkaXRvci52dWU/MjdkNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01lbWJlcnMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlRWRpdG9yLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL0NvbnNvbGUvU2NoZWR1bGVFZGl0b3IudnVlP2U1NjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlRWRpdG9yLnZ1ZT80NTQ2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZXJDb25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZXNFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvQ29uc29sZS9TY2hlZHVsZXNFZGl0b3IudnVlPzdhMzQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlc0VkaXRvci52dWU/Zjg4ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1NjaGVkdWxlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2NoZWR1bGVWdWUudnVlP2RjNzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TY2hlZHVsZVZ1ZS52dWU/NzcxYyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1NjaGVkdWxlVnVlLnZ1ZT84NmMwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2xvdC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1Nsb3RFZGl0b3IudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zY2hlZHVsZXIvanMvU2xvdEVkaXRvci52dWU/ZWVmOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1Nsb3RFZGl0b3IudnVlPzg0YjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NjaGVkdWxlci9qcy9TbG90RWRpdG9yLnZ1ZT82MjFiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1RpbWVGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVXRpbC9TdGlja3lOYXYuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VOYXYudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZT9kM2FkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZT9hMmYzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlP2I2ZTEiXSwibmFtZXMiOlsiTWVtYmVyIiwianNvbiIsIk1lbWJlcnNoaXAiLCJjYWxsIiwicm9sZSIsInVuZGVmaW5lZCIsImlkIiwic2VtZXN0ZXIiLCJzZWN0aW9uIiwiY3JlYXRlZCIsInNldFJvbGUiLCJyb2xlXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwiZ2V0U2VjdGlvbiIsInN0b3JlIiwiZ2V0dGVycyIsImdldEFzc2lnbm1lbnQiLCJhc3NpZ250YWciLCJHVUVTVCIsIlVTRVIiLCJEUk9QUEVEIiwiU1RVREVOVCIsIlNUQUZGIiwiR1JBREVSIiwiVUxBIiwiVEEiLCJJTlNUUlVDVE9SIiwiQURNSU4iLCJnZXRSb2xlcyIsInJvbGVzIiwibmFtZSIsInByaW9yaXR5Iiwic2tpcCIsIlNjaGVkdWxlRmFjdG9yeSIsIlNpdGUiLCJjb25zb2xlIiwiU2NoZWR1bGVyQ29uc29sZSIsInNldHVwIiwiQ29uc29sZSIsInRhYmxlcyIsImFkZCIsInRpdGxlIiwib3JkZXIiLCJhcGkiLCJwYWdlIiwicm91dGUiLCJjb21wb25lbnRzIiwiYWRkT3B0aW9uIiwiYXRMZWFzdCIsInJvdXRlcyIsImNvbXBvbmVudCIsIlNjaGVkdWxlc0VkaXRvclZ1ZSIsIlNjaGVkdWxlIiwiZGF0YSIsInRhZyIsInRlYW1pbmciLCJjbG9uZSIsInNpdGUiLCJyZWFkeSIsIlBhZ2VWdWUiLCJTY2hlZHVsZVZ1ZSIsIlBhZ2VOYXYiLCJTbG90IiwidGltZSIsImR1cmF0aW9uIiwidXBkYXRlZCIsImxvY2F0aW9uIiwidGVhbUlkIiwidGVhbU5hbWUiLCJtZW1iZXJJZCIsInJlcGVhdCIsImJvb2tlZCIsIlRpbWVGb3JtYXR0ZXIiLCJyZWxhdGl2ZSIsImN1cnJlbnRUaW1lIiwiZm9ybWF0IiwibW9tZW50Iiwibm93IiwiZWxhcHNlZCIsImRpZmYiLCJtaW5zIiwiTWF0aCIsImZsb29yIiwiZGF0ZSIsIm1vbnRoIiwieWVhciIsImhvdXIiLCJhbSIsIm1pbnV0ZSIsImFic29sdXRlVU5JWCIsInQiLCJ1bml4IiwicmVsYXRpdmVVTklYIiwiYyIsIlN0aWNreU5hdiIsInNlbCIsIm5hdnMiLCJzcGFjZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbnN0YWxsZWQiLCJlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsInB1c2giLCJuYXYiLCJzdGlja3kiLCJvZmZzZXRUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiaGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdnRhZyIsInRlbXBsYXRlIiwiSGVhZGVyIiwiaW5mbyIsImhlYWRlciIsIkZvb3RlciIsImZvb3RlciIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50IiwiVnVlIiwiZWwiLCJtZW51IiwibWV0aG9kcyIsInNldFRpdGxlIiwic2l0ZU5hbWUiLCJzZXRNZW51IiwiZ2V0TWVudSIsInVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFOzs7Ozs7Ozs7Ozs7QUNuUkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckMseUJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckMseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0NBQWdDLFlBQVksV0FBVyxFQUFFO0FBQ3pEO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWSxvQkFBb0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtQkFBbUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQ0FBMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3QkFBd0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwwQkFBMEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3QkFBd0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNKQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQ0FBa0M7QUFDdEQ7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUNBQXlDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWU7QUFDekMsNkJBQTZCLGlDQUFpQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLDhDQUE4QyxFQUFFO0FBQzdFLGtCQUFrQiw0Q0FBNEM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTLDBCQUEwQjtBQUNuQztBQUNBO0FBQ0EscUJBQXFCLFNBQVMscUJBQXFCLEVBQUU7QUFDckQsMEJBQTBCLHNCQUFzQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkNBOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGlvQkFBK1Y7QUFDclgsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsK0NBQStDO0FBQy9DO0FBQ0EsR0FBRyxJQUFVO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixpb0JBQStWO0FBQ3BYLHNCQUFzQixtQkFBTyxDQUFDLGlvQkFBK1Y7QUFDN1gsdURBQXVELFFBQVM7QUFDaEU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsK3FCQUFzWDtBQUM1WSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLElBQVU7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLCtxQkFBc1g7QUFDM1ksc0JBQXNCLG1CQUFPLENBQUMsK3FCQUFzWDtBQUNwWix1REFBdUQsUUFBUztBQUNoRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7O0FBS0EsSUFBSUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBU0MsSUFBVCxFQUFlO0FBQ3hCQywwRUFBVSxDQUFDQyxJQUFYLENBQWdCLElBQWhCO0FBRUEsTUFBSUMsSUFBSSxHQUFHLEdBQVg7O0FBRUEsTUFBR0gsSUFBSSxLQUFLSSxTQUFaLEVBQXVCO0FBQ25CLFNBQUtDLEVBQUwsR0FBVUwsSUFBSSxDQUFDSyxFQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQk4sSUFBSSxDQUFDTSxRQUFyQjtBQUNBLFNBQUtDLE9BQUwsR0FBZVAsSUFBSSxDQUFDTyxPQUFwQjtBQUNBLFNBQUtDLE9BQUwsR0FBZVIsSUFBSSxDQUFDUSxPQUFMLEtBQWlCSixTQUFqQixHQUE2QkosSUFBSSxDQUFDUSxPQUFsQyxHQUE0QyxJQUEzRDtBQUNBTCxRQUFJLEdBQUdILElBQUksQ0FBQ0csSUFBWjtBQUNILEdBTkQsTUFNTztBQUNILFNBQUtFLEVBQUwsR0FBVSxDQUFWLENBREcsQ0FDYTs7QUFDaEIsU0FBS0MsUUFBTCxHQUFnQixJQUFoQixDQUZHLENBRXFCOztBQUN4QixTQUFLQyxPQUFMLEdBQWUsSUFBZixDQUhHLENBR21COztBQUN0QixTQUFLQyxPQUFMLEdBQWUsSUFBZixDQUpHLENBSXFCOztBQUN4QkwsUUFBSSxHQUFHLElBQVAsQ0FMRyxDQUtnQjtBQUN0Qjs7QUFFRCxPQUFLQSxJQUFMLEdBQVksWUFBVztBQUNuQixXQUFPQSxJQUFQO0FBQ0gsR0FGRDs7QUFJQSxPQUFLTSxPQUFMLEdBQWUsVUFBU0MsS0FBVCxFQUFnQjtBQUMzQlAsUUFBSSxHQUFHTyxLQUFQO0FBQ0gsR0FGRDtBQUdILENBMUJEOztBQTRCQVgsTUFBTSxDQUFDWSxTQUFQLEdBQW1CQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1osd0VBQVUsQ0FBQ1UsU0FBekIsQ0FBbkI7QUFDQVosTUFBTSxDQUFDWSxTQUFQLENBQWlCRyxXQUFqQixHQUErQmYsTUFBL0I7QUFFQTs7Ozs7O0FBS0FBLE1BQU0sQ0FBQ1ksU0FBUCxDQUFpQkksVUFBakIsR0FBOEIsVUFBU0MsS0FBVCxFQUFnQjtBQUMxQyxTQUFPQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxnQkFBZCxFQUFnQyxLQUFLWCxRQUFyQyxFQUErQyxLQUFLQyxPQUFwRCxDQUFQO0FBQ0gsQ0FGRDtBQUlBOzs7Ozs7O0FBS0FSLE1BQU0sQ0FBQ1ksU0FBUCxDQUFpQk8sYUFBakIsR0FBaUMsVUFBU0YsS0FBVCxFQUFnQkcsU0FBaEIsRUFBMkI7QUFDeEQsTUFBTVosT0FBTyxHQUFHLEtBQUtRLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQWhCO0FBQ0EsU0FBT1QsT0FBTyxDQUFDVyxhQUFSLENBQXNCQyxTQUF0QixDQUFQO0FBQ0gsQ0FIRCxDLENBTUE7QUFDQTs7O0FBQ0FwQixNQUFNLENBQUNxQixLQUFQLEdBQWUsR0FBZixDLENBQXdCOztBQUN4QnJCLE1BQU0sQ0FBQ3NCLElBQVAsR0FBYyxHQUFkLEMsQ0FBd0I7O0FBQ3hCdEIsTUFBTSxDQUFDdUIsT0FBUCxHQUFpQixHQUFqQixDLENBQXdCOztBQUN4QnZCLE1BQU0sQ0FBQ3dCLE9BQVAsR0FBaUIsR0FBakIsQyxDQUF3Qjs7QUFDeEJ4QixNQUFNLENBQUN5QixLQUFQLEdBQWUsR0FBZixDLENBQXdCOztBQUN4QnpCLE1BQU0sQ0FBQzBCLE1BQVAsR0FBZ0IsR0FBaEIsQyxDQUF3Qjs7QUFDeEIxQixNQUFNLENBQUMyQixHQUFQLEdBQWEsR0FBYixDLENBQXdCOztBQUN4QjNCLE1BQU0sQ0FBQzRCLEVBQVAsR0FBWSxHQUFaLEMsQ0FBd0I7O0FBQ3hCNUIsTUFBTSxDQUFDNkIsVUFBUCxHQUFvQixHQUFwQixDLENBQTRCOztBQUM1QjdCLE1BQU0sQ0FBQzhCLEtBQVAsR0FBZSxHQUFmLEMsQ0FBd0I7O0FBRXhCOUIsTUFBTSxDQUFDWSxTQUFQLENBQWlCbUIsUUFBakIsR0FBNEIsWUFBVztBQUNuQyxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBQSxPQUFLLENBQUNoQyxNQUFNLENBQUNxQixLQUFSLENBQUwsR0FBc0I7QUFBQ1ksUUFBSSxFQUFFLE9BQVA7QUFBZ0JDLFlBQVEsRUFBRTtBQUExQixHQUF0QjtBQUNBRixPQUFLLENBQUNoQyxNQUFNLENBQUN1QixPQUFSLENBQUwsR0FBd0I7QUFBQ1UsUUFBSSxFQUFFLFNBQVA7QUFBa0JDLFlBQVEsRUFBRTtBQUE1QixHQUF4QjtBQUNBRixPQUFLLENBQUNoQyxNQUFNLENBQUNzQixJQUFSLENBQUwsR0FBcUI7QUFBQ1csUUFBSSxFQUFFLE1BQVA7QUFBZUMsWUFBUSxFQUFFLENBQXpCO0FBQTRCQyxRQUFJLEVBQUU7QUFBbEMsR0FBckI7QUFDQUgsT0FBSyxDQUFDaEMsTUFBTSxDQUFDd0IsT0FBUixDQUFMLEdBQXdCO0FBQUNTLFFBQUksRUFBRSxTQUFQO0FBQWtCQyxZQUFRLEVBQUU7QUFBNUIsR0FBeEI7QUFDQUYsT0FBSyxDQUFDaEMsTUFBTSxDQUFDeUIsS0FBUixDQUFMLEdBQXNCO0FBQUNRLFFBQUksRUFBRSxPQUFQO0FBQWdCQyxZQUFRLEVBQUUsQ0FBMUI7QUFBNkJDLFFBQUksRUFBRTtBQUFuQyxHQUF0QjtBQUNISCxPQUFLLENBQUNoQyxNQUFNLENBQUMwQixNQUFSLENBQUwsR0FBdUI7QUFBQ08sUUFBSSxFQUFFLFFBQVA7QUFBaUJDLFlBQVEsRUFBRTtBQUEzQixHQUF2QjtBQUNBRixPQUFLLENBQUNoQyxNQUFNLENBQUMyQixHQUFSLENBQUwsR0FBb0I7QUFBQ00sUUFBSSxFQUFFLGtDQUFQO0FBQTJDLGFBQU8sS0FBbEQ7QUFBeURDLFlBQVEsRUFBRTtBQUFuRSxHQUFwQjtBQUNHRixPQUFLLENBQUNoQyxNQUFNLENBQUM0QixFQUFSLENBQUwsR0FBbUI7QUFBQ0ssUUFBSSxFQUFFLG9CQUFQO0FBQTZCLGFBQU8sSUFBcEM7QUFBMENDLFlBQVEsRUFBRTtBQUFwRCxHQUFuQjtBQUNBRixPQUFLLENBQUNoQyxNQUFNLENBQUM2QixVQUFSLENBQUwsR0FBMkI7QUFBQ0ksUUFBSSxFQUFFLFlBQVA7QUFBcUJDLFlBQVEsRUFBRTtBQUEvQixHQUEzQjtBQUNBRixPQUFLLENBQUNoQyxNQUFNLENBQUM4QixLQUFSLENBQUwsR0FBc0I7QUFBQ0csUUFBSSxFQUFFLE9BQVA7QUFBZ0JDLFlBQVEsRUFBRTtBQUExQixHQUF0QjtBQUVBLFNBQU9GLEtBQVA7QUFDSCxDQWREOzs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTs7OztBQUtBO0NBR0E7QUFDQTtBQUNBOztBQUNBSSxtRUFBZSxDQUFDdEIsTUFBaEIsQ0FBdUJ1QixJQUFJLENBQUNBLElBQTVCLEUsQ0FFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBR0EsSUFBSSxDQUFDQSxJQUFMLENBQVVDLE9BQVYsS0FBc0JqQyxTQUF6QixFQUFvQztBQUNuQ2tDLCtFQUFnQixDQUFDQyxLQUFqQixDQUF1QkgsSUFBSSxDQUFDQSxJQUFMLENBQVVDLE9BQWpDO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTtBQUFBO0FBQTZGO0FBQzNCO0FBQ0w7OztBQUc3RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUseUZBQU07QUFDUixFQUFFLGtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiwrSUFBcUQsRUFBRTtBQUFBO0FBQzdFO0FBQ0EsZ0JBQWdCLHlGQUFNO0FBQ3RCLHlCQUF5QixrR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF3TSxDQUFnQix3UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFLTyxJQUFJQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQVcsQ0FDeEMsQ0FETTs7QUFHUEEsZ0JBQWdCLENBQUNDLEtBQWpCLEdBQXlCLFVBQVNDLE9BQVQsRUFBa0I7QUFDdkNBLFNBQU8sQ0FBQ0MsTUFBUixDQUFlQyxHQUFmLENBQW1CO0FBQ2ZDLFNBQUssRUFBRSxXQURRO0FBRWZDLFNBQUssRUFBRSxHQUZRO0FBR2ZDLE9BQUcsRUFBRTtBQUhVLEdBQW5CO0FBTUgsTUFBTUMsSUFBSSxHQUFHO0FBQUNILFNBQUssRUFBRSxNQUFSO0FBQWdCSSxTQUFLLEVBQUUsRUFBdkI7QUFBMkJILFNBQUssRUFBRTtBQUFsQyxHQUFiO0FBRUFKLFNBQU8sQ0FBQ1EsVUFBUixDQUFtQkMsU0FBbkIsQ0FBNkI7QUFDNUJDLFdBQU8sRUFBRW5ELGtFQUFNLENBQUM0QixFQURZO0FBRTVCbUIsUUFBSSxFQUFFQSxJQUZzQjtBQUc1QnZDLFdBQU8sRUFBRTtBQUFDb0MsV0FBSyxFQUFFLFFBQVI7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQUhtQjtBQUk1QkQsU0FBSyxFQUFFLFdBSnFCO0FBSzVCQyxTQUFLLEVBQUUsRUFMcUI7QUFNNUJHLFNBQUssRUFBRSxZQU5xQjtBQU81QkksVUFBTSxFQUFFLENBQ1A7QUFBQ0osV0FBSyxFQUFFLFlBQVI7QUFBc0JLLGVBQVMsRUFBRUMsNERBQWtCQTtBQUFuRCxLQURPO0FBUG9CLEdBQTdCO0FBWUEsQ0FyQkQsQzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBOEY7QUFDM0I7QUFDTDs7O0FBRzlEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGlKQUFzRCxFQUFFO0FBQUE7QUFDOUU7QUFDQSxnQkFBZ0IsMEZBQU07QUFDdEIseUJBQXlCLG1HQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXlNLENBQWdCLHlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7QUFLTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxJQUFULEVBQWU7QUFDdEMsTUFBR0EsSUFBSSxLQUFLbkQsU0FBWixFQUF1QjtBQUN0QixTQUFLQyxFQUFMLEdBQVVrRCxJQUFJLENBQUNsRCxFQUFmO0FBQ0EsU0FBS21ELEdBQUwsR0FBV0QsSUFBSSxDQUFDQyxHQUFoQjtBQUNBLFNBQUt4QixJQUFMLEdBQVl1QixJQUFJLENBQUN2QixJQUFqQjtBQUNBLFNBQUt5QixPQUFMLEdBQWVGLElBQUksQ0FBQ0UsT0FBcEI7QUFDQSxHQUxELE1BS087QUFDTixTQUFLcEQsRUFBTCxHQUFVLENBQVY7QUFDQSxTQUFLbUQsR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLeEIsSUFBTCxHQUFZLEVBQVo7QUFDQSxTQUFLeUIsT0FBTCxHQUFlLENBQWY7QUFDQTs7QUFFRCxPQUFLQyxLQUFMLEdBQWEsWUFBVztBQUN2QixXQUFPLElBQUlKLFFBQUosQ0FBYSxJQUFiLENBQVA7QUFDQSxHQUZEO0FBR0EsQ0FoQk0sQzs7Ozs7Ozs7Ozs7O0FDTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBS0E7QUFDQTtBQUNBO0FBRU8sSUFBTW5CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVyxDQUN6QyxDQURNOztBQUdQQSxlQUFlLENBQUN0QixNQUFoQixHQUF5QixVQUFTOEMsSUFBVCxFQUFlO0FBRXRDQSxNQUFJLENBQUNDLEtBQUwsQ0FBVyxZQUFNO0FBQ2RDLGtFQUFPLENBQUNoRCxNQUFSLENBQWUsc0JBQWYsRUFBdUMsVUFBdkMsRUFBbURpRCx3REFBbkQsRUFBZ0VDLGtFQUFoRTtBQUNILEdBRkE7QUFHRCxDQUxELEM7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDM0I7QUFDTDtBQUNjOzs7QUFHeEU7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBcUc7QUFDekgsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsaUlBQWtELEVBQUU7QUFBQTtBQUMxRTtBQUNBLGdCQUFnQixzRkFBTTtBQUN0Qix5QkFBeUIsK0ZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBK0wsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk47QUFBQTtBQUFBO0FBQUE7QUFBbWEsQ0FBZ0IsMGFBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDRUE7QUFBQTtBQUFPLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVNULElBQVQsRUFBZTtBQUNsQyxNQUFHQSxJQUFJLEtBQUtuRCxTQUFaLEVBQXVCO0FBQ3RCLFNBQUtDLEVBQUwsR0FBVWtELElBQUksQ0FBQ2xELEVBQWY7QUFDQSxTQUFLNEQsSUFBTCxHQUFZVixJQUFJLENBQUNVLElBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQlgsSUFBSSxDQUFDVyxRQUFyQjtBQUNBLFNBQUtDLE9BQUwsR0FBZVosSUFBSSxDQUFDWSxPQUFwQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JiLElBQUksQ0FBQ2EsUUFBckI7QUFFQSxTQUFLQyxNQUFMLEdBQWNkLElBQUksQ0FBQ2MsTUFBbkI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCZixJQUFJLENBQUNlLFFBQXJCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQmhCLElBQUksQ0FBQ2dCLFFBQXJCO0FBQ0EsR0FWRCxNQVVPO0FBQ04sU0FBS2xFLEVBQUwsR0FBVSxDQUFWO0FBQ0EsU0FBSzRELElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUVBLFNBQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTs7QUFFRCxPQUFLQyxNQUFMLEdBQWMsQ0FBZDs7QUFFQSxPQUFLZCxLQUFMLEdBQWEsWUFBVztBQUN2QixXQUFPLElBQUlNLElBQUosQ0FBUyxJQUFULENBQVA7QUFDQSxHQUZEOztBQUlBLE9BQUtTLE1BQUwsR0FBYyxZQUFXO0FBQ3hCLFdBQU8sS0FBS0osTUFBTCxLQUFnQixJQUFoQixJQUF3QixLQUFLRSxRQUFMLEtBQWtCLElBQWpEO0FBQ0EsR0FGRDtBQUdBLENBaENNLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHVKQUE2RCxFQUFFO0FBQUE7QUFDckY7QUFDQSxnQkFBZ0IsaUdBQU07QUFDdEIseUJBQXlCLDBHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQThMLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxOO0FBQUE7QUFBQTtBQUFBO0FBQTBiLENBQWdCLGljQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTljO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUlBO0FBRUE7Ozs7O0FBSU8sSUFBSUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXLENBQ3JDLENBRE07QUFHUDs7Ozs7Ozs7O0FBUUFBLGFBQWEsQ0FBQ0MsUUFBZCxHQUF5QixVQUFTVixJQUFULEVBQWVXLFdBQWYsRUFBNEJDLE1BQTVCLEVBQW9DO0FBQ3pELE1BQUdELFdBQVcsS0FBS3hFLFNBQWhCLElBQTZCd0UsV0FBVyxLQUFLLElBQWhELEVBQXNEO0FBQ2xEQSxlQUFXLEdBQUdFLDZDQUFNLENBQUNDLEdBQVAsRUFBZDtBQUNIOztBQUVELE1BQU1DLE9BQU8sR0FBR0osV0FBVyxDQUFDSyxJQUFaLENBQWlCaEIsSUFBakIsQ0FBaEI7O0FBQ0EsTUFBR2UsT0FBTyxHQUFHLEtBQWIsRUFBb0I7QUFDaEIsV0FBTyxZQUFQO0FBQ0g7O0FBRUQsTUFBR0EsT0FBTyxHQUFHLE9BQWIsRUFBc0I7QUFDbEI7QUFDQSxRQUFNRSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixPQUFPLEdBQUcsS0FBckIsQ0FBYjtBQUNBLFdBQU8sS0FBS0UsSUFBTCxHQUFZLFVBQW5CO0FBQ0g7QUFFRDs7Ozs7QUFHQSxNQUFHakIsSUFBSSxDQUFDb0IsSUFBTCxPQUFnQlQsV0FBVyxDQUFDUyxJQUFaLEVBQWhCLElBQ0NwQixJQUFJLENBQUNxQixLQUFMLE9BQWlCVixXQUFXLENBQUNVLEtBQVosRUFEbEIsSUFFQ3JCLElBQUksQ0FBQ3NCLElBQUwsT0FBZ0JYLFdBQVcsQ0FBQ1csSUFBWixFQUZwQixFQUV3QztBQUNwQyxRQUFJQyxJQUFJLEdBQUd2QixJQUFJLENBQUN1QixJQUFMLEVBQVg7QUFDQSxRQUFJQyxFQUFFLEdBQUcsSUFBVDs7QUFDQSxRQUFHRCxJQUFJLEtBQUssQ0FBWixFQUFlO0FBQ1hBLFVBQUksR0FBRyxFQUFQO0FBQ0gsS0FGRCxNQUVPLElBQUdBLElBQUksS0FBSyxFQUFaLEVBQWdCO0FBQ25CQyxRQUFFLEdBQUcsSUFBTDtBQUNILEtBRk0sTUFFQSxJQUFHRCxJQUFJLEdBQUcsRUFBVixFQUFjO0FBQ2pCQyxRQUFFLEdBQUcsSUFBTDtBQUNBRCxVQUFJLElBQUksRUFBUjtBQUNIOztBQUNELFFBQUlFLE1BQU0sR0FBR3pCLElBQUksQ0FBQ3lCLE1BQUwsRUFBYjs7QUFDQSxRQUFHQSxNQUFNLEdBQUcsRUFBWixFQUFnQjtBQUNaQSxZQUFNLEdBQUcsTUFBTUEsTUFBZjtBQUNIOztBQUVELFdBQU8sY0FBY0YsSUFBZCxHQUFxQixHQUFyQixHQUEyQkUsTUFBM0IsR0FBb0NELEVBQTNDO0FBQ0g7O0FBRUQsTUFBR1osTUFBTSxLQUFLekUsU0FBZCxFQUF5QjtBQUNyQnlFLFVBQU0sR0FBRyxvQkFBVDtBQUNIOztBQUVELFNBQU9aLElBQUksQ0FBQ1ksTUFBTCxDQUFZQSxNQUFaLENBQVA7QUFDSCxDQTdDRDtBQStDQTs7Ozs7OztBQUtBSCxhQUFhLENBQUNpQixZQUFkLEdBQTZCLFVBQVMxQixJQUFULEVBQWVZLE1BQWYsRUFBdUI7QUFDaEQsTUFBSWUsQ0FBQyxHQUFHZCw2Q0FBTSxDQUFDZSxJQUFQLENBQVk1QixJQUFaLENBQVI7O0FBQ0EsTUFBR1ksTUFBTSxLQUFLekUsU0FBZCxFQUF5QjtBQUNyQnlFLFVBQU0sR0FBRyxvQkFBVDtBQUNILEdBRkQsTUFFTyxJQUFHQSxNQUFNLEtBQUssT0FBZCxFQUF1QjtBQUM3QkEsVUFBTSxHQUFHLHlCQUFUO0FBQ0EsR0FGTSxNQUVBLElBQUdBLE1BQU0sS0FBSyxNQUFkLEVBQXNCO0FBQzVCQSxVQUFNLEdBQUcsMEJBQVQ7QUFDQSxHQUZNLE1BRUEsSUFBR0EsTUFBTSxLQUFLLFdBQWQsRUFBMkI7QUFDakNBLFVBQU0sR0FBRyxpQkFBVDtBQUNBLEdBRk0sTUFFQSxJQUFHQSxNQUFNLEtBQUssWUFBZCxFQUE0QjtBQUNsQ0EsVUFBTSxHQUFHLE9BQVQ7QUFDQTs7QUFFRCxTQUFPZSxDQUFDLENBQUNmLE1BQUYsQ0FBU0EsTUFBVCxDQUFQO0FBQ0gsQ0FmRDtBQWlCQTs7Ozs7Ozs7QUFNQUgsYUFBYSxDQUFDb0IsWUFBZCxHQUE2QixVQUFTN0IsSUFBVCxFQUFlVyxXQUFmLEVBQTRCQyxNQUE1QixFQUFvQztBQUM3RCxNQUFJZSxDQUFDLEdBQUdkLDZDQUFNLENBQUNlLElBQVAsQ0FBWTVCLElBQVosQ0FBUjtBQUNBLE1BQUk4QixDQUFDLEdBQUduQixXQUFXLEtBQUt4RSxTQUFoQixJQUE2QndFLFdBQVcsS0FBSyxJQUE3QyxHQUNKRSw2Q0FBTSxDQUFDZSxJQUFQLENBQVlqQixXQUFaLENBREksR0FDdUJFLDZDQUFNLEVBRHJDO0FBR0EsU0FBTyxLQUFLSCxRQUFMLENBQWNpQixDQUFkLEVBQWlCRyxDQUFqQixFQUFvQmxCLE1BQXBCLENBQVA7QUFDSCxDQU5ELEM7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUFBO0FBQUE7Ozs7OztBQU1PLElBQU1tQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFTQyxHQUFULEVBQWM7QUFDbkMsTUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLEtBQWhCO0FBRUEsTUFBSUMsR0FBRyxHQUFHSCxRQUFRLENBQUNJLGdCQUFULENBQTBCUCxHQUExQixDQUFWOztBQUVBLE9BQUksSUFBSVEsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDRixHQUFHLENBQUNHLE1BQW5CLEVBQTRCRCxDQUFDLEVBQTdCLEVBQWlDO0FBQzdCUCxRQUFJLENBQUNTLElBQUwsQ0FBVTtBQUNOQyxTQUFHLEVBQUdMLEdBQUcsQ0FBQ0UsQ0FBRCxDQURIO0FBRU5JLFlBQU0sRUFBRU4sR0FBRyxDQUFDRSxDQUFELENBQUgsQ0FBT0s7QUFGVCxLQUFWO0FBSUg7O0FBRURDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQ0MsS0FBRCxFQUFXO0FBQ3pDLFNBQUksSUFBSVIsRUFBQyxHQUFDLENBQVYsRUFBYUEsRUFBQyxHQUFDUCxJQUFJLENBQUNRLE1BQXBCLEVBQTRCRCxFQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFVBQUlHLEdBQUcsR0FBR1YsSUFBSSxDQUFDTyxFQUFELENBQWQ7O0FBQ0EsVUFBSU0sTUFBTSxDQUFDRyxXQUFQLElBQXNCTixHQUFHLENBQUNDLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUcsQ0FBQ1AsU0FBSixFQUFlO0FBQ1hNLGFBQUcsQ0FBQ0EsR0FBSixDQUFRTyxTQUFSLENBQWtCekUsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDQWtFLGFBQUcsQ0FBQ0EsR0FBSixDQUFRUSxVQUFSLENBQW1CQyxXQUFuQixDQUErQmxCLE1BQS9CO0FBQ0FHLG1CQUFTLEdBQUcsSUFBWjtBQUNIOztBQUNESCxjQUFNLENBQUNtQixLQUFQLENBQWFDLE1BQWIsR0FBc0JYLEdBQUcsQ0FBQ0EsR0FBSixDQUFRWSxZQUFSLEdBQXVCLElBQTdDO0FBQ0gsT0FQRCxNQU9PO0FBQ0gsWUFBR2xCLFNBQUgsRUFBYztBQUNWTSxhQUFHLENBQUNBLEdBQUosQ0FBUU8sU0FBUixDQUFrQk0sTUFBbEIsQ0FBeUIsV0FBekI7QUFDQXRCLGdCQUFNLENBQUNpQixVQUFQLENBQWtCTSxXQUFsQixDQUE4QnZCLE1BQTlCO0FBQ0FHLG1CQUFTLEdBQUcsS0FBWjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEdBbEJEO0FBb0JILENBbENNLEM7Ozs7Ozs7Ozs7OztBQ05QO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix3SEFBOEMsRUFBRTtBQUFBO0FBQ3RFO0FBQ0EsZ0JBQWdCLGtGQUFNO0FBQ3RCLHlCQUF5QiwyRkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxJQUFNekMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBVyxDQUNqQyxDQURNO0FBR1A7Ozs7Ozs7Ozs7O0FBVUFBLE9BQU8sQ0FBQ2hELE1BQVIsR0FBaUIsVUFBU29GLEdBQVQsRUFBY3RELEtBQWQsRUFBcUJTLFNBQXJCLEVBQWdDd0QsR0FBaEMsRUFBcUM7QUFDbEQsTUFBTWUsT0FBTyxHQUFHdkIsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QjNCLEdBQXZCLENBQWhCOztBQUNBLE1BQUcwQixPQUFPLEtBQUssSUFBZixFQUFxQjtBQUNqQjtBQUNIOztBQUVELE1BQUlFLE1BQU0sR0FBR2pCLEdBQUcsS0FBS3hHLFNBQVIsR0FBb0Isb0NBQXBCLEdBQTJELEVBQXhFO0FBQ0EsTUFBSTBILFFBQVEsZ0RBQXVDRCxNQUF2Qyw0RkFBWjtBQUlBLE1BQU1FLE1BQU0sR0FBRzNGLElBQUksQ0FBQzRGLElBQUwsQ0FBVUMsTUFBVixDQUFpQjdFLFNBQWpCLEVBQWY7QUFDQSxNQUFNOEUsTUFBTSxHQUFHOUYsSUFBSSxDQUFDNEYsSUFBTCxDQUFVRyxNQUFWLENBQWlCL0UsU0FBakIsRUFBZjtBQUVBLE1BQU1wRCxJQUFJLEdBQUdvSSxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsT0FBTyxDQUFDVyxXQUFuQixDQUFiO0FBRUEsTUFBTXRILEtBQUssR0FBR29CLElBQUksQ0FBQ3BCLEtBQW5CO0FBQ0EsTUFBTTJDLElBQUksR0FBR3ZCLElBQUksQ0FBQ0EsSUFBbEI7QUFFQSxNQUFNWSxVQUFVLEdBQUc7QUFDWCxtQkFBZStFLE1BREo7QUFFWCxtQkFBZUcsTUFGSjtBQUdYLGdCQUFZOUU7QUFIRCxHQUFuQjs7QUFLQSxNQUFHd0QsR0FBRyxLQUFLeEcsU0FBWCxFQUFzQjtBQUNsQjRDLGNBQVUsQ0FBQyxVQUFELENBQVYsR0FBeUI0RCxHQUF6QjtBQUNIOztBQUVELE1BQUl4RSxJQUFJLENBQUNtRyxHQUFULENBQWE7QUFDVEMsTUFBRSxFQUFFYixPQURLO0FBRVRoRSxRQUFJLEVBQUpBLElBRlM7QUFHVDNDLFNBQUssRUFBTEEsS0FIUztBQUlUdUMsUUFBSSxFQUFFO0FBQ0ZaLFdBQUssRUFBRUEsS0FETDtBQUVGM0MsVUFBSSxFQUFFQSxJQUZKO0FBR0Z5SSxVQUFJLEVBQUU7QUFISixLQUpHO0FBU1RYLFlBQVEsRUFBRUEsUUFURDtBQVVUOUUsY0FBVSxFQUFFQSxVQVZIO0FBV1QwRixXQUFPLEVBQUU7QUFDTDs7Ozs7OztBQU9BQyxjQUFRLEVBQUUsa0JBQVNoRyxLQUFULEVBQWdCO0FBQ3RCLGFBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBeUQsZ0JBQVEsQ0FBQ3pELEtBQVQsR0FBaUJQLElBQUksQ0FBQzRGLElBQUwsQ0FBVVksUUFBVixHQUFxQixHQUFyQixHQUEyQmpHLEtBQTVDO0FBQ0gsT0FYSTtBQVlMa0csYUFBTyxFQUFFLGlCQUFTSixJQUFULEVBQWU7QUFDcEIsYUFBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0gsT0FkSTtBQWVMSyxhQUFPLEVBQUUsbUJBQVc7QUFDaEIsZUFBTyxLQUFLTCxJQUFaO0FBQ0g7QUFqQkk7QUFYQSxHQUFiO0FBK0JILENBM0RELEM7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7Ozs7Ozs7QUFRQSxJQUFJeEksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUV4QjtBQUNBLE9BQUs4SSxJQUFMLEdBQVksSUFBWjtBQUNILENBSkQ7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRztBQUN6SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQSx3Q0FBcU0sQ0FBZ0IscVBBQUcsRUFBQyxDIiwiZmlsZSI6InNjaGVkdWxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlNjaGVkdWxlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTY2hlZHVsZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiZWU3ZTEyM2FiMjhhYmJjYWMxOThcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIlNjaGVkdWxlclwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC9zY2hlZHVsZXIvaW5kZXguanNcIixcImNvbW1vblwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctY2wtY29sdW1uXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8cD48bGFiZWw+VGFnPGJyPjxpbnB1dCByZWY9XCJ0YWdcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzY2hlZHVsZS50YWdcIj48L2xhYmVsPjwvcD5cclxuICAgICAgICA8cD48bGFiZWw+TmFtZTxicj48aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2NoZWR1bGUubmFtZVwiPjwvbGFiZWw+PC9wPlxyXG4gICAgICAgIDxwIHYtaWY9XCJ0ZWFtaW5ncyAhPT0gbnVsbFwiPjxsYWJlbD5UZWFtaW5nPC9sYWJlbD48YnI+XHJcbiAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzY2hlZHVsZS50ZWFtaW5nXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gOnZhbHVlPVwiMFwiPk5vbmU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cInRlYW1pbmcgaW4gdGVhbWluZ3NcIiA6dmFsdWU9XCJ0ZWFtaW5nLmlkXCI+e3t0ZWFtaW5nLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICBcdHByb3BzOiBbJ3NjaGVkdWxlJywgJ3RlYW1pbmdzJ10sXHJcbiAgXHRtb3VudGVkKCkge1xyXG4gIFx0XHR0aGlzLiRyZWZzWyd0YWcnXS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiB2LWlmPVwic2NoZWR1bGVzICE9PSBudWxsXCIgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDx0YWJsZSB2LWlmPVwic2NoZWR1bGVzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgIDx0aD5UYWc8L3RoPlxyXG4gICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgPHRoIHYtaWY9XCJ0ZWFtaW5ncyAhPT0gbnVsbFwiPlRlYW1pbmc8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwic2NoZWR1bGUgaW4gc2NoZWR1bGVzXCIgOmtleT1cInNjaGVkdWxlLmlkXCI+XHJcbiAgICAgICAgICA8dGQ+PGEgQGNsaWNrLnByZXZlbnQ9XCJlZGl0ZXIoc2NoZWR1bGUpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZydcIiBhbHQ9XCJFZGl0XCIgdGl0bGU9XCJFZGl0XCI+PC9hPlxyXG4gICAgICAgICAgICA8YSBAY2xpY2sucHJldmVudD1cImRlbGV0ZXIoc2NoZWR1bGUpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cIkRlbGV0ZVwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD48YSA6aHJlZj1cInJvb3QgKyAnL2NsL3NjaGVkdWxlLycgKyBzY2hlZHVsZS50YWdcIj57e3NjaGVkdWxlLnRhZ319PC9hPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tzY2hlZHVsZS5uYW1lfX08L3RkPlxyXG4gICAgICAgICAgPHRkIHYtaWY9XCJ0ZWFtaW5ncyAhPT0gbnVsbFwiPnt7dGVhbWluZ05hbWUoc2NoZWR1bGUudGVhbWluZyl9fTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICA8cD5UaGVyZSBhcmUgY3VycmVudGx5IG5vIGRlZmluZWQgc2NoZWR1bGVzLjwvcD5cclxuICAgICAgICA8cD5DaG9vc2UgQWRkIFNjaGVkdWxlIHRvIGFkZCBhIG5ldyBzY2hlZHVsZS48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuICBpbXBvcnQge1NjaGVkdWxlfSBmcm9tICcuLi9TY2hlZHVsZSc7XHJcbiAgaW1wb3J0IFNjaGVkdWxlRWRpdG9yVnVlIGZyb20gJy4vU2NoZWR1bGVFZGl0b3IudnVlJztcclxuXHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gIFx0ZXh0ZW5kczogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgXHRkYXRhOiBmdW5jdGlvbigpIHtcclxuICBcdFx0cmV0dXJuIHtcclxuICBcdFx0ICB0ZWFtaW5nczogbnVsbCxcclxuICAgICAgICBzY2hlZHVsZXM6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBcdG1vdW50ZWQoKSB7XHJcbiAgXHRcdHRoaXMuc2V0VGl0bGUoJzogU2NoZWR1bGVzJyk7XHJcblx0ICAgIHRoaXMuYWRkTmF2MignQWRkIFNjaGVkdWxlJywgNSwgKCkgPT4ge1xyXG5cdFx0ICAgIHRoaXMuYWRkKCk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL3NjaGVkdWxlci9zY2hlZHVsZXMnLCB7fSlcclxuXHQgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHQgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgXHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgfSlcclxuXHQgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHQgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgXHRcdHRlYW1pbmdOYW1lKHRlYW1pbmdpZCkge1xyXG4gIFx0XHRcdGZvcihjb25zdCB0ZWFtaW5nIG9mIHRoaXMudGVhbWluZ3MpIHtcclxuICBcdFx0XHRcdGlmKCt0ZWFtaW5nLmlkID09PSArdGVhbWluZ2lkKSB7XHJcbiAgXHRcdFx0XHRcdHJldHVybiB0ZWFtaW5nLm5hbWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICBcdFx0XHRyZXR1cm4gJ05vbmUnO1xyXG4gICAgICB9LFxyXG4gIFx0XHR0YWtlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3NjaGVkdWxlcycpLmF0dHJpYnV0ZXM7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCByb3cgb2YgZGF0YSkge1xyXG4gICAgICAgICAgdGhpcy5zY2hlZHVsZXMucHVzaChuZXcgU2NoZWR1bGUocm93KSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHRcdCAgICBjb25zdCB0ZWFtaW5ncyA9IHJlc3BvbnNlLmdldERhdGEoJ3RlYW1pbmdzJyk7XHJcbiAgICAgICAgaWYodGVhbWluZ3MgIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudGVhbWluZ3MgPSB0ZWFtaW5ncy5hdHRyaWJ1dGVzO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIH0sXHJcblx0ICAgIGFkZCgpIHtcclxuXHRcdCAgICBjb25zdCBzY2hlZHVsZSA9IG5ldyBTY2hlZHVsZSgpO1xyXG5cclxuXHRcdCAgICBuZXcgRGlhbG9nKHtcclxuXHRcdFx0ICAgIHRpdGxlOiAnTmV3IFNjaGVkdWxlJyxcclxuXHRcdFx0ICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtc2NoZWR1bGVcIj48L2Rpdj4nLFxyXG4gICAgICAgICAgYWRkQ2xhc3M6ICdjbC1kaWFsb2ctbmFycm93JyxcclxuXHRcdFx0ICAgIGJ1dHRvbnM6IFtcclxuXHRcdFx0XHQgICAge1xyXG5cdFx0XHRcdFx0ICAgIGNvbnRlbnRzOiAnQWRkJyxcclxuXHRcdFx0XHRcdCAgICBmb2N1czogdHJ1ZSxcclxuXHRcdFx0XHRcdCAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG5cdFx0XHRcdFx0ICAgIFx0aWYoIXRoaXMuJHNpdGUuVGFncy52YWxpZGF0ZShzY2hlZHVsZS50YWcpKSB7XHJcblx0XHRcdFx0XHQgICAgXHRcdHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblx0XHRcdFx0XHRcdCAgICBpZihzY2hlZHVsZS5uYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdNdXN0IGVudGVyIG5hbWUnLCAnWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSBuYW1lJyxcclxuXHRcdFx0XHRcdFx0XHRcdCAgICBEaWFsb2cuTWVzc2FnZUJveC5PSyk7XHJcblx0XHRcdFx0XHRcdFx0ICAgIHJldHVybjtcclxuXHRcdFx0XHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdFx0XHRcdCAgICBsZXQgcGFyYW1zID0ge1xyXG5cdFx0XHRcdFx0XHRcdCAgICB0YWc6IHNjaGVkdWxlLnRhZy50cmltKCksXHJcblx0XHRcdFx0XHRcdFx0ICAgIG5hbWU6IHNjaGVkdWxlLm5hbWUudHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICB0ZWFtaW5nOiBzY2hlZHVsZS50ZWFtaW5nXHJcblx0XHRcdFx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9zY2hlZHVsZXIvc2NoZWR1bGVzL25ldycsIHBhcmFtcylcclxuXHRcdFx0XHRcdFx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgZGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdFx0XHRcdFx0ICAgIH0pXHJcblx0XHRcdFx0XHRcdFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgfSk7XHJcblxyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHQgICAge1xyXG5cdFx0XHRcdFx0ICAgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuXHRcdFx0XHRcdCAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG5cdFx0XHRcdFx0XHQgICAgZGlhbG9nLmNsb3NlKCk7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdCAgICBdXHJcblxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICB0aGlzLmRpYWxvZ1Z1ZShzY2hlZHVsZSk7XHJcblx0ICAgIH0sXHJcblx0ICAgIGVkaXRlcihzY2hlZHVsZSkge1xyXG5cdFx0ICAgIHNjaGVkdWxlID0gc2NoZWR1bGUuY2xvbmUoKTtcclxuXHJcblx0XHQgICAgbmV3IERpYWxvZyh7XHJcblx0XHRcdCAgICB0aXRsZTogJ0VkaXQgU2NoZWR1bGUnLFxyXG5cdFx0XHQgICAgY29udGVudDogJzxkaXYgaWQ9XCJjbC1zY2hlZHVsZVwiPjwvZGl2PicsXHJcbiAgXHRcdCAgICBhZGRDbGFzczogJ2NsLWRpYWxvZy1uYXJyb3cnLFxyXG5cdFx0XHQgICAgYnV0dG9uczogW1xyXG5cdFx0XHRcdCAgICB7XHJcblx0XHRcdFx0XHQgICAgY29udGVudHM6ICdVcGRhdGUnLFxyXG5cdFx0XHRcdFx0ICAgIGZvY3VzOiB0cnVlLFxyXG5cdFx0XHRcdFx0ICAgIGNsaWNrOiAoZGlhbG9nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZighdGhpcy4kc2l0ZS5UYWdzLnZhbGlkYXRlKHNjaGVkdWxlLnRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHRcdFx0XHRcdFx0ICAgIGlmKHNjaGVkdWxlLm5hbWUudHJpbSgpID09PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdCAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgbmFtZScsICdZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IG5hbWUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgcmV0dXJuO1xyXG5cdFx0XHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0XHRcdFx0ICAgIGxldCBwYXJhbXMgPSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGlkOiBzY2hlZHVsZS5pZCxcclxuXHRcdFx0XHRcdFx0XHQgICAgdGFnOiBzY2hlZHVsZS50YWcudHJpbSgpLFxyXG5cdFx0XHRcdFx0XHRcdCAgICBuYW1lOiBzY2hlZHVsZS5uYW1lLnRyaW0oKSxcclxuXHRcdFx0XHQgICAgICAgICAgdGVhbWluZzogc2NoZWR1bGUudGVhbWluZ1xyXG5cdFx0XHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0XHRcdFx0ICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvc2NoZWR1bGVyL3NjaGVkdWxlcy91cGRhdGUnLCBwYXJhbXMpXHJcblx0XHRcdFx0XHRcdFx0ICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHRcdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdFx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHRcdFx0ICAgIH0pO1xyXG5cclxuXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIH0sXHJcblx0XHRcdFx0ICAgIHtcclxuXHRcdFx0XHRcdCAgICBjb250ZW50czogJ0NhbmNlbCcsXHJcblx0XHRcdFx0XHQgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuXHRcdFx0XHRcdFx0ICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfVxyXG5cdFx0XHQgICAgXVxyXG5cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgdGhpcy5kaWFsb2dWdWUoc2NoZWR1bGUpO1xyXG5cdCAgICB9LFxyXG5cdCAgICBkaWFsb2dWdWUoc2NoZWR1bGUpIHtcclxuXHRcdCAgICAvLyBDcmVhdGUgYSBWdWUgaW5zaWRlIHRoZSBkaWFsb2cgYm94XHJcblx0XHQgICAgY29uc3QgdGVhbWluZ3MgPSB0aGlzLnRlYW1pbmdzO1xyXG5cclxuXHRcdCAgICBuZXcgdGhpcy4kc2l0ZS5WdWUoe1xyXG5cdFx0XHQgICAgZWw6ICcjY2wtc2NoZWR1bGUnLFxyXG5cdFx0XHQgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ICAgIHJldHVybiB7XHJcblx0XHRcdFx0XHQgICAgc2NoZWR1bGU6IHNjaGVkdWxlLFxyXG5cdFx0XHRcdFx0ICAgIHRlYW1pbmdzOiB0ZWFtaW5nc1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdCAgICB9LFxyXG5cdFx0XHQgICAgdGVtcGxhdGU6IGA8ZWRpdG9yIDpzY2hlZHVsZT1cInNjaGVkdWxlXCIgOnRlYW1pbmdzPVwidGVhbWluZ3NcIj48L2VkaXRvcj5gLFxyXG5cdFx0XHQgICAgY29tcG9uZW50czoge1xyXG5cdFx0XHRcdCAgICBlZGl0b3I6IFNjaGVkdWxlRWRpdG9yVnVlXHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfSlcclxuXHQgICAgfSxcclxuXHQgICAgZGVsZXRlcihzY2hlZHVsZSkge1xyXG5cdFx0ICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnQXJlIHlvdSBzdXJlPycsICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICcgKyBzY2hlZHVsZS5uYW1lLFxyXG5cdFx0XHQgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0tDQU5DRUwsICgpID0+IHtcclxuXHRcdFx0XHQgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9zY2hlZHVsZXIvc2NoZWR1bGVzL2RlbGV0ZScsIHtpZDogc2NoZWR1bGUuaWR9KVxyXG5cdFx0XHRcdFx0ICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHQgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0ICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdFx0ICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHRcdFx0ICAgIH0pXHJcblx0XHRcdFx0XHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHQgICAgfSk7XHJcblx0XHRcdCAgICB9KTtcclxuXHQgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtc2NoZWR1bGUtdmlld1wiPlxyXG4gICAgPGRpdiB2LWZvcj1cImRheSBvZiBkYXlzXCI+PGgyPnt7ZGF5LmRheX19IDxzcGFuIGNsYXNzPVwiY2wtaW5mb1wiPnt7ZGF5LnNsb3RzLmxlbmd0aH19IHNsb3RzL3t7ZGF5LnNsb3RzLmxlbmd0aCAtIG93bmVkRm9yRGF5KGRheSl9fSBvcGVuPC9zcGFuPjwvaDI+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dHIgdi1mb3I9XCJzbG90IG9mIGRheS5zbG90c1wiIDpjbGFzcz1cInNsb3QuYm9va2VkKCkgPyAob3duZWQoc2xvdCkgPyAnYm9va2VkIG93bmVkJyA6ICdib29rZWQnKSA6ICcnXCI+XHJcbiAgICAgICAgICA8dGQ+e3t0aW1lRm9ybWF0KHNsb3QudGltZSl9fTx0ZW1wbGF0ZSB2LWlmPVwic3RhZmZcIj48YnI+XHJcbiAgICAgICAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwiZWRpdGVyKHNsb3QpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZydcIiBhbHQ9XCJFZGl0XCIgdGl0bGU9XCJFZGl0XCI+PC9hPjxicj5cclxuICAgICAgICAgICAgPGEgQGNsaWNrLnByZXZlbnQ9XCJkZWxldGVyKHNsb3QpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cIkRlbGV0ZVwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD48c3BhbiB2LWlmPVwic2xvdC5ib29rZWQoKVwiIGNsYXNzPVwiYm9va2VkXCI+e3tzbG90LnRlYW1OYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxhIHYtaWY9XCIhc2xvdC5ib29rZWQoKSAmJiBzbG90LnRpbWUgPiB0aW1lXCIgQGNsaWNrLnByZXZlbnQ9XCJib29rKHNsb3QpXCI+Q2xpY2sgdG8gQm9vazwvYT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsb2NhdGlvblwiPnt7c2xvdC5sb2NhdGlvbn19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic2xvdC5ib29rZWQoKSAmJiAoc3RhZmYgfHwgKG93bmVkKHNsb3QpICYmIHNsb3QudGltZSA+IHRpbWUpKVwiIGNsYXNzPVwidW5ib29rXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJ1bmJvb2soc2xvdClcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmcnXCIgYWx0PVwiVW5ib29rXCIgdGl0bGU9XCJVbmJvb2tcIj48L2E+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgaW1wb3J0IHtNZW1iZXJ9IGZyb20gJ2NvdXJzZS1jbC9qcy9NZW1iZXJzL01lbWJlcic7XHJcbiAgaW1wb3J0IHtTY2hlZHVsZX0gZnJvbSAnLi9TY2hlZHVsZSc7XHJcbiAgaW1wb3J0IHtTbG90fSBmcm9tICcuL1Nsb3QnO1xyXG4gIGltcG9ydCBVc2VyVnVlQmFzZSBmcm9tICd1c2Vycy1jbC9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlJztcclxuICBpbXBvcnQgU2xvdEVkaXRvclZ1ZSBmcm9tICcuL1Nsb3RFZGl0b3IudnVlJztcclxuICBpbXBvcnQge1RpbWVGb3JtYXR0ZXJ9IGZyb20gJ3NpdGUtY2wvanMvVGltZUZvcm1hdHRlcic7XHJcbiAgaW1wb3J0IHtTdGlja3lOYXZ9IGZyb20gJ3NpdGUtY2wvanMvVXRpbC9TdGlja3lOYXYnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAnZXh0ZW5kcyc6IFVzZXJWdWVCYXNlLFxyXG4gICAgcHJvcHM6IFsnanNvbiddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNjaGVkdWxlOiBudWxsLFxyXG4gICAgICAgIGRheXM6IFtdLFxyXG4gICAgICAgIHRlYW1Nb2RlOiBmYWxzZSxcclxuICAgICAgICB0ZWFtOiBudWxsLFxyXG4gICAgICAgIHN0YWZmOiBmYWxzZSxcclxuICAgICAgICBsYXRlc3Q6IDAsXHJcbiAgICAgICAgdGltZTogMCxcclxuICAgICAgICB0aW1lcjogMFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgbmV3IFN0aWNreU5hdignbmF2LmNsLW5hdicpO1xyXG4gICAgICB0aGlzLmNsZWFyTWVudSgpO1xyXG4gICAgICB0aGlzLnNjaGVkdWxlID0gbmV3IFNjaGVkdWxlKHRoaXMuanNvbi5zY2hlZHVsZSk7XHJcbiAgICAgIHRoaXMuc2V0VGltZSgpO1xyXG5cclxuICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFRpbWUoKTtcclxuICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgIHRoaXMubmV3U2xvdHModGhpcy5qc29uLnNsb3RzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmpzb24udGVhbSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50ZWFtTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZWFtID0gdGhpcy5qc29uLnRlYW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0VGl0bGUodGhpcy5zY2hlZHVsZS5uYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhZmYgPSB0aGlzLnVzZXIuYXRMZWFzdChNZW1iZXIuU1RBRkYpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc3RhZmYpIHtcclxuICAgICAgICB0aGlzLmFkZE1lbnUoJ0FkZCBTbG90JywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hZGQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kc2l0ZS5wb2xsaW5nLmFkZENsaWVudCgnc2NoZWR1bGVyJywgKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIHBhcmFtcy5zY2hlZHVsZXIgPSB7XHJcbiAgICAgICAgICBzY2hlZHVsZUlkOiB0aGlzLnNjaGVkdWxlLmlkLFxyXG4gICAgICAgICAgYWZ0ZXI6IHRoaXMubGF0ZXN0XHJcbiAgICAgICAgfTtcclxuICAgICAgfSwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuICAgIGRlc3Ryb3llZCgpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0YWtlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3Qgc2xvdHMgPSByZXNwb25zZS5nZXREYXRhKCdzbG90cycpO1xyXG4gICAgICAgIGlmIChzbG90cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHNsb3RzLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICB0aGlzLm5ld1Nsb3RzKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb3duZWQoc2xvdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRlYW1Nb2RlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy50ZWFtICE9PSBudWxsICYmIHNsb3QudGVhbUlkID09PSB0aGlzLnRlYW0uaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyLm1lbWJlci5pZCA9PT0gc2xvdC5tZW1iZXJJZDtcclxuICAgICAgfSxcclxuICAgICAgb3duZWRGb3JEYXkoZGF5KSB7XHJcbiAgICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBzbG90IG9mIGRheS5zbG90cykge1xyXG4gICAgICAgICAgaWYoc2xvdC5ib29rZWQoKSkge1xyXG4gICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGJvb2soc2xvdCkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7aWQ6IHNsb3QuaWQsIHRlYW1Nb2RlOiB0aGlzLnRlYW1Nb2RlID8gMSA6IDB9O1xyXG4gICAgICAgIGlmICh0aGlzLnRlYW1Nb2RlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy50ZWFtICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHBhcmFtc1sndGVhbUlkJ10gPSB0aGlzLnRlYW0uaWQ7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsICdOb3QgYSBtZW1iZXIgb2YgYSB0ZWFtIScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9zY2hlZHVsZXIvc2xvdHMvJyArIHRoaXMuc2NoZWR1bGUuaWQgKyAnL2Jvb2snLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICB9LFxyXG4gICAgICB1bmJvb2soc2xvdCkge1xyXG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvc2NoZWR1bGVyL3Nsb3RzLycgKyB0aGlzLnNjaGVkdWxlLmlkICsgJy91bmJvb2snLCB7aWQ6IHNsb3QuaWR9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFrZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBuZXdTbG90cyhzbG90cykge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gQ29sbGVjdCB1cCBzbG90cyBieSBkYXlzXHJcbiAgICAgICAgLy9cclxuICAgICAgICB0aGlzLmRheXMgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGxhc3REYXkgPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXlTbG90cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHNsb3REYXRhIG9mIHNsb3RzKSB7XHJcbiAgICAgICAgICBsZXQgc2xvdCA9IG5ldyBTbG90KHNsb3REYXRhKTtcclxuICAgICAgICAgIGlmIChzbG90LnVwZGF0ZWQgPiB0aGlzLmxhdGVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhdGVzdCA9IHNsb3QudXBkYXRlZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgZGF5ID0gVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgoc2xvdC50aW1lLCAnbG9uZy1kYXRlJyk7XHJcbiAgICAgICAgICBpZiAoZGF5ICE9PSBsYXN0RGF5KSB7XHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBuZXcgZGF5XHJcbiAgICAgICAgICAgIGlmIChkYXlTbG90cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kYXlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZGF5OiBsYXN0RGF5LFxyXG4gICAgICAgICAgICAgICAgc2xvdHM6IGRheVNsb3RzXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFzdERheSA9IGRheTtcclxuICAgICAgICAgICAgZGF5U2xvdHMgPSBbXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkYXlTbG90cy5wdXNoKHNsb3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRheVNsb3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuZGF5cy5wdXNoKHtcclxuICAgICAgICAgICAgZGF5OiBsYXN0RGF5LFxyXG4gICAgICAgICAgICBzbG90czogZGF5U2xvdHNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYWRkKCkge1xyXG4gICAgICAgIGNvbnN0IHNsb3QgPSBuZXcgU2xvdCgpO1xyXG5cclxuICAgICAgICBuZXcgRGlhbG9nKHtcclxuICAgICAgICAgIHRpdGxlOiAnTmV3IFNsb3QnLFxyXG4gICAgICAgICAgY29udGVudDogJzxkaXYgaWQ9XCJjbC1zY2hlZHVsZS1zbG90XCI+PC9kaXY+JyxcclxuICAgICAgICAgIGFkZENsYXNzOiAnY2wtc2NoZWR1bGUtZGlhbG9nJyxcclxuICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRzOiAnQWRkJyxcclxuICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QudGltZSA9PT0gJycgfHwgc2xvdC50aW1lID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTXVzdCBlbnRlciB0aW1lJywgJ1lvdSBtdXN0IHByb3ZpZGUgYSBkYXRlIGFuZCB0aW1lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PSyk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICB0aW1lOiBzbG90LnRpbWUsXHJcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzbG90LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbjogc2xvdC5sb2NhdGlvbixcclxuICAgICAgICAgICAgICAgICAgcmVwZWF0OiBzbG90LnJlcGVhdFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvc2NoZWR1bGVyL3Nsb3RzLycgKyB0aGlzLnNjaGVkdWxlLmlkICsgJy9uZXcnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWtlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb250ZW50czogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ1Z1ZShzbG90KTtcclxuICAgICAgfSxcclxuICAgICAgZWRpdGVyKHNsb3QpIHtcclxuICAgICAgICBzbG90ID0gc2xvdC5jbG9uZSgpO1xyXG5cclxuICAgICAgICBuZXcgRGlhbG9nKHtcclxuICAgICAgICAgIHRpdGxlOiAnRWRpdCBTbG90JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICc8ZGl2IGlkPVwiY2wtc2NoZWR1bGUtc2xvdFwiPjwvZGl2PicsXHJcbiAgICAgICAgICBhZGRDbGFzczogJ2NsLXNjaGVkdWxlLWRpYWxvZycsXHJcbiAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb250ZW50czogJ1VwZGF0ZScsXHJcbiAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgY2xpY2s6IChkaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzbG90LnRpbWUgPT09ICcnIHx8IHNsb3QudGltZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ011c3QgZW50ZXIgdGltZScsICdZb3UgbXVzdCBwcm92aWRlIGEgZGF0ZSBhbmQgdGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0spO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHNsb3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgIHRpbWU6IHNsb3QudGltZSxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IHNsb3QuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzbG90LmxvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9zY2hlZHVsZXIvc2xvdHMvJyArIHRoaXMuc2NoZWR1bGUuaWQgKyAnL3VwZGF0ZScsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnRzOiAnQ2FuY2VsJyxcclxuICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ1Z1ZShzbG90KTtcclxuICAgICAgfSxcclxuICAgICAgZGlhbG9nVnVlKHNsb3QpIHtcclxuICAgICAgICAvLyBDcmVhdGUgYSBWdWUgaW5zaWRlIHRoZSBkaWFsb2cgYm94XHJcblxyXG4gICAgICAgIG5ldyB0aGlzLiRzaXRlLlZ1ZSh7XHJcbiAgICAgICAgICBlbDogJyNjbC1zY2hlZHVsZS1zbG90JyxcclxuICAgICAgICAgIHNpdGU6IHRoaXMuJHNpdGUsXHJcbiAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgc2xvdDogc2xvdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGVtcGxhdGU6IGA8ZWRpdG9yIDpzY2hlZHVsZS1zbG90PVwic2xvdFwiPjwvZWRpdG9yPmAsXHJcbiAgICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIGVkaXRvcjogU2xvdEVkaXRvclZ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbGV0ZXIoc2xvdCkge1xyXG4gICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnQXJlIHlvdSBzdXJlPycsICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPycsXHJcbiAgICAgICAgICAgICAgICBEaWFsb2cuTWVzc2FnZUJveC5PS0NBTkNFTCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3NjaGVkdWxlci9zbG90cy8nICsgdGhpcy5zY2hlZHVsZS5pZCArICcvZGVsZXRlJywge2lkOiBzbG90LmlkfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRha2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVGb3JtYXQodGltZSkge1xyXG4gICAgICAgIHJldHVybiBUaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCh0aW1lLCAnc2hvcnQtdGltZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC8qIE5vdCBzY29wZWQgKi9cclxuICBkaXYuY2wtc2NoZWR1bGUtZGlhbG9nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIGRpdi5jbC1zY2hlZHVsZS12aWV3IHtcclxuICAgIGgyIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMy41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5jbC1pbmZvIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogNmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDIwZW07XHJcbiAgICAgICAgaGVpZ2h0OiA0LjVlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHJcblxyXG4gICAgICAgIHNwYW4ubG9jYXRpb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjQ1ZW0gMCAwIDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgICBjb2xvcjogIzJhMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0ci5ib29rZWQge1xyXG4gICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuXHJcbiAgICAgICAgICBzcGFuLmJvb2tlZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNWVtIDAgMCAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBzcGFuLnVuYm9vayB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgdG9wOiAtM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdHIub3duZWQge1xyXG4gICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWNsLWNvbHVtblwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJmbGF0cGlja3JcIj5cclxuICAgICAgICAgIDxsYWJlbD5EYXRlIGFuZCBUaW1lPGJyPlxyXG4gICAgICAgICAgPGZsYXQtcGlja3Igdi1tb2RlbD1cInRpbWVcIiA6Y29uZmlnPVwiZnBDb25maWdcIiBkYXRhLWlucHV0PjwvZmxhdC1waWNrcj5cclxuICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlIHRpdGxlPVwiVG9nZ2xlIENhbGVuZGFyXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1jYWxlbmRhclwiPjwvc3Bhbj48L2E+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD48bGFiZWw+RHVyYXRpb24gKG1pbnV0ZXMpOiA8aW5wdXQgY2xhc3M9XCJuYXJyb3dcIiB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzY2hlZHVsZVNsb3QuZHVyYXRpb25cIj48L2xhYmVsPjwvcD5cclxuICAgICAgICA8cD48bGFiZWw+TG9jYXRpb248YnI+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNjaGVkdWxlU2xvdC5sb2NhdGlvblwiPjwvbGFiZWw+PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCIgdi1pZj1cInNjaGVkdWxlU2xvdC5pZCA9PT0gMFwiPjxsYWJlbD5SZXBlYXQ6IDxpbnB1dCBjbGFzcz1cIm5hcnJvd1wiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNjaGVkdWxlU2xvdC5yZXBlYXRcIj48L2xhYmVsPjwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBmbGF0UGlja3IgZnJvbSAndnVlLWZsYXRwaWNrci1jb21wb25lbnQnO1xyXG4gIGltcG9ydCAnZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmNzcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3NjaGVkdWxlLXNsb3QnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lOiBudWxsLFxyXG4gICAgICAgIGZwQ29uZmlnOiB7XHJcbiAgICAgICAgICBlbmFibGVUaW1lOiB0cnVlLFxyXG4gICAgICAgICAgZGF0ZUZvcm1hdDogXCJtLWQtWSBoOmlLXCIsXHJcbiAgICAgICAgICB3cmFwOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAnZmxhdFBpY2tyJzogZmxhdFBpY2tyXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy50aW1lID0gdGhpcy5zY2hlZHVsZVNsb3QudGltZSAhPT0gMCA/IHRoaXMuc2NoZWR1bGVTbG90LnRpbWUgKiAxMDAwIDogbnVsbDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVkKCkge1xyXG4gICAgICBpZiAodGhpcy50aW1lID09PSBudWxsIHx8ICh0eXBlb2YgdGhpcy50aW1lKSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLnRpbWUubWF0Y2goLyhbMC05XSopLShbMC05XSopLShbMC05XSopXFxzKFswLTldKik6KFswLTldKikoW0FQXSkvKTtcclxuICAgICAgbGV0IGhvdXJzID0gK21hdGNoZXNbNF07XHJcbiAgICAgIGlmIChtYXRjaGVzWzZdID09PSAnUCcpIHtcclxuICAgICAgICBpZiAoaG91cnMgPCAxMikge1xyXG4gICAgICAgICAgaG91cnMgKz0gMTI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChob3VycyA9PT0gMTIpIHtcclxuICAgICAgICAgIGhvdXJzID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1hdGNoZXNbM10sIG1hdGNoZXNbMV0gLSAxLCBtYXRjaGVzWzJdLCBob3VycywgbWF0Y2hlc1s1XSk7XHJcbiAgICAgIHRoaXMuc2NoZWR1bGVTbG90LnRpbWUgPSB0aGlzLnRpbWUgIT09ICcnID8gTWF0aC5mbG9vcihkYXRlLmdldFRpbWUoKSAvIDEwMDApIDogMDtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5uYXJyb3cge1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8bmF2IGNsYXNzPVwiY2wtbmF2XCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3M9XCJkaXZpZGVyc1wiPlxyXG4gICAgICAgIDxsaT48YSA6aHJlZj1cImhvbWVMaW5rXCI+PHNwYW4gY2xhc3M9XCJob21lXCI+SG9tZTwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIG1lbnVcIj48YSBAY2xpY2sucHJldmVudD1cIml0ZW0uY2xpY2soKVwiPnt7aXRlbS5uYW1lfX08L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmF2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ21lbnUnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGhvbWVMaW5rOiBTaXRlLnJvb3QgKyAnLydcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPCEtLVxyXG5AZmlsZVxyXG5CYXNlIGNvbXBvbmVudCBmb3IgcGFnZXMgdGhhdCBpbmNsdWRlcyBzdXBwb3J0IGZvciB0aGlzLnVzZXJcclxuXHJcblByb3ZpZGVzOlxyXG5zZXRUaXRsZVxyXG50aGlzLnJvb3RcclxuLS0+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgICdleHRlbmRzJzogU2l0ZS5TaXRlLlBhZ2VWdWVCYXNlLFxyXG4gICAgICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgXHR1c2VyKCkge1xyXG4gICAgICAgIFx0XHRyZXR1cm4gIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlclxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5vdCBzY29wZWQgKi9cXG5kaXYuY2wtc2NoZWR1bGUtZGlhbG9nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgaDIge1xcbiAgYm9yZGVyOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjVlbTtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgc3Bhbi5jbC1pbmZvIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDAuN2VtO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB7XFxuICBib3JkZXI6IDA7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogNmVtO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XFxufVxcbmRpdi5jbC1zY2hlZHVsZS12aWV3IHRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjBlbTtcXG4gIGhlaWdodDogNC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ZDpudGgtY2hpbGQoMikgc3Bhbi5sb2NhdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ZDpudGgtY2hpbGQoMikgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjQ1ZW0gMCAwIDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjb2xvcjogIzJhMjtcXG59XFxuZGl2LmNsLXNjaGVkdWxlLXZpZXcgdGFibGUgdHI6bGFzdC1jaGlsZCB0ZDpudGgtY2hpbGQoMikge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5ib29rZWQgdGQ6bnRoLWNoaWxkKDIpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbmRpdi5jbC1zY2hlZHVsZS12aWV3IHRhYmxlIHRyLmJvb2tlZCB0ZDpudGgtY2hpbGQoMikgc3Bhbi5ib29rZWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC4yNWVtIDAgMCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5ib29rZWQgdGQ6bnRoLWNoaWxkKDIpIHNwYW4udW5ib29rIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAycHg7XFxuICB0b3A6IC0zcHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmRpdi5jbC1zY2hlZHVsZS12aWV3IHRhYmxlIHRyLmJvb2tlZCB0ZDpudGgtY2hpbGQoMikgc3Bhbi51bmJvb2sgYSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5kaXYuY2wtc2NoZWR1bGUtdmlldyB0YWJsZSB0ci5vd25lZCB0ZDpudGgtY2hpbGQoMikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmxhdHBpY2tyLWlucHV0W3JlYWRvbmx5XVtkYXRhLXYtNmYyZjMyNDBdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm5hcnJvd1tkYXRhLXYtNmYyZjMyNDBdIHtcXG4gIHdpZHRoOiAzZW07XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FmLmpzXCIsXG5cdFwiLi9hZi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci5qc1wiLFxuXHRcIi4vYXItZHpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWR6LmpzXCIsXG5cdFwiLi9hci1kei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWt3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1rdy5qc1wiLFxuXHRcIi4vYXIta3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1seVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbHkuanNcIixcblx0XCIuL2FyLWx5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbWFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLW1hLmpzXCIsXG5cdFwiLi9hci1tYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLXNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1zYS5qc1wiLFxuXHRcIi4vYXItc2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci10blwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItdG4uanNcIixcblx0XCIuL2FyLXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9helwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXouanNcIixcblx0XCIuL2F6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JlLmpzXCIsXG5cdFwiLi9iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZy5qc1wiLFxuXHRcIi4vYmcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9ibVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm0uanNcIixcblx0XCIuL2JtLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JuLmpzXCIsXG5cdFwiLi9ibi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iby5qc1wiLFxuXHRcIi4vYm8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnIuanNcIixcblx0XCIuL2JyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JzLmpzXCIsXG5cdFwiLi9icy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2NhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jYS5qc1wiLFxuXHRcIi4vY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3MuanNcIixcblx0XCIuL2NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N2LmpzXCIsXG5cdFwiLi9jdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jeS5qc1wiLFxuXHRcIi4vY3kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9kYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGEuanNcIixcblx0XCIuL2RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kZS1hdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtYXQuanNcIixcblx0XCIuL2RlLWF0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWNoLmpzXCIsXG5cdFwiLi9kZS1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS5qc1wiLFxuXHRcIi4vZHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2R2LmpzXCIsXG5cdFwiLi9kdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2VsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbC5qc1wiLFxuXHRcIi4vZWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbi1TR1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tU0cuanNcIixcblx0XCIuL2VuLVNHLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1TRy5qc1wiLFxuXHRcIi4vZW4tYXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1hdS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tYXUuanNcIixcblx0XCIuL2VuLWNhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tY2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWNhLmpzXCIsXG5cdFwiLi9lbi1nYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWdiLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1nYi5qc1wiLFxuXHRcIi4vZW4taWVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWUuanNcIixcblx0XCIuL2VuLWlsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4taWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWlsLmpzXCIsXG5cdFwiLi9lbi1uelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VuLW56LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1uei5qc1wiLFxuXHRcIi4vZW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW8uanNcIixcblx0XCIuL2VzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy5qc1wiLFxuXHRcIi4vZXMtZG9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy1kby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtZG8uanNcIixcblx0XCIuL2VzLXVzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMtdXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLXVzLmpzXCIsXG5cdFwiLi9lcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2V0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V0LmpzXCIsXG5cdFwiLi9ldVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2V1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldS5qc1wiLFxuXHRcIi4vZmFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9mYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmEuanNcIixcblx0XCIuL2ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZpLmpzXCIsXG5cdFwiLi9mb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mby5qc1wiLFxuXHRcIi4vZnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLmpzXCIsXG5cdFwiLi9mci1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jYS5qc1wiLFxuXHRcIi4vZnItY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2guanNcIixcblx0XCIuL2ZyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9meS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnkuanNcIixcblx0XCIuL2dhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nYS5qc1wiLFxuXHRcIi4vZ2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dhLmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQtY2hcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LWNoLmpzXCIsXG5cdFwiLi9pdC1jaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXQtY2guanNcIixcblx0XCIuL2l0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vamFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2phLmpzXCIsXG5cdFwiLi9qYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2p2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qdi5qc1wiLFxuXHRcIi4vanYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9rYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2EuanNcIixcblx0XCIuL2thLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2tcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2trLmpzXCIsXG5cdFwiLi9ray5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2ttXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbS5qc1wiLFxuXHRcIi4va20uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva24uanNcIixcblx0XCIuL2tuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va29cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tvLmpzXCIsXG5cdFwiLi9rby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2t1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rdS5qc1wiLFxuXHRcIi4va3UuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t1LmpzXCIsXG5cdFwiLi9reVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2t5LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9reS5qc1wiLFxuXHRcIi4vbGJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbGIuanNcIixcblx0XCIuL2xvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xvLmpzXCIsXG5cdFwiLi9sdFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdC5qc1wiLFxuXHRcIi4vbHZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9sdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHYuanNcIixcblx0XCIuL21lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21lLmpzXCIsXG5cdFwiLi9taVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21pLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9taS5qc1wiLFxuXHRcIi4vbWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWsuanNcIixcblx0XCIuL21sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbWwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21sLmpzXCIsXG5cdFwiLi9tblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21uLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbi5qc1wiLFxuXHRcIi4vbXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXIuanNcIixcblx0XCIuL21zXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXMtbXlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy1teS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMtbXkuanNcIixcblx0XCIuL21zLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy5qc1wiLFxuXHRcIi4vbXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9tdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXQuanNcIixcblx0XCIuL215XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL215LmpzXCIsXG5cdFwiLi9uYlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25iLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uYi5qc1wiLFxuXHRcIi4vbmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9uZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmUuanNcIixcblx0XCIuL25sXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbmwtYmVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC1iZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwtYmUuanNcIixcblx0XCIuL25sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC5qc1wiLFxuXHRcIi4vbm5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9ubi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbm4uanNcIixcblx0XCIuL3BhLWluXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGEtaW4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BhLWluLmpzXCIsXG5cdFwiLi9wbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3BsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wbC5qc1wiLFxuXHRcIi4vcHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9wdC1iclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LWJyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC1ici5qc1wiLFxuXHRcIi4vcHQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LmpzXCIsXG5cdFwiLi9yb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3JvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9yby5qc1wiLFxuXHRcIi4vcnVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9ydS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcnUuanNcIixcblx0XCIuL3NkXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2QuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NkLmpzXCIsXG5cdFwiLi9zZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZS5qc1wiLFxuXHRcIi4vc2lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9zaS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2kuanNcIixcblx0XCIuL3NrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2suanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NrLmpzXCIsXG5cdFwiLi9zbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zbC5qc1wiLFxuXHRcIi4vc3FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zcS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3EuanNcIixcblx0XCIuL3NyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3ItY3lybFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3ItY3lybC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3ItY3lybC5qc1wiLFxuXHRcIi4vc3IuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLmpzXCIsXG5cdFwiLi9zc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3NzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcy5qc1wiLFxuXHRcIi4vc3ZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3YuanNcIixcblx0XCIuL3N3XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vc3cuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N3LmpzXCIsXG5cdFwiLi90YVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90YS5qc1wiLFxuXHRcIi4vdGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGUuanNcIixcblx0XCIuL3RldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGV0LmpzXCIsXG5cdFwiLi90ZXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90Zy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGcuanNcIixcblx0XCIuL3RoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RoLmpzXCIsXG5cdFwiLi90bC1waFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsLXBoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bC1waC5qc1wiLFxuXHRcIi4vdGxoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90bGguanNcIixcblx0XCIuL3RsaC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3RyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ci5qc1wiLFxuXHRcIi4vdHpsXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90emwuanNcIixcblx0XCIuL3R6bC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90em1cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdHptLWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0tbGF0bi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLWxhdG4uanNcIixcblx0XCIuL3R6bS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHptLmpzXCIsXG5cdFwiLi91Zy1jblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VnLWNuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91Zy1jbi5qc1wiLFxuXHRcIi4vdWtcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91ay5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWsuanNcIixcblx0XCIuL3VyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VyLmpzXCIsXG5cdFwiLi91elwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3V6LWxhdG5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LWxhdG4uanNcIixcblx0XCIuL3V6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei5qc1wiLFxuXHRcIi4vdmlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi92aS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdmkuanNcIixcblx0XCIuL3gtcHNldWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veC1wc2V1ZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3gtcHNldWRvLmpzXCIsXG5cdFwiLi95b1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3lvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS95by5qc1wiLFxuXHRcIi4vemgtY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtY24uanNcIixcblx0XCIuL3poLWhrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtaGsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWhrLmpzXCIsXG5cdFwiLi96aC10d1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIixcblx0XCIuL3poLXR3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC10dy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZy1jbC1jb2x1bW5cIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRhZ1wiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zY2hlZHVsZS50YWcsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNjaGVkdWxlLnRhZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICByZWY6IFwidGFnXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2NoZWR1bGUudGFnIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNjaGVkdWxlLCBcInRhZ1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIk5hbWVcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2NoZWR1bGUubmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2NoZWR1bGUubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNjaGVkdWxlLm5hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2NoZWR1bGUsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnRlYW1pbmdzICE9PSBudWxsXG4gICAgICAgICAgPyBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJUZWFtaW5nXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2NoZWR1bGUudGVhbWluZyxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNjaGVkdWxlLnRlYW1pbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2NoZWR1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRlYW1pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogMCB9IH0sIFtfdm0uX3YoXCJOb25lXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZWFtaW5ncywgZnVuY3Rpb24odGVhbWluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogdGVhbWluZy5pZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRlYW1pbmcubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfdm0uc2NoZWR1bGVzICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sIFtcbiAgICAgICAgICBfdm0uc2NoZWR1bGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUYWdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0udGVhbWluZ3MgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGhcIiwgW192bS5fdihcIlRlYW1pbmdcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2NoZWR1bGVzLCBmdW5jdGlvbihzY2hlZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogc2NoZWR1bGUuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0ZXIoc2NoZWR1bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiRWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlcihzY2hlZHVsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0ucm9vdCArIFwiL2NsL3NjaGVkdWxlL1wiICsgc2NoZWR1bGUudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhzY2hlZHVsZS50YWcpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Moc2NoZWR1bGUubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGVhbWluZ3MgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGVhbWluZ05hbWUoc2NoZWR1bGUudGVhbWluZykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoZXJlIGFyZSBjdXJyZW50bHkgbm8gZGVmaW5lZCBzY2hlZHVsZXMuXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkNob29zZSBBZGQgU2NoZWR1bGUgdG8gYWRkIGEgbmV3IHNjaGVkdWxlLlwiKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1zY2hlZHVsZS12aWV3XCIgfSxcbiAgICBfdm0uX2woX3ZtLmRheXMsIGZ1bmN0aW9uKGRheSkge1xuICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJoMlwiLCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhkYXkuZGF5KSArIFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJjbC1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBfdm0uX3MoZGF5LnNsb3RzLmxlbmd0aCkgK1xuICAgICAgICAgICAgICAgIFwiIHNsb3RzL1wiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoZGF5LnNsb3RzLmxlbmd0aCAtIF92bS5vd25lZEZvckRheShkYXkpKSArXG4gICAgICAgICAgICAgICAgXCIgb3BlblwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICBfdm0uX2woZGF5LnNsb3RzLCBmdW5jdGlvbihzbG90KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBzbG90LmJvb2tlZCgpXG4gICAgICAgICAgICAgICAgICA/IF92bS5vd25lZChzbG90KVxuICAgICAgICAgICAgICAgICAgICA/IFwiYm9va2VkIG93bmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJvb2tlZFwiXG4gICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aW1lRm9ybWF0KHNsb3QudGltZSkpKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YWZmXG4gICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdGVyKHNsb3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlcihzbG90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy94LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgc2xvdC5ib29rZWQoKVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJvb2tlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2xvdC50ZWFtTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhc2xvdC5ib29rZWQoKSAmJiBzbG90LnRpbWUgPiBfdm0udGltZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYm9vayhzbG90KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDbGljayB0byBCb29rXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsb2NhdGlvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzbG90LmxvY2F0aW9uKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIHNsb3QuYm9va2VkKCkgJiZcbiAgICAgICAgICAgICAgICAgIChfdm0uc3RhZmYgfHwgKF92bS5vd25lZChzbG90KSAmJiBzbG90LnRpbWUgPiBfdm0udGltZSkpXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidW5ib29rXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51bmJvb2soc2xvdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJVbmJvb2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVW5ib29rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRpYWxvZy1jbC1jb2x1bW5cIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJmb3JtXCIsIFtcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxhdHBpY2tyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJEYXRlIGFuZCBUaW1lXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImZsYXQtcGlja3JcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbmZpZzogX3ZtLmZwQ29uZmlnLCBcImRhdGEtaW5wdXRcIjogXCJcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRpbWUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS50aW1lID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0aW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIkR1cmF0aW9uIChtaW51dGVzKTogXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2NoZWR1bGVTbG90LmR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzY2hlZHVsZVNsb3QuZHVyYXRpb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmFycm93XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2NoZWR1bGVTbG90LmR1cmF0aW9uIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNjaGVkdWxlU2xvdCwgXCJkdXJhdGlvblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIkxvY2F0aW9uXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNjaGVkdWxlU2xvdC5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2NoZWR1bGVTbG90LmxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2NoZWR1bGVTbG90LmxvY2F0aW9uIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNjaGVkdWxlU2xvdCwgXCJsb2NhdGlvblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnNjaGVkdWxlU2xvdC5pZCA9PT0gMFxuICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJSZXBlYXQ6IFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNjaGVkdWxlU2xvdC5yZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzY2hlZHVsZVNsb3QucmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hcnJvd1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2NoZWR1bGVTbG90LnJlcGVhdCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zY2hlZHVsZVNsb3QsIFwicmVwZWF0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImFcIiwgeyBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwiXCIsIHRpdGxlOiBcIlRvZ2dsZSBDYWxlbmRhclwiIH0gfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbnMtY2wgaWNvbnMtY2wtY2FsZW5kYXJcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW5hdlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhvbWVMaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW192bS5fdihcIkhvbWVcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ubWVudSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwZDk0ZmI5ZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZjJmMzI0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjYxMmY1NzkwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZjJmMzI0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TbG90RWRpdG9yLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZmMmYzMjQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7TWVtYmVyc2hpcH0gZnJvbSAnLi4vLi4vLi4vdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyc7XHJcblxyXG4vKipcclxuICogTWVtYmVyIG9mIGEgY291cnNlXHJcbiAqIEF0dGFjaGVzIHRvIGEgdXNlciBPYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5sZXQgTWVtYmVyID0gZnVuY3Rpb24oanNvbikge1xyXG4gICAgTWVtYmVyc2hpcC5jYWxsKHRoaXMpO1xyXG5cclxuICAgIGxldCByb2xlID0gJ0cnO1xyXG5cclxuICAgIGlmKGpzb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uLmlkO1xyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBqc29uLnNlbWVzdGVyO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IGpzb24uc2VjdGlvbjtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBqc29uLmNyZWF0ZWQgIT09IHVuZGVmaW5lZCA/IGpzb24uY3JlYXRlZCA6IG51bGw7XHJcbiAgICAgICAgcm9sZSA9IGpzb24ucm9sZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7ICAgIC8vIFN5c3RlbSBtZW1iZXJzaGlwIElEXHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IG51bGw7ICAgLy8gU2VtZXN0ZXIgY29kZVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IG51bGw7ICAvLyBTZWN0aW9uIElkXHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbnVsbDsgICAgLy8gV2hlbiB1c2VyIHdhcyBjcmVhdGVkXHJcbiAgICAgICAgcm9sZSA9IG51bGw7ICAgICAgIC8vIE1lbWJlcnNoaXAgcm9sZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9sZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiByb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0Um9sZSA9IGZ1bmN0aW9uKHJvbGVfKSB7XHJcbiAgICAgICAgcm9sZSA9IHJvbGVfO1xyXG4gICAgfVxyXG59XHJcblxyXG5NZW1iZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNZW1iZXJzaGlwLnByb3RvdHlwZSk7XHJcbk1lbWJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNZW1iZXI7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjb3Vyc2Ugc2VjdGlvbiBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldFNlY3Rpb24gPSBmdW5jdGlvbihzdG9yZSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10odGhpcy5zZW1lc3RlciwgdGhpcy5zZWN0aW9uKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbiBhc3NpZ25tZW50IGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcGFyYW0gYXNzaWdudGFnIEFzc2lnbm1lbnQgdGFnXHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldEFzc2lnbm1lbnQgPSBmdW5jdGlvbihzdG9yZSwgYXNzaWdudGFnKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHN0b3JlKTtcclxuICAgIHJldHVybiBzZWN0aW9uLmdldEFzc2lnbm1lbnQoYXNzaWdudGFnKTtcclxufVxyXG5cclxuXHJcbi8vIFRoZSBwb3NzaWJsZSBtZW1iZXIgcm9sZXNcclxuLy8gTXVzdCBtYXRjaCB2YWx1ZXMgaW4gTWVtYmVyLnBocFxyXG5NZW1iZXIuR1VFU1QgPSAnRyc7ICAgICAvLy88IEd1ZXN0IHVzZXIgdmlzaXRpbmcgdGhlIHNpdGVcclxuTWVtYmVyLlVTRVIgPSAnVSc7ICAgICAgLy8vPCBTdGFuZGFyZCB1c2VyIGZyb20gVXNlciwgZG9uJ3QgdXNlIGZvciBNZW1iZXJcclxuTWVtYmVyLkRST1BQRUQgPSAnRCc7ICAgLy8vPCBVc2VyIGhhcyBkcm9wcGVkIHRoZSBjb3Vyc2VcclxuTWVtYmVyLlNUVURFTlQgPSAnVCc7ICAgLy8vPCBFbnJvbGxlZCBzdHVkZW50IGluIGNvdXJzZVxyXG5NZW1iZXIuU1RBRkYgPSAnUyc7ICAgICAvLy88IEFueSBjb3Vyc2Ugc3RhZmZcclxuTWVtYmVyLkdSQURFUiA9ICdSJzsgICAgLy8vPCBHcmFkZXJzXHJcbk1lbWJlci5VTEEgPSAnTCc7ICAgICAgIC8vLzwgVW5kZXJncmFkdWF0ZSBMZWFybmluZyBBc3Npc3RhbnRcclxuTWVtYmVyLlRBID0gJ0UnOyAgICAgICAgLy8vPCBUZWFjaGluZyBhc3Npc3RhbnRcclxuTWVtYmVyLklOU1RSVUNUT1IgPSAnSSc7ICAgIC8vLzwgQ291cnNlIGluc3RydWN0b3JcclxuTWVtYmVyLkFETUlOID0gJ0EnOyAgICAgLy8vPCBBZG1pblxyXG5cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRSb2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJvbGVzID0ge307XHJcbiAgICByb2xlc1tNZW1iZXIuR1VFU1RdID0ge25hbWU6ICdHdWVzdCcsIHByaW9yaXR5OiAxfTtcclxuICAgIHJvbGVzW01lbWJlci5EUk9QUEVEXSA9IHtuYW1lOiAnRHJvcHBlZCcsIHByaW9yaXR5OiAyfTtcclxuICAgIHJvbGVzW01lbWJlci5VU0VSXSA9IHtuYW1lOiAnVXNlcicsIHByaW9yaXR5OiAzLCBza2lwOiB0cnVlfTtcclxuICAgIHJvbGVzW01lbWJlci5TVFVERU5UXSA9IHtuYW1lOiAnU3R1ZGVudCcsIHByaW9yaXR5OiA0fTtcclxuICAgIHJvbGVzW01lbWJlci5TVEFGRl0gPSB7bmFtZTogJ1N0YWZmJywgcHJpb3JpdHk6IDUsIHNraXA6IHRydWV9O1xyXG5cdHJvbGVzW01lbWJlci5HUkFERVJdID0ge25hbWU6ICdHcmFkZXInLCBwcmlvcml0eTogNn07XHJcblx0cm9sZXNbTWVtYmVyLlVMQV0gPSB7bmFtZTogJ1VuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50Jywgc2hvcnQ6ICdVTEEnLCBwcmlvcml0eTogN307XHJcbiAgICByb2xlc1tNZW1iZXIuVEFdID0ge25hbWU6ICdUZWFjaGluZyBBc3Npc3RhbnQnLCBzaG9ydDogJ1RBJywgcHJpb3JpdHk6IDh9O1xyXG4gICAgcm9sZXNbTWVtYmVyLklOU1RSVUNUT1JdID0ge25hbWU6ICdJbnN0cnVjdG9yJywgcHJpb3JpdHk6IDl9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkFETUlOXSA9IHtuYW1lOiAnQWRtaW4nLCBwcmlvcml0eTogMTAwfTtcclxuXHJcbiAgICByZXR1cm4gcm9sZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge01lbWJlcn07XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUaGUgbWFpbiBTY2hlZHVsZXIgZW50cnkgcG9pbnRcclxuICovXHJcblxyXG5pbXBvcnQge1NjaGVkdWxlRmFjdG9yeX0gZnJvbSBcIi4vanMvU2NoZWR1bGVGYWN0b3J5XCI7XHJcbmltcG9ydCB7U2NoZWR1bGVyQ29uc29sZX0gZnJvbSAnLi9qcy9Db25zb2xlL1NjaGVkdWxlckNvbnNvbGUnO1xyXG5cclxuLy9cclxuLy8gQ3JlYXRlIHRoZSBzY2hlZHVsZXIgcnVudGltZSBjb21wb25lbnRcclxuLy9cclxuU2NoZWR1bGVGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG5cclxuLy9cclxuLy8gSW5zdGFsbCB0aGUgY29uc29sZSBjb21wb25lbnRzXHJcbi8vXHJcblxyXG5pZihTaXRlLlNpdGUuY29uc29sZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0U2NoZWR1bGVyQ29uc29sZS5zZXR1cChTaXRlLlNpdGUuY29uc29sZSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TY2hlZHVsZUVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTgxYTIwMWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NoZWR1bGVFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TY2hlZHVsZUVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTgxYTIwMWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTgxYTIwMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTgxYTIwMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NjaGVkdWxlRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODFhMjAxZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ODFhMjAxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlRWRpdG9yLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODFhMjAxZSZcIiIsImltcG9ydCB7TWVtYmVyfSBmcm9tIFwiY291cnNlLWNsL2pzL01lbWJlcnMvTWVtYmVyXCI7XHJcbmltcG9ydCBTY2hlZHVsZXNFZGl0b3JWdWUgZnJvbSAnLi9TY2hlZHVsZXNFZGl0b3IudnVlJztcclxuXHJcbi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBTY2hlZHVsZXIgc3lzdGVtIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU2NoZWR1bGVyQ29uc29sZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5TY2hlZHVsZXJDb25zb2xlLnNldHVwID0gZnVuY3Rpb24oQ29uc29sZSkge1xyXG4gICAgQ29uc29sZS50YWJsZXMuYWRkKHtcclxuICAgICAgICB0aXRsZTogJ1NjaGVkdWxlcicsXHJcbiAgICAgICAgb3JkZXI6IDEwMCxcclxuICAgICAgICBhcGk6ICcvYXBpL3NjaGVkdWxlci90YWJsZXMnXHJcbiAgICB9KTtcclxuXHJcblx0Y29uc3QgcGFnZSA9IHt0aXRsZTogJ01haW4nLCByb3V0ZTogJycsIG9yZGVyOiAxfTtcclxuXHJcblx0Q29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcblx0XHRhdExlYXN0OiBNZW1iZXIuVEEsXHJcblx0XHRwYWdlOiBwYWdlLFxyXG5cdFx0c2VjdGlvbjoge3RpdGxlOiAnQ291cnNlJywgb3JkZXI6IDV9LFxyXG5cdFx0dGl0bGU6ICdTY2hlZHVsZXMnLFxyXG5cdFx0b3JkZXI6IDExLFxyXG5cdFx0cm91dGU6ICcvc2NoZWR1bGVzJyxcclxuXHRcdHJvdXRlczogW1xyXG5cdFx0XHR7cm91dGU6ICcvc2NoZWR1bGVzJywgY29tcG9uZW50OiBTY2hlZHVsZXNFZGl0b3JWdWV9XHJcblx0XHRdXHJcblx0fSk7XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NjaGVkdWxlc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmNjY2VjZTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2NoZWR1bGVzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NoZWR1bGVzRWRpdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmY2NjZWNlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmY2NjZWNlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmY2NjZWNlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2NoZWR1bGVzRWRpdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mY2NjZWNlOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmY2NjZWNlOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NjaGVkdWxlci9qcy9Db25zb2xlL1NjaGVkdWxlc0VkaXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZXNFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlc0VkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmNjY2VjZTgmXCIiLCIvKipcclxuICogT2JqZWN0IHRoZSByZXByZXNlbnRzIGEgc2NoZWR1bGVcclxuICogQHBhcmFtIGRhdGFcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU2NoZWR1bGUgPSBmdW5jdGlvbihkYXRhKSB7XHJcblx0aWYoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHR0aGlzLmlkID0gZGF0YS5pZDtcclxuXHRcdHRoaXMudGFnID0gZGF0YS50YWc7XHJcblx0XHR0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XHJcblx0XHR0aGlzLnRlYW1pbmcgPSBkYXRhLnRlYW1pbmc7XHJcblx0fSBlbHNlIHtcclxuXHRcdHRoaXMuaWQgPSAwO1xyXG5cdFx0dGhpcy50YWcgPSAnJztcclxuXHRcdHRoaXMubmFtZSA9ICcnO1xyXG5cdFx0dGhpcy50ZWFtaW5nID0gMDtcclxuXHR9XHJcblxyXG5cdHRoaXMuY2xvbmUgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBuZXcgU2NoZWR1bGUodGhpcyk7XHJcblx0fVxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFRoZSBTY2hlZHVsZSBzeXN0ZW0gY3JlYXRpb24gZmFjdG9yeS5cclxuICovXHJcblxyXG5pbXBvcnQge1BhZ2VWdWV9IGZyb20gJ3NpdGUtY2wvanMvVnVlL1BhZ2VWdWUnO1xyXG5pbXBvcnQgUGFnZU5hdiBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSc7XHJcbmltcG9ydCBTY2hlZHVsZVZ1ZSBmcm9tICcuL1NjaGVkdWxlVnVlLnZ1ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgU2NoZWR1bGVGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcblNjaGVkdWxlRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcblxyXG4gXHRzaXRlLnJlYWR5KCgpID0+IHtcclxuXHQgICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1zY2hlZHVsZS12aWV3JywgJ1NjaGVkdWxlJywgU2NoZWR1bGVWdWUsIFBhZ2VOYXYpO1xyXG5cdH0pO1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxYTQwZTBhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NjaGVkdWxlVnVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NjaGVkdWxlVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MWE0MGUwYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MWE0MGUwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MWE0MGUwYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxYTQwZTBhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxYTQwZTBhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1NjaGVkdWxlVnVlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NjaGVkdWxlVnVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TY2hlZHVsZVZ1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NoZWR1bGVWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxYTQwZTBhJlwiIiwiXHJcblxyXG5leHBvcnQgY29uc3QgU2xvdCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRpZihkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdHRoaXMuaWQgPSBkYXRhLmlkO1xyXG5cdFx0dGhpcy50aW1lID0gZGF0YS50aW1lO1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XHJcblx0XHR0aGlzLnVwZGF0ZWQgPSBkYXRhLnVwZGF0ZWQ7XHJcblx0XHR0aGlzLmxvY2F0aW9uID0gZGF0YS5sb2NhdGlvbjtcclxuXHJcblx0XHR0aGlzLnRlYW1JZCA9IGRhdGEudGVhbUlkO1xyXG5cdFx0dGhpcy50ZWFtTmFtZSA9IGRhdGEudGVhbU5hbWU7XHJcblx0XHR0aGlzLm1lbWJlcklkID0gZGF0YS5tZW1iZXJJZDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGhpcy5pZCA9IDA7XHJcblx0XHR0aGlzLnRpbWUgPSAwO1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IDEwO1xyXG5cdFx0dGhpcy51cGRhdGVkID0gMDtcclxuXHRcdHRoaXMubG9jYXRpb24gPSAnJztcclxuXHJcblx0XHR0aGlzLnRlYW1OYW1lID0gbnVsbDtcclxuXHRcdHRoaXMudGVhbUlkID0gbnVsbDtcclxuXHRcdHRoaXMubWVtYmVySWQgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0dGhpcy5yZXBlYXQgPSAxO1xyXG5cclxuXHR0aGlzLmNsb25lID0gZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gbmV3IFNsb3QodGhpcyk7XHJcblx0fVxyXG5cclxuXHR0aGlzLmJvb2tlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudGVhbUlkICE9PSBudWxsIHx8IHRoaXMubWVtYmVySWQgIT09IG51bGw7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmYyZjMyNDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmYyZjMyNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2ZjJmMzI0MFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmYyZjMyNDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmYyZjMyNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmYyZjMyNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmMmYzMjQwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZmMmYzMjQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2NoZWR1bGVyL2pzL1Nsb3RFZGl0b3IudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2xvdEVkaXRvci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02ZjJmMzI0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmYyZjMyNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nsb3RFZGl0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmMmYzMjQwJnNjb3BlZD10cnVlJlwiIiwiLypcclxuICogVXRpbGl0eSBmdW5jdGlvbnMgdG8gZm9ybWF0IHRpbWVzLlxyXG4gKi9cclxuXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbi8qKlxyXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucyB0byBmb3JtYXQgdGltZXMuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBUaW1lRm9ybWF0dGVyID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0IGEgdGltZSB0byB0aGUgZm9ybWF0IHdlIGRpc3BsYXlcclxuICogVGltZSBpcyByZWxhdGl2ZSB0byBhIHNwZWNpZmllZCB0aW1lIChvciBjdXJyZW50IHRpbWUpXHJcbiAqIEBwYXJhbSB7bW9tZW50fSB0aW1lIFRpbWUgdG8gY29udmVydCAobW9tZW50KVxyXG4gKiBAcGFyYW0ge21vbWVudH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lIChtb21lbnQpXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgTW9tZW50IGZvcm1hdFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuVGltZUZvcm1hdHRlci5yZWxhdGl2ZSA9IGZ1bmN0aW9uKHRpbWUsIGN1cnJlbnRUaW1lLCBmb3JtYXQpIHtcclxuICAgIGlmKGN1cnJlbnRUaW1lID09PSB1bmRlZmluZWQgfHwgY3VycmVudFRpbWUgPT09IG51bGwpIHtcclxuICAgICAgICBjdXJyZW50VGltZSA9IG1vbWVudC5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpbWUuZGlmZih0aW1lKTtcclxuICAgIGlmKGVsYXBzZWQgPCA2MDAwMCkge1xyXG4gICAgICAgIHJldHVybiAnPDEgbWluIGFnbyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZWxhcHNlZCA8IDM2MDAwMDApIHtcclxuICAgICAgICAvLyBXaXRoaW4gYW4gaG91ciBhZ29cclxuICAgICAgICBjb25zdCBtaW5zID0gTWF0aC5mbG9vcihlbGFwc2VkIC8gNjAwMDApO1xyXG4gICAgICAgIHJldHVybiAnJyArIG1pbnMgKyAnIG1pbiBhZ28nO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgaXQgd2FzIHRvZGF5XHJcbiAgICAgKi9cclxuICAgIGlmKHRpbWUuZGF0ZSgpID09PSBjdXJyZW50VGltZS5kYXRlKCkgJiZcclxuICAgICAgICB0aW1lLm1vbnRoKCkgPT09IGN1cnJlbnRUaW1lLm1vbnRoKCkgJiZcclxuICAgICAgICB0aW1lLnllYXIoKSA9PT0gY3VycmVudFRpbWUueWVhcigpKSB7XHJcbiAgICAgICAgbGV0IGhvdXIgPSB0aW1lLmhvdXIoKTtcclxuICAgICAgICBsZXQgYW0gPSAnYW0nO1xyXG4gICAgICAgIGlmKGhvdXIgPT09IDApIHtcclxuICAgICAgICAgICAgaG91ciA9IDEyO1xyXG4gICAgICAgIH0gZWxzZSBpZihob3VyID09PSAxMikge1xyXG4gICAgICAgICAgICBhbSA9ICdwbSdcclxuICAgICAgICB9IGVsc2UgaWYoaG91ciA+IDEyKSB7XHJcbiAgICAgICAgICAgIGFtID0gJ3BtJztcclxuICAgICAgICAgICAgaG91ciAtPSAxMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1pbnV0ZSA9IHRpbWUubWludXRlKCk7XHJcbiAgICAgICAgaWYobWludXRlIDwgMTApIHtcclxuICAgICAgICAgICAgbWludXRlID0gJzAnICsgbWludXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFwiVG9kYXkgYXQgXCIgKyBob3VyICsgJzonICsgbWludXRlICsgYW07XHJcbiAgICB9XHJcblxyXG4gICAgaWYoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBmb3JtYXQgPSAnTS1ERC1ZWVlZIGg6bW06c3NhJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGltZS5mb3JtYXQoZm9ybWF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXkgYSBVbml4IHRpbWUgYXMgYW4gYWJzb2x1dGUgdGltZS5cclxuICogQHBhcmFtIHtpbnR9IHRpbWUgVW5peCB0aW1lIChzZWNvbmRzKVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IE1vbWVudCBmb3JtYXQgb3IgJ2xvbmcnIG9yICdzaG9ydCcgZm9yIGRheXMgaW5jbHVzaW9uLlxyXG4gKi9cclxuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVggPSBmdW5jdGlvbih0aW1lLCBmb3JtYXQpIHtcclxuICAgIGxldCB0ID0gbW9tZW50LnVuaXgodGltZSk7XHJcbiAgICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvcm1hdCA9ICdNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ3Nob3J0Jykge1xyXG5cdCAgICBmb3JtYXQgPSAnZGRkLCBNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ2xvbmcnKSB7XHJcblx0ICAgIGZvcm1hdCA9ICdkZGRkLCBNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfSBlbHNlIGlmKGZvcm1hdCA9PT0gJ2xvbmctZGF0ZScpIHtcclxuXHQgICAgZm9ybWF0ID0gJ2RkZGQsIE0tREQtWVlZWSc7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnc2hvcnQtdGltZScpIHtcclxuXHQgICAgZm9ybWF0ID0gJ2g6bW1hJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdC5mb3JtYXQoZm9ybWF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3BsYXkgYSBVbml4IHRpbWUgYXMgYSByZWxhdGl2ZSB0aW1lLlxyXG4gKiBAcGFyYW0ge2ludH0gdGltZSBVbml4IHRpbWUgKHNlY29uZHMpXHJcbiAqIEBwYXJhbSB7aW50fSBjdXJyZW50VGltZSBDdXJyZW50IHRpbWUgYXMgVU5JWCB0aW1lIChvcHRpb25hbClcclxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1hdCBNb21lbnQgZm9ybWF0IG9yICdsb25nJyBvciAnc2hvcnQnIGZvciBkYXlzIGluY2x1c2lvbi5cclxuICovXHJcblRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYID0gZnVuY3Rpb24odGltZSwgY3VycmVudFRpbWUsIGZvcm1hdCkge1xyXG4gICAgbGV0IHQgPSBtb21lbnQudW5peCh0aW1lKTtcclxuICAgIGxldCBjID0gY3VycmVudFRpbWUgIT09IHVuZGVmaW5lZCAmJiBjdXJyZW50VGltZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgbW9tZW50LnVuaXgoY3VycmVudFRpbWUpIDogbW9tZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmUodCwgYywgZm9ybWF0KTtcclxufVxyXG4iLCIvKipcclxuICogTWFrZSB0aGUgbmF2IGJhciAnc3RpY2t5Jy4gSXQgc3RpY2tzIHRvIHRoZSB0b3BcclxuICogb2YgdGhlIHBhZ2UgaW5zdGVhZCBvZiBzY3JvbGxpbmcgb2ZmLlxyXG4gKiBAcGFyYW0gc2VsIFNlbGVjdG9yIHRvIGZpbmQgdGhlIG5hdiBiYXIuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN0aWNreU5hdiA9IGZ1bmN0aW9uKHNlbCkge1xyXG4gICAgbGV0IG5hdnMgPSBbXTtcclxuICAgIGxldCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBpbnN0YWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPGVscy5sZW5ndGg7ICBpKyspIHtcclxuICAgICAgICBuYXZzLnB1c2goe1xyXG4gICAgICAgICAgICBuYXY6ICBlbHNbaV0sXHJcbiAgICAgICAgICAgIHN0aWNreTogZWxzW2ldLm9mZnNldFRvcFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxuYXZzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuYXYgPSBuYXZzW2ldO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IG5hdi5zdGlja3kpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFpbnN0YWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXYubmF2LmNsYXNzTGlzdC5hZGQoXCJjbC1zdGlja3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2Lm5hdi5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHNwYWNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNwYWNlci5zdHlsZS5oZWlnaHQgPSBuYXYubmF2LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbnN0YWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXYubmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJjbC1zdGlja3lcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3BhY2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZGJmNGNiMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZGJmNGNiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZGJmNGNiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGFnZU5hdi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRiZjRjYjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGRiZjRjYjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGJmNGNiMCZcIiIsIi8qKlxyXG4gKiBCYXNpYyBWdWUtYmFzZWQgc2l0ZSBwYWdlIHN0YXJ0ZXJcclxuICpcclxuICogSG93IHRvIHVzZTpcclxuICogQGNvZGVcclxuICogc2l0ZS5yZWFkeSgoKSA9PiB7XHJcbiAqICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtZ3JhZGUtYXNzaWdubWVudCcsICdBc3NpZ25tZW50IEdyYWRlJywgR3JhZGVBc3NpZ25tZW50VnVlKTtcclxuICogICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1ncmFkZXMnLCAnR3JhZGVzJywgR3JhZGVzVnVlKTtcclxuICogfSk7XHJcbiAqIEBlbmRjb2RlXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvciBQYWdlVnVlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUGFnZVZ1ZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGEgcGFnZSBpbiBhIGdpdmVuIGNvbXBvbmVudCwgcmVwbGFjaW5nIHRoZSBwcm92aWRlZFxyXG4gKiBzZWxlY3Rvci4gVGhlIHNlbGVjdG9yIGlzIGFzc3VtZWQgdG8gY29udGFpbiBKU09OIGRhdGEgdGhhdCBpc1xyXG4gKiB0aGVuIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaW4gdGhlIGpzb24gcHJvcGVydHkuXHJcbiAqXHJcbiAqIEBwYXJhbSBzZWwgU2VsZWN0b3IgZm9yIGEgZGl2IHRvIHJlcGxhY2Ugd2l0aCB0aGUgdmlldy5cclxuICogQHBhcmFtIHRpdGxlIEluaXRpYWwgdGl0bGUgdG8gYXBwbHkgdG8gdGhlIHBhZ2VcclxuICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgdG8gZGlzcGxheSAoVnVlKVxyXG4gKiBAcGFyYW0gbmF2IE9wdGlvbmFsIG5hdmlnYXRpb24gY29tcG9uZW50LCBsaWtlIFBhZ2VOYXZcclxuICovXHJcblBhZ2VWdWUuY3JlYXRlID0gZnVuY3Rpb24oc2VsLCB0aXRsZSwgY29tcG9uZW50LCBuYXYpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbCk7XHJcbiAgICBpZihlbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuYXZ0YWcgPSBuYXYgIT09IHVuZGVmaW5lZCA/ICc8cGFnZS1uYXYgOm1lbnU9XCJtZW51XCI+PC9wYWdlLW5hdj4nIDogJyc7XHJcbiAgICBsZXQgdGVtcGxhdGUgPSBgPGRpdj48c2l0ZS1oZWFkZXIgOnRpdGxlPVwidGl0bGVcIj4ke25hdnRhZ308L3NpdGUtaGVhZGVyPlxyXG48cGFnZS12dWUgOmpzb249XCJqc29uXCI+PC9wYWdlLXZ1ZT48c2l0ZS1mb290ZXI+PC9zaXRlLWZvb3Rlcj5cclxuPC9kaXY+YDtcclxuXHJcbiAgICBjb25zdCBIZWFkZXIgPSBTaXRlLmluZm8uaGVhZGVyLmNvbXBvbmVudCgpO1xyXG4gICAgY29uc3QgRm9vdGVyID0gU2l0ZS5pbmZvLmZvb3Rlci5jb21wb25lbnQoKTtcclxuXHJcbiAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IFNpdGUuc3RvcmU7XHJcbiAgICBjb25zdCBzaXRlID0gU2l0ZS5TaXRlO1xyXG5cclxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgICdzaXRlLWhlYWRlcic6IEhlYWRlcixcclxuICAgICAgICAgICAgJ3NpdGUtZm9vdGVyJzogRm9vdGVyLFxyXG4gICAgICAgICAgICAncGFnZS12dWUnOiBjb21wb25lbnRcclxuICAgICAgICB9O1xyXG4gICAgaWYobmF2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb21wb25lbnRzWydwYWdlLW5hdiddID0gbmF2O1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBTaXRlLlZ1ZSh7XHJcbiAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgc2l0ZSxcclxuICAgICAgICBzdG9yZSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAganNvbjoganNvbixcclxuICAgICAgICAgICAgbWVudTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIFNldCB0aGUgc2l0ZSB0aXRsZS4gVGhpcyBjYW4gYmUgdXNlZCBmcm9tXHJcbiAgICAgICAgICAgICAqIHRoZSBjaGlsZCBWdWUncyB1c2luZyB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJycpXHJcbiAgICAgICAgICAgICAqIEBtZW1iZXJvZiBQYWdlVnVlXHJcbiAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUgdG8gc2V0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBzZXRUaXRsZTogZnVuY3Rpb24odGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gU2l0ZS5pbmZvLnNpdGVOYW1lICsgJyAnICsgdGl0bGU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldE1lbnU6IGZ1bmN0aW9uKG1lbnUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudSA9IG1lbnU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldE1lbnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCIvKipcclxuICogQGZpbGVcclxuICogQSBtZW1iZXJzaGlwIGFzc29jaWF0ZWQgd2l0aCBhIHVzZXIuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYSBiYXNlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5oZXJpdGVkIGJ5XHJcbiAqIGFjdHVhbCBtZW1iZXJzaGlwIG9iamVjdHMuXHJcbiAqL1xyXG5cclxudmFyIE1lbWJlcnNoaXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLy8gVGhlIFVzZXIgb2JqZWN0IGZvciB0aGlzIG1lbWJlcnNoaXBcclxuICAgIHRoaXMudXNlciA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7TWVtYmVyc2hpcH07XHJcbiIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjN2U0ZTQ5ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjN2U0ZTQ5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjN2U0ZTQ5ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==