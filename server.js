"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Construir o servidor
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
var port = process.env.PORT || 8050;
app.listen(port, function () {
    console.log('Servidor online na porta ' + port);
    console.log("Servidor online na porta " + port);
});
//  localhost:3333
