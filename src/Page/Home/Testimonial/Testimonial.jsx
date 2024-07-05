

const testimonials = [
  {
    name: "John Doe",
    review: "A wonderful place to find your next favorite book. The staff is incredibly helpful and the selection is fantastic!",
    image: "https://img.freepik.com/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?uid=R84206962&ga=GA1.2.2015771831.1686906543&semt=ais_user"
  },
  {
    name: "Jane Smith",
    review: "I love the cozy atmosphere and the wide variety of genres. Highly recommended!",
    image: "https://img.freepik.com/free-photo/young-successful-businessman-showing-okay-grey-wall_176420-55.jpg?uid=R84206962&ga=GA1.2.2015771831.1686906543&semt=ais_user"
  },
  {
    name: "Sam Wilson",
    review: "The bookshop has an amazing collection of rare and first edition books. A must-visit for any book lover!",
    image: "https://img.freepik.com/free-photo/handsome-smiling-blond-man-showing-thumbs-up-encourage-person-rooting-you-pleased-guy-recommending-product-leave-positive-feedback-like-approve-service-yellow-background_1258-59732.jpg?uid=R84206962&ga=GA1.2.2015771831.1686906543&semt=ais_user"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">What Our Customers Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img className="h-12 w-12 rounded-full object-cover mr-4" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <p className="text-lg font-semibold text-gray-900">{testimonial.name}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
