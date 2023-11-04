const createView = document.querySelector("#create");

export function loadCreate() {
  createView.style.display = "block";

  console.log(createView);
  const form = createView.querySelector("form");

  console.log(form);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.ingredients = data.ingredients.split("\n");
    data.steps = data.steps.split("\n");

    fetchRecipes(data).then(() => {
      alert("Recipe created");
    });
  });
}

function fetchRecipes(data) {
  return fetch("http://localhost:3030/data/recipes", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": sessionStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
    .then(async (res) => res.json())
    .then((data) => {
      return data;
    });
}
