import { Cache } from "../../interface/types/cache";
import RedisController from "../../modules/cache/controllers/redis";

let fn = () => {
  function set(k: any, v: any, e: any) {
    console.log(k, v, e);
  }

  function get(k: any) {
    console.log(k);
  }

  function del(k: any) {
    console.log(k);
  }

  return { set, get, del };
};

const client = fn();

let args: Cache = {
  key: "cache_1",
  value: "cache 1",
  expiration: 60,
};

new RedisController().setCache(client, args);
new RedisController().getCache(client, args);
new RedisController().deleteCache(client, args);
