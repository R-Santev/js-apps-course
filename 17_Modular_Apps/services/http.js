export function get(url) {
  return fetch(url, {
    method: "GET",
  }).then((res) => {
    if (!res) {
      return;
    }

    return res.json();
  });
}

export function post(url, body, authToken) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (authToken) {
    headers["X-Authorization"] = authToken;
  }

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.code && data.code != 200) {
        throw new Error(data.message);
      }

      return data;
    });
}
