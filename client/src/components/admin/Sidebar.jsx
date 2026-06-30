import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaTags,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin",
    },
    {
      name: "Products",
      icon: <FaBoxOpen />,
      path: "/admin/products",
    },
    {
      name: "Orders",
      icon: <FaShoppingCart />,
      path: "/admin/orders",
    },
    {
      name: "Customers",
      icon: <FaUsers />,
      path: "/admin/customers",
    },
    {
      name: "Categories",
      icon: <FaTags />,
      path: "/admin/categories",
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/admin/reports",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gray-900 text-white flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-gray-700">

        <h1 className="text-2xl font-bold text-pink-500">
          Garissa Gifts
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Admin Dashboard
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-5">

        <ul className="space-y-3">

          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-5 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-pink-600 text-white shadow-lg"
                      : "hover:bg-gray-800 text-gray-300"
                  }`
                }
              >
                <span className="text-xl">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}

        </ul>

      </nav>

      {/* Logout */}

      <div className="p-5 border-t border-gray-700">

        <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl hover:bg-red-600 transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;