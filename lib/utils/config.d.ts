declare type IConfig = {
    readonly width: number;
    readonly height: number;
    readonly plugins?: string[];
    readonly electron?: string;
};
/**
 * configure saver class
 */
export declare class Config {
    private dir;
    private config;
    constructor(dir: string);
    /**
     * get the configure save file path
     */
    private getConfigPath;
    private readFromFile;
    /**
     * get the configure of file
     */
    read(): IConfig;
    /**
     * write configure into file
     * @param config
     * @param flush
     */
    write(config: IConfig, flush?: boolean): void;
}
export {};
