import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextInput from './TextInput';
import UploadImage from './UploadImage';
import { useAddProductMutation } from '../../../../redux/features/products/productsApi';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { user } = useSelector((state) => state.auth);

    const [product, setProduct] = useState({
        name: '',
        description: ''
    });
    const [image, setImage] = useState([]);

    const [AddProduct, { isLoading, error }] = useAddProductMutation();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!product.name || !product.description || image.length === 0) {
            alert('أملأ كل الحقول');
            return;
        }

        try {
            await AddProduct({ ...product, image, author: user?._id }).unwrap();
            alert('تمت أضافة المنتج بنجاح');
            setProduct({
                name: '',
                description: ''
            });
            setImage([]);
            navigate("/");
        } catch (error) {
            console.log("Failed to submit product", error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-6">أضافة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextInput
                    label="أسم "
                    name="name"
                    placeholder="أكتب أسم المنتج"
                    value={product.name}
                    onChange={handleChange}
                />
                
                <UploadImage
                    name="image"
                    id="image"
                    setImage={setImage}
                />
                
<div className="mb-4">
    <label htmlFor="description" className='block text-sm font-medium text-gray-700 mb-2'>الوصف</label>
    <textarea
        name="description"
        id="description"
        className='w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[200px]'
        value={product.description}
        placeholder='Write a product description'
        onChange={handleChange}
        rows="8"
    ></textarea>
</div>
                
                <div>
                    <button type='submit' className='add-product-btn' disabled={isLoading}>
                        {isLoading ? "جاري الإضافة..." : "أضف منتج"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;