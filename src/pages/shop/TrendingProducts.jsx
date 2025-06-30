import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const {
    data: { products = [], totalPages, totalProducts } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: '',
    color: '',
    minPrice: '',
    maxPrice: '',
    page: 1,
    limit: 20,
  });

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">An error occurred while fetching data.</div>;
  }

  return (
    <section className="bg-[#F5F5EF] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#3E4F63] mb-6 text-center">Top Selling Tours</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" dir="rtl">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product._id} className="rounded-xl shadow-md bg-[#F5F5EF] overflow-hidden">
              <Link to={`/shop/${product._id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image[0]}
                    alt="product image"
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300';
                      e.target.alt = 'Image not found';
                    }}
                  />
                </div>
              </Link>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-[#3E4F63]">{product.name}</h4>


              </div>
            </div>
          ))}
        </div>

        {visibleProducts < products.length && (
          <div className="text-center mt-10">
            <button
              className="bg-[#3E4F63] hover:bg-[#2f3c4a] text-white px-6 py-2 rounded-full transition"
              onClick={loadMoreProducts}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
