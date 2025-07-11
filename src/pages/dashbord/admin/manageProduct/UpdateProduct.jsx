import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchProductByIdQuery, useUpdateProductMutation } from '../../../../redux/features/products/productsApi'
import { useSelector } from 'react-redux';
import TextInput from '../addProduct/TextInput';
import UploadImage from '../addProduct/UploadImage';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        image: ''
    });

    const { data: productData, isLoading: isProductLoading, error: fetchError, refetch } = useFetchProductByIdQuery(id);
    const [newImage, setNewImage] = useState(null);
    const { name, description, image: imageURL } = productData?.product || {};

    const [updateProduct, { isLoading: isUpdating, error: updateError }] = useUpdateProductMutation();

    useEffect(() => {
        if (productData) {
            setProduct({
                name: name || '',
                description: description || '',
                image: imageURL || ''
            });
        }
    }, [productData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleImageChange = (image) => {
        setNewImage(image);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        if (newImage) {
            formData.append('image', newImage);
        }
        formData.append('author', user._id);

        try {
            await updateProduct({
                id: id,
                body: formData,
            }).unwrap();

            alert('تم تحديث المنتج بنجاح');
            await refetch();
            navigate("/dashboard/manage-products");
        } catch (error) {
            console.error('Failed to update product:', error);
            if (error.status === 401) {
                alert('انتهت صلاحية الجلسة، يرجى تسجيل الدخول مرة أخرى');
                navigate('/login');
            } else {
                alert('فشل تحديث المنتج: ' + (error.data?.message || error.message));
            }
        }
    };

    if (isProductLoading) return <div>تحميل ...</div>;
    if (fetchError) return <div>Error fetching product!...</div>;

    return (
        <div className='container mx-auto mt-8'>
            <h2 className='text-2xl font-bold mb-6'>تحديث </h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <TextInput
                    label="أسم "
                    name="name"
                    placeholder="Ex: Diamond Earrings"
                    value={product.name}
                    onChange={handleChange}
                />

                <UploadImage
                    name="image"
                    id="image"
                    value={newImage || product.image}
                    placeholder='Image'
                    setImage={handleImageChange}
                />

<div>
    <label htmlFor="description" className='block text-sm font-medium text-gray-700'>الوصف</label>
    <textarea
        name="description"
        id="description"
        className='add-product-InputCSS min-h-[150px] w-full'
        value={product.description}
        placeholder='Write a product description'
        onChange={handleChange}
        style={{ minHeight: '150px', height: '200px', resize: 'vertical' }}
    ></textarea>
</div>

                <div>
                    <button
                        type='submit'
                        className='add-product-btn'
                        disabled={isUpdating}
                    >
                        {isUpdating ? 'جار التحديث...' : 'تحديث المنتج'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;