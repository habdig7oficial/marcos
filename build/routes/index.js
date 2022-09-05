"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
function index(app) {
    app.get("/", function (req, res) {
        res.render("index.ejs");
    });
}
exports.index = index;
