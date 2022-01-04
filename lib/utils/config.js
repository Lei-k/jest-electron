"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var fs = require("fs");
var path = require("path");
var __1 = require("..");
var CONFIG_FILE = 'jest-electron.json';
var DEFAULT_CONFIG = {
    height: 800,
    width: 1024,
    plugins: []
};
/**
 * configure saver class
 */
var Config = /** @class */ (function () {
    function Config(dir) {
        this.dir = dir;
    }
    /**
     * get the configure save file path
     */
    Config.prototype.getConfigPath = function () {
        return process.env.JEST_ELECTRON_CONFIG_PATH ?
            path.join(process.cwd(), process.env.JEST_ELECTRON_CONFIG_PATH) : path.resolve(__1.externalProjectRoot, CONFIG_FILE);
    };
    Config.prototype.readFromFile = function () {
        try {
            return JSON.parse(fs.readFileSync(this.getConfigPath(), 'utf8'));
        }
        catch (e) {
            return DEFAULT_CONFIG;
        }
    };
    /**
     * get the configure of file
     */
    Config.prototype.read = function () {
        if (!this.config) {
            this.config = this.readFromFile();
        }
        return this.config;
    };
    /**
     * write configure into file
     * @param config
     * @param flush
     */
    Config.prototype.write = function (config, flush) {
        if (flush === void 0) { flush = false; }
        // this.config = flush ? config : { ...this.read(), ...config };
        // try {
        //   fs.writeFileSync(this.getConfigPath(), JSON.stringify(this.config));
        // } catch (e) {}
    };
    return Config;
}());
exports.Config = Config;
//# sourceMappingURL=config.js.map