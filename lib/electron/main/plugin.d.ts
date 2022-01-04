import { BrowserWindow } from 'electron';
export declare type CreateWindowFactory = (config: {
    width: number;
    height: number;
    debug: boolean;
}) => BrowserWindow;
interface Plugin {
    createWindow?: CreateWindowFactory;
    onAppReady?: (windows: BrowserWindow[]) => void;
}
declare const plugins: Plugin[];
export default plugins;