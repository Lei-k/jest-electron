import { Config } from '@jest/types';
import { Test, TestRunnerContext, OnTestFailure, OnTestStart, OnTestSuccess, TestWatcher } from 'jest-runner';
/**
 * Runner class
 */
export default class ElectronRunner {
    private _globalConfig;
    private _debugMode;
    constructor(globalConfig: Config.GlobalConfig, context?: TestRunnerContext);
    private getConcurrency;
    runTests(tests: Test[], watcher: TestWatcher, onStart: OnTestStart, onResult: OnTestSuccess, onFailure: OnTestFailure): Promise<void>;
}
