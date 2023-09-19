import expressLoader from "./library/loader/express.loader.js";
import mongooseLoader from "./library/loader/mongoose.loader.js";
import Logging from "./library/logging.js";
import authRoutes from "./auth_domain/routes/auth_route.js";
import userRoutes from "./domain_user/routes/user_route.js";
async function initApp() {
  mongooseLoader();
  const app = expressLoader();
  app.use("/api/", authRoutes);
  app.use("/api/", userRoutes);
}

initApp()
  .then(Logging.info("App running"))
  .catch((error) => Logging.error("Application crashed: " + error));
