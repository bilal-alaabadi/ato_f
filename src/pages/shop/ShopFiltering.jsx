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
                                    className="h-4 w-4 text-primary focus:ring-primary"
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
                className='bg-primary-dark  py-2 px-4 text-white rounded hover:bg-primary-dark transition duration-300'
            >
                مسح الفلاتر
            </button>
        </div>
                

            </div>
        </div>
    );
};

export default ShopFiltering;


//     <div className='space-y-5 flex-shrink-0 w-64'>

//         {/* الفئات فقط */}
//         <div className='flex flex-col space-y-2'>
//             <h4 className='font-medium'>الفئة</h4>
//             <hr />
//             <div className='space-y-2'>
//                 {categories.map((cat) => (
//                     <label key={cat.value} className='flex items-center cursor-pointer'>
//                         <input 
//                             type="radio" 
//                             name="category" 
//                             value={cat.value} 
//                             checked={filtersState.categories === cat.value}
//                             onChange={(e) => setFiltersState({...filtersState, category: e.target.value})}
//                             className='mr-2'
//                         />
//                         <span>{cat.label}</span>
//                     </label>
//                 ))}
//             </div>
//         </div>
//         <div className='mt-4'>
//             <h3 className='font-medium text-lg'>الفلاتر</h3>
//             <button 
//                 onClick={clearFilters}
//                 className='bg-primary-dark  py-2 px-4 text-white rounded hover:bg-primary-dark transition duration-300'
//             >
//                 مسح الفلاتر
//             </button>
//         </div>
//     </div>
//   )
// }

// export default ShopFiltering