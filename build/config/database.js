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
exports.conteudo = exports.conexao = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const conexao = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let cstr = process.env.DB_STR;
        if (cstr == undefined) {
            throw console.error("A string de conexão está vazia");
        }
        console.log(cstr);
        const atlas = yield mongoose_1.default.connect(cstr);
    });
};
exports.conexao = conexao;
const modelo = new mongoose_1.default.Schema({
    estilo: String,
    imagem: String,
    titulo: String,
    texto: String,
    publicado: { type: Date, default: Date.now() }
});
exports.conteudo = mongoose_1.default.model("conteudo", modelo);
