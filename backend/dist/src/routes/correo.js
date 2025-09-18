"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const correo_1 = require("../controller/correo");
const router = (0, express_1.Router)();
router.post("/api/correo/save/", correo_1.savecorreo);
exports.default = router;
