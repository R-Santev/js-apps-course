import { getAuthState } from "../services/auth.js";

export function injectAuth(ctx, next) {
  ctx.authState = getAuthState();

  next();
}
