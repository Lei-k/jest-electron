export default class ElectronEnvironment {
    global: any;
    moduleMocker: any;
    fakeTimers: any;
    electronWindowConsole: any;
    constructor(config: any);
    setup(): Promise<void>;
    teardown(): Promise<void>;
    runScript(script: any): any;
}
