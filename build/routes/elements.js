"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elements = void 0;
function elements(app) {
    app.get("/elements", function (req, res) {
        res.render("elements.ejs");
    });
}
exports.elements = elements;
