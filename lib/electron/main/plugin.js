"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var __1 = require("../..");
var config_1 = require("../../utils/config");
var config = new config_1.Config(electron_1.app.getPath('userData'));
function resolvePath(file) {
    return process.env.JEST_ELECTRON_CONFIG_PATH ?
        path.join(process.cwd(), process.env.JEST_ELECTRON_CONFIG_PATH, '../', file)
        :
            path.join(__1.externalProjectRoot, file);
}
function resolvePlugins() {
    var pluginPaths = config.read().plugins;
    if (!pluginPaths)
        return [];
    var plugins = pluginPaths.map(function (p) { return require(resolvePath(p)); });
    return plugins;
}
var plugins = resolvePlugins();
exports.default = plugins;
//# sourceMappingURL=plugin.js.map