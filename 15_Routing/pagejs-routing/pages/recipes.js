const root = document.getElementById("root");
import { render, html } from "./../node_modules/lit-html/lit-html.js";

function getRecipes() {
  return fetch("http://localhost:3030/data/recipes", { method: "GET" }).then(
    (res) => res.json()
  );
}

function recipesTemplate(recipes) {
  return html`
    <section style="display: flex; justify-content: space-around">
      ${recipes.map(
        (recipe) => html`
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${recipe.name}</h5>
              <p class="card-text">${recipe.ingredients.join(", ")}</p>
              <a href=${`/recipes/${recipe._id}`} class="btn btn-primary"
                >View more</a
              >
            </div>
          </div>
        `
      )}
    </section>
  `;
}

export function loadRecipes(ctx, next) {
  console.log(ctx);

  getRecipes().then((recipes) => {
    render(recipesTemplate(recipes), root);
  });
}
