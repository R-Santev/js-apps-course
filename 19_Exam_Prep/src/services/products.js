import page from "./../../node_modules/page/page.mjs";

import { productsUrl } from "../constants/index.js";
import { getAuthData } from "./auth.js";

export function getProducts(ctx, next) {
  fetch(productsUrl)
    .then((res) => res.json())
    .then((data) => {
      ctx.products = data;
      next();
    });
}

export function getProduct(ctx, next) {
  fetch(`http://localhost:3030/data/products/${ctx.params.id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      ctx.product = data;
      next();
    });
}

export function getBuyCount(ctx, next) {
  fetch(
    `http://localhost:3030/data/bought?where=productId%3D%22${ctx.product._id}%22&distinct=_ownerId&count`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      ctx.boughtCount = data;
      next();
    });
}

export function isBuyedByUser(ctx, next) {
  fetch(
    `http://localhost:3030/data/bought?where=productId%3D%22${ctx.product._id}%22%20and%20_ownerId%3D%22${ctx.authData._id}%22&count`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      ctx.isBuyedByUser = data !== 0;
      next();
    });
}

export function handleCreateProduct(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get("name");
  const imageUrl = formData.get("imageUrl");
  const category = formData.get("category");
  const description = formData.get("description");
  const price = formData.get("price");

  if (!name || !imageUrl || !category || !description || !price) {
    return alert("All fields are required!");
  }

  const body = {
    name,
    imageUrl,
    category,
    description,
    price,
  };

  createProduct(body)
    .then((res) => {
      page.redirect("/products");
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

export function handleEditProduct(e, id) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get("name");
  const imageUrl = formData.get("imageUrl");
  const category = formData.get("category");
  const description = formData.get("description");
  const price = formData.get("price");

  if (!name || !imageUrl || !category || !description || !price) {
    return alert("All fields are required!");
  }

  const body = {
    name,
    imageUrl,
    category,
    description,
    price,
  };

  editProduct(body, id)
    .then((res) => {
      page.redirect("/products");
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

function createProduct(body) {
  return fetch(productsUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${getAuthData().accessToken}`,
    },
    body: JSON.stringify(body),
  });
}

function editProduct(body, id) {
  return fetch(`http://localhost:3030/data/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${getAuthData().accessToken}`,
    },
    body: JSON.stringify(body),
  });
}

function buy(body) {
  return fetch(`http://localhost:3030/data/bought`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${getAuthData().accessToken}`,
    },
    body: JSON.stringify(body),
  });
}

export function handleBuy(e, productId) {
  e.preventDefault();

  const body = {
    productId,
  };

  return buy(body, productId)
    .then((res) => {
      // page.redirect("/products/" + productId);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

// DELETE

export function deleteProduct(id) {
  return fetch(`http://localhost:3030/data/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": `${getAuthData().accessToken}`,
    },
  });
}
