import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <li className="font-semibold"><Link to="/" className="hover:underline btn-outline py-2">Home</Link></li>
      <li className="font-semibold"><Link to="/login" className="hover:underline btn-outline py-2">Login</Link></li>
     
     
    </>
  );

  return (
    <div className="navbar fixed z-20 bg-opacity-10 h-[60px] bg-white text-black w-full">
      <div className="navbar-start">
        <button
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <a className="btn btn-ghost text-xl">
         BO
          <img className="h-10 w-15" src={logo} alt="" />OK</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div className="fixed inset-0 bg-white z-30 p-6">
            <button
              className="absolute top-4 right-4 text-black"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="menu menu-vertical mt-12 space-y-4">
              {menuItems}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
