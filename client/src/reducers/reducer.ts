import { Category } from "../models/category";

interface RootState {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  address: string;
  isAuthenticated: boolean;
  telephone: string;
  title: string;
  description: string;
  images: string;
  // images: string[],
  location: string;
  price: number;
  quantity: number;
  height: number;
  width: number;
  depth: number;
  material: string;
  category_id: string;
  categories: Category[];
  categoryName: string;
}

const initialState: RootState = {
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
  quantity: 1,
  height: 0,
  width: 0,
  depth: 0,
  material: "",
  category_id: "",
  categories: [],
  categoryName: "",
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
    case "SET_NEW_PRODUCT":
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
    case "SET_PRODUCT_IMAGES":
      return {
        ...state,
        images: action.payload,
      };

    case "SET_CATEGORIES":
      const newCategories = action.payload.map((category: Category) => {
        return {name: category.name, id: category.id}
      })
      return {
        ...state,
        categories: newCategories,
      };
      case "SET_CATEGORY_NAME":
        return {
          ...state,
          categoryName: action.payload,
        };
    default:
      return state;
  }
};

export default reducer;
