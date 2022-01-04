import { app, BrowserWindow } from 'electron';

import * as path from 'path';
import { externalProjectRoot } from '../..';

import { Config } from '../../utils/config';

const config = new Config(app.getPath('userData'));

export type CreateWindowFactory = (config: {
    width: number,
    height: number,
    debug: boolean
}) => BrowserWindow;

interface Plugin {
    createWindow?: CreateWindowFactory,
    onAppReady?: (windows: BrowserWindow[]) => Promise<void> | void
}

function resolvePath(file: string) {
    return process.env.JEST_ELECTRON_CONFIG_PATH ? 
        path.join(process.cwd(), process.env.JEST_ELECTRON_CONFIG_PATH, '../', file)
        :
        path.join(externalProjectRoot, file)
}

function resolvePlugins() {
    const pluginPaths = config.read().plugins;

    if(!pluginPaths) return [];

    let plugins = pluginPaths.map(p => require(resolvePath(p))) as Plugin[];

    return plugins;
}

const plugins = resolvePlugins();

export default plugins;