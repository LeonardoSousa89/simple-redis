import Redis from "../services/redis";
import { Cache } from "./../../../interface/types/cache";

export default class RedisController {
  constructor() {}

  setCache = async (client: any, args: Cache): Promise<void> => {
    await new Redis(client, args).setCache();
  };

  getCache = async (client: any, args: Cache): Promise<string> =>
    await new Redis(client, args).getCache();

  deleteCache = async (client: any, args: Cache): Promise<void> => {
    await new Redis(client, args).deleteCache();
  };
}
