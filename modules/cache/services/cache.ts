import { CacheOperations } from "./../../../interface/operations";

export abstract class Caching implements CacheOperations {
  constructor(protected client?: any, protected args?: any) {}

  abstract setCache(): any;

  abstract getCache(): any;

  abstract deleteCache(): any;
}
