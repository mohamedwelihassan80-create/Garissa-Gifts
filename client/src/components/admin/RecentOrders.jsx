const RecentOrders = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Order</th>

              <th className="text-left py-3">Customer</th>

              <th className="text-left py-3">Status</th>

              <th className="text-left py-3">Total</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">

              <td className="py-4">#1034</td>

              <td>Mohammed Hassan</td>

              <td>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Completed
                </span>

              </td>

              <td>KSh 4,500</td>

            </tr>

            <tr className="border-b">

              <td className="py-4">#1035</td>

              <td>Amina Ali</td>

              <td>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Pending
                </span>

              </td>

              <td>KSh 2,800</td>

            </tr>

            <tr>

              <td className="py-4">#1036</td>

              <td>Ahmed Noor</td>

              <td>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Processing
                </span>

              </td>

              <td>KSh 6,300</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default RecentOrders;