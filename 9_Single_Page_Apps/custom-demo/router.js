import { loadCreate } from "./create.js";
import { loadLogin } from "./login.js";
import { logout } from "./logout.js";
import { loadRegister } from "./register.js";

const routes = {
  "/create": loadCreate,
  "/register": loadRegister,
  "/login": loadLogin,
  "/logout": logout,
};

export function router() {
  let lastLoaded = loadLogin();

  const nav = document.querySelector("nav");
  nav.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {
      e.preventDefault();
      const lastLoadedElement = document.getElementById(lastLoaded);
      lastLoadedElement.style.display = "none";

      const url = new URL(e.target.href);
      routes[url.pathname]();

      lastLoaded = e.target.href.split("/").pop();
      console.log(lastLoaded);
    }
  });
}
