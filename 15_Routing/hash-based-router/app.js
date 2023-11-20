const routes = {
  "#home": () => "<h1>Home</h1>",
  "#about": () => "<h1>About</h1>",
  "#contacts": () => "<h1>Contact</h1>",
};

const root = document.getElementById("root");
window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  root.innerHTML = routes[hash]();
});

root.innerHTML = routes[window.location.hash || "#home"]();
