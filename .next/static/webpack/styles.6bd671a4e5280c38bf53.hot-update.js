webpackHotUpdate("styles",{

/***/ "./components/Navigation/NavLink/NavLink.module.scss":
/*!***********************************************************!*\
  !*** ./components/Navigation/NavLink/NavLink.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"link":"_1RTLLVZRxjzleNc3xsskO9","linkIcon":"_4vfOEq8ynFgz-AI4JSPlw"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1562280238548");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6bd671a4e5280c38bf53.hot-update.js.map