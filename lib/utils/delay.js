"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
/**
 * delay ms use promise
 * @param ms
 */
exports.delay = function (ms) {
    if (ms === void 0) { ms = 200; }
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
};
//# sourceMappingURL=delay.js.map