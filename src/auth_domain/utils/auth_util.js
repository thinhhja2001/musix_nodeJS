import jsonwebtoken from "jsonwebtoken";
import env from "../../config/env.js";
import Logging from "../../library/logging.js";
export default class AuthUtil {
  static extractJWTTokenFromRequest(req) {
    let token = req.header("Authorization");

    Logging.info(token);
    if (!token.startsWith("Bearer")) {
      return null;
    }
    let jwtToken = token.split(" ")[1];
    let decoded = jsonwebtoken.verify(jwtToken, env.jwt.tokenSecret);
    return decoded;
  }
}
