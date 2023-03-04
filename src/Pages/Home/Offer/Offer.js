import React from 'react';
import offerImage from '../../../assets/homepage_banner/offer_image.jpg'

const Offer = () => {
    return (
        <div className='lg:flex justify-between items-center mt-16 w-full'>
            <div className='px-8 md:px-10 lg:px-16 lg:w-1/2 mb-5 lg:mb-0'>
                <h3 className='text-[13px] md:text-[15px] lg:text-[18px] font-semibold'>Massey Collection 2021</h3>
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-semibold mt-5'>Autumn Deal, discounts <span className='font-bold text-[#EB7700]'>up to 20%</span> are waiting for you…</h2>
                <p className='mt-5 opacity-80'>Praesent faucibus, lorem ut sollicitudin dapibus, quam ligula pretium magna, eu congue ex quam ut neque.</p>
                <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded font-semibold mt-5'>Shop Collection</button>
            </div>
            <div className='lg:w-1/2 relative'>
                <img src={offerImage} alt="" />
                <div className='absolute top-5 left-5 bg-white px-4 py-3'>
                    <h4 className='text-[12px]'>Designed by</h4>
                    <h3 className='text-[16px] font-bold'>Clint Dunham - <span className='opacity-80'>France</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Offer;