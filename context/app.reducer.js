export const INITIAL_STATE = {
  isCartOpen: null,
  products: [],
  cart: [],
};

export function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };
    case "INITIALIZE_PRODUCT":
      return { ...state, products: action.data };
    case "ADD_TO_CART":
      return { ...state, isCartOpen: true, cart: [...state.cart, action.data] };
    case "RESET_CART":
      return { ...state, cart: [], isCartOpen: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
