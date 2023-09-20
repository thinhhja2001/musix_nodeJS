import AuthUtil from "../../auth_domain/utils/auth_util.js";
import Logging from "../../library/logging.js";
import HTTP from "../../utils/http.js";
import Post from "../models/post.js";
import User from "../../domain_user/models/user.js";
export default class SocialController {
  static async createNewPost(req, res) {
    const decoded = AuthUtil.extractJWTTokenFromRequest(req);
    if (!decoded) {
      return res.status(HTTP.StatusForbidden).send("Not Authorized");
    }
    const userID = decoded._id;
    let user;
    await User.findById(userID).then((u) => {
      user = u;
    });
    if (!user) {
      return res.status(HTTP.StatusNotFound).send("No user found");
    }
    const cloudinary = (await import("cloudinary")).v2;
    let file = {};
    const { content, fileName } = req.body;
    await cloudinary.uploader
      .upload(req.files[0].path, { resource_type: "image" })
      .then((res) => {
        file["id"] = res.asset_id;
        file["url"] = res.secure_url;
      })
      .catch((err) => {
        file["id"] = null;
        file["url"] = null;
        Logging.error(err);
      });
    let thumbnail = {};
    await cloudinary.uploader
      .upload(req.files[1].path, { resource_type: "video" })
      .then((res) => {
        thumbnail["id"] = res.asset_id;
        thumbnail["url"] = res.secure_url;
      })
      .catch((err) => {
        thumbnail["id"] = null;
        thumbnail["url"] = null;
        Logging.error(err);
      });
    const post = new Post({
      content: content,
      fileID: file.id,
      ownerID: user._id,
      ownerUsername: user.name,
      thumbnailID: thumbnail.id,
      thumbnailUrl: thumbnail.url,
      fileUrl: file.url,
      dateCreated: Date.now(),
      lastModified: Date.now(),
      fileName: fileName,
    });
    try {
      const newPost = await post.save();
      await res.status(HTTP.StatusCreated).send(newPost);
    } catch (err) {
      res.status(HTTP.StatusBadRequest).send(err);
    }
  }
}
