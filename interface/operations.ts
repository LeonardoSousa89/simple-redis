export interface CacheOperations {
  setCache(): Promise<void>;
  getCache(): Promise<string>;
  deleteCache(): Promise<void>;
}
