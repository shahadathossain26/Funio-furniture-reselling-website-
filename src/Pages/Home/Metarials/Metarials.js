import React from 'react';
import image1 from '../../../assets/metarials_images/wood.png'
import image2 from '../../../assets/metarials_images/metal.png'
import image3 from '../../../assets/metarials_images/Fabric.png'
import image4 from '../../../assets/metarials_images/concreat.png'
import image5 from '../../../assets/metarials_images/glass.png'
import image6 from '../../../assets/metarials_images/marbel.png'

const Metarials = () => {
    return (
        <div className='lg:flex justify-between items-center mt-28 w-full' data-aos="zoom-in" data-aos-duration="1000">
            <div className='px-8 md:px-10 lg:px-16 lg:w-1/2 mb-5 lg:mb-0'>
                <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-5'>We use high quality Materials</h2>
                <p className='text-[12px] md:text-[14px] lg:text-[18px] opacity-80 mb-5'>Labore voluptas nihil molestiae sint delectus sint sequi volup tatem qia id omnis suscipit</p>
                <p className='text-[12px] md:text-[14px] lg:text-[18px] opacity-80 mb-3'>similique. Vero natus sed animi reiciendis. Ipsum voluptate et non. Est velit et ex laboriosam dolor est inventore quo numquam.</p>
                <button className='text-[12px] md:text-[15px] lg:text-[18px] bg-black text-white px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded font-semibold mt-5'>View More</button>
            </div>
            <div className='lg:w-1/2 grid grid-cols-3 gap-4 px-5 lg:px-0 mt-5 lg:mt-0'>
                <div className='flex flex-col items-center'>
                    <img src={image1} alt="" />
                    <h3 className='text-xl font-semibold mt-2'>Wood</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={image2} alt="" />
                    <h3 className='text-xl font-semibold mt-2'>Metal</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={image3} alt="" />
                    <h3 className='text-xl font-semibold mt-2'>Fabric</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={image4} alt="" />
                    <h3 className='text-xl font-semibold mt-2'>Concreate</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={image5} alt="" />
                    <h3 className='text-xl font-semibold mt-2'>Glass</h3>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={image6} alt="" />
                    <h3 className='text-xl font-semibold mt-2'>Marbel</h3>
                </div>
            </div>
        </div>
    );
};

export default Metarials;