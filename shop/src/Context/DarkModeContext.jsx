import { createContext } from "react";

const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  
  <DarkModeContext.Provider> {children}</DarkModeContext.Provider>;
};
