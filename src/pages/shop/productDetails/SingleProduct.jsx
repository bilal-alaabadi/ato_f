import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { addToCart } from '../../../redux/features/cart/cartSlice';
import ReviewsCard from '../reviews/ReviewsCard';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);
  const { user } = useSelector((state) => state.auth);

  const singleProduct = data?.product || {};
  const productReviews = data?.reviews || [];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAddToCart = (product) => {
    if (!user) {
      navigate('/login');
      return;
    }
    dispatch(addToCart(product));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === singleProduct.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? singleProduct.image.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tour details.</p>;

  return (
    <>
      {/* Header Section */}
     

      {/* Tour Details */}
<section className="bg-[#f6f6f1] py-12">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Tour Images */}
      <div className="md:w-1/2 relative">
        {singleProduct.image && singleProduct.image.length > 0 ? (
          <div className="relative h-full">
            <img
              src={singleProduct.image[currentImageIndex]}
              alt={singleProduct.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x500?text=Tour+Image";
                e.target.alt = "Image not available";
              }}
            />
            {singleProduct.image.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button 
                  onClick={prevImage}
                  className="bg-[#3a4a62] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition"
                >
                  <i className="ri-arrow-left-s-line text-xl"></i>
                </button>
                <button 
                  onClick={nextImage}
                  className="bg-[#3a4a62] bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition"
                >
                  <i className="ri-arrow-right-s-line text-xl"></i>
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">No images available</p>
          </div>
        )}
      </div>

      {/* Tour Info */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center" >
        <div className="flex justify-center">
  <h2 className="text-3xl font-bold text-[#3a4a62] mb-4">
    {singleProduct.name}
  </h2>
</div>

       <div className='mb-6'>
    <h4 className='text-lg font-bold text-gray-800 mb-2' dir='rtl'>description:</h4>
    <div className="text-gray-600 leading-relaxed whitespace-pre-line" dir='rtl'>
        {singleProduct.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
    </div>
</div>
      </div>
    </div>
  </div>
</section>

      {/* Reviews Section */}
      <section className='section__container mt-16'>
        <h3 className='text-2xl font-bold text-[#3E4F63] mb-4'>Traveler Reviews</h3>
        <ReviewsCard productReviews={productReviews} />
      </section>
    </>
  );
};

export default SingleProduct;
