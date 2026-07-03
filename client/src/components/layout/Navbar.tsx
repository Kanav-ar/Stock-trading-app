import logo from "../../assets/logo.svg";
export default function Navbar() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-10 py-5">
          <div className="">
            <img src={logo} alt="logo" className="w-32.25" />
          </div>
          <div id="nav-tags" className=" w-[50%] flex justify-around px-4">
            <a
              href=""
              className="opacity-75 hover:text-blue-500 hover:opacity-100 pointer-cursor"
            >
              Signup
            </a>
            <a
              href=""
              className="opacity-75 hover:text-blue-500 hover:opacity-100 pointer-cursor"
            >
              About
            </a>
            <a
              href=""
              className="opacity-75 hover:text-blue-500 hover:opacity-100 pointer-cursor"
            >
              Products
            </a>
            <a
              href=""
              className="opacity-75 hover:text-blue-500 hover:opacity-100 pointer-cursor"
            >
              Pricing
            </a>
            <a
              href=""
              className="opacity-75 hover:text-blue-500 hover:opacity-100 pointer-cursor"
            >
              Support
            </a>
          </div>
          <div>
            <a href=""></a>
                
          </div>
        </div>
      </div>
    </>
  );
}
