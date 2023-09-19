import express from "express";
import UserController from "../controllers/user_controller.js";
import AuthMiddleware from "../../auth_domain/middleware/auth_middleware.js";
const router = express.Router();

const userPrefix = "/user";

router.get(
  `${userPrefix}`,
  AuthMiddleware.verifyToken,
  UserController.getAllUsers
);

export default router;
