import { Caching } from "./cache";

export default class Redis extends Caching {
  constructor(protected client?: any, protected args?: any) {
    super(client, args);
  }

  async setCache(): Promise<void> {
    await this.client.set(this.args?.key, this.args?.value, {
      EX: this.args?.expiration,
    });
  }

    async getCache(): Promise<string> {
    return await this.client.get(this.args?.key);
  }

  async deleteCache(): Promise<void> {
    await this.client.del(this.args?.key);
  }
}
