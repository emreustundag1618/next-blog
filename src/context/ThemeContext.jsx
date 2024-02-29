"use client";

import { createContext } from "react";
import { useState, useEffect, useCallback} from "react";

export const ThemeContext = createContext();

// const getFromLocalStorage = () => {
//   // Transition: we dont have a browser in our server. so if browser is open then get item from LS
//   // this is because of next js SSR, so we have to check there is a browser
//   if (typeof window !== "undefined") {
//     const value = localStorage.getItem("theme");
//     // if local storage is empty, get "theme" value as "light"
//     return value || "light";
//   }
//   return "light";
// };

export const ThemeContextProvider = ({ children }) => {

  const [theme, setTheme] = useState("light");

  // getFromLocalStorage function only re-created when necessary with useCallback.
  const getFromLocalStorage = useCallback(() => {
    // Check if window object is defined (i.e., if the code is running in the browser)
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("theme");
      // if local storage is empty, return "light" as default theme
      return value || "light";
    }
    return "light"; // Fallback for SSR
  }, []);

  const toggle = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    // Get theme value from localStorage after the component mounts on the client-side
    setTheme(getFromLocalStorage());
  }, [getFromLocalStorage]); // Run effect only once after initial render

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);
  }, [theme]); // Re-run effect whenever theme changes

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
