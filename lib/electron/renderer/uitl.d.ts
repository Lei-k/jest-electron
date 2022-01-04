import * as Resolver from 'jest-resolve';
export declare const getResolver: (config: any, serializableModuleMap: any) => Resolver;
export declare const fail: (testPath: string, err: Error, config: any, globalConfig: any) => any;
/**
 * run test case with runTest method of jest
 * @param test
 */
export declare function run(test: any): Promise<import("@jest/test-result").TestResult>;
