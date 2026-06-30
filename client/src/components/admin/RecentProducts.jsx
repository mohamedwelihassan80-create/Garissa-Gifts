const RecentProducts = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recently Added Products
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between border-b pb-3">

          <span>🌹 Red Roses Bouquet</span>

          <span className="font-semibold">
            KSh 2,500
          </span>

        </div>

        <div className="flex justify-between border-b pb-3">

          <span>🎂 Birthday Cake</span>

          <span className="font-semibold">
            KSh 3,000
          </span>

        </div>

        <div className="flex justify-between">

          <span>🎁 Gift Hamper</span>

          <span className="font-semibold">
            KSh 4,800
          </span>

        </div>

      </div>

    </div>
  );
};

export default RecentProducts;