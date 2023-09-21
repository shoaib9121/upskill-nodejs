"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Payment_1 = __importDefault(require("../Payment"));
class PayPalPayment extends Payment_1.default {
    processPayment(amount) {
        console.log(`Processing amount $${amount.toFixed(2)} through PayPal`);
    }
}
exports.default = PayPalPayment;
