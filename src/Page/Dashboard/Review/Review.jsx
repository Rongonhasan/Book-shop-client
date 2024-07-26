import { useState, useEffect } from 'react';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: '', comment: '' });

  useEffect(() => {
    // Load reviews from local storage on component mount
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    setReviews(savedReviews);
  }, []);

  useEffect(() => {
    // Save reviews to local storage whenever reviews state changes
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [...prev, newReview]);
    setNewReview({ name: '', rating: '', comment: '' });
  };

  const handleDelete = (index) => {
    setReviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-4 sm:p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Book Reviews</h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">Rating</label>
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          >
            <option value="" disabled>Select Rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">Comment</label>
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition">
          Submit Review
        </button>
      </form>
      <div className="max-w-lg mx-auto mt-8">
        <h2 className="text-3xl font-semibold text-white mb-4">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-center text-white">No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
                  <p className="text-gray-600">Rating: {review.rating}</p>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
