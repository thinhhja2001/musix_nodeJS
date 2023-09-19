import Logging from "../../library/logging.js";
import * as User from "../models/user.js";

export default class UserController {
  static async getAllUsers(req, res) {
    User.default.find({}).then((users) => res.send(users));
  }
}
