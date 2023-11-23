"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.get = exports.set = void 0;
const redis_1 = __importDefault(require("./modules/cache/controllers/redis"));
function set(client, args) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new redis_1.default().setCache(client, args);
    });
}
exports.set = set;
function get(client, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new redis_1.default().getCache(client, args);
    });
}
exports.get = get;
function del(client, args) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new redis_1.default().deleteCache(client, args);
    });
}
exports.del = del;
