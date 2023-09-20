import Logging from "../../library/logging.js";
import * as User from "../models/user.js";
import UserDTO from "../models/user_dto.js";

export default class UserController {
  static async getAllUsers(req, res) {
    User.default.find({}).then((users) => res.send(users));
  }
  static async getUserByID(req, res) {
    User.default
      .findById(req.params.id)
      .then((user) => res.send(new UserDTO(user)));
  }
}
