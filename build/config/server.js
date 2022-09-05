"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.porta = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//import consign from "consign";
const elements_1 = require("../routes/elements");
const generic_1 = require("../routes/generic");
const index_1 = require("../routes/index");
const _404_1 = require("../routes/404");
const formularios_1 = require("../routes/formularios");
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.porta = process.env.PORT;
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(express_1.default.static("./static"));
let Myroutes = [
    (0, index_1.index)(exports.app),
    (0, generic_1.generic)(exports.app),
    (0, elements_1.elements)(exports.app),
    (0, formularios_1.forms)(exports.app),
    /*UTLIMA ROTA a ser carregada */
    (0, _404_1.any)(exports.app),
];
//consign().include("./routes").into(app)
