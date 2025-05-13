import React from 'react';

const ShopFiltering = ({ filters, filtersState, setFiltersState, clearFilters }) => {
    return (
        <div className='bg-white   '>


            <div className='space-y-4'>
                <div>
                    <h4 className='font-medium text-lg mb-2'>الفئة</h4>
                    <div className="space-y-2">
                        {filters.categories.map((category) => (
                            <label key={category} className='flex items-center space-x-2 cursor-pointer'>
                                <input
                                    type="radio"
                                    name="category"
                                    value={category}
                                    checked={filtersState.category === category}
                                    onChange={(e) => {
                                        setFiltersState({ ...filtersState, category: e.target.value });
                                    }}
                                    className="h-4 w-4 text-[#e9b86b] focus:ring-[#e9b86b]"
                                />
                                <span>{category}</span>
                            </label>
                        ))}
                    </div>
                </div>

               
                <div className='mt-4'>
            <h3 className='font-medium text-lg'>الفلاتر</h3>
            <button 
                onClick={clearFilters}
                className='bg-[#e9b86b]  py-2 px-4 text-white rounded hover:bg-primary-dark transition duration-300'
            >
                مسح الفلاتر
            </button>
        </div>
                

            </div>
        </div>
    );
};

export default ShopFiltering;


