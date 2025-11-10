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
exports.user = void 0;
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtsecret = "sadfaerwiuftyh";
exports.user = express_1.default.Router();
exports.user.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const hashedpassword = yield bcrypt_1.default.hash(password, 4);
    const user = yield db_1.userModel.create({
        username,
        password: hashedpassword,
    });
    console.log("hi");
    res.send("signed up succesfully");
}));
exports.user.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const user = yield db_1.userModel.findOne({
        username,
    });
    if (!user) {
        res.send("invalid username");
    }
    else {
        const hashedpassword = yield bcrypt_1.default.compare(password, user.password);
        if (!hashedpassword) {
            res.send("invalid password");
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, jwtsecret);
        // console.log(token);
        res.json({ "token": token });
    }
}));
