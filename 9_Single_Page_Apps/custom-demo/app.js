import { checkAuth } from "./auth.js";
import { router } from "./router.js";

checkAuth();
router();
