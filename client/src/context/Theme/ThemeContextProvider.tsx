import { useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  function toggleTheme() {
    document.documentElement.classList.toggle("dark")
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
