"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkModel = exports.contentModel = exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const objectId = Schema.Types.ObjectId;
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, }
});
exports.userModel = mongoose_1.default.model("User", userSchema);
const contentSchema = new Schema({
    type: { type: String, required: true, },
    title: { type: String, required: true, },
    link: { type: String, required: true, },
    tags: [{ type: objectId, ref: "Tags" }],
    user: { type: objectId, ref: "User" }
});
exports.contentModel = mongoose_1.default.model("Content", contentSchema);
const linkSchema = new Schema({
    hash: { type: String, required: true, },
    user: { type: objectId, ref: "User" }
});
exports.linkModel = mongoose_1.default.model("link", linkSchema);
