import { checkAuth } from "./auth.js";

export function loadLogin() {
  const loginPage = document.querySelector("#login");
  loginPage.style.display = "block";

  loginPage.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    fetch("http://localhost:3030/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("token", data.accessToken);
        checkAuth();
      });
  });

  return "login";
}
