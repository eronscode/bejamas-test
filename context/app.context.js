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

  return {
    state,
    toggleCart,
    loadProducts,
    addToCart,
    resetCart
  };
}

function AppProvider(params) {
  const { state, ...restProps } = useAppActions();

  const value = {
    isCartOpen: state.isCartOpen,
    products: state.products,
    cart: state.cart,
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
