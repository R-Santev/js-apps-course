import page from "./../node_modules/page/page.mjs";

import * as httpService from "./http.js";
import { productsURL } from "../constants/index.js";
import { getAuthState } from "./auth.js";

const getProducts = () => httpService.get(productsURL);

const createProduct = (body, token) =>
  httpService.post(productsURL, body, token);

export const loadData = async (ctx, next) => {
  ctx.products = await getProducts();
  next();
};

// Event Handlers
export function createProductHandler(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  console.log(Object.fromEntries(formData.entries()));

  const make = formData.get("make");
  const img = formData.get("img");
  const description = formData.get("description");

  createProduct({ make, img, description }, getAuthState().accessToken).then(
    (res) => {
      console.log(res);
      page.redirect("/products");
    }
  );
}
