"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPromise = void 0;
const database_1 = __importDefault(require("./database"));
const queryPromise = (query) => {
    database_1.default.execute(query)
        .then((result) => {
        console.log(result);
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.queryPromise = queryPromise;
