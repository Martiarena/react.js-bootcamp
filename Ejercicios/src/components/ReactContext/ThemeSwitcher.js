import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Modo actual: {theme === "light" ? "☀️ Claro" : "🌙 Oscuro"}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Cambiar Tema
      </button>
    </div>
  );
};

export default ThemeSwitcher;