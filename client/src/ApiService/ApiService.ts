const BASE_URL = "http://localhost:3001";

const login = async (user: any) => {
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

const createNewProduct = async (product: object) => {
  const token = localStorage.getItem("accessToken");
  return fetch(`${BASE_URL}/product`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getProductsForCategory = (categoryId: number): Promise<any> => {
  return fetch(`${BASE_URL}/products?category_id=${categoryId}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  })
    .then((res) => res.json())
    .catch((err) => console.error);
};

const getCategories = (): Promise<any[]> => {
  return fetch(`${BASE_URL}/categories`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error);
};

const getAllProducts = (): Promise<any> => {
  return fetch(`${BASE_URL}/products`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => console.error);
};

const getProductsForUser = (id: Number): Promise<any> => {
  return fetch(`${BASE_URL}/products?user_id=${id}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  })
    .then((res) => res.json())
    .catch((err) => console.error);
};

const deleteProduct = (id: Number): Promise<any> => {
  console.log("clicked deleteProduct in ApiService with id", id);
  const token = localStorage.getItem("accessToken");
  return fetch(`${BASE_URL}/product/${id}`, {
    method: "DELETE",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error);
};

const getUserData = (id: Number): Promise<any> => {
  const token = localStorage.getItem("accessToken");
  console.log("accessToken in apiservice getuserdata", token);
  return fetch(`${BASE_URL}/user/${id}`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export default {
  login,
  createNewProduct,
  getProductsForCategory,
  getCategories,
  getAllProducts,
  getProductsForUser,
  deleteProduct,
  getUserData,
};
