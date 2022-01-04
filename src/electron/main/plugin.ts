import { app, BrowserWindow } from 'electron';

import * as path from 'path';

import { Config } from '../../utils/config';

const config = new Config(app.getPath('userData'));

export type CreateWindowFactory = (config: {
    width: number,
    height: number,
    debug: boolean
}) => BrowserWindow;

interface Plugin {
    createWindow?: CreateWindowFactory,
    onAppReady?: (windows: BrowserWindow[]) => void
}

function resolvePlugins() {
    const pluginPaths = config.read().plugins;

    if(!pluginPaths) return [];

    let plugins = pluginPaths.map(p => require(path.join(process.cwd(), p))) as Plugin[];

    return plugins;
}

const plugins = resolvePlugins();

export default plugins;