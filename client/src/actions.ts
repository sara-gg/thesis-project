const BASE_URL = process.env.BASE_URL || "http://localhost:3001";

export function setRegisterDetails({
  name,
  value,
}: {
  [name: string]: string;
}) {
  return {
    type: "SET_REGISTER_DETAILS",
    payload: { name, value },
  };
}

export function setIsAuthenticated(payload: boolean) {
  return {
    type: "AUTHENTICATED",
    payload,
  };
}

export interface User {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  address: string;
  telephone: string;
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
          throw new Error(`${res.message}`);
        } else {
          const accessToken = res.token;
          dispatch(setIsAuthenticated(true));
          return accessToken;
        }
      });
  };
}
