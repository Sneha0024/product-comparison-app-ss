import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
      <i className={`fas fa-${theme === "light" ? "moon" : "sun"}`}></i>
    </button>
  );
};

export default ThemeToggle;
