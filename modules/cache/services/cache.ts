import { CacheOperations } from "./../../../interface/operations";

export abstract class Caching implements CacheOperations {
  constructor(protected client?: any, protected args?: any) {}

  abstract setCache(): Promise<void>;

  abstract getCache(): Promise<string>;

  abstract deleteCache(): Promise<void>;
}
