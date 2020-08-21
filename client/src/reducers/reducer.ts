import { RootState } from "../models/rootstate";

const initialState: RootState = {
  id: 0,
  name: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  birthdate: "",
  gender: "",
  address: "",
  isAuthenticated: false,
  telephone: "",
  title: "",
  description: "",
  // images: [] as string[],
  images: "",
  location: "",
  price: 0,
  quantity: 0,
  height: 0,
  width: 0,
  depth: 0,
  materials: "",
  category_id: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_REGISTER_DETAILS":
      if (action.payload.option) {
        return {
          ...state,
          [action.payload.name]: action.payload.option,
        };
      } else {
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      }
    case "AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case "SET_USER_DATA":
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        isAuthenticated: action.payload,
        lastname: action.payload.lastname,
      };

    default:
      return state;
  }
};

export default reducer;
