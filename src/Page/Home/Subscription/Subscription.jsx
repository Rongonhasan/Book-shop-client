import React from 'react';

const Subscription = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Subscribe to Our Newsletter</h2>
        <p className="mt-4 text-gray-700 text-center">Get the latest updates, discounts, and news directly to your inbox.</p>
        
        <div className="mt-8 flex flex-wrap justify-center">
          {/* Sign-up Form */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Email Address</label>
                  <input type="email" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" placeholder="you@example.com" />
                </div>
                <div>
                  <button type="submit" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="w-full lg:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">Why Subscribe?</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-700">✓ Exclusive discounts on new books</li>
                <li className="text-gray-700">✓ Early access to upcoming events</li>
                <li className="text-gray-700">✓ Personalized book recommendations</li>
                <li className="text-gray-700">✓ Updates on the latest news and articles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
