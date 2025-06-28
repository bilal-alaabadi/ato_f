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
      <section className='section__container mt-10'>
        <div className='flex flex-col items-center md:flex-row gap-10'>
          {/* Tour Images */}
          <div className='md:w-1/2 w-full relative'>
            {singleProduct.image && singleProduct.image.length > 0 ? (
              <>
                <img
                  src={singleProduct.image[currentImageIndex]}
                  alt={singleProduct.name}
                  className='rounded-xl w-full h-auto shadow-md'
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/500";
                    e.target.alt = "Image not found";
                  }}
                />
                {singleProduct.image.length > 1 && (
                  <>
                    <button onClick={prevImage} className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full'>
                      <i className="ri-arrow-left-s-line"></i>
                    </button>
                    <button onClick={nextImage} className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full'>
                      <i className="ri-arrow-right-s-line"></i>
                    </button>
                  </>
                )}
              </>
            ) : (
              <p className="text-red-600">No images available for this tour.</p>
            )}
          </div>

          {/* Tour Info */}
          <div className='md:w-1/2 w-full'>
            {/* <h3 className='text-3xl font-bold text-[#3E4F63] mb-4'>{singleProduct.name}</h3> */}
            {/* <p className='text-xl text-[#e9b86b] font-semibold mb-4'>
              {singleProduct.price} OMR
              {singleProduct.oldPrice && <s className='ml-2 text-gray-500'>{singleProduct.oldPrice} OMR</s>}
            </p> */}

            <p className='text-gray-700 leading-relaxed mb-6'>
              Discover the breathtaking beauty of {singleProduct.name}! This tour is perfect for adventure lovers,
              nature enthusiasts, and cultural explorers. Enjoy unforgettable landscapes, local experiences,
              and relaxing escapes all in one package.
            </p>

            <ul className='list-disc pl-6 text-gray-600 mb-6 space-y-2'>
              <li>3-night stay in a luxury hotel</li>
              <li>All-inclusive daily meals</li>
              <li>Professional tour guide throughout the trip</li>
              <li>Private airport pickup & drop-off</li>
              <li>Outdoor activities: hiking, waterfalls, and cultural exploration</li>
            </ul>

            <div className='flex flex-col space-y-2 text-sm text-gray-500'>
              {/* <p><strong>Category:</strong> {singleProduct.category}</p> */}
              <p><strong>Theme:</strong> {singleProduct.color}</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(singleProduct);
              }}
              className='mt-6 px-6 py-3 bg-[#3E4F63] hover:bg-[#2f3c4a] text-white rounded-md text-lg transition'
            >
              Book Now
            </button>
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
