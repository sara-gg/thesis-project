const BASE_URL = "http://localhost:3079";

const registerUser = (user: any) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .then((token) => {
      return token;
    })
    .catch((err) => console.log("I got here", err));
};

const login = (user: any) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default { registerUser, login };
