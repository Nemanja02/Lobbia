webpackHotUpdate("styles",{

/***/ "./components/Navbar/Navbar.module.scss":
/*!**********************************************!*\
  !*** ./components/Navbar/Navbar.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"navbarHeading":"_2rqBj51wAHZmnt7KGA8GXJ","navbar":"zeSKrs6FKqhaezHeZpFGz","globalSearch":"_1pwV7I_mtzT1g2Ph4cLSQm","navbarNavigation":"_13S2pjooVOiJMecbBVHC-W","navbarNavigation_item":"_18zl5G-gKvlQocMtnff4PL"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1561924700908");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.055df85a289917d422a8.hot-update.js.map