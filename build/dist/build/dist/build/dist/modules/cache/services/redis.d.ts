export const __esModule: boolean;
export default Redis;
declare class Redis extends cache_1.Caching {
    constructor(client: any, args: any);
    setCache(): any;
    getCache(): any;
    deleteCache(): any;
}
import cache_1 = require("./cache");
