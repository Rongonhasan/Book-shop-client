

const EventsNews = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Events and News</h2>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Events */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Upcoming Events</h3>
            <ul className="mt-4 space-y-4">
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium text-gray-800">Book Signing with Author XYZ</h4>
                <p className="text-gray-600">Date: July 10, 2024</p>
                <p className="text-gray-600">Location: Main Bookshop Hall</p>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium text-gray-800">Reading Session: Classic Literature</h4>
                <p className="text-gray-600">Date: July 20, 2024</p>
                <p className="text-gray-600">Location: Reading Room</p>
              </li>
              <li>
                <h4 className="text-lg font-medium text-gray-800">Children's Storytime</h4>
                <p className="text-gray-600">Date: July 25, 2024</p>
                <p className="text-gray-600">Location: Kids' Corner</p>
              </li>
            </ul>
          </div>
          
          {/* Blog/News */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900">Latest News and Articles</h3>
            <ul className="mt-4 space-y-4">
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium text-gray-800">Top 10 Books to Read This Summer</h4>
                <p className="text-gray-600">Posted on: July 1, 2024</p>
                <p className="text-gray-600">Discover the best books to enjoy during the summer break.</p>
              </li>
              <li className="border-b pb-4">
                <h4 className="text-lg font-medium text-gray-800">Interview with Author ABC</h4>
                <p className="text-gray-600">Posted on: June 25, 2024</p>
                <p className="text-gray-600">An in-depth interview with the author of the bestselling novel.</p>
              </li>
              <li>
                <h4 className="text-lg font-medium text-gray-800">The Benefits of Reading Every Day</h4>
                <p className="text-gray-600">Posted on: June 20, 2024</p>
                <p className="text-gray-600">Explore how daily reading can improve your life.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsNews;
