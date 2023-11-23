import { Caching } from "./cache";
export default class Redis extends Caching {
    protected client?: any;
    protected args?: any;
    constructor(client?: any, args?: any);
    setCache(): Promise<void>;
    getCache(): Promise<string>;
    deleteCache(): Promise<void>;
}
