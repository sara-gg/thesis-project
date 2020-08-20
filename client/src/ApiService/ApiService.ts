import { Category } from "../models/category";

const BASE_URL = "http://localhost:3001";

const registerUser = (user: any) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => {
      console.log('res:', res)
      return res.json();
    })
    .then((token) => {
      return token;
    })
    .catch((err) => {
      console.log("I got here", err)
    });
};

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
  return fetch(`${BASE_URL}/product`, {
    method: "POST",
    credentials: "include",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
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
    .catch((err) => console.error(err))
}

const getCategories = (): Promise<any[]> => {
  return fetch(`${BASE_URL}/categories`, {
    method: "GET",
    credentials: "include",
    mode: "cors",
  }).then((res) => res.json())
    .catch((err) => console.error(err))
}

export default { registerUser, login, createNewProduct, getProductsForCategory, getCategories };
