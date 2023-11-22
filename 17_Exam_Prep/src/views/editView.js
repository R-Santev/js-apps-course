import { handleEditProduct } from "../services/products.js";
import { render, html } from "./../../node_modules/lit-html/lit-html.js";

const root = document.querySelector("main");
function editProductTemplate(product) {
  return html`
    <section id="edit">
      <div class="form">
        <h2>Edit Product</h2>
        <form
          class="edit-form"
          @submit=${(e) => handleEditProduct(e, product._id)}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            value=${product.name}
          />
          <input
            type="text"
            name="imageUrl"
            id="product-image"
            placeholder="Product Image"
            value=${product.imageUrl}
          />
          <input
            type="text"
            name="category"
            id="product-category"
            placeholder="Category"
            value=${product.category}
          />
          <textarea
            id="product-description"
            name="description"
            placeholder="Description"
            rows="5"
            cols="50"
          >
${product.description}</textarea
          >

          <input
            type="text"
            name="price"
            id="product-price"
            placeholder="Price"
            value=${product.price}
          />
          <button type="submit">post</button>
        </form>
      </div>
    </section>
  `;
}

export function editProductView(ctx) {
  render(editProductTemplate(ctx.product), root);
}
