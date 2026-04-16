import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownRef = useRef();
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) =>
    `font-medium transition-colors ${
      isActive(path)
        ? "text-orange-500 font-bold"
        : "text-gray-600 hover:text-orange-500"
    }`;

  // 🔥 close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg text-white">🍽️</div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Bri<span className="text-orange-500">gade</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/plats" className={navLinkClass("/plats")}>
              Plates
            </Link>

            {user ? (
              <div ref={dropdownRef} className="relative">
                {/* USER BUTTON */}
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full text-sm font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>

                  <span className="font-medium">{user.name}</span>
                </button>

                {/* DROPDOWN */}
                {openDropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border rounded-xl shadow-lg overflow-hidden">
                    <Link
                      to="/profile"
                      onClick={() => setOpenDropdown(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setOpenDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
              >
                Login
              </Link>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2">
            Home
          </Link>

          <Link
            to="/plates"
            onClick={() => setIsOpen(false)}
            className="block py-2"
          >
            Plates
          </Link>

          {user ? (
            <>
              <div className="flex items-center gap-2 py-2">
                <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <span>{user.name}</span>
              </div>

              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block py-2"
              >
                Profile
              </Link>

              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full text-left py-2 text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-500 text-white py-3 rounded-xl font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Header;
