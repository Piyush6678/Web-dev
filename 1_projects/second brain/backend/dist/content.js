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
exports.content = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const jwtsecret = "sadfaerwiuftyh";
const auth_1 = require("./auth");
// import { contentModel } from "./db";
exports.content = express_1.default.Router();
// create 
exports.content.post("/create", auth_1.authmiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const user = req.user;
    const { type, title, link, } = req.body;
    console.log(link);
    yield db_1.contentModel.create({
        type, title, link, tags: [], user,
    });
    res.json({ "msg": "sucessfull" });
}));
exports.content.get("/fetch/", auth_1.authmiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const user = req.user;
    const { type } = req.query;
    let filter = { user };
    if (type && type != "") {
        filter.type = type;
    }
    const content = yield db_1.contentModel.find(filter).populate("user", "username");
    res.json({ content });
}));
exports.content.delete("/delete", auth_1.authmiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const content = {
        link: req.query.link,
        title: req.query.title,
        //@ts-ignore
        user: req.user
    };
    console.log(content);
    yield db_1.contentModel.findOneAndDelete(content);
    //    contentModel.deleteOne({
    //     courseid,
    //     //@ts-ignore
    //     user:req.usawaitr
    //    }) 
    console.log("deleted");
    res.send("content deleted");
}));
