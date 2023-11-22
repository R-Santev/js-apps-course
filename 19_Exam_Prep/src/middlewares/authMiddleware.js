import * as authService from "../services/auth.js";

export function authMiddleware(ctx, next) {
  ctx.authData = authService.getAuthData();
  next();
}
