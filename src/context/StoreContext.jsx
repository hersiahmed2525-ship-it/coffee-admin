import { createContext, useContext, useEffect, useState } from "react";
import { getStoreInfo } from "../api/products";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStoreInfo()
      .then(setStore)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <StoreContext.Provider value={{ store, error }}>
      {children}
    </StoreContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
