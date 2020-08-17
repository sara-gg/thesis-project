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

export default registerUser;
