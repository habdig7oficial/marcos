"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./config/server");
server_1.app.listen(server_1.porta, function () {
    console.log(`Funcionando na porta ${server_1.porta}`);
});
