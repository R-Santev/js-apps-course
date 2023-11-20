import page from "./../node_modules/page/page.mjs";

import * as httpService from "./http.js";
import { loginUrl, logoutUrl } from "../constants/index.js";

// API Calls
const login = (body) => httpService.post(loginUrl, body);
export const logout = () =>
  httpService.get(logoutUrl).then(() => {
    localStorage.removeItem("auth");
  });

// Event Handlers
export function loginHandler(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");

  login({ email, password })
    .then((res) => {
      console.log(res);
      if (res.accessToken) {
        localStorage.setItem("auth", JSON.stringify(res));

        page.redirect("/products");
      }
    })
    .catch((err) => {
      alert(err.message);
    });
}

// Helper funcs
export function getAuthState() {
  return JSON.parse(localStorage.getItem("auth"));
}
