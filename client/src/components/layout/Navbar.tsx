import logo from "../../assets/logo.svg";
import { Menu, Moon, Sun } from "lucide-react";
import useTheme from "../../context/Theme/themeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="w-full bg-white flex items-center pl-46 py-6 shadow fixed top-0 dark:bg-black transition-all duration-1000">
        <div className="flex-1">
          <img src={logo} alt="logo" className="w-32.25" />
        </div>
        <div
          id="nav-tags"
          className="flex flex-1 justify-center space-x-14 dark:text-white text-gray-800"
        >
          <a href="" className = "hover:text-blue-500 pointer-cursor">
            Signup
          </a>
          <a href="" className = "hover:text-blue-500 pointer-cursor">
            About
          </a>
          <a href="" className = "hover:text-blue-500 pointer-cursor">
            Products
          </a>
          <a href="" className = "hover:text-blue-500 pointer-cursor">
            Pricing
          </a>
          <a href="" className = "hover:text-blue-500 pointer-cursor">
            Support
          </a>

          <Menu />
        </div>
        <button
          className="mx-16 rounded-full p-2 cursor-pointer hover:bg-black/20 dark:text-white dark:hover:bg-white/20"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Moon strokeWidth={2.5} />
          ) : (
            <Sun strokeWidth={2.5} />
          )}
        </button>
      </div>
    </>
  );
}
