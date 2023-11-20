const root = document.getElementById("root");

function homeTemplate() {
  return `<h1>Home</h1>`;
}

export function loadHome(ctx, next) {
  root.innerHTML = homeTemplate();
}
