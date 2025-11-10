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
exports.brain = void 0;
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const auth_1 = require("./auth");
const db_1 = require("./db");
const jwtsecret = "sadfaerwiuftyh";
exports.brain = express_1.default.Router();
exports.brain.post("/share", auth_1.authmiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const share = req.body.share;
    if (share) {
        const existlink = yield db_1.linkModel.findOne({
            //@ts-ignore
            user: req.user
        });
        if (existlink) {
            res.json({
                hash: existlink.hash
            });
            return;
        }
        const hash = (0, utils_1.random)(15);
        db_1.linkModel.create({
            //@ts-ignore
            user: req.user,
            hash: hash
        });
        res.json({
            hash: hash
        });
        return;
    }
    else {
        yield db_1.linkModel.deleteOne({
            //@ts-ignore
            user: req.user
        });
    }
    res.json({
        message: "updated shareable link"
    });
}));
exports.brain.get("/:sharelink", auth_1.authmiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = req.params.sharelink;
    const link = yield db_1.linkModel.findOne({
        hash
    });
    if (!link) {
        res.status(411).json({
            msg: "wrong link"
        });
        return;
    }
    const content = yield db_1.contentModel.find({
        user: link.user
    });
    const user = yield db_1.userModel.findOne({
        _id: link.user
    });
    if (!user) {
        res.send("user not found");
        return;
    }
    res.json({
        user: user.username,
        content: content
    });
}));
