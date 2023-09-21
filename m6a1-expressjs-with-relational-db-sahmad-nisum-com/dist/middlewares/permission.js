"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PermissionMiddleware = (req, res, next) => {
    if (req.headers.hasOwnProperty("user_id")) {
        return next();
    }
    return res.status(403).json({
        error: "Access Denied: user_id is missing in headers",
    });
};
exports.default = PermissionMiddleware;
