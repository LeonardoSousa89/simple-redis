import { CacheOperations } from "./../../../interface/operations";
export declare abstract class Caching implements CacheOperations {
    protected client?: any;
    protected args?: any;
    constructor(client?: any, args?: any);
    abstract setCache(): Promise<void>;
    abstract getCache(): Promise<string>;
    abstract deleteCache(): Promise<void>;
}
