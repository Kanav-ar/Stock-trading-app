import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Menu,Moon,Sun } from "lucide-react";


export default function Navbar() {
  const [isDark,setIsDark] = useState(true);
  return (
    <>
      <div className="fixed top-0 flex items-center pl-46 py-6 shadow dark:bg-black transition-all duration-1000">
        <div className="flex-1">
          <img src={logo} alt="logo" className="w-32.25" />
        </div>
        <div id="nav-tags" className="flex flex-1 justify-center space-x-14 dark:text-white text-gray-800">
          <a
            href=""
            className=" hover:text-blue-500 pointer-cursor"
          >
            Signup
          </a>
          <a
            href=""
            className=" hover:text-blue-500 pointer-cursor"
          >
            About
          </a>
          <a
            href=""
            className=" hover:text-blue-500 pointer-cursor"
          >
            Products
          </a>
          <a
            href=""
            className=" hover:text-blue-500 pointer-cursor"
          >
            Pricing
          </a>
          <a
            href=""
            className=" hover:text-blue-500 pointer-cursor"
          >
            Support
          </a>
        
          <Menu/>
        
        </div>
        <div className="mx-16 rounded-full p-2 cursor-pointer dark:text-white dark:hover:bg-white/20 ">
          {isDark?<Moon strokeWidth={2.5} />:<Sun strokeWidth={2.5} />}
        </div>
      </div>
    </>
  );
}
