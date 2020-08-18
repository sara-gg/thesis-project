const initialState = {
  isAuthenticated: false,
  // shoppingCart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "INCREMENT":
    //   return {
    //     count: state.count + 1,
    //   };

    // case "DECREMENT":
    //   return {
    //     count: state.count - 1,
    //   };

    // case "INCREMENT 55":
    //   return {
    //     count: action.payload,
    //   };
    case "AUTHENTICATED":
      return {
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
