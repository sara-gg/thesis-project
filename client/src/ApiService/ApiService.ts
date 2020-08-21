import { Category } from "../models/category";

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
  console.log("product", product);
  const token = localStorage.getItem("accessToken");
  console.log("token", token);
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

const getProductsForCategory = (category: Category): Promise<any> => {
  return fetch(`${BASE_URL}/products?category_id=${category.id}`, {
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

export default {
  login,
  createNewProduct,
  getProductsForCategory,
  getCategories,
  getAllProducts,
};
