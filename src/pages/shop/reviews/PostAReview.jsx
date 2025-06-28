import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { usePostReviewMutation } from '../../../redux/features/reviews/reviewsApi';

const PostAReview = ({ isModalOpen, handleClose }) => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const { refetch } = useFetchProductByIdQuery(id, { skip: !id });
  const [postReview] = usePostReviewMutation();

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = {
      comment,
      rating,
      userId: user?._id,
      productId: id,
    };

    try {
      await postReview(newComment).unwrap();
      alert("Thank you! Your review was submitted.");
      setComment('');
      setRating(0);
      refetch();
      handleClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/70 flex items-center justify-center z-40 px-4 ${
        isModalOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-6 rounded-md shadow-xl w-full max-w-md z-50">
        <h2 className="text-lg font-bold text-[#3E4F63] mb-4">Write a Review</h2>

        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star, index) => (
            <span
              key={index}
              onClick={() => handleRating(star)}
              className="cursor-pointer text-yellow-500 text-xl"
            >
              {rating >= star ? (
                <i className="ri-star-fill"></i>
              ) : (
                <i className="ri-star-line"></i>
              )}
            </span>
          ))}
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows="4"
          placeholder="Share your experience..."
          className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none"
        ></textarea>

        <div className="flex justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#e9b86b] hover:bg-[#d8a556] text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostAReview;
