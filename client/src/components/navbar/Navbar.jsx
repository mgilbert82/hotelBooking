import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-400 flex justify-center">
        <nav className="w-full flex justify-between align-items-center p-5 max-w-screen-xl text-white">
          {/* Logo */}
          <Link to="/">
            <span className="text-lg font-bold ms-4">
              <FontAwesomeIcon icon={faKey} className="me-2" />
              HotelBooking
            </span>
          </Link>
          {/* Register & Login Button */}
          <div className="flex justify-center align">
            <button className="bg-white rounded-md ml-2 py-1 px-2 text-blue-500 text-sm shadow-sm shadow-blue-700 cursor-pointer hover:bg-blue-500 hover:text-white">
              Register
            </button>
            <button className="bg-white rounded-md ml-2 py-1 px-2 text-blue-500 text-sm shadow-sm shadow-blue-700 cursor-pointer hover:bg-blue-500 hover:text-white">
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
