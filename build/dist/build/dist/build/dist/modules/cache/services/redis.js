"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            }
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = require("./cache");
class Redis extends cache_1.Caching {
    constructor(client, args) {
        super(client, args);
        this.client = client;
        this.args = args;
    }
    setCache() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.set((_a = this.args) === null || _a === void 0 ? void 0 : _a.key, (_b = this.args) === null || _b === void 0 ? void 0 : _b.value, {
                EX: (_c = this.args) === null || _c === void 0 ? void 0 : _c.expiration,
            });
        });
    }
    getCache() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.get((_a = this.args) === null || _a === void 0 ? void 0 : _a.key);
        });
    }
    deleteCache() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.del((_a = this.args) === null || _a === void 0 ? void 0 : _a.key);
        });
    }
}
exports.default = Redis;
