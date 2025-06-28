import React, { useState } from 'react';
import commentorIcon from "../../../assets/avatar.png";
import { formatDate } from '../../../utils/formateDate';
import RatingStars from '../../../components/RatingStars';
import PostAReview from './PostAReview';

const ReviewsCard = ({ productReviews }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reviews = productReviews || [];

  const handleOpenReviewModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="my-6 bg-white p-8 rounded-xl shadow">
      <div>
        {reviews.length > 0 ? (
          <div>
            <h3 className="text-xl font-semibold text-[#3E4F63] mb-4">All Traveler Reviews</h3>
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border p-6 rounded-md shadow-sm">
                  <div className="flex gap-4 items-center mb-4">
                    <img src={commentorIcon} alt="avatar" className="w-14 h-14 rounded-full" />
                    <div>
                      <p className="text-blue-500 font-semibold capitalize">{review?.userId?.username}</p>
                      <p className="text-sm italic text-gray-500">{formatDate(review?.updatedAt)}</p>
                      <RatingStars rating={review?.rating} />
                    </div>
                  </div>
                  <p className="text-gray-700">{review?.comment}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* Add Review Button */}
      <div className="mt-12">
        <button
          onClick={handleOpenReviewModal}
          className="px-6 py-3 bg-[#3E4F63] hover:bg-[#3E4F63] text-white rounded-md transition"
        >
          Leave a Review
        </button>
      </div>

      {/* Review Modal */}
      <PostAReview isModalOpen={isModalOpen} handleClose={handleCloseReviewModal} />
    </div>
  );
};

export default ReviewsCard;
