/**
 * electron proc
 */
export declare class Electron {
    debugMode: boolean;
    concurrency: number;
    private onCloseCallback;
    private proc;
    private lock;
    constructor(debugMode?: boolean, concurrency?: number);
    /**
     * get a idle electron with lock
     */
    private get;
    /**
     * create an idle electron proc
     */
    private create;
    /**
     * kill all electron proc
     */
    kill(): void;
    /**
     * run test case
     * @param test
     */
    runTest(test: any): Promise<any>;
    initialWin(): Promise<any>;
    /**
     * when all close, do callback
     * @param cb
     */
    onClose(cb: any): void;
}
export declare const electronProc: Electron;
