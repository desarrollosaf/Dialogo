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
exports.savecorreo = void 0;
const correos_1 = __importDefault(require("../models/correos"));
const savecorreo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data.correo);
    try {
        const existe = yield correos_1.default.findOne({
            where: { email: data.correo }
        });
        if (existe) {
            return res.json({ estatus: 400, error: 'existe un registro con el correo', correo: data.correo });
        }
        const correo = yield correos_1.default.create({
            email: data.correo,
        });
        return res.json({
            msg: `correo guardado`,
            estatus: 200
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Ocurrió un error al guardar el correo' });
    }
});
exports.savecorreo = savecorreo;
