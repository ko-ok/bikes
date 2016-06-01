var __wpo = {
  "assets": {
    "main": [
      "./manifest.json",
      "./fonts/glyphicons-halflings-regular.f4769f9bdb7466be65088239c12046d1.eot",
      "./fonts/glyphicons-halflings-regular.fa2772327f55d8198301fdb8bcfc8158.woff",
      "./fonts/glyphicons-halflings-regular.448c34a56d699c29117adc64c43affeb.woff2",
      "./fonts/glyphicons-halflings-regular.e18bbf611f2a2e43afc071aa2f4e1512.ttf",
      "./a82ae0a29a04baaba0cc7672ecf5e88a.mp4",
      "./6e1fb3780cf2dae74e69e199b84cfecb.jpg",
      "./24b356e19aae340efc4ad6aa163c15da.png",
      "./2e4d606e1ae5ae31cdc5c7177b76bd96.gif",
      "./8ee687e57c346d6be804c2630f5d2d16.jpg",
      "./fonts/glyphicons-halflings-regular.89889688147bd7575d6327160d64e760.svg",
      "./common.js.9dab1079cc2850a53a7b.js",
      "./main.f3bd1bf1072246867ee4.js",
      "./"
    ],
    "additional": [
      "./0.d112a5c4082712da5865.chunk.js",
      "./1.4ab21585e32faca2b478.chunk.js"
    ],
    "optional": []
  },
  "hashesMap": {
    "58532c72255b9c7386d9d3fd9a486541": "./manifest.json",
    "f4769f9bdb7466be65088239c12046d1": "./fonts/glyphicons-halflings-regular.f4769f9bdb7466be65088239c12046d1.eot",
    "fa2772327f55d8198301fdb8bcfc8158": "./fonts/glyphicons-halflings-regular.fa2772327f55d8198301fdb8bcfc8158.woff",
    "448c34a56d699c29117adc64c43affeb": "./fonts/glyphicons-halflings-regular.448c34a56d699c29117adc64c43affeb.woff2",
    "e18bbf611f2a2e43afc071aa2f4e1512": "./fonts/glyphicons-halflings-regular.e18bbf611f2a2e43afc071aa2f4e1512.ttf",
    "a82ae0a29a04baaba0cc7672ecf5e88a": "./a82ae0a29a04baaba0cc7672ecf5e88a.mp4",
    "6e1fb3780cf2dae74e69e199b84cfecb": "./6e1fb3780cf2dae74e69e199b84cfecb.jpg",
    "24b356e19aae340efc4ad6aa163c15da": "./24b356e19aae340efc4ad6aa163c15da.png",
    "2e4d606e1ae5ae31cdc5c7177b76bd96": "./2e4d606e1ae5ae31cdc5c7177b76bd96.gif",
    "8ee687e57c346d6be804c2630f5d2d16": "./8ee687e57c346d6be804c2630f5d2d16.jpg",
    "89889688147bd7575d6327160d64e760": "./fonts/glyphicons-halflings-regular.89889688147bd7575d6327160d64e760.svg",
    "d112a5c4082712da5865e9e0b2a42247": "./0.d112a5c4082712da5865.chunk.js",
    "4ab21585e32faca2b4789c65c3c07837": "./1.4ab21585e32faca2b478.chunk.js",
    "9dab1079cc2850a53a7ba3a2d56930d7": "./common.js.9dab1079cc2850a53a7b.js",
    "f3bd1bf1072246867ee4f59f0240fcd4": "./main.f3bd1bf1072246867ee4.js",
    "b2c9dfd9689588c5c902f99ea89863c7": "./"
  },
  "strategy": "all",
  "version": "5/31/2016, 11:41:23 PM",
  "name": "webpack-offline",
  "relativePaths": true
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


	/*** EXPORTS FROM exports-loader ***/
	module.exports = self.fetch;

/***/ },
/* 1 */
/***/ function(module, exports) {

	

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(fetch) {
	      'use strict';

	if (typeof DEBUG === 'undefined') {
	  var DEBUG = false;
	}

	function WebpackServiceWorker(params) {
	  var strategy = params.strategy;
	  var assets = params.assets;
	  var hashesMap = params.hashesMap;

	  // Not used yet
	  // const alwaysRevalidate = params.alwaysRevalidate;
	  // const ignoreSearch = params.ignoreSearch;
	  // const preferOnline = params.preferOnline;

	  var tagMap = {
	    all: params.version,
	    changed: params.version
	  };

	  var CACHE_PREFIX = params.name;
	  var CACHE_TAG = tagMap[strategy];
	  var CACHE_NAME = CACHE_PREFIX + ':' + CACHE_TAG;

	  var STORED_DATA_KEY = '__offline_webpack__data';

	  mapAssets();

	  var allAssets = [].concat(assets.main, assets.additional, assets.optional);

	  self.addEventListener('install', function (event) {
	    console.log('[SW]:', 'Install event');

	    var installing = undefined;

	    if (strategy === 'changed') {
	      installing = cacheChanged('main');
	    } else {
	      installing = cacheAssets('main');
	    }

	    event.waitUntil(installing);
	  });

	  self.addEventListener('activate', function (event) {
	    console.log('[SW]:', 'Activate event');

	    var activation = cacheAdditional();

	    // Delete all assets which name starts with CACHE_PREFIX and
	    // is not current cache (CACHE_NAME)
	    activation = activation.then(storeCacheData);
	    activation = activation.then(deleteObsolete);
	    activation = activation.then(function () {
	      if (self.clients && self.clients.claim) {
	        return self.clients.claim();
	      }
	    });

	    event.waitUntil(activation);
	  });

	  function cacheAdditional() {
	    if (!assets.additional.length) {
	      return Promise.resolve();
	    }

	    if (DEBUG) {
	      console.log('[SW]:', 'Caching additional');
	    }

	    var operation = undefined;

	    if (strategy === 'changed') {
	      operation = cacheChanged('additional');
	    } else {
	      operation = cacheAssets('additional');
	    }

	    // Ignore fail of `additional` cache section
	    return operation['catch'](function (e) {
	      console.error('[SW]:', 'Cache section `additional` failed to load');
	    });
	  }

	  function cacheAssets(section) {
	    var batch = assets[section];

	    return caches.open(CACHE_NAME).then(function (cache) {
	      return addAllNormalized(cache, batch, {
	        bust: params.version
	      });
	    }).then(function () {
	      logGroup('Cached assets: ' + section, batch);
	    })['catch'](function (e) {
	      console.error(e);
	      throw e;
	    });
	  }

	  function cacheChanged(section) {
	    return getLastCache().then(function (args) {
	      if (!args) {
	        return cacheAssets(section);
	      }

	      var lastCache = args[0];
	      var lastKeys = args[1];
	      var lastData = args[2];

	      var lastMap = lastData.hashmap;
	      var lastVersion = lastData.version;

	      if (!lastData.hashmap || lastVersion === params.version) {
	        return cacheAssets(section);
	      }

	      var lastHashedAssets = Object.keys(lastMap).map(function (hash) {
	        return lastMap[hash];
	      });

	      var lastUrls = lastKeys.map(function (req) {
	        var url = new URL(req.url);
	        url.search = '';

	        return url.toString();
	      });

	      var sectionAssets = assets[section];
	      var moved = [];
	      var changed = sectionAssets.filter(function (url) {
	        if (lastUrls.indexOf(url) === -1 || lastHashedAssets.indexOf(url) === -1) {
	          return true;
	        }

	        return false;
	      });

	      Object.keys(hashesMap).forEach(function (hash) {
	        var asset = hashesMap[hash];

	        // Return if not in sectionAssets or in changed or moved array
	        if (sectionAssets.indexOf(asset) === -1 || changed.indexOf(asset) !== -1 || moved.indexOf(asset) !== -1) return;

	        var lastAsset = lastMap[hash];

	        if (lastAsset && lastUrls.indexOf(lastAsset) !== -1) {
	          moved.push([lastAsset, asset]);
	        } else {
	          changed.push(asset);
	        }
	      });

	      logGroup('Changed assets: ' + section, changed);
	      logGroup('Moved assets: ' + section, moved);

	      var movedResponses = Promise.all(moved.map(function (pair) {
	        return lastCache.match(pair[0]).then(function (response) {
	          return [pair[1], response];
	        });
	      }));

	      return caches.open(CACHE_NAME).then(function (cache) {
	        var move = movedResponses.then(function (responses) {
	          return Promise.all(responses.map(function (pair) {
	            return cache.put(pair[0], pair[1]);
	          }));
	        });

	        return Promise.all([move, addAllNormalized(cache, changed, {
	          bust: params.version
	        })]);
	      });
	    });
	  }

	  function deleteObsolete() {
	    return caches.keys().then(function (keys) {
	      var all = keys.map(function (key) {
	        if (key.indexOf(CACHE_PREFIX) !== 0 || key.indexOf(CACHE_NAME) === 0) return;

	        console.log('[SW]:', 'Delete cache:', key);
	        return caches['delete'](key);
	      });

	      return Promise.all(all);
	    });
	  }

	  function getLastCache() {
	    return caches.keys().then(function (keys) {
	      var index = keys.length;
	      var key = undefined;

	      while (index--) {
	        key = keys[index];

	        if (key.indexOf(CACHE_PREFIX) === 0) {
	          break;
	        }
	      }

	      if (!key) return;

	      var cache = undefined;

	      return caches.open(key).then(function (_cache) {
	        cache = _cache;
	        return _cache.match(new URL(STORED_DATA_KEY, location).toString());
	      }).then(function (response) {
	        if (!response) return;

	        return Promise.all([cache, cache.keys(), response.json()]);
	      });
	    });
	  }

	  function storeCacheData() {
	    return caches.open(CACHE_NAME).then(function (cache) {
	      var data = new Response(JSON.stringify({
	        version: params.version,
	        hashmap: hashesMap
	      }));

	      return cache.put(new URL(STORED_DATA_KEY, location).toString(), data);
	    });
	  }

	  self.addEventListener('fetch', function (event) {
	    var url = new URL(event.request.url);
	    url.search = '';
	    var urlString = url.toString();

	    // Match only GET and known caches, otherwise just ignore request
	    if (event.request.method !== 'GET' || allAssets.indexOf(urlString) === -1) {
	      // Fix for https://twitter.com/wanderview/status/696819243262873600
	      if (url.origin !== location.origin && navigator.userAgent.indexOf('Firefox/44.') !== -1) {
	        event.respondWith(fetch(event.request));
	      }

	      return;
	    }

	    var resource = caches.match(urlString, {
	      cacheName: CACHE_NAME
	    })
	    // Return void if error happened (cache not found)
	    ['catch'](function () {}).then(function (response) {
	      if (response) {
	        if (DEBUG) {
	          console.log('[SW]:', 'URL [' + urlString + '] from cache');
	        }

	        return response;
	      }

	      // Load and cache known assets
	      return fetch(event.request).then(function (response) {
	        if (!response || !response.ok) {
	          if (DEBUG) {
	            console.log('[SW]:', 'URL [' + urlString + '] wrong response: [' + response.status + '] ' + response.type);
	          }

	          return response;
	        }

	        if (DEBUG) {
	          console.log('[SW]:', 'URL [' + urlString + '] fetched');
	        }

	        var responseClone = response.clone();

	        caches.open(CACHE_NAME).then(function (cache) {
	          return cache.put(urlString, responseClone);
	        }).then(function () {
	          console.log('[SW]:', 'Cache asset: ' + urlString);
	        });

	        return response;
	      });
	    });

	    event.respondWith(resource);
	  });

	  self.addEventListener('message', function (e) {
	    var data = e.data;
	    if (!data) return;

	    switch (data.action) {
	      case 'skipWaiting':
	        {
	          if (self.skipWaiting) self.skipWaiting();
	        }break;
	    }
	  });

	  function mapAssets() {
	    Object.keys(assets).forEach(function (key) {
	      assets[key] = assets[key].map(function (path) {
	        var url = new URL(path, location);
	        url.search = '';

	        return url.toString();
	      });
	    });

	    hashesMap = Object.keys(hashesMap).reduce(function (result, hash) {
	      var url = new URL(hashesMap[hash], location);
	      url.search = '';

	      result[hash] = url.toString();
	      return result;
	    }, {});
	  }
	}

	function addAllNormalized(cache, requests, options) {
	  var bustValue = options && options.bust;

	  return Promise.all(requests.map(function (request) {
	    if (bustValue) {
	      request = applyCacheBust(request, bustValue);
	    }

	    return fetch(request);
	  })).then(function (responses) {
	    if (responses.some(function (response) {
	      return !response.ok;
	    })) {
	      return Promise.reject(new Error('Wrong response status'));
	    }

	    var addAll = responses.map(function (response, i) {
	      return cache.put(requests[i], response);
	    });

	    return Promise.all(addAll);
	  });
	}

	function applyCacheBust(asset, key) {
	  var hasQuery = asset.indexOf('?') !== -1;
	  return asset + (hasQuery ? '&' : '?') + '__uncache=' + encodeURIComponent(key);
	}

	function getClientsURLs() {
	  if (!self.clients) {
	    return Promise.resolve([]);
	  }

	  return self.clients.matchAll({
	    includeUncontrolled: true
	  }).then(function (clients) {
	    if (!clients.length) return [];

	    var result = [];

	    clients.forEach(function (client) {
	      var url = new URL(client.url);
	      url.search = '';
	      url.hash = '';
	      var urlString = url.toString();

	      if (!result.length || result.indexOf(urlString) === -1) {
	        result.push(urlString);
	      }
	    });

	    return result;
	  });
	}

	function logGroup(title, assets) {
	  console.groupCollapsed('[SW]:', title);

	  assets.forEach(function (asset) {
	    console.log('Asset:', asset);
	  });

	  console.groupEnd();
	}
	      __webpack_require__(2)
	      WebpackServiceWorker(__wpo);
	      module.exports = __webpack_require__(1)
	    
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }
/******/ ]);