import React from 'react';
import decoCollection from '../../../assets/special_offer.webp'
import './DecoCollection.css'

const DecoCollection = () => {
    return (
        <div className='mt-16 relative'>
            <div className='lg:absolute top-3 left-3 md:top-7 md:left-7 lg:top-10 lg:left-16 lg:w-3/5 w-full mt-5 md:mt-10 lg:mt-0 px-10 lg:px-0 mb-5 lg:mb-0'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-5 text-center lg:text-start'>Deco Collection <span className='text-[#FF0000]'>50% OFF</span></h2>
                <p className='text-xl text-black mb-5 md:mb-10 lg:mb-16 text-justify lg:text-start'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced for those. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum</p>
                <div className='flex mb-3 md:mb-6 lg:mb-10'>
                    <div className='flex flex-col items-center mr-10'>
                        <span className='text-2xl md:text-4xl lg:text-6xl font-semibold'>00</span>
                        <span className='text-[15px] md:text-[18px] lg:text-xl'>Days</span>
                    </div>

                    <div className='flex flex-col items-center mr-10'>
                        <span className='text-2xl md:text-4xl lg:text-6xl font-semibold'>00</span>
                        <span className='text-[15px] md:text-[18px] lg:text-xl'>Hours</span>
                    </div>

                    <div className='flex flex-col items-center mr-10'>
                        <span className='text-2xl md:text-4xl lg:text-6xl font-semibold'>00</span>
                        <span className='text-[15px] md:text-[18px] lg:text-xl'>Mints</span>
                    </div>

                    <div className='flex flex-col items-center mr-10'>
                        <span className='text-2xl md:text-4xl lg:text-6xl font-semibold'>00</span>
                        <span className='text-[15px] md:text-[18px] lg:text-xl'>Secs</span>
                    </div>
                </div>
                <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded font-semibold mt-5'>Shop Now</button>
            </div>

            <div>
                <img src={decoCollection} alt="" />
            </div>
        </div>
    );
};

export default DecoCollection;