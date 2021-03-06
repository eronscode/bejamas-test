import { createContext, useReducer, useContext } from "react";
import { INITIAL_STATE, appReducer } from "./app.reducer";

const AppContext = createContext();

function useAppActions() {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  function toggleCart() {
    dispatch({ type: "TOGGLE_CART" });
  }

  function loadProducts(data) {
    dispatch({ type: "INITIALIZE_PRODUCT", data });
  }

  function addToCart(data) {
    dispatch({ type: "ADD_TO_CART", data });
  }

  function resetCart() {
    dispatch({ type: "RESET_CART" });
  }

  function sortProducts(data) {
    dispatch({ type: "SORT_PRODUCTS", data });
  }

  function filterProductsByCategory(data) {
    dispatch({ type: "FILTER_PRODUCTS_BY_CATEGORY", data });
  }

  function filterProductsByPrice(data) {
    dispatch({ type: "FILTER_PRODUCTS_BY_PRICE", data });
  }

  return {
    state,
    toggleCart,
    loadProducts,
    addToCart,
    resetCart,
    sortProducts,
    filterProductsByCategory,
    filterProductsByPrice,
  };
}

function AppProvider(params) {
  const { state, ...restProps } = useAppActions();

  const value = {
    isCartOpen: state.isCartOpen,
    cart: state.cart,
    products: state.products,
    sortOptions: state.sortOptions,
    priceFilterOptions: state.priceFilterOptions,
    categoryFilterOptions: state.categoryFilterOptions,
    ...restProps,
  };
  return <AppContext.Provider value={value} {...params} />;
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext must be used with the AppProvider  component"
    );
  }

  return context;
}

export { AppProvider, useAppContext };
