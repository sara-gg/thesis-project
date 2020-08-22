import { NewProduct } from "./models/newProduct";
import { User } from "./models/user";
import { Category } from "./models/category";
const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

export function setRegisterDetails({
  name,
  value,
  option,
}: {
  [name: string]: string;
}) {
  console.log("name", name);
  console.log("value", value);
  console.log("option", option);
  return {
    type: "SET_REGISTER_DETAILS",
    payload: value ? { name, value } : { name, option },
  };
}

export function setIsAuthenticated(payload: boolean) {
  return {
    type: "AUTHENTICATED",
    payload,
  };
}

export function submitRegisterDetails(user: User): any {
  return function (dispatch: any): Promise<any> {
    return fetch(`${BASE_URL}/register`, {
      method: "POST",
      credentials: "include",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log("res.error", res.error);
          throw new Error(`${res.message}`);
        } else {
          console.log("SII");
          const accessToken = res.token;
          dispatch(setIsAuthenticated(true));
          return accessToken;
        }
      });
  };
}

export function setNewProductDetails({
  name,
  value,
  option,
}: {
  [name: string]: string | number | string[];
}) {
  return {
    type: "SET_NEW_PRODUCT",
    payload: value ? { name, value } : { name, option },
  };
}

export function setProductImages(payload: string) {
  return {
    type: "SET_PRODUCT_IMAGES",
    payload,
  };
}

export function submitNewProduct(product: NewProduct): any {
  return function (dispatch: any): Promise<any> {
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
}

export function setCategories(payload: Category) {
  return {
    type: "SET_CATEGORIES",
    payload,
  };
}

export function getCategories(): any {
  return function (dispatch: any): Promise<any> {
    return fetch(`${BASE_URL}/categories`, {
      method: "GET",
      credentials: "include",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setCategories(res));
      })
      .catch((err) => console.error);
  };
}

export function setCategoryName(payload: string) {
  return {
    type: "SET_CATEGORY_NAME",
    payload,
  };
}
