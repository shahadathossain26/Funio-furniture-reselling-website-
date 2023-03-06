import React, { useEffect, useState } from 'react';
import CategoryOption from './CategoryOption';

const ProductCatagory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mt-16'>
            <div className='text-center mb-10'>
                <h3 className='text-[14px] md:text-[16px] lg:text-xl font-semibold'>SEE PRODUCTS BY</h3>
                <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Category</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-8 lg:px-10 mb-28'>
                {
                    categories.map(category => <CategoryOption
                        key={category._id}
                        category={category}
                    ></CategoryOption>)
                }
            </div>
        </div>
    );
};

export default ProductCatagory;