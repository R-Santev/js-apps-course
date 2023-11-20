import { loginHandler } from "../services/auth.js";
import { render, html } from "./../node_modules/lit-html/lit-html.js";

function loginTemplate() {
  return html`
    <div class="login-container">
      <h3 class="heading">Login</h3>
      <form @submit=${loginHandler}>
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="email" name="email" class="form-control" />
          <label class="form-label" for="email">Email address</label>
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
          />
          <label class="form-label" for="password">Password</label>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  `;
}

export function loginView() {
  render(loginTemplate(), document.getElementById("root"));
}
