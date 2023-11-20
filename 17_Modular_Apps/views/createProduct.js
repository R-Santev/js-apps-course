import { render, html } from "./../node_modules/lit-html/lit-html.js";

import { createProductHandler } from "../services/products.js";

export const createProductTemplate = () => {
  return html`
    <div class="login-container">
      <h3 class="heading">Create Product</h3>
      <form @submit=${createProductHandler}>
        <!-- Make input -->
        <div class="form-outline mb-4">
          <input type="make" id="make" name="make" class="form-control" />
          <label class="form-label" for="make">Make</label>
        </div>

        <!-- Img input -->
        <div class="form-outline mb-4">
          <input type="img" id="img" name="img" class="form-control" />
          <label class="form-label" for="img">Image</label>
        </div>

        <!-- Description input -->
        <div class="form-outline mb-4">
          <input
            type="description"
            id="description"
            name="description"
            class="form-control"
          />
          <label class="form-label" for="description">Description</label>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Create Product
        </button>
      </form>
    </div>
  `;
};

export const createProductView = () => {
  render(createProductTemplate(), document.getElementById("root"));
};
