import React from 'react';
import banner from '../../../assets/homepage_banner/slider2-2.webp'
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <img className='w-full' src={banner} alt="" />
            </div>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
                <h3 className='font-bold text-[10px] md:text-[15px] lg:text-xl text-white'>FURNITURE</h3>
                <h1 className='banner_text text-2xl md:text-4xl lg:text-8xl font-bold text-white'>Design Your Home Now</h1>
                <p className='text-[10px] md:text-[15px] lg:text-xl font-semibold text-black mt-1 md:mt-3 lg:mt-5'>The perfect place for every contemporary furniture store and manufacturer. This is Funio.</p>
                <button className='bg-white text-black border border-white rounded px-2 md:px-3 lg:px-4 py-1 lg:py-2 font-semibold mt-1 md:mt-3 lg:mt-5 text-[12px] md:text-[15px]'>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;