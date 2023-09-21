import jsonwebtoken from "jsonwebtoken";
import env from "../../config/env.js";
import Logging from "../../library/logging.js";
import nodemailer from "nodemailer";
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
  static sendEmail(user, token) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thinhnguyendoan5122001@gmail.com",
        pass: "bmrwskymnhvwzqcz",
      },
    });
    var mailOptions = {
      from: "thinhnguyendoan5122001@gmail.com",
      to: user.email,
      subject: "Verify your account",
      text: `localhost:${env.app.port}/api/authentication/verify/${token}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        Logging.error(error);
      } else {
        Logging.info("Email sent " + info.response);
      }
    });
  }
}
