const root = document.getElementById("root");

function aboutTemplate() {
  return `<h1>About</h1>`;
}

export function loadAbout(ctx, next) {
  root.innerHTML = aboutTemplate();
}
