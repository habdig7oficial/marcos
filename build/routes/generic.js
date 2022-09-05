"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generic = void 0;
function generic(app) {
    app.get("/generic", function (req, res) {
        res.render("generic.ejs");
    });
}
exports.generic = generic;
