import { BrowserWindow } from 'electron';
/**
 * browser window (renderer) pool
 */
export declare class WindowPool {
    private pool;
    private maxSize;
    private debugMode;
    private locked;
    constructor(maxSize?: number, debugMode?: boolean);
    get windows(): BrowserWindow[];
    /**
     * get a window with thread lock
     */
    private get;
    /**
     * get a window from pool, if not exist, create one, if pool is full, wait and retry
     */
    private getAsync;
    /**
     * create a valid electron browser window
     */
    private create;
    /**
     * the proc size of pool
     */
    size(): number;
    /**
     * whether the pool is full
     */
    isFull(): boolean;
    /**
     * set the proc idle status
     * @param win
     * @param idle
     */
    private setIdle;
    private appendTest;
    /**
     * clear all the save tests in memory
     */
    clearSaveTests(): void;
    private removeWin;
    /**
     * run test case by send it to renderer
     * @param id
     * @param test
     */
    runTest(id: string, test: any): Promise<any>;
    private runAllTest;
    private run;
}
