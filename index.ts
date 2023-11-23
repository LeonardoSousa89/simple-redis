import { Cache } from "./interface/types/cache";

import RedisController from "./modules/cache/controllers/redis";

async function set(client: any, args: Cache): Promise<void> {
  await new RedisController().setCache(client, args);
}

async function get(client: any, args: Cache): Promise<string> {
  return await new RedisController().getCache(client, args);
}

async function del(client: any, args: Cache): Promise<void> {
  await new RedisController().deleteCache(client, args);
}

export { set, get, del };
