import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-KE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="bg-white shadow-sm px-8 py-5 flex justify-between items-center">

      {/* Left */}

      <div>

        <h2 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h2>

        <p className="text-gray-500 mt-1">
          Welcome back, Admin
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Search */}

        <div className="relative hidden md:block">

          <FaSearch className="absolute left-4 top-3.5 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-11 pr-4 py-3 w-72 border rounded-xl outline-none focus:ring-2 focus:ring-pink-500"
          />

        </div>

        {/* Date */}

        <div className="hidden lg:block text-right">

          <p className="text-sm text-gray-500">
            Today
          </p>

          <p className="font-semibold">
            {today}
          </p>

        </div>

        {/* Notification */}

        <button className="relative p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition">

          <FaBell className="text-xl text-gray-700" />

          <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
            3
          </span>

        </button>

        {/* Admin */}

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-5xl text-pink-600" />

          <div>

            <h3 className="font-semibold">
              Administrator
            </h3>

            <p className="text-sm text-gray-500">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Topbar;