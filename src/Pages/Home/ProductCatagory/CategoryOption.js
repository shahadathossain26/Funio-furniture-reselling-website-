import React from 'react';
import './CategoryOption.css'
const CategoryOption = ({ category }) => {
    const { name, image } = category;
    return (
        <div className="card bg-base-100">

            <div className=' relative container'>
                <img className='w-full' src={image} alt="" />
                <div className='overly'>
                    <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-white text-black px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded font-semibold mt-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-black'>See All</button>
                </div>
            </div>
            <h3 className='mt-3 text-xl font-semibold text-center'>{name}</h3>

        </div>
    );
};

export default CategoryOption;