"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = __importDefault(require("../Book"));
class EBook extends Book_1.default {
    constructor(props) {
        const { format } = props, restBookProps = __rest(props, ["format"]);
        super(restBookProps);
        this._format = format;
        super.displayDetails();
    }
    set format(format) {
        this._format = format;
    }
    get format() {
        return this._format;
    }
    displayDetails() {
        const bookDetails = super.displayDetails();
        return bookDetails.concat(`, Format: ${this.format}`);
    }
}
exports.default = EBook;
