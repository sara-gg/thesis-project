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
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INPUT_REGISTER":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
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
