import page from "./../node_modules/page/page.mjs";

import { authMiddleware } from "./middlewares/authMiddleware.js";
import {
  getBuyCount,
  getProduct,
  getProducts,
  isBuyedByUser,
} from "./services/products.js";
import { createProductView } from "./views/createProduct.js";
import { deleteView } from "./views/deleteView.js";
import { editProductView } from "./views/editView.js";

import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { navbarView } from "./views/navbar.js";
import { productDetailsView } from "./views/productDetails.js";
import { productsView } from "./views/products.js";
import { registerView } from "./views/register.js";

page(authMiddleware);
page(navbarView);
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page(
  "/products/:id",
  getProduct,
  getBuyCount,
  isBuyedByUser,
  productDetailsView
);
page("/products", getProducts, productsView);
page("/create", getProducts, createProductView);
page("/edit/:id", getProduct, editProductView);
page("/delete/:id", deleteView);

page.start();
