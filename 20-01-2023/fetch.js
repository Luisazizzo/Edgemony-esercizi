const aggiuntaPost = (obj, param) => {
  return fetch("https://api.escuelajs.co/api/v1/" + param, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((res) => res.json());
};

const eliminaPost = (callType, idProduct) => {
  return fetch(
    "https://api.escuelajs.co/api/v1/" + callType + `/` + idProduct,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

const modificaPost = (obj, id) => {
  return fetch("https://api.escuelajs.co/api/v1/products/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((res) => res.json());
};

export { aggiuntaPost, modificaPost, eliminaPost };
