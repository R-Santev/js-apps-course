import { render } from "./node_modules/lit-html/lit-html.js";
import page from "./node_modules/page/page.mjs";
import { loadAbout } from "./pages/about.js";
import { loadHome } from "./pages/home.js";
import { loadRecipeDetails } from "./pages/recipeDetails.js";
import { loadRecipes } from "./pages/recipes.js";

const root = document.getElementById("root");
page("/home", loadHome);
page("/contacts", loadHome);
page("/about", loadAbout);
page("/recipes/:recipeId", loadRecipeDetails);
page("/recipes", loadRecipes);
page("*", () => {
  render("<h1>404</h1>", root);
});

page.redirect("/", "/home");

page.start();
