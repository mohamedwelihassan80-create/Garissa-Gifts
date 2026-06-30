import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSearch,
} from "react-icons/fi";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-20">

          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-7">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-green-700 font-semibold"
                    : "text-gray-700 hover:text-green-700 transition"
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

          {/* Search */}

          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-72">

            <FiSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none ml-2 w-full"
            />

          </div>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-5">

            <ThemeToggle />

            <Link
              to="/cart"
              className="relative text-2xl hover:text-green-700"
            >
              <FiShoppingCart />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-3">

                <span className="font-medium">
                  Hi, {user.name}
                </span>

                <Link
                  to="/orders"
                  className="hover:text-green-700"
                >
                  Orders
                </Link>

                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="text-green-700 font-semibold"
                  >
                    Admin
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>

              </div>
            ) : (
              <div className="flex items-center gap-3">

                <Link
                  to="/login"
                  className="flex items-center gap-1 hover:text-green-700"
                >
                  <FiUser />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg"
                >
                  Register
                </Link>

              </div>
            )}

          </div>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t">

          <div className="px-5 py-4">

            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4">

              <FiSearch />

              <input
                placeholder="Search..."
                className="bg-transparent ml-2 outline-none w-full"
              />

            </div>

            {navLinks.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block py-3 border-b"
              >
                {item.name}
              </NavLink>

            ))}

            {user ? (
              <>

                <NavLink
                  to="/orders"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 border-b"
                >
                  My Orders
                </NavLink>

                {user.role === "admin" && (
                  <NavLink
                    to="/admin"
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 border-b"
                  >
                    Admin Dashboard
                  </NavLink>
                )}

                <NavLink
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 border-b"
                >
                  Cart ({cartCount})
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg"
                >
                  Logout
                </button>

              </>
            ) : (
              <>

                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 border-b"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 border-b"
                >
                  Register
                </NavLink>

              </>
            )}

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;