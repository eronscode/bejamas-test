export const INITIAL_STATE = {
  isCartOpen: null,
};

export function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, isCartOpen: !state.isCartOpen };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
