import page from "./../node_modules/page/page.mjs";

import { logout } from "../services/auth.js";

export function logoutView() {
  logout().then(() => {
    page.redirect("/products");
  });
}
