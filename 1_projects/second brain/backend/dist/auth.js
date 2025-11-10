"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authmiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtsecret = "sadfaerwiuftyh";
const authmiddleware = (req, res, next) => {
    const userid = req.headers["authorization"];
    const decode = jsonwebtoken_1.default.verify(userid, jwtsecret);
    if (decode) {
        //@ts-ignore
        req.user = decode.id;
        next();
    }
};
exports.authmiddleware = authmiddleware;
