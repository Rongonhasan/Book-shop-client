

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Contact Us</h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Location and Map */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
            <p className="mt-4 text-gray-700">Pti Mor, Bogura, Bangladesh</p>
            <iframe 
              className="w-full h-64 mt-4 rounded-lg"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bogura+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
              loading="lazy"
              
            ></iframe> 
          
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Get in Touch</h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50" />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-opacity-50"></textarea>
              </div>
              <div>
                <button type="submit" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
