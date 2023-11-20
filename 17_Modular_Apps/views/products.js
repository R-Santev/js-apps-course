import { render, html } from "./../node_modules/lit-html/lit-html.js";
import { productsURL } from "./../constants/index.js";

function productsTemplate(products) {
  return html`
    <h3 class="heading">Products</h3>
    <section class="section">
      ${products.map(
        (p) => html`<div class="card" style="width: 18rem;">
          <img src=${p.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${p.make}</h5>
            <p class="card-text">${p.description}</p>
            <a href=${`${productsURL}/${p.id}`} class="btn btn-primary"
              >View more</a
            >
          </div>
        </div>`
      )}
    </section>
  `;
}

const rootEl = document.getElementById("root");

export function productsView(ctx) {
  render(productsTemplate(ctx.products), rootEl);
}
