
import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Hero", "About", "Skills", "Projects", "Certificates", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Portfolio
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-800 dark:text-gray-200">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-blue-500"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}

          {/* Dark Mode Switch */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <Sun className="text-yellow-300" />
            ) : (
              <Moon className="text-gray-700" />
            )}
          </button>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 pb-4"
        >
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <button
              className="mt-4"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-gray-800" />
              )}
            </button>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
