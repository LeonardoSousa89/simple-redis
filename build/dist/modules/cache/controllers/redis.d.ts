import { Cache } from "./../../../interface/types/cache";
export default class RedisController {
    constructor();
    setCache: (client: any, args: Cache) => Promise<void>;
    getCache: (client: any, args: Cache) => Promise<string>;
    deleteCache: (client: any, args: Cache) => Promise<void>;
}
