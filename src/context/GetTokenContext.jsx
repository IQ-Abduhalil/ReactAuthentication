import { createContext, useState } from "react";
import { UseGetLocal } from "../Hooks/UseGetLocal";

export const TokenContext = createContext();

export function GetTokenContextProvider({ children }) {
  const myLocal = UseGetLocal("my_token");
  const [token, setToken] = useState(myLocal);

  let values = {
    token: token,
    setToken: setToken,
  };

  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
}
