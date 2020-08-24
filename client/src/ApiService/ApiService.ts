import { Product } from "../models/product";

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

const createNewProduct = async (product: Product, form: any, image?: File) => {
  const token = localStorage.getItem("accessToken");
  let formData = new FormData(form);
  if (image) {
    formData.append("images", image);
  }
  formData.set("category_id", product.category_id);
  return fetch(`${BASE_URL}/product`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
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
      return res;
    })
    .catch((err) => console.error(err));
};

const getBasketProducts = (): Promise<any> => {
  const token = localStorage.getItem("accessToken");
  console.log(token)
  return fetch(`${BASE_URL}/basket_products`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .catch(err => console.error(err));
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

const deleteBasketProduct = (id: Number): Promise<any> => {
  const token = localStorage.getItem("accessToken");
  return fetch(`${BASE_URL}/basket_products/${id}`, {
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
  getBasketProducts,
  getProductsForUser,
  deleteBasketProduct,
  deleteProduct,
  getUserData
};
