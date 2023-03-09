import React from 'react';
import image1 from '../../../assets/information_images/image1.jpg'
import image2 from '../../../assets/information_images/image2.jpg'

const About = () => {
    return (
        <div className='mt-20 lg:px-20 px-5 md:px-10'>
            <div className='lg:flex justify-between items-center w-full overflow-x-hidden'>
                <div className='lg:w-1/2' data-aos="fade-down-left" data-aos-duration="1000">
                    <img src={image1} alt="" />
                </div>
                <div className='lg:w-1/2 lg:px-16 mt-5 lg:mt-0' data-aos="fade-down-right" data-aos-duration="1000">
                    <h4 className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>MORE ABOUT OUR PROCESS</h4>
                    <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold my-5'>Simply great & crafted by hand</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Nunc scelerisque.</p>
                    <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded font-semibold mt-10'>View More</button>
                </div>
            </div>

            <div className='lg:flex justify-between items-center w-full overflow-x-hidden'>
                <div className='lg:w-1/2 lg:px-16 mt-16 mb-5 lg:mt-0 md:px-10' data-aos="fade-up-left" data-aos-duration="1000">
                    <h4 className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>BEST WAY TO SHOP</h4>
                    <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold my-5'>Experience custom made items</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet. Nunc scelerisque.</p>
                    <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded font-semibold mt-10'>View More</button>
                </div>
                <div className='lg:w-1/2' data-aos="fade-up-right" data-aos-duration="1000">
                    <img src={image2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;