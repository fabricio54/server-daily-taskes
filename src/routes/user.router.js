// modulo de rotas de usuário
import { Router } from "express";
const router = Router();

import { validUser } from "../middlewares/global.middleware.js";
import { userCreateController } from "../controllers/user.controller.js";
import { isEmailValid } from "../controllers/user.controller.js";

router.post("/", validUser, userCreateController);
router.post("/email", isEmailValid);

export default router;

