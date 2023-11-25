import { Cache } from "./interface/types/cache";
declare function set(client: any, args: Cache): Promise<void>;
declare function get(client: any, args: Cache): Promise<string>;
declare function del(client: any, args: Cache): Promise<void>;
export { set, get, del };
