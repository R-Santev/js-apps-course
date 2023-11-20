const root = document.getElementById("root");
import page from "./../node_modules/page/page.mjs";
import { render, html } from "./../node_modules/lit-html/lit-html.js";

function getRecipe(id) {
  console.log("id: ", id);
  return fetch(`http://localhost:3030/data/recipes/${id}`, {
    method: "GET",
  }).then((res) => res.json());
}

function recipeDetailsTemplate(recipe) {
  return html`
    <section style="display: flex; justify-content: space-around">
      <h5 class="card-title">${recipe.name}</h5>
      <p class="card-text">${recipe.ingredients.join(", ")}</p>
    </section>
  `;
}

export function loadRecipeDetails(ctx, next) {
  console.log(ctx.params.recipeId);
  getRecipe(ctx.params.recipeId)
    .then((recipe) => {
      console.log(recipe);
      render(recipeDetailsTemplate(recipe), root);
    })
    .catch((err) => {
      console.log(err);
      page.redirect("/recipes");
    });
}
