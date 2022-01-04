"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var config_1 = require("../../utils/config");
var config = new config_1.Config(electron_1.app.getPath('userData'));
function resolvePlugins() {
    var pluginPaths = config.read().plugins;
    if (!pluginPaths)
        return [];
    var plugins = pluginPaths.map(function (p) { return require(path.join(process.cwd(), p)); });
    return plugins;
}
var plugins = resolvePlugins();
exports.default = plugins;
//# sourceMappingURL=plugin.js.map