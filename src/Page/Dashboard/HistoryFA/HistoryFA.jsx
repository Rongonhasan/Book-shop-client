import  { useState, useEffect } from 'react';

const HistoryFa = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Sample payment data
    const samplePayments = [
      { id: 1, date: '2024-07-01', amount: '$50.00', method: 'Credit Card', status: 'Completed' },
      { id: 2, date: '2024-06-20', amount: '$30.00', method: 'PayPal', status: 'Completed' },
      { id: 3, date: '2024-06-15', amount: '$20.00', method: 'Credit Card', status: 'Pending' },
    ];
    setPayments(samplePayments);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-4 flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold mb-6">Payment History</h1>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left text-gray-700">Date</th>
              <th className="px-4 py-2 text-left text-gray-700">Amount</th>
              <th className="px-4 py-2 text-left text-gray-700">Method</th>
              <th className="px-4 py-2 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{payment.date}</td>
                <td className="border px-4 py-2">{payment.amount}</td>
                <td className="border px-4 py-2">{payment.method}</td>
                <td className="border px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-white ${
                    payment.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryFa;

