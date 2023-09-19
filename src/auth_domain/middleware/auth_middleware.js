import env from "../../config/env.js";
import Logging from "../../library/logging.js";
import HTTP from "../../utils/http.js";
import jsonwebtoken from "jsonwebtoken";
export default class AuthMiddleware {
  static verifyToken(req, res, next) {
    let token = req.header("Authorization");
    token = token.split(" ")[1];
    if (!token)
      return res.status(HTTP.StatusUnauthorized).send("Access Denied");
    try {
      const verified = jsonwebtoken.verify(token, env.jwt.tokenSecret);
      next();
    } catch (error) {
      return res.status(HTTP.StatusBadRequest).send("Invalid Token");
    }
  }
}
