const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white text-2xl shadow-lg">
        🌹
      </div>

      <div>
        <h1 className="text-xl font-bold text-green-700">
          Garissa Gifts
        </h1>

        <p className="text-sm text-gray-500">
          & Flowers Hub
        </p>
      </div>
    </div>
  );
};

export default Logo;