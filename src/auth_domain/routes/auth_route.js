import express from "express";
import AuthController from "../controllers/auth_controller.js";
const router = express.Router();

const authPrefix = "/authentication";
router.post(`${authPrefix}/register`, AuthController.registerUser);
router.post(`${authPrefix}/login`,AuthController.login)
export default router;
