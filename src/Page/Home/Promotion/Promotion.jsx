

const promotions = [
  {
    title: "Summer Sale",
    description: "Get up to 50% off on select titles. Limited time offer!",
    image: "https://img.freepik.com/free-vector/gradient-summer-illustration_23-2148944511.jpg?uid=R84206962&ga=GA1.2.2015771831.1686906543&semt=ais_user",
    link: "#"
  },
  {
    title: "New Arrivals Discount",
    description: "Enjoy a 10% discount on all new arrivals this month.",
    image: "https://img.freepik.com/free-vector/new-arrival-design-with-confetti-concept_23-2147891292.jpg?uid=R84206962&ga=GA1.2.2015771831.1686906543&semt=ais_user",
    link: "#"
  },
  {
    title: "Member Exclusive",
    description: "Sign up for our newsletter and get a 20% discount on your first purchase.",
    image: "https://img.freepik.com/free-vector/golden-badge-premium-products_1017-5142.jpg?uid=R84206962&ga=GA1.2.2015771831.1686906543&semt=ais_user",
    link: "#"
  }
];

const Promotions = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Current Promotions</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promotion, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img className="h-48 w-full object-cover rounded-lg mb-4" src={promotion.image} alt={promotion.title} />
              <h3 className="text-xl font-semibold text-gray-900">{promotion.title}</h3>
              <p className="mt-2 text-gray-700">{promotion.description}</p>
              <a href={promotion.link} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
<div className="text-center mt-5">
<button className="btn btn-outline btn-primary text-center w-full">Buy Book</button>
</div>
    </div>
  );
}

export default Promotions;
