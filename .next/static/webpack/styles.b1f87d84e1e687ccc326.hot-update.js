webpackHotUpdate("styles",{

/***/ "./components/Navigation/TopBar.module.scss":
/*!**************************************************!*\
  !*** ./components/Navigation/TopBar.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"topbar":"_2J-AXA5bO-gnAB71XqxwiM","logo":"_2t82o8bEKj2penP5hYals9","search":"_3YKw-ugJ0BvKCTJvvZeg6m","isearch":"hEuH6DfguykbOzdnS3kvm"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1562771679355");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b1f87d84e1e687ccc326.hot-update.js.map