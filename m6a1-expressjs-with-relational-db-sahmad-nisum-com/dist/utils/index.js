"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.executeQueryFromPath = exports.executeQuery = exports.handleAxiosError = void 0;
__exportStar(require("./constants"), exports);
const database_1 = __importDefault(require("./database"));
const fs_1 = __importDefault(require("fs"));
const path = __importStar(require("path"));
const handleAxiosError = (error) => {
    const axiosError = error;
    if (axiosError.response) {
        console.error("Server responded with an error:", axiosError.response.data);
    }
    else if (axiosError.request) {
        console.error("No response received:", axiosError.request);
    }
    else {
        console.error("Error during request setup:", axiosError.message);
    }
};
exports.handleAxiosError = handleAxiosError;
const executeQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query(query);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
exports.executeQuery = executeQuery;
const executeQueryFromPath = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fullPath = path.resolve(__dirname, filePath);
        const query = fs_1.default.readFileSync(fullPath, "utf-8");
        const result = yield database_1.default.query(query);
        return result;
    }
    catch (error) {
        console.log(error);
    }
});
exports.executeQueryFromPath = executeQueryFromPath;
