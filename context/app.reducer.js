import { sortArrayBy } from "@utils/methods";

export const INITIAL_STATE = {
  isCartOpen: null,
  products: [],
  cart: [],
  sortOptions: null,
  priceFilterOptions: null,
  categoryFilterOptions: []
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
    case "SORT_PRODUCTS":
      const sortVal = {
          key: action.data.key,
          order: action.data.order
      };
      return { ...state, sortOptions: sortVal };
    case "FILTER_PRODUCTS_BY_CATEGORY":
      return { ...state, categoryFilterOptions : action.data };
    case "FILTER_PRODUCTS_BY_PRICE":
      return { ...state, priceFilterOptions: action.data };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
