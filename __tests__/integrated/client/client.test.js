//https://www.typescriptlang.org/pt/docs/handbook/declaration-files/dts-from-js.html

const { set, get, del } = require("../../../build/dist/index");
const client = require("./redis.client.conf.test");

client.connect();

let args = {};

/**
 * O objeto passado deve ser do tipo
 * cache
 *
 * let data = {
 *   key: "key",
 *   value: "value",
 *   expiration: 60
 * }
 */

//passed
const save = async () => {
  let data = {
    key: "cache_1",
    value: "cache 1",
    expiration: 120,
  };

  // await set(client, data);
  // await set(client, { key: "cache_2", value: "cache 2", expiration: 180 });
  await set(client, { key: "cache_3", value: 1024, expiration: 180 });
};

// save();

/**
 * O objeto passado deve ser do tipo
 * cache
 *
 * let data = { key: "key" }
 */

//passed
const getter = async () => {
  //tipo errado enviado vomo payload
  args = { k: "cache_1" };

  //tipo correto
  // args = { key: "cache_1" };

  //   pode ser obtido destas três formas
  // const res = await get(client, args);
    const res = await get(client, { key: "cache_2" });
  // const res = await get(client, (args = { key: "cache_1" }));
  console.log(res);
};

// getter();

/**
 * O objeto passado deve ser do tipo
 * cache
 *
 * let data = { key: "key" }
 */

//passed
const remove = () => {
  // args = { k: "cache_1" };
  args = { key: "cache_2" };

  setTimeout(async function () {
    del(client, args);
  }, 5000);
};

// remove();
