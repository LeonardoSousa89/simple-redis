import { Caching } from "./cache";

export default class Redis extends Caching {
  constructor(protected client?: any, protected args?: any) {
    super(client, args);
  }

  async setCache() {
    await this.client.set(this.args?.key, this.args?.value, {
      EX: this.args?.expiration,
    });
  }

  async getCache() {
    return await this.client.get(this.args?.key);
  }

  async deleteCache() {
    await this.client.del(this.args?.key);
  }
}
