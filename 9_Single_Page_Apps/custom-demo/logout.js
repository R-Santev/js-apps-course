import { checkAuth } from "./auth.js";

const logoutView = document.getElementById("logout");

export function logout() {
  sessionStorage.removeItem("token");
  checkAuth();
  logoutView.style.display = "block";
}
