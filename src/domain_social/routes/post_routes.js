import express from "express";
import AuthMiddleware from "../../auth_domain/middleware/auth_middleware.js";
import SocialController from "../controllers/post_controller.js";
import FormDataMiddleWare from "../middlewares/form_data.js";
import multer from "multer";
const postPrefix = "/post";

const router = express.Router();


router.post(
  `${postPrefix}`,
  AuthMiddleware.verifyToken,
  FormDataMiddleWare.formDataFile().any(),
  SocialController.createNewPost
);

export default router;
