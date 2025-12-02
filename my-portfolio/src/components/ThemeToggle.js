
import React from "react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 border rounded-lg text-sm dark:border-gray-500"
    >
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
