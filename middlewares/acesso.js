"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vairificaAcesso = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function vairificaAcesso(request, response, next) {
    var xAccessToken = request.headers['x-access-token'];
    if (xAccessToken === undefined) {
        return response.status(403).json({
            message: 'Acesso negado, token não informado'
        });
    }
    jsonwebtoken_1.default.verify(String(xAccessToken), 'SenhaSegura1234567890', function (negado, autorizado) {
        if (negado) {
            return response.status(403).json({
                message: 'Acesso negado, token inválido'
            });
        }
        next();
    });
}
exports.vairificaAcesso = vairificaAcesso;
