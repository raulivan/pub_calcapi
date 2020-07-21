"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var opFundamentais_1 = __importDefault(require("./controllers/opFundamentais"));
var operacoes_1 = __importDefault(require("./controllers/operacoes"));
var admin_1 = __importDefault(require("./controllers/admin"));
var acesso_1 = require("./middlewares/acesso");
var routes = express_1.default.Router();
var opFundamentais = new opFundamentais_1.default();
var operacoes = new operacoes_1.default();
var admin = new admin_1.default();
// locahosl:3333
routes.get('/', function (request, respose) {
    return respose.status(200).json({
        message: 'CalcAPI',
        autor: 'Raulivan Rodrigo',
        atualizacao: '21/07/2020',
        status: 'Online'
    });
});
routes.post('/login', admin.login);
//localhost:3333//operacoes/fundamentais/somar?num1=10&num2=15
//Rotas públicas
routes.get('/operacoes/fundamentais/somar', opFundamentais.somar);
routes.get('/operacoes/fundamentais/subtrair', opFundamentais.subtair);
routes.get('/operacoes/fundamentais/multiplicar', opFundamentais.multiplicar);
routes.get('/operacoes/fundamentais/dividir', opFundamentais.dividir);
routes.post('/operacoes/fundamentais/somar', opFundamentais.somar);
//Rotas privadas
routes.get('/operacoes/delta', acesso_1.vairificaAcesso, operacoes.delta);
routes.get('/operacoes/fatorial', acesso_1.vairificaAcesso, operacoes.fatorial);
exports.default = routes;
