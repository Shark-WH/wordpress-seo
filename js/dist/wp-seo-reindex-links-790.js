yoastWebpackJsonp([18],{

/***/ 1060:
/***/ (function(module, exports) {

eval("var containerPolite, containerAssertive, previousMessage = \"\";\n\n/**\n * Build the live regions markup.\n *\n * @param {String} ariaLive Optional. Value for the \"aria-live\" attribute, default \"polite\".\n *\n * @returns {Object} $container The ARIA live region jQuery object.\n */\nvar addContainer = function( ariaLive ) {\n\tariaLive = ariaLive || \"polite\";\n\n\tvar container = document.createElement( \"div\" );\n\tcontainer.id = \"a11y-speak-\" + ariaLive;\n\tcontainer.className = \"a11y-speak-region\";\n\n\tvar screenReaderTextStyle = \"clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;\";\n\tcontainer.setAttribute( \"style\", screenReaderTextStyle );\n\n\tcontainer.setAttribute( \"aria-live\", ariaLive );\n\tcontainer.setAttribute( \"aria-relevant\", \"additions text\" );\n\tcontainer.setAttribute( \"aria-atomic\", \"true\" );\n\n\tdocument.querySelector( \"body\" ).appendChild( container );\n\treturn container;\n};\n\n/**\n * Specify a function to execute when the DOM is fully loaded.\n *\n * @param {Function} callback A function to execute after the DOM is ready.\n *\n * @returns {void}\n */\nvar domReady = function( callback ) {\n\tif ( document.readyState === \"complete\" || ( document.readyState !== \"loading\" && !document.documentElement.doScroll ) ) {\n\t\treturn callback();\n\t}\n\n\tdocument.addEventListener( \"DOMContentLoaded\", callback );\n};\n\n/**\n * Create the live regions when the DOM is fully loaded.\n */\ndomReady( function() {\n\tcontainerPolite = document.getElementById( \"a11y-speak-polite\" );\n\tcontainerAssertive = document.getElementById( \"a11y-speak-assertive\" );\n\n\tif ( containerPolite === null ) {\n\t\tcontainerPolite = addContainer( \"polite\" );\n\t}\n\tif ( containerAssertive === null ) {\n\t\tcontainerAssertive = addContainer( \"assertive\" );\n\t}\n} );\n\n/**\n * Clear the live regions.\n */\nvar clear = function() {\n\tvar regions = document.querySelectorAll( \".a11y-speak-region\" );\n\tfor ( var i = 0; i < regions.length; i++ ) {\n\t\tregions[ i ].textContent = \"\";\n\t}\n};\n\n/**\n * Update the ARIA live notification area text node.\n *\n * @param {String} message  The message to be announced by Assistive Technologies.\n * @param {String} ariaLive Optional. The politeness level for aria-live. Possible values:\n *                          polite or assertive. Default polite.\n */\nvar A11ySpeak = function( message, ariaLive ) {\n\t// Clear previous messages to allow repeated strings being read out.\n\tclear();\n\n\t/*\n\t * Strip HTML tags (if any) from the message string. Ideally, messages should\n\t * be simple strings, carefully crafted for specific use with A11ySpeak.\n\t * When re-using already existing strings this will ensure simple HTML to be\n\t * stripped out and replaced with a space. Browsers will collapse multiple\n\t * spaces natively.\n\t */\n\tmessage = message.replace( /<[^<>]+>/g, \" \" );\n\n\tif ( previousMessage === message ) {\n\t\tmessage = message + \"\\u00A0\";\n\t}\n\n\tpreviousMessage = message;\n\n\tif ( containerAssertive && \"assertive\" === ariaLive ) {\n\t\tcontainerAssertive.textContent = message;\n\t} else if ( containerPolite ) {\n\t\tcontainerPolite.textContent = message;\n\t}\n};\n\nmodule.exports = A11ySpeak;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA2MC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8vVXNlcnMvYXRpbW1lci9Eb2N1bWVudHMvY2xvbmVzL1ZWVjIvd3d3L3dvcmRwcmVzcy1kZWZhdWx0L3B1YmxpY19odG1sL3dwLWNvbnRlbnQvcGx1Z2lucy93b3JkcHJlc3Mtc2VvL25vZGVfbW9kdWxlcy9hMTF5LXNwZWFrL2ExMXktc3BlYWsuanM/YjY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29udGFpbmVyUG9saXRlLCBjb250YWluZXJBc3NlcnRpdmUsIHByZXZpb3VzTWVzc2FnZSA9IFwiXCI7XG5cbi8qKlxuICogQnVpbGQgdGhlIGxpdmUgcmVnaW9ucyBtYXJrdXAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyaWFMaXZlIE9wdGlvbmFsLiBWYWx1ZSBmb3IgdGhlIFwiYXJpYS1saXZlXCIgYXR0cmlidXRlLCBkZWZhdWx0IFwicG9saXRlXCIuXG4gKlxuICogQHJldHVybnMge09iamVjdH0gJGNvbnRhaW5lciBUaGUgQVJJQSBsaXZlIHJlZ2lvbiBqUXVlcnkgb2JqZWN0LlxuICovXG52YXIgYWRkQ29udGFpbmVyID0gZnVuY3Rpb24oIGFyaWFMaXZlICkge1xuXHRhcmlhTGl2ZSA9IGFyaWFMaXZlIHx8IFwicG9saXRlXCI7XG5cblx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcblx0Y29udGFpbmVyLmlkID0gXCJhMTF5LXNwZWFrLVwiICsgYXJpYUxpdmU7XG5cdGNvbnRhaW5lci5jbGFzc05hbWUgPSBcImExMXktc3BlYWstcmVnaW9uXCI7XG5cblx0dmFyIHNjcmVlblJlYWRlclRleHRTdHlsZSA9IFwiY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpOyBwb3NpdGlvbjogYWJzb2x1dGU7IGhlaWdodDogMXB4OyB3aWR0aDogMXB4OyBvdmVyZmxvdzogaGlkZGVuOyB3b3JkLXdyYXA6IG5vcm1hbDtcIjtcblx0Y29udGFpbmVyLnNldEF0dHJpYnV0ZSggXCJzdHlsZVwiLCBzY3JlZW5SZWFkZXJUZXh0U3R5bGUgKTtcblxuXHRjb250YWluZXIuc2V0QXR0cmlidXRlKCBcImFyaWEtbGl2ZVwiLCBhcmlhTGl2ZSApO1xuXHRjb250YWluZXIuc2V0QXR0cmlidXRlKCBcImFyaWEtcmVsZXZhbnRcIiwgXCJhZGRpdGlvbnMgdGV4dFwiICk7XG5cdGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoIFwiYXJpYS1hdG9taWNcIiwgXCJ0cnVlXCIgKTtcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBcImJvZHlcIiApLmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcblx0cmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbi8qKlxuICogU3BlY2lmeSBhIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgRE9NIGlzIGZ1bGx5IGxvYWRlZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgdGhlIERPTSBpcyByZWFkeS5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xudmFyIGRvbVJlYWR5ID0gZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRpZiAoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fCAoIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgKSApIHtcblx0XHRyZXR1cm4gY2FsbGJhY2soKTtcblx0fVxuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjYWxsYmFjayApO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGxpdmUgcmVnaW9ucyB3aGVuIHRoZSBET00gaXMgZnVsbHkgbG9hZGVkLlxuICovXG5kb21SZWFkeSggZnVuY3Rpb24oKSB7XG5cdGNvbnRhaW5lclBvbGl0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcImExMXktc3BlYWstcG9saXRlXCIgKTtcblx0Y29udGFpbmVyQXNzZXJ0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIFwiYTExeS1zcGVhay1hc3NlcnRpdmVcIiApO1xuXG5cdGlmICggY29udGFpbmVyUG9saXRlID09PSBudWxsICkge1xuXHRcdGNvbnRhaW5lclBvbGl0ZSA9IGFkZENvbnRhaW5lciggXCJwb2xpdGVcIiApO1xuXHR9XG5cdGlmICggY29udGFpbmVyQXNzZXJ0aXZlID09PSBudWxsICkge1xuXHRcdGNvbnRhaW5lckFzc2VydGl2ZSA9IGFkZENvbnRhaW5lciggXCJhc3NlcnRpdmVcIiApO1xuXHR9XG59ICk7XG5cbi8qKlxuICogQ2xlYXIgdGhlIGxpdmUgcmVnaW9ucy5cbiAqL1xudmFyIGNsZWFyID0gZnVuY3Rpb24oKSB7XG5cdHZhciByZWdpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggXCIuYTExeS1zcGVhay1yZWdpb25cIiApO1xuXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCByZWdpb25zLmxlbmd0aDsgaSsrICkge1xuXHRcdHJlZ2lvbnNbIGkgXS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdH1cbn07XG5cbi8qKlxuICogVXBkYXRlIHRoZSBBUklBIGxpdmUgbm90aWZpY2F0aW9uIGFyZWEgdGV4dCBub2RlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlICBUaGUgbWVzc2FnZSB0byBiZSBhbm5vdW5jZWQgYnkgQXNzaXN0aXZlIFRlY2hub2xvZ2llcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmlhTGl2ZSBPcHRpb25hbC4gVGhlIHBvbGl0ZW5lc3MgbGV2ZWwgZm9yIGFyaWEtbGl2ZS4gUG9zc2libGUgdmFsdWVzOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGl0ZSBvciBhc3NlcnRpdmUuIERlZmF1bHQgcG9saXRlLlxuICovXG52YXIgQTExeVNwZWFrID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGFyaWFMaXZlICkge1xuXHQvLyBDbGVhciBwcmV2aW91cyBtZXNzYWdlcyB0byBhbGxvdyByZXBlYXRlZCBzdHJpbmdzIGJlaW5nIHJlYWQgb3V0LlxuXHRjbGVhcigpO1xuXG5cdC8qXG5cdCAqIFN0cmlwIEhUTUwgdGFncyAoaWYgYW55KSBmcm9tIHRoZSBtZXNzYWdlIHN0cmluZy4gSWRlYWxseSwgbWVzc2FnZXMgc2hvdWxkXG5cdCAqIGJlIHNpbXBsZSBzdHJpbmdzLCBjYXJlZnVsbHkgY3JhZnRlZCBmb3Igc3BlY2lmaWMgdXNlIHdpdGggQTExeVNwZWFrLlxuXHQgKiBXaGVuIHJlLXVzaW5nIGFscmVhZHkgZXhpc3Rpbmcgc3RyaW5ncyB0aGlzIHdpbGwgZW5zdXJlIHNpbXBsZSBIVE1MIHRvIGJlXG5cdCAqIHN0cmlwcGVkIG91dCBhbmQgcmVwbGFjZWQgd2l0aCBhIHNwYWNlLiBCcm93c2VycyB3aWxsIGNvbGxhcHNlIG11bHRpcGxlXG5cdCAqIHNwYWNlcyBuYXRpdmVseS5cblx0ICovXG5cdG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoIC88W148Pl0rPi9nLCBcIiBcIiApO1xuXG5cdGlmICggcHJldmlvdXNNZXNzYWdlID09PSBtZXNzYWdlICkge1xuXHRcdG1lc3NhZ2UgPSBtZXNzYWdlICsgXCJcXHUwMEEwXCI7XG5cdH1cblxuXHRwcmV2aW91c01lc3NhZ2UgPSBtZXNzYWdlO1xuXG5cdGlmICggY29udGFpbmVyQXNzZXJ0aXZlICYmIFwiYXNzZXJ0aXZlXCIgPT09IGFyaWFMaXZlICkge1xuXHRcdGNvbnRhaW5lckFzc2VydGl2ZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoIGNvbnRhaW5lclBvbGl0ZSApIHtcblx0XHRjb250YWluZXJQb2xpdGUudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEExMXlTcGVhaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hdGltbWVyL0RvY3VtZW50cy9jbG9uZXMvVlZWMi93d3cvd29yZHByZXNzLWRlZmF1bHQvcHVibGljX2h0bWwvd3AtY29udGVudC9wbHVnaW5zL3dvcmRwcmVzcy1zZW8vbm9kZV9tb2R1bGVzL2ExMXktc3BlYWsvYTExeS1zcGVhay5qc1xuLy8gbW9kdWxlIGlkID0gMTA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIDExIDE4IDE5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1060\n");

/***/ }),

/***/ 1991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _a11ySpeak = __webpack_require__(1060);\n\nvar _a11ySpeak2 = _interopRequireDefault(_a11ySpeak);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* global yoastReindexLinksData, jQuery, tb_remove */\n\nvar settings = yoastReindexLinksData.data;\nvar linkIndexingCompleted = false;\n\n/**\n * Represents the progressbar for the reindexing for the links.\n */\nvar IndexProgressBar = function () {\n\n\t/**\n  * The constructor.\n  *\n  * @param {int} total The total amount of items.\n  */\n\tfunction IndexProgressBar(total) {\n\t\t_classCallCheck(this, IndexProgressBar);\n\n\t\tthis.element = jQuery(\"#wpseo_count_index_links\");\n\t\tthis.progressbarTarget = jQuery(\"#wpseo_index_links_progressbar\").progressbar({ value: 0 });\n\t\tthis.total = parseInt(total, 10);\n\t\tthis.totalProcessed = 0;\n\t}\n\n\t/**\n  * Updates the processbar.\n  *\n  * @param {int} countProcessed The amount of items that has been process.\n  *\n  * @returns {void}\n  */\n\n\n\t_createClass(IndexProgressBar, [{\n\t\tkey: \"update\",\n\t\tvalue: function update(countProcessed) {\n\t\t\tthis.totalProcessed += countProcessed;\n\t\t\tvar newWidth = this.totalProcessed * (100 / this.total);\n\n\t\t\tthis.progressbarTarget.progressbar(\"value\", Math.round(newWidth));\n\t\t\tthis.element.html(this.totalProcessed);\n\t\t}\n\n\t\t/**\n   * Completes the processbar.\n   *\n   * @returns {void}\n   */\n\n\t}, {\n\t\tkey: \"complete\",\n\t\tvalue: function complete() {\n\t\t\tthis.progressbarTarget.progressbar(\"value\", 100);\n\t\t}\n\t}]);\n\n\treturn IndexProgressBar;\n}();\n\n/**\n * Does the reindex request for the current post and updates the processbar.\n *\n * @param {IndexProgressBar} progressbar The progressbar.\n * @param {Promise.resolve}  resolve     The method to complete index process.\n *\n * @returns {void}\n */\n\n\nfunction doReindexRequest(progressbar, resolve) {\n\t// Do\n\tjQuery.ajax({\n\t\ttype: \"GET\",\n\t\turl: settings.restApi.root + settings.restApi.endpoint,\n\t\tbeforeSend: function beforeSend(xhr) {\n\t\t\txhr.setRequestHeader(\"X-WP-Nonce\", settings.restApi.nonce);\n\t\t},\n\t\tsuccess: function success(response) {\n\t\t\tvar totalIndexed = parseInt(response, 10);\n\t\t\tif (totalIndexed !== 0) {\n\t\t\t\tprogressbar.update(totalIndexed);\n\n\t\t\t\tdoReindexRequest(progressbar, resolve);\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tprogressbar.complete();\n\t\t\tresolve();\n\t\t}\n\t});\n}\n\n/**\n * Starts the reindexing of the links.\n *\n * @returns {Promise} Promise.\n */\nfunction reindexLinks() {\n\t// Do request to get post ids\n\treturn new Promise(function (resolve) {\n\t\tvar progressbar = new IndexProgressBar(settings.amount);\n\t\tdoReindexRequest(progressbar, resolve);\n\t});\n}\n\n/**\n * Sets the finish message, when indexing has been completed.\n *\n * @returns {void}\n */\nfunction completeReindexing() {\n\tlinkIndexingCompleted = true;\n\t(0, _a11ySpeak2.default)(settings.l10n.calculationCompleted);\n\tjQuery(\"#reindexLinks\").html(settings.message.indexingCompleted);\n\n\ttb_remove();\n}\n\n/**\n * Starts the reindexing of the links.\n *\n * @returns {void}\n */\nfunction startReindexing() {\n\t(0, _a11ySpeak2.default)(settings.l10n.calculationInProgress);\n\n\tvar promises = [];\n\tpromises.push(reindexLinks());\n\tPromise.all(promises).then(completeReindexing);\n}\n\n/**\n * Opens the link indexing modal.\n *\n * @returns {void}\n */\nfunction openLinkIndexing() {\n\tjQuery(\"#general-tab\").click();\n\n\tif (linkIndexingCompleted === false) {\n\t\tjQuery(\"#openLinkIndexing\").click();\n\t}\n}\n\n/**\n * Initializes the indexation of links.\n *\n * @returns {void}\n */\nfunction init() {\n\tvar recalculating = false;\n\tjQuery(\".yoast-js-calculate-index-links--all \").on(\"click\", function () {\n\t\tif (recalculating === false) {\n\t\t\tstartReindexing();\n\n\t\t\trecalculating = true;\n\t\t}\n\t});\n\n\tjQuery(\"#noticeRunLinkIndex\").click(openLinkIndexing);\n\n\tif (window.location.href.indexOf(\"&reIndexLinks=1\") !== -1) {\n\t\tjQuery(openLinkIndexing);\n\t}\n}\n\njQuery(init);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTk5MS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qcy9zcmMvd3Atc2VvLXJlaW5kZXgtbGlua3MuanM/MDFiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgeW9hc3RSZWluZGV4TGlua3NEYXRhLCBqUXVlcnksIHRiX3JlbW92ZSAqL1xuXG5sZXQgc2V0dGluZ3MgPSB5b2FzdFJlaW5kZXhMaW5rc0RhdGEuZGF0YTtcbmxldCBsaW5rSW5kZXhpbmdDb21wbGV0ZWQgPSBmYWxzZTtcblxuaW1wb3J0IGExMXlTcGVhayBmcm9tIFwiYTExeS1zcGVha1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIHByb2dyZXNzYmFyIGZvciB0aGUgcmVpbmRleGluZyBmb3IgdGhlIGxpbmtzLlxuICovXG5jbGFzcyBJbmRleFByb2dyZXNzQmFyIHtcblxuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2ludH0gdG90YWwgVGhlIHRvdGFsIGFtb3VudCBvZiBpdGVtcy5cblx0ICovXG5cdGNvbnN0cnVjdG9yKCB0b3RhbCApIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBqUXVlcnkoIFwiI3dwc2VvX2NvdW50X2luZGV4X2xpbmtzXCIgKTtcblx0XHR0aGlzLnByb2dyZXNzYmFyVGFyZ2V0ID0galF1ZXJ5KCBcIiN3cHNlb19pbmRleF9saW5rc19wcm9ncmVzc2JhclwiICkucHJvZ3Jlc3NiYXIoIHsgdmFsdWU6IDAgfSApO1xuXHRcdHRoaXMudG90YWwgPSBwYXJzZUludCggdG90YWwsIDEwICk7XG5cdFx0dGhpcy50b3RhbFByb2Nlc3NlZCA9IDA7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgcHJvY2Vzc2Jhci5cblx0ICpcblx0ICogQHBhcmFtIHtpbnR9IGNvdW50UHJvY2Vzc2VkIFRoZSBhbW91bnQgb2YgaXRlbXMgdGhhdCBoYXMgYmVlbiBwcm9jZXNzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7dm9pZH1cblx0ICovXG5cdHVwZGF0ZSggY291bnRQcm9jZXNzZWQgKSB7XG5cdFx0dGhpcy50b3RhbFByb2Nlc3NlZCArPSBjb3VudFByb2Nlc3NlZDtcblx0XHRsZXQgbmV3V2lkdGggPSB0aGlzLnRvdGFsUHJvY2Vzc2VkICogKCAxMDAgLyB0aGlzLnRvdGFsICk7XG5cblx0XHR0aGlzLnByb2dyZXNzYmFyVGFyZ2V0LnByb2dyZXNzYmFyKCBcInZhbHVlXCIsIE1hdGgucm91bmQoIG5ld1dpZHRoICkgKTtcblx0XHR0aGlzLmVsZW1lbnQuaHRtbCggdGhpcy50b3RhbFByb2Nlc3NlZCApO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBsZXRlcyB0aGUgcHJvY2Vzc2Jhci5cblx0ICpcblx0ICogQHJldHVybnMge3ZvaWR9XG5cdCAqL1xuXHRjb21wbGV0ZSgpIHtcblx0XHR0aGlzLnByb2dyZXNzYmFyVGFyZ2V0LnByb2dyZXNzYmFyKCBcInZhbHVlXCIsIDEwMCApO1xuXHR9XG5cbn1cblxuLyoqXG4gKiBEb2VzIHRoZSByZWluZGV4IHJlcXVlc3QgZm9yIHRoZSBjdXJyZW50IHBvc3QgYW5kIHVwZGF0ZXMgdGhlIHByb2Nlc3NiYXIuXG4gKlxuICogQHBhcmFtIHtJbmRleFByb2dyZXNzQmFyfSBwcm9ncmVzc2JhciBUaGUgcHJvZ3Jlc3NiYXIuXG4gKiBAcGFyYW0ge1Byb21pc2UucmVzb2x2ZX0gIHJlc29sdmUgICAgIFRoZSBtZXRob2QgdG8gY29tcGxldGUgaW5kZXggcHJvY2Vzcy5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gZG9SZWluZGV4UmVxdWVzdCggcHJvZ3Jlc3NiYXIsIHJlc29sdmUgKSB7XG5cdC8vIERvXG5cdGpRdWVyeS5hamF4KCB7XG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHR1cmw6IHNldHRpbmdzLnJlc3RBcGkucm9vdCArIHNldHRpbmdzLnJlc3RBcGkuZW5kcG9pbnQsXG5cdFx0YmVmb3JlU2VuZDogKCB4aHIgKSA9PiB7XG5cdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggXCJYLVdQLU5vbmNlXCIsIHNldHRpbmdzLnJlc3RBcGkubm9uY2UgKTtcblx0XHR9LFxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCByZXNwb25zZSApIHtcblx0XHRcdGxldCB0b3RhbEluZGV4ZWQgPSBwYXJzZUludCggcmVzcG9uc2UsIDEwICk7XG5cdFx0XHRpZiAoIHRvdGFsSW5kZXhlZCAhPT0gMCApIHtcblx0XHRcdFx0cHJvZ3Jlc3NiYXIudXBkYXRlKCB0b3RhbEluZGV4ZWQgKTtcblxuXHRcdFx0XHRkb1JlaW5kZXhSZXF1ZXN0KCBwcm9ncmVzc2JhciwgcmVzb2x2ZSApO1xuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0cHJvZ3Jlc3NiYXIuY29tcGxldGUoKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9LFxuXHR9ICk7XG59XG5cbi8qKlxuICogU3RhcnRzIHRoZSByZWluZGV4aW5nIG9mIHRoZSBsaW5rcy5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZS5cbiAqL1xuZnVuY3Rpb24gcmVpbmRleExpbmtzKCkge1xuXHQvLyBEbyByZXF1ZXN0IHRvIGdldCBwb3N0IGlkc1xuXHRyZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSApID0+IHtcblx0XHRsZXQgcHJvZ3Jlc3NiYXIgPSBuZXcgSW5kZXhQcm9ncmVzc0Jhciggc2V0dGluZ3MuYW1vdW50ICk7XG5cdFx0ZG9SZWluZGV4UmVxdWVzdCggcHJvZ3Jlc3NiYXIsIHJlc29sdmUgKTtcblx0fSApO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGZpbmlzaCBtZXNzYWdlLCB3aGVuIGluZGV4aW5nIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAqXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gY29tcGxldGVSZWluZGV4aW5nKCkge1xuXHRsaW5rSW5kZXhpbmdDb21wbGV0ZWQgPSB0cnVlO1xuXHRhMTF5U3BlYWsoIHNldHRpbmdzLmwxMG4uY2FsY3VsYXRpb25Db21wbGV0ZWQgKTtcblx0alF1ZXJ5KCBcIiNyZWluZGV4TGlua3NcIiApLmh0bWwoIHNldHRpbmdzLm1lc3NhZ2UuaW5kZXhpbmdDb21wbGV0ZWQgKTtcblxuXHR0Yl9yZW1vdmUoKTtcbn1cblxuLyoqXG4gKiBTdGFydHMgdGhlIHJlaW5kZXhpbmcgb2YgdGhlIGxpbmtzLlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzdGFydFJlaW5kZXhpbmcoKSB7XG5cdGExMXlTcGVhayggc2V0dGluZ3MubDEwbi5jYWxjdWxhdGlvbkluUHJvZ3Jlc3MgKTtcblxuXHRsZXQgcHJvbWlzZXMgPSBbXTtcblx0cHJvbWlzZXMucHVzaCggcmVpbmRleExpbmtzKCkgKTtcblx0UHJvbWlzZS5hbGwoIHByb21pc2VzICkudGhlbiggY29tcGxldGVSZWluZGV4aW5nICk7XG59XG5cbi8qKlxuICogT3BlbnMgdGhlIGxpbmsgaW5kZXhpbmcgbW9kYWwuXG4gKlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIG9wZW5MaW5rSW5kZXhpbmcoKSB7XG5cdGpRdWVyeSggXCIjZ2VuZXJhbC10YWJcIiApLmNsaWNrKCk7XG5cblx0aWYgKCBsaW5rSW5kZXhpbmdDb21wbGV0ZWQgPT09IGZhbHNlICkge1xuXHRcdGpRdWVyeSggXCIjb3BlbkxpbmtJbmRleGluZ1wiICkuY2xpY2soKTtcblx0fVxufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBpbmRleGF0aW9uIG9mIGxpbmtzLlxuICpcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBpbml0KCkge1xuXHRsZXQgcmVjYWxjdWxhdGluZyA9IGZhbHNlO1xuXHRqUXVlcnkoIFwiLnlvYXN0LWpzLWNhbGN1bGF0ZS1pbmRleC1saW5rcy0tYWxsIFwiICkub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG5cdFx0aWYoIHJlY2FsY3VsYXRpbmcgPT09IGZhbHNlICkge1xuXHRcdFx0c3RhcnRSZWluZGV4aW5nKCk7XG5cblx0XHRcdHJlY2FsY3VsYXRpbmcgPSB0cnVlO1xuXHRcdH1cblx0fSApO1xuXG5cdGpRdWVyeSggXCIjbm90aWNlUnVuTGlua0luZGV4XCIgKS5jbGljayggb3BlbkxpbmtJbmRleGluZyApO1xuXG5cdGlmICggd2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZiggXCImcmVJbmRleExpbmtzPTFcIiApICE9PSAtMSApIHtcblx0XHRqUXVlcnkoIG9wZW5MaW5rSW5kZXhpbmcgKTtcblx0fVxufVxuXG5qUXVlcnkoIGluaXQgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBqcy9zcmMvd3Atc2VvLXJlaW5kZXgtbGlua3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFLQTtBQUNBOzs7Ozs7O0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1991\n");

/***/ })

},[1991]);