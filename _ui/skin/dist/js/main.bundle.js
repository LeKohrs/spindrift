webpackJsonp([1],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_barba_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_barba_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_barba_js__);




__WEBPACK_IMPORTED_MODULE_2_barba_js___default.a.Pjax.start();

document.addEventListener("DOMContentLoaded", function () {
    var FadeTransition = __WEBPACK_IMPORTED_MODULE_2_barba_js___default.a.BaseTransition.extend({
        start: function start() {
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([this.newContainerLoading, this.Out()]).then(this.In.bind(this));
        },

        Out: function Out() {
            this.oldContainer.classList.toggle('bounceOutRight');

            return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
                window.setTimeout(function () {
                    resolve();
                }, 600);
            });
        },
        In: function In() {
            var body_classes = __WEBPACK_IMPORTED_MODULE_2_barba_js___default.a.Pjax.Dom.currentHTML.match(/body\sclass=['|"]([^'|"]*)['|"]/)[1];
            var body_class_array = body_classes.split(' ');
            var body = document.getElementsByTagName('body')[0];
            body.className = '';
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(body_class_array), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var body_class = _step.value;

                    body.classList.add(body_class);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            this.newContainer.classList.toggle('bounceInRight');
            this.done();
        }
    });
    __WEBPACK_IMPORTED_MODULE_2_barba_js___default.a.Pjax.getTransition = function () {
        return FadeTransition;
    };
});

/***/ })

},[38]);
//# sourceMappingURL=main.bundle.js.map