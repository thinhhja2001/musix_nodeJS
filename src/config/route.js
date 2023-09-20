import * as User from "../domain_user/routes/user_route.js";
import * as Auth from "../auth_domain/routes/auth_route.js";
import * as Social from "../domain_social/routes/post_routes.js";
export const routeConfig = { User, Auth, Social };
