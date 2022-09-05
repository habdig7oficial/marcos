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
Object.defineProperty(exports, "__esModule", { value: true });
exports.forms = void 0;
const database_1 = require("../config/database");
(0, database_1.conexao)();
function forms(app) {
    app.get("/forms", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield database_1.conteudo.find();
            console.log(result);
            res.render("formulario.ejs");
        });
    });
    app.post("/forms", function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let dados = req.body;
            console.log(dados);
            const documento = yield new database_1.conteudo({
                estilo: dados.estilo,
                imagem: dados.imagem,
                titulo: dados.titulo,
                texto: dados.texto
            }).save();
            //res.redirect("/forms")
            res.send(dados.imagem);
        });
    });
}
exports.forms = forms;
