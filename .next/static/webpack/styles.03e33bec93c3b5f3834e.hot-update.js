webpackHotUpdate("styles",{

/***/ "./components/Navigation/TopBar.module.scss":
/*!**************************************************!*\
  !*** ./components/Navigation/TopBar.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"topbar":"_1QLhClawpbbVbhzwPKQnoW","logo":"_3JdhEBxEuRZQqim-fOHmTW","search":"_2cfRFsWkV0IOTV97zsnJEY","isearch":"_1iTHvHqROHvFfxJb4waXh6","playicon":"SH2vr6Va5I7LuainrsVVP"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1562622692846");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.03e33bec93c3b5f3834e.hot-update.js.map