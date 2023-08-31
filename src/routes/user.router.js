// modulo de rotas de usuário
import { Router } from "express";
const router = Router();

import { userCreateController } from "../controllers/user.controller.js";

router.post("/cadastro", userCreateController);

export default router;

