"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.any = void 0;
function any(app) {
    app.get("/*", function (req, res) {
        res.send("página não encontrada");
    });
    app.post("/*", function (req, res) {
        res.send("página não encontrada");
    });
}
exports.any = any;
