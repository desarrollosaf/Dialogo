import { Router } from "express";
import { savecorreo } from "../controller/correo";

const router = Router();

router.post("/api/correo/save/", savecorreo)  

export default router