import express from "express";
import UserController from "../controllers/user_controller.js";
import AuthMiddleware from "../../auth_domain/middleware/auth_middleware.js";
import Logging from "../../library/logging.js";
const router = express.Router();

const userPrefix = "/user";

router.get(
  `${userPrefix}`,
  AuthMiddleware.verifyToken,
  UserController.getAllUsers
);

router.get(
  `${userPrefix}/:id`,
  AuthMiddleware.verifyToken,
  UserController.getUserByID
);

export default router;
