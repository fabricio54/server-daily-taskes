import { Router } from "express";
const router = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validIdTaske } from "../middlewares/global.middleware.js";
import { controllerCreateTaske, controllerGetAllTaske, controllerDeleteTaske, controllerUpdateStatus , controllerUpdateTaske, controllerUpdateProfile, controllerGetAllTaskesFinish} from "../controllers/taske.controller.js";


router.post("/create", authMiddleware, controllerCreateTaske);
router.get("/", authMiddleware, controllerGetAllTaske);

router.patch("/update", validIdTaske, authMiddleware, controllerUpdateTaske);
router.delete("/delete", validIdTaske, authMiddleware, controllerDeleteTaske);
router.put("/statustaske", validIdTaske, authMiddleware, controllerUpdateStatus);
router.patch("/updateuser", authMiddleware, controllerUpdateProfile);
router.get("/pontuacao", authMiddleware, controllerGetAllTaskesFinish);

export default router;