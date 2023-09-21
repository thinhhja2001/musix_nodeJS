import { registerValidator } from "../schemas/schema.js";
import User from "../../domain_user/models/user.js";
import bcrypt from "bcrypt";
import HTTP from "../../utils/http.js";
import Logging from "../../library/logging.js";
import env from "../../config/env.js";
import Token from "../../auth_domain/models/token.js";
import jsonwebtoken from "jsonwebtoken";
import * as uuid from "uuid";
import AuthUtil from "../utils/auth_util.js";
import user from "../../domain_user/models/user.js";
export default class AuthController {
  static async registerUser(request, response) {
    const { error } = registerValidator(request.body);
    const { name, email, password } = request.body;
    if (error)
      return response.status(HTTP.StatusUnprocessableEntity).send(error);

    const checkEmailExist = await User.findOne({ email: email });
    if (checkEmailExist)
      return response.status(HTTP.StatusConflict).send("Email existed");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({ name: name, email: email, password: hashPassword });
    try {
      let newUser = await user.save();
      let verifyToken = uuid.v4();
      let token = new Token({
        token: verifyToken,
        expiresIn: Date.now() + 20 * 60 * 1000,
        userID: newUser._id,
        scope: "VERIFICATION",
      });
      let newToken = await token.save();
      AuthUtil.sendEmail(newUser, verifyToken);
      await response.send(newUser);
    } catch (err) {
      Logging.error("error occurred" + err);
      response.status(HTTP.StatusBadRequest).send(err);
    }
  }
  static async login(request, response) {
    const user = await User.findOne({ email: request.body.email });
    if (!user)
      return response
        .status(HTTP.StatusUnprocessableEntity)
        .send("Email or password is not correct");
    const checkPassword = await bcrypt.compare(
      request.body.password,
      user.password
    );
    if (!checkPassword)
      return response
        .status(HTTP.StatusUnprocessableEntity)
        .send("Email or password is not correct");
    const token = jsonwebtoken.sign({ _id: user._id }, env.jwt.tokenSecret, {
      expiresIn: 60 * 60 * 24,
    });
    response.setHeader("auth-token", token).send(token);
  }

  static async verifyAccount(request, response) {
    let token;
    token = await Token.findOne({ token: request.params.token });
    if (token === null) {
      return response.send(HTTP.StatusForbidden).send("Token invalid");
    }
    if (token.expiresIn < Date.now()) {
      return response.send(HTTP.StatusNotAcceptable).send("TOken expired");
    } else {
      let user = await User.findById(token.userID);
      user.status = "VERIFIED";
      await user.save();
      return response.status(HTTP.StatusOK).send("Verified");
    }
    // if (token === null) {
    // } else if (token.expiresIn < Date.now()) {
    // }
  }
}
