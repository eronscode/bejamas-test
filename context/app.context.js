import { createContext, useReducer, useContext } from "react";
import { INITIAL_STATE, appReducer } from "./app.reducer";

const AppContext = createContext();

function useAppActions() {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  function toggleCart() {
    dispatch({ type: "TOGGLE_CART" });
  }

  return {
    state,
    toggleCart,
    dispatch,
  };
}

function AppProvider(params) {
  const { state, toggleCart } = useAppActions();

  const value = {
    isCartOpen: state.isCartOpen,
    toggleCart,
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
