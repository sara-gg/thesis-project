const initialState = {
  isAuthenticated: false,
  // shoppingCart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    // case "ADD ITEM TO CART":
    //   return {
    //     shoppingCart: [...state.shoppingCart, action.payload]
    //   };

    default:
      return state;
  }
};

export default reducer;
