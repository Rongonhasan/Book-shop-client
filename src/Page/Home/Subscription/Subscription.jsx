

const Subscription = () => {
  const images = [
    'https://via.placeholder.com/400x300?text=Image+1',
    'https://via.placeholder.com/400x300?text=Image+2',
    'https://via.placeholder.com/400x300?text=Image+3',
    'https://via.placeholder.com/400x300?text=Image+4',
    'https://via.placeholder.com/400x300?text=Image+5',
    'https://via.placeholder.com/400x300?text=Image+6',
  ];
  return (
    <>
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

    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our collection of photos from various events and moments at our bookshop.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>
 
  );
}

export default Subscription;
