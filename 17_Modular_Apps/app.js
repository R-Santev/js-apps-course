import page from "./node_modules/page/page.mjs";

import { loginView } from "./views/loginView.js";
import { productsView } from "./views/products.js";
import { navbarView } from "./views/navbarView.js";
import { logoutView } from "./views/logoutView.js";
import { createProductView } from "./views/createProduct.js";

import * as productsService from "./services/products.js";
import * as authMiddleware from "./middlewares/auth.js";

page(authMiddleware.injectAuth);
page(navbarView);
page.redirect("/", "/products");
page("/products", productsService.loadData, productsView);
page("/products/create", createProductView);

page("/login", loginView);
page("/logout", logoutView);

page.start();
