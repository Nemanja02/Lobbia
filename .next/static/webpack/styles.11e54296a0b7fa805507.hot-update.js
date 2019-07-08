webpackHotUpdate("styles",{

/***/ "./components/Layout/Layout.module.scss":
/*!**********************************************!*\
  !*** ./components/Layout/Layout.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"_3kwh7x4ISw2sdc56HmDvZN","main":"_1vO7nIIcRqZ9HZwtzTFdOl"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1562620183856");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.11e54296a0b7fa805507.hot-update.js.map