import {
  render,
  html,
  nothing,
} from "./../../node_modules/lit-html/lit-html.js";
import page from "./../../node_modules/page/page.mjs";

import { getAuthData } from "../services/auth.js";
import { handleBuy } from "../services/products.js";

const root = document.querySelector("main");

function productDetailsTemplate(
  product,
  authData,
  boughtCount,
  isAlreadyBought
) {
  return html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
          Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
          Price: <span id="price-number">${product.price}</span>$
        </p>
        <div id="info-wrapper">
          <div id="details-description">
            <h4>Bought: <span id="buys">${boughtCount}</span> times.</h4>
            <span>${product.description}</span>
          </div>
        </div>
      </div>

          ${
            product._ownerId === getAuthData()._id
              ? html`
                  <div id="action-buttons">
                    <a href=${`/edit/${product._id}`} id="edit-btn">Edit</a>
                    <a
                      href=""
                      id="delete-btn"
                      @click=${(e) => onDelete(e, product._id)}
                      >Delete</a
                    >
                  </div>
                `
              : nothing
          }

          ${
            authData && authData._id !== product._ownerId && !isAlreadyBought
              ? html`<div id="action-buttons">
                  <a
                    href=""
                    id="buy-btn"
                    @click=${(e) => handleBuyWrapper(e, product._id)}
                    >Buy</a
                  >
                </div>`
              : nothing
          }

            <!--Bonus - Only for logged-in users ( not authors )-->

        </div>
      </section>
  `;
}

function handleBuyWrapper(e, productId) {
  handleBuy(e, productId).then(() => {
    const buyButton = document.getElementById("buy-btn");
    const buys = document.getElementById("buys");
    buyButton.style.display = "none";
    buys.textContent = Number(buys.textContent) + 1;
  });
}

function onDelete(e, id) {
  e.preventDefault();
  if (confirm("Are you sure?")) {
    // Save it!
    page.redirect("/delete/" + id);
  }
}

export function productDetailsView(ctx) {
  console.log(ctx.product);
  console.log(ctx.authData);
  console.log(ctx.boughtCount);
  console.log(ctx.isBuyedByUser);

  console.log(
    ctx.authData &&
      ctx.authData._id !== ctx.product._ownerId &&
      !ctx.isBuyedByUser
  );

  render(
    productDetailsTemplate(
      ctx.product,
      ctx.authData,
      ctx.boughtCount,
      ctx.isBuyedByUser
    ),
    root
  );
}
