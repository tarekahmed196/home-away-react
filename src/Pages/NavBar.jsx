import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/logo.png'
import { AuthContext } from "../Providers/AuthProvider";

// import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
       
      })
      .catch((error) => console.error(error));
  };

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <nav className="bg-cyan-800 border-gray-200 dark:bg-gray-900 w-full ">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto py-4 ">
      <Link
          className="text-xl md:text-5xl flex items-center"
        >
          {/* Navbar Icon  */}
          <img className="h-16 w-28 " src={logo} alt="" />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isExpanded}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isExpanded ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
      <ul style={{alignItems:"center", background:"rgb(21 94 117)"}} className=" text-white font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-cyan-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/bookings" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Destination Details</Link>
        </li>
        
        <li>
          <Link to="/about" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
        </li>
        {/* <li>
          <Link to="/login" className="text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-400 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
        </li> */}
        
        

        <li>
              {user?.email? (
                <>
                  <span className="text-yellow-500 me-2">{user?.displayName}</span>
                  <button className="px-3 py-1 border border-error rounded text-error text-sm hover:text-black hover:bg-error focus:outline-none focus:ring-2 focus:ring-gray-300" onClick={handleLogOut}>Log Out</button>
                </>
              ) : (
                <>
                  
                    <Link className="hover:text-warning text-xl" to="/login">Login</Link>
                  
                </>
              )}
        </li>

        <li>
              {user?.photoURL && (
                <img
                  style={{ height: "40px", borderRadius: "50%" }}
                  src={user.photoURL}
                  alt=""
                ></img>
              
              )}
        </li>
        
      </ul>
    </div>
  </div>
</nav>





    
  );
};

export default Navbar;
