import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validIdTaske } from "../middlewares/global.middleware.js";
import { controllerCreateTaske, controllerGetAllTaske, controllerDeleteTaske, controllerUpdateTaske} from "../controllers/taske.controller.js";


router.post("/create", authMiddleware, controllerCreateTaske);
router.get("/", authMiddleware, controllerGetAllTaske);

router.patch("/update", validIdTaske, authMiddleware, controllerUpdateTaske);
router.delete("/delete", validIdTaske, authMiddleware, controllerDeleteTaske);

export default router;