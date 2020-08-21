interface RootState {
  name: string,
  lastname: string,
  username: string,
  email: string,
  password: string,
  birthdate: string,
  gender: string,
  address: string,
  isAuthenticated: boolean,
  telephone: string,
  title: string,
  description: string,
  images: string[],
  location: string,
  price: number,
  quantity: number,
  height: number,
  width: number,
  depth: number,
  materials: string,
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
  images: [] as string[],
  location: "",
  price: 0,
  quantity: 0,
  height: 0,
  width: 0,
  depth: 0,
  materials: "",
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

    default:
      return state;
  }
};

export default reducer;
